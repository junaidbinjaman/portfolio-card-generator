import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

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

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/slugs`);
        const data: SlugTypes[] = await response.json();

        const map = new Map<string, string>();
        data.map((item) => {
          map.set(item.title, item.slug);
        });

        setSlugsMap(map);
      } catch (error) {
        console.log(error);
      } finally {
        seIsLoading(false);
      }
    })();
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
