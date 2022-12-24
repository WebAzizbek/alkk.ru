let checkBox = document.querySelector(".application__check-box");
let checkBoxT = document.querySelector(".application__check-box-text");
let check = document.querySelector(".application__check-img");

checkBox.addEventListener("click", () => {
  check.classList.toggle("application__check-img-show");
});
checkBoxT.addEventListener("click", () => {
  check.classList.toggle("application__check-img-show");
});

const swiper = new Swiper(".mySwip", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
});

let barsBtn = document.querySelector(".bars-btn");
let run = document.querySelector(".run");
let x = document.querySelector(".run__header-x");

barsBtn.addEventListener("click", () => {
    run.style.translate = "0%";
    run.style.opacity = "1";
  });

  x.addEventListener("click", () => {
    run.style.translate = "-100%";
    run.style.opacity = "0";
  });
