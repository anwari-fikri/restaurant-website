import React from "react";
import Image from "next/image";

const PizzaItem = () => {
  return (
    <div className="w-[85%] flex flex-col items-center text-center">
      <div className="w-[70%] pb-2">
        <Image src="/assets/pizza.png" alt="" width={500} height={500} />
      </div>
      <h4 className="font-bold uppercase">fiori di zucca</h4>
      <h4 className="font-bold">$19.90</h4>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaItem;
