import { useState } from 'react';
import axios from 'axios';

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = async (email, password) => {
        const response = await axios.post('/api/login', { email, password });
        setUser(response.data.user);
        setToken(response.data.token);
    };

    const logout = async () => {
        await axios.post('/api/logout', { token });
        setUser(null);
        setToken(null);
    };

    const refreshToken = async () => {
        const response = await axios.post('/api/refresh-token', { token });
        setToken(response.data.token);
    };

    return { user, token, login, logout, refreshToken };
}