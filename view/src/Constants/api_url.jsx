const api_url = import.meta.env.VITE_BACKEND_URL;

export const apiData = {
  addUser: `${api_url}/api/addUser`,
  getUser: `${api_url}/api/getUser`,
};
