import React from 'react'
import { Container, ImageProduct, TextContainer, AdicionarButton } from './ProductCardStyle'

function ProductCard(props) {
    return (
            <Container>
                <ImageProduct src={props.product.image} alt=""/>
                <TextContainer>
                    <p>{props.product.name}</p>
                    <p>Preço: {props.product.value}</p>
                </TextContainer>
                <AdicionarButton>Adicionar ao Carrinho</AdicionarButton>
            </Container>
    )
}

export default ProductCard