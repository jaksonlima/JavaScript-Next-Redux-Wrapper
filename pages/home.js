import React from "react";
import { wrapper } from "../src/store/index";
import { END } from "redux-saga";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, ...rest }) => {
    // regular stuff
    store.dispatch({ type: "CLIENT_REQUEST" });
    // end the saga
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

function home() {
  return (
    <>
      <div>Home</div>
    </>
  );
}

export default home;
