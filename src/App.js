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
                img:'https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg',
                id:1
            },
            {
                title: 'watch',
                price:250,
                qty:4,
                img:'https://rukminim1.flixcart.com/image/832/832/krayqa80/watch/y/0/x/fancy-bracelet-rose-gold-ladies-watches-girls-wrist-watch-for-original-imag54cntykjqsbg.jpeg?q=70',
                id:2
            },
            {
                title: 'Laptop',
                price:12000,
                qty:100,
                img:'https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM=',
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
getCartTotal = () => {
  const { products } = this.state;
  let total = 0;
  products.map((product) =>{
    total += product.qty * product.price;
  });

  return total;

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
      <div >TOTAL: {this.getCartTotal()}</div>
    </div>
  );
 }
  
}

export default App;
