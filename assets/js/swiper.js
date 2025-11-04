console.log("swiper js");
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const course_header_swiper = new Swiper(".course-header-swiper", {
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

const subject_swiper = new Swiper(".subject-swiper", {
	slidesPerView: 'auto',
	spaceBetween: 24,

	navigation: {
		nextEl: ".swiper-button-next-subject",
		prevEl: ".swiper-button-prev-subject",
	},
});

const course_topics_swiper = new Swiper(".course-topics-swiper", {
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

const category_swiper = new Swiper(".category-swiper", {
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

const class_swiper = new Swiper(".class-swiper", {
	slidesPerView: 'auto',
	spaceBetween: 24,
});

const top_teacher_swiper = new Swiper(".top-teacher-swiper", {
	slidesPerView: 'auto',
	spaceBetween: 24,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
