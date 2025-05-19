// Mostrar el popup inmediatamente cuando se carga la página
window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
};

// Cuando el usuario presiona "No", el botón se mueve
document.getElementById('noBtn').addEventListener('mouseover', function(e) {
    const button = e.target;
    const popup = document.querySelector('.popup-content');
    
    // Generar una posición aleatoria dentro del popup
    const newX = Math.random() * (popup.offsetWidth - button.offsetWidth - 40);
    const newY = Math.random() * (popup.offsetHeight - button.offsetHeight - 40);
    
    // Aplicar la nueva posición
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
});

// También mover el botón al intentar hacer clic
document.getElementById('noBtn').addEventListener('mousedown', function(e) {
    e.preventDefault(); // Prevenir el click
    const button = e.target;
    const popup = document.querySelector('.popup-content');
    
    // Posición aleatoria diferente
    const newX = Math.random() * (popup.offsetWidth - button.offsetWidth - 40);
    const newY = Math.random() * (popup.offsetHeight - button.offsetHeight - 40);
    
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
});

// Cuando el usuario presiona "Sí"
function forgive() {
    // Ocultar el popup
    document.getElementById('popup').style.display = 'none';
    
    // Mostrar mensaje de agradecimiento
    const thankYou = document.createElement('div');
    thankYou.classList.add('thanks-message');
    thankYou.textContent = '¡Gracias por perdonarme! ❤️';
    document.querySelector('.card').appendChild(thankYou);
    thankYou.style.display = 'block';
    
    // Crear corazones animados
    createHearts();
}

// Función para crear corazones animados
function createHearts() {
    const hearts = document.createElement('div');
    hearts.classList.add('hearts');
    document.body.appendChild(hearts);
    
    // Crear 50 corazones
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Posición inicial aleatoria
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = -20 + 'px';
            
            // Tamaño aleatorio
            const size = Math.random() * 15 + 10;
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            
            // Velocidad aleatoria
            const duration = Math.random() * 3 + 2;
            heart.style.animationDuration = duration + 's';
            
            hearts.appendChild(heart);
            
            // Eliminar el corazón después de la animación
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
            
        }, i * 100);
    }
}

// Reemplazar la imagen de placeholder con una imagen de disculpa
document.getElementById('sorryImg').src = 'https://api.placeholder.com/400/320';
