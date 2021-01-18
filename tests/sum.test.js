const sum = require('../src/sum')
    it('deve retornar soma correta: ', () => {
        const result = sum(2, 5)
        expect(result).toBe(7)
    })