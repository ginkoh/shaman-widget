
// Redux.
import { compose, createStore } from 'redux';

// Reducers.
import reducers from './reducers';

// Create store.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;