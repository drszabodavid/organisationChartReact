import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";

// let mainButton = document.getElementById("mainButton");
// mainButton.addEventListener("click", handleMainButtonCLick);
//
// let returnButton = document.getElementById("returnToPrevious");
// returnButton.addEventListener("click", handleReturnToPreviousClick);
//
//
//
// function findElement(arr, propName, propValue) {
//   for (let i = 0; i < arr.length; i++)
//     if (arr[i][propName] === propValue) return arr[i];
// }
//
// function createCenterCircle(graph, position) {
//   let centerCircle = createCircle();
//   centerCircle = designCenterCircle(centerCircle, graph, position);
//   return centerCircle;
// }
//
// function designCenterCircle(circle, graph, position) {
//   circle.position(centerStartPositionX, centerStartPositionY);
//   circle.attr("label/text", position);
//   circle.addTo(graph);
//   return circle;
// }
//
// function addConnectionCirclesToCenter(emp, position, graph) {
//   let foundEmployee = findElement(emp, "position", position);
//   let listOfConnections = foundEmployee["connections"];
//   let listOfNodeCircles = [];
//   for (let i = 0; i < listOfConnections.length; ++i) {
//     let rectNew = createCircle();
//     rectNew.position(positions[i]["x"], positions[i]["y"]);
//     rectNew.attr("label/text", listOfConnections[i]);
//     rectNew.addTo(graph);
//     listOfNodeCircles.push(rectNew);
//   }
//   return listOfNodeCircles;
// }
//
// function renderSingleGraph(position) {
//   isMainPage = false;
//   // eslint-disable-next-line no-undef
//   let graph = new joint.dia.Graph();
//   let paper = createPaper(graph, "overlay");
//   changePageSize("page");
//   let centerCircle = createCenterCircle(graph, position);
//   let listOfNodeCircles = addConnectionCirclesToCenter(employees, position, graph);
//   createLinksBetweenConnectionCircles(listOfNodeCircles, graph, centerCircle, paper);
//   addOnclickFunctionToCircle(paper)
//
// }
//
// function addOnclickFunctionToCircle(paper) {
//   paper.on("element:pointerdown", function (cellView, evt) {
//     evt.stopPropagation();
//     let position = cellView.model.attr("label/text");
//     renderSingleGraph(position);
//   });
//
// }
//
// function createLinksBetweenCircles(from, graph, to) {
//   // eslint-disable-next-line no-undef
//   let link = new joint.shapes.standard.Link();
//   link.source(from);
//   link.target(to);
//   link.addTo(graph);
//   link.attr("line/stroke", "orange");
//
//   link.attr("textToRepresent", "Input :  Messaasdfasfasdfasdfasdfge\n " +
//       "Recieve : asdfawfsertertwereasdfasfasdfd");
//   link.attr({
//     line: {
//       stroke: 'blue',
//       strokeWidth: 2
//     }
//   });
// }
//
// function createLinksBetweenConnectionCircles(listOfNodeCircles, graph, centerCircle, paper) {
//   listOfNodeCircles.forEach(element => {
//     createLinksBetweenCircles(centerCircle, graph, element);
//     createLinksBetweenCircles(element, graph, centerCircle);
//   });
//   addOnclickToArrows(paper)
// }
//
// function addOnclickToArrows(paper) {
//   paper.on("link:pointerclick", function (cellView, evt) {
//     let model = cellView.model;
//     if (model.attr('text/visibility') === 'visible') {
//       model.attr('text/visibility', 'hidden');
//       model.removeLabel()
//     } else {
//       model.attr('text/visibility', 'visible');
//       model.appendLabel({
//         attrs: {
//           text: {
//             text: model.attr("textToRepresent"),
//           }
//         }
//       });
//     }
//   });
// }
//

//
//
//
// function handleMainButtonCLick() {
//   if (!isMainPage) {
//     previousCircle = null;
//     isMainPage = true;
//     handleLayerVisibility("overlay");
//     handleLayerVisibility("page");
//     let el = document.getElementById("page");
//     el.style.width = "1550px";
//     el.style.height = "800px";
//     changePageSize("overlay");
//
//   }
// }
//
// function handleLayerVisibility(elementId) {
//   let el = document.getElementById(elementId);
//   el.style.visibility = el.style.visibility === "visible" ? "hidden" : "visible";
// }
//
// function changePageSize(elementId) {
//   let el = document.getElementById(elementId);
//   el.style.width = "0";
//   el.style.height = "0";
// }
//
// function handleReturnToPreviousClick() {
//   if (previousCircle !== null)
//     renderSingleGraph(previousCircle)
// }

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
