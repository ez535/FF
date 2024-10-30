import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
// import 'swiper/swiper.scss';

let brandsContainer = document.querySelector('.brands__container');
let brandsList = document.querySelector('.brands__list');
let brandsItems = document.querySelectorAll('.brands__item');

let repairContainer = document.querySelector('.repair__container');
let repairList = document.querySelector('.repair__list');
let repairItems = document.querySelectorAll('.repair__item');

let priceContainer = document.querySelector('.price__container');
let priceList = document.querySelector('.price__list');
let priceItems = document.querySelectorAll('.price__item');

let windowSize = window.innerWidth;

if (windowSize > 600) {
  priceContainer.classList.remove('swiper');
  priceContainer.classList.remove('swiper-horizontal');
  priceList.classList.remove('swiper-container');
  priceList.classList.remove('swiper-wrapper');
  
  priceItems.forEach(item => {
    item.classList.remove('swiper-slide');
  });
} else {
  priceContainer.classList.add('swiper');
  priceContainer.classList.add('swiper-horizontal');
  priceList.classList.add('swiper-container');
  priceList.classList.add('swiper-wrapper');
  
  priceItems.forEach(item => {
    item.classList.add('swiper-slide');
  });
}

if (windowSize > 500) {
  brandsContainer.classList.remove('swiper');
  brandsContainer.classList.remove('swiper-horizontal');
  brandsList.classList.remove('swiper-container');
  brandsList.classList.remove('swiper-wrapper');

  repairContainer.classList.remove('swiper');
  repairContainer.classList.remove('swiper-horizontal');
  repairList.classList.remove('swiper-container');
  repairList.classList.remove('swiper-wrapper');

  repairItems.forEach(item => {
    item.classList.remove('swiper-slide');
  });

  brandsItems.forEach(item => {
    item.classList.remove('swiper-slide');
  });

} else {
  brandsContainer.classList.add('swiper');
  brandsContainer.classList.add('swiper-horizontal');
  brandsList.classList.add('swiper-container');
  brandsList.classList.add('swiper-wrapper');

  repairContainer.classList.add('swiper');
  repairContainer.classList.add('swiper-horizontal');
  repairList.classList.add('swiper-container');
  repairList.classList.add('swiper-wrapper');


  brandsItems.forEach(item => {
    item.classList.add('swiper-slide');
  });

  repairItems.forEach(item => {
    item.classList.add('swiper-slide');
  });
}

const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});