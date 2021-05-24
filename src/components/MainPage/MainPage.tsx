import React from 'react';
import Footer from '@components/Footer';
import ImgSlider from '@components/ImgSlider';
import PopularProduct from '@components/PopularProduct';
import PromoBlock from '@components/PromoBlock';
import StickyMenu from '@components/StickyMenu';
import Menu from '@components/Menu';

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
