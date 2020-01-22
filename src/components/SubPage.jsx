import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';



class SubPage extends Component {

    state = {
        centerStartPositionX: this.props.centerStartPositionX,
        centerStartPositionY: this.props.centerStartPositionY,
        positions : this.calculateConnectedCirclePositions(this.props.centerStartPositionX, this.props.centerStartPositionY),
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
        return circle;
    }


    createLinksBetweenCircles(from, graph, to) {
        // eslint-disable-next-line no-undef
        let link = new joint.shapes.standard.Link();
        link.source(from);
        link.target(to);
        link.addTo(graph);
        link.attr("line/stroke", "orange");

        link.attr("textToRepresent", "Input :  Messaasdfasfasdfasdfasdfge\n " +
            "Recieve : asdfawfsertertwereasdfasfasdfd");
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
        this.addOnclickToArrows(paper)
    }

    addOnclickToArrows(paper) {
        paper.on("link:pointerclick", function (cellView, evt) {
            let model = cellView.model;
            if (model.attr('text/visibility') === 'visible') {
                model.attr('text/visibility', 'hidden');
                model.removeLabel()
            } else {
                model.attr('text/visibility', 'visible');
                model.appendLabel({
                    attrs: {
                        text: {
                            text: model.attr("textToRepresent"),
                        }
                    }
                });
            }
        });
    }


    addConnectionCirclesToCenter(emp, position, graph) {
        let foundEmployee = this.findElement(emp, "position", position);
        let listOfConnections = foundEmployee["connections"];
        let listOfNodeCircles = [];
        for (let i = 0; i < listOfConnections.length; ++i) {
            let rectNew = this.createCircle();
            rectNew.position(this.state.positions[i]["x"], this.state.positions[i]["y"]);
            rectNew.attr("label/text", listOfConnections[i]);
            rectNew.addTo(graph);
            listOfNodeCircles.push(rectNew);
        }
        return listOfNodeCircles;
    }

    renderSingleGraph(position) {
        // eslint-disable-next-line no-undef
        let graph = new joint.dia.Graph();
        let paper = this.createPaper(graph, "sub");
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

    render() {
        return (
            <div>
                {this.renderSingleGraph(this.props.circleToRender)}
            </div>
        );
    }
}

export default withRouter(SubPage);
