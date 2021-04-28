import { CityAction, CityActionTypes, CityState } from '../../types/city';

const initialState: CityState = {
  city: [],
  loading: false,
  error: null,
};

const cityReducer = (state: CityState = initialState, action: CityAction): CityState => {
  switch (action.type) {
    case CityActionTypes.FETCH_CITY:
      return { ...state, loading: true };
    case CityActionTypes.FETCH_CITY_SUCCES:
      return { ...state, loading: false, city: action.payload };
    case CityActionTypes.FETCH_CITY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default cityReducer;
