

export interface IImage {
  url: string;
  caption: string;
}
export type Loading = boolean;
export type FetchError = {
  original: Error,
  message: string,
} | null;

export type Images = IImage[];

export interface IGalleryProps {
  images: Images;
}
