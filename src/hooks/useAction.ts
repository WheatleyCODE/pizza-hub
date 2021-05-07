import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToBasket, changeAmount, deleteFromBasket } from '../store/action-creators/basket';
import fetchMenu from '../store/action-creators/menu';
import { fetchSlider, changeSlide, changeSlideCircle } from '../store/action-creators/slider';
import * as configActions from '../store/action-creators/configurator';
import { fetchCity, setCurrentCity } from '../store/action-creators/city';
import { auth, logout, autoLogin } from '../store/action-creators/auth';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({
    fetchMenu,
    fetchCity,
    setCurrentCity,
    auth,
    logout,
    autoLogin,
    fetchSlider,
    changeSlide,
    changeSlideCircle,
    addToBasket,
    changeAmount,
    deleteFromBasket,
    ...configActions,
  }, dispatch);
};

export default useActions;
