import { FetchError, Images, Loading } from '../types';
import usePixabay from './usePixapay';

type RemoteImages = [Loading, FetchError, Images];


const initialImages = [];


const useImages = (): RemoteImages => {

  // hide pixabay calls behind simple useImages abstraction for ease of swapping data sources
  const [loading, error, images = initialImages] = usePixabay();

  return [loading, error, images];
};

export default useImages;
