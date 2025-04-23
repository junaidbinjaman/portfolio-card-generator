import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';

export default function App() {
  return (
    <div className="bg-primary-bg">
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
