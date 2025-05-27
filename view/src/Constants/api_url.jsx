const api_url = import.meta.env.VITE_BACKEND_URL;

export const apiData = {
  addUser: `${api_url}/api/addUser`,
  getUser: `${api_url}/api/getUser`,
  startChat: `${api_url}/api/startConversation`,
  getChat: `${api_url}/api/getConversation`,

  // send message
  newMessageSend: `${api_url}/api/newMessage`,
  getMessages: `${api_url}/api/getMessages`,
  uploadFiles: `${api_url}/api/uploadFile`,
};
