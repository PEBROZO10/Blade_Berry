// Armazenar histórico de rolagens
let history = [];

// Atualizar histórico
function updateHistory(result) {
    history.push(result);
    if (history.length > 3) {
        history.shift(); // Remove o item mais antigo se houver mais de 3 itens
    }

    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Limpar a lista atual

    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Rolagem ${index + 1}: ${item}`;
        historyList.appendChild(li);
    });
}

// Rolagem de Dados
document.getElementById('dice-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sides = parseInt(document.getElementById('dice-sides').value, 10);
    
    if (sides < 2) {
        document.getElementById('dice-result').textContent = 'O número de lados deve ser pelo menos 2.';
        return;
    }
    
    const result = Math.floor(Math.random() * sides) + 1;
    
    document.getElementById('dice-result').textContent = `Resultado: ${result}`;
    updateHistory(result);
    
    // Limpar o formulário
    this.reset();
});
