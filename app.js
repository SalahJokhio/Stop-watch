let seconds = 0;
let tens = 0;
const outputSeconds = document.getElementById('second');
const outputTens = document.getElementById('tens');
const timerContainer = document.getElementById('timer-container'); 
let interval;

const buttonStart = document.getElementById('btn-start');
const buttonStop = document.getElementById('btn-stop');
const buttonReset = document.getElementById('btn-reset');

if (buttonStart) {
  buttonStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    timerContainer.classList.add('running'); 
  });
} else {
  console.error("Button with ID 'btn-start' not found!");
}

if (buttonStop) {
  buttonStop.addEventListener('click', () => {
    clearInterval(interval);
    timerContainer.classList.remove('running'); 
  });
} else {
  console.error("Button with ID 'btn-stop' not found!");
}

if (buttonReset) {
  buttonReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    outputSeconds.innerHTML = "00";
    outputTens.innerHTML = "00";
    timerContainer.classList.remove('running');
  });
} else {
  console.error("Button with ID 'btn-reset' not found!");
}

function startTimer() {
  tens++;

  if (tens <= 9) {
    outputTens.innerHTML = "0" + tens;
  } else if (tens <= 99) {
    outputTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    outputSeconds.innerHTML = seconds > 9 ? seconds : "0" + seconds;
    tens = 0;
    outputTens.innerHTML = "00";
  }
}
