import { useState, useEffect } from 'react'
import React from 'react'
import { Container, ImageProduct, TextContainer, AdicionarButton, NomeBotao } from './ProductCardStyle'

function ProductCard(props) {

    const handleAdicionarItem = () => {

        const itemNoCarrinho = { ...props.product, quantity: 1 }
        const carrinhoComItems = [...props.cart, itemNoCarrinho]
        const atualizacaoQuantidade = [...props.cart]

        const localizarItem = props.cart.find((item) => {
            return item.id === props.product.id
        })

        if (localizarItem) {

            for (const item of props.cart) {
                if (item.id === props.product.id) {
                    item.quantity += 1
                    props.setCart(atualizacaoQuantidade)
                }
            }
        } else {
            props.setCart(carrinhoComItems)
        }
    }

    return (
        <Container>
            <ImageProduct src={props.product.image} alt="" />
            <NomeBotao>
                <TextContainer>
                    <h4>{props.product.name}</h4>
                    <p><strong>Preço:</strong> {props.product.value}</p>
                </TextContainer>
                <AdicionarButton onClick={() => handleAdicionarItem()}>Adicionar ao Carrinho</AdicionarButton>
            </NomeBotao>
        </Container>
    )
}

export default ProductCard