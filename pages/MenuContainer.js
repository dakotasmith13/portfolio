import React, { Component } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu.js'

class MenuContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.onClick = this.onClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    onClick(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <>
                <IconButton onClick={this.onClick}>
                    <MenuIcon color="secondary" fontSize="large" />
                </IconButton>
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
            </>
        );
    }
}

export default MenuContainer;