import React, { useState } from 'react'
import Filters from "./Components/Filters/Filters.js"
import Home from "./Components/ProductList/Home/Home.js"
import Cart from "./Components/ShoppingCart/Cart/Cart.js"
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

function App() {
  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <Filters />
        <Home />
        <Cart />
      </FlexContainer>
    </>
  );
}

export default App;
