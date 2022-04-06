import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import AiOutlineSend from 'react-icons/ai'

import InputPedro from '../../atoms/input';
import ButtonPedro from '../../atoms/button';
import AlertPedro from '../../atoms/alert';

class FormPedro extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastName: '',
      ready: false
    }
  }

  componentDidMount(){
    this.setState({
      name: 'Pedro'
    })
  }

  handleName(name){
    this.setState({...this.state, name})
  }

  handleLastName(lastName){
    this.setState({...this.state, lastName})
  }

  showData(){
    const toggleReady = !this.state.ready
    this.setState({...this.state, toggleReady})
  }

  render(){
    return(
      <Form>
        <h1>Form name and last name :v</h1>
        <InputPedro id="name" label="Name" onChange={this.handleName} type="text" placeHolder="Name" helpText="Write your name please" />
        <InputPedro id="lastName" label="Last Name" onChange={this.handleLastName} type="text" placeHolder="Last Name" helpText="Write your last name please" />
        <ButtonPedro showData={this.showData} textButton="send" endIcon={<AiOutlineSend />}/>

        {
          this.state.ready &&
            <AlertPedro type="success" message={`Feliciadades ${this.state.name} ${this.state.lastName}, eres el mejor`} />
        }
      </Form>
    )
  }
}

export default FormPedro