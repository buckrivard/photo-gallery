import { useEffect } from "react";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import useSequencer from "./useSequencer";

type Carousel = (initialIx: number, maxIx: number) => [number, React.Dispatch<React.SetStateAction<number>>, React.Dispatch<React.SetStateAction<number>>, SwipeableHandlers]

const useCarousel: Carousel = (initialIx, maxIx) => {
  const [currentIx, next, prev] = useSequencer(initialIx, maxIx);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: prev,
    onSwipedRight: next,
  });

  useEffect(() => {
    const listener = ev => {
      if (ev.key === 'ArrowLeft') {
        prev();
      } else if (ev.key === 'ArrowRight') {
        next();
      }
    }
    document.addEventListener('keyup', listener);

    return () => {
      return document.removeEventListener('keyup', listener);
    };
  // ignore exhaustive-deps to declaratively update func definitions
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIx]);

  return [currentIx, next, prev, swipeHandlers];
};

export default useCarousel;
