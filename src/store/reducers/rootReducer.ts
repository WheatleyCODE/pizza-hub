import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cityReducer from './cityReducer';
import configuratorReducer from './configuratorReducer';
import menuReducer from './menuReducer';
import sliderReducer from './sliderReducer';
import basketReducer from './basketReducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  city: cityReducer,
  auth: authReducer,
  slider: sliderReducer,
  configurator: configuratorReducer,
  basket: basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
