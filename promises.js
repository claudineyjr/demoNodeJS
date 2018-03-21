function funcaoAssincrona(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero * 250);
        }, 3000);
    });
}

console.log('Começo da execuçâo');
console.log('Processamento síncrono');
funcaoAssincrona(231)
    .then((resultado) => {
        console.log('Processamento assíncrono');
        console.log(`O valor retornado na promise é ${resultado}`);
        console.log('Fim do processamento assíncrono');
    });
console.log('Fim do processamento síncrono');