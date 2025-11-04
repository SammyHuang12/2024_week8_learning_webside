const main = document.querySelector('main');

if (main) {
  const matchClasses = ['course', 'teacher','index'];

  if (main.classList.contains('login')) {
    import('./assets/js/login.js');
  }

  if (matchClasses.some(cls => main.classList.contains(cls))) {
    import('./assets/js/swiper.js');
  }
}


import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
