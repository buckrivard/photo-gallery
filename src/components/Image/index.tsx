import { FunctionComponent } from "react";
import { IImage } from "../../types";

interface IImageProps extends IImage {
  hideCaption: boolean;
  [key: string]: any;
}

const Image: FunctionComponent<IImageProps> = ({ caption, url, hideCaption }) => {
  return <div className="image-container">
    <img className="image" src={url} />
    {!hideCaption && <div className="caption">{caption}</div>}
  </div>
};

export default Image;