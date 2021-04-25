import React, { useEffect, useState } from 'react';
import stichyMenuItems from '../../utils/stichyMenuItems';
import Button from '../UI/Button/Button';
import logoImg from '../../img/pizza.png';
import './StickyMenu.scss';

const StickyMenu = () => {
  const [showLogo, setShowLogo] = useState(false);

  const scrollHandler = (e: any) => {
    const top = e.target.documentElement.scrollTop;
    if (top > 90) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className="StickyMenu">
      <div className="StickyMenu__container">
        <div className="flex">
          { showLogo ? <div className="StickyMenu__logo"><img src={logoImg} alt="logo" /></div> : null }
          <ul className={`menu ${showLogo ? 'translate' : ''}`}>
            { stichyMenuItems.map((item) => (
              <li className="menu__list" key={item.title}>{item.title}</li>
            )) }
          </ul>
        </div>
        <div className="basket">
          <Button ButtonStyle="bright" text="Корзина" />
        </div>
      </div>
    </div>
  );
};

export default StickyMenu;
