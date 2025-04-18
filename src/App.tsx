import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RoutesProvider from './contexts/RoutesProvider';

export default function App() {
  return (
    <div className="bg-primary-bg">
      <RoutesProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="password-reset"
              element={<PasswordReset />}
            />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route
              path="privacy-policy"
              element={<PrivacyPolicy />}
            />
          </Routes>
        </BrowserRouter>
      </RoutesProvider>
    </div>
  );
}
