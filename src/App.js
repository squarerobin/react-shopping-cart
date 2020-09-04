import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Context
import { ProductContext } from "./contexts/ProductsContext";
import { CartContext } from "./contexts/CartContext";
// import { CartItemContext } from './contexts/CartItemContext'

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);



  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  const removeItem = item => {
    // add the given item to the cart
    const newArray = [...cart] 
    newArray.pop(item)
    //console.log(newArray)

    setCart([...newArray])
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">

        <CartContext.Provider value={{ cart, removeItem }}>

          <Navigation />

          <Route exact path="/">
            <Products />
          </Route>


          <Route path="/cart">
            <ShoppingCart />
          </Route>

        </CartContext.Provider>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
