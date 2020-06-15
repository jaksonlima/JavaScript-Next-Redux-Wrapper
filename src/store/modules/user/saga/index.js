import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../../server/api";

export function* clienteAction() {
  const reponse = yield call(api.get, "users/jaksonlima");

  yield put({ type: "CLIENT_ACTION", payload: { server: reponse.data } });
}

export default all([takeLatest("CLIENT_REQUEST", clienteAction)]);
