
const btn_click_go = document.querySelector(".gonder");
const btn_click_stop = document.querySelector(".durdur");
const btn_click_reset = document.querySelector(".sifirla");
const btn_click_load = document.querySelector(".ekle");

const saat = document.querySelector(".saat");
const dakika = document.querySelector(".dakika");
const saniye = document.querySelector(".saniye");
const salise = document.querySelector(".salise");


var Interval;
var tens = 0;
var seconds = 0;
var minute = 0;
var hour = 0;

btn_click_go.onclick = function () {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10.1);
}


function startTimer() {
    tens++;

    if (tens <= 9) {
        salise.textContent = "0" + tens;
    }

    if (tens > 9) {
        salise.textContent = tens;
    }

    if (tens >= 99) {
        seconds++;
        saniye.textContent = seconds;
        tens = 0;
    }

    if (seconds <= 9) {
        saniye.textContent = "0" + seconds;
    }

    if (seconds > 9) {
        saniye.textContent = seconds;
    }

    if (seconds > 59) {
        seconds = 0;
        minute++;
        dakika.textContent = minute;
    }

    if (minute <= 9) {
        dakika.textContent = "0" + minute;
    }

    if (minute > 9) {
        dakika.textContent = minute;
    }

    if (minute > 59) {
        minute = 0;
        hour++;
        saat.textContent = hour;
    }

    if (hour <= 9) {
        saat.textContent = "0" + hour;
    }

    if (hour > 9) {
        saat.textContent = hour;
    }
}

btn_click_stop.onclick = function () {
    clearInterval(Interval)
}

btn_click_reset.onclick = function () {
    tens = 0;
    seconds = 0;
    minute = 0;
    hour = 0;
    saat.textContent = "00";
    dakika.textContent = "00";
    saniye.textContent = "00";
    salise.textContent = "00";
    clearInterval(Interval)

}

btn_click_load.onclick = function () {
    const elementId = document.createElement("p");
    const textId = document.createTextNode("- " + hour + ":" + minute + ":" + seconds + ":" + tens);
    elementId.appendChild(textId);
    document.getElementById("texter").appendChild(elementId);
}