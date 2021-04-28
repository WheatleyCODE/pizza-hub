import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMenu from '../store/action-creators/menu';
import fetchCity from '../store/action-creators/city';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({
    fetchMenu,
    fetchCity,
  }, dispatch);
};

export default useActions;
