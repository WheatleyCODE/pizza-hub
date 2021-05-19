import React from 'react';
import { Link } from 'react-router-dom';
import './SliderItem.scss';

interface ISliderItem {
  title: string,
  route: string,
  url: string,
  price: string,
  bool: boolean,
}

const SliderItem = (props: ISliderItem) => {
  const {
    title,
    route,
    url,
    price,
    bool,
  } = props;

  if (bool) {
    return (
      <Link key={title} to={route}>
        <div className="SliderItem">
          <img src={url} alt={title} />
          <div>
            <h6>LoooL?</h6>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link key={title} to={route}>
      <div className="SliderItem">
        <img src={url} alt={title} />
        <div>
          <h6>{title}</h6>
          <span>{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
