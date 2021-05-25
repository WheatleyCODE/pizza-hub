import React from 'react';
import { useTypedSelector } from '@hooks';
import './ProductItem.scss';

interface IProductItemProps {
  title: string;
  url: string;
  callback: () => void;
  partsIndex: number;
  size?: number;
}

const ProductItem: React.FC<IProductItemProps> = (props) => {
  const { title, url, callback, partsIndex, size } = props;

  const { currentCombo } = useTypedSelector((state) => state.comboConfigurator);
  let styles = '';
  if (currentCombo[partsIndex].item.title === title) {
    styles = 'target';
  }

  return (
    <div aria-hidden="true" onClick={callback} className={`ProductItem ${styles}`}>
      <img src={url} alt={title} />
      <span>{title}</span>
      {size && <span className="ProductItem__size">{`${size} см`}</span>}
    </div>
  );
};

export default ProductItem;
