const { cpf } = require("../../commom/cpf")

describe('Válidação CPF',() => {
    it('deve retornar o resultado da validação do cpf', () => {
        const res = cpf('11111111111');
        expect(res).toBe(false);
    })
    it('deve retornar o resultado da validação do cpf', () => {
        const res = cpf(12345678925);
        expect(res).toBe(false);
    })
    it('deve retornar o resultado da validação do cpf', () => {
        const res = cpf('9876543219');
        expect(res).toBe(false);
    })
    it('deve retornar o resultado da validação do cpf', () => {
        const res = cpf('09515937906');
        expect(res).toBe(true);
    })
    it('deve retornar o resultado da validação do cpf', () => {
        const res = cpf('09615937906');
        expect(res).toBe(false);
    })
})