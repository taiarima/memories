import { combineReducers } from "redux";

// import postsReducer from "./posts";
import userReducer from "./user";
// import postReducer from './posts'
// import commentsReducer from './comments'

const rootReducer = combineReducers({
  // posts: postsReducer,
  user: userReducer,
  //   comments: commentsReducer,
  //   post: postReducer,
});

export default rootReducer;
