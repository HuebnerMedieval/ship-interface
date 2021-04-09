import React, { Component } from 'react'

// form for adding new crew member
class CrewForm extends Component {
    // empty state for a controlled form
    state = {
        crew: {
            name: "",
            role: "",
            status: "green"
        },
        // loading status, in cases needed later
        loading: false
    }

    // handles the controlled form, updating state on button press
    handleChange = event => {
        this.setState({...this.state,
            crew: {...this.state.crew,
            [event.target.name]: event.target.value
            }
        })
    }

    // handles behavior on form submission
    handleSubmit = event => {
        event.preventDefault()
        // saves form data/state as variable to send with the addCrew dispatch
        const crewmate = {...this.state.crew}
        this.props.addCrew(crewmate)
        // resets state to clear the form
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