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
