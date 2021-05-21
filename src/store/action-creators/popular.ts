import { Dispatch } from 'react';
import axios from '../../utils/axios/axios-default';
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
    const keys = Object.keys(response.data);
    const data: IProductsSlider[][] = keys.map((key) => response.data[key]);

    dispatch(fetchPopularSucces(data[0]));
  } catch (e) {
    dispatch(fetchPopularError());
  }
};

export default fetchPopular;
