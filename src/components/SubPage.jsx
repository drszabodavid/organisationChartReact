import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Modal from "./Modal";


class SubPage extends Component {

    state = {
        centerStartPositionX: this.props.centerStartPositionX,
        centerStartPositionY: this.props.centerStartPositionY,
        positions: this.calculateConnectedCirclePositions(this.props.centerStartPositionX, this.props.centerStartPositionY),
        show: false,
        inputMessageInModal: null,
        outputMessageInModal: null
    };


    calculateConnectedCirclePositions(centerStartPositionX, centerStartPositionY) {
        let positions = [];
        let difference = 225;
        positions.push({x: centerStartPositionX + difference, y: centerStartPositionY});
        positions.push({x: centerStartPositionX - difference, y: centerStartPositionY});
        positions.push({x: centerStartPositionX, y: centerStartPositionY + difference});
        positions.push({x: centerStartPositionX, y: centerStartPositionY - difference});
        positions.push({x: centerStartPositionX - difference, y: centerStartPositionY - difference});
        positions.push({x: centerStartPositionX + difference, y: centerStartPositionY - difference});
        positions.push({x: centerStartPositionX + difference, y: centerStartPositionY + difference});
        positions.push({x: centerStartPositionX - difference, y: centerStartPositionY + difference});
        return positions;
    }

    findElement(arr, propName, propValue) {
        for (let i = 0; i < arr.length; i++)
            if (arr[i][propName] === propValue) return arr[i];
    }

    createCenterCircle(graph, position) {
        let centerCircle = this.createCircle();
        centerCircle = this.designCenterCircle(centerCircle, graph, position);
        return centerCircle;
    }

    designCenterCircle(circle, graph, position) {
        circle.position(this.state.centerStartPositionX, this.state.centerStartPositionY);
        circle.attr("label/text", position);
        circle.addTo(graph);
        circle.attr("body/fill", "yellow");
        return circle;
    }

    createLinksBetweenCircles(from, graph, to) {
        // eslint-disable-next-line no-undef
        let link = new joint.shapes.standard.Link();
        link.source(from);
        link.target(to);
        link.addTo(graph);
        link.attr("line/stroke", "orange");
        link.attr("textInput", from.attr("label/input"));
        link.attr("textOutput", from.attr("label/output"));
        link.attr({
            line: {
                stroke: 'blue',
                strokeWidth: 2
            }
        });
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

    createLinksBetweenConnectionCircles(listOfNodeCircles, graph, centerCircle, paper) {
        listOfNodeCircles.forEach(element => {
            this.createLinksBetweenCircles(centerCircle, graph, element);
            this.createLinksBetweenCircles(element, graph, centerCircle);
        });
        this.addOnclickToArrows(paper, this.showModal)
    }

    addConnectionCirclesToCenter(emp, position, graph) {
        let foundEmployee = this.findElement(emp, "position", position);
        let listOfConnections = foundEmployee["connections"];
        let listOfNodeCircles = [];
        for (let i = 0; i < listOfConnections.length; ++i) {
            let rectNew = this.createCircle();
            rectNew.position(this.state.positions[i]["x"], this.state.positions[i]["y"]);
            rectNew.attr("label/text", listOfConnections[i].name);
            rectNew.attr("label/input", listOfConnections[i].input);
            rectNew.attr("label/output", listOfConnections[i].output);
            rectNew.addTo(graph);
            listOfNodeCircles.push(rectNew);
        }
        return listOfNodeCircles;
    }

    renderSingleGraph(position) {
        // eslint-disable-next-line no-undef
        let graph = new joint.dia.Graph();
        let paper = this.createPaper(graph, "main");
        let centerCircle = this.createCenterCircle(graph, position);
        let listOfNodeCircles = this.addConnectionCirclesToCenter(this.props.employees, position, graph);
        this.createLinksBetweenConnectionCircles(listOfNodeCircles, graph, centerCircle, paper);
        let circleClickOnMainPage = this.props.circleClickOnMainPage;
        paper.on("element:pointerdown", function (cellView, evt) {
            let position = cellView.model.attr("label/text");
            circleClickOnMainPage(position);
        });

    }

    createPaper(graph, elementID) {
        // eslint-disable-next-line no-undef
        return new joint.dia.Paper({
            el: document.getElementById(elementID),
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

    showModal = (textInput, textOutput) => {
        this.setState({
            show: !this.state.show,
            inputMessageInModal: textInput,
            outputMessageInModal: textOutput,
        });
    };

    addOnclickToArrows(paper, showModal) {
        paper.on("link:pointerclick", function (cellView, evt) {
            let model = cellView.model;
            showModal(model.attr("textInput"), model.attr("textOutput"));
        });
    }

    onModalClick = () => {
        this.setState({show: !this.state.show})
    };

    render() {
        return (
            <div>
                <Modal onModalClick={this.onModalClick} show={this.state.show}
                       inputMessage={this.state.inputMessageInModal}
                       outputMessge={this.state.outputMessageInModal}>TextRoRepresent</Modal>
                {this.renderSingleGraph(this.props.circleToRender)}
            </div>
        );
    }
}

export default withRouter(SubPage);


