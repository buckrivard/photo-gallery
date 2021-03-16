import { FunctionComponent } from "react";

interface IDotsProps {
  dotsCount: number;
  currentDotIx: number;
}

const Dots: FunctionComponent<IDotsProps> = ({ dotsCount, currentDotIx }) => {
  const dots = Array.from(Array(dotsCount).keys());
  return (
    <div>
      {dots.map((ix) => {
        const classes = `${currentDotIx === ix ? 'dot current' : 'dot'}`;

        return <span className={classes} key={ix}>•</span>
      })}
    </div>
  );
};

export default Dots;
