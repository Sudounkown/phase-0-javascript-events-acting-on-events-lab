// Your code here
const dodger = document.getElementById("dodger")

dodger.style.backgroundColor = "#0000FF"
dodger.style.bottom = "0px"
dodger.style.right = "0px"


document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
  else if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
});

const moveDodgerLeft = () => {

    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
    dodger.style.left = `${left - 1}px`;

}}



const moveDodgerRight = () => {

 const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
    dodger.style.left = `${left + 1}px`;
}}