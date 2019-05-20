import { combineReducers } from "redux";
import course from "./course";
import todos from "./todos";

export default combineReducers({ course, todos });
