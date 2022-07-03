const { pegaArquivo } = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('Deve retornar um array com resultados', async () => {
        const resultado = await pegaArquivo('/home/wesley/Estudos/Node/lib-nodejs-markdown-aula/test/arquivos/texto1.md');
        expect(resultado).toEqual(arrayResult);
    });
    it('Deve retornar a mensagem "Não há links".', async () => {
        const resultado = await pegaArquivo('/home/wesley/Estudos/Node/lib-nodejs-markdown-aula/test/arquivos/texto1_semlinks.md');
        expect(resultado).toBe('Não há links');
    })
});
