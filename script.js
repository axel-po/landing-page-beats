/* Toogle Menu */
const menu = () => {
  const btnMenu = document.querySelector(".header__button");
  const menu = document.querySelector(".nav");
  const allLinks = document.querySelectorAll(".nav a");

  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("nav--active");
  });

  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("nav--active");
    });
  });
};

menu();

/* Scrool Header */

function animationHeader() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  });
}
animationHeader();
