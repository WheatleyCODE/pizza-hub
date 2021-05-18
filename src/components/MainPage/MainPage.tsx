import React from 'react';
import Footer from '../Footer/Footer';
import ImgSlider from '../ImgSlider/ImgSlider';
import Menu from '../Menu/Menu';
import PopularProduct from '../PopularProduct/PopularProduct';
import PromoBlock from '../PromoBlock/PromoBlock';
import StickyMenu from '../StickyMenu/StickyMenu';

const MainPage = () => (
  <>
    <StickyMenu />
    <ImgSlider />
    <PopularProduct />
    <Menu />
    <PromoBlock />
    <Footer />
  </>
);

export default MainPage;
