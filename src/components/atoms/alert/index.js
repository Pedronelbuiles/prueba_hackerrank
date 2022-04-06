import React from 'react';
import Alert from 'react-bootstrap/Alert'

const AlertPedro = ({type, message}) => {
  return (
    <Alert variant={type}>
      <p>{message}</p>
    </Alert>
  )
}

export default AlertPedro