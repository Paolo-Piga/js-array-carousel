// array carosello
const carousel = [
    `img/01.webp`,
    `img/02.webp`,
    `img/03.webp`,
    `img/04.webp`,
    `img/05.webp`
];

// variabile per le frecce
let round = 0;

// creazione struttura img nel carosello
let  images = (document.getElementsByClassName(".container-img").innerHTML = `
<div><i class="fa-solid fa-arrow-up"></i></div>
<img class="img-carousel" src=${carousel}>
<div><i class="fa-solid fa-arrow-down"></i></div>
`);

// bottone per le frecce
let bottone = document.querySelector(".fa-arrow-up");

// click
bottone.addEventListener("click",function()
{
    ++round;
}

)

