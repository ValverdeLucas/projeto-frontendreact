import React from 'react'
import { Container, InputWrapper, Filter } from "./FiltersStyle"

function Filters() {
    return (
        <Container>
            <Filter>Filters</Filter>
            <InputWrapper>
                <p>Valor mínimo:</p>
                    <input></input>
            </InputWrapper>

            <InputWrapper>
                <p>Valor máximo:</p>
                    <input></input>
            </InputWrapper>

            <InputWrapper>
                <p>Busca por nome:</p>
                    <input></input>
            </InputWrapper>
        </Container>
    )
}

export default Filters