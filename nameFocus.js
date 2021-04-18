const name = document.querySelector('.name'),
      focus = document.querySelector('.focus');

function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.keyCode == 13) {
        name.blur();
    }
}

// Blur Name
function blurName() {
    if (name.textContent != '') {
        localStorage.setItem('name', name.textContent);
    } else {
        getName();
    }
}

// Click Name
function clickName() {
    name.textContent = '';
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.keyCode == 13) {
        focus.blur();
    }
}

// Blur Focus
function blurFocus() {
    if (focus.textContent != '') {
        localStorage.setItem('focus', focus.textContent);
    } else {
        getFocus();
    }
}

function clickFocus() {
    focus.textContent = '';
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', blurName);
name.addEventListener('click', clickName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', blurFocus);
focus.addEventListener('click', clickFocus)

getName();
getFocus();