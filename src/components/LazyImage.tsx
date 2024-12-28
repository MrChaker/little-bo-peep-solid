import { createSignal, onCleanup, onMount, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { JSX } from "solid-js/jsx-runtime";

function LazyImage(
  props: ParentProps & JSX.ImgHTMLAttributes<HTMLImageElement>
) {
  const [isVisible, setIsVisible] = createSignal(false);
  let imgRef: HTMLImageElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (imgRef) observer.observe(imgRef);

    onCleanup(() => observer.disconnect());
  });

  return (
    <img
      ref={imgRef}
      src={isVisible() ? props.src : ""}
      alt={props.alt || ""}
      class={props.class || ""}
      style={props.style || ""}
      loading="lazy"
    />
  );
}

export default LazyImage;
