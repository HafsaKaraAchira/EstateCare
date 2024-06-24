import { useState, useEffect } from 'react';
// import axios from 'axios';
import api from '../api/api'; // Import the api instance

export default function useAuth() {

    // const API_BASE_URL =  process.env.API_BASE_URL || 'http://localhost:3033/api' ;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('accessToken')); //useState(null);
    const [loginError, setLoginError] = useState(null); // Add state to track login errors

    useEffect(() => {
        if (token)
            autoLogin();
    }, [token]);

    const autoLogin = async () => {
        const storedToken = localStorage.getItem('accessToken');
        if (!storedToken) {
            console.log('No token found in local storage.');
            return;
        }

        try {
            // Assuming your API has an endpoint to validate tokens
            const response = await api.get('/users/validate-token', {
                headers: { Authorization: `Bearer ${storedToken}` },
            });
            if (response.data.user) {
                setUser(response.data.user);
                setToken(storedToken);
                console.log('Auto-login successful.');
            } else {
                localStorage.removeItem('accessToken'); // Clear invalid token from local storage
                console.error('Stored token is invalid.');
                setLoginError('Stored token is invalid.');
            }
        } catch (error) {
            localStorage.removeItem('accessToken'); // Clear token from local storage on error
            console.error('Auto-login failed:', error);
            setLoginError(`Stored token is invalid. ${error.message}`);
        }
    };

    const login = async (email, password, rememberMe) => {
        try {
            const response = await api.post('/users/login', { email, password, rememberMe });
            // On success, set user and token, clear loginError
            setUser(response.data.user);
            setToken(response.data.accessToken);

            // Optionally, store the token in localStorage if rememberMe is true
            // if (rememberMe) 
            // Store new tokens
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            setLoginError(null); // Reset login error on successful login
        } catch (error) {
            // Handle login failure (e.g., show a message to the user)
            console.error('Login failed:', error);
            setLoginError(error); // Update login error state
            throw error; // Rethrow for custom handling in components
        }
    };

    const logout = async () => {
        await api.post('/users/logout', { token });
        setUser(null);
        setToken(null);
        localStorage.removeItem('accessToken'); // Clear token from local storage
        localStorage.removeItem('refreshToken'); // Clear token from local storage
    };

    return { user, token, loginError, login, logout};
}