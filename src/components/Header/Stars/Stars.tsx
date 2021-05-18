import React from 'react';
import './Stars.scss';

interface IStarsProps {
  num: number,
}
const Stars = ({ num }: IStarsProps) => {
  const stars = [];
  for (let i = 1; i < num; i += 1) {
    stars.push(<i key={i} className="fa fa-star star-style" aria-hidden="true" />);
  }
  stars.push(<i key="key" className="fa fa-star-half-o star-style" aria-hidden="true" />);

  return (
    <>
      {stars}
    </>
  );
};

export default Stars;
