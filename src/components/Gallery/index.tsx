import { FunctionComponent, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
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

const GalleryUI = ({ currentImage, frameHeight, dots }) => {
  return (<>
    <div className="frame" style={{minHeight: `${frameHeight}px`}}>
      <Image {...currentImage} />
    </div>
    {dots}
  </>);
};

const Gallery: FunctionComponent<IGalleryProps> = ({ dots = true }) => {
  const [loading, error, images] = useImages();

  // calculate frame height so controls cant jump around on users
  const maxImageHeight = Math.max(...images.map((img) => img.height)) + 10;

  const [currentImageIx, setCurrentImageIx] = useState(0);
  const currentImage = images[currentImageIx];
  const imagesCount = images.length;
  
  const showNextImage = () => {
    setCurrentImageIx((curr) => {
      return (curr + 1) % imagesCount;
    });
  }

  const showPrevImage = () => {
    setCurrentImageIx((curr) => (curr - 1 + imagesCount) % imagesCount);
  };

  useEffect(() => {
    const listener = ev => {
      if (ev.key === 'ArrowLeft') {
        showPrevImage();
      } else if (ev.key === 'ArrowRight') {
        showNextImage();
      }
    }
    document.addEventListener('keyup', listener);

    return () => {
      return document.removeEventListener('keyup', listener);
    };
  // ignore exhaustive-deps to declaratively update func definitions
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesCount]);

  const loadingComponent = loading && <Loader type="TailSpin" />;
  const errorComponent = !!error && <ErrorModal message={error.message} />;
  const dotsComponent = dots && <Dots dotsCount={imagesCount} currentDotIx={currentImageIx} />;

  return (
    <SuspenseComponent loading={loadingComponent} error={errorComponent}>
      <GalleryUI currentImage={currentImage} frameHeight={maxImageHeight} dots={dotsComponent} />
    </SuspenseComponent>
  );
}

export default Gallery;
