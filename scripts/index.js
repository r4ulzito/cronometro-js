var sec = 0;
var min = 0;
var hr = 0;
var interval;
var watchText = document.querySelector(".watch");

function start() {
  watch();
  interval = setInterval(watch, 1000);
}

function pause() {
  clearInterval(interval);
}

function _stop() {
  watchText.innerText = "00:00:00";
  clearInterval(interval);
  hr = 0;
  min = 0;
  sec = 0;
}

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function watch() {
  sec = sec + 1;

  if (sec === 60) {
    min++;
    sec = 0;
    if (min === 60) {
      min = 0;
      hr++;
    }
  }
  watchText.innerText =
    twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec);
}
