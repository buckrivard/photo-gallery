import { getImages } from '../lib/pixabay';
import { FetchError, Images, Loading } from '../types';
import useFetch from './useFetch';

type RemoteImages = [Loading, FetchError, Images];

interface IImagesResponse {
  hits: [];
}

const initialImages = [];

const imagesURL = `https://pixabay.com/api/?key=20628720-47ffd2b9e1ea0c87ba90e8535`;

const usePixabay = (): RemoteImages => {

  const [loading, error, images = { hits: [] }] = useFetch<IImagesResponse>(imagesURL);

  const finalImages = getImages(images.hits)|| initialImages;

  return [loading, error, finalImages];
};

export default usePixabay;
