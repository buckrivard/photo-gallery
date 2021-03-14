import { useEffect } from 'react';
import { FetchError, Images, Loading } from '../types';
import usePixabay from './usePixapay';

type RemoteImages = [Loading, FetchError, Images];


const initialImages = [];


const useImages = (preload = true): RemoteImages => {

  // hide pixabay calls behind simple useImages abstraction for ease of swapping data sources
  const [loading, error, images = initialImages] = usePixabay();

  // preloads images, as desired
  useEffect(() => {
    if (preload && images.length) {
      images.forEach((img) => {
        const imageObj = new Image();
        imageObj.src = img.url;
      });
    }
  },[preload, images]);

  return [loading, error, images];
};

export default useImages;
