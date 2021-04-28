import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import Menu from '../Menu/Menu';
import PromoBlock from '../PromoBlock/PromoBlock';
import StickyMenu from '../StickyMenu/StickyMenu';
import Slider from '../UI/Slider/Slider';
import './Layout.scss';

const Layout = () => {
  console.log('object');
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
