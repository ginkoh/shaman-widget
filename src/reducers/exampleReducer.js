import * as TYPES from '../constants/actionTypes';

const initialState = true;

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.EXAMPLE_ACTION:
      return false;
    default:
      return state;
  }
};