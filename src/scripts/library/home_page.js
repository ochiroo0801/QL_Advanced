document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    animationTimingFunc: "ease-in-out",
    gap: 100,
    perView: 3,
  }).mount();

  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");
  let indices = document.querySelectorAll(".index");

  let currentIndex = 0;

  indices.forEach((index) => index.classList.remove("active"));
  indices[currentIndex].classList.add("active");

  function startNextDistortAnimation() {
    let prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 4;
    indices.forEach((index) => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    showTextAnimation("next");
  }

  function startPrevDistortAnimation() {
    currentIndex = currentIndex - 1 < 0 ? 3 : currentIndex - 1;
    indices.forEach((index) => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    showTextAnimation("prev");
  }

  nextBtn.addEventListener("click", () => {
    startNextDistortAnimation();
  });

  prevBtn.addEventListener("click", () => {
    startPrevDistortAnimation();
  });

  let titleDisplacement = 0;
  let descriptionDisplacement = 0;

  function showTextAnimation(direction) {
    if (titleDisplacement === 0 && direction === "prev") {
      titleDisplacement = -540;
    } else if (titleDisplacement === -540 && direction === "next") {
      titleDisplacement = 0;
    } else {
      titleDisplacement =
        direction === "next"
          ? titleDisplacement - 180
          : titleDisplacement + 180;
    }

    let title = document.querySelectorAll("#title h4");

    title.forEach((title) => {
      TweenMax.to(title, 1, {
        top: `${titleDisplacement}px`,
        ease: Strong.easeInOut,
      });
    });
  }
});
