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
];

const npcs = [
    "um velho sábio", 
    "um mercador misterioso", 
    "um grupo de bandidos",
    "um aventureiro perdido",
    "uma criatura mágica",
    "um Terralith",
    "um Verdeluz",
    "um ferreiro"
];

// Função para gerar elementos aleatórios
function gerarCenario() {
    const ambiente = ambientes[Math.floor(Math.random() * ambientes.length)];
    const evento = eventos[Math.floor(Math.random() * eventos.length)];
    const npc = npcs[Math.floor(Math.random() * npcs.length)];

    return `Você está em ${ambiente}, onde ocorre ${evento}. E aí você encontra ${npc}.`;
}

// Manipulador do botão de geração
document.getElementById('gerarc').addEventListener('click', function() {
    const resultadoc = gerarCenario();
    document.getElementById('resultadoc').innerText = resultadoc;
});

const classes = [
    "arqueiro",
    "bardo",
    "clérigo",
    "ladino",
    "paladino",
    "bárbaro",
    "druida",
    "feiticeiro",
    "monge",
    "caçador",
    "artífice",
    "necromante",
    "geomante",
    "sonhador"
];

const racas = [
    "tabaxi",
    "anão",
    "terralith",
    "troll",
    "verdeluz",
    "elfo"
];

// Função para gerar elementos aleatórios
function gerarPersonagem() {
    const classe = classes[Math.floor(Math.random() * classes.length)];
    const raca = racas[Math.floor(Math.random() * racas.length)];

    return `Você avista um ${raca} ${classe}.`;
}

// Manipulador do botão de geração
document.getElementById('gerarp').addEventListener('click', function() {
    const resultadop = gerarPersonagem();
    document.getElementById('resultadop').innerText = resultadop;
});
