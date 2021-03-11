import { FunctionComponent } from "react";
import { IGalleryProps } from "../../types";


const Gallery: FunctionComponent<IGalleryProps> = ({ images }) => {
  return (
    <div>
      {images.map(image => <pre key={image.url}>{JSON.stringify(image, null, 4)}</pre>)}
    </div>
  );
}
export default Gallery;
