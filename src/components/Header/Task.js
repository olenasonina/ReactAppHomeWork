import React from "react";
import { Link } from "react-router-dom";

class Task extends React.Component {
    render() {
      // eslint-disable-next-line react/prop-types
      let path = "/task" + this.props.id;
      return (      
      // eslint-disable-next-line react/prop-types
      <Link to={path}>{this.props.name}</Link>
      );
    }
  }

  export default Task;
