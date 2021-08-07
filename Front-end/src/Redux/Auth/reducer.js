import { LOGIN_REQ, LOGIN_SUC, LOGIN_FAIL } from "./actionTypes";
import {saveData,loadData} from "../../LocalStorage/localstorage"
const initState = {
  isAuth: loadData("isAuth")||false,
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
      return {
        ...state,
        isAuth:true
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
