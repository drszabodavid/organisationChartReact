import React, {Component} from 'react';



class MainPage extends Component {

    state = {
        previousCircle : null,
    };

    setUpMainCircles(emp, startPositionX, startPositionY, graph) {
        emp.forEach(element => {
            const rectNew = this.createCircle();
            if (element.id % 2 === 0) {
                startPositionY = startPositionY + 150;
            } else {
                startPositionY = startPositionY - 150;
            }
            rectNew.position(startPositionX, startPositionY);
            rectNew.attr("label/text", element.position);
            rectNew.attr("body/fill", element.fill);
            rectNew.addTo(graph);
            startPositionX += 100;
            if (element.id % 14 === 0) {
                startPositionY = startPositionY + 300;
                startPositionX = 50;
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
        let startPositionX = 50;
        let startPositionY = 150;

        // eslint-disable-next-line no-undef
        let graph = new joint.dia.Graph();
        this.createPaper(graph, "main");

        this.setUpMainCircles(this.props.employees, startPositionX, startPositionY, graph);

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
