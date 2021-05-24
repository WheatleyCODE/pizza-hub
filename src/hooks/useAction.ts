import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts, postOrder } from '../redux/actions/basket';
import fetchPopular from '../redux/actions/popular';
import * as comboConfiguratorActions from '../redux/actions/comboConfigurator';
import * as basketActions from '../redux/actions/basket';
import fetchMenu from '../redux/actions/menu';
import * as sliderActions from '../redux/actions/slider';
import * as configActions from '../redux/actions/configurator';
import * as cityActions from '../redux/actions/city';
import * as authActions from '../redux/actions/auth';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({
    fetchMenu,
    fetchPopular,
    ...cityActions,
    ...comboConfiguratorActions,
    ...sliderActions,
    ...basketActions,
    ...configActions,
    ...authActions,
    postOrder,
    fetchProducts,
  }, dispatch);
};

export default useActions;
