import React from 'react';

import './input.css';

const InputPedro = ({id, onChange, type, placeHolder, helpText}) => {
  return (
    <label className="input">
      <input className="input__field" type={type} placeholder={placeHolder} onChange={onChange} id={id} />
      <span className="input__label">{helpText}</span>
    </label>
  )
}

export default InputPedro