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

function operate(a, b, op) {
    switch (op) {
        case '+': add(a, b)
            break;
        case '-': sub(a, b)
            break;
        case '*': mul(a, b)
            break;
        case '/': div(a, b)
            break;
        default: 'ERR'
            break;
    } 
}