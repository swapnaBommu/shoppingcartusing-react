import React from 'react';

const CartItem = (props) => {
    
    //increaseQuantity = () =>{
        
        //method-1 if previous state not required
        // this.setState({
        //     qty:this.state.qty + 1
        // });

        //method-1 if previous state  required
    //     this.setState((prevState) =>{
    //         return {
    //             qty:prevState.qty + 1
    //         }
    //     });

    // }

    // decreaseQuantity = () => {
    //     const {qty} = this.state;
    //     if(qty === 0){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     })
    // }
    
    const {title, price, qty} = props.product;
    const { product, 
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct } = props;
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
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" 
                        alt="decrease" 
                        className='action-icons'
                        onClick={() => onDecreaseQuantity(product)}       
                    />
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                        alt="delete" 
                        className='action-icons'   
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );

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