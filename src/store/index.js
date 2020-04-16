import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import { Middleware } from "../middleware";
const store = createStore(
    rootReducer,
    applyMiddleware(Middleware));
export default store;