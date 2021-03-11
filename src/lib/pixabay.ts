import { IImage, Images } from "../types";
import { LoremIpsum } from "lorem-ipsum";


export const imageFactory = (img: any): IImage => ({
  url: img.webformatURL,
  caption: new LoremIpsum().generateSentences(3),
});

export const getImages = (imgs = []): Images => imgs.map(imageFactory);