import React, { createContext, useContext, useEffect, useState } from 'react';

interface RoutesContextType {
  privacyPolicy: string;
  termsAndConditions: string;
}

const RoutesContext = createContext<RoutesContextType>({
  privacyPolicy: '',
  termsAndConditions: '',
});

const RoutesProvider = ({ children }: { children: React.ReactNode }) => {
  const [routes, setRoutes] = useState<RoutesContextType>({
    privacyPolicy: 'privacy-policy',
    termsAndConditions: 'terms-and-conditions',
  });

  useEffect(() => {
    setRoutes({
      privacyPolicy: 'privacy-policy',
      termsAndConditions: 'terms-and-conditions',
    });
  }, []);

  return <RoutesContext.Provider value={routes}>{children}</RoutesContext.Provider>;
};

export default RoutesProvider;

export const useRoutes = () => useContext(RoutesContext);
