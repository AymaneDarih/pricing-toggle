"use:strict";
console.log("Hello world");

const priceTag1 = document.querySelector(".pricy-price__1");
const priceTag2 = document.querySelector(".pricy-price__2");
const priceTag3 = document.querySelector(".pricy-price__3");
const box = document.querySelector(".toggle-box");
const circle = document.querySelector(".circle");

console.log(circle);
box.addEventListener("click", function () {
  circle.classList.toggle("circle__active");
  if (circle.classList.contains("circle__active")) {
    box.style.background =
      "linear-gradient(-.25turn, hsl(236, 72%, 79%), hsl(237, 63%, 64%))";

    priceTag1.textContent = "19.99";
    priceTag2.textContent = "24.99";
    priceTag3.textContent = "39.99";
  } else {
    priceTag1.textContent = "199.99";
    priceTag2.textContent = "249.99";
    priceTag3.textContent = "399.99";
    box.style.background =
      "linear-gradient(.25turn, hsl(236, 72%, 79%), hsl(237, 63%, 64%))";
  }
});
