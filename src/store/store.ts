import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

const composeEnhancers = typeof window === 'object'
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
