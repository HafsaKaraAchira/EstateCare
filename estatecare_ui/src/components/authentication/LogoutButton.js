import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            await axios.post('/api/logout');
            // Clear the token from local storage
            localStorage.removeItem('token');
            // Redirect to login page
            window.location = '/login';
        } catch (err) {
            console.error('Logout failed', err);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>
                <LogoutIcon />
            </button>
        </div>
    );
};

export default LogoutButton;