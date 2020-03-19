import React from "react";
import classes from "./Content1.module.css";
import Albom from "./Albom/Albom";
import Ispolniteli from "./Ispolniteli/Ispolniteli";
import Izdateli from "./Izdateli/Izdateli";


class Content1 extends React.Component {
    render() {
        return (
            <div className={classes.pageItem}>
                <Albom />
                <Ispolniteli />
                <Izdateli />
            </div>
        );
    }
}

export default Content1;