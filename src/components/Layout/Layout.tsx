import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InfoBlock from '../InfoBlock/InfoBlock';
import Menu from '../Menu/Menu';
import PromoBlock from '../PromoBlock/PromoBlock';
import StickyMenu from '../StickyMenu/StickyMenu';
import Slider from '../UI/Slider/Slider';
import './Layout.scss';

const Layout = () => {
  const { loading } = useTypedSelector((state) => state.user);
  const { fetchMenu } = useActions();
  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="Layout">
      <Header />
      <StickyMenu />
      { loading ? <h1>Загрузка</h1> : null }
      <Slider />
      <Menu />
      <InfoBlock />
      <PromoBlock />
      <Footer />
    </div>
  );
};

export default Layout;
