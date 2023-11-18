import React, { useState } from 'react'
import Filters from "./Components/Filters/Filters.js"
import Home from "./Components/ProductList/Home/Home.js"
import Cart from "./Components/ShoppingCart/Cart/Cart.js"
import products from "./assets/productsList.js"
import { styled, createGlobalStyle } from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction:row;
  padding:8px;
  width: 100vw;
  height: 100vh;
`

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

   }

   h2{
    font-family: "Times New Roman", Times, serif;
   }
`
//Incluir nos objetivos uma característica "Type (Onibus espacial, Satélite, Espaço Nave" e incluir um filtro

function App() {

  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <Filters
          minFilter={minFilter} setMinFilter={setMinFilter}
          maxFilter={maxFilter} setMaxFilter={setMaxFilter}
          searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <Home
          minFilter={minFilter} setMinFilter={setMinFilter}
          maxFilter={maxFilter} setMaxFilter={setMaxFilter}
          searchFilter={searchFilter} setSearchFilter={setSearchFilter}
          amount={amount} setAmount={setAmount}
          cart={cart} setCart={setCart}
          products={products}
        />
        <Cart
          amount={amount} setAmount={setAmount}
          cart={cart} setCart={setCart} />
      </FlexContainer>
    </>
  );
}

export default App;
