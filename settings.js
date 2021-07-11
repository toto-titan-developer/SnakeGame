let mode = document.querySelectorAll('#mode');
const popup = document.querySelector(".popup_window");
const menuWIndow = document.getElementById('menu_border'); 

// OPEN AND CLOSE SETTING POP UP WINDOW
function openSettings() {
    popup.style.display = "flex";
    menuWIndow.style.display = "none";
}

function acceptSettings() {
    menuWIndow.style.display = "flex";
    popup.style.display = "none";
}

function setMode(val){
    if (val === 'easy'){
        mode.forEach(e => {
            e.style.backgroundColor = 'rgb(56, 78, 119)';
            e.innerHTML = "Easy";
        })
    }
    else if (val === 'med'){
        mode.forEach(e => {
            e.style.backgroundColor = 'rgb(24, 49, 79)';
            e.innerHTML = "Medium";
        })
    }
    else if (val === 'hard'){
        mode.forEach(e => {
            e.style.backgroundColor = 'rgb(13, 6, 48)';
            e.innerHTML = "Hard";
        })
    }
}

const myStorage = window.localStorage;

// CREATE LOCAL STORAGE
if (!myStorage.getItem('spd')){
    myStorage.setItem('spd', '5'); //DEFAULT EASY
}
if (!myStorage.getItem('inc')){
    myStorage.setItem('inc', '1'); //DEFAULT EASY
}
if (!myStorage.getItem('pnt')){
    myStorage.setItem('pnt', '2'); //DEFAULT EASY
}
if (!myStorage.getItem('mode')){
    myStorage.setItem('mode', 'easy')
}
if (!myStorage.getItem('H-scr')){
    myStorage.setItem('H-scr', '0');
}



//SETTING UP BUTTONS
    
document.getElementById('settings').addEventListener('click', e => {
    openSettings();
});
document.getElementById('accept').addEventListener('click', e => {
    acceptSettings();
});
// EASY
document.getElementById('easy_btn').addEventListener('click', e => {
    myStorage.setItem('spd', '5');
    myStorage.setItem('inc', '1');
    myStorage.setItem('pnt', '2');
    myStorage.setItem('mode', 'easy');
    mode.forEach(e => {
        e.style.backgroundColor = 'rgb(56, 78, 119)';
        e.innerHTML = "Easy"
    })
    acceptSettings();
});
// MEDIUM
document.getElementById('med_btn').addEventListener('click', e => {
    myStorage.setItem('spd', '10');
    myStorage.setItem('inc', '2');
    myStorage.setItem('pnt', '5');
    myStorage.setItem('mode', 'med');
    mode.forEach(e => {
        e.style.backgroundColor = 'rgb(24, 49, 79)';
        e.innerHTML = "Medium"
    })
    acceptSettings();
});
// HARD
document.getElementById('hard_btn').addEventListener('click', e => {
    myStorage.setItem('spd', '20');
    myStorage.setItem('inc', '3');
    myStorage.setItem('pnt', '10');
    myStorage.setItem('mode', 'hard');
    mode.forEach(e => {
        e.style.backgroundColor = 'rgb(13, 6, 48)';
        e.innerHTML = "Hard";

    })
    acceptSettings();
});

document.getElementById('high_score').innerHTML = myStorage.getItem('H-scr');
setMode(myStorage.getItem('mode'));


