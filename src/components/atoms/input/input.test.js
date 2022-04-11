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
    expect(input.children.filter(ele => ele.type == 'input')[0].props.placeholder).toBe(data.placeHolder);
  })

  it('input have the id from data', () => {
    const component = renderer.create(<InputPedro id={data.id} onChange={data.onChange} type={data.type} placeHolder={data.placeHolder} helpText={data.helpText} />);

    const input = component.toJSON();

    expect(input.children.filter(ele => ele.type == 'input')[0].props.id).toBe(data.id);
  })

  it('input have the type from data', () => {
    const component = renderer.create(<InputPedro id={data.id} onChange={data.onChange} type={data.type} placeHolder={data.placeHolder} helpText={data.helpText} />);

    const input = component.toJSON();

    expect(input.children.filter(ele => ele.type == 'input')[0].props.type).toBe(data.type);
  })

  it('span have the helpText from data', () => {
    const component = renderer.create(<InputPedro id={data.id} onChange={data.onChange} type={data.type} placeHolder={data.placeHolder} helpText={data.helpText} />);

    const input = component.toJSON();
    
    expect(input.children.filter(ele => ele.type == 'span')[0].children.includes(data.helpText)).toBeTruthy();
  })

  it('input onChange function test', () => {
    const meEvent = { target: { value: 'test value' } };
    const component = renderer.create(<InputPedro id={data.id} onChange={() => data.onChange(meEvent.target.value)} type={data.type} placeHolder={data.placeHolder} helpText={data.helpText} />);

    component.root.findByType('input').props.onChange();
    
    expect(data.dataTest).toEqual(meEvent.target.value);
  })
})