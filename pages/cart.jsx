import React from "react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="w-full md:min-h-screen">
      <div className="max-w-[95%] py-28 min-h-screen m-auto w-full xl:max-w-[1240px] ">
        <div className="pt-10">
          <h1 className="">Your cart</h1>
          <div className="grid lg:grid-cols-2">
            {/* left */}
            <div className="py-3 space-y-2">
              {cart.products.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
            </div>
            {/* right */}
            <div className="p-3">
              <CartTotal cart={cart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
