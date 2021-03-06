import { FunctionComponent } from "react";
import { IImage } from "../../types";

interface IImageProps extends IImage {
  hideCaption: boolean;
  clickAction: () => void;
}

// allow to configurably hide caption -- useful for gallery prev and next images
const Image: FunctionComponent<IImageProps> = ({ caption, url, hideCaption, clickAction }) => {
  return (
    <div className="image-container" onClick={clickAction}>
      <img className="image" src={url} alt={caption} />
      {!hideCaption && <div className="caption">{caption}</div>}
    </div>
  );
};

export default Image;