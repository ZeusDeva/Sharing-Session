import camelCase from "lodash/camelCase";

// Constants
import LINK, { CONFIG_URLS } from "src/constants/urls";
import { removeEmptyObj } from "src/utils/tools";

// Utils
import fetchApi from "src/utils/fetch-api";

// Data
import ConfigStorage from "src/utils/config-storage";

// Types
import { SINGLE_API } from "./types";

export const actionGetConfig = async (auth) => {
  try {
    const configs = await Promise.allSettled([
      ...getConfigs(auth),
      ...postConfigs(auth),
    ]);

    let payload = ConfigStorage.data;
    configs.forEach((item) => {
      if (item.status === "fulfilled") {
        const { key, config } = item.value;
        payload[key] = config;
      }
    });
    ConfigStorage.value = payload;
  } catch (error) {
    if (process.env.NEXT_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};

const getConfigs = (auth) => {
  return CONFIG_URLS.GETS.map((url) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const urlObj = new URL(url);
          const config = await fetchApi({
            url,
          });
          resolve({
            key: camelCase(urlObj.pathname.split("/")?.pop()),
            config,
          });
        } catch (e) {
          reject(e);
        }
      })();
    });
  });
};
