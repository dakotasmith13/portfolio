import React, { useEffect, useState } from "react";


const Menu = (props) => {
    const [visibile, setVisibile] = useState("hide");
    
    useEffect(() => {
        if (props.menuVisibility) {
            setVisibile("show");
        }

    });

    return (
        <div id="flyoutMenu"
            onMouseDown={props.handleMouseDown}
            className={visibile}>
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="firefly" />
            <div className="menu-items">
                <h1 className="grow"><a href="/" >Home</a></h1>             
                <h1 className="grow"><a href="/about">About</a></h1>
                <h1 className="grow"><a href="/resume">Resume</a></h1>
            </div>
        </div>
    );
}

export default Menu;