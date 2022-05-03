let displayText = document.getElementById('display')
let equation = []
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operate(arr) {
    switch (arr[1]) {
        case '+': displayText.textContent = String(add(arr[0],arr[2]))
            break;
        case '-': displayText.textContent = String(sub(arr[0],arr[2]))
            break;
        case 'x': displayText.textContent = String(mul(arr[0],arr[2]))
            break;
        case '/': displayText.textContent = String(div(arr[0],arr[2]))
            break;
        default: displayText.textContent = 'ERR'
            break;
    }
    equation = []
}

const numButton = document.querySelectorAll('.num-btn')
numButton.forEach(button => button.addEventListener('click',buttonClick))
 function buttonClick(e) {
    if(displayText.textContent.length < 11) {
        displayText.textContent += e.target.value;
    }
 }

 //AC button to clear calc display
const acButton = document.querySelector('.ac-btn')
acButton.addEventListener('click',allClear)
function allClear() {
    equation = []
    displayText.textContent = ''
}

//C button to clear single digit
const cButton = document.querySelector('.c-btn')
cButton.addEventListener('click',clear)
function clear() {
    if (displayText.textContent == 'ERR') {
        displayText.textContent = ''
    }
    else {
        const len = displayText.textContent.length
        displayText.textContent = displayText.textContent.slice(0,len-1)
    }
}

//Operator buttons
const opButton = document.querySelectorAll('input[class="op-btn"]')
opButton.forEach(button => button.addEventListener('click',calculate))
function calculate(e) {
    if(e.target.value != '=') {
        equation.push(+displayText.textContent)
        equation.push(e.target.value)
        displayText.textContent = ''
    }
    else {
        equation.push(+displayText.textContent)
        operate(equation)
    }
    console.log(equation)
}