// Armazenar histórico de rolagens
let history = [];

// Função para atualizar o histórico
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
    }

    // Atualizar a reportagem se estiver na página principal
    const reportDescription = document.getElementById('report-description');
    const reportDetails = document.getElementById('report-details');
    
    if (reportDescription && reportDetails) {
        reportDescription.textContent = `A rolagem mais recente foi uma vitória inesperada para o jogador!`;
        reportDetails.textContent = `Hoje, durante a sessão de jogo, o jogador rolou um dado e obteve um resultado significativo que influenciou a história de forma importante.`;
    }
}

// Função para exibir uma nova reportagem
function updateReport(result, sides) {
    const reportDescription = document.getElementById('report-description');
    const reportDetails = document.getElementById('report-details');
    
    if (reportDescription && reportDetails) {
        reportDescription.textContent = `Última rolagem de dado de ${sides} lados:`;
        reportDetails.textContent = `O dado rolou ${result}. Este resultado teve um impacto significativo no jogo.`;
    }
}

// Rolagem de Dados
document.getElementById('dice-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sides = parseInt(document.getElementById('dice-sides').value, 10);
    
    if (sides < 2) {
        document.getElementById('dice-result').textContent = 'O número de lados deve ser pelo menos 2.';
        return;
    }
    
    const result = Math.floor(Math.random() * sides) + 1;
    
    document.getElementById('dice-result').textContent = `Resultado: ${result}`;
    updateHistory(result);
    updateReport(result, sides);
    
    // Limpar o formulário
    this.reset();
});


    
    // Limpar o formulário
    this.reset();
});
