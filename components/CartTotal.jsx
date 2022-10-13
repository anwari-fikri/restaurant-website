import React from "react";

const CartTotal = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between pt-2">
        <h3 className="ml-3">Cart total</h3>
        <h3 className="font-bold">$39.80</h3>
      </div>
      <div className="flex justify-between pt-2">
        <h3 className="ml-3">Discount</h3>
        <h3 className="font-bold">-$0.00</h3>
      </div>
      <div className="flex justify-between pt-2">
        <h3 className="ml-3">Delivery</h3>
        <h3 className="font-bold">$5.00</h3>
      </div>
      <div className="flex justify-between pt-2 border-t-2 border-[#D1411E]">
        <h3 className="ml-3">Subtotal</h3>
        <h3 className="font-bold">$44.80</h3>
      </div>
      <button className="flex mx-auto bg-[#D1411E] text-white p-2 rounded-md mt-5">
        Checkout
      </button>
    </div>
  );
};

export default CartTotal;
