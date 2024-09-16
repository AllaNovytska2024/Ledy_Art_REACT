import React from "react";
import "./ledyArt.css";
import jsxImg from "../assets/image/jsx.jpg";
import allaImg from "../assets/image/allaImg.jpg";
import LoginForm from "../components/loginForm/LoginForm"
import MyInput from "../components/myInput/MyInput";

import myButton from "../components/myButton/MyButton";

function LedyArt() {
  return (
    <>
      <header>
        <>
          <div className="App font-effect-fire-animation">
            <h1>ДОБРА ВСЕМ ДОБРЫМ ЛЮДЯМ !</h1>
            
            <h2>Рада вас видеть на своем проекте.</h2>
          </div>
        </>
        <>
          <div className="but-greed ">
            <button className="myButton" type="MyButton">
              обо мне
            </button>
            <button className="myButton" type="MyButton">
              соцсети
            </button>
            <button className="myButton" type="MyButton">
              профессии
            </button>
            <button className="myButton" type="MyButton">
              хобби
            </button>
            <button className="myButton" type="MyButton">
              мои сайты
            </button>
            <button className="myButton" type="MyButton">
              мои картины
            </button>
            <button className="myButton" type="MyButton">
              книги
            </button>
            <button className="myButton" type="MyButton">
              кулинария
            </button>
            <button className="myButton" type="MyButton">
              кондитерка
            </button>
            <button className="myButton" type="MyButton">
              дизайн ногтей
            </button>
            <button className="myButton" type="MyButton">
              косметолог
            </button>
            <button className="myButton" type="MyButton">
              татту
            </button>
            <button className="myButton" type="MyButton">
              стильные стрижки
            </button>
            <button className="myButton" type="MyButton">
              грумминг
            </button>
          </div>
        </>
      </header>

      <main>
        <p className="App font-effect-fire-animation">
          Это пробный проект практика-работа в REACT
        </p>
       
        <div className="App">
          <img className="jsxImg" src={jsxImg} alt=""></img>
        </div>
      </main>
      <footer>
        <div className="allaNovytska">
          <img className="allaImg" src={allaImg} alt="Alla"></img>

          <span>
            Здесь разместится инфа. <br />Я буду добавлять контент и учиться на
            своих ошибках!
          </span>
          <button
            className="myButton font-effect-fire-animation"
            type="MyButton"
          >
            Add to favorites
          </button>

          <MyInput
        name="login"
        type="text"
        placeholder="Введите логин"
        label="Логин"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="Введите email"
        label="Email"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Введите пароль"
        label="Пароль"
      />
    
        </div>
      </footer>
    </>
  );
}

export default LedyArt;
