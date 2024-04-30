import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducers from "./favoritesReducers";

const reducers = combineReducers({
  favorites: favoritesReducers,
  movies: movieReducer,
});

export default reducers;
