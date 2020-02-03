import React from 'react';
import "./css/modal.css"

class NewPosition extends React.Component {

    state = {
        name: "",
        position: "",
        connection: ""
    };

    handlePositionChange = (event) => {
        this.setState({position: event.target.value});
    };

    handleConnectionChange = (event) => {
        this.setState({connection: event.target.value});
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleSubmit = (event) => {
        this.props.onNewPositionButtonClick(event, this.state.name, this.state.position, this.state.connection)
    };


    render() {
        if (this.props.showForm) {
            return (
                <div className="subModal">
                    <div className="content">
                        <form>
                            <div>
                                <input placeholder="Name" type="text" value={this.state.name}
                                       onChange={this.handleNameChange}/>
                                <input placeholder="Position" type="text" value={this.state.position}
                                       onChange={this.handlePositionChange}/>
                                <input placeholder="Connection" type="text" value={this.state.connection}
                                       onChange={this.handleConnectionChange}/>
                            </div>
                            <input onClick={this.state.handleSubmit} type="submit" value="Submit"/>
                            <button onClick={this.props.closeForm}>Close</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default NewPosition;
