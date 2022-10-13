import React, { useState } from "react";
import { BsReceiptCutoff, BsCashCoin } from "react-icons/bs";
import { GiPizzaCutter, GiFullPizza } from "react-icons/gi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import CartTotal from "../../components/CartTotal";

const Order = () => {
  const [progress, setProgress] = useState(5);

  return (
    <div className="w-full md:min-h-screen">
      <div className="max-w-[80%] py-28 min-h-screen m-auto w-full xl:max-w-[1240px] ">
        <h1 className="py-8">Your Order</h1>
        <div className="grid lg:grid-cols-2">
          {/* left */}
          <div className="flex mx-auto">
            {/* progress bar */}
            <div className="flex flex-col justify-start w-2 h-[70vh] bg-gray-200 rounded-full overflow-hidden">
              <div className={`bg-blue-500 h-[${progress}%]`}></div>
            </div>
            {/* progress info */}
            <div className="flex flex-col justify-between pl-14">
              <div className="flex">
                <BsCashCoin size={50} />
                <div className="ml-3">
                  <h3>Payment</h3>
                  <p>We will confirm your order soon...</p>
                </div>
              </div>
              <div className="flex">
                <BsReceiptCutoff size={50} />
                <div className="ml-3">
                  <h3>Order</h3>
                  <p>We have received your order</p>
                </div>
              </div>
              <div className="flex">
                <GiPizzaCutter size={50} />
                <div className="ml-3">
                  <h3>Preparing</h3>
                  <p>The rock is cooking</p>
                </div>
              </div>
              <div className="flex">
                <MdOutlineDeliveryDining size={50} />
                <div className="ml-3">
                  <h3>OTW!</h3>
                  <p>Sending hot pizza asap</p>
                </div>
              </div>
              <div className="flex">
                <GiFullPizza size={50} />
                <div className="ml-3">
                  <h3>Delivered</h3>
                  <p>Enjoy the pizza!</p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="pt-10">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
