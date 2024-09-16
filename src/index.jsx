import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import LedyArt from "./ledyArt/LedyArt";
// import MyInput from "./components/myInput/MyInput";
// import LoginForm from "./components/loginForm/LoginForm";
// import HomeWork03 from "./homeWork03/HomeWork03";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1> </h1>
    {/* <LoginForm/> */}
    {/* <MyInput/> */}
    <LedyArt />
    {/* <HomeWork03/> */}
  </>
);
