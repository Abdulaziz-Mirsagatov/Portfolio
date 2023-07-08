// Hamburger hamburger-menu

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-menu");
const linkElements = menu.querySelectorAll(".link-item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

linkElements.forEach((linkElement) => {
  linkElement.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

// Theme Switching

const themeSwitcher = document.querySelector(".theme-switcher");
const bodyElement = document.querySelector("body");
const switchBall = document.querySelector(".switch-ball");

themeSwitcher.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark-theme"))
    bodyElement.classList = "light-theme";
  else bodyElement.classList = "dark-theme";

  if (switchBall.style.left == "0.5em") switchBall.style.left = "2em";
  else switchBall.style.left = "0.5em";
});
