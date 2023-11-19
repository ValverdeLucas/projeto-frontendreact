import React from 'react'
import { Container, ImageProduct, TextContainer, AdicionarButton } from './ProductCardStyle'

function ProductCard(props) {

    const handleAdicionarItem = () => {

        const itemNoCarrinho = {
            ...props.product, quantity: props.product.quantity + 1
        }
        const carrinhoComItems = [...props.cart, itemNoCarrinho]


        props.setCart(carrinhoComItems)

        // function shallowEqualityCheck(produto1, produto2) {
        //     const chave1 = Object.keys(produto1)
        //     const chave2 = Object.keys(produto2)

        //     if (chave1.lenght !== chave2.lenght) {
        //         return false;
        //     }

        //     for (const chave of chave1) {
        //         if (produto1[chave] !== produto2[chave]) {
        //             return false
        //         }
        //     }

        //     return true
        // }

        // if (carrinhoComItems.some((item) => shallowEqualityCheck(item, itemNoCarrinho)) === true) {



        // } else {

        //     const itemNoCarrinho = {
        //         ...props.product, quantity: 1
        //     };



        // }


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
        // console.log(carrinhoComItems.some((item) => shallowEqualityCheck(item, itemNoCarrinho)))

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