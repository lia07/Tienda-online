const btnCart = document.querySelector('.container-cart-icon');

const containerCartProducts = document.querySelector(('.container-cart-products'));

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


/*=====================================*/
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

//lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');


//variable de arreglos de Productos
let allProducts = [];


productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,

        }
        allProducts = [...allProducts, infoProduct];

        showHTML();

        console.log(allProducts);

        
    }

})

//Funcion para mostrar HTML
const showHTML = () => {
    allProducts.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = ` 
        <div class="infor-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </div>

            <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="icon-close"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
        `

        rowProduct.append(containerProduct);
        
    })
}