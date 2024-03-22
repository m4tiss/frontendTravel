import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuth } = useAuth();

  return (
    <Route
      element={isAuth() ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;