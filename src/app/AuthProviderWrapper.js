'use client';

import { AuthProvider } from '../contexts/AuthContext';

const AuthProviderWrapper = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default AuthProviderWrapper;
