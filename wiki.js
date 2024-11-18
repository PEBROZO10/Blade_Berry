const data = {
    "palavras": {
        "Gato sem Botas": {
            "resposta": "O Bato sem Botas é o maior Rei de Blade and Berry, governando o Reino de San Lourenzo. Ele é um Tabaxi ",
            "imagem": "-"
        },
        "x": {
            "resposta": "Um cachorro ",
            "imagem": ".jpg"
        },
        "zz": {
            "resposta": "Pássaros",
            "imagem": ".jpg"
        }
    }
};

function calcularSimilaridade(str1, str2) {
    let iguais = 0;
    const comprimento = Math.max(str1.length, str2.length);

    for (let i = 0; i < comprimento; i++) {
        if (str1[i] === str2[i]) {
            iguais++;
        }
    }

    return iguais / comprimento;
}

function encontrarPalavraSemelhante(input) {
    let melhorSimilaridade = 0;
    let melhorPalavra = null;

    for (const palavra in data.palavras) {
        const similaridade = calcularSimilaridade(input, palavra);
        if (similaridade > melhorSimilaridade) {
            melhorSimilaridade = similaridade;
            melhorPalavra = palavra;
        }
    }

    return melhorPalavra;
}

function mostrarResposta() {
    const input = document.getElementById("inputBox").value.toLowerCase();
    let palavra = data.palavras[input] ? input : encontrarPalavraSemelhante(input);

    if (palavra) {
        document.getElementById("resposta").textContent = data.palavras[palavra].resposta;
        const imagemUrl = data.palavras[palavra].imagem;
        const imagemElement = document.getElementById("imagem");
        imagemElement.src = imagemUrl;
        imagemElement.style.display = "block";
    } else {
        document.getElementById("resposta").textContent = "Palavra-chave não encontrada.";
        document.getElementById("imagem").style.display = "none";
    }
}
