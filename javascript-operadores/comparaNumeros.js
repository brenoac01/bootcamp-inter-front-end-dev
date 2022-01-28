function comparaNumeros(n1, n2) {
    const saoIguais = n1 === n2;
    const soma = n1 + n2;

    return saoIguais ? console.log('São iguais') : console.log('Não são iguais');
}

comparaNumeros();