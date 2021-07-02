import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from '../reducers';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

export default store;
