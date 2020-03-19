import React from "react";
import classes from "./MainContent.module.css";
import Content1 from "./Contents/Content1/Content1";
import Content2 from "./Contents/Content2/Content2";
import Content3 from "./Contents/Content3/Content3";
import { Route } from "react-router-dom";


class MainContent extends React.Component {
    render() {
        return (
            <div className={classes.mainContent}>
                <Route path='/task1' component={Content1} />
                <Route path='/task2' component={Content2} />
                <Route path='/task3' component={Content3} />              
            </div>
        );
    }
}

export default MainContent;