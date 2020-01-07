// Redux.
import { combineReducers } from "redux";

// External Reducers.
import { reducer as formReducer } from "redux-form";

// Reducers.
import conversationsReducer from "./conversationsReducer";
import appStagesReducer from "./appStagesReducer";

export default combineReducers({
  appStages: appStagesReducer,
  conversations: conversationsReducer,
  form: formReducer,
});
