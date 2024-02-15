import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({ children, user, role }) => {
  if (!user) {
    return <Navigate to='/' />;
  }

  if (role) {
    if (role !== user.role) {
      return <Navigate to='/' />;
    }
    return children;
  }

  return children;
};
