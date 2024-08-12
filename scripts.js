// Adicionar Livros
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    
    const bookItem = document.createElement('li');
    bookItem.textContent = `Título: ${title} | Autor: ${author}`;
    
    document.getElementById('books-list').appendChild(bookItem);
    
    // Limpar o formulário
    this.reset();
});

// Criar Ficha de Personagem
document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('char-name').value;
    const charClass = document.getElementById('char-class').value;
    
    const characterInfo = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Classe:</strong> ${charClass}</p>
    `;
    
    document.getElementById('character-info').innerHTML = characterInfo;
    
    // Limpar o formulário
    this.reset();
});

// Rolagem de Dados
document.getElementById('dice-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sides = parseInt(document.getElementById('dice-sides').value, 10);
    const result = Math.floor(Math.random() * sides) + 1;
    
    document.getElementById('dice-result').textContent = `Resultado: ${result}`;
    
    // Limpar o formulário
    this.reset();
});
