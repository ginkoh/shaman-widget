import * as TYPES from '../actions/types';

const initialState = {
    isVisible: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SETC:
      return {
        isVisible: !state.isVisible
      };
    default:
      return state;
  }
};
