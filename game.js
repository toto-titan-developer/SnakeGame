// IMPORTANT Setting up a game loop (RUNTIME)
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } 
from './snake.js';
import { update as updateFood, draw as drawFood, getScore}
from './food.js';
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');
const scoreUI = document.querySelector('.score');


function main(currenTime){

    if(gameOver) {
        if (window.localStorage.getItem('H-scr') < getScore()){
            window.localStorage.setItem('H-scr', getScore().toString())
            window.location = 'https://toto-titan-developer.github.io';
        }

        window.location = 'https://toto-titan-developer.github.io';
    }


    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currenTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
    scoreUI.innerHTML = getScore();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}


function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}