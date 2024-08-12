import LINK from "src/constants/urls";
import Storage from "src/utils/storage";
import { SINGLE_API } from "./types";
import authStorage from "src/utils/auth-storage";

const { API_URL, AUTH_DUMMY } = LINK;

export const actionLoginTest = async (payload = {}, next = (f) => f) => {
  console.log("PAYYY", payload);
  const url = AUTH_DUMMY + "/auth/login";
  return {
    type: SINGLE_API,
    payload: {
      url,
      options: { method: "POST" },
      payload,
      errorType: "LOGIN_FAILED",
      successType: "LOGIN_SUCCESS",
      next: async (err, response = {}) => {
        if (!err) {
          const { status } = response;
          if (status && status.responseCode) {
            if (process.browser) {
              notification.error({
                message: "Oops!",
                description: status.responseDesc,
              });
            }
          } else {
            authStorage.value = response;
          }
        }
        next(err, response);
      },
    },
  };
};
