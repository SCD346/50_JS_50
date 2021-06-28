const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const messages = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))