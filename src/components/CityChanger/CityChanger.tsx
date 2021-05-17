import React from 'react';
import { ICity, CityAction, ICurrentCity } from '../../types/city';
import CityItem from './CityItem/CityItem';
import Loader from '../UI/Loader/Loader';
import './CityChanger.scss';

interface ICityChangerProps {
  city: ICity[],
  currentCity: ICurrentCity,
  setCurrentCity: (currentCity: ICurrentCity) => CityAction,
  toggleCityModal: () => void,
}

const CityChanger = (props: ICityChangerProps) => {
  const {
    city,
    currentCity,
    setCurrentCity,
    toggleCityModal,
  } = props;

  return (
    <div className="CityChanger">
      <h1 className="CityChanger__title">Города</h1>
      <hr className="CityChanger__hr" />
      <div className="CityChanger__container">
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
};

export default CityChanger;
