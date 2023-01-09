// Hamburger hamburger-menu 

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-menu");
const linkElements = menu.querySelectorAll('.link-item');

function rotateButton(btn){
    return btn.animate([{transform: "rotate(360deg)"}], {duration: 500})
}

hamburger.addEventListener("click", () => {
    menu.classList.toggle('active');
    if (hamburger.classList.contains('active')){
        hamburger.classList = "fa fa-bars hamburger";
    }
    else{
        hamburger.classList = "fa fa-remove hamburger active";
    }
});

linkElements.forEach(linkElement => {
    linkElement.addEventListener("click", () => {
        menu.classList.toggle('active');
        if (hamburger.classList.contains('active')){
            hamburger.classList = "fa fa-bars hamburger";
        }
        else{
            hamburger.classList = "fa fa-remove hamburger active";
        }
    })
})

// Theme Switching

const themeSwitcher = document.querySelector(".theme-switcher");
const bodyElement = document.querySelector("body");
const switchBall = document.querySelector(".switch-ball");

themeSwitcher.addEventListener("click", () => {
    bodyElement.classList.toggle("light-mode");

    if (switchBall.style.left == "0.5em")
        switchBall.style.left = "2em";
    else
        switchBall.style.left = "0.5em";
})