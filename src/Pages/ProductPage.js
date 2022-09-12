import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Header2 from "../Header/Header2";
import Product from "../Products/Product";
import CartContext from "../Store/Cart-Context";
import CartProvider from "../Store/Cart-Provider";

const ProductPage = (props) => {
  const [showCart, setShowCart] = useState(false);

  
  const cartCtx=useContext(CartContext)
  
   const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      <CartProvider>
        <Header onShowCart={showCartHandler}/>
        <Header2/>
        <Product />
        {showCart && <Cart onClose={hideCartHandler} />}
      </CartProvider>
    </>
  );
};

export default ProductPage;
