import React from 'react';
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
  </>
);

export default MainPage;
