import { LOGIN_REQ, LOGIN_SUC, LOGIN_FAIL, LOG_OUT } from "./actionTypes";
import {saveData,loadData} from "../../LocalStorage/localstorage"
const initState = {
  isAuth: loadData("isAuth")||false,
  userId:loadData("userId")||"",
  isLoading: false,
  isErr: false,
};

 export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUC:
      saveData("isAuth",true)
      saveData("userId",payload.user._id)
      console.log(payload.user._id)
      return {
        ...state,
        isAuth:true,
        userId:payload.user._id
      };
      case LOG_OUT:
      saveData("isAuth",false)
      return {
        ...state,
        isAuth:false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isErr: true,
      };
    default:
      return state;
  }
};
