// Constants.
import * as TYPES from '../actions/types';
import { possibleStates } from '../constants/app';

const initialState = {
    currentStage: possibleStates.lobby,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_APP_STAGE:
      return {
        currentStage: action.payload.currentStage
      };
    default:
      return state;
  }
};
