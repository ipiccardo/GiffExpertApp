import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);

  // EN EL MAP TAMBIEN PUEDO DESESTRUCTURAR, EN LUGAR DE PONER img.id e img.title, puede poner directamente {id, title} como argumento de la función

  // EL SPRADE OPERATOR ES OTRA MAERA DE PASAR LAS PROPS {...img}

  // SI HAY UNA SOLA CONDICIÓN SE PUEDE CAMBIAR EL ? y el : por el &&

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading</p>}

      {
        <div className="card-grid">
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </div>
      }
    </>
  );
};
