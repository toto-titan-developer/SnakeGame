import { onSnake, expandSnake} from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition();
let score = 0;

const storage = window.localStorage;

const EXPANSION_RATE = storage.getItem('inc'); 
const pointsPerPiece = 5 * storage.getItem('pnt'); 
const coin_SFX = document.getElementById('coin_sfx');


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
        coin_SFX.play();
        score += pointsPerPiece;
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}

export function getScore(){
    return score;
} 