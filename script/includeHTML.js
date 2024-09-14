async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}



function showMenu() {
    let menu = document.getElementById('menu');
    let cross = document.getElementById('cross');
    let burger = document.getElementById('burger');

    burger.style = "display: none"
    cross.style = "display: block"

    menu.style = "height : 160px; padding-bottom: 14px; transition: height 225ms linear";
}

function hideMenu() {
    let menu = document.getElementById('menu');
    let cross = document.getElementById('cross');
    let burger = document.getElementById('burger');

    burger.style = "display: block"
    cross.style = "display: none"


    menu.style = "height : 0; padding-bottom: 0; transition: height 225ms linear"
}

function reportWindowSize() {
    let width = window.innerWidth;
    if (width > 780) {
       hideMenu()
    } 
}

window.addEventListener("resize", reportWindowSize);

