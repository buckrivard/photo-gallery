import { FunctionComponent } from "react";

interface IDotsProps {
  dotsCount: number;
  currentDotIx: number;
}

const Dots: FunctionComponent<IDotsProps> = ({ dotsCount, currentDotIx }) => {
  return <div>{Array.from(Array(dotsCount).keys()).map((ix) => {
    const classes = `${currentDotIx === ix ? 'dot current' : 'dot'}`;

    return <span className={classes} key={ix}>•</span>
  })}</div>;
};

export default Dots;
