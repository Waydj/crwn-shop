import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { cartCount, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen((prevS) => !prevS);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
