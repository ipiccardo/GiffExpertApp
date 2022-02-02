import React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import getGifs from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //EL USEEFFECT SIRVE PARA QUE LA INSTRUCCIÓN SE EJECUTE cuando el componente es renderizado por primera vez.
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; // { data: [], loading:true }
};
