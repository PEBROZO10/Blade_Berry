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
}

// Função para atualizar a reportagem
function updateReport() {
    const description = document.getElementById('report-description').value;
    const details = document.getElementById('report-details').value;

    const reportDescription = document.getElementById('report-description');
    const reportDetails = document.getElementById('report-details');
    
    if (reportDescription && reportDetails) {
        // Atualizar a reportagem com as informações inseridas
        reportDescription.textContent = `Última rolagem de dado: ${description}`;
        reportDetails.textContent = `Detalhes: ${details}`;
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
    // Atualizar a reportagem com informações padrão, se necessário
    updateReport();
    
    // Limpar o formulário
    this.reset();
});

// Atualizar a reportagem ao clicar no botão
document.getElementById('update-report')?.addEventListener('click', function() {
    updateReport();
});


    
    // Limpar o formulário
    this.reset();
});
