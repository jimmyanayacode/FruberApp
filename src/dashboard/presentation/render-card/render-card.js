import cardHtml from './render-card.html?raw';

import '../../../css/custom.css';
import '../../../css/normalize.css';
import '../../../css/skeleton.css';
import getProducts from '../../store/products';



let card

export const renderCard = (element) => {
  const products =  getProducts.getProducts();
  products.forEach(product => {

    card = document.createElement('div');
    card.className = 'card-info'
    card.innerHTML = `
    <div class="card">
    <img src="${ product.image }" class="imagen-curso" style="height: 120px; padding: 25px">
    <div class="info-card">
      <h4>${ product.title }</h4>
    
      <p>Cantidad:</p>
      <div class="quantity-counter">
      <a href="#" class="button input plus-quantyty">+</a>
      <input id="${ product.id }" type="text" style="text-align: center; width: 50px; height:50px" value=${product.quantity}>
      <a href="#" class="button input minus-quantyty">-</a>  
      </div>
    
      <p>Precio ultima compra:<span class="u-pull-right">$15</span></p>
      <a href="#" class="u-full-width button-primary button input add-shop-car" data-id="${ product.id}">Agregar al carrito</a>
    </div>
  </div>
    `;
    element.append(card);
  });
}


