let inputDirection  = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp' :
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1};
            break
        case 'ArrowDown' :
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1};
            break
        case 'ArrowLeft' :
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0};
            break
        case 'ArrowRight' :
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0};
            break
    }
});



// Touch Input <--------------------->
const DIRECTIONS = [
    { x: 0, y: -1}, // UP
    { x: 1, y: 0}, //Right
    { x: 0, y: 1}, //Down
    { x: -1, y: 0} //Left
]
let directionIndex;

// let test = {x: 0, y: 0};

document.getElementById('turn-left').addEventListener('click', e => {
    DIRECTIONS.forEach((dir, index) => {
        if(lastInputDirection.x === 0 && lastInputDirection.y === 0){
            inputDirection = DIRECTIONS[3];
        }
        else if (lastInputDirection.x === dir.x && lastInputDirection.y === dir.y){
            directionIndex = index;
            if(directionIndex - 1 < 0){
                inputDirection = DIRECTIONS[3];
            }
            else {
                inputDirection = DIRECTIONS[directionIndex - 1];
            }
            return
        }
    })
})

document.getElementById('turn-right').addEventListener('click', e =>{
    DIRECTIONS.forEach((dir, index) => {
        if(lastInputDirection.x === 0 && lastInputDirection.y === 0){
            inputDirection = DIRECTIONS[1];
        }
        else if (lastInputDirection.x === dir.x && lastInputDirection.y === dir.y){
            directionIndex = index;
            if(directionIndex + 1 > 3){
                inputDirection = DIRECTIONS[0];
            }
            else {
                inputDirection = DIRECTIONS[directionIndex + 1];
            }
            return
        }
    })
})


// EXPORT DIRECTION
export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
