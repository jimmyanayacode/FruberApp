import { Product } from "../../models/product-model";
import { loadProductsByPage } from "../use-cases/load-products-by-page"

// Save data sent from backend
const state = {
    currentPage: 0,
    products: [],
}


// Get product data from backend
const reloadPage = async() => {
    const products = await loadProductsByPage( state.currentPage )
    if ( products.length === 0) {
        await loadPreviousPage();
        return;
    }
    state.products = products;
}

/**
 * Change the object state, pulling out a product with an id similar received of the params.
 * @param {String} id 
 * @returns {Array<Product>}
 */
const takeOutCardtoShop = ( id ) => {
    state.products = state.products.filter( product => product.id !== id);
    return state.products
}

/**
 * Change the object state, adding the product received of the params.
 * @param {Product} product 
 */
const takeInCardtoShop = ( product ) => {
    if ( Array.isArray(product)) {
        product.forEach( product => state.products.unshift(product));
    }else{
        state.products.unshift( product );
    }
    /*  */
    state.products.sort(function(a, b){
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    })
}

export default {
    reloadPage,
    takeInCardtoShop,
    takeOutCardtoShop,
    getProducts: () => [...state.products],
    getCurrentPage: () => state.currentPage,
   
}
