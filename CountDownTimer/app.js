const i = document.querySelector('.inner')
const btn = document.querySelector('button')

let time = 15;

// let hr;
let min;
let sec;

time = prompt('Enter the count down time in seconds')


if (time < 60) {
    min = 0;
    sec = time
}
else {
    min = +((time / 60).toFixed(0));
    sec = time % 60;
}

function timer() {
    if (sec == 0 && min != 0) {
        sec = 59;
        min -= 1;
    }
    else if (sec == 0 && min == 0) {
        i.innerText = 'times up'
    }


    else if (sec < 60) {
        i.innerText = + min + ' min '
        i.innerText += +sec + ' sec';
        sec--
    }
}



setInterval(timer, 1000);



















// if (time < 60) {
//     sec = time
// }
// else {
//     min = +((time / 60).toFixed(0));
//     sec = time % 60;
// }

// setInterval(timer, 1000);

// function timer() {

//     if (sec >= 0) {
//         if (sec == 0 && min == 0) {

//         } else {
//             min -= 1;
//             sec = 59

//         }


//         i.innerText = sec;
//         sec--;
//     }

//     // else if(sec > 61) { }
// }




