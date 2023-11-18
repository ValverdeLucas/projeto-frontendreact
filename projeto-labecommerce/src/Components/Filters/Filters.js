import React from 'react'
import { Container, InputWrapper, Filter } from "./FiltersStyle"
import productList from "../../assets/productsList"

function Filters(props) {

    const handleMinFilter = (e) => {
        props.setMinFilter(e.target.value);
        // console.log(`MinFilter:${props.minFilter}`)
    };

    const handleMaxFilter = (e) => {
        props.setMaxFilter(e.target.value);
        // console.log(`MaxFilter:${props.maxFilter}`)
    };
    const handleSearchFilter = (e) => {
        props.setSearchFilter(e.target.value);
        // console.log(`SearchFilter:${props.searchFilter}`)
    };

    return (
        <Container>
            <Filter>Filters</Filter>
            <InputWrapper>
                <p>Valor mínimo:</p>
                <input
                    type="number"
                    onChange={handleMinFilter}
                    value={props.minFilter}
                    min={0}
                ></input>
            </InputWrapper>

            <InputWrapper>
                <p>Valor máximo:</p>
                <input
                    type="number"
                    onChange={handleMaxFilter}
                    value={props.maxFilter}
                    min={0}
                    ></input>
            </InputWrapper>

            <InputWrapper>
                <p>Busca por nome:</p>
                <input
                    type="text"
                    onChange={handleSearchFilter}
                    value={props.searchFilter}></input>
            </InputWrapper>
        </Container>
    )
}

export default Filters