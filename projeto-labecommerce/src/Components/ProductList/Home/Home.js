import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HomeContainer, ProductContainer, FilterContainer } from './HomeStyle'
import products from "../../../assets/productsList.js"

function Home() {

    console.log(products[0])

    return (
        <HomeContainer>

            <FilterContainer>
                <p>Quantidade de Produtos:</p>
                <label>Ordenação:
                    <select>
                        <option>Preço: 0-9</option>
                        <option>Preço: 9-0</option>
                        <option>Nome: A-Z</option>
                        <option>Nome: Z-A</option>
                    </select>
                </label>
            </FilterContainer>

            <ProductContainer >
                {products
                    .map((product) => {
                        return (
                            <ProductCard
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