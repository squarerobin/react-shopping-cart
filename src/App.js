import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Context
import { ProductsContext } from "./contexts/ProductsContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./contexts/CartContext";
import { CartItemContext } from './contexts/CartItemContext'

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  const [image] = useState()
  const [title] = useState()
  const [price] = useState();


  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

   const removeItem = item => {
     // add the given item to the cart
     cart.pop(item);
   };

  return (
    <ProductsContext.Provider value={{ products, addItem }}>
      <div className="App">
        <CartContext.Provider value={{ cart }}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            {/* delete the props: products and addItem after step 4 and delete this comment*/}
            <Products />
          </Route>
          <CartItemContext.Provider value={{ image, title, price, removeItem }}>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </CartItemContext.Provider>
        </CartContext.Provider>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
