import React, { useState } from 'react'
import { ItemsContainer, ItemsCart, RemoverItem, nomeItems} from './ItemsStyle.js'

function Items(props) {

    const handleRemoverItem = (itemRemover) => {

        const removerQuantidade = [...props.cart]

        const carrinhoFiltrado = props.cart.filter((item) => {
            if (item !== itemRemover) {
                return item;
            }
        })

        if (itemRemover.quantity === 1) {

            props.setCart(carrinhoFiltrado)
        }

        if (itemRemover.quantity > 1) {
            itemRemover.quantity -= 1;
            props.setCart(removerQuantidade)
        };
    }

    const itemsCarrinho = props.cart.map(item => {
        return <ItemsCart>
            <p><strong>x{item.quantity}</strong></p>
            <nomeItems>{item.name}</nomeItems>
            <RemoverItem onClick={() => handleRemoverItem(item)}>Remover</RemoverItem>
        </ItemsCart>
    })

    return (
        <ItemsContainer>
            {itemsCarrinho}
        </ItemsContainer>
    )
}

export default Items