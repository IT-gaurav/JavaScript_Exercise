// Variable declaration
let result = 0
const userInput = document.querySelector('input')
const outputResult = document.querySelector('.output span')
const addBtn = document.querySelector('#idAdd')


// events
addBtn.onclick = () => {
    result = result + +userInput.value;
    outputResult.innerText = result;
    userInput.value = "";
}

