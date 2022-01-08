setInterval(moveClock, 1000);
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function moveClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + (min / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  console.log(hourDegree);
  console.log(secondsDegree);
  // console.log(hourDegree);
}
