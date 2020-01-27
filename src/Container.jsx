import React, {Component} from 'react';
import App from "./components/App";
let json = require('./employees.js');


class Container extends Component {

    state = {
        currentCircle: null,
        previousCircle: null,
        employees: [],
        subPage: false,
        showNewForm: false
    };

    componentDidMount() {
        this.setState({employees : json.getAllEmployees()})
    }


    onMainButtonClick = async () => {
        await this.setState({currentCircle: null, previousCircle: null, subPage: false});
    };

    onReturnButtonClick = async () => {
        if (this.state.previousCircle !== null)
            await this.setState({
                currentCircle: this.state.previousCircle,
                previousCircle: null,
                mainPage: false,
                subPage: true
            });
    };

    circleClickOnMainPage = async position => {
        await this.setState({previousCircle: this.state.currentCircle, currentCircle: position, subPage: true});
    };

    onNewPositionButtonClick = (name, position, connection) => {
        let newEmployee = {id: "30", name: "David", position: "Position30", connections: ["Position1", "Position2"]};
        json.addNewEmployee(newEmployee);
        this.setState({
            currentCircle: null,
            previousCircle: null,
            subPage: false,
            showNewForm: !this.state.showNewForm
        });

    };

    closeForm = () => {
        this.setState({showNewForm: false})
    };


    render() {
        return (
            <App
                currentCircle={this.state.currentCircle}
                previousCircle={this.state.previousCircle}
                employees={this.state.employees}
                subPage={this.state.subPage}
                showNewForm={this.state.showNewForm}
                newPositionPage={this.state.newPositionPage}
                onMainButtonClick={this.onMainButtonClick}
                onReturnButtonClick={this.onReturnButtonClick}
                circleClickOnMainPage={this.circleClickOnMainPage}
                onNewPositionButtonClick={this.onNewPositionButtonClick}
                closeForm={this.closeForm}
                onFormSubmit={this.onFormSubmit}
            />
        );
    }
}


export default Container;
