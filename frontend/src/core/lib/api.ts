import axios from 'axios';

/**
 * @singleton apiClient
 * @summary Singleton Axios instance for making API requests.
 * @type api-client
 * @category core-library
 */
export const apiClient = axios.create({
  baseURL: '/api/external',
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors for handling auth tokens, errors, etc.
apiClient.interceptors.response.use(
  (response) => {
    // The backend wraps successful responses in a `data` object.
    return response.data.data;
  },
  (error) => {
    // The backend wraps error responses in an `error` object.
    const errorMessage = error.response?.data?.error?.message || error.message;
    return Promise.reject(new Error(errorMessage));
  }
);
