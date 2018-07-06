import {createStore} from "redux";
import articleReducer from "../reducers/ArticleReducer";

const store = createStore(
    articleReducer
);

export default store;