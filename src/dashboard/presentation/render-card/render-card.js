import '../../../css/custom.css';
import '../../../css/normalize.css';
import '../../../css/skeleton.css';
import getProducts from '../../store/products';


const data = {
  products: [],
}

const cardCreate = document.querySelector('#cards');
const category = document.querySelector('#category');

category.addEventListener('change', e => {
  const category = e.target.value;
  filterProductCategory(category);
});

export const filterProductCategory = (category) => {

  if (category == 0) {

    data.products = getProducts.getProducts();

  } else {

    data.products = getProducts.getProducts().filter(product => product.category.nombre === category);

  }

  renderCard(cardCreate);
}

let card

export const renderCard = (element) => {
  cardCreate.innerHTML = '';
  const products = data.products;
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
      <a href="#" class="button input plus-quantyty">+</a>
      <input id="${product.id}" type="text" style="text-align: center; width: 50px; height:50px" value=1>
      <a href="#" class="button input minus-quantyty">-</a>  
      </div>
    
      <p>Precio ultima compra:<span class="u-pull-right">${product.price}</span></p>
      <a href="#" class="u-full-width button-primary button input add-shop-car" data-id="${product.id}">Agregar al carrito</a>
    </div>
  </div>
    `;
    element.append(card);
  });
}


