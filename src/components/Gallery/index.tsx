import { FunctionComponent } from "react";
import Loader from "react-loader-spinner";
import useCarousel from "../../hooks/useCarousel";
import useImages from "../../hooks/useImages";
import { IGalleryProps } from "../../types";
import ErrorModal from "../ErrorModal";
import Image from "../Image";
import SuspenseComponent from "../Suspense";
import {useSwipeable} from "react-swipeable";
import Dots from "../Dots";
import Button from "../Button";

const GalleryUI = ({ images, frameHeight, dots, next, prev, swipeHandlers = {} }) => {
  const [prevImage, currentImage, nextImage] = images;

  const frame = (
    <div className="frame" style={{minHeight: `${frameHeight}px`}} {...swipeHandlers}>
      <div className="slider">
        <Image {...prevImage} hideCaption={true} clickAction={prev} />
        <Image {...currentImage} />
        <Image {...nextImage} hideCaption={true} clickAction={next} />
      </div>
    </div>
  );

  const controls = (
    <div className="controls">
      <Button classes="prev-btn" clickAction={prev}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </Button>
      {dots}
      <Button classes='next-btn' clickAction={next}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Button>
    </div>
  );

  return (
    <>
      {frame}
      {controls}
    </>
  );
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: previous,
    onSwipedRight: next,
  });

  return (
    <SuspenseComponent loading={loadingComponent} error={errorComponent}>
      <GalleryUI
        images={[
          prevImage,
          currentImage,
          nextImage,
        ]}
        frameHeight={maxImageHeight} 
        dots={dotsComponent} 
        next={next} 
        prev={previous}
        swipeHandlers={swipeHandlers}
      />
    </SuspenseComponent>
  );
}

export default Gallery;
