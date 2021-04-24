const greeting = document.querySelector('.greeting'),
    btn = document.querySelector('.btn_bg'),
    body = document.querySelector('body');

let i = 0;
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let imagesDay = [];
const base = 'assets/images/';
const timesDay = ['morning/', 'day/', 'evening/', 'night/'];



function imagesTOD() {
    function createImageTOD(Arr) {
        for (let i = 0; i < 6; i++) {
            Arr.push(images[Math.floor(Math.random() * 20)]);
        }
    }
    createImageTOD(imagesDay);
}

function startBg() {
    let time = new Date(),
        hour = time.getHours();
    console.log(hour);
    console.log(imagesDay);
    let src;
    console.log(1);
    src = base + timesOfDay(getTimesOfDay(), 0) + imagesDay[hour % 6];
    viewBgImage(src);
  
    
}

function changeImageHour() {
    let time = new Date(),
        hour = time.getHours();
    let src;
    if (newHour()) {
        src = base + timesOfDay(getTimesOfDay(), 0) + imagesDay[hour % 6];
        viewBgImage(src);
    }
    setTimeout(changeImageHour, 1000);
}

function setGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour >= 6 && hour < 12) {
        greeting.textContent = 'Good Morning, ';
    } else {
        if (hour >= 12 && hour < 18) {
            greeting.textContent = 'Good Day, ';
        } else {
            if (hour >= 18 && hour < 24) {
                greeting.textContent = 'Good Evening, ';
            } else {
                greeting.textContent = 'Good Nights, ';
            }
        }
    }
    document.body.style.color = 'white';
    setTimeout(setGreet, 1000);
}

function newHour() {
    let time = new Date(),
        minute = time.getMinutes(),
        seconds = time.getSeconds();
    if (seconds == 0 && minute == 0) {
        return true;
    } else {
        return false;
    }
}

function getTimesOfDay() {
    let today = new Date(),
        hour = today.getHours();

    if (hour >= 6 && hour < 12) {
        return 'morning/';
    } else {
        if (hour >= 12 && hour < 18) {
            return 'day/';
        } else {
            if (hour >= 18 && hour < 24) {
                return 'evening/';
            } else {
                return 'night/';
            }

        }
    }
    setTimeout(getTimesOfDay, 1000);
}

function timesOfDay(TOD, n) {
    let index;
    switch (TOD) {
        case 'morning/':
            index = 0;
            break;
        case 'day/':
            index = 1;
            break;
        case 'evening/':
            index = 2;
            break;
        case 'night/':
            index = 3;
            break;
    }
    return timesDay[(index + n) % 4];
}

function viewBgImage(src) {
    const img = new Image();
    img.src = src;
    img.onload = function() {
        body.style.backgroundImage = `url(${src})`;
    };
}

function getImage() {
    console.log(i);
    let indexImg = i % images.length;
    let indexTOD = Math.trunc(i / images.length) % 4;
    console.log(indexTOD);
    let imageSrc = base + timesOfDay(getTimesOfDay(), indexTOD) + images[indexImg];
    i++;
    console.log(imageSrc);
    viewBgImage(imageSrc);
    //btn.disabled = true;
    //setTimeout(function() { btn.disabled = false }, 1000);
}

btn.addEventListener('click', getImage);

imagesTOD();
setGreet();
changeImageHour();
startBg();