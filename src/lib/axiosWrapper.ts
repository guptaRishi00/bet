import { BASE_URL } from '@/constants/common';
import { PATH } from '@/constants/routes';
import { getCookies, removeAllCookies } from '@/lib/cookies';
import axios from 'axios';

const createAxiosInstance = ({ baseUrl }: { baseUrl: string }) => {
  const {
    auth: { accessToken },
  } = getCookies();
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      // Retrieve cookies and add them to the headers
      const {
        auth: { accessToken },
      } = getCookies();
      if (accessToken) {
        config.headers.set('Authorization', `${accessToken}`);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle errors here
      const { response } = error;

      // Check if the error status is 401 (Unauthorized)
      if (response && response.status === 401) {
        // Remove specified cookies
        removeAllCookies();
        // Redirect to the sign-in page if not already there
        if (window.location.pathname !== PATH.SIGN_IN) {
          window.location.href = PATH.SIGN_IN; // Adjust the path based on your routing
        }
      }

      // Return a rejected promise to propagate the error
      return Promise.reject(error);
    },
  );

  return instance;
};

// Please use the above axiosWithBaseUrl for cal requiring base url
// For all calls that don't require base url use normal axios
export const axiosWithBaseUrl = createAxiosInstance({
  baseUrl: BASE_URL,
});
