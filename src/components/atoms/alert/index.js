import React from 'react';

import './alert.css';

const AlertPedro = ({type, message}) => {
  return (
    <div className={[type, 'alert'].join(' ')}>
      <p>{message}</p>
    </div>
  )
}

export default AlertPedro