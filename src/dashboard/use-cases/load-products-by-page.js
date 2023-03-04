import { localhostProductToModel } from "../mappers/localhost-product.mapper";

// Request get all products of backend
export const loadProductsByPage = async() => {
    const url = `${ import.meta.env.VITE_BASE_URL }/api/products`;
    /* const url = `${ import.meta.env.VITE_BASE_URL }/products?_page=${page}`; */
    const res = await fetch(url);
    const data = await res.json();

    const products = data.productos.map( productLike => localhostProductToModel(productLike)); 
    return products;
}