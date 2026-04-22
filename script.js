const dot = document.querySelector(".cursor_dot");
const circle = document.querySelector(".cursor_circle");

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

function animate() {
  circleX += (mouseX - circleX) * 0.15;
  circleY += (mouseY - circleY) * 0.15;

  circle.style.left = circleX + "px";
  circle.style.top = circleY + "px";

  requestAnimationFrame(animate);
}

animate();