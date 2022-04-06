import React from 'react';
import Button from 'react-bootstrap/Button'

const ButtonPedro = ({showData, textButton, endIcon}) => {
  return (
    <Button variant="outline-dark" onClick={showData}>
      {textButton} {endIcon}
    </Button>
  )
}

export default ButtonPedro