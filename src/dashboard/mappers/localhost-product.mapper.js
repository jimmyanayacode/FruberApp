import { Product } from "../../models/product-model";


/**
 * Get data sent it of backend and structure this data for the local variables in the frontend.
 * @param{ Array<{productLike}>} - product like - [ { product1}, { product2}, product3].
 * @returns { Array{Product}} 
 */

export const localhostProductToModel = ( localhostProduct ) => {
    const {
        _id,
        img, 
        precio,
        quantity,
        nombre, 
        category
    } = localhostProduct;

    return new Product({
        id:_id,
        image:img,
        price:precio,
        quantity,
        title:nombre, 
        category:category.nombre
    })
}