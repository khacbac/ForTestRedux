import { all } from "redux-saga/effects";

import { watchIncrement, watchDecrement } from "./counterSagas";
import { watchFetchUser } from "./userSage";

export default function* rootSaga() {
  yield all([watchIncrement(), watchDecrement(), watchFetchUser()]);
}
