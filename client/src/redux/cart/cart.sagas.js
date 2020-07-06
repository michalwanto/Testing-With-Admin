import { all, put, takeLatest, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";

import { clearCart } from "./cart.actions";

export function* clearCartOnSignOutSuccess() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
