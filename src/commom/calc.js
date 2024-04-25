function Soma(a,b){
    return a + b;
}
function Sub(a,b){
    return a - b;
}
function Div(a,b){
    if (b == 0){
        return "erro"
    }
    return a / b;
}
function Mult(a,b){
    return a * b;
}
function Primo(num){
    if (num < 2){
        return false;
    }
    for(let i = Math.floor(num/2); i > 1 ; i--){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

module.exports = { Soma, Sub, Mult, Div, Primo }
