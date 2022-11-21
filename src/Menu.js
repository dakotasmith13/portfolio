import React, { Component } from "react";

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <h2><a href="/">Home</a></h2>
                <h2><a href="/about">About</a></h2>
                <h2><a href="/resume">Resume</a></h2>
            </div>
        );
    }
}

export default Menu;