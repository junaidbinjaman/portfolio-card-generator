import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import SlugContextProvider from './contexts/SlugContext.tsx';
import LogoSrcContextProvider from './contexts/LogoSrcContext.tsx';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser.ts');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <SlugContextProvider>
        <LogoSrcContextProvider>
          <App />
        </LogoSrcContextProvider>
      </SlugContextProvider>
    </StrictMode>,
  );
});
