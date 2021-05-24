import React from 'react';
import './RadioButtons.scss';

interface IButtons { title: string, value: string, style: string }

interface IRadioButtonsProps {
  buttons: IButtons[];
  selected: string;
  onChange: (value: any) => void;
}

const RadioButtons = ({ buttons, selected, onChange }: IRadioButtonsProps) => {
  const groupName = `RadioButtons${buttons.length}_${Math.round(Math.random() * 10000)}`;
  const selectedIndex = buttons.findIndex((el) => el.value === selected);

  return (
    <div className="RadioButtons">
      { buttons.map(({ title, style, value }, index) => {
        const inputID = `${groupName}__${index}`;
        let selectedClassName = '';
        if (selectedIndex === index) selectedClassName = 'selected';
        if (style === 'disable') {
          return (
            <div aria-hidden="true" key={title} className={`RadioButtons__group ${selectedClassName} ${style}`}>
              <input
                className="RadioButtons__group__input"
                type="radio"
                name={groupName}
                id={inputID}
                checked={selected === title}
              />
              <label
                className="RadioButtons__group__label"
                htmlFor={inputID}
              >
                {title}
              </label>
            </div>
          );
        }

        return (
          <div aria-hidden="true" onClick={() => onChange(value)} key={title} className={`RadioButtons__group ${selectedClassName}`}>
            <input
              className="RadioButtons__group__input"
              type="radio"
              name={groupName}
              id={inputID}
              checked={selected === title}
              onChange={() => onChange(value)}
            />
            <label
              className="RadioButtons__group__label"
              htmlFor={inputID}
            >
              {title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;
