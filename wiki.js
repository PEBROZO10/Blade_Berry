const data = {
    "palavras": {
        "Gato sem Botas": {
            "resposta": "O Gato sem Botas é o maior Rei de Blade and Berry, governando o Reino de San Lourenzo. Ele é um Tabaxi ",
            "imagem": "img1.jpg"
        },
        "Carne": {
            "resposta": "O Carne é o Carne... E testador Beta do B&B",
            "imagem": "img2.jpg"
        },
        "Alguem": {
            "resposta": "Alguem é um testador Beta do B&B",
            "imagem": "img2.jpg"
        },
        "Tarcisio": {
            "resposta": "A deixe.....",
            "imagem": "img2.jpg"
        },
        "Henry": {
            "resposta": "Um louco legal, e também um testador Beta do B&B",
            "imagem": "img2.jpg"
            },
        "Andre": {
            "resposta": "André é o dono do servidor RPG 123 e um Mestre de Rpg focado em Dungeons and Dragons, e agora Mestre Beta do B&B",
            "imagem": "img22.jpg"
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
