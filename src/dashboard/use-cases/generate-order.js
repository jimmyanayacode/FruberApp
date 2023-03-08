import productShoppinCarStore from "../store/product-shopping-car";
import { deleteProducts } from "./create-list-buy";
import { showMessage } from "./message-shopping-car";

const message = document.querySelector('#mesagge-Shopping-car');

export const dataOrder = async() =>{

    message.innerHTML = '';
    message.style.display = "block"
    
    if (productShoppinCarStore.getProducts().length === 0 ) {
        message.style.background = '#dc3545';
        showMessage( message, 'Agregue productos para poder generar el pedido' );
        console.log('No hay productos');
        return
    }

    const dataPedido = productShoppinCarStore.getProducts().map( product => {
        return {
            id: product.id,
            quantity: product.quantity
        }
    });
    
    const url = `${ import.meta.env.VITE_BASE_URL }/api/orders`;

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({pedido : dataPedido}),
        headers: { 'Content-Type': 'application/json' }
    })
    
    .then( () => {
        deleteProducts()
        message.style.background = '#198754';
        showMessage( message, 'Pedido creado con exito')
        
    })
    .catch( error => console.log('No se pudo conectar'))

}