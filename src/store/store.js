import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import reducers from "./reducers";
import logger from "redux-logger";
export const myStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);
//export const myStore = createStore(reducers); //redux store ile değiştirin
