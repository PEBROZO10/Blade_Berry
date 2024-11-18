const data = {
    "palavras": {
        "gato": {
            "resposta": "Um gato é um animal de estimação adorável!",
            "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUp29fRtslU9BJaQ-zyEZlYSszdmplqIc4g&s"
        },
        "cachorro": {
            "resposta": "Um cachorro é um companheiro leal!",
            "imagem": "url_da_imagem_do_cachorro.jpg"
        },
        "pássaro": {
            "resposta": "Pássaros são lindos e podem voar alto!",
            "imagem": "url_da_imagem_do_passaro.jpg"
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
