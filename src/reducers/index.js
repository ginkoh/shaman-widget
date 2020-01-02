// Redux.
import { combineReducers } from 'redux';

// External Reducers.
import { reducer as formReducer } from 'redux-form';

// Reducers.
import exampleReducer from './exampleReducer';
import conversationsReducer from './conversationsReducer';

export default combineReducers({
  example: exampleReducer,
  form: formReducer,
  conversations: conversationsReducer,
});