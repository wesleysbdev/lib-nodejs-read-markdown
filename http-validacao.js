// const fetch = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

function handlerErrors(erro) {
    throw new Error(erro.message);
}

async function verificaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url);
            return `${res.status} - ${res.statusText}`;
        }));
        return arrayStatus;
    } catch (error) {
        handlerErrors(error);
    }
}

function geraArrayDeURLs(arrayLinks) {
    return arrayLinks.map(objetoLink =>
        Object.values(objetoLink).join()
    );
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await verificaStatus(links);

    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))

    return resultados;
}

module.exports = validaURLs;