const mult = require("../src/multiply")
    it('deve retornar multiplica correta: ', () => {
        const result = mult(2,5)
        expect(result).toBe(10)

    })