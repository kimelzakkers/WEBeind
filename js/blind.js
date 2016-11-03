/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */
//met hulp van Koos Bavinck en Victor Zumpolle


////like//

var addBtn, icon;
addBtn = document.querySelector('.addStory');
icon = document.querySelector('button i');

function changeIcon(){
    console.log(icon.innerHTML);
    if(icon.innerHTML == 'favorite_border'){
        icon.innerHTML = 'favorite';
    }
    else if(icon.innerHTML == 'favorite'){
        icon.innerHTML = 'favorite_border';
    }
}

/// toggle blind //
addBtn.addEventListener('click', changeIcon);

var button = document.querySelector('#button');
var content = document.querySelector('#content');

function toggleDisplay() {
    content.classList.toggle('hidden');
}

button.addEventListener('click', toggleDisplay);
