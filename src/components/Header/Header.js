import React from "react";
import classes from "./Header.module.css";
import Task from "./Task";


class Header extends React.Component {
    render() {
        return (
        <header>
          <nav className={classes.header}>
            <Task className={classes.headerLink} name="Task1" id="1"/>
            <Task className={classes.headerLink} name="Task2" id="2"/>
            <Task className={classes.headerLink} name="Task3" id="3"/>
          </nav>
        </header>
        );
    }
}

export default Header;