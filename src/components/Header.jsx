import React, {Component} from 'react';
import "../index.css"
import {Link} from "react-router-dom";


class Header extends Component {

    getClassFOrReturnButton() {
        if (this.props.previousCircle !== null)
            return "btn btn-outline-warning btn-albemarle";
        return "btn btn-outline-warning btn-albemarle disabled";
    }


    render() {
        return (
            <div id="container">
                <h3 className="header">Albemarle Hungary Kft.</h3>
                <span className="btn-container">
                    <Link to="/" role="button" className="header-button">
                                 <button id="mainButton" className="btn btn-outline-warning btn-albemarle"
                                         onClick={this.props.onMainButtonClick}>Main Page</button>
                    </Link>

                    <Link to="/" role="button" className="header-button">
                            <button id="returnToPrevious" className={this.getClassFOrReturnButton()}
                                        onClick={this.props.onReturnButtonClick}>Return</button>
                    </Link>

                    <button id="addNewPosition" className="btn btn-outline-warning btn-albemarle "
                    >New Position</button>
                </span>
            </div>
        );
    }
}

export default Header;

