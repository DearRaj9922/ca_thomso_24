import ACTIONS from "./UserActionsType";
import setAuthToken from "./setAuthToken";

export const login = (params = {}) => {
  console.log("login", params);
  localStorage.setItem("token", params?.data?.access);
  localStorage.setItem("user_id", params?.data?.user_id);
  localStorage.setItem("id", params?.user?.id);
  setAuthToken(localStorage.getItem("token"));
  return {
    type: ACTIONS.SIGN_UP,
    payload: params,
  };
};

export const fetchUser = (params = {}) => {
  // console.log("fetchUser", params);
  return {
    type: ACTIONS.FETCH_USER_REQUEST,
    payload: params,
  };
};

export const fetchEvents = (params = {}) => {
   return {
     type: ACTIONS.FETCH_EVENTS,
  };
 };

 export const fetchReferrals = (params = {}) => {
   return {
     type: ACTIONS.FETCH_REFERRALS,
   };
 };

export const fetchFeeds = (params = {}) => {
  return {
    type: ACTIONS.FETCH_FEEDS,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  window.location.pathname = "/";
  return {
    type: ACTIONS.LOGOUT,
  };
};
