import React, {Component} from 'react';
import "../index.css"

class Header extends Component {
    render() {
        return (
            <div id="container">
                <h3 className="header">Albemarle Hungary Kft.</h3>
                <span className="btn-container">
                    <button id="mainButton" className="btn btn-outline-warning btn-albemarle" onClick="handleMainButtonCLick">Main Page</button>
                    <button id="returnToPrevious" className="btn btn-outline-warning btn-albemarle"
                    onClick="handleReturnToPreviousClick">Return</button>
                    <button id="addNewPosition" className="btn btn-outline-warning btn-albemarle "
                    onClick="handleAddNewPositionClick">New Position</button>
                </span>
            </div>
        );
    }
}

export default Header;

