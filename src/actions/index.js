import * as TYPES from './types';

export const setChatVisible = () => ({
    type: TYPES.SET_CHAT_VISIBLE,
});

export const setAppStage = (stage) => ({
    type: TYPES.SET_APP_STAGE,
    payload: {
        currentStage: stage
    }
});