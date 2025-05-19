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
    
    // Reemplazar el div del corazón con la imagen real
    const sorryImg = document.getElementById('sorryImg');
    sorryImg.innerHTML = ''; // Limpiar el contenido actual
    sorryImg.style.display = 'flex';
    sorryImg.style.justifyContent = 'center';
    sorryImg.style.alignItems = 'center';
    sorryImg.style.height = 'auto';
    sorryImg.style.backgroundColor = 'transparent';
    sorryImg.style.padding = '10px 0';
    
    // Crear y añadir la imagen
    const img = document.createElement('img');
    img.src = 'imagen.jpg';
    img.alt = 'Imagen de disculpa';
    img.style.width = '60%'; // Reducir el ancho al 60%
    img.style.margin = '0 auto'; // Centrar la imagen
    img.style.borderRadius = '10px';
    img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    img.style.opacity = '0';
    img.style.transition = 'opacity 1s ease-in-out';
    sorryImg.appendChild(img);
    
    // Forzar un reflow para activar la transición
    void img.offsetWidth;
    img.style.opacity = '1';
    
    // Mostrar mensaje de agradecimiento
    const thankYou = document.createElement('div');
    thankYou.classList.add('thanks-message');
    thankYou.textContent = '¡Te amo! ❤️';
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
            heart.style.top = '0';
            
            // Tamaño aleatorio
            const size = Math.random() * 20 + 15; // Corazones más grandes
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            
            // Velocidad aleatoria
            const duration = Math.random() * 5 + 3; // Más lentos para ser más visibles
            heart.style.animationDuration = duration + 's';
            
            // Configurar la opacidad inicial a 1
            heart.style.opacity = '1';
            
            hearts.appendChild(heart);
            
            // Eliminar el corazón después de la animación
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
            
        }, i * 100);
    }
}


