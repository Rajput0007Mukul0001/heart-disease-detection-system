'use client';

import { useAuth } from '../contexts/AuthContext';
import LoginForm from './LoginForm';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return children;
};

export default ProtectedRoute;
