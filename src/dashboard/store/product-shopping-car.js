

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
    shoppingCar.products = shoppingCar.products.filter( product => product.id !== id)
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
