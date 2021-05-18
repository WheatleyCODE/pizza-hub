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
      { buttons.map((obj, index) => {
        const inputID = `${groupName}__${index}`;
        let selectedClassName = '';
        if (selectedIndex === index) selectedClassName = 'selected';
        if (obj.style === 'disable') {
          return (
            <div aria-hidden="true" onClick={() => {}} key={obj.title} className={`RadioButtons__group ${selectedClassName} ${obj.style}`}>
              <input
                className="RadioButtons__group__input"
                type="radio"
                name={groupName}
                id={inputID}
                checked={selected === obj.title}
                onChange={() => {}}
              />
              <label
                className="RadioButtons__group__label"
                htmlFor={inputID}
              >
                {obj.title}
              </label>
            </div>
          );
        }

        return (
          <div aria-hidden="true" onClick={() => onChange(obj.value)} key={obj.title} className={`RadioButtons__group ${selectedClassName}`}>
            <input
              className="RadioButtons__group__input"
              type="radio"
              name={groupName}
              id={inputID}
              checked={selected === obj.title}
              onChange={() => onChange(obj.value)}
            />
            <label
              className="RadioButtons__group__label"
              htmlFor={inputID}
            >
              {obj.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;
