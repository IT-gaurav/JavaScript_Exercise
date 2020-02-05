const i = document.querySelector('.inner')
const btn = document.querySelector('button')

let time = 15;
time = prompt('Enter the count down time in seconds')

setInterval(() => {

    if (time >= 0) {
        i.innerText = time + " seconds"
        time -= 1
    } else {

    }
}, 1000);

