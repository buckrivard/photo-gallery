

export interface IImage {
  url: string;
  caption: string;
  height: number;
}
export type Loading = boolean;
export type FetchError = {
  original: Error,
  message: string,
} | null;

export type Images = IImage[];

export interface IGalleryProps {
  dots: boolean | JSX.Element;
}
