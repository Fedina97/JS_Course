'use strict';

const Product = {
  catalog:[
    {
        value: 'Джинсы',
        price: 2490,
        quantity: 4
    },
    {
        value: 'Пальто',
        price: 10000,
        quantity: 2
     },
     {
         value: 'Туфли',
         price: 6000,
         quantity: 1
      }
    ],
    
  cat: document.querySelector('#catalog'), 
  
  render(){
    
       let combo
    for(let i = 0; i < this.catalog.length; i++){
      this.cat.insertAdjacentHTML('beforeend', '<div class="itemProd"></div>');
      combo = document.querySelectorAll('.itemProd');
      for (let key = 0; key < Object.keys(this.catalog[i]).length; key++){
          combo[i].insertAdjacentHTML('beforeend', `<p class="prod">${Object.keys(this.catalog[i])[key]}: ${Object.values(this.catalog[i])[key]}</p>`);
        } 
    }
  }

}
Product.render()
    

    // render(){

    // },

    