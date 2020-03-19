/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Ispolniteli.module.css";

let ispolniteliData = [
    {person: "Призрак Оперы", voice: "тенор/баритон", London: "Майкл Кроуфорд", Brodvey: "Майкл Кроуфорд", Moscow: "Дмитрий Ермак, Иван Ожогин"},
    {person: "Рауль, Виконт де Шаньи", voice: "тенор", London: "Стив Бартон", Brodvey: "Стив Бартон", Moscow: "Евгений Зайцев"},
    {person: "Убальдо Пьянджи", voice: "тенор", London: "Джон Эйрон", Brodvey: "Дэвид Романо", Moscow: "Оганес Георгиян"},
    {person: "Месье Ришар Фирмен", voice: "баритон", London: "Джон Сэвидент", Brodvey: "Николас Уайман", Moscow: "Юрий Мазихин"},
    {person: "Месье Жиль Андре", voice: "баритон", London: "Дэвид Фёрт", Brodvey: "Крис Грунендаал", Moscow: "Алексей Бобров"},
    {person: "Мег Жири", voice: "сопрано", London: "Джанет Девениш", Brodvey: "Элиза Хейнсон", Moscow: "Валерия Мигалина"},
    {person: "Мадам Жири", voice: "меццо-сопрано", London: "Мэри Миллар", Brodvey: "Лейла Мартин", Moscow: "Елена Чарквиани"},
    {person: "Кристина Даэ", voice: "сопрано", London: "Сара Брайтман", Brodvey: "Сара Брайтман", Moscow: "Елена Бахтиярова, Тамара Котова"},
    {person: "Карлотта Джудичелли", voice: "колоратурное сопрано", London: "Розмари Эш", Brodvey: "Джуди Кэй", Moscow: "Ирина Самойлова, Екатерина Лёхина"},
    {person: "Жозеф Буке", voice: "баритон/бас", London: "Янош Куруч", Brodvey: "Филип Стил", Moscow: "Пётр Маркин"}
];


class Trcomponent extends React.Component {
    render() {
      return (
          <tr>
            <td>{this.props.tdP}</td>
            <td>{this.props.tdV}</td>
            <td>{this.props.tdL}</td>
            <td>{this.props.tdB}</td>
            <td>{this.props.tdM}</td>
          </tr>
      );
    }
  }

class Tbody extends React.Component {
    render() {
        const i = [];
        for (const [index, value] of ispolniteliData.entries()) {
        i.push(<Trcomponent tdP = {ispolniteliData[index].person} tdV = {ispolniteliData[index].voice} tdL = {ispolniteliData[index].London} tdB = {ispolniteliData[index].Brodvey} tdM = {ispolniteliData[index].Moscow} />);
    }
        return (
            <tbody>
               {i}
            </tbody>
        );
    }
}

class Ispolniteli extends React.Component {
    render() {
        return (
            <table className={classes.table}>
                <caption>Исполнители</caption>
                <thead>
                    <tr>
                      <th>Персонаж</th>
                      <th>Голос</th>
                      <th>Оригинальный Лондонский состав</th>
                      <th>Оригинальный Бродвейский состав</th>
                      <th>Оригинальный Московский состав</th>
                    </tr>
                </thead>
                <Tbody />
            </table>
        );
    }
}

export default Ispolniteli;