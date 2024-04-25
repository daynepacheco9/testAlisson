function cpf(cpf){
    if( typeof (cpf) !=  'string' ){
        return false
    }
    if(cpf.length != 11){
        return false
    }

    let numero_igual = true
    for(let i = 1;i < cpf.length; i ++){
        if(cpf[i-1] != cpf[i]){
            numero_igual = false
            break
        }
    }
    if(numero_igual) return false

    let soma=0;
    let resto;

    for( let i = 0; i < 9; i++){
        soma += cpf[i] * (10-i);
    }
    resto = soma % 11;
    let digito1 = (resto < 2 ) ? 0 : 11 - resto
 
    soma = 0
    resto = 0 

    for(let i = 0; i < 10; i++){
        soma += cpf[i] * (11-i);
    }

    resto = soma % 11

    let digito2 = (resto < 2 ) ? 0 : 11 - resto


    if(digito1 == cpf[9] && digito2 == cpf[10]){
        console.log("CPF válido")
        return true
    }
    else{
    console.log('CPF inválido')
    return false
    }
   
}
module.exports = {cpf}