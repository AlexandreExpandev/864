import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

/**
 * @singleton apiClient
 * @summary Singleton Axios instance for making API requests.
 * @type api-client
 * @category core-library
 */
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors for handling auth tokens, errors, etc.
apiClient.interceptors.response.use(
  (response) => response.data, // Return the data part of the response
  (error) => {
    // Handle errors globally
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);
