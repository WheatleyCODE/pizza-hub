import { Dispatch } from 'react';
import axios from '../../axios/axios-default';
import { IProductsSlider, PopularAction, PopularActionTypes } from '../../types/popular';

const fetchPopularStart = (): PopularAction => ({ type: PopularActionTypes.FETCH_POPULAR });
const fetchPopularSucces = (data: any): PopularAction => ({
  type: PopularActionTypes.FETCH_POPULAR_SUCCES,
  payload: data,
});

const fetchPopularError = (): PopularAction => ({
  type: PopularActionTypes.FETCH_POPULAR_ERROR,
  payload: 'Error Popular',
});

const fetchPopular = () => async (dispatch: Dispatch<PopularAction>) => {
  try {
    dispatch(fetchPopularStart());

    const response = await axios.get('/popular.json');
    let data: IProductsSlider[] = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in response.data) {
      if (Object.prototype.hasOwnProperty.call(response.data, key)) {
        data = response.data[key];
      }
    }

    dispatch(fetchPopularSucces(data));
  } catch (e) {
    dispatch(fetchPopularError());
  }
};

export default fetchPopular;
