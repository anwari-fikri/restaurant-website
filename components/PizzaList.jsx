import React from "react";
import PizzaItem from "./PizzaItem";

const PizzaList = () => {
  return (
    <div className="w-full md:h-screen p-2 py-16">
      <div className="max-w-[80%] mx-auto flex flex-col justify-center h-full xl:max-w-[1240px]">
        <div className="pb-12">
          <h1 className="pb-3 text-justify">The best pizza in town</h1>
          <h4 className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi mi,
            feugiat euismod eros eu, porttitor condimentum libero. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
