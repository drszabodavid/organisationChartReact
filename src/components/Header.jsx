import React, {Component} from 'react';
import "../index.css"


class Header extends Component {

    getClassForReturnButton() {
        if (this.props.previousCircle !== null)
            return "btn btn-outline-warning btn-albemarle";
        return "btn btn-outline-warning btn-albemarle disabled";
    }


    render() {
        return (
            <div id="container">
                <h3 className="header">Albemarle Corporation Budapest SSC</h3>
                <span className="btn-container">
                    <button id="mainButton" className="btn btn-outline-warning btn-albemarle"
                            onClick={this.props.onMainButtonClick}>Main Page</button>
                    <button id="returnToPrevious" className={this.getClassForReturnButton()}
                            onClick={this.props.onReturnButtonClick}>Return</button>
                    <button id="addNewPosition" className="btn btn-outline-warning btn-albemarle"
                            onClick={this.props.onNewPositionButtonClick}>New Position</button>
                </span>
            </div>
        );
    }
}

export default Header;

