import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';
import { CoursesPage } from './pages/CoursesPage';
import { Error404Page } from './pages/Error404Page';
import { ProtectedRoutes } from './routes/ProtectedRoutes';

import './App.css';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />,
//   },
//   {
//     path: '/login',
//     element: <LoginPage />,
//   },
//   {
//     path: '/admin',
//     element: <AdminPage />,
//   },
// ]);

function App() {
  const [user, setUser] = useState({
    id: '7fe0',
    name: 'Nicolas',
    email: 'mentor@gmail.com',
    password: '123456',
    role: 'ADMIN',
  });

  console.log('User login: ', user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage setUser={setUser} />} />
        <Route
          path='/admin'
          element={
            <ProtectedRoutes role={'ADMIN'} user={user}>
              <AdminPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path='/courses'
          element={
            <ProtectedRoutes user={user}>
              <CoursesPage />
            </ProtectedRoutes>
          }
        />

        <Route path='*' element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
