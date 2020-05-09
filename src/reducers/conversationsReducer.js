import * as TYPES from '../constants/actionTypes';

const initialState = {
    isVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_CHAT_VISIBLE:
      return {
        isVisible: !state.isVisible
      };
    default:
      return state;
  }
};
