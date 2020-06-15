import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export const makeStore = (context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(composeWithDevTools(applyMiddleware(sagaMiddleware)))
      : applyMiddleware(sagaMiddleware);

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(rootReducer, enhancer);

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

// { debug: true }
export const wrapper = createWrapper(makeStore);
