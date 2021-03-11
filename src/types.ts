

interface IImage {
  url: string;
  caption: string;
}

type Images = IImage[];

export interface IGalleryProps {
  images: Images;
}
