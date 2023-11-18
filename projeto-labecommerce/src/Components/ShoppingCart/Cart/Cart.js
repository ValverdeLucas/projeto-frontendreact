import React from 'react'
import Items from "../Items/Items.js"
import { CartContainer } from './CartStyle.js'
import productList from "../../../assets/productsList.js"

function Cart(props) {
    return (
        <CartContainer>
            <h2>Cart</h2>
            <Items
                amount={props.amount} setAmount={props.setAmount}
                cart={props.cart} setCart={props.setCart} />
            <p>Valor total:</p>
        </CartContainer>
    )
}

export default Cart