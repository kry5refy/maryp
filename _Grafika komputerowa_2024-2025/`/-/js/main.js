document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const nav_links = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    burger.classList.toggle('chg-bur');

    nav_links.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade .5s ease forwards ${index / 5 + 0.3}s`;
      }
    });
  });
});