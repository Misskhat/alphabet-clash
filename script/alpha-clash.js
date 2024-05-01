function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
    continueGame();
}

function continueGame(){
    // generate a random alphabet;
    const alphabetOnScreen = getARandomAlphabets()
    console.log(alphabetOnScreen)

}