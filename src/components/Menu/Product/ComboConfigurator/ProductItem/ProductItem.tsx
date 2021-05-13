import React from 'react';
import useTypedSelector from '../../../../../hooks/useTypedSelector';
import './ProductItem.scss';

interface IProductItemProps {
  title: string,
  url: string,
  callback: () => void,
  partsIndex: number,
}

const ProductItem = (props: IProductItemProps) => {
  const {
    title,
    url,
    callback,
    partsIndex,
  } = props;

  const { currentCombo } = useTypedSelector((state) => state.comboConfigurator);
  let styles = '';
  if (currentCombo[partsIndex].item.title === title) {
    styles = 'target';
  }

  return (
    <div aria-hidden="true" onClick={callback} className={`ProductItem ${styles}`}>
      <img src={url} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default ProductItem;
