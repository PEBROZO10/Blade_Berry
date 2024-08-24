// Arrays com diferentes opções
const ambientes = [
    "Floresta sombria", 
    "Cidade subterrânea", 
    "Templo antigo", 
    "Deserto infinito",
    "Ruínas de uma civilização perdida",
    "Cidade Nova"
];

const eventos = [
    "uma tempestade repentina", 
    "uma cerimônia ritual", 
    "um ataque surpresa",
    "um terremoto",
    "uma aparição espectral",
    "um Terralith",
    "um Verdeluz"
];

const npcs = [
    "um velho sábio", 
    "um mercador misterioso", 
    "um grupo de bandidos",
    "um aventureiro perdido",
    "uma criatura mágica",
    "ferreiro"
];

// Função para gerar elementos aleatórios
function gerarCenario() {
    const ambiente = ambientes[Math.floor(Math.random() * ambientes.length)];
    const evento = eventos[Math.floor(Math.random() * eventos.length)];
    const npc = npcs[Math.floor(Math.random() * npcs.length)];

    return `Você está em ${ambiente}, onde ocorre ${evento}. E aí você encontra ${npc}.`;
}

// Manipulador do botão de geração
document.getElementById('gerar').addEventListener('click', function() {
    const resultado = gerarCenario();
    document.getElementById('resultado').innerText = resultado;
});
