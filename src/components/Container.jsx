import React, {Component} from 'react';
import App from "./App";

class Container extends Component {

    state = {
        currentCircle: null,
        previousCircle: null,
        employees: [],
        subPage: false,
        showNewForm: false,
    };


    componentDidMount() {
        this.setState({employees: JSON.parse(localStorage.getItem("employees"))})
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

    circleClickOnMainPage = position => {
        this.setState({previousCircle: this.state.currentCircle, currentCircle: position, subPage: true});
    };

    onNewPositionButtonClick = (event, name, position, connection) => {
        event.preventDefault()
        let newEmployee = {};
        newEmployee.id = "28";
        newEmployee.name = "Position28";
        newEmployee.position = "Position28";
        newEmployee.connections =  [
            {
                "name": "Position1",
                "input": "TESTINPUT",
                "output": "TESTOUTPUT"
            },
            {
                "name": "Position3",
                "input": "TESTINPUT",
                "output": "TESTOUTPUT"
            }
        ];

        let employees = [];
        employees = JSON.parse(localStorage.getItem("employees"));
        employees.push(newEmployee);
        localStorage.setItem("employees", JSON.stringify(employees))
         this.setState({
             currentCircle: null,
             previousCircle: null,
             subPage: false,
             showNewForm: !this.state.showNewForm,
             employees : JSON.parse(localStorage.getItem("employees"))
        });
        console.log(employees)
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
