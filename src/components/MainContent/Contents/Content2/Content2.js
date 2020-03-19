/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Content2.module.css";

let personData = [
    {input: "Имя",
    value: "Елена"},
    {input: "Мобильный телефон",
    value: "+38 (067) 3254989"},
    {input: "Электронная почта",
    value: "o.sonina1986@gmail.com"},
    {input: "Фактический город проживания",
    value: "Хмельницкий"},
    {input: "Место работы",
    value: "ФЛП Басистый М.И."},
    {input: "Должность",
    value: "аналитик консолидированной информации"}
];

class Trcomponent extends React.Component {
    render() {
      return (
          <tr>
            <td>{this.props.tdI}</td>
            <td>{this.props.tdV}</td>
          </tr>
      );
    }
  }

class Tbody extends React.Component {
    render() {
        const i = [];
        for (const [index, value] of personData.entries()) {
        i.push(<Trcomponent className={classes.item} tdI = {personData[index].input} tdV = {personData[index].value} />);
    }
        return (
            <tbody>
               {i}
            </tbody>
        );
    }
}

class Content2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Персональная страница</h1>
                <table className={classes.table}>
                    <Tbody />
                </table>
            </div>
        );
    }
}

export default Content2;