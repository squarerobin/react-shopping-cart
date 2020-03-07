import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Context
import { ProductContext } from "./contexts/ProductContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    // step 1
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <CartContext.Provider value={{cart}}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            {/* delete the props: products and addItem after step 4 and delete this comment*/}
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
