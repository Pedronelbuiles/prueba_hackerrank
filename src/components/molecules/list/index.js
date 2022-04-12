import React, { Component } from "react"

import api from "../../../axios/api"

class ListPedro extends Component {
    constructor(props){
        super(props)
        
        this.getData = async () => {
            const {data} = await api.get('/character')
            
            this.setState({...this.state.data, data, respOk: true})
        }

        this.state = {
            data: {},
            respOk: false
        }
    
    }

    componentWillMount(){
        this.getData();
    }

    render(){
        const {respOk, data} = this.state;
        return (
            <div>
                <h2>Respuesta del api</h2>
                {
                    respOk && data.results && data.results.map(character => (
                        <div key={character.id}>
                            <p>{character.name}</p>
                            <p>{character.species}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ListPedro