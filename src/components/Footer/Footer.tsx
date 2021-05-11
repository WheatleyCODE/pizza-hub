import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import SocialButton from './SocialButton/SocialButton';

const Footer = () => (
  <div className="Footer">
    <div className="Footer__container">
      <div className="container__text">
        <Link to="/">Pizza HUB</Link>
        <Link to="/">О нас</Link>
        <Link to="/">Книга</Link>
        <Link to="/">Блог &quot;Сила ума&quot;</Link>
        <Link to="/">Pizza ИС</Link>
      </div>
      <div className="container__text">
        <Link to="/">Pizza HUB</Link>
        <Link to="/">О нас</Link>
        <Link to="/">Книга</Link>
        <Link to="/">Блог &quot;Сила ума&quot;</Link>
        <Link to="/">Pizza ИС</Link>
      </div>
      <div className="container__text">
        <Link to="/">Pizza HUB</Link>
        <Link to="/">О нас</Link>
        <Link to="/">Книга</Link>
        <Link to="/">Блог &quot;Сила ума&quot;</Link>
        <Link to="/">Pizza ИС</Link>
      </div>
      <div className="container__right-side">
        <div className="container__right-side__store">
          <div>
            <img src="https://static.tildacdn.com/tild3431-6463-4235-b265-363237316233/122-1226734_android-.png" alt="app store" />
          </div>
        </div>
        <Link to="/">feedback@pizzahub.com</Link>
      </div>
      <div className="container__stats">
        <div className="stats__part">
          <span className="stats__part__title">959 938 553 ₽</span>
          <span className="stats__part__more">Выручка российской сети в этом месяце. В прошлом — 2 509 611 572 ₽</span>
        </div>
        <div className="stats__part">
          <span className="stats__part__title">704 пиццерии</span>
          <span className="stats__part__more">в 14 странах, включая Китай, США и Великобританию</span>
        </div>
      </div>
      <div className="container__copyright">
        <div className="copyright__left-side">
          <Link to="/">Pizza HUB</Link>
          <Link to="/">О нас</Link>
          <Link to="/">Книга</Link>
          <Link to="/">Блог &quot;Сила ума&quot;</Link>
          <Link to="/">Pizza ИС</Link>
        </div>
        <div className="copyright__right-side">
          <SocialButton icon="fa-facebook-official" />
          <SocialButton icon="fa-instagram" />
          <SocialButton icon="fa-odnoklassniki" />
          <SocialButton icon="fa-vk" />
          <SocialButton icon="fa-youtube-play" />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
