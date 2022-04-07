import React, { Component } from 'react';
import { AiOutlineSend } from 'react-icons/ai'

import InputPedro from '../../atoms/input';
import ButtonPedro from '../../atoms/button';
import AlertPedro from '../../atoms/alert';

import './form.css';

class FormPedro extends Component{
  constructor(props) {
    super(props)

    this.handleName = (name) => {
      this.setState({...this.state, name})
    }
  
    this.handleLastName = (lastName) => {
      this.setState({...this.state, lastName})
    }
  
    this.showData = (e) => {
      e.preventDefault()

      if (this.state.name !== '' && this.state.lastName !== '') {
        this.setState({...this.state, ready: true, error: false})
      }else {
        this.setState({...this.state, error: true, ready: false})
      }
    }

    this.state = {
      name: '',
      lastName: '',
      ready: false,
      error: false
    }
  }

  componentDidMount(){
    
  }

  render(){
    return(
      <div className='containerForm'>
        <form className='formPedro' onSubmit={this.showData}>
          <h1>Form name and last name :v</h1>
          <InputPedro id="name" onChange={(e) => this.handleName(e.target.value)} type="text" placeHolder="Name" helpText="Write your name please" />
          <InputPedro id="lastName" onChange={(e) => this.handleLastName(e.target.value)} type="text" placeHolder="Last Name" helpText="Write your last name please" />
          <ButtonPedro textButton="send" endIcon={<AiOutlineSend />}/>

          {
            this.state.ready && this.state.name !== '' && this.state.lastName !== '' &&
              <AlertPedro type="success" message={`Congratulations ${this.state.name} ${this.state.lastName}, you are the best`} />
          }

          {
            this.state.error &&
              <AlertPedro type="error" message="Please fill in all the fields (name and last name)" />
          }
        </form>
      </div>
    )
  }
}

export default FormPedro