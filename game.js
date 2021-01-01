import {update as updateSnake,
     draw as drawSnake ,
     SNAKE_SPEED,
    getScoreAfterGameover,
     getSnakeHead,
    snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import { outSideGrid } from './grid.js'
let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById('game-board')

const main = (currentTime)=>{
if(gameOver){
 if(confirm(`Game Over,Your Score is ${getScoreAfterGameover()} Press ok to restart`)){
     window.location = '/'
 }
 return 
}

window.requestAnimationFrame(main)
const secondSinceLastRenderTime = (currentTime - lastRenderTime) /1000;
if(secondSinceLastRenderTime < 1 /SNAKE_SPEED) return
console.log('Render')
lastRenderTime = currentTime
update()
draw()
}

window.requestAnimationFrame(main)

const update = ()=>{
updateSnake()
updateFood()
checkDeath()
}
const draw = ()=>{
    gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}
function checkDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}

