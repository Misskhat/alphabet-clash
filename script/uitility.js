function hideElementByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabets(){
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    // console.log(alphabets);  
    // get a random index 0-25;
    const randomNumber = Math.round(Math.random()*25);
    const alphabet = alphabets[randomNumber];
    return alphabet;
}