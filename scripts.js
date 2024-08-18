const catalogo = document.querySelector('.catalogo');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');
const cuerpo = document.querySelector('.cuerpo');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < catalogo.children.length - 1) {
        currentIndex++;
        updateSlide();
    }
});

function updateSlide() {
    const offset = -currentIndex * 100;
    catalogo.style.transform = `translateX(${offset}%)`;
}

// Toggle menu for mobile view
menuToggle.addEventListener('click', function() {
    menuItems.classList.toggle('active');
    cuerpo.classList.toggle('menu-open');
});
