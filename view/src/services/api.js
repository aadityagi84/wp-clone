import axios from "axios";
import { apiData } from "../Constants/api_url";

export const addUser = async (data) => {
  try {
    const response = await axios.post(apiData.addUser, data);
    console.log(response);
  } catch (error) {
    console.log("Error while add user api work", error);
  }
};

export const getUser = async () => {
  try {
    const getResponse = await axios.get(apiData.getUser);
    // console.log(getResponse.data.userData, "get user data");
    return getResponse.data.userData;
  } catch (error) {
    console.log("Error while get user api work", error);
  }
};

export const startConversation = async (data) => {
  try {
    const response = await axios.post(apiData.startChat, data);
    console.log(response, "start conversation data");
  } catch (error) {
    console.log("Error while start conversation api work", error);
  }
};

export const getConversation = async (data) => {
  try {
    const response = await axios.post(apiData.getChat, data);
    console.log(response, "start conversation data");
  } catch (error) {
    console.log("Error while start conversation api work", error);
  }
};
