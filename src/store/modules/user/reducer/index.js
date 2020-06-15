import { HYDRATE } from "next-redux-wrapper";
import { diff } from "jsondiffpatch";

const INITIAL_STATE = {
  server: "init",
  client: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log(action);

      const { user } = diff(state, action.payload);

      return {
        ...user[0],
      };
    case "CLIENT_SERVER":
      return {
        ...state,
        server: {
          ...state.server,
          tick: action.payload,
        },
      };
    case "CLIENT_ACTION":
      console.log(action);
      return {
        ...state,
        client: {
          ...state.client,
          tick: action.payload,
        },
      };
    default:
      return state;
  }
};

export default user;
