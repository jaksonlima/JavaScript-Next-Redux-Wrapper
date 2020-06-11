import { HYDRATE } from "next-redux-wrapper";
import { diff } from "jsondiffpatch";

import { IN_SUCESS } from "../actions";

const INITIAL_STATE = {
  user: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      const stateDiff = diff(state, action.payload);
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith("X");
      return {
        ...state,
        ...action.payload,
        page: wasBumpedOnClient ? state.page : action.payload.page,
      };
    case IN_SUCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default user;
