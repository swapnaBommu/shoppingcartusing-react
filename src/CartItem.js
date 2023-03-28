import React from 'react';

class CartItem extends React.Component{

    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img src='' style={styles.image}  alt='No img'/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color: '#777'}}>Proce:Rs. 999</div>
                    <div style={{color: '#777'}}>Qty: 1</div>
                    <div className='cart-item-actions'>
                        {/*buttons*/}
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