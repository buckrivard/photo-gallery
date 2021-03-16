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

const GalleryUI = ({ currentImage, prevImage, nextImage, frameHeight, dots, next, prev }) => {
  return (<>
    <div className="frame" style={{minHeight: `${frameHeight}px`}}>
      <div className="slider">
        <Image {...prevImage} hideCaption={true} />
        <Image {...currentImage} />
        <Image {...nextImage} hideCaption={true} />
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
  
  const prevImage = images[currentImageIx - 1] || images[images.length - 1];
  const currentImage = images[currentImageIx];
  const nextImage = images[currentImageIx + 1] || images[0];

  const loadingComponent = loading && <Loader type="TailSpin" />;
  const errorComponent = !!error && <ErrorModal message={error.message} />;
  const dotsComponent = dots && <Dots dotsCount={imagesCount} currentDotIx={currentImageIx} />;

  return (
    <SuspenseComponent loading={loadingComponent} error={errorComponent}>
      <GalleryUI
        prevImage={prevImage}
        currentImage={currentImage} 
        nextImage={nextImage}
        frameHeight={maxImageHeight} 
        dots={dotsComponent} 
        next={next} 
        prev={previous} 
      />
    </SuspenseComponent>
  );
}

export default Gallery;
