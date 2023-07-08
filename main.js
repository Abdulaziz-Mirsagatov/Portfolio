// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-menu");
const linkElements = menu.querySelectorAll(".link-item");

const toggleHamburger = () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
};

hamburger.addEventListener("click", toggleHamburger);

linkElements.forEach((linkElement) => {
  linkElement.addEventListener("click", toggleHamburger);
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
