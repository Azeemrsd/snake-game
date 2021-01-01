import { getInputDirection } from "./inputDirections.js"

export const SNAKE_SPEED = 10
const snakeBody = [
    { x:11, y:11},
]
let newSegments = 0
export const update = ()=>{
    addSegments()
   const inputDirection =  getInputDirection()
for(let i= snakeBody.length -2; i>=0;i--){
    snakeBody[i+1] = {...snakeBody[i]} 
}
snakeBody[0].x += inputDirection.x;
snakeBody[0].y += inputDirection.y;

}

export const draw = (gameBoard)=>{
snakeBody.forEach(segment=>{
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement)
})
}

export const onSnake = (position,{ignoreHead = false} ={})=>{
    return snakeBody.some((segment,index)=>{
        if(ignoreHead && index === 0) return false
        return equalPosition(segment,position)
    })
}
const equalPosition = (pos1,pos2)=>{
    return  pos1.x === pos2.x && pos1.y === pos2.y
    
}
export const expandSnake = (amount)=>{
newSegments += amount
}

const addSegments =() =>{
for (let i=0; i< newSegments;i++){
    snakeBody.push({ ...snakeBody[snakeBody.length-1]})
}
newSegments = 0
}
export function getSnakeHead() {
    return snakeBody[0]
}
export function snakeIntersection(){
    return onSnake(snakeBody[0],{ignoreHead:true})
}
export function getScoreAfterGameover() {
    return snakeBody.length-1
}
function getSnakeSpeed() {
    const currentLengthOfSnake = snakeBody.length-1;
    switch (currentLengthOfSnake) {
        case currentLengthOfSnake <=3:
            return 1;
            case currentLengthOfSnake > 3 && currentLengthOfSnake <=10:
            return 2
            case currentLengthOfSnake > 10 && currentLengthOfSnake <=15:
            return 3
            case currentLengthOfSnake > 15 && currentLengthOfSnake <=20:
            return 4
            case currentLengthOfSnake > 20 && currentLengthOfSnake <=25:
            return 5
            case currentLengthOfSnake > 25 && currentLengthOfSnake <=30:
            return 8
    
        default:
            break;
    }
}