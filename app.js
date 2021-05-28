var hourHead = document.getElementById('hour')
var minHead = document.getElementById('min')
var secHead = document.getElementById('sec')

var p1 = prompt("Enter Hour", '00')
var p2 = prompt("Enter Minutes", '00')
var p3 = prompt("Enter Seconds", '00')


hourHead.innerHTML = p1
minHead.innerHTML = p2
secHead.innerHTML = p3

var hour;
var min;
var sec;


// function timer() {
//     sec--;
//     // secHead.innerHTML = sec;
//     p3 = sec;
//     console.log(sec)
//     if (sec == 60) {
//         min--;
//         // minHead.innerHTML = min;
//         p2 = min;
//         sec = 00;
//     } else if (min == 60) {
//         hour--;
//         p1 = hour;
//         // hourHead.innerHTML = hour;
//         min = 00;
//     }
// }
// setInterval(timer, 1000)




function reverse() {
    p3--;
    secHead.innerHTML = p3;
    console.log(p3)
    if (p3 == 0) {
        p2--
        minHead.innerHTML = p2
        p3 = 60

    } else if (p2 == 0) {
        p1--;
        hourHead.innerHTML = p1
        p2 = 60;

    }
}

var interval;


function start() {
    interval = setInterval(reverse, 1000)
}

function pause() {
    clearInterval(interval)
}

function reset() {
    hourHead.innerHTML = '00'
    minHead.innerHTML = '00'
    secHead.innerHTML = '00'
    clearInterval(interval)

}