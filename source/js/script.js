"use strict";
{
  let scroll = document.querySelector('.greeting__scroll');
  let about = document.querySelector('.about-company');
  let btn = document.querySelector('.btnTop');
  let header = document.querySelector('.page-header');

  scroll.addEventListener('click', function () {
    about.scrollIntoView({
      behavior: 'smooth'
    });
  });

  window.onscroll = function () {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.classList.add('btnActive');
    } else {
      btn.classList.remove('btnActive');
    }
  }

  btn.addEventListener('click', function () {
    header.scrollIntoView({
      behavior: 'smooth'
    });
  });
}
