
function clock() {
    // getting current time 
    let currentDate = new Date();
    let currentHr = currentDate.getHours();
    let currentMin = currentDate.getMinutes();
    let currentSec = currentDate.getSeconds();



    if (currentHr >= 12) {
        currentHr = currentHr - 12;
    }

    let degHr = (currentHr - 6) * 30;
    let degMin = (currentMin - 30) * 6;
    let degSec = (currentSec - 30) * 6;


    let degHrString = "rotate(" + degHr + "deg)";
    let degMinString = "rotate(" + degMin + "deg)";
    let degSecString = "rotate(" + degSec + "deg)";

    // display time
    document.querySelector('#hr').style.transform = degHrString;
    document.querySelector('#min').style.transform = degMinString;
    document.querySelector('#sec').style.transform = degSecString;
    document.querySelector('span').innerHTML = currentHr + ':' + currentMin + ':' + currentSec;
}
// calling function
setInterval(clock, 1000);