import { FunctionComponent } from "react";
import { IImage } from "../../types";

interface IImageProps extends IImage {
}

const Image: FunctionComponent<IImageProps> = ({ caption, url }) => {
  return <div className="image-container">
    <img className="image" src={url} />
    <div className="caption">{caption}</div>
  </div>
};

export default Image;