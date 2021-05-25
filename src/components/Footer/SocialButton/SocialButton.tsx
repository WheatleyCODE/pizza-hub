import React from 'react';
import './SocialButton.scss';

interface ISocialButtonProps {
  icon: string;
}

const SocialButton: React.FC<ISocialButtonProps> = ({ icon }) => (
  <button type="button" className="SocialButton">
    <i className={`fa ${icon}`} aria-hidden="true" />
  </button>
);

export default SocialButton;
