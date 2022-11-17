import React from "react";
import Image from "next/image";
import Link from "next/link";

const PizzaItem = ({ pizza }) => {
  return (
    <Link href={`/product/${pizza._id}`}>
      <div className="w-[85%] flex flex-col items-center text-center">
        <div className="w-[60%] pb-2">
          <Image src={pizza.image} alt="" width={500} height={500} />
        </div>
        <h4 className="font-bold uppercase">{pizza.title}</h4>
        <h4 className="font-bold">${pizza.prices[0]}</h4>
        <p className="">{pizza.description}</p>
      </div>
    </Link>
  );
};

export default PizzaItem;
