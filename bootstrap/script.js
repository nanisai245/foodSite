"use strict";

const circleSlide = document.querySelectorAll(".image");

console.log(circleSlide);

circleSlide.forEach((val, key) => {
  console.log(val);
  const trans = `rotate(${(360 / 10) * (key + 1)}deg)`;
  console.log(trans);
  val.style.transform = trans;
  val.style.animationDelay = `${key}s`;
});

const sliders = document.querySelectorAll(".slider");

sliders.forEach((scroller) => {
  //   scroller.setAttribute("data-animated", true);

  const innerSlide = scroller.querySelector(".list");
  const slideInfo = Array.from(innerSlide.children);

  slideInfo.forEach((each) => {
    const duplicate = each.cloneNode(true);
    duplicate.setAttribute("aria-hidden", true);
    innerSlide.appendChild(duplicate);
  });
});

const listEl = document.querySelectorAll(".list");

listEl.forEach((each) => {
  each.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("random--img")) {
      // console.log(e.clientX);
      // console.log(e.target.clientWidth);
      // const stopDistance = e.clientX;
      // each.style.transform = `translateX(-${stopDistance}px)`;
      e.target.classList.add("transform");
    }
  });

  each.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("random--img")) {
      e.target.classList.remove("transform");
    }
  });
});
