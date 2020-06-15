import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function index() {
  const dispatch = useDispatch();

  return (
    <>
      <div>Index</div>

      <Link href="/home">
        <a>pages</a>
      </Link>

      <button
        onClick={() =>
          dispatch({ type: "CLIENT_ACTION", payload: { server: "index" } })
        }
      >
        Click
      </button>
    </>
  );
}
