
import { changeDataCard, renderCard, takeOutCard } from "../presentation/render-card/render-card";
import productShoppinCarStore from "../store/product-shopping-car";


const listData = document.querySelector('#lista-carro tbody');


export const addProduct = (e) => {

    e.preventDefault(); 

    const product = e.target.parentElement.parentElement;
    const input = product.querySelector('input');

    if (e.target.classList.contains('add-shop-car')) {
        takeOutCard( product );
        readProduct(product);
    }

    if (e.target.classList.contains('plus-quantyty')) {
        input.value++;
    }

    if (e.target.classList.contains('minus-quantyty')) {
        if (parseInt(input.value) >= 2) {
            input.value--;    
        }
    }
}

const readProduct = (product) => {
    
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector('h4').textContent,
        price: product.querySelector('span').textContent,
        id: product.querySelector('.add-shop-car').getAttribute('data-id'),
        quantity: product.querySelector('input').value,
        category: product.querySelector('#category').getAttribute('data')
    }
    
    productShoppinCarStore.addProduct( infoProduct );
    shoppingCarHtml();
}

const shoppingCarHtml = () => {
    listData.innerHTML = '';
    const shoppingCarShow = productShoppinCarStore.getProducts();
    
    shoppingCarShow.forEach( product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${product.image}" width=100>
            </td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>
                <a href="#" class="delete-product" data-id="${product.id}">X</a>
            </td>
        `;
        listData.appendChild(row);
    });
}

export const deleteProduct =(e) => {
    e.preventDefault();
    if (e.target.classList.contains('delete-product')) {
        const productId = e.target.getAttribute('data-id');
        productShoppinCarStore.deleteProduct(productId);
        shoppingCarHtml();
    }
}


export const deleteProducts = () => {
    productShoppinCarStore.deleteProducts()
    shoppingCarHtml();
}







