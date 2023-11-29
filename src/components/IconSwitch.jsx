import React from 'react';
import '../App.css';

function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="material-icons icon__switch" onClick={onSwitch}>
      {icon}
    </span>
  )
}

export default IconSwitch;
