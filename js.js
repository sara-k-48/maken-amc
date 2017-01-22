function transform() {
var een = document.getElementById("hamburger1");
een.classList.toggle("menu1Transform");
var twee = document.getElementById("hamburger2"); twee.classList.toggle("menu2Transform");
var label = document.getElementById("label");
label.classList.toggle("displayNone");
}

var menu = document.getElementById("menu");
menu.addEventListener("click", transform);


function rotate() {
var streep = document.getElementById("streep1");
streep.classList.toggle("rotate");
var streepTwee = document.getElementById("streep2"); streepTwee.classList.toggle("rotate");

var menuItem = document.getElementById("menu1");
menuItem.classList.toggle("scale");

var menuItemTwee = document.getElementById("menu2");
menuItemTwee.classList.toggle("scale");
}

var knop = document.getElementById("knop");
knop.addEventListener("click", rotate);
