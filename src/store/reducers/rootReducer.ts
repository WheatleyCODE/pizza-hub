import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cityReducer from './cityReducer';
import menuReducer from './menuReducer';
import sliderReducer from './sliderReducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  city: cityReducer,
  auth: authReducer,
  slider: sliderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
