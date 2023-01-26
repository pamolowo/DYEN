const boxes = document.querySelectorAll(".box");

let i = 0;

function changeColor() {
  boxes[i].style.backgroundColor = "red";
  i++;
  if (i === boxes.length) {
    i = 0;
  }
}

setInterval(changeColor, 1000);
// In the JavaScript, it selects all elements with the class "box" and stores them in the boxes variable. Then it uses a setInterval() function to call the changeColor() function every 1000 milliseconds (1 second).
// The changeColor() function sets the background color of the current box to red and increments the index i. If i is equal to the number of boxes, it resets the index back to 0 so the animation can repeat.

