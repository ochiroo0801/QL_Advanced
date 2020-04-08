const socialBtn = document.getElementById("social-btn");
const phoneBtn = document.getElementById("phone-btn");
const contactContainer = document.querySelector(".contact__container");

const contactPageEvent = () => {
  if (null === socialBtn) {
  } else {
    socialBtn.addEventListener("click", () => {
      contactContainer.classList.add("right-panel-active");
    });
  }
  if (null === phoneBtn) {
  } else {
    phoneBtn.addEventListener("click", () => {
      contactContainer.classList.remove("right-panel-active");
    });
  }
};

contactPageEvent();
