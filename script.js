function contar() {
    var first = document.querySelector("#inicio");
    var last = document.querySelector("#fim");
    var step = document.querySelector("#passo");
    var result = document.querySelector("#resultado");

    //validação para campos vazios
    if ((first.value == "") || (last.value == "") || (step.value == "")) {
        alert("Impossível contar! Preencha os dados novamente.");
    }
    else {
        result.innerHTML = `Contando: <br>`

        var inicio = Number(first.value);
        var fim = Number(last.value);
        var passo = Number(step.value);

        //validação de passo menor que 1
        if (passo < 1) {
            alert("Valor inválido. Será considerado 'Passo 1'.");
            passo = 1;
        }

        //contagem progressiva
        if (inicio < fim) {
            for (var contador = inicio; contador < fim; contador += passo) {
                result.innerHTML += `\u{1F449} ${contador} <br>`
            }
        } else {
            
        //contagem regressiva        
            for (var contador = inicio; contador >= fim; contador -= passo) {
                result.innerHTML += `\u{1F449} ${contador} <br>`
            }
        }
    }
}