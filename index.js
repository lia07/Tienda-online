const btnCart = document.querySelector('container-cart-icon');

const containerCartProducts = document.querySelector(('container-cart-products hidden-cart'));

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


/*=====================================*/
const cartInfo = document.querySelector('cart-product')
