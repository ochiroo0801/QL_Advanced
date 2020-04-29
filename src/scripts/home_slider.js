document.addEventListener("DOMContentLoaded", function () {
  const sliderBG = document.querySelector(".home_sliderBG").children;
  const sliderPagination = document.querySelector(".home__sliderPagination")
    .children;
  const content = document.querySelector(".sliderTitle-container");

  const secondSlide = document.querySelector(".home__second__container");
  const secondImages = document.querySelector(".home__second__container")
    .children;
  const secondStyle = document.querySelector(".home__sliderSecond");

  const nextBtn = document.getElementById("next__btn");
  const prevBtn = document.getElementById("prev__btn");

  const autoPlayDuration = 6000;

  let too = 0;

  let size = content.clientHeight;
  const sizeSecond = secondImages[0].clientWidth;

  autoPlay();

  secStyle();
  pagination();

  function secStyle() {
    // +5 padding
    secondStyle.style.width = `${sizeSecond * 3 + 5}px`;
  }

  function davtalt(e) {
    for (let i = 0; i < sliderBG.length; i++) {
      sliderBG[i].classList.remove("active");
      sliderBG[i].style.zIndex = "";
      sliderPagination[i].classList.remove("active");
      secondImages[i].classList.remove("active");
    }

    secondImages[e].classList.add("active");
    sliderBG[e].classList.add("active");
    sliderPagination[e].classList.add("active");

    content.style.transition = "transform 0.6s ease";
    content.style.transform = "translateY(" + -size * e + "px)";

    if (e === sliderBG.length) {
      content.style.transform = "translateY(" + (size * e) / size + "px)";
    }

    secondSlide.style.transition = "transform 0.6s ease";
    secondSlide.style.transform = "translateX(" + -sizeSecond * e + "px)";
    secondSlide.style.transform = "translateY =  20px";
  }

  nextBtn.addEventListener("click", function () {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener("click", function () {
    prevSlide();
    resetTimer();
  });

  function nextSlide() {
    if (too == sliderBG.length) {
      too = 0;
    }

    davtalt(too);
    if (too > 0) {
      sliderBG[too - 1].style.zIndex = "2";
    }

    too++;
  }

  function prevSlide() {
    if (too === 0) {
      too = sliderBG.length;
    }
    davtalt(too - 1);

    if (too < sliderBG.length) {
      sliderBG[too].style.zIndex = "2";
    }

    too--;
  }

  function pagination() {
    for (let d = 0; d < sliderPagination.length; d++) {
      const a = sliderPagination[d];

      a.addEventListener("click", function () {
        davtalt(d);
        if (d > 0) {
          if (d > too) {
            sliderBG[too].style.zIndex = "3";
          } else {
            sliderBG[too].style.zIndex = "2";
          }
        } else {
          sliderBG[too].style.zIndex = "2";
        }

        too = d;
        autoPlay();
        resetTimer();
      });
    }
  }
  let timer = setInterval(autoPlay, autoPlayDuration);

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, autoPlayDuration);
  }

  function autoPlay() {
    nextSlide();
  }
});
