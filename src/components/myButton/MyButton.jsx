// // import "./components/myButton/myButton";
// // function MyButton() {
// //   return <button className='myButton'>Click me!</button>;
// // }

// // export default MyButton;
// import React from "react";
// function MyButton() {
//   const handleClick = () => {
//     console.log("click!");
//   };

//   const handleSubmit = () => {
//     console.log("submit!!");
//   };

//   const handleReset = () => {
//     console.log("reset...");
//   };

//   const handleMyHobby = () => {
//     console.log("myHobby");
//   };

//   const handleMyInput = (text, func, type ) => {
//     console.log({handleMyInput},);
//   };

//   return (
//     <div className="all-container ">
//       <MyButton text={"нажать"} func={handleClick} />
//       <MyButton text={"подтвердить"} func={handleSubmit} />
//       <MyButton text={"обновить"} func={handleReset} />
//       <MyButton text={"мои увлечения"} func={handleMyHobby} />
//       <MyButton text={"ввести текст"} func={handleMyInput} type={MyButton}/>
//     </div>
//   );
// }
// export default MyButton;

import "./myButton.css";

// мы забираем переданные данные в круглых скобках
// обычно мы используем деструктуризацию для того чтобы достать значения пропсов по ключам и положить их в соответствующие переменные
function MyButton({text, onClick, type}) {
  return <button type={type} onClick={onClick} className="myButton">{text}</button>;
}

export default MyButton;