import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postOrder } from '../store/action-creators/basket';
import * as basketActions from '../store/action-creators/basket';
import fetchMenu from '../store/action-creators/menu';
import * as sliderActions from '../store/action-creators/slider';
import * as configActions from '../store/action-creators/configurator';
import * as cityActions from '../store/action-creators/city';
import * as authActions from '../store/action-creators/auth';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({
    fetchMenu,
    ...cityActions,
    ...sliderActions,
    ...basketActions,
    ...configActions,
    ...authActions,
    postOrder,
  }, dispatch);
};

export default useActions;
