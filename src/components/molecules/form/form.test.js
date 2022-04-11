import React from 'react';
import renderer from 'react-test-renderer';

import FormPedro from './index.js'

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

  it('render only one element in the component', () => {
    const component = renderer.create(<FormPedro />);

    const form = component.toJSON();

    expect(form.children.length).toBe(1);
  })

  it('show the form element', () => {
    const component = renderer.create(<FormPedro />);

    const form = component.toJSON();

    expect(form.children.filter(ele => ele.type == 'form').length).toBe(1);
  })
})