import React, { Component } from 'react'

class CrewForm extends Component {
    state = {
        crew: {
            name: "",
            role: "",
            status: "green"
        },
        loading: false
    }

    handleChange = event => {
        this.setState({...this.state,
            crew: {...this.state.crew,
            [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const crewmate = {...this.state.crew}
        this.props.addCrew(crewmate)
        this.setState({
            crew: {
                name: "",
                role: "",
                status: "green"
            },
            loading: false
        })
    }
    
    render() {
        return (
            <div id="crew-form">
                <h5>New Crew</h5>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" value={this.state.crew.name} onChange={this.handleChange}/> <br/>

                    <label>Role: </label>
                    <input type="text" name="role" value={this.state.crew.role} onChange={this.handleChange}/> <br/>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default CrewForm