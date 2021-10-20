const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const request = async (path: string, params: any) => {
  try {
    const performRequest = () => {
      return fetch(API_BASE_URL + path, {
        ...params,
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": API_KEY,
        },
      });
    };

    const response = await performRequest();

    const data = await response.json();
    if (!response.ok) {
      return Promise.reject({
        response: { ok: response.ok, status: response.status },
        data,
      });
    }
    return { response: { ok: response.ok, status: response.status }, data };
  } catch (error) {
    throw { response: null, data: null, originalError: error };
  }
};

const api = {
  request,
};
export default api;
