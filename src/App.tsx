import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useSlug } from './contexts/SlugContext';
import NotFound404 from './pages/404';
import Header from './components/Header';

export default function App() {
  const passwordResetPageSlug = useSlug('Password Reset');
  const loginPageSlug = useSlug('Login');
  const termsAndConditionsPageSlug = useSlug('Terms & conditions');
  const privacyPolicyPageSlug = useSlug('Privacy Policy');
  console.log(termsAndConditionsPageSlug);

  return (
    <div className="bg-primary-bg">
      <BrowserRouter>
        <Routes>
          <Route
            path={loginPageSlug}
            element={<Login />}
          />
          <Route
            path={passwordResetPageSlug}
            element={<PasswordReset />}
          /> 
          <Route element={<Header />}>
            <Route
              path={termsAndConditionsPageSlug}
              element={<TermsAndConditions />}
            />
            <Route
              path={privacyPolicyPageSlug}
              element={<PrivacyPolicy />}
            />
            </Route>
          
          <Route
            path="*"
            element={<NotFound404 />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
