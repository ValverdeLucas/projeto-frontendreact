import React from 'react'
import { Container, ImageProduct, TextContainer, AdicionarButton } from './ProductCardStyle'

function ProductCard(props) {

    const handleAdicionarItem = () => {
        const itemNoCarrinho = {
            ...props.product, quantity:1
        };

        const carrinhoComItems = [...props.cart, itemNoCarrinho];

        props.setCart(carrinhoComItems)

        // const aumentarQuantidade = (item) => {
        //     const carrinhoFiltrado = props.cart((item) => {
        //         if (item === props.product.id) {
        //             return {
        //                 ...props.product, quantity: product.quantity + 1
        //             }
        //         }
        //         return product
        //     })
        //     props.setCart(carrinhoComItems)
        // }
        console.log(carrinhoComItems)
    }

    return (
        <Container>
            <ImageProduct src={props.product.image} alt="" />
            <TextContainer>
                <p>{props.product.name}</p>
                <p>Preço: {props.product.value}</p>
            </TextContainer>
            <AdicionarButton onClick={handleAdicionarItem}>Adicionar ao Carrinho</AdicionarButton>
        </Container>
    )
}

export default ProductCard