import React from 'react'
import Items from "../Items/Items.js"
import { CartContainer, ValorTotal } from './CartStyle.js'
import productList from "../../../assets/productsList.js"

function Cart(props) {

    function valorTotal(cart, preco, multiplicador) {
        return cart.reduce((a, b) => a + (b[preco] * b[multiplicador] || 0), 0);
    }

    return (
        <CartContainer>
            <h2>Cart</h2>
            <Items
                amount={props.amount} setAmount={props.setAmount}
                cart={props.cart} setCart={props.setCart} />
            <ValorTotal>Valor total: {valorTotal(props.cart, "value", "quantity")},00</ValorTotal>
        </CartContainer>
    )
}

export default Cart