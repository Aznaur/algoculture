"use strict";
{
  let scroll = document.querySelector('.greeting__scroll');
  let about = document.querySelector('.about-company');
  let btn = document.querySelector('.btnTop');
  let navOpen = document.querySelector('.main-nav__toggle');
  let header = document.querySelector('.page-header');
  let body = document.querySelector('body');
  let mainNav = document.querySelector('.main-nav__list');
  let socilaList = document.querySelector('.main-nav__social');


  navOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    navOpen.classList.toggle('main-nav__toggle--active');
    socilaList.classList.toggle('main-nav__social--active');
    mainNav.classList.toggle('main-nav__list--toggle');
    header.classList.toggle('page-header--menu');
    body.classList.toggle('body--scroll');
  });

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

  const animItems = document.querySelectorAll('.anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll () {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('active');
        } else {
          if (!animItem.classList.contains('anim-none')) {
            animItem.classList.remove('active');
          }
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + screenLeft};
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
}
