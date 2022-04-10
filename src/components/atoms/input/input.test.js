import React from 'react';
import renderer from 'react-test-renderer';

import InputPedro from './index.js';

let data;

const onChangeFunctionTest = (dataTest) => data = { ...data, dataTest }

describe('Testing input', () => {
  beforeEach(() => {
    data = {
      id: 'testId',
      onChange: onChangeFunctionTest,
      type: 'text',
      placeHolder: 'Test placeHolder',
      helpText: 'Test HelpText',
      dataTest: ''
    }
  })

  it('render the two elements in the component', () => {
    const component = renderer.create(<InputPedro id={data.id} onChange={data.onChange} type={data.type} placeHolder={data.placeHolder} helpText={data.helpText} />);

    const input = component.toJSON();
    expect(input.children.length).toBe(2)
  })

  it('input show the placeHolder from data', () => {
    const component = renderer.create(<InputPedro id={data.id} onChange={data.onChange} type={data.type} placeHolder={data.placeHolder} helpText={data.helpText} />);

    const input = component.toJSON();
    console.log('input', input.children.filter(ele => ele.type == 'input')[0].props);
    console.log('span', input.children.filter(ele => ele.type == 'span')[0].props);
    // expect(button.children[0]).toBe(data.textButton);
  })
})