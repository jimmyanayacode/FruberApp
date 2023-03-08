
import { Product } from '../../models/product-model';
import getProducts from '../store/products';
import { filterProductCategory } from '../use-cases/filter-products-category';


// Save product data added in the shopping car.
const shoppingCar = {
    products: []
}

/**Add object Product in the shopping car 
 * @param {<Product>} productData
 */
const addProduct = ( productAdd ) =>  {
    
    if (shoppingCar.products.some( item => item.id === productAdd.id)) {
        shoppingCar.products.map( product =>  {
            if (product.id === productAdd.id) {
                product.quantity = productAdd.quantity;
            }
        })
    }else{
        const productAddCar = new Product(productAdd)
        shoppingCar.products.push(productAddCar);
    }
}

/**
 * Delete object Product of shopping car
 * @param {String} id 
 */
const deleteProduct = ( id ) => {
    const productCanceledShoppingCar = shoppingCar.products.filter( product => product.id === id );
    const product = new Product(productCanceledShoppingCar[0])
    getProducts.takeInCardtoShop(product);
    shoppingCar.products = shoppingCar.products.filter( product => product.id !== id)
    const category = document.querySelector('#category-choose').value;
    filterProductCategory(category);
}

/**
 * Delete all object Product of shopping car
 */
const deleteProducts = () => {
    const productsDelete = shoppingCar.products.map( product => new Product(product));
    getProducts.takeInCardtoShop(productsDelete);
    shoppingCar.products = [];
    const category = document.querySelector('#category-choose').value;
    filterProductCategory(category);
}

export default {
    addProduct,
    deleteProduct,
    deleteProducts,
    getProducts: () => [...shoppingCar.products]
}
