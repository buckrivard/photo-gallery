import { IImage, Images } from "../types";
import { LoremIpsum } from "lorem-ipsum";


// create images specific to the pixabay data source, conforming to public image interface
export const imageFactory = (img: any): IImage => ({
  url: img.webformatURL,
  caption: new LoremIpsum().generateSentences(2),
  meta: {
    height: img.webformatHeight,
  }
});

export const getImages = (imgs = []): Images => imgs.map(imageFactory);