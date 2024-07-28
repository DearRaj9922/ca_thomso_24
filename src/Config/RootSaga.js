import { all } from "redux-saga/effects";
import userSaga from "../Components/User/UserSaga";

function* RootSaga() {
  yield all([userSaga()]);
}

export { RootSaga };
