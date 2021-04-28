/* eslint-disable import/prefer-default-export */
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MenuActionCreators from '../store/action-creators/menu';
import * as CityActionCreators from '../store/action-creators/city';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({
    ...MenuActionCreators,
    ...CityActionCreators,
  }, dispatch);
};
