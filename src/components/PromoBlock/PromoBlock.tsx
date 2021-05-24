import React from 'react';
import Button from '@ui/Button';
import './PromoBlock.scss';

const PromoBlock = () => (
  <div className="PromoBlock">
    <div className="PromoBlock__container">
      <div className="PromoBlock__container__text">
        <i className="fa fa-user-secret" aria-hidden="true" />
        <div className="PromoBlock__container__text__default">Стань тайным покупателем и получи подарок</div>
        <div className="PromoBlock__container__text__mobile">Стань тайным покупателем</div>
      </div>
      <div className="PromoBlock__container__button">
        <Button buttonStyle="white" text="Заполнить анкету" />
      </div>
      <div className="PromoBlock__container__mobile-button">
        <Button buttonStyle="white" text=">" />
      </div>
    </div>
  </div>
);

export default PromoBlock;
