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

/* const requestProduct = ( id ) => {
    const availableProducts = state.products.filter( product.id === id);
    state.products = availableProducts;
} */

export default {
    reloadPage,
    getProducts: () => [...state.products],
    getCurrentPage: () => state.currentPage
}
