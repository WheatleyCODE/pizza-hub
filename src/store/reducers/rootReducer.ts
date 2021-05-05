import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cityReducer from './cityReducer';
import configuratorReducer from './configuratorReducer';
import menuReducer from './menuReducer';
import sliderReducer from './sliderReducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  city: cityReducer,
  auth: authReducer,
  slider: sliderReducer,
  configurator: configuratorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
