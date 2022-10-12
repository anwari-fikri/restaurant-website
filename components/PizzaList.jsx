import React from "react";
import PizzaItem from "./PizzaItem";

const PizzaList = () => {
  return (
    <div className="w-full md:h-screen py-10">
      <div className="max-w-[80%] mx-auto flex flex-col items-center justify-center xl:max-w-[1240px] md:h-[calc(100vh-112px)]">
        <div className="pb-10">
          <h2 className="pb-2 text-justify">The best pizza in town</h2>
          <h4 className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi mi,
            feugiat euismod eros eu, porttitor condimentum libero. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
          <PizzaItem />
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
