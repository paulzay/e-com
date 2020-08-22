import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";

import "./cart-dropdown.scss";
import CustomButton from "../custom-btn/CustomButton";

const CartDropdown = (CartItems) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {CartItems.map((CartItem) => (
        <CartItem key={CartItem.id} item={CartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { CartItems } }) => ({
  CartItems,
});
export default connect(mapStateToProps)(CartDropdown);
