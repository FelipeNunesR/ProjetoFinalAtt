let currentIndex = 0;
const imagens = document.querySelectorAll('.imagem');

function showImages() {
    imagens.forEach((img, index) => {
        img.classList.remove('active');
        img.style.transform = 'translateX(100%)'; // Move para a direita
    });

    imagens[currentIndex].classList.add('active');
    imagens[currentIndex].style.transform = 'translateX(0)'; // Centraliza a imagem atual

    const prevIndex = (currentIndex - 1 + imagens.length) % imagens.length;
    imagens[prevIndex].style.transform = 'translateX(-100%)'; // Move a imagem anterior para a esquerda

    const nextIndex = (currentIndex + 1) % imagens.length;
    imagens[nextIndex].style.transform = 'translateX(100%)'; // Move a próxima imagem para a direita
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imagens.length;
    showImages();
}

setInterval(nextImage, 3000); // Muda a imagem a cada 3 segundos
showImages();
