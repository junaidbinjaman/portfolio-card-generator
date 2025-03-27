import { createContext, useContext, useEffect, useState } from 'react';

interface LogoSrcContextProviderProps {
  children: React.ReactNode;
}

interface APIResponse {
  logoSrc: string;
  alt: string;
}

const LogoSrcContext = createContext<APIResponse | null>(null);

const LogoSrcContextProvider = ({ children }: LogoSrcContextProviderProps) => {
  const [logoSrc, setLogoSrc] = useState<APIResponse | null>({ logoSrc: '/public/portfolio-card-generator-logo.png', alt: 'Default Logo' });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/logo`);
        if (!response.ok) {
          throw new Error(`Failed to fetch logo: ${response.statusText}`);
        }
        const data: APIResponse = await response.json();
        setLogoSrc(data);
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    })();
  }, []);

  return <LogoSrcContext.Provider value={logoSrc}>{children}</LogoSrcContext.Provider>;
};

export default LogoSrcContextProvider;

export const useLogoSrc = () => {
  const context = useContext(LogoSrcContext);

  if (!context) throw new Error('useLogoSrc cannot be used outside provider');

  return context;
};
