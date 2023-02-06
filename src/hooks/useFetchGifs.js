import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";


export const useFetchGifs = ( category ) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {

    const newImages = await getGifs( category );
    setImages( newImages ); 
    setIsLoading(false);
  
  }

  useEffect( () => { 
    getImages();
  }, []);

   
  //retornamos un objeto que es igual a images:images y isLoading:isLoading
  return {
    images,
    isLoading
  }
}

