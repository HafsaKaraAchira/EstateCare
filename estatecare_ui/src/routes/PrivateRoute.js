import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const location = useLocation();

  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;