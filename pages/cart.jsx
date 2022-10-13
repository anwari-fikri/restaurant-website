import React from "react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  return (
    <div className="w-full md:min-h-screen">
      <div className="max-w-[95%] py-28 min-h-screen m-auto w-full xl:max-w-[1240px] ">
        <div className="pt-10">
          <h1 className="">Your cart</h1>
          <div className="grid lg:grid-cols-2">
            {/* left */}
            <div className="py-3 space-y-2">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            {/* right */}
            <div className="p-3">
              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
