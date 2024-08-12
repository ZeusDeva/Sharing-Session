// import async from 'neo-async';
import fetchAPI from "src/utils/fetch-api";

import { SINGLE_API } from "src/redux/actions/types";

const mandatory = () => {
  throw new Error("Missing parameter!");
};

const singleApi = async (dataApi = mandatory(), dispatch) => {
  const {
    url = mandatory(),
    options,
    payload = {},
    beforeCallType,
    successType,
    errorType,
    next = (f) => f,
  } = dataApi;

  try {
    dispatch({ type: "START_LOADING" });

    if (beforeCallType) {
      dispatch({ type: beforeCallType });
    }

    const response = await fetchAPI({
      url,
      options,
      payload,
      dispatch,
    });

    next(null, response);

    if (successType) {
      dispatch({ type: successType, payload: response });
    }

    return response;
  } catch (error) {
    next(error);

    if (errorType) {
      dispatch({ type: errorType, payload: error });
    }

    throw error;
  }
};

const middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    switch (action.type) {
      case SINGLE_API:
        return singleApi(action.payload, dispatch);

      default:
        return next(action);
    }
  };

export default middleware;
