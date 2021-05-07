import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import useActions from '../../hooks/useAction';
import Routes from '../../types/routes';
import Basket from '../Basket/Basket';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import Menu from '../Menu/Menu';
import PromoBlock from '../PromoBlock/PromoBlock';
import StickyMenu from '../StickyMenu/StickyMenu';
import Slider from '../UI/Slider/Slider';
import './Layout.scss';

const Layout = () => {
  const { autoLogin } = useActions();

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <div className="Layout">
      <Route path={Routes.HOME_ROUTE} component={Header} />
      <Switch>
        <Route path={Routes.BASKET_ROUTE} component={Basket} />
        <Route
          path={Routes.HOME_ROUTE}
          render={() => (
            <>
              <StickyMenu />
              <Slider />
              <Menu />
              <InfoBlock />
              <PromoBlock />
            </>
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default Layout;
