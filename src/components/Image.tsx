import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    cloud_image?: boolean;
    width?: string;
    height?: string;
  };

const Image = (props: ImageProps) => {
  return (
    <img
      class={`slice ${props.class}`}
      width={props.width}
      height={props.height}
      style={props.style}
      src={props.src}>
      Image
    </img>
  );
};

export default Image;
