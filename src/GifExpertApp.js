import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["vegeta"]);

  //... (sirve para decirle a mi UseState que continue la cadena de Array y haga algo adicional)
  // otra opción  serpia en el setCategories( cats => [...cats, 'HunterXHunter'])
  /* const handleAdd = () => {
        setCategories(["HunterxHunter", ...categories]);
    };*/

  //EL MAP RECIBE DOS ARGUMENTOS POR DEFECTO el primero es el elemento del arreglo y el segundo es el indice

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
