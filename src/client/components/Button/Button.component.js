import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import DashbordItems from '../DashbordItems/Dashbord.component';
import '../DashbordItems/Dashbord.style.css';

const ButtonM = ({ icon, text, isactive, isuser }) => {
  const className = `${isactive ? 'itemActive' : 'item'} ${
    isuser ? 'user' : ''
  }`;
  const items = [
    { id: 1, value: 'Temperature' },
    { id: 2, value: 'Humidity' },
    { id: 3, value: 'PH' },
    { id: 4, value: 'EC' },
    { id: 5, value: 'Water' },
  ];
  return (
    <button
      type="button"
      isactive={isactive}
      isuser={isuser}
      className={className}
    >
      <FontAwesomeIcon icon={icon} className="icon" />
      <p>{text}</p>
      {isactive ? <DashbordItems items={items} /> : ''}
    </button>
  );
};
ButtonM.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isactive: PropTypes.bool.isRequired,
  isuser: PropTypes.bool.isRequired,
};
export default ButtonM;
