/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Albom.module.css";


class AlbomImg extends React.Component {
    render () {
        return (
            <div>
               <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}

class AlbomContentItem extends React.Component {
    render () {
        return (
            <p>{this.props.name}</p>
        );
    }
}

class AlbomContent extends React.Component {
    render() {
        return (
            <div>
                <AlbomContentItem name="Призрак Оперы (англ. The Phantom of the Opera) — мюзикл Эндрю Ллойда Уэббера, основанный на одноименном романе французского писателя Гастона Леру. Музыка была написана Ллойдом Уэббером, основная часть текстов — Чарльзом Хартом, а его отдельные фрагменты — Ричардом Стилгоу. Сюжет повествует нам о талантливой певице Кристине Даэ, которая становится объектом одержимости таинственного, обезображенного музыкального гения" />
                <AlbomContentItem name="Призрак Оперы» состоялась в Вест-Энде в 1986 году и на Бродвее в 1988 году. Спектакль стал самым продолжительным мюзиклом в истории Бродвея, перегнав по показам мюзикл «Кошки» в 2006 году. Это второй после «Отверженных» долгоиграющий мюзикл и третий самый долгоиграющий спектакль в истории Вест-Энда." />
                <AlbomContentItem name="Призрак Оперы» выиграл премию «Оливера» в 1986 году и премию «Тони» в 1988 году в номинации «Лучший мюзикл». Первый исполнитель роли Призрака — Майкл Кроуфорд выиграл премию «Оливера» в 1986 году и премию «Тони» в 1988 году в номинации «Лучший главный актёр в мюзикле». Шоу было поставлено в 151 городе 30 стран, его посмотрело более 150 миллионов человек. С международными сборами в 6 миллиардов долларов, «Призрак Оперы» стал самым кассовым развлекательным событием всех времён. Одна только Нью-йоркская постановка собрала 853 миллиона долларов, что делает это шоу вторым самым финансово успешным в истории Бродвея (после мюзикла «Король Лев»)." />
            </div> 
        );
    }
}

class Albom extends React.Component {
    render() {
        return (
            <div className={classes.page}>
                <h1>Призрак оперы</h1>
                <div className={classes.content}>
                    <AlbomImg src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/56/%D0%90%D1%84%D0%B8%D1%88%D0%B0_%D0%B1%D1%80%D0%BE%D0%B4%D0%B2%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8_%D0%BC%D1%8E%D0%B7%D0%B8%D0%BA%D0%BB%D0%B0_%D0%9F%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D0%BA_%D0%9E%D0%BF%D0%B5%D1%80%D1%8B.jpg/251px-%D0%90%D1%84%D0%B8%D1%88%D0%B0_%D0%B1%D1%80%D0%BE%D0%B4%D0%B2%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8_%D0%BC%D1%8E%D0%B7%D0%B8%D0%BA%D0%BB%D0%B0_%D0%9F%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D0%BA_%D0%9E%D0%BF%D0%B5%D1%80%D1%8B.jpg" alt="Обложка альбома" />
                    <AlbomContent />
                </div>
            </div>
        );
    }
}

export default Albom;