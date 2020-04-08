const toggle = document.querySelector(".nav_toggle");
const nav__container = document.querySelector(".nav__container");
const content = document.querySelector(".content");
const indicator = document.querySelector(".side-indicator");
const videoBody = document.querySelector(".videoBody");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav__container.classList.toggle("change");

  if (null === content) {
  } else {
    content.classList.toggle("contentA");
    indicator.classList.toggle("indicatorA");
  }

  if (null === videoBody) {
  } else {
    videoBody.classList.toggle("videoBodyActive");
  }
});

export default toggle;
