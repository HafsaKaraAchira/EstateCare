import axios from 'axios';

const baseURL = process.env.BASE_URL || 'http://localhost:3033/api';

const api = axios.create({
    baseURL: baseURL
});

// Function to refresh token
const refreshToken = async () => {
    try {
        // Get the refresh token from local storage
        const refreshToken = localStorage.getItem('refreshToken');

        // Send a request to the refresh token endpoint
        const response = await api.post('/users/refresh-token', {
            token: refreshToken,
        });

        // Store new tokens
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        // Return the new access & refresh tokens
        return response.data.accessToken;
    } catch (error) {
        console.error('Error refreshing token:', error);
        //rethrow error
        throw error;
    }
};

// Request interceptor to add the token to every request
api.interceptors.request.use((config) => {
    // Check if the request is not for the login endpoint
    if (!config.url.endsWith('users/login')) {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response interceptor to handle 401 Unauthorized responses
api.interceptors.response.use(response => response, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        // Marking request as retried
        originalRequest._retry = true;
        // Refresh the token
        try {
            // await the refreshToken call
            const { accessToken } = await refreshToken();

            // Retry the original request with the new token
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return api(originalRequest); 
        } catch (error) {
            // Handle token refresh error, redirect to login
            window.location.href = '/login';
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
});

export default api;