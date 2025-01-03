import {
  createEffect,
  createMemo,
  createSignal,
  mergeProps,
  onCleanup,
  ParentProps,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import useOnMobile from "../hooks/useOnMobile";
import LazyImage from "./LazyImage";
import { useGlobalContext } from "~/store/StoreProvider";

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    use_squiggle_on_mobile?: boolean;
    width?: string;

    img_position?: "top" | "bottom" | "center";
    y?: string | number;

    offset_y?: string;
    offset_x?: string;

    line?: number;

    squiggle_y?: string | number;

    children_y?: string | number;
    children_x?: string | number;

    clickable_on_desktop?: boolean;
    padding?: string | number;
    popup?: boolean;
  };

type SideImageProps = Partial<ImageProps> & {
  side: "left" | "right";
  parentStyles?: {
    [key: string]: string;
  };
};

const SideImage = (_props: SideImageProps) => {
  let container_ref: HTMLDivElement | undefined;
  let [scale, set_scale] = createSignal(1);
  let [transform_origin, set_transform_origin] = createSignal("unset");
  const { store } = useGlobalContext();
  const show_squiggles = () => store.show_squiggles;

  const props = mergeProps(
    {
      offset_x: "0px",
      offset_y: "0px",
      img_position: "center",
      padding: "",
      squiggle_y: "30%",
    },
    _props
  );

  let innerStyles = () => ({
    left: props.side === "right" ? props.offset_x : "",
    right: props.side === "left" ? `calc(-100% + ${props.offset_x})` : "",
    top: `calc(50% + ${props.offset_y.includes("%") ? "0px" : props.offset_y})`,
    transform: `translateY(calc(-50% + ${getInnerTransfrom(
      props.img_position
    )} + ${props.offset_y.includes("%") ? props.offset_y : "0px"}))`,
    padding: `${props.padding}`,
    scale: `${scale()}`,
    "transform-origin": transform_origin(),
  });

  if (typeof window !== "undefined") {
    const handle_image_scale = (e: Event) => {
      let prev_sibling = container_ref?.previousElementSibling as any;
      let scale_value = prev_sibling?.dataset.scale_side_images;
      set_scale(scale_value);
      set_transform_origin(`${(1.0 - scale_value) * 100.0}% top 0`);
    };

    window.addEventListener("image_scale", handle_image_scale);

    onCleanup(() => {
      window.removeEventListener("resize", handle_image_scale);
    });
  }

  return (
    <div
      ref={container_ref}
      style={props.parentStyles}
      class="side-img absolute -translate-x-1/2 !w-1 !p-0 !ps-0 !pe-0 h-1"
      >
      <div
        style={innerStyles()}
        class="flex shrink-0 transition-opacity duration-300 lg:transition-none lg:opacity-100  z-10 absolute w-max">
        <div
          class="absolute z-10"
          style={`top: ${props.children_y}; left: ${props.children_x}`}>
          {props.children}
        </div>

        <LazyImage
          class={twJoin(props.class, !props.width && "max-w-max")}
          style={props.style}
          src={props.src}
        />
      </div>

      {show_squiggles() && props.use_squiggle_on_mobile && (
        <div
          class="squiggle block sm:hidden absolute"
          style={{
            left: props.side === "right" ? "50%" : "0",
            right: props.side === "right" ? "0" : "50%",
            top: `${props.squiggle_y}`,
            transform: "translate(-50%, -50%)",
            padding: "2.6rem",
          }}>
          <img
            loading="lazy"
            src="/images/squiggle.png"
            class="h-11 min-w-[45px]"
          />
        </div>
      )}
    </div>
  );
};

export const ImageRight = ({
  line = 0,
  y = "center",
  ...props
}: ImageProps) => {
  const { on_mobile } = useOnMobile();

  let line_height = () => (on_mobile() ? 28.0 : 32.5);
  let parent_styles = () => ({
    left: "calc(100% - 0.5rem)",
    top: getTopPos(y, line, line_height()),
  });

  return (
    <SideImage
      side="right"
      parentStyles={parent_styles()}
      {...props}></SideImage>
  );
};

export const ImageLeft = ({ line = 0, y = "center", ...props }: ImageProps) => {
  const { on_mobile } = useOnMobile();

  let line_height = () => (on_mobile() ? 28.0 : 32.5);
  let parent_styles = () => ({
    left: "0.5rem",
    top: getTopPos(y, line, line_height()),
  });

  return (
    <SideImage
      side="left"
      parentStyles={parent_styles()}
      {...props}></SideImage>
  );
};

const getTopPos = (y: string | number, line: number, line_height: number) => {
  let top = "";
  if (line > 0) {
    top = (line - 0.5) * line_height + "px";
  } else if (line < 0.0) {
    top = `calc(100% + ${(0.5 + line) * line_height}px)`;
  } else {
    let map = {
      bottom: "100%",
      top: "0",
      center: "50%",
    };
    top = typeof y === "string" ? map[y as keyof typeof map] : `${y}`;
  }
  return top;
};

const getInnerTransfrom = (img_position: string) => {
  let map = {
    bottom: "-50%",
    top: "50%",
  };

  return map[img_position as keyof typeof map] || "0%";
};
