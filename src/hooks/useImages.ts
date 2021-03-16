import { useEffect } from 'react';
import { FetchError, Images, Loading } from '../types';
import usePixabay from './usePixapay';

type RemoteImages = [Loading, FetchError, Images];


const initialImages = [];


// hide image API calls behind simple useImages abstraction for ease of swapping / configuring data sources
const useImages = (preload = true): RemoteImages => {

  const [loading, error, images = initialImages] = usePixabay();

  // neat little trick to preload images, as desired
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
