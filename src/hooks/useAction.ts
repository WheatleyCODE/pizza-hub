import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMenu from '../store/action-creators/menu';
import { fetchCity, setCurrentCity } from '../store/action-creators/city';
import { auth, logout } from '../store/action-creators/auth';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({
    fetchMenu,
    fetchCity,
    setCurrentCity,
    auth,
    logout,
  }, dispatch);
};

export default useActions;
