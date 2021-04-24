import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActionCreators from '../store/action-creators/menu';

// eslint-disable-next-line import/prefer-default-export
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(menuActionCreators, dispatch);
};
