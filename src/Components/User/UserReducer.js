import ACTIONS from "./UserActionsType";

const initialState = {
  user: {},
  loading: false,
  events: [],
  referrals: [],
  feeds: [],
};

const userReducer = (state = initialState, action) => {
  let payload = action?.payload;

  switch (action.type) {
    /** fetch all products start */

    case ACTIONS.SIGN_UP:
      return Object.assign({}, state, {
        user: payload,
      });

    case ACTIONS.FETCH_USER_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case ACTIONS.FETCH_USER_FAIL:
      return Object.assign({}, state, {
        loading: false,
      });

    case ACTIONS.FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        user: payload,
        loading: false,
      });

    case ACTIONS.FETCH_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        events: payload,
      });

    case ACTIONS.FETCH_EVENTS_FAIL:
      return Object.assign({}, state, {
        loading: false,
        events: payload,
      });
    case ACTIONS.FETCH_REFERRALS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        referrals: payload,
      });

    case ACTIONS.FETCH_REFERRALS_FAIL:
      return Object.assign({}, state, {
        loading: false,
        referrals: payload,
      });
    case ACTIONS.FETCH_FEEDS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        feeds: payload,
      });

    case ACTIONS.FETCH_FEEDS_FAIL:
      return Object.assign({}, state, {
        loading: false,
        feeds: payload,
      });

    case ACTIONS.LOGOUT:
      return Object.assign({}, state, {
        user: {},
      });

    default:
      return state;
  }
};

export default userReducer;
