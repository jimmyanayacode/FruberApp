import { filterProductCategory, renderCard } from "./src/dashboard/presentation/render-card/render-card";
import { addProduct, deleteProduct, deleteProducts } from "./src/dashboard/use-cases/create-list-buy";
import getProducts from "./src/dashboard/store/products";
import { loadProductsByPage } from "./src/dashboard/use-cases/load-products-by-page";



await getProducts.reloadPage();

document.addEventListener('DOMContentLoaded', filterProductCategory('0'));

const listProduct = document.querySelector('#list-product');
const deleteProductShoppingCar = document.querySelector('#shoppingCar');
const deleteProductsShoppingCar = document.querySelector('#vaciar-carro');


listProduct.addEventListener('click', addProduct);
deleteProductShoppingCar.addEventListener('click', deleteProduct);
deleteProductsShoppingCar.addEventListener('click', deleteProducts);
