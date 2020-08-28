import { VISIBLELOGIN, VISIBLESIGNUP } from "../actions/types";

const initialState = {
  loginStatus: false,
  signupStatus: false,
};

const modalReducer = (status = initialState, action) => {
  console.log(action.type, "---------------------");
  switch (action.type) {
    case VISIBLELOGIN:
      return {
        ...status,
        loginStatus: action.payload,
      };
    case VISIBLESIGNUP:
      return {
        ...status,
        signupStatus: action.payload,
      };
    default:
      return status;
  }
};

export default modalReducer;
