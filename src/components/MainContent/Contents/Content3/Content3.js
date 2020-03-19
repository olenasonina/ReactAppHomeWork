/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Content3.module.css";


let personData = [
    {input: "Имя:  ",
    type: "text",
    value: "Елена"},
    {input: "Мобильный телефон:  ",
    type: "phone",
    value: "+38 (067) 3254989"},
    {input: "Электронная почта:  ",
    type: "e-mail",
    value: "o.sonina1986@gmail.com"},
    {input: "Фактический город проживания:  ",
    type: "text",
    value: "Хмельницкий"},
    {input: "Место работы:  ",
    type: "text",
    value: "ФЛП Басистый М.И."},
    {input: "Должность:  ",
    type: "text",
    value: "аналитик консолидированной информации"}
];

class Formitem extends React.Component {
    render() {
      return (
          <div className={classes.item}>
          <label htmlFor={this.props.id}>
            {this.props.tdI}
            <input id={this.props.id} type={this.props.tdT} placeholder={this.props.tdV} value={this.props.value} /><br />
          </label>
          </div>
      );
    }
  }

class Formcontainer extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      newUser: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  
  handleClearForm(e) {
    e.preventDefault();
      this.setState({ 
        newUser: ["", "", "", "", "", ""]
      });
      console.log("ok");
  }
  
  handleInput(e) {
    e.preventDefault();
    let value = e.target.value;
    let id = e.target.id;
    console.log(e.target.value, e.target.id);
   }

    render() {
        const i = [];
        for (const [index, value] of personData.entries()) {
        i.push(<Formitem 
          className={classes.item} 
          id = {index} 
          tdI = {personData[index].input} 
          tdT = {personData[index].type} 
          tdV = {personData[index].value} 
          value = {this.state.newUser[index]} 
          onChange={this.handleInput} />);
    }
        return (
            <form className={classes.table}>
               {i}
               <button type="submit" onClick={ this.handleClearForm }>Возврат начальных значений</button>
            </form>
        );
    }
}

class Content3 extends React.Component {
    render() {
        return (
            <div>
                <h1>Персональная страница</h1>                
                <Formcontainer />                
            </div>
        );
    }
}

export default Content3;