import axios from 'axios';

const apiRootUrl = process.env.REACT_APP_API_ROOT_URL || "http://localhost:8000"
// 'https://backend-edudesks-vgj7.onrender.com';

export interface ApiRequestHeaders {
  [key: string]: string | number | boolean;
}

export const makeApiCall = async (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data: any = {},
  headers: ApiRequestHeaders = {},
) => {
  console.log("Something is going on")
  try {
    const config: any = {
      method,
      url: `${apiRootUrl}${url}`,
      headers,
      withCredentials: true,
      timeout: 60000,
    };


    if (method !== 'GET') {
      config.data = data;
    }

    // Log the request configuration in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log('API Request Config:', config);
    }

    // Make the API request using Axios
    const response = await axios(config);

    // Return the response data
    return response.data;
  } catch (error) {
    console.log(error)
    // Handle Axios errors
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return Promise.reject(
          `Error ${error.response.status}: ${error.response.data.message || 'An error occurred'}`
        );
      } else if (error.request) {
        return Promise.reject('No response from the server. Please try again.');
      } else if (error.code === 'ECONNABORTED') {
        // Request timed out
        return Promise.reject('Request timed out. Please try again.');
      }
    }

    // Unknown error
    console.error('Unknown API Error:', error);
    return Promise.reject('An error occurred during the API call. Please try again.');
  }
};
