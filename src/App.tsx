import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <div className='bg-primary-bg'>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
