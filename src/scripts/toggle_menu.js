const toggle = document.querySelector(".nav_toggle");
const nav__container = document.querySelector(".nav__container");
const content = document.querySelector(".content");
const indicator = document.querySelector(".side-indicator");
const videoBody = document.querySelector(".videoBody");
const chartBody = document.querySelector(".chartBody");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav__container.classList.toggle("change");

  null !== content ? content.classList.toggle("contentA") : "";
  null !== content ? indicator.classList.toggle("indicatorA") : "";

  null !== chartBody ? chartBody.classList.toggle("chartBodyActive") : "";

  null !== videoBody ? videoBody.classList.toggle("videoBodyActive") : "";
});
