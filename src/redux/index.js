import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

import reducer, { initialState } from "src/redux/reducers";
import apiMiddleware from "src/redux/thunk/middleware";

const DEV = process.browser && process.env.NEXT_ENV === "development";

const bindMiddleware = (middleware) => {
  if (DEV) {
    const { createLogger } = require("redux-logger");

    const logger = createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error,
    });

    return applyMiddleware(...middleware, logger);
  }

  return applyMiddleware(...middleware);
};

const makeStore = () => {
  const store = createStore(
    reducer,
    initialState,
    bindMiddleware([apiMiddleware, thunk])
  );
  return store;
};

export default createWrapper(makeStore, {
  debug: process.env.NEXT_ENV === "development",
});
