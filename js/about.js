let section_counter = document.querySelector('.const__list');
let counters = document.querySelectorAll('.const__val');
// Scroll Animation
let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    let speed = 50;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
      }
      UpdateCounter();
      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);
CounterObserver.observe(section_counter);


let checkBox = document.querySelector(".application__check-box");
let checkBoxT = document.querySelector(".application__check-box-text");
let check = document.querySelector(".application__check-img");

checkBox.addEventListener("click", () => {
    check.classList.toggle("application__check-img-show");
  });
  checkBoxT.addEventListener("click", () => {
    check.classList.toggle("application__check-img-show");
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true
  });