import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Route path={path} element={isAuthenticated ? element : <Navigate to="/login" replace />} />
  );
};


// const PrivateRoute = ({ children, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token');
//   const location = useLocation();

//   return isAuthenticated ? (
//     children
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

export default PrivateRoute;