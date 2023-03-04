import productShoppinCarStore from "../../store/product-shopping-car";

//Reference to html table element
const listData = document.querySelector('#lista-carro tbody');

// Create table with products add in the shopping car and show it in the app web.
export const shoppingCarHtml = () => {
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