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
    console.log(getResponse);
    return getResponse.data;
  } catch (error) {
    console.log("Error while get user api work", error);
  }
};
