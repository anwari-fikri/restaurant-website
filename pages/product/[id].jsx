import Image from "next/image";
import React, { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(1);

  const changeSize = (event) => {
    setSize(event.target.value);
  };

  const pizza = {
    id: 1,
    img: "/assets/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <div className="pt-28 w-full">
      <div className="max-w-[85%] h-full m-auto py-28 xl:max-w-[1240px] md:py-40">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div>
              <Image src={pizza.img} alt="" width={500} height={500} />
            </div>
          </div>
          <div>
            <div className="mb-5">
              <div className="pb-2">
                <h1>{pizza.name}</h1>
                <p>{pizza.desc}</p>
              </div>
              <div>
                <h2>${pizza.price[size]}</h2>
              </div>
            </div>
            <div className="p-5 bg-white rounded-3xl mb-3">
              <label>
                <h3 className="pb-1">Choose the size</h3>
                <select
                  value={size}
                  onChange={changeSize}
                  className="outline outline-1 rounded-md py-2 px-4 bg-gray-100"
                >
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>Large</option>
                </select>
              </label>
            </div>
            <div className="p-5 bg-white rounded-3xl mb-3">
              <h3 className="pb-1">Choose additional ingredient</h3>
              <div>
                <div>
                  <input type="checkbox" id="double" name="double" />
                  <label htmlFor="double" className="ml-2">
                    Double Ingredients
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="cheese" name="cheese" />
                  <label htmlFor="cheese" className="ml-2">
                    Extra Cheese
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="spicy" name="spicy" />
                  <label htmlFor="spicy" className="ml-2">
                    Spicy Sauce
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="garlic" name="garlic" />
                  <label htmlFor="garlic" className="ml-2">
                    Garlic Sauce
                  </label>
                </div>
              </div>
            </div>
            <div className="p-5 bg-white rounded-3xl mb-5">
              <h3 className="pb-1">Choose amount</h3>
              <input
                type="number"
                defaultValue={1}
                className="outline outline-1 rounded-md p-2 bg-gray-100"
              />
            </div>
            <div className="flex justify-center pb-3">
              <button className="bg-[#D1411E] py-3 px-6 text-white rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
