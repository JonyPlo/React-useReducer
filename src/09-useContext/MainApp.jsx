import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar, HomePage, AboutPage, LoginPage } from './';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<Navigate to='about' />} />
      </Routes>
    </UserProvider>
  );
};
