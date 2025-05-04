import PrimaryHeading from '../components/PrimaryHeading';
import { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import LoadingScreen from '../components/LoadingScreen';
import { motion } from 'motion/react';

interface APIResponseDataTypes {
  id: number;
  publishDate: string;
  lastModification: Date;
  content: string;
}

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [content, setContent] = useState<APIResponseDataTypes | null>(null);
  const cache = useRef<APIResponseDataTypes | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (cache.current) {
      setContent(cache.current);
      return;
    }

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 5000);

    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/pages/privacy-policy`, {
          signal,
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data: APIResponseDataTypes = await response.json();

        if (!data.content || !data.lastModification) {
          console.warn('Invalid data');
          return;
        }

        cache.current = data;
        setContent(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.name + ': ' + error.message);
          return;
        }

        console.error('Unknown error');
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }

      return () => {
        clearTimeout(timeoutId);
      };
    })();
  }, []);

  console.log('content', content?.content);

  const pageContent = (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.4 }}
      className="w-5xl mx-auto my-10"
    >
      <PrimaryHeading level={2}>Privacy Policy</PrimaryHeading>
      <Markdown>{content?.content ? content?.content : 'No content found'}</Markdown>
    </motion.section>
  );

  return (
    <>
      <title>Privacy Policy</title>
      {loading ? <LoadingScreen /> : pageContent}
    </>
  );
};

export default PrivacyPolicy;
