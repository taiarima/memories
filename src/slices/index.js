import { combineReducers } from "redux";

import postsReducer from "./posts";
// import postReducer from './posts'
// import commentsReducer from './comments'

const rootReducer = combineReducers({
  posts: postsReducer,
  //   comments: commentsReducer,
  //   post: postReducer,
});

export default rootReducer;
