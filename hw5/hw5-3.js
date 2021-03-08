'use strict';
    const Cart = {
        goods:[
            // {
            //     value: 'Джинсы',
            //     price: 2490,
            //     quantity: 4
            // },

            // {
            //     value: 'Пальто',
            //     price: 10000,
            //     quantity: 2
            // },

            // {
            //     value: 'Туфли',
            //     price: 6000,
            //     quantity: 1
            // },
        ],

        cartBlock: document.querySelector('.cart'),

        totalGoodsCount() {
            return this.goods.reduce((result, goods) => result + goods.quantity, 0)
        },

        totalPrice() {
            return this.goods.reduce((result, goods) => result + goods.price * goods.quantity, 0);
        },

        render() {
            if (this.totalGoodsCount() === 0) {
                this.cartBlock.textContent = 'Корзина пуста';
            } else {
                this.cartBlock.textContent = `В корзине ${this.totalGoodsCount()} товаров на сумму ${this.totalPrice()} рублей`;
            }
        },
    };
    
Cart.render();