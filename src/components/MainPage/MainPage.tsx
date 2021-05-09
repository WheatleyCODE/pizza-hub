import React from 'react';
import Footer from '../Footer/Footer';
import InfoBlock from '../InfoBlock/InfoBlock';
import Menu from '../Menu/Menu';
import PromoBlock from '../PromoBlock/PromoBlock';
import StickyMenu from '../StickyMenu/StickyMenu';
import Slider from '../UI/Slider/Slider';

const MainPage = () => (
  <>
    <StickyMenu />
    <Slider />
    <Menu />
    <InfoBlock />
    <PromoBlock />
    <Footer />
  </>
);

export default MainPage;
