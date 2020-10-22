import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer.js";

export default combineReducers({
  contacts: contactReducer,
});
