import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Route path={path} element={isAuthenticated ? element : <Navigate to="/login" replace />} />
  );
};

export default PrivateRoute;