// Hamburger hamburger-menu 

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-menu");


function closeMenu(){
    menu.style.right = "-100%";
    hamburger.classList = "fa fa-bars hamburger";   
}

function rotateButton(btn){
    return btn.animate([{transform: "rotate(360deg)"}], {duration: 500})
}

hamburger.addEventListener("click", () => {

    const animation = rotateButton(hamburger);

    setTimeout(() => {if (menu.style.right == "-100%")
    {
        menu.style.right = "0";
        hamburger.classList = "fa fa-remove hamburger";
    }
    else
    {   
        closeMenu();
    }}, 250);
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