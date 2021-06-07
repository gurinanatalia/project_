'use strict';
// const products = [
//     {id: 1, title: 'Notebook', price: 20000},
//     {id: 2, title: 'Mouse', price: 1500},
//     {id: 3, title: 'Keyboard', price: 5000},
//     {id: 4, title: 'Gamepad', price: 4500},
// ];

// const renderProduct = (item, img = 'https://via.placeholder.com/250x250') => `<div class="product-item">
//                 <img src="${img}" class="product-img" alt="Some img">
//                 <h3 class="product-title">${item.title}</h3>
//                 <p class="product-price">Price: ${item.price}</p>
//                 <button class="by-btn">Добавить в корзину</button>
//               </div>`;


// const renderProducts = list => {
//     document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));    
// };

// renderProducts(products);

class ProductList {

    constructor(container = '.products') {
        this.container = container;
        this._goods = [];
        this._allProducts = [];

        this._fetchGoods();
        this._render();
    }

    _fetchGoods() {
        this._goods = [
                {id: 1, title: 'Notebook', price: 20000},
                {id: 2, title: 'Mouse', price: 1500},
                {id: 3, title: 'Keyboard', price: 5000},
                {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);

        for (const good of this._goods) {
            const productObject = new ProductItem(good);
            // console.log(productObject);
            this._allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    //дз2 начало -----------------

    sum() {
        return this._goods.reduce((sum, { price }) => sum + price, 0);
    }

    //дз2 конец ------------------
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" class="product-img" alt="Some img">
                    <h3 class="product-title">${this.title}</h3>
                    <p class="product-price">Price: ${this.price}</p>
                    <button class="by-btn">Добавить в корзину</button>                       
                </div>`
    }
}

const pl = new ProductList();

class Cart {
    
    addToCart() {

    }

    removeFromCart() {

    }

}

class CartItem {

}

