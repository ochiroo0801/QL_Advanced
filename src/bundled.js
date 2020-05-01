import "../src/styles/styles.css";
import toggleMenu from "./scripts/toggle_menu";
import backToTop from "./scripts/toTop";
import homeSlide from "./scripts/home_slider";
// import "./scripts/library/_chart1";
// import "./scripts/library/_chart2";
import colorController from "./scripts/color_control";
import contactAnim from "./scripts/contact";
import videoSlider from "./scripts/library/_video_slide";
import venoBox from "./scripts/library/_venobox";

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector(".body");

  if (body.id === "homePage") {
    console.log("home-page");
    homeSlide();
    toggleMenu();
  }

  if (body.id === "videoPage") {
    console.log("video-page");
    toggleMenu();
    venoBox();
    videoSlider();
    colorController();
    backToTop();
  }

  if (body.id === "chartPage") {
    console.log("chart-page");
    toggleMenu();
  }

  if (body.id === "contactPage") {
    console.log("contact-page");
    toggleMenu();
    colorController();
    contactAnim();
  }
});
