import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import useActions from '../../hooks/useAction';
import publickRoutes from '../../routes/routes';
import Routes from '../../types/routes';
import Header from '../Header/Header';
import './Layout.scss';

const Layout = () => {
  const { autoLogin, autoAddToBasket } = useActions();

  useEffect(() => {
    autoLogin();
    autoAddToBasket();
  }, []);

  return (
    <div className="Layout">
      <Route path={Routes.HOME_ROUTE} component={Header} />
      <Switch>
        { publickRoutes.map((route) => {
          if (route.render) {
            return (
              <Route key={route.path} path={route.path} render={() => <route.Component />} />
            );
          }

          return (
            <Route key={route.path} path={route.path} component={route.Component} />
          );
        }) }
      </Switch>
    </div>
  );
};

export default Layout;
