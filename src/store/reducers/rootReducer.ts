import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { menuReducer } from './menuReducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  city: cityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
