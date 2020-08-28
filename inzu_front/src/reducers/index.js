import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import modalReducer from "./modalToggle";

export default combineReducers({
  alert,
  auth,
  modalStatus: modalReducer,
});
