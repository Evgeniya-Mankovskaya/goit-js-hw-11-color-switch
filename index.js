import refs from "./refs.js";
const { body, startBtn, stopBtn } = refs;
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
startBtn.addEventListener("click", changeBgc);
stopBtn.addEventListener("click", stopChangebgc);
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
