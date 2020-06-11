import React from "react";
import Link from "next/link";
import { wrapper } from "../src/store/index";

import { inSucess } from "../src/store/modules/user/actions";

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store: { dispatch }, ...rest }) => {
    console.log({ ...rest });

    const user = { name: "lima" };

    dispatch(inSucess(user));

    return { props: { user } };
  }
);

export default function index() {
  return (
    <>
      <div>Index</div>
      <Link href="/store">
        <a>pages</a>
      </Link>
    </>
  );
}
