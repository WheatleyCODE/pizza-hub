import React from 'react';
import './SocialButton.scss';

interface ISocialButtonProps {
  icon: string,
}

const SocialButton = ({ icon }: ISocialButtonProps) => (
  <button type="button" className="SocialButton">
    <i className={`fa ${icon}`} aria-hidden="true" />
  </button>
);

export default SocialButton;
