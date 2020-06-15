import React from "react";
import { wrapper } from "../src/store/index";
import { END } from "redux-saga";

export const getInitialProps = async ({ Component, ctx }) => {
  // 1. Wait for all page actions to dispatch
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  // 2. Stop the saga if on server
  if (ctx.req) {
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }

  // 3. Return props
  return {
    pageProps,
  };
};

const WrappedApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(WrappedApp);
