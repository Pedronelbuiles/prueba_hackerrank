import React from 'react';
import renderer from 'react-test-renderer';

import AlertPedro from './index.js'

let data;

describe('Testing alert', () => {
  beforeEach(() => {
    data = {
      type: 'success',
      message: 'mensaje de prueba'
    }  
  });

  it('render component alert', () => {
    
    const component = renderer.create(<AlertPedro type={data.type} message={data.message} />);

    const text = component.getInstance();
    const alert = component.root.findAllByType('p');
  
    console.log('alert', alert);
    console.log('text', text);
    // expect(alert.textContent).toBe(data.message);
  })

})
