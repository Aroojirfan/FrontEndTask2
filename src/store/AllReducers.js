import { combineReducers } from "redux";
import taskData from "./Reducer/taskData";
import SingleDataDetail from "./Reducer/SingleDataDetail";
import MyListAddedData from "./Reducer/MyListAddedData";
const bookShelfRootReducer = () =>
  combineReducers({
    taskData: taskData,
    SingleDataDetail: SingleDataDetail,
    MyListAddedData:MyListAddedData,
  });
export default bookShelfRootReducer;
