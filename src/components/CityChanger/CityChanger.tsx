import React from 'react';
import Loader from '@ui/Loader';
import { ICity, CityAction, ICurrentCity } from '@t/city';
import CityItem from './CityItem';
import './CityChanger.scss';

interface ICityChangerProps {
  city: ICity[];
  currentCity: ICurrentCity;
  setCurrentCity: (currentCity: ICurrentCity) => CityAction;
  toggleCityModal: () => void;
}

const CityChanger: React.FC<ICityChangerProps> = (props) => {
  const { city, currentCity, setCurrentCity, toggleCityModal } = props;

  return (
    <div className="CityChanger">
      <h1 className="CityChanger__title">Города</h1>
      <hr className="CityChanger__hr" />
      <div className="CityChanger__container">
        {city.map((el) => (
          <CityItem
            target={el.name === currentCity.name}
            onClick={() => {
              setCurrentCity(el);
              toggleCityModal();
            }}
            key={el.name}
            text={el.name}
          />
        ))}
        {city.length === 0 && <Loader />}
      </div>
    </div>
  );
};

export default CityChanger;
