import React from 'react'
import { ItemsContainer, ItemsCart } from './ItemsStyle.js'

function Items(props) {

    const handleRemoverItem = (itemRemover) => {
        const carrinhoFiltrado = props.cart.filter((item) => {
            if (item !== itemRemover) {
                return item;
            }
        });
        props.setCart(carrinhoFiltrado)
    }

    const itemsCarrinho = props.cart.map(item => {
        return <ItemsCart>
            <p>x{item.quantity}</p> <li>{item.name}</li> <button onClick={()=> handleRemoverItem (item)}>Remover</button>
        </ItemsCart>
    })

    return (
        <ItemsContainer>
            {itemsCarrinho}
        </ItemsContainer>
    )
}

export default Items