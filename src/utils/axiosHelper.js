import axios from "axios";

const userEP = import.meta.env.VITE_APP_SERVER_API + "/test/users";
// global apiProcessor
const apiProcessor = async ({ url, method, data }) => {
  try {
    const response = await axios({ url, method, data });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

// post new user
export const registerUserAxios = (obj) =>
  apiProcessor({ url: userEP, method: "POST", data: obj });

// verify user account
export const verifyUserAxios = (obj) =>
  apiProcessor({ url: userEP + "/verify-account", method: "POST", data: obj });
