import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HomeContainer, ProductContainer, FilterContainer } from './HomeStyle'

function Home(props) {

    const [ordination, setOrdination] = useState("Padrão")

    useEffect(() => {
        setOrdination("")
        handleOrdination()
    }, [ordination])

    const handleOrdination = () => {

        switch (ordination) {
            case "Preço: 0-9":
                props.products.sort(function (a, b) {
                    if (a.value < b.value) {
                        return -1;
                    }
                    if (a.value > b.value) {
                        return 1;
                    }
                    return 0
                })
                break;

            case "Preço: 9-0":
                props.products.sort(function (a, b) {
                    if (a.value < b.value) {
                        return 1;
                    }
                    if (a.value > b.value) {
                        return -1;
                    }
                    return 0
                })
                break;
            case "Nome: A-Z":
                props.products.sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0
                })
                break;
            case "Nome: Z-A":
                props.products.sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0
                })
                break;
            default:
                props.products.sort(function (a, b) {
                    if (a.id < b.id) {
                        return -1;
                    }
                    if (a.id > b.id) {
                        return 1;
                    }
                    return 0
                })        }
        console.log(ordination)
    }

    return (
        <HomeContainer>

            <FilterContainer>
                <p>Quantidade de Produtos:</p>
                <label>Ordenação:
                    <select onChange={(e) => setOrdination(e.target.value)}>
                        <option value="Padrão">Padrão</option>
                        <option value="Preço: 0-9">Preço: 0-9</option>
                        <option value="Preço: 9-0">Preço: 9-0</option>
                        <option value="Nome: A-Z">Nome: A-Z</option>
                        <option value="Nome: Z-A">Nome: Z-A</option>
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