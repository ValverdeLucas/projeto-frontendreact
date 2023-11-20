import React, { useState, useEffect } from 'react'
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
  height: auto;
  gap: 8px;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(64,9,121,1) 58%, rgba(255,0,234,1) 100%);
`

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   h2{
    color: #400979;
    font-family: "Times New Roman", Times, serif;
   }

   li{
    list-style-type: none;
   }

   h4{
    color: #3e0975;
   }

   p{
    color: #3e0975;
   }

`
//Incluir nos objetivos uma característica "Type (Onibus espacial, Satélite, Espaço Nave" e incluir um filtro

function App() {

  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState("0")

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("cart");
    if (carrinhoSalvo) {
      setCart(JSON.parse(carrinhoSalvo));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <Filters
          minFilter={minFilter} setMinFilter={setMinFilter}
          maxFilter={maxFilter} setMaxFilter={setMaxFilter}
          searchFilter={searchFilter} setSearchFilter={setSearchFilter}
        />
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
          cart={cart} setCart={setCart}
          products={products}
        />
      </FlexContainer>
    </>
  );
}

export default App;
