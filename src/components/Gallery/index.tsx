import { FunctionComponent } from "react";
import Loader from "react-loader-spinner";
import useImages from "../../hooks/useImages";
import { IGalleryProps } from "../../types";
import ErrorModal from "../ErrorModal";
import SuspenseComponent from "../Suspense";

const GalleryUI: FunctionComponent<IGalleryProps> = ({ images }) => {
  return (
    <div>
      {images.map(image => <img key={image.url} src={image.url} />)}
    </div>
  );
};

const Gallery = () => {
  const [loading, error, images] = useImages();

  const loadingComponent = loading && <Loader type="Grid" />;
  const errorComponent = !!error && <ErrorModal message={error.message} />;

  return (
    <SuspenseComponent loading={loadingComponent} error={errorComponent}>
      <GalleryUI images={images} />
    </SuspenseComponent>
  );
}

export default Gallery;
