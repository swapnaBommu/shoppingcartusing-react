import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Phone',
            price:true,
            qty:1,
            img:''
        }
    }

    increaseQuantity = () =>{
        console.log('this',this.state);
        // this.state.qty++;
        // console.log('qty',this.state.qty);
    }

    render(){
        const {title, price, qty} = this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img src='' style={styles.image}  alt='No img'/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 
                            alt="increase" 
                            className='action-icons'
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" 
                            alt="decrease" 
                            className='action-icons'
                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                            alt="delete" 
                            className='action-icons'
                        />
                    </div>
                </div>
            </div>
        );

    }

}

const styles = {
    image:{
        width:150,
        height:150,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}


export default CartItem;