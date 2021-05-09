import Basket from '../components/Basket/Basket';
import MainPage from '../components/MainPage/MainPage';
import Routes, { IRoute } from '../types/routes';

const publickRoutes: IRoute[] = [
  {
    path: Routes.BASKET_ROUTE,
    Component: Basket,
    render: false,
  },
  {
    path: Routes.HOME_ROUTE,
    Component: MainPage,
    render: true,
  },
];

export default publickRoutes;
