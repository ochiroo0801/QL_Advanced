function toggleMenu() {
  const toggle = document.getElementById("nav_toggle");
  const nav__container = document.getElementById("nav__container");
  const videoBody = document.getElementById("videoPage");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav__container.classList.toggle("change");

    null !== videoBody ? videoBody.classList.toggle("videoBodyActive") : "";
  });
}

export default toggleMenu;
