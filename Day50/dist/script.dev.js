"use strict";

var screens = document.querySelectorAll('.screen');
var choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
var start_btn = document.getElementById('start-btn');
var game_container = document.getElementById('game-container');
var timeEl = document.getElementById('time');
var scoreEl = document.getElementById('score');
var messages = document.getElementById('message');
var seconds = 0;
var score = 0;
var selected_insect = {};
start_btn.addEventListener('click', function () {
  return screens[0].classList.add('up');
});
choose_insect_btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var img = btn.querySelector('img');
    var src = img.getAttribute('src');
    var alt = img.getAttribute('alt');
    selected_insect = {
      src: src,
      alt: alt
    };
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  var m = Math.floor(seconds / 60);
  var s = seconds % 60;
  m = m < 10 ? "0".concat(m) : m;
  s = s < 10 ? "0".concat(s) : s;
  timeEl.innerHTML = "Time: ".concat(m, ":").concat(s);
  seconds++;
}

function createInsect() {
  var insect = document.createElement('div');
  insect.classList.add('insect');

  var _getRandomLocation = getRandomLocation(),
      x = _getRandomLocation.x,
      y = _getRandomLocation.y;

  insect.style.top = "".concat(y, "px");
  insect.style.left = "".concat(x, "px");
  insect.innerHTML = "<img src=\"".concat(selected_insect.src, "\" alt=\"").concat(selected_insect.alt, "\" style=\"transform: rotate(").concat(Math.random() * 360, "deg)\" />");
  insect.addEventListener('click', catchInsect);
  game_container.appendChild(insect);
}

function getRandomLocation() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var x = Math.random() * (width - 200) + 100;
  var y = Math.random() * (height - 200) + 100;
  return {
    x: x,
    y: y
  };
}

function catchInsect() {
  console.log('123');
}