function contactAnim() {
  const socialBtn = document.getElementById("social-btn");
  const phoneBtn = document.getElementById("phone-btn");
  const contactContainer = document.querySelector(".contact__container");

  socialBtn.addEventListener("click", () => {
    contactContainer.classList.add("right-panel-active");
  });

  phoneBtn.addEventListener("click", () => {
    contactContainer.classList.remove("right-panel-active");
  });
}

export default contactAnim;
