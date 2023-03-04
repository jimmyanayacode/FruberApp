import { changeDataCard, renderCard } from '../presentation/render-card/render-card';
import getProducts from '../store/products';
import { addProduct } from './create-list-buy';

// Save products that it'll show in the app.
const data = {
    products: [],
}

const input = document.querySelector('#search-product');


/**
* Filter products according to category value
* @param {String} category - "FRUTAS" or "VERDURAS"
*/
export const filterProductCategory = (category) => {

    if (category == 0) {

        data.products = getProducts.getProducts();

    } else {

        data.products = getProducts.getProducts().filter(product => product.category === category);

    }

    changeDataCard(data.products);
    takeProductsForSearch(input.value)
}

/**
 * Get id of the product card, with id get a products array  without that to contain this id
 * @param {HTML<card>} - card - product 
 */
export const takeOutCard = (product) => {

    let id = product.querySelector('.add-shop-car').getAttribute('data-id');
    data.products = getProducts.takeOutCardtoShop(id);
    const category = document.querySelector('#category-choose').value;
    filterProductCategory(category);

}

export const takeProductsForSearch = ( name ) => {

    let cardCreate = '';
    let productsSearch = [];

    cardCreate = document.querySelector('.cards__results--search');
    if (name.length !== 0) { 
        //Obtenemos el valor actual del input y lo formateamos a minusculas para que sea freandlyCamelCase
        const search = name.toLowerCase();
        productsSearch = data.products.filter( product => product.title.toLowerCase().includes(search));
    }

    renderCard(cardCreate, productsSearch)

}


