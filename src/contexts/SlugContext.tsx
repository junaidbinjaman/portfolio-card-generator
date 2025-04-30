import React, { createContext, useContext, useEffect, useState, useMemo, useRef } from 'react';

type SlugTypes = {
  pageId: number;
  slug: string;
  title: string;
};

type SlugContextType = {
  slugsMap: Map<string, string>;
  isLoading: boolean;
};

const SlugContext = createContext<SlugContextType | undefined>(undefined);

const SlugContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [slugsMap, setSlugsMap] = useState<Map<string, string>>(new Map());
  const [isLoading, seIsLoading] = useState(true);
  const cache = useRef<Map<string, string> | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (cache.current) {
      setSlugsMap(cache.current);
      return;
    }

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 5000);

    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/slugs`, { signal });
        const data: SlugTypes[] = await response.json();

        const map = new Map<string, string>();
        data.forEach((item) => {
          map.set(item.title, item.slug);
        });

        cache.current = map;
        setSlugsMap(map);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.log('Fetch request aborted due to timeout');
          } else {
            console.error('Error fetching slugs:', error.message);
          }
        } else {
          console.error('Unknown error:', error);
        }
      } finally {
        seIsLoading(false);
        clearTimeout(timeoutId);
      }
    })();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const value = useMemo(() => ({ slugsMap, isLoading }), [slugsMap, isLoading]);

  return <SlugContext.Provider value={value}>{children}</SlugContext.Provider>;
};

export default SlugContextProvider;

export const useSlug = (pageTitle: string) => {
  const context = useContext(SlugContext);

  if (!context) {
    throw new Error('useSlug must be used within a SlugContextProvider');
  }

  const { slugsMap, isLoading } = context;

  if (isLoading) return 'loading';

  return slugsMap.get(pageTitle) || '404';
};
