import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    cloud_image?: boolean;
    width?: string;
    height?: string;
  };

const Image = (props: ImageProps) => {
  return (
    <div class="w-max fill-available scrollbar-hidden transition-all m-auto relative">
      <div
        style={{
          height: props.height,
          width: props.width,
        }}
        class="left-1/2 -translate-x-1/2 relative">
        <img
          class={twJoin(
            "slice scrollbar-hidden sm:overflow-x-visible m-auto transition-all w-max",
            props.class
          )}
          style={props.style}
          src={props.src}
        />
      </div>
    </div>
  );
};

export default Image;
