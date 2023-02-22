
import { loadProductsByPage } from "../use-cases/load-products-by-page"

const state = {
    currentPage: 0,
    products: [],
}

const reloadPage = async() => {
    const products = await loadProductsByPage( state.currentPage )
    if ( products.length === 0) {
        await loadPreviousPage();
        return;
    }
    state.products = products;
}

const takeOutCardtoShop = ( id ) => {
    state.products = state.products.filter( product => product.id !== id);
    return state.products
}

const takeInCardtoShop = ( product ) => {
    state.products.unshift( product );
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
