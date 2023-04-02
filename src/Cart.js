import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
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
    
    render(){
        const { products } = this.state;
       return(
        <div className='cart'>
            {products.map((product) => {
                return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                    />
                )
            })}
          
           
        </div>
       )

    }

}
export default Cart;