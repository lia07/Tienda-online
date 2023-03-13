const btnCart = document.querySelector('container-icon');

const containerCartProducts = document.querySelector(('container-cart-products hidden-cart'));

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})