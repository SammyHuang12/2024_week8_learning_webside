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
    slidesPerView: 'auto',
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-button-next-hot",
        prevEl: ".swiper-button-prev-hot",
    },
});

const courseTopicsSwiper = new Swiper(".course-topics-swiper", {
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

const categorySwiper = new Swiper(".category-swiper", {
    slidesPerView: 1.2, 
    spaceBetween: 24,
    grid: {
      rows: 2, 
      fill: "row"
    },
    breakpoints: {
        375: {
        slidesPerView: 1.2, 
        grid: {
          rows: 2,
          fill: "row"
        }
      },
        576: {
          slidesPerView: 2, 
          grid: {
            rows: 4,
            fill: "row"
          }
        }
    }
});

const classSwiper = new Swiper(".class-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 24,
});