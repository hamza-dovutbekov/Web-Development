function openPlayerConfig(event){
    editPlayer = +event.target.dataset.playerid
    // Display the form
    playerConfigOverlay.style.display = "block"
    backdropOverlay.style.display = "block"
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = "none"
    backdropOverlay.style.display = "none"

    formElement.firstElementChild.classList.remove("error")
    errorOutput.textContent = ""
    formElement.firstElementChild.lastElementChild.value = ""
}

function savePlayerConfig(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    //console.log(formData)
    const enteredPlayerName = formData.get("playername").trim()
    
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add("error")
        errorOutput.textContent = "Please enter a valid name!"
        return
    }

    const updatedPlayerDocument = document.getElementById("player-"+editPlayer+"-data")
    updatedPlayerDocument.children[1].textContent = enteredPlayerName
    
    players[editPlayer - 1].name = enteredPlayerName

    closePlayerConfig() //nested function
}