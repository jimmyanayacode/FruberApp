import { shoppingCarHtml } from "../presentation/render-shopping-car/render-shopping-car";
import productShoppinCarStore from "../store/product-shopping-car";
import { takeOutCard } from "./filter-products-category";

/**
 * Add product to shopping car
 * @param {HTMLElement} e 
 */
export const addProduct = (e) => {

    e.preventDefault(); 

    const product = e.target.parentElement.parentElement;
    const input = product.querySelector('input');

    if (e.target.classList.contains('add-shop-car')) {
        takeOutCard( product );
        readProduct(product);
    }

    if (e.target.classList.contains('plus-quantyty')) {
        input.value++;
    }

    if (e.target.classList.contains('minus-quantyty')) {
        if (parseInt(input.value) >= 2) {
            input.value--;    
        }
    }
}

/**
 * Get product data of card element and show in the shopping car
 * @param {HTMLElement} product card
 */
const readProduct = (product) => {
    
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector('h4').textContent,
        price: product.querySelector('span').textContent,
        id: product.querySelector('.add-shop-car').getAttribute('data-id'),
        quantity: product.querySelector('input').value,
        category: product.querySelector('#category').getAttribute('data')
    }
    
    productShoppinCarStore.addProduct( infoProduct );
    shoppingCarHtml();
}

/**
 * Delete Product of shopping car
 * @param {PointerEvent}  
 */
export const deleteProduct =(e) => {
    e.preventDefault();
    if (e.target.classList.contains('delete-product')) {
        const productId = e.target.getAttribute('data-id');
        productShoppinCarStore.deleteProduct(productId);
        shoppingCarHtml();
    }
}

/**
 * Delete all Products of shopping car
 */
export const deleteProducts = () => {
    productShoppinCarStore.deleteProducts()
    shoppingCarHtml();
}







