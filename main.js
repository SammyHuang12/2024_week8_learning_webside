// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const courseHeaderSwiper = new Swiper(".course-header-swiper", {
    // direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 8,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

const courseHotSwiper = new Swiper(".course-hot-swiper", {
    // direction: 'horizontal',
    // slidesGropu:3,
    slidesPerView: 'auto',
    spaceBetween: 24,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    navigation: {
        nextEl: ".swiper-button-next-hot",
        prevEl: ".swiper-button-prev-hot",
    },
    breakpoints: {
        375: {
            // slidesPerView: 'auto',
            // spaceBetween: 16,
        },
        // 576: {
        //     //當螢幕寬度大於等於576
        //     slidesPerView: 2,
        //     // slidesPerView: 'auto',
        // },
        // 992: {
        //     //當螢幕寬度大於等於992
        //     slidesPerView: 4,
        // },
    },

});

const courseTopicsSwiper = new Swiper(".course-topics-swiper", {
    // direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next-topics",
        prevEl: ".swiper-button-prev-topics",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
