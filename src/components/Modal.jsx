import React from "react";
import "./modal.scss"

export default class Modal extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal" id="modal">
                <h2>Connections</h2>
                <div className="content">{this.props.children}</div>
            </div>
        )
    }
}