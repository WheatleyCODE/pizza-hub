import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMenu from '../store/action-creators/menu';
import fetchSlider from '../store/action-creators/slider';
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
  }, dispatch);
};

export default useActions;
