import React from 'react';
import { CityAction, CurrentCity } from '../../types/city';
import CityItem from './CityItem/CityItem';
import './CityChanger.scss';

interface CityChangerProps {
  city: any[],
  currentCity: CurrentCity,
  setCurrentCity: (currentCity: CurrentCity) => CityAction,
  toggleCityModal: () => void,
}

const CityChanger = ({
  city,
  currentCity,
  setCurrentCity,
  toggleCityModal,
}: CityChangerProps) => (
  <div className="CityChanger">
    <h1 className="city-title">Города</h1>
    <hr className="sity-hr" />
    <div className="city-container">
      { city.map((el) => (
        <CityItem
          target={el.name === currentCity.name}
          onClick={() => { setCurrentCity(el); toggleCityModal(); }}
          key={el.name}
          text={el.name}
        />
      )) }
    </div>
  </div>
);

export default CityChanger;
