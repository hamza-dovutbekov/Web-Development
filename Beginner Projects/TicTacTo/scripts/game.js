function startNewGame(){
    if(players[0].name === "" || players[1].name === ""){
        alert("Please enter Player Name for both Players to start!")
        return
    }

    resetGame()
    activePlayerName.textContent = players[activePlayer].name
    gameBoardArea.style.display = "block"
}

function endGame(winnerId){
    gameOverTrack = true
    gameOver.style.display = "block"

    if(winnerId > 0){
        const winnerName = players[winnerId - 1].name
        gameOver.firstElementChild.lastElementChild.textContent = winnerName
    }else{
        gameOver.firstElementChild.textContent = "It is a Draw!"
        //<span id="winner-name">PLAYER NAME</span>!
    }
}
function resetGame(){
    activePlayer = 0
    gameOverTrack = false
    roundNb = 1
    gameOver.firstElementChild.innerHTML = 
    'You won, <span id="winner-name">PLAYER NAME</span>!'
    gameOver.style.display = "none"
    // Reset the game Board! [the Li content, class disabled, gameData]
    let gameBoardIndex = 0
    for(let i = 0 ; i < 3 ; i++){ // to iterate in the rows
        for(let j = 0 ; j < 3 ; j++){ // to iterate in the cols
            gameData[i][j] = 0
            const elementBoard = gameBoard.children[gameBoardIndex] 
            elementBoard.textContent = ""
            elementBoard.classList.remove("disabled")
            gameBoardIndex++
        }
    }
}


function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1
    }else{
        activePlayer = 0
    }
    activePlayerName.textContent = players[activePlayer].name
}

/*const gameData = [
// col: 0,1,2
    [0,0,0], ==> 0,0
    [0,0,0], ==> 1,1
    [0,0,0]
]*/

function selectGameField(event){
    //console.log(event.target.tagName)
    if(event.target.tagName !== "LI" || gameOverTrack){
        return
    }

    const selectedField = event.target
    const selectedColumn = selectedField.dataset.col - 1
    const selectedRow = selectedField.dataset.row - 1

    if(gameData[selectedRow][selectedColumn] > 0){
        alert("Please select another empty field! DO NOT CHEAT!")
        return
    }

    selectedField.textContent = players[activePlayer].symbol
    selectedField.classList.add("disabled")

    gameData[selectedRow][selectedColumn] = activePlayer + 1

    const winnerId = checkGameOver() // 0 || 1 || 2 || -1
    console.log(winnerId)
    if(winnerId !==  0){
        endGame(winnerId)
    }
    roundNb ++
    switchPlayer()
}

/*
 let x =1
 let y = 1
 let z = 1
 if(x === y === z)
*/
function checkGameOver(){
    //Winning Logic For the rows
    for(let i=0; i < gameData.length; i++){
        if( gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1]
            && gameData[i][1] === gameData[i][2]
        ){
            console.log("The winning player is:", gameData[i][0])
            return gameData[i][0]
            
        }
    }
    //Winning Logic for the columns 
       for(let i=0; i < gameData.length; i++){
        if( gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i]
            && gameData[1][i] === gameData[2][i]
        ){
            console.log("The winning player is:", gameData[0][i])
            return gameData[0][i]
        }
    }

    //Winning Logic for Diagonal [top left -> bottom right]
    if(gameData[0][0] > 0
        && gameData[0][0] === gameData[1][1]
        && gameData[1][1] === gameData[2][2]
    ){
        console.log("The winning player is:", gameData[0][0])
        return gameData[0][0]
    }

    //Winning Logic for Diagonal [bottom left -> top right]
    if(gameData[2][0] > 0
        && gameData[2][0] === gameData[1][1]
        && gameData[1][1] === gameData[0][2]
    ){
        console.log("The winning player is:", gameData[2][0])
        return gameData[2][0]
    }

    if(roundNb === 9){
        return -1
    }

    return 0
}