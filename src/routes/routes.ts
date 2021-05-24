import Routes, { IRoute } from '@t/routes';
import Basket from '@components/Basket';
import MainPage from '@components/MainPage';

const publickRoutes: IRoute[] = [
  {
    path: Routes.BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: Routes.HOME_ROUTE,
    Component: MainPage,
  },
];

export default publickRoutes;
