import '../../../assets/css/custom.css';
import '../../../assets/css/normalize.css';
import '../../../assets/css/skeleton.css';
import { filterProductCategory } from '../../use-cases/filter-products-category';

// Create reference to element html
const cardCreate = document.querySelector('#cards');
const category = document.querySelector('#category-choose');

//listening changes in the reference html (category)
category.addEventListener('change', e => {
  const category = e.target.value;
  filterProductCategory(category);
});

let card

// Create cards with product data and show in the app web.
export const renderCard = (element, productsData) => {
  element.innerHTML = '';
  const products = productsData;
  products.forEach(product => {

    card = document.createElement('div');
    card.className = 'card-info'
    card.innerHTML = `
    <div class="card">
    <img src="${product.image}" class="imagen-curso" style="height: 120px; padding: 25px">
    <div class="info-card">
      <h4>${product.title}</h4>
    
      <p>Cantidad:</p>
      <div class="quantity-counter">
      <a href="#" class="button input minus-quantyty">-</a>
      <input id="${product.id}" type="text" style="text-align: center; width: 50px; height:50px" value=1>
      <a href="#" class="button input plus-quantyty">+</a>  
      </div>
    
      <p id="category" data="${product.category}"></p>
      <p>Precio ultima compra:<span class="u-pull-right">${product.price}</span></p>
      <a href="#" class="u-full-width button-primary button input add-shop-car" data-id="${product.id}">Agregar al carrito</a>
    </div>
  </div>
    `;
    element.append(card);
  });
}

// Render cards when  product data change
export const changeDataCard = (products) => {
  renderCard(cardCreate, products);
}

