import React, { useEffect } from 'react';
import { Route } from 'react-router';
import useActions from '../../hooks/useAction';
import Routes from '../../types/routes';
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
      <StickyMenu />
      <Slider />
      <Menu />
      <InfoBlock />
      <PromoBlock />
      <Footer />
    </div>
  );
};

export default Layout;
