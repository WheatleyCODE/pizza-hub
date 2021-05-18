/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import SocialButton from './SocialButton/SocialButton';
import Loader from '../UI/Loader/Loader';
import { IFooterData, ILinks } from '../../types/footer';
import './Footer.scss';

const Footer = () => {
  const [data, loading] = useRequest('/footer.json');
  const footerData: IFooterData = data;

  if (loading) {
    return (
      <div className="Footer">
        <div className="Footer__container">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="Footer">
      <div className="Footer__container">
        { footerData.links.map((obj) => (
          <div key={obj.columnTitle} className="container__text">
            <h4 className="container__text__title">{obj.columnTitle}</h4>
            {obj.links.map((link) => (
              <Link key={link.title} to={link.to}>{link.title}</Link>
            ))}
          </div>
        )) }
        <div className="container__right-side">
          <div className="container__right-side__store">
            <div>
              <img src="https://static.tildacdn.com/tild3431-6463-4235-b265-363237316233/122-1226734_android-.png" alt="app store" />
            </div>
          </div>
          <Link to="/">feedback@pizzahub.com</Link>
        </div>
        <div className="container__stats">
          { footerData.stats.map((obj) => (
            <div key={obj.title} className="stats__part">
              <span className="stats__part__title">{obj.title}</span>
              <span className="stats__part__more">{obj.description}</span>
            </div>
          )) }
        </div>
        <div className="container__copyright">
          { footerData.copyright.map((obj, i) => {
            if (i === 0) {
              return (
                <div key={i} className="copyright__left-side">
                  { obj.links?.map((links: ILinks) => (
                    <Link key={links.title} to={links.to}>{links.title}</Link>
                  )) }
                </div>
              );
            }

            return (
              <div key={i} className="copyright__right-side">
                { obj.social?.map((icon: string) => (
                  <SocialButton key={icon} icon={icon} />
                )) }
              </div>
            );
          }) }
        </div>
      </div>
    </div>
  );
};

export default Footer;
