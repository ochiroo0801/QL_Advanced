function toggleMenu() {
  const toggle = document.querySelector(".nav_toggle");
  const nav__container = document.querySelector(".nav__container");
  const videoBody = document.querySelector(".videoBody");
  const chartBody = document.querySelector(".chartBody");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav__container.classList.toggle("change");

    null !== chartBody ? chartBody.classList.toggle("chartBodyActive") : "";

    null !== videoBody ? videoBody.classList.toggle("videoBodyActive") : "";
  });
}

export default toggleMenu;
