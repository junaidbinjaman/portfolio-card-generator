import React, { memo, useRef } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface LogoSrcContextProviderProps {
  children: React.ReactNode;
}

interface APIResponse {
  logoSrc: string;
  alt: string;
}

const DEFAULT_LOGO = { logoSrc: '/public/portfolio-card-generator-logo.png', alt: 'Default Logo' };
const LogoSrcContext = createContext<APIResponse | null>(null);

const LogoSrcContextProvider = memo(({ children }: LogoSrcContextProviderProps) => {
  const [logoSrc, setLogoSrc] = useState<APIResponse | null>(DEFAULT_LOGO);
  const cache = useRef<APIResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (cache.current) {
      setLogoSrc(cache.current);
      return;
    }

    const timeOutId = setTimeout(() => {
      controller.abort();
    }, 5000);

    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/logo`, {
          signal: signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch logo: ${response.statusText}`);
        }

        const data: APIResponse = await response.json();

        if (data.logoSrc && data.alt) {
          cache.current = data;
          setLogoSrc(data);
        } else {
          console.warn('Invalid API response structure:', data);
        }
      } catch (error) {
        console.error('Error fetching logo:', error);
      } finally {
        clearTimeout(timeOutId);
      }
    })();

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return <LogoSrcContext.Provider value={logoSrc}>{children}</LogoSrcContext.Provider>;
});

export default LogoSrcContextProvider;

export const useLogoSrc = () => {
  const context = useContext(LogoSrcContext);

  if (!context) throw new Error('useLogoSrc cannot be used outside provider');

  return context;
};
