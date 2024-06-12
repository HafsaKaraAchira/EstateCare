import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PropertyManagementPage from './pages/PropertyManagementPage';
import TenantManagementPage from './pages/TenantManagementPage';
import ReportsPage from './pages/ReportsPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './routes/PrivateRoute';
import './index.css'; // Tailwind CSS import

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/properties" component={PropertyManagementPage} />
          <PrivateRoute path="/tenants" component={TenantManagementPage} />
          <PrivateRoute path="/reports" component={ReportsPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
