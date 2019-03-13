import { INCREMENT, DECREMENT, actionIncrementPut } from "../redux";
//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { takeEvery, takeLatest, put, take, fork } from "redux-saga/effects";

function* increment() {
  // alert(`This is increment saga`);
  yield put(actionIncrementPut(10));
}

export function* watchIncrement() {
  while (yield take(INCREMENT)) {
    yield fork(increment);
  }
//   yield takeLatest(INCREMENT, increment);
}

function* decrement() {
  // alert(`This is decrement saga`);
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}
