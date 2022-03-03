import {getInputDirection} from "./input.js";

export const snakeSpeed = 5
const snakeBody = [{x:11, y:11}]
let newSegments = 0

export function updateSnake() {
    addSegments()

    const inputDir = getInputDirection()
    for (let i=snakeBody.length-2; i >= 0; i--) {  //here, for each i, we move our snake forward
        snakeBody[i+1] = {...snakeBody[i]}
    }
    console.log('update snake')

    snakeBody[0].x += inputDir.x
    snakeBody[0].y += inputDir.y
}

export function drawSnake(gameBoard) {

    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        gameBoard.appendChild(snakeElement)
        snakeElement.classList.add('snake')
        if (segment === snakeBody[0]) {
            snakeElement.classList.add('head')
        }

    })

    console.log('draw snake')
}

export function expandSnake(amount) {
    newSegments += amount
}

// export function onSnake(position, {ignoreHead = false} = {}) {
//     return snakeBody.some(segment => {
//         if (ignoreHead) return false
//         else return equalPositions(segment, position)
//     })
// }

export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}