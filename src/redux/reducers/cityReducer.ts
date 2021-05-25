import { CityAction, CityActionTypes, ICityState } from '@t/city';

const initialState: ICityState = {
  currentCity: {
    name: 'Нижний Новгород',
    time: 37,
    star: 4.59,
  },
  city: [],
  loading: false,
  error: null,
};

const cityReducer = (state: ICityState = initialState, action: CityAction): ICityState => {
  switch (action.type) {
    case CityActionTypes.FETCH_CITY:
      return {
        ...state,
        loading: true,
      };

    case CityActionTypes.FETCH_CITY_SUCCES:
      return {
        ...state,
        loading: false,
        city: action.payload,
      };

    case CityActionTypes.FETCH_CITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CityActionTypes.SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default cityReducer;
