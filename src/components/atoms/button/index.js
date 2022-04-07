import React from 'react';

import './button.css';

const ButtonPedro = ({showData, textButton, endIcon}) => {
  return (
    <button className="button" onClick={showData}>
      {textButton} {endIcon}
    </button>
  )
}

export default ButtonPedro