enum Routes {
  LOGIN_ROUTE = '/login',
  CITY_ROUTE = '/city',
  BASKET_ROUTE = '/basket',
  HOME_ROUTE = '/',
}

export interface IRoute {
  path: Routes,
  Component: React.FC,
  render: boolean,
}

export default Routes;
