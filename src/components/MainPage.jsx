import React, {Component} from 'react';



class MainPage extends Component {

    state = {
        employees : [
            {id: "1", name: "Employee1", position: "Position1", connections: ["Position2"]},
            {id: "2", name: "Employee2", position: "Position2", connections: ["Position1", "Position3"]},
            {id: "3", name: "Employee3", position: "Position3", connections: ["Position1", "Position2", "Position4"]},
            {id: "4", name: "Employee4", position: "Position4", connections: ["Position1", "Position2", "Position3", "Position5"]},
            {id: "5", name: "Employee5", position: "Position5", connections: ["Position1", "Position2", "Position3", "Position4", "GPE"]},
            {
                id: "6",
                name: "Kulcsár Nikolett",
                position: "GPE",
                connections: ["Operational\nControl\nand CI Team", "Site Manager", "RTP Manager", "GBPO"],
                fill: "green"
            },
            {id: "7", name: "Employee7", position: "Position7", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position8"]},
            {id: "8", name: "Employee8", position: "Position8", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position2", "Position7"]},
            {id: "9", name: "Employee9", position: "Position9", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position8", "Position7", "Position8"]},
            {id: "10", name: "Kulcs Aladár", position: "Site Manager", fill: "orange", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position1", "Position7"]},
            {id: "11", name: "Employee11", position: "Position11", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position1"]},
            {id: "12", name: "Employee12", position: "Position12", connections: ["Position1", "Position2", "Position3", "Position4", "Position5"]},
            {
                id: "13",
                name: "Ló Anna",
                position: "Operational\nControl\nand CI Team",
                fill: "orange",
                connections: [ "Site Manager", "RTP Manager", "GBPO", "Position3", "GPE", "Site Manager", "GBPO"]
            },
            {id: "14", name: "Employee14", position: "Position14", connections: ["Position1", "Position2", "Position3"]},
            {id: "15", name: "Employee15", position: "Position15", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14","RTP Manager", "Position17", "Position18"]},
            {id: "16", name: "Roz Ália", position: "RTP Manager", fill: "orange", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14", "Position17", "Position18"]},
            {id: "17", name: "Employee17", position: "Position17", connections: ["Site Manager", "Position11"]},
            {id: "18", name: "Employee18", position: "Position18", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14","RTP Manager", "Position17"]},
            {id: "19", name: "Employee19", position: "Position19", connections: ["Site Manager", "Operational\nControl\nand CI Team", "Position14","RTP Manager", "Position17", "Position18"]},
            {
                id: "20",
                name: "Kutya Füle",
                position: "GBPO",
                fill: "orange",
                connections: ["Operational\nControl\nand CI Team", "Site Manager", "RTP Manager", "GPE"]
            },
            {id: "21", name: "Employee21", position: "Position21", connections: ["GBPO", "Position11", "Operational\nControl\nand CI Team", "Position14","RTP Manager", "Position17", "Position18"]},
            {id: "22", name: "Employee22", position: "Position22", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14","RTP Manager", "Position17", "Position18"]},
            {id: "23", name: "Employee23", position: "Position23", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14","RTP Manager", "Position17", "Position18"]},
            {id: "24", name: "Employee24", position: "Position24", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14","RTP Manager", "Position18"]},
            {id: "25", name: "Employee25", position: "Position25", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14","RTP Manager"]},
            {id: "26", name: "Employee26", position: "Position26", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team", "Position14"]},
            {id: "27", name: "Employee27", position: "Position27", connections: ["Site Manager", "Position11", "Operational\nControl\nand CI Team"]},
            {id: "28", name: "Employee28", position: "Position28", connections: ["Site Manager", "Position11"]}
        ],
        centerStartPositionX : 700,
        centerStartPositionY : 225,
        previousCircle : null,
        isMainPage : true,
        positions : null
    }


    componentDidMount() {
        this.setState({positions : this.calculateConnectedCirclePositions(this.state.centerStartPositionX, this.state.centerStartPositionY)});
    }

    calculateConnectedCirclePositions(centerStartPositionX, centerStartPositionY) {
        let positions = [];
        let diffenrence = 225;
        positions.push({x: centerStartPositionX + diffenrence, y: centerStartPositionY});
        positions.push({x: centerStartPositionX - diffenrence, y: centerStartPositionY});
        positions.push({x: centerStartPositionX, y: centerStartPositionY + diffenrence});
        positions.push({x: centerStartPositionX, y: centerStartPositionY - diffenrence});
        positions.push({x: centerStartPositionX - diffenrence, y: centerStartPositionY - diffenrence});
        positions.push({x: centerStartPositionX + diffenrence, y: centerStartPositionY - diffenrence});
        positions.push({x: centerStartPositionX + diffenrence, y: centerStartPositionY + diffenrence});
        positions.push({x: centerStartPositionX - diffenrence, y: centerStartPositionY + diffenrence});
        return positions;
    }

    setUpMainCircles(emp, startpositionX, startpositionY, graph) {
        emp.forEach(element => {
            const rectNew = this.createCircle();
            if (element.id % 2 === 0) {
                startpositionY = startpositionY + 150;
            } else {
                startpositionY = startpositionY - 150;
            }
            rectNew.position(startpositionX, startpositionY);
            rectNew.attr("label/text", element.position);
            rectNew.attr("body/fill", element.fill);
            rectNew.addTo(graph);
            startpositionX += 100;
            if (element.id % 14 === 0) {
                startpositionY = startpositionY + 300;
                startpositionX = 50;
            }
        });
    }

    createPaper(graph, elementid) {
        // eslint-disable-next-line no-undef
        return new joint.dia.Paper({
            el: document.getElementById(elementid),
            model: graph,
            width: 1550,
            height: 800,
            gridSize: 1,
            drawGrid: true,
            background: {
                color: "#190053"
            }
        });
    }

    createMainGraph() {
        this.state.isMainPage = true;
        let startpositionX = 50;
        let startpositionY = 150;

        // eslint-disable-next-line no-undef
        let graph = new joint.dia.Graph();
        let paper = this.createPaper(graph, "page");

        this.setUpMainCircles(this.state.employees, startpositionX, startpositionY, graph);

        // paper.on("element:pointerdown", function (cellView, evt) {
        //     let position = cellView.model.attr("label/text");
        //     this.state.previousCircle = position;
        //     this.renderSingleGraph(position);
        //
        //     let el = document.getElementById("overlay");
        //     el.style.visibility = el.style.visibility === "visible" ? "hidden" : "visible";
        //     let el2 = document.getElementById("page");
        //
        //     el2.style.visibility = el2.style.visibility === "visible" ? "hidden" : "visible";
        // });
    }

    createCircle() {
        // eslint-disable-next-line no-undef
        const rectNew = new joint.shapes.standard.Circle();
        rectNew.attr({
            body: {
                fill: "#85C84B"
            },
            label: {
                fill: "black",
                fontSize: 17,
                fontVariant: "small-caps",
                textVerticalAnchor: "middle",
                textAnchor: "middle"
            }
        });
        rectNew.resize(120, 200);
        return rectNew;
    }

    render() {
        return (
            <div>
                {this.createMainGraph()}
            </div>
        );
    }


}


export default MainPage;
