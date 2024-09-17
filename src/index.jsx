import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
// import MyForm from "./components/myForm/MyForm";
import LedyArt from "./ledyArt/LedyArt";
// import MyInput from "./components/myInput/MyInput";
// import LoginForm from "./components/loginForm/LoginForm";
// import HomeWork03 from "./hW/homeWork_03/HomeWork03"
// import MyButton from "./components/myButton/MyButton";
// import Counter from "./components/counter/Count";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <h1> </h1> */}
    {/* <LoginForm/> */}
    {/* <MyInput/> */}
    <LedyArt />
    {/* <HomeWork03/> */}
    {/* <MyForm /> */}
    {/* <MyButton/> */}
    {/* <Counter initial={ 100}/>
    <Counter initial={ 105}/>
    <Counter initial={ -30000}/> */}
  </>
);
