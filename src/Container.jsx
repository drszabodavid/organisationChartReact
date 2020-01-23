import React, {Component} from 'react';
import App from "./components/App";

class Container extends Component {

    state = {
        currentCircle: null,
        previousCircle: null,
        employees: [
            {id: "1", name: "Employee1", position: "Position1", connections: ["Position2"]},
            {id: "2", name: "Employee2", position: "Position2", connections: ["Position1", "Position3"]},
            {id: "3", name: "Employee3", position: "Position3", connections: ["Position1", "Position2", "Position4"]},
            {
                id: "4",
                name: "Employee4",
                position: "Position4",
                connections: ["Position1", "Position2", "Position3", "Position5"]
            },
            {
                id: "5",
                name: "Employee5",
                position: "Position5",
                connections: ["Position1", "Position2", "Position3", "Position4", "GPE"]
            },
            {
                id: "6",
                name: "Kulcsár Nikolett",
                position: "GPE",
                connections: ["Operational\nControl\nand CI Team", "Site Manager", "RTP Manager", "GBPO"],
                fill: "green"
            },
            {
                id: "7",
                name: "Employee7",
                position: "Position7",
                connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position8"]
            },
            {
                id: "8",
                name: "Employee8",
                position: "Position8",
                connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position2", "Position7"]
            },
            {
                id: "9",
                name: "Employee9",
                position: "Position9",
                connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position8", "Position7", "Position8"]
            },
            {
                id: "10",
                name: "Kulcs Aladár",
                position: "Site Manager",
                fill: "orange",
                connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position1", "Position7"]
            },
            {
                id: "11",
                name: "Employee11",
                position: "Position11",
                connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position1"]
            },
            {
                id: "12",
                name: "Employee12",
                position: "Position12",
                connections: ["Position1", "Position2", "Position3", "Position4", "Position5"]
            },
            {
                id: "13",
                name: "Ló Anna",
                position: "Operational\nControl\nand CI Team",
                fill: "orange",
                connections: ["Site Manager", "RTP Manager", "GBPO", "Position3", "GPE", "Site Manager", "GBPO"]
            },
            {
                id: "14",
                name: "Employee14",
                position: "Position14",
                connections: ["Position1", "Position2", "Position3"]
            },
            {
                id: "15",
                name: "Employee15",
                position: "Position15",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14", "RTP Manager", "Position17", "Position18"]
            },
            {
                id: "16",
                name: "Roz Ália",
                position: "RTP Manager",
                fill: "orange",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14", "Position17", "Position18"]
            },
            {id: "17", name: "Employee17", position: "Position17", connections: ["Site Manager", "Position11"]},
            {
                id: "18",
                name: "Employee18",
                position: "Position18",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14", "RTP Manager", "Position17"]
            },
            {
                id: "19",
                name: "Employee19",
                position: "Position19",
                connections: ["Site Manager", "Operational\nControl\nand CI Team", "Position14", "RTP Manager", "Position17", "Position18"]
            },
            {
                id: "20",
                name: "Kutya Füle",
                position: "GBPO",
                fill: "orange",
                connections: ["Operational\nControl\nand CI Team", "Site Manager", "RTP Manager", "GPE"]
            },
            {
                id: "21",
                name: "Employee21",
                position: "Position21",
                connections: ["GBPO", "Position11", "Operational\nControl\nand CI Team", "Position14", "RTP Manager", "Position17", "Position18"]
            },
            {
                id: "22",
                name: "Employee22",
                position: "Position22",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14", "RTP Manager", "Position17", "Position18"]
            },
            {
                id: "23",
                name: "Employee23",
                position: "Position23",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14", "RTP Manager", "Position17", "Position18"]
            },
            {
                id: "24",
                name: "Employee24",
                position: "Position24",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14", "RTP Manager", "Position18"]
            },
            {
                id: "25",
                name: "Employee25",
                position: "Position25",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14", "RTP Manager"]
            },
            {
                id: "26",
                name: "Employee26",
                position: "Position26",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14"]
            },
            {
                id: "27",
                name: "Employee27",
                position: "Position27",
                connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team"]
            },
            {id: "28", name: "Employee28", position: "Position28", connections: ["Site Manager", "Position11"]}
        ],
        subPage: false
    };

    onMainButtonClick = async () => {
        await this.setState({currentCircle: null, previousCircle: null, subPage: false});
    };

    onReturnButtonClick = async () => {
        await this.setState({currentCircle: this.state.previousCircle, previousCircle: null, subPage: true});
    };

    circleClickOnMainPage = async position => {
        await this.setState({previousCircle: this.state.currentCircle, currentCircle: position, subPage : true});
        console.log(position);

    };


    render() {
        console.log(this.state.subPage);
        return (
            <App currentCircle={this.state.currentCircle}
                 previousCircle={this.state.previousCircle}
                 employees={this.state.employees}
                 subPage={this.state.subPage}
                 onMainButtonClick={this.onMainButtonClick}
                 onReturnButtonClick={this.onReturnButtonClick}
                 circleClickOnMainPage={this.circleClickOnMainPage}
            />
        );
    }
}


export default Container;
