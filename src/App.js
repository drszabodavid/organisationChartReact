import React from 'react';
import logo from './logo.svg';
import './App.css';

let mainButton = document.getElementById("mainButton");
mainButton.addEventListener("click", handleMainButtonCLick);

let returnButton = document.getElementById("returnToPrevious");
returnButton.addEventListener("click", handleReturnToPreviousClick);

const employees = [
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
  {id: "7", name: "Employee7", position: "Position7", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position6"]},
  {id: "8", name: "Employee8", position: "Position8", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position6", "Position7"]},
  {id: "9", name: "Employee9", position: "Position9", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position6", "Position7", "Position8"]},
  {id: "10", name: "Kulcs Aladár", position: "Site Manager", fill: "orange", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position6", "Position7"]},
  {id: "11", name: "Employee11", position: "Position11", connections: ["Position1", "Position2", "Position3", "Position4", "Position5", "Position6"]},
  {id: "12", name: "Employee12", position: "Position12", connections: ["Position1", "Position2", "Position3", "Position4", "Position5"]},
  {
    id: "13",
    name: "Ló Anna",
    position: "Operational\nControl\nand CI Team",
    fill: "orange",
    connections: [ "Site Manager", "RTP Manager", "GBPO", "Position3", "GPE", "Position10", "Position20"]
  },
  {id: "14", name: "Employee14", position: "Position14", connections: ["Position1", "Position2", "Position3"]},
  {id: "15", name: "Employee15", position: "Position15", connections: ["Position10", "Position11", "Position13", "Position14","Position16", "Position17", "Position18"]},
  {id: "16", name: "Roz Ália", position: "RTP Manager", fill: "orange", connections: ["Position10", "Position11", "Position13", "Position14", "Position17", "Position18"]},
  {id: "17", name: "Employee17", position: "Position17", connections: ["Position10", "Position11"]},
  {id: "18", name: "Employee18", position: "Position18", connections: ["Position10", "Position11", "Position13", "Position14","Position16", "Position17"]},
  {id: "19", name: "Employee19", position: "Position19", connections: ["Position10", "Position13", "Position14","Position16", "Position17", "Position18"]},
  {
    id: "20",
    name: "Kutya Füle",
    position: "GBPO",
    fill: "orange",
    connections: ["Operational\nControl\nand CI Team", "Site Manager", "RTP Manager", "Position13", "GPE"]
  },
  {id: "21", name: "Employee21", position: "Position21", connections: ["Position20", "Position11", "Position13", "Position14","Position16", "Position17", "Position18"]},
  {id: "22", name: "Employee22", position: "Position22", connections: ["Position10", "Position11", "Position13", "Position14","Position16", "Position17", "Position18"]},
  {id: "23", name: "Employee23", position: "Position23", connections: ["Position10", "Position11", "Position13", "Position14","Position16", "Position17", "Position18"]},
  {id: "24", name: "Employee24", position: "Position24", connections: ["Position10", "Position11", "Position13", "Position14","Position16", "Position18"]},
  {id: "25", name: "Employee25", position: "Position25", connections: ["Position10", "Position11", "Position13", "Position14","Position16"]},
  {id: "26", name: "Employee26", position: "Position26", connections: ["Position10", "Position11", "Position13", "Position14"]},
  {id: "27", name: "Employee27", position: "Position27", connections: ["Position10", "Position11", "Position13"]},
  {id: "28", name: "Employee28", position: "Position28", connections: ["Position10", "Position11"]}
];

const centerStartPositionX = 700;
const centerStartPositionY = 250;
let previousCircle = null;
let isMainPage = true;

const positions = calculateConnectedCirclePositions(centerStartPositionX, centerStartPositionY)

function calculateConnectedCirclePositions(centerStartPositionX, centerStartPositionY) {
  let positions = [];
  positions.push({x: centerStartPositionX + 250, y: centerStartPositionY});
  positions.push({x: centerStartPositionX - 250, y: centerStartPositionY});
  positions.push({x: centerStartPositionX, y: centerStartPositionY + 250});
  positions.push({x: centerStartPositionX, y: centerStartPositionY - 250});
  positions.push({x: centerStartPositionX - 250, y: centerStartPositionY - 250});
  positions.push({x: centerStartPositionX + 250, y: centerStartPositionY - 250});
  positions.push({x: centerStartPositionX + 250, y: centerStartPositionY + 250});
  positions.push({x: centerStartPositionX - 250, y: centerStartPositionY + 250});
  return positions;
}

function findElement(arr, propName, propValue) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i][propName] === propValue) return arr[i];
}

function createCenterCircle(graph, position) {
  let centerCircle = createCircle();
  centerCircle = designCenterCircle(centerCircle, graph, position);
  return centerCircle;
}

function designCenterCircle(circle, graph, position) {
  circle.position(centerStartPositionX, centerStartPositionY);
  circle.attr("label/text", position);
  circle.addTo(graph);
  return circle;
}

function addConnectionCirclesToCenter(emp, position, graph) {
  let foundEmployee = findElement(emp, "position", position);
  let listOfConnections = foundEmployee["connections"];
  let listOfNodeCircles = [];
  for (let i = 0; i < listOfConnections.length; ++i) {
    let rectNew = createCircle();
    rectNew.position(positions[i]["x"], positions[i]["y"]);
    rectNew.attr("label/text", listOfConnections[i]);
    rectNew.addTo(graph);
    listOfNodeCircles.push(rectNew);
  }
  return listOfNodeCircles;
}

function renderSingleGraph(position) {
  isMainPage = false;
  // eslint-disable-next-line no-undef
  let graph = new joint.dia.Graph();
  let paper = createPaper(graph, "overlay");
  let centerCircle = createCenterCircle(graph, position);
  let listOfNodeCircles = addConnectionCirclesToCenter(employees, position, graph);
  createLinksBetweenConnectionCircles(listOfNodeCircles, graph, centerCircle, paper);
  addOnclickFunctionToCircle(paper)
}

function addOnclickFunctionToCircle(paper) {
  paper.on("element:pointerdown", function (cellView, evt) {
    evt.stopPropagation();
    let position = cellView.model.attr("label/text");
    renderSingleGraph(position);
  });
}

function createLinksBetweenCircles(from, graph, to) {
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

function createLinksBetweenConnectionCircles(listOfNodeCircles, graph, centerCircle, paper) {
  listOfNodeCircles.forEach(element => {
    createLinksBetweenCircles(centerCircle, graph, element);
    createLinksBetweenCircles(element, graph, centerCircle);
  });
  addOnclickToArrows(paper)
}

function addOnclickToArrows(paper) {
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

function createPaper(graph, elementid) {
  // eslint-disable-next-line no-undef
  return new joint.dia.Paper({
    el: document.getElementById(elementid),
    model: graph,
    width: 1550,
    height: 800,
    gridSize: 1,
    drawGrid: true,
    background: {
      color: "rgba(0, 255, 0, 0.3)"
    }
  });
}

function setUpMainCircles(emp, startpositionX, startpositionY, graph) {
  emp.forEach(element => {
    const rectNew = createCircle();
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

function createMainGraph() {
  isMainPage = true;
  let startpositionX = 50;
  let startpositionY = 150;

  // eslint-disable-next-line no-undef
  let graph = new joint.dia.Graph();
  let paper = createPaper(graph, "page");

  setUpMainCircles(employees, startpositionX, startpositionY, graph);

  paper.on("element:pointerdown", function (cellView, evt) {
    var position = cellView.model.attr("label/text");
    previousCircle = position;
    renderSingleGraph(position);
    let el = document.getElementById("overlay");
    el.style.visibility = el.style.visibility === "visible" ? "hidden" : "visible";
    let el2 = document.getElementById("page");
    el2.style.visibility = el2.style.visibility === "visible" ? "hidden" : "visible";
  });
}

function createCircle() {
  // eslint-disable-next-line no-undef
  const rectNew = new joint.shapes.standard.Circle();
  rectNew.attr({
    body: {
      fill: "blue"
    },
    label: {
      fill: "white",
      fontSize: 15,
      fontVariant: "small-caps",
      textVerticalAnchor: "middle",
      textAnchor: "middle"
    }
  });
  rectNew.resize(120, 200);
  return rectNew;
}

function handleMainButtonCLick() {
  if (!isMainPage) {
    previousCircle = null;
    isMainPage = true;
    handleLayerVisibility("overlay");
    handleLayerVisibility("page");
    changePageSize("overlay");
  }
}

function handleLayerVisibility(elementId) {
  let el = document.getElementById(elementId);
  el.style.visibility = el.style.visibility === "visible" ? "hidden" : "visible";
}

function changePageSize(elementId) {
  let el = document.getElementById(elementId);
  el.style.width = "0";
  el.style.height = "0";
}

function handleReturnToPreviousClick() {
  if (previousCircle !== null)
    renderSingleGraph(previousCircle)
}



function App() {
  return (
    <div className="App">
      {createMainGraph()}
    </div>
  );
}

export default App;
