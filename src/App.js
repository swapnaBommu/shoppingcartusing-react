import React from 'react';
import Cart  from "./Cart";
import Navbar from "./Navbar";

class App extends  React.Component {
  constructor(){
    super();
    this.state = {
        products:[
            {
                title: 'Phone',
                price:9999,
                qty:1,
                img:'',
                id:1
            },
            {
                title: 'watch',
                price:250,
                qty:4,
                img:'',
                id:2
            },
            {
                title: 'Laptop',
                price:12000,
                qty:100,
                img:'',
                id:3
            }

        ]
    }
}

handleIncreaseQuantity =(product) =>{
    //get the products arrray from state
  const { products } = this.state;
  //get the index of the product for which qty need to increase
  const index = products.indexOf(product);
    //increasing the qty
  products[index].qty +=1;

  this.setState({
    products
  })

}

handleDecreaseQuantity =(product) =>{
    //get the products arrray from state
  const { products } = this.state;
  //get the index of the product for which qty need to decrease
  const index = products.indexOf(product);
  if( products[index].qty === 0){
    return;
  }
    //increasing the qty
  products[index].qty -=1;

  this.setState({
    products
  })

}

hndleDeleteProduct = (id) =>{
  const { products } = this.state;

  const items = products.filter((item) => item.id != id);

  this.setState({
    products: items
  })
}

getCartCount(){
  const { products } = this.state;
  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  });
  return count;
}
 render(){
  const { products } = this.state;
  return ( 
    <div className="App">
      <Navbar count = {this.getCartCount()}/>
      <Cart 
      products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.hndleDeleteProduct}
      />
    </div>
  );
 }
  
}

export default App;
