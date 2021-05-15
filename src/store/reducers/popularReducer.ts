import { PopularAction, PopularActionTypes, IPopularState } from '../../types/popular';

const initialState: IPopularState = {
  popular: [],
  loading: false,
  error: null,
};

const popularReducer = (state = initialState, action: PopularAction): IPopularState => {
  switch (action.type) {
    case PopularActionTypes.FETCH_POPULAR:
      return {
        ...state,
        loading: true,
      };

    case PopularActionTypes.FETCH_POPULAR_SUCCES:
      return {
        ...state,
        popular: action.payload,
        loading: false,
      };

    case PopularActionTypes.FETCH_POPULAR_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default popularReducer;
