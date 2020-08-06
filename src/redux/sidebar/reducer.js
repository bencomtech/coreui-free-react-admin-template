import { handleActions } from "redux-actions";
import { setSidebarShow } from "./action";

const initialState = {
  sidebarShow: "responsive",
};

export default handleActions(
  {
    [setSidebarShow]: (state, action) => ({
      ...state,
      sidebarShow: action.payload,
    }),
  },
  initialState
);
