import React, { useEffect } from 'react';
import useActions from '../../hooks/useAction';
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
      <Header />
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
