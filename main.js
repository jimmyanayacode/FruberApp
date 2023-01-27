import { renderCard } from "./src/dashboard/presentation/render-card/render-card";
import { addProduct, deleteProduct, deleteProducts } from "./src/dashboard/use-cases/create-list-buy";
import getProducts from "./src/dashboard/store/products";
import { loadProductsByPage } from "./src/dashboard/use-cases/load-products-by-page";


await getProducts.reloadPage();

const cardCreate = document.querySelector('#cards');
renderCard(cardCreate);


const listProduct = document.querySelector('#list-product');
const deleteProductShoppingCar = document.querySelector('#shoppingCar');
const deleteProductsShoppingCar = document.querySelector('#vaciar-carro');


listProduct.addEventListener('click', addProduct);
deleteProductShoppingCar.addEventListener('click', deleteProduct);
deleteProductsShoppingCar.addEventListener('click', deleteProducts);

/* import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */
