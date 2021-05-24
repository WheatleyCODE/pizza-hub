import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useActions } from '@hooks';
import Routes from '@t/routes';
import Header from '@components/Header';
import publickRoutes from '../../routes/routes';
import './Layout.scss';

const Layout = () => {
  const { autoLogin, autoAddToBasket } = useActions();

  useEffect(() => {
    autoLogin();
    autoAddToBasket();
  }, [autoLogin, autoAddToBasket]);

  return (
    <div className="Layout">
      <Route path={Routes.HOME_ROUTE} component={Header} />
      <Switch>
        { publickRoutes.map((route) => (
          <Route key={route.path} path={route.path} component={route.Component} />
        )) }
      </Switch>
    </div>
  );
};

export default Layout;
