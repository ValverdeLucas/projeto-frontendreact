import React from 'react'
import { Container, ProductContainer, TextContainer, AdicionarButton } from './ProductCardStyle'

function ProductCard() {
    return (
            <Container>
                <ProductContainer>
                    <p>ProductCard</p>
                </ProductContainer>

                <TextContainer>
                    <p>Nome do Produto</p>
                    <p>Valor</p>
                </TextContainer>
                <AdicionarButton>Adicionar ao Carrinho</AdicionarButton>
            </Container>
    )
}

export default ProductCard