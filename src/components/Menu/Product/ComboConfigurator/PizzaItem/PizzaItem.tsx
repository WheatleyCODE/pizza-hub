import React, { useEffect, useState } from 'react';
import RadioButtons from '@ui/Radio/RadioButtons';
import { replaceDoughText, replaceSize } from '@utils';
import { IComboPizza, PizzaDataKeyNamesDough } from '@t/menu';
import './PizzaItem.scss';

interface IPizzaItemProps {
  comboPizza: IComboPizza;
  comboPizzaThin: IComboPizza | undefined;
  comboPizzaTraditional: IComboPizza;
  index: number;
  changeCombo: (pizza: IComboPizza) => void;
  print: (i: number, dough: PizzaDataKeyNamesDough) => void;
}

const PizzaItem: React.FC<IPizzaItemProps> = (props) => {
  const { comboPizzaThin, comboPizzaTraditional, comboPizza, index, print, changeCombo } = props;

  const [dough, setDough] = useState(PizzaDataKeyNamesDough.DOUGH_TRADITIONAL);
  useEffect(() => {
    print(index, dough);

    if (dough === PizzaDataKeyNamesDough.DOUGH_TRADITIONAL) {
      changeCombo(comboPizzaTraditional);
    }

    if (dough === PizzaDataKeyNamesDough.DOUGH_THIN && comboPizzaThin !== undefined) {
      changeCombo(comboPizzaThin);
    }
  }, [dough]);

  const radioButtonsDough = [
    { title: 'Традиционное', value: PizzaDataKeyNamesDough.DOUGH_TRADITIONAL, style: '' },
    { title: 'Тонкое', value: PizzaDataKeyNamesDough.DOUGH_THIN, style: '' },
  ];

  return (
    <div aria-hidden="true" onClick={() => print(index, dough)} className="PizzaItem">
      <div className="PizzaItem__img">
        <img src={comboPizza.url} alt={comboPizza.title} />
      </div>
      <div className="PizzaItem__description">
        <h5>{comboPizza.title}</h5>
        <span>{comboPizza.description}</span>
        <span className="PizzaItem__description__info">
          {`${replaceSize(comboPizza.size)} ${comboPizza.size} см, ${replaceDoughText(dough)}`}
        </span>
        {comboPizzaThin && comboPizzaTraditional && (
          <div className="PizzaItem__radio">
            <RadioButtons
              buttons={radioButtonsDough}
              selected={dough}
              onChange={(value: PizzaDataKeyNamesDough) => {
                setDough(value);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PizzaItem;
