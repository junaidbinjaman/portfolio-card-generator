import React, {memo} from 'react';
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

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout

    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/logo`, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Failed to fetch logo: ${response.statusText}`);
        }
        const data: APIResponse = await response.json();

        if (data.logoSrc && data.alt) {
          setLogoSrc(data);
        } else {
          console.warn('Invalid API response structure:', data);
        }
      } catch (error) {
        // @ts-expect-error expect name error
        if (error.name === 'AbortError') {
          console.error('Fetch request timed out');
        } else {
          console.error('Error fetching logo:', error);
        }
      } finally {
        clearTimeout(timeoutId);
      }
    })();

    return () => controller.abort();
  }, []);

  return <LogoSrcContext.Provider value={logoSrc}>{children}</LogoSrcContext.Provider>;
});

export default LogoSrcContextProvider;

export const useLogoSrc = () => {
  const context = useContext(LogoSrcContext);

  if (!context) throw new Error('useLogoSrc cannot be used outside provider');

  return context;
};
