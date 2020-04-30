const color = document.querySelectorAll(".color__control span");
const root = document.querySelector(":root");
const geer = document.getElementById("geer");
const colorControl = document.querySelector(".color__control");

color.forEach((swap) => {
  swap.addEventListener("click", (e) => {
    root.style.setProperty("--mainYellow", e.target.style.background);
  });
});

geer.addEventListener("click", () => {
  colorControl.classList.toggle("activeColor");
});
