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

    
    render(){
        const { products } = this.state;
       return(
        <div className='cart'>
            {products.map((product) => {
                return  <CartItem product={product} key={product.id}/>
            })}
          
           
        </div>
       )

    }

}
export default Cart;