import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    use_squiggle_on_mobile?: boolean;
    width?: string;

    img_position?: "top" | "bottom" | "center";
    y?: string | number;

    offset_y?: string | number;
    offset_x?: string | number;

    line?: number;

    squiggle_y?: string | number;

    children_y?: string | number;
    children_x?: string | number;

    clickable_on_desktop?: boolean;
    padding?: string | number;
    popup?: boolean;
  };

type SideImageProps = ImageProps & {
  side: "left" | "right";
};

const SideImage = (props: SideImageProps) => {
  return (
    <div class="side-img">
      <img class={`${props.class}`} style={props.style} src={props.src} />
      {props.children}
    </div>
  );
};

export const ImageRight = (props: ImageProps) => {
  return <SideImage side="right" {...props}></SideImage>;
};

export const ImageLeft = (props: ImageProps) => {
  return <SideImage side="left" {...props}></SideImage>;
};
