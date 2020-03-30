'use strict';

const INTERVAL = 10 //インターバル設定。本番では1000=1秒に設定
let loop;//= document.getElementById('loop').value;
let timer1;//= document.getElementById('timer1').value;
let timer2;//= document.getElementById('timer2').value;

const loopDisplay = document.getElementById('loopDisp');
const timer1Display = document.getElementById('timer1Disp');
const timer2Display = document.getElementById('timer2Disp');

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', startTimer, false);
const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', (event) => { clearInterval(timerId) });

let timerId;

function startTimer() {
  loop = document.getElementById('loop').value;
  timer1 = document.getElementById('timer1').value * 60;
  timer2 = document.getElementById('timer2').value * 60;
  loopDisplay.innerText = loop;
  timer1Display.innerText = formatTime(timer1);
  timer2Display.innerText = formatTime(timer2);
  timerId = setInterval(countDownTimer1, INTERVAL);
}

function countDownTimer1() {
  timer1 -= 1;
  timer1Display.innerText = formatTime(timer1);
  if (timer1 === 0) {
    clearInterval(timerId);
    timerId = setInterval(countDownTimer2, INTERVAL);
  }
}

function countDownTimer2() {
  timer2 -= 1;
  timer2Display.innerText = formatTime(timer2);
  if (timer2 === 0) {
    clearInterval(timerId);
    countDownLoop();
  }
}

function countDownLoop() {
  loop -= 1;
  loopDisplay.innerText = loop;
  if (loop === 0) {
    loopDisplay.innerHTML = "<H1>ALL DONE!</H1>";
    clearInterval(timerId);
  } else {
    startTimer();
  }
}

function formatTime(time) { //[分:秒]表示のケタを揃える関数
  const min = Math.floor(time / 60).toString().padStart(2, '0');
  const sec = (time % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}
