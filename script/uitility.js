function hideElementByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
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

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const elementValue = parseInt(elementValueText);
    return elementValue;
}

function setElementValueText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}