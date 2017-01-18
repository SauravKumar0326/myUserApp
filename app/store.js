import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

// const store = createStore(reducers);
// export default store;

// import rootReducer from '../reducers/index';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);
const store = createStoreWithMiddleware(reducers);
export default store;
// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(reducers, initialState);
// }
