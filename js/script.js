const $ = document;
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let sliderItem = $.querySelectorAll(".slider-item");
let imgslider = $.querySelector(".img-slider");
let index = 0;
const imgs = ["./image/1.jpg", "./image/2.png", "./image/3.jpg"]


function prevItem() {
  index--
  if (index < 0) {
    index = imgs.length - 1
  }
  imgslider.src = imgs[index];
  console.log(index);
}


function nextItem() {
  if (index > imgs.length - 1) {
    index = 0;
  }
  imgslider.src = imgs[index];
  index++;
  // console.log(index);
}



setInterval(nextItem, 4000)
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
