import { Product } from "../../models/product-model";


export const localhostProductToModel = ( localhostProduct ) => {
    const {
        id,
        image, 
        price,
        quantity,
        title
    } = localhostProduct;

    return new Product({
        id,
        image,
        price,
        quantity,
        title
    })
}