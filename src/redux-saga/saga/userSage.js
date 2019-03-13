import {
  FETCH_USER,
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  fetchUserSuccess
} from "../redux";
//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { takeEvery, takeLatest, put, take, fork } from "redux-saga/effects";
import { getUser, API_TYPE } from "../../api/FakeApi";

function* fetchUser() {
  // alert(`This is increment saga`);
  let users = yield getUser(API_TYPE.SUCCESS);
  alert(JSON.stringify(users));
  yield put(fetchUserSuccess(users));
}

export function* watchFetchUser() {
  //   while (yield take(INCREMENT)) {
  //     yield fork(increment);
  //   }
  // alert("watchFetchUser")
  yield takeLatest(FETCH_USER, fetchUser);
}

// function* decrement() {
//   // alert(`This is decrement saga`);
// }

// export function* watchDecrement() {
//   yield takeEvery(DECREMENT, decrement);
// }
