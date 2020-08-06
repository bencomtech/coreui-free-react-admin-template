import { combineReducers, createStore, applyMiddleware } from "redux";
import sidebar from "./sidebar/reducer";

const reducers = combineReducers({
  sidebar,
});

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;
