import React, { Component } from "react"

class ListPedro extends Component {
    constructor(props){
        super(props)
        
        this.getData = async () => {
            const {data} = await api.get('/character')
            console.log(data)
            return data
        }

        this.state = {
            data: {}
        }
    
    }

    componentDidMount(){
        const newState = this.getData();

        this.setState({...this.state.data, data: newState})
        console.log(this.state.data);
    }

    render(){
        return (
            <>
                {
                    this.state.data &&
                    this.state.data.results.map(character => (
                        <div>
                            <p>{character.name}</p>
                            <p>{character.species}</p>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default ListPedro