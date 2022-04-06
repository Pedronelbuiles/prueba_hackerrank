import React from 'react';
import Form from 'react-bootstrap/Form'

const InputPedro = ({id, label, onChange, type, placeHolder, helpText}) => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeHolder} onChange={onChange}/>
      <Form.Text className="text-muted">
        {helpText}
      </Form.Text>
    </Form.Group>
  )
}

export default InputPedro