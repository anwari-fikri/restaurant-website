import React from "react";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className="flex p-3 bg-white rounded-xl">
      {/* left */}
      <div className="w-1/2 flex items-center justify-center">
        <Image src="/assets/pizza.png" alt="" width={100} height={100} />
      </div>

      {/* right */}
      <div className="ml-3 w-full flex flex-col justify-between">
        {/* pizza info */}
        <div className="flex justify-between">
          <div>
            <h3>CAMPAGNOLA</h3>
            <div className="max-h-[50px] overflow-y-auto border border-1 border-gray-500 rounded-md p-1">
              <p>Double ingredient</p>
              <p>Spicy sauce</p>
            </div>
          </div>
          <div className="flex">
            <AiFillEdit />
            <AiOutlineDelete />
          </div>
        </div>
        {/* price info */}
        <div className="pt-2 flex justify-between">
          <div>
            <p>$19.90 Each</p>
            <p>$39.80 Subtotal</p>
          </div>
          <div className="my-auto">
            <h4 className="font-bold">x2</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
