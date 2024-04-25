const { Soma, Sub, Mult, Div, Primo} = require("../../commom/calc")

describe('Calculadora', () => {
    describe('Soma', () => {
        it('deve retornar o resultado da soma de 1+2', () => {
            const res = Soma(1,2);
            expect(res).toBe(3);
        })
    })
    describe('Subtração',() =>{
        it('deve retornar o resultado da subtração de 2-1', () => {
            const res = Sub(2,1);
            expect(res).toBe(1);
        })
    })
    describe('Divisão',() => {
        it('deve retornar o resultado da divisão de 4/2', () => {
            const res = Div(4,2);
            expect(res).toBe(2);
        })
        it('deve retornar o resultado da divisão de 4/0', () => {
            const res = Div(4,0);
            expect(res).toBe("erro");
        })
    })
    describe('Multiplicação',() => {
        it('deve retornar o resultado da Multiplicação de 2X8', () => {
            const res = Mult(2,8);
            expect(res).toBe(16);
        })
    })
    describe('Divisão',() => {
        it('deve retornar se o numero 9 é primo', () => {
            const res = Primo(9);
            expect(res).toBe(false);
        })
        it('deve retornar se o numero 1 é primo', () => {
            const res = Primo(1);
            expect(res).toBe(false);
        })
        it('deve retornar se o numero 17 é primo', () => {
            const res = Primo(17);
            expect(res).toBe(true);
        })
    })

    
    

})