import React from 'react'
import Items from "../Items/Items.js"
import { CartContainer } from './CartStyle.js'
import productList from "../../../assets/productsList.js"

function Cart() {
    return (
        <CartContainer>
            <h2>Cart</h2>
            <Items></Items>
            <Items></Items>
            <Items></Items>
            <Items></Items>
            <Items></Items>
            <Items></Items>
            <Items></Items>
            <Items></Items>
            <Items></Items>
            <p>Valor total</p>
        </CartContainer>
    )
}

export default Cart