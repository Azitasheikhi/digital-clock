let $ = document
const hourElem = $.querySelector('#hour')
const minuteElem = $.querySelector('#minute')
const secondElem = $.querySelector('#second')

let myDate = new Date()

setInterval(() => {
    let myDate = new Date()

    let currentHour = myDate.getHours()
    let currentMinute = myDate.getMinutes()
    let currentSecond = myDate.getSeconds()

    if (currentHour < 10){
        currentHour = '0' + currentHour
    }
    if (currentMinute< 10){
        currentMinute = '0' + currentMinute
    }
    if (currentSecond< 10){
        currentSecond = '0' + currentSecond
    }

    hourElem.innerHTML = currentHour
    minuteElem.innerHTML = currentMinute
    secondElem.innerHTML = currentSecond

}, 1000);