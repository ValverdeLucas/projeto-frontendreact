import React, { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HomeContainer, ProductContainer, FilterContainer } from './HomeStyle'

function Home(props) {

    const [ordination, setOrdination] = useState("")

    const handleOrdination = (e) => {
        setOrdination(e.target.value)
        console.log(ordination)
    }

    return (
        <HomeContainer>

            <FilterContainer>
                <p>Quantidade de Produtos:</p>
                <label>Ordenação:
                    <select onChange={handleOrdination}>
                        <option>Preço: 0-9</option>
                        <option>Preço: 9-0</option>
                        <option>Nome: A-Z</option>
                        <option>Nome: Z-A</option>
                    </select>
                </label>
            </FilterContainer>

            <ProductContainer >
                {props.products
                    .filter((product) => {
                        return props.minFilter ? product.value >= props.minFilter : product;
                    })
                    .filter((product) => {
                        return props.maxFilter ? product.value <= props.maxFilter : product;
                    })
                    .filter((product) => {
                        return product.name
                            .toLowerCase()
                            .includes(props.searchFilter.toLowerCase())
                    })
                    .map((product) => {
                        return (
                            <ProductCard
                                cart={props.cart}
                                setCart={props.setCart}
                                key={product.id}
                                product={product}
                            />
                        );
                    })}
            </ProductContainer>
        </HomeContainer>
    )
}

export default Home