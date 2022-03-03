import {updateSnake, drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from "./snake.js";
import {updateFood, drawFood} from "./food.js";
import {outsideGrid} from "./grid.js";

let lastRenderTime = 0
let gameOver = false
// const snakeSpeed = 2
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
        if (confirm('Game over! :( Press Ok to restart game.')) {
            window.location = './play.html'
        }
        return
    }

    window.requestAnimationFrame(main) //restarts the main function so we can loop.

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000    //we divide here by 1k to
                                                                            // convert milliseconds to seconds.

    if (secondsSinceLastRender < 1/snakeSpeed) return   //snakeSpeed controls the speed of our game and
                                                        // the return stops the rest of this current loop
                                                        // from runing and allows us to move to the next loop
    console.log("Rendered") //logs the current time
    lastRenderTime = currentTime


    update()
    draw()
}

window.requestAnimationFrame(main) //starts main function for the first time

function update() {
    gameBoard.innerHTML=''
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}