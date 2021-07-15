import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import storeContext from "./contexts/storeContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <storeContext.Provider value={{products, cart, addItem}}>
      <div className="App">
        <Navigation />

        
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </div>
    </storeContext.Provider>
  );
}

export default App;
