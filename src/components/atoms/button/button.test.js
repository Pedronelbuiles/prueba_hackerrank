import React from 'react';
import renderer from 'react-test-renderer';
import { AiOutlineSend } from 'react-icons/ai'

import ButtonPedro from './index.js';

let data;

const showDataFunctionTest = () => {
  data = {
    ...data,
    clicked: true
  }
}

describe('Testing button', () => {
  beforeEach(() => {
    data = {
      showData: showDataFunctionTest,
      textButton: 'click me',
      endIcon: <AiOutlineSend />,
      clicked: false
    }  
  });

  it('render the three elements in the component', () => {
    const component = renderer.create(<ButtonPedro showData={data.showData} textButton={data.textButton} endIcon={data.endIcon} />);

    const button = component.toJSON();
    expect(button.children.length).toBe(3)
  })

  it('button show the textButton from data', () => {
    const component = renderer.create(<ButtonPedro showData={data.showData} textButton={data.textButton} endIcon={data.endIcon} />);

    const button = component.toJSON();
    expect(button.children[0]).toBe(data.textButton);
  })

  it('button show the endIcon from data', () => {
    const component = renderer.create(<ButtonPedro showData={data.showData} textButton={data.textButton} endIcon={data.endIcon} />);
    const iconComponent = renderer.create(data.endIcon);

    const button = component.toJSON();
    const icon = iconComponent.toJSON();
    
    expect(button.children[2]).toMatchObject(icon);
  })

  it('button onClick function test', () => {
    const component = renderer.create(<ButtonPedro showData={data.showData} textButton={data.textButton} endIcon={data.endIcon} />);

    component.root.findByType('button').props.onClick();

    expect(data.clicked).toBeTruthy()
  })

})