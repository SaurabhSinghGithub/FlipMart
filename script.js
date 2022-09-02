// Side bar toggle

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
}

document.querySelector('#close-side-bar').onclick = () => {
    sideBar.classList.remove('active');
}


// Search bar toggle

let searchBar = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    searchBar.classList.toggle('active')
}

// Onscroll sidebar & searchbar remove

window.onscroll = () => {
    sideBar.classList.remove('active');
    searchBar.classList.remove('active')
}


// home slider

var swiper = new Swiper(".home-slider", {


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    loop: true,
    grabCursor: true,


});


// accordion

let heading = document.querySelectorAll('.accordion');

heading.forEach(accordion => {
    accordion.onclick = () => {
        accordion.classList.toggle('active')
    }
});


// review 

var swiper = new Swiper(".card-swiper", {
    autoplay: true,
    grabCursor: true,
    loop: true,
    breakpoints: {
        450: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});



