import { VISIBLELOGIN, VISIBLESIGNUP } from "./types";

export const setVisibleLogin = (status) => (dispatch) => {
  console.log(status, "gdhjkl;iuytrew");
  dispatch({
    type: VISIBLELOGIN,
    payload: status,
  });
};

export const setVisibleSignup = (status) => (dispatch) => {
  dispatch({
    type: VISIBLESIGNUP,
    payload: status,
  });
};
