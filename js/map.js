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