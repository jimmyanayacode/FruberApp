
import { Product } from '../../models/product-model';
import { changeDataCard, filterProductCategory, renderCard } from '../presentation/render-card/render-card';
import getProducts from '../store/products';

const shoppingCar = {
    products: []
}

/**
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
        shoppingCar.products.push(productAdd);
    }
}

const deleteProduct = ( id ) => {
    const productCanceledShoppingCar = shoppingCar.products.filter( product => product.id === id );
    const product = new Product(productCanceledShoppingCar[0])
    getProducts.takeInCardtoShop(product);
    shoppingCar.products = shoppingCar.products.filter( product => product.id !== id)
    const category = document.querySelector('#category').value;
    filterProductCategory(category);
}

const deleteProducts = () => {
    shoppingCar.products = [];
}

export default {
    addProduct,
    deleteProduct,
    deleteProducts,
    getProducts: () => [...shoppingCar.products]
}
