import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import LazyImage from "./LazyImage";

type InlineImageProps = SharedProps & {
  src: string;
  width?: string;
  height?: string;
  y_anchor?: string;
  margin_left?: string;
  margin_right?: string;
  space_right?: boolean;
  space_left?: boolean;
};

const InlineImage = (props: InlineImageProps) => {
  return (
    <>
      {props.space_left && ` `}
      <LazyImage
        loading="lazy"
        class={`bg-cover inline-block relative ${props.class}`}
        style={{
          width: props.width,
          height: props.height,
          "margin-left": props.margin_left,
          "margin-right": props.margin_right,
          top: props.y_anchor,
        }}
        src={props.src}></LazyImage>
      {props.space_right && ` `}
    </>
  );
};

export default InlineImage;
