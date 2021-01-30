// Combiner
import { combineReducers } from "redux";
// Reducers
import resultsReducer from "./resultsReducer";

const rootReducer = combineReducers({
  results: resultsReducer,
});

export default rootReducer;
