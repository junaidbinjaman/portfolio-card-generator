import { Link } from 'react-router';
import PrimaryHeading from '../components/PrimaryHeading';
import { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';
import { motion } from 'motion/react';
import LoadingScreen from '../components/LoadingScreen';

interface APIResponseDataTypes {
  id: number;
  publishDate: string;
  lastModification: Date;
  author: string;
  content: string;
}

const TermsAndConditions = () => {
  const [content, setContent] = useState<APIResponseDataTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/pages/terms-and-conditions`, {
          signal,
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data: APIResponseDataTypes = await response.json();

        if (!data.author && data.content && data.lastModification) {
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
        setLoading(true);
      }
    })();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const pageContent = (
    <>
      <title>Terms & conditions</title>
      <section className="max-w-4xl mt-8">
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <PrimaryHeading
            level={1}
            classes="text-text"
          >
            Terms and Conditions
          </PrimaryHeading>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Markdown>{content?.content ? content?.content : 'No content found'}</Markdown>
          </motion.div>
        </div>
      </section>
    </>
  );

  return loading ? <LoadingScreen /> : pageContent;
};

export default TermsAndConditions;
