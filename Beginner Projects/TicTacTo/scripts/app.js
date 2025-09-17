const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let editPlayer = 0
let activePlayer = 0
let gameOverTrack = false 
let roundNb = 1


const players = [
    { //index 0
        name:"",
        symbol:"X"
    },
    { //index 1
        name:"",
        symbol:"O"
    }
]

const editPlayer1Btn = document.getElementById("edit-player-1-btn")
const editPlayer2Btn = document.getElementById("edit-player-2-btn")

const playerConfigOverlay = document.getElementById("config-overlay")
const backdropOverlay = document.getElementById("backdrop")
const cancelConfig = document.getElementById("cancel-config-btn")

const formElement = document.querySelector("form")
const errorOutput = document.getElementById("config-errors")

const startGameBtn = document.getElementById("start-game-btn")

const activePlayerName = document.getElementById("active-player-name")
const gameBoardArea = document.getElementById("active-game")

const gameBoard = document.getElementById("game-board")

const gameOver = document.getElementById("game-over")

// Section for adding the even Listeners
editPlayer1Btn.addEventListener('click',openPlayerConfig)
editPlayer2Btn.addEventListener('click',openPlayerConfig)

cancelConfig.addEventListener('click',closePlayerConfig)
backdropOverlay.addEventListener('click',closePlayerConfig)

formElement.addEventListener("submit", savePlayerConfig)

startGameBtn.addEventListener("click",startNewGame)

gameBoard.addEventListener("click", selectGameField)
/*
const gameBoard = document.queySelectorAll("#game-board li")
for(const boardElement of gameBoard){
    boardElement.addEventListener("click", selectGameField)
}*/