'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (item, img = 'https://via.placeholder.com/250x250') => `<div class="product-item">
                <img src="${img}" class="product-img" alt="Some img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">Price: ${item.price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;


const renderProducts = list => {
    document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));    
};

renderProducts(products);

