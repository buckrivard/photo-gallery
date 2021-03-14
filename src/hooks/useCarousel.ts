import { useEffect } from "react";
import { SequenceGetter } from "../types";
import useSequencer from "./useSequencer";

const useCarousel: SequenceGetter = (initialIx, maxIx) => {
  const [currentIx, next, prev] = useSequencer(initialIx, maxIx);

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

  return [currentIx, next, prev];
};

export default useCarousel;
