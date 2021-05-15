import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import PopularProduct from '../PopularProduct/PopularProduct';
import PromoBlock from '../PromoBlock/PromoBlock';
import StickyMenu from '../StickyMenu/StickyMenu';
import Slider from '../UI/Slider/Slider';

const MainPage = () => (
  <>
    <StickyMenu />
    <Slider />
    <PopularProduct />
    <Menu />
    <PromoBlock />
    <Footer />
  </>
);

export default MainPage;
