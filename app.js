const menu = document.querySelector('.menu')
const linkContainer = document.querySelector('.list-container')
const main = document.querySelector('.main')
const sticky = menu.offsetTop;
const btnMenu = document.querySelector('.btn-img')
const goTop = document.querySelector('.go-top')
let on_off = true;

window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
    if (window.pageYOffset >= 500) {
        goTop.style.right = '0%';
    } else {
        goTop.style.right = '-100%';
    }
    goTop.addEventListener('click', () => {
        document.body.scrollTop = '0';
        document.documentElement.scrollTop = '0';
    })
}

btnMenu.addEventListener('click', () => {
    if (on_off) {
        linkContainer.style.left = '0%';
        on_off = false;
    } else {
        on_off = false;
        linkContainer.style.left = '-100%'
        on_off = true;
    }
})

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 6000;

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function() {
    slides();
}, intervalo);



function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform 3s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 6s";
            contador = 1;
        }, 6000)
    }
}