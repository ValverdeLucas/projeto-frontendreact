import React, { useState } from 'react'
import Filters from "./Components/Filters/Filters.js"
import Home from "./Components/ProductList/Home/Home.js"
import Cart from "./Components/ShoppingCart/Cart/Cart.js"
import styled from "styled-components";

function App() {
  return (
    <div>
      <Filters />
      <Home />
      <Cart />
    </div>
  );
}

export default App;
