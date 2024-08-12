document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const characterClass = document.getElementById('class').value;
    
    const characterInfo = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Classe:</strong> ${characterClass}</p>
    `;
    
    document.getElementById('character-info').innerHTML = characterInfo;
});
