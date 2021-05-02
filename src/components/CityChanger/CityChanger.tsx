import React from 'react';
import { City, CityAction, CurrentCity } from '../../types/city';
import CityItem from './CityItem/CityItem';
import Loader from '../UI/Loader/Loader';
import './CityChanger.scss';

interface CityChangerProps {
  city: City[],
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
      { city.length === 0 ? <Loader /> : null }
    </div>
  </div>
);

export default CityChanger;
