let barsBtn = document.querySelector('.bars-btn');
let run = document.querySelector('.run');
let x = document.querySelector('.run__header-x');
let galochkaBox = document.querySelector('.region__promoted-box');
let galochka = document.querySelector('.region__promted-arrow');
let dropdawns = document.querySelectorAll('.region__dropdown');
let inp = document.querySelector('.range-input');


barsBtn.addEventListener('click', () => {
    run.style.translate = '0%';
    run.style.opacity = '1';

})
x.addEventListener('click', () => {
    run.style.translate = '-100%';
    run.style.opacity = '0';

})
galochkaBox.addEventListener('click', () => {
    galochka.classList.toggle('region__promted-arrow-none');
})

dropdawns.forEach(item => {
    item.addEventListener('click', (e) => {
        dropdawns.forEach(i => {
            if(i !== item) i.classList.remove('region__show')
        });
        item.classList.toggle('region__show');
        item.querySelector('span').innerText = e.target.innerText
    });
});

inp.addEventListener('input', () => {
    inp.style.backgroundSize = `${inp.value}% 100%`
})
inp.addEventListener('input', () => {
    document.querySelector('.range-val').innerText = `${inp.value} руб./мес.`
    document.querySelector('.range-val').innerHTML = `<span class="range-span">${inp.value}</span> руб./мес.`
})
