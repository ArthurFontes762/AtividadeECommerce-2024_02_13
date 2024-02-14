// Função para atualizar o número de itens no carrinho
let cartItems = 0;
const cartItemsElement = document.querySelector('.cart-items');

function updateCartItems(count) {
  cartItems = count;
  cartItemsElement.textContent = count;
}

// Simulação de adição de itens ao carrinho
updateCartItems(3);

// Lógica do Carrossel
const carousel = document.querySelector('.carousel');
const carouselContent = document.querySelector('.carousel-content');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

// Função para mover o carrossel
function moveCarousel(direction) {
  if (direction === 'next') {
    currentIndex++;
    if (currentIndex === totalItems) {
      currentIndex = 0;
    }
  } else {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    }
  }

  const translateXValue = -currentIndex * 100 + '%';
  carouselContent.style.transform = `translateX(${translateXValue})`;
}

// Adicionando botões de navegação para o carrossel
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

prevBtn.addEventListener('click', () => {
  moveCarousel('prev');
});

nextBtn.addEventListener('click', () => {
  moveCarousel('next');
});

// Autoplay do carrossel
setInterval(() => {
  moveCarousel('next');
}, 8000);

// Lógica para a pesquisa de produtos em destaque
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('#search-input');
  const searchButton = document.querySelector('#search-button');
  const featuredProducts = document.querySelector('.featured-products');

  searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim().toLowerCase();

    // Remove os destaques anteriores
    const highlightedElements = featuredProducts.querySelectorAll('.highlighted');
    highlightedElements.forEach(element => {
      element.classList.remove('highlighted');
    });

    // Percorre os elementos da seção de produtos em destaque e destaca os que correspondem à pesquisa
    featuredProducts.childNodes.forEach(node => {
      if (node.nodeType === 1) {
        searchNode(node, searchTerm);
      }
    });
  });

  function searchNode(node, term) {
    if (node.nodeType === 3 && node.textContent.toLowerCase().includes(term)) {
      const parentElement = node.parentElement;
      parentElement.classList.add('highlighted');
    } else {
      node.childNodes.forEach(child => {
        searchNode(child, term);
      });
    }
  }
});

// Lógica para o popup de aceitação de cookies
const acceptBtn = document.querySelector('.accept-btn');
const cookiePopup = document.querySelector('.cookie-popup');

acceptBtn.addEventListener('click', () => {
  cookiePopup.style.display = 'none';
});

var msgCookies = document.getElementById('cookie-msg');

function aceito(){
    localStorage.lgpd = "sim";
    msgCookies.classList.remove('mostrar');
}

// Verifica se o usuário já aceitou os cookies
if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar');
} else {
    msgCookies.classList.add('mostrar');
}
