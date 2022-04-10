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

  it('render only one alert component', () => {
    const component = renderer.create(<AlertPedro type={data.type} message={data.message} />);

    const alert = component.toJSON();
    expect(alert.children.length).toBe(1)
  })

  it('alert show the message data', () => {
    const component = renderer.create(<AlertPedro type={data.type} message={data.message} />);

    const alert = component.toJSON();
    expect(alert.children[0].children[0]).toBe(data.message);
  })

  it('alert show success class', () => {
    const component = renderer.create(<AlertPedro type={data.type} message={data.message} />);

    const alert = component.toJSON();
    expect(alert.props.className.includes(data.type)).toEqual(true)
  })

  it('alert show info class', () => {
    data = {
      ...data,
      type: 'info'
    }
    const component = renderer.create(<AlertPedro type={data.type} message={data.message} />);

    const alert = component.toJSON();

    expect(alert.props.className.includes(data.type)).toEqual(true)
  })

  it('alert show warning class', () => {
    data = {
      ...data,
      type: 'warning'
    }
    const component = renderer.create(<AlertPedro type={data.type} message={data.message} />);

    const alert = component.toJSON();
    
    expect(alert.props.className.includes(data.type)).toEqual(true)
  })

  it('alert show error class', () => {
    data = {
      ...data,
      type: 'error'
    }
    const component = renderer.create(<AlertPedro type={data.type} message={data.message} />);

    const alert = component.toJSON();
    
    expect(alert.props.className.includes(data.type)).toEqual(true)
  })

})