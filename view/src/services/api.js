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
