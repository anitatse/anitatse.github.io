let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("body div div");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  let nav = document.querySelector("nav");
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (width < 1000) {
    nav.style.opacity = 0;
  } else {
    if (fromTop > 340) {
      nav.style.opacity = 1;
    } else {
      nav.style.opacity = 0;
    }
  }

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop - 250 <= fromTop &&
      section.offsetTop + section.offsetHeight - 250 > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
