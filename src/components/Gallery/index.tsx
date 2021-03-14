import { FunctionComponent } from "react";
import Loader from "react-loader-spinner";
import useCarousel from "../../hooks/useCarousel";
import useImages from "../../hooks/useImages";
import { IGalleryProps } from "../../types";
import ErrorModal from "../ErrorModal";
import Image from "../Image";
import SuspenseComponent from "../Suspense";

// TODO: write image component
// consider lazy loading images using provided preview urls?

const Dots = ({ dotsCount, currentDotIx }) => {
  return <div>{Array.from(Array(dotsCount).keys()).map((ix) => {
    return <span key={ix}>{ix === currentDotIx ? '*' : '•'}</span>
  })}</div>;
}

const GalleryUI = ({ currentImage, frameHeight, dots, next, prev }) => {
  return (<>
    <div className="frame" style={{minHeight: `${frameHeight}px`}}>
      <div className="image-components-wrapper">
        <Image {...currentImage} />
      </div>
    </div>
    <div className="controls">
      <button className='btn prev-btn' onClick={prev}>{'<'}</button>
      {dots}
      <button className='btn next-btn' onClick={next}>{'>'}</button>
    </div>
  </>);
};

const Gallery: FunctionComponent<IGalleryProps> = ({ dots = true }) => {
  const [loading, error, images] = useImages();
  const imagesCount = images.length;

  // calculate frame height so controls cant jump around on users
  const maxImageHeight = Math.max(...images.map((img) => img.height)) + 10;

  const [currentImageIx, next, previous] = useCarousel(0, imagesCount);
  
  const currentImage = images[currentImageIx];

  const loadingComponent = loading && <Loader type="TailSpin" />;
  const errorComponent = !!error && <ErrorModal message={error.message} />;
  const dotsComponent = dots && <Dots dotsCount={imagesCount} currentDotIx={currentImageIx} />;

  return (
    <SuspenseComponent loading={loadingComponent} error={errorComponent}>
      <GalleryUI currentImage={currentImage} frameHeight={maxImageHeight} dots={dotsComponent} next={next} prev={previous} />
    </SuspenseComponent>
  );
}

export default Gallery;
