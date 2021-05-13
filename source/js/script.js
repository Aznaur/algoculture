"use strict";
{
  let scroll = document.querySelector('.greeting__scroll');
  let about = document.querySelector('.about');

  scroll.addEventListener('click', function () {
    about.scrollIntoView({
      behavior: 'smooth'
    });
  });
}
