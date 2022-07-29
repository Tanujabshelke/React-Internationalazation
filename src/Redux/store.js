import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { combineReducers } from "redux";

export default function configureStore(initialState = {}) {
  return createStore(
    (state = {}, action) => {
      switch (action.type) {
        case "SIMPLE_ACTION":
          return {
            result: action.payload
          };
        default:
          return state;
      }
    }
    //   applyMiddleware(thunk)
  );
}
