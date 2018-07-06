import {ADD_ARTICLE} from "../constants/action-types";

const articleReducer = (state = {articles: []}, action) => {
    switch (action.type) {
        case ADD_ARTICLE: return {articles: [...state.articles, action.payload]};
        default: return state;
    }
};

export default articleReducer;