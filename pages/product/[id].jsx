import Image from "next/image";
import React, { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(1);

  const pizza = {
    id: 1,
    img: "/assets/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <div>
      <div>
        <div>
          <Image src={pizza.img} alt="" width={500} height={500} />
        </div>
      </div>
      <div>
        <div>
          <h1>{pizza.name}</h1>
          <span>${pizza.price[size]}</span>
          <p>{pizza.desc}</p>
        </div>
        <div>
          <h3>Choose Size</h3>
          <div onClick={() => setSize(0)}>
            <p className="active:underline">Small</p>
          </div>
          <div onClick={() => setSize(1)}>
            <p>Medium</p>
          </div>
          <div onClick={() => setSize(2)}>
            <p>Large</p>
          </div>
        </div>
        <div>
          <h3>Choose additional ingredient</h3>
          <div>
            <div>
              <input type="checkbox" id="double" name="double" />
              <label htmlFor="double">Double Ingredients</label>
            </div>
            <div>
              <input type="checkbox" id="cheese" name="cheese" />
              <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div>
              <input type="checkbox" id="spicy" name="spicy" />
              <label htmlFor="spicy">Spicy Sauce</label>
            </div>
            <div>
              <input type="checkbox" id="garlic" name="garlic" />
              <label htmlFor="garlic">Garlic Sauce</label>
            </div>
          </div>
        </div>
        <div>
          <input type="number" defaultValue={1} />
          <button>Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
