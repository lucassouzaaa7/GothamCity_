const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.getElementById('close-button');

menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
});

closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

const text = "Feira do Gotham City.";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typed").textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

window.onload = type;
document.addEventListener("DOMContentLoaded", function() {
    // Aplica o efeito de fade-in em todas as seções ao carregar
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("fade-in");
        }, index * 200); // Atraso para cada seção
    });

    // Alterna a visibilidade do menu em dispositivos móveis
    const menuButton = document.querySelector(".menu-hamburger");
    const navMenu = document.querySelector("nav");

    menuButton.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('img');
    var totalImages = images.length;
    var loadedImages = 0;

    images.forEach(function(image) {
        image.onload = function() {
            loadedImages++;
            if (loadedImages === totalImages) {
                // Remover o loader quando todas as imagens forem carregadas
                document.querySelector('.loader').style.display = 'none';
            }
        };
    });
});
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333'; // cor ao rolar
    } else {
        header.style.backgroundColor = 'transparent'; // cor original
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
