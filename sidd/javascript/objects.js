let products={
  company:'mango',
  item_name:'t shirt',
  price:222,
  displayPrice : function(){
    console.log(`the price of the products is ${products.price}`); //this.price can also used
  }
}
products.displayPrice();
console.log(products['price']);
console.log(products.company);
products.company= 'banana';