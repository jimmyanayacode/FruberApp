import { Product } from "../../models/product-model";


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