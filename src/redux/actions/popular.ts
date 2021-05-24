import { Dispatch } from 'react';
import { reduce, axios } from '@utils';
import { IProductsSlider, PopularAction, PopularActionTypes } from '@t/popular';

const fetchPopular = () => async (dispatch: Dispatch<PopularAction>) => {
  try {
    dispatch(reduce(PopularActionTypes.FETCH_POPULAR));

    const response = await axios.get('/popular.json');
    const keys = Object.keys(response.data);
    const data: IProductsSlider[][] = keys.map((key) => response.data[key]);

    dispatch(reduce(PopularActionTypes.FETCH_POPULAR_SUCCES, data[0]));
  } catch (e) {
    dispatch(reduce(PopularActionTypes.FETCH_POPULAR_ERROR, 'Error Popular'));
  }
};

export default fetchPopular;
