import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PropertyIcon from '@mui/icons-material/List';
import PeopleIcon from '@mui/icons-material/People';
import ReportIcon from '@mui/icons-material/Report';
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {
    const location = useLocation();
    // Don't render the NavBar on the login page
    if (location.pathname === '/login') {
        return null;
    }

    return (
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-blue-500">
            <div>
                <Link to="/">
                    <HomeIcon />
                </Link>
            </div>
            <div>
                <Link to="/dashboard" className="mx-2">
                    <DashboardIcon />
                    Dashboard
                </Link>
                <Link to="/properties" className="mx-2">
                    <PropertyIcon />
                    Properties
                </Link>
                <Link to="/tenants" className="mx-2">
                    <PeopleIcon />
                    Tenants
                </Link>
                <Link to="/reports" className="mx-2">
                    <ReportIcon />
                    Reports
                </Link>
            </div>
            <div>
                <button onClick={() => { /* Add logout functionality here */ }}>
                    <LogoutIcon />
                </button>
            </div>
        </nav>
    );
};

export default Header;