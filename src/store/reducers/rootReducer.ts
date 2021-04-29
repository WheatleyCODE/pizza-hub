import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cityReducer from './cityReducer';
import menuReducer from './menuReducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  city: cityReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
