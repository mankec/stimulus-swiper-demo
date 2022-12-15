import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper-bundle.css';

console.log('TEST')

window.addEventListener('turbo:load', (event) => {
  console.log("turbo:load")

  initializeSwipe(0)

})

function initializeSwipe() {
  const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


