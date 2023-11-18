import React from 'react'
import { ItemsContainer, ItemsCart } from './ItemsStyle.js'

function Items(props){

    const itemsCarrinho = props.cart.map(item => {
        return <ItemsCart>
        <p>x{props.amount}</p> <li>{item}</li> <button>Remover</button>
        </ItemsCart>
    })

    return(
        <div>
        <ItemsContainer>
            {itemsCarrinho}
        </ItemsContainer>
        </div>
    )
}

export default Items