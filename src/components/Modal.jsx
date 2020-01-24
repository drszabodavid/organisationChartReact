import React from "react";
import "./modal.css"

export default class Modal extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }


        return (
            <div onClick={this.props.onModalClick} className="subModal">
                <div className="content">
                    <div>{this.props.children}</div>
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}