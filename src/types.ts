

export interface IImage {
  url: string;
  caption: string;
  meta: {
    height: number;
  };
}
export type Loading = boolean;
export type FetchError = {
  original: Error,
  message: string,
} | null;

export type Images = IImage[];

export type Sequencer = [number, VoidFunction, VoidFunction];

export type SequenceGetter = (startIx: number, endEx: number) => Sequencer;

export interface IGalleryProps {
  dots: boolean | JSX.Element;
}
