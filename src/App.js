import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Context
import { ProductContext } from "./contexts/ProductsContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./contexts/CartContext";
// import { CartItemContext } from './contexts/CartItemContext'

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
     console.log(newArray)
     
     setCart([...newArray])
   };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <CartContext.Provider value={{ cart, removeItem }}>
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
