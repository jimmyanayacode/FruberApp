
import { addProduct, deleteProduct, deleteProducts } from "./src/dashboard/use-cases/create-list-buy";
import getProducts from "./src/dashboard/store/products";
import { filterProductCategory, takeProductsForSearch } from "./src/dashboard/use-cases/filter-products-category";

await getProducts.reloadPage();

document.addEventListener('DOMContentLoaded', filterProductCategory('0'));

const listProduct = document.querySelector('#list-product');
const deleteProductShoppingCar = document.querySelector('#shoppingCar');
const deleteProductsShoppingCar = document.querySelector('#vaciar-carro');
const navBar = document.querySelector('.navigation');
const input = document.querySelector('#search-product');
const cardSearch = document.querySelector('#card-search');


listProduct.addEventListener('click', addProduct);
cardSearch.addEventListener('click', addProduct)

deleteProductShoppingCar.addEventListener('click', deleteProduct);
deleteProductsShoppingCar.addEventListener('click', deleteProducts);

input.addEventListener("input", function(){
    takeProductsForSearch(input.value)
})

window.addEventListener('scroll', function(){
    
    if ( window.scrollY > 380) {
        navBar.classList.add('navigation-fixed');
    }else{
        navBar.classList.remove('navigation-fixed');
    }
})

