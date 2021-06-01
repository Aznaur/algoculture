'use strict';

{
  const scroll = document.querySelector('.greeting__scroll');
  const greeting = document.querySelector('.greeting');
  const about = document.querySelector('.about-company');
  const btn = document.querySelector('.btnTop');
  const navOpen = document.querySelector('.main-nav__toggle');
  const header = document.querySelector('.page-header');
  const body = document.querySelector('body');
  const mainNav = document.querySelector('.main-nav__list');
  const sectionId = document.querySelectorAll('[data-id]');

  function toggleClass (block1, block2, block3, block4) {
    block1.classList.toggle('main-nav__toggle--active');
    block2.classList.toggle('main-nav__list--toggle');
    block3.classList.toggle('page-header--menu');
    block4.classList.toggle('body--scroll');
  }

  mainNav.addEventListener('click', (evt) => {
    evt.preventDefault();
    let target = evt.target;
    sectionId[target.id].scrollIntoView({
      behavior: 'smooth',
    });
    toggleClass(navOpen,mainNav,header,body);
  });

  navOpen.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleClass(navOpen,mainNav,header,body);
  });

  scroll.addEventListener('click', () => {
    about.scrollIntoView({
      behavior: 'smooth',
    });
  });

  window.onscroll = function () {scrollFunction();};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.classList.add('btnActive');
      header.classList.add('page-header--scroll');
    } else {
      btn.classList.remove('btnActive');
      header.classList.remove('page-header--scroll');
    }
  }

  btn.addEventListener('click', () => {
    greeting.scrollIntoView({
      behavior: 'smooth',
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
