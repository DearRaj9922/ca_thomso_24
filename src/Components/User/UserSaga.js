import { takeLatest, fork } from "redux-saga/effects";
import ACTIONS from "./UserActionsType";
import { Store } from "../../Config/Store";
import axios from "axios";

function* getUser(action) {
  const { dispatch } = Store;
  try {
    axios
      .get(`http://35.154.76.67/apiV1/current_user_ca`)
      .then((res) => {
        // console.log("data", res.data);
        // localStorage.setItem("id", res.data.id);
        dispatch({
          type: ACTIONS.FETCH_USER_SUCCESS,
          payload: res.data,
        });

      })
      .catch((err) => {
        if (err?.response?.status == 401) {
          if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            window.location.pathname = "/";
          }
          dispatch({
            type: ACTIONS.FETCH_USER_FAIL,
          });
        }
      });
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_USER_FAIL,
    });
  }
}

// function* getEvents() {

//   const { dispatch, getState } = Store;

//   try {

//     const id = getState()?.user?.user?.user_id;
//     axios.get(`/apiV1/registerevent?user=${id}`).then((res) => {

//       var arr = [];
//       for (var i = 0; i < res.data.length; i++) {
//         arr.push(res.data[i].event);
//       }

//       dispatch({
//         type: ACTIONS.FETCH_EVENTS_SUCCESS,
//         payload: arr,
//       });
//     });
//   } catch (error) {
//     dispatch({
//       type: ACTIONS.FETCH_USER_FAIL,
//     });

//   }
// }

function* getReferrals() {
  const { dispatch, getState } = Store;
  try {
    const referral = getState().user.referrals;
    if (referral.length > 0) {
      dispatch({
        type: ACTIONS.FETCH_REFERRALS_SUCCESS,
        payload: referral,
      });
    } else {
      // const ca_id = getState().user.user.id;
      axios.get(`/apiV1/ca_activity?ca_id=${localStorage.getItem('id')}`).then((res) => {
        dispatch({
          type: ACTIONS.FETCH_REFERRALS_SUCCESS,
          payload: res.data,
        });
      });
    }
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_USER_FAIL,
    });
  }
}

function* getFeeds() {
  const { dispatch, getState } = Store;
  try {
    const feed = getState().user.feeds;
    if (feed.length > 0) {
      dispatch({
        type: ACTIONS.FETCH_FEEDS_SUCCESS,
        payload: feed,
      });
    } else {
      // const ca_id = getState().user.user.id;
      axios.get(`/apiV1/get_all_posts?ca_id=${localStorage.getItem('id')}`).then((res) => {
        dispatch({
          type: ACTIONS.FETCH_FEEDS_SUCCESS,
          payload: res.data,
        });
      });
    }
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_USER_FAIL,
    });
  }
}

function* watchUsers() {
  yield takeLatest(ACTIONS.FETCH_USER_REQUEST, getUser);
  // yield takeLatest(ACTIONS.FETCH_EVENTS, getEvents);
  yield takeLatest(ACTIONS.FETCH_REFERRALS, getReferrals);
  yield takeLatest(ACTIONS.FETCH_FEEDS, getFeeds);
}

// ACTION WATCHER
export default function* userSaga() {
  yield fork(watchUsers);
}
