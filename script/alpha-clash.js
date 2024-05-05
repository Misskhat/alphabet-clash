function play(){
    hideElementByID('home-screen');
    hideElementByID('final-score');
    showElementByID('play-ground');
    // set current life and current score
    setElementValueText('current-life', 5);
    setElementValueText('current-score', 0);
    continueGame();
}

function handleKeyboardPressButton(event){
    // player press key
    const playerPress = event.key;
    if(playerPress === 'Escape'){
        gameOver()
    }
    // screen show key
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expactedAlphabet = currentAlphabet.toLowerCase()
    console.log(expactedAlphabet, playerPress);
    // check player press key and screen show key 
    if(playerPress === expactedAlphabet){
        const currentScore = getElementValueById('current-score');
        console.log(currentScore);
        const newScore = currentScore + 1;
        setElementValueText('current-score', newScore);
        removeBackgroundColor(expactedAlphabet)
        continueGame()
    }
    else{
        const currentLife = getElementValueById('current-life')
        const newLife = currentLife - 1;
        setElementValueText('current-life', newLife);
        if(newLife === 0){
            gameOver()
        }

    }
}
document.addEventListener('keyup', handleKeyboardPressButton)
function continueGame(){
    // generate a random alphabet;
    const alphabetOnScreen = getARandomAlphabets()
    // console.log(alphabetOnScreen);
    // show random alphabets to screen;
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabetOnScreen;
    setBackgroundColorById(alphabetOnScreen)
}

function gameOver(){
    hideElementByID('play-ground');
    showElementByID('final-score')
    const gameScore = getElementValueById('current-score');
    setElementValueText('game-score', gameScore);
    const currentAlphabetFound = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabetFound);
}
