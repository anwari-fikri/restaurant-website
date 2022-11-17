import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[1]);
  const [size, setSize] = useState(1);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const changeSize = (event) => {
    let sizeIndex = event.target.value;

    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras([...extras, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  console.log(quantity);

  return (
    <div className="pt-28 w-full">
      <div className="max-w-[85%] h-full m-auto py-28 xl:max-w-[1240px] md:py-40">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div>
              <Image src={pizza.image} alt="" width={500} height={500} />
            </div>
          </div>
          <div>
            <div className="mb-5">
              <div className="pb-2">
                <h1>{pizza.title}</h1>
                <p>{pizza.desc}</p>
              </div>
              <div className="flex">
                <h2>${price}</h2>
                <p>each</p>
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
                {pizza.extraOptions.map((option) => (
                  <div key={option._id}>
                    <input
                      type="checkbox"
                      id={option.text}
                      name={option.text}
                      onChange={(e) => handleChange(e, option)}
                    />
                    <label htmlFor={option.text} className="ml-2">
                      {option.text}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 bg-white rounded-3xl mb-5">
              <h3 className="pb-1">Choose amount</h3>
              <input
                type="number"
                defaultValue={1}
                onChange={(e) => setQuantity(e.target.value)}
                className="outline outline-1 rounded-md p-2 bg-gray-100"
                min={1}
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

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
