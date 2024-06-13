import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import DashboardPage from './pages/DashboardPage';
// import PropertyManagementPage from './pages/PropertyManagementPage';
// import TenantManagementPage from './pages/TenantManagementPage';
// import ReportsPage from './pages/ReportsPage';
import LoginPage from './pages/LoginPage';
// import PrivateRoute from './routes/PrivateRoute';
// import Header from './components/common/Header';
import './index.css'; // Tailwind CSS import

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <PrivateRoute path="/dashboard" element={<DashboardPage />} /> */}
          {/* <PrivateRoute path="/properties" element={<PropertyManagementPage />} /> */}
          {/* <PrivateRoute path="/tenants" element={<TenantManagementPage />} /> */}
          {/* <PrivateRoute path="/reports" element={<ReportsPage />} /> */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
