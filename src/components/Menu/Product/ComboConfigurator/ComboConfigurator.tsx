import React from 'react';
import { IComboProduct } from '../../../../types/menu';
import './ComboConfigurator.scss';

interface IComboProductProps {
  product: IComboProduct,
}

const ComboConfigurator = ({ product }: IComboProductProps) => {
  const {
    parts,
    title,
    description,
    url,
  } = product;

  return (
    <div className="ComboConfigurator">
      <div className="ComboConfigurator__left-container">
        <div className="left-container__description">
          <div className="left-container__description__title">{title}</div>
          <div className="left-container__description__description">{description}</div>
        </div>
        { parts.map(() => (
          <div className="left-container__current">One</div>
        )) }
      </div>
      <div className="ComboConfigurator__right-container">
        <div className="right-container__parts">
          <img className="parts__default-img" src={url} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ComboConfigurator;
