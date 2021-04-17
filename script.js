// DOM Elements
const time = document.querySelector('.time'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus'),
    date = document.querySelector('.date');

// Show Time
function showTimeDate() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        day = today.getDay(),
        month = today.getMonth(),
        dat = today.getDate();

    // Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    date.innerHTML = `${getDayOfWeek(day)} <br \> ${dat}<span>, </span>${getMonth(month)}`;

    setTimeout(showTimeDate, 1000);
}

//Show day Of Week
function getDayOfWeek(day) {
    switch (day) {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
    }
}

//Show month
function getMonth(month) {
    switch (month) {
        case 0:
            return 'January';
            break;
        case 1:
            return 'February';
            break;
        case 2:
            return 'March';
            break;
        case 3:
            return 'April';
            break;
        case 4:
            return 'May';
            break;
        case 5:
            return 'June';
            break;
        case 6:
            return 'July';
            break;
        case 7:
            return 'August';
            break;
        case 8:
            return 'September';
            break;
        case 9:
            return 'October';
            break;
        case 10:
            return 'November';
            break;
        case 11:
            return 'December';
            break;
    }
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour >=6 && hour < 12) {
        // Morning
        document.body.style.backgroundImage =
            "url('assets/images/morning/01.jpg')";
        greeting.textContent = 'Good Morning, ';
    } else {
        if (hour>=12 && hour < 18) {
            // Afternoon
            document.body.style.backgroundImage =
                "url('assets/images/day/01.jpg')";
            greeting.textContent = 'Good Day, ';
        } else {
            if (hour >=18 && hour < 24){
                // Evening
                document.body.style.backgroundImage =
                    "url('assets/images/evening/01.jpg')";
                greeting.textContent = 'Good Evening, ';
            }
            else {
                document.body.style.backgroundImage =
                    "url('assets/images/night/01.jpg')";
                greeting.textContent = 'Good Nights, ';
            }
             document.body.style.color = 'white';
        }
    }
    
    setTimeout(setBgGreet, 1000);
}

//Change Background 
function changeBackground () {
const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
const body = document.querySelector('body');
const btn = document.querySelector('.btn');

function viewBgImage(src) {  
  const img = new Image();
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 
    
btn.addEventListener('click', getImage);
}

// Get Name
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

// Run
showTimeDate();
setBgGreet();
getName();
getFocus();
changeBackground();
