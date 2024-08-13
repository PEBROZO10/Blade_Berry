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
    
    // Limpar o formulário
    this.reset();
});
