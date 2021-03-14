import { useState } from "react";
import { SequenceGetter } from "../types";

const useSequencer: SequenceGetter = (initialIx: number, maxIx: number) => {
  const [currentImageIx, setCurrentImageIx] = useState(initialIx);

  const next = () => {
    setCurrentImageIx((curr) => {
      return (curr + 1) % maxIx;
    });
  }

  const previous = () => {
    setCurrentImageIx((curr) => (curr - 1 + maxIx) % maxIx);
  };

  return [currentImageIx, next, previous];
}

export default useSequencer;
