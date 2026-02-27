"use client"
import { CartContext } from "@/Context/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({food}) => {
    const [inCart,setInCart]=useState(false);
    const {AddToCart}=use(CartContext);
    const handelAddToCart =()=>{
        AddToCart(food)
        setInCart(true)
    }
  return (
    <button disabled={inCart} onClick={handelAddToCart} className={ `${inCart ? "disabled flex-1 bg-gray-100  text-gray-400 py-2 rounded-xl transition duration-200" :"flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl transition duration-200"}`}>
      {inCart ? "Added" : "Add to Cart"}      
    </button>
  );
};

export default CartButton;
