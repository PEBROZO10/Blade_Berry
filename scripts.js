// Armazenar histórico de rolagens
let history = [];

// Atualizar histórico
function updateHistory(result) {
    history.push(result);
    if (history.length > 3) {
        history.shift(); // Remove o item mais antigo se houver mais de 3 itens
    }

    const historyList = document.getElementById('history-list');
    if (historyList) {
        historyList.innerHTML = ''; // Limpar a lista atual

        history.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `Rolagem ${index + 1}: ${item}`;
            historyList.appendChild(li);
        });
