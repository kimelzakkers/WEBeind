//hulp van Koos Bavinck
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


//menu
var hamburger = document.querySelector('nav div');
var menu = document.querySelector('ul');
function toggleMenu(){
  menu.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleMenu);


