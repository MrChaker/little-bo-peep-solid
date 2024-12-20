import { createEffect, onCleanup, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "../store/StoreProvider";

const VerticalChunk = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  let node_ref: HTMLDivElement | undefined;
  const { store, set_store } = useGlobalContext();

  // createEffect(() => {
  //   let toggle = () => {
  //     set_store({
  //       ...store,
  //       burger_background_on:
  //         window.innerWidth - (node_ref?.getBoundingClientRect().right || 0) >
  //         55 - 16,
  //     });
  //   };
  //   toggle();
  //   window.addEventListener("resize", toggle);
  //   window.addEventListener("scroll", toggle);

  //   onCleanup(() => {
  //     window.removeEventListener("resize", toggle);
  //     window.removeEventListener("scroll", toggle);
  //   });
  // });
  return (
    <div
      ref={node_ref}
      class={twJoin("slice", props.indent && "indent-10", props.class)}
      style={props.style}>
      <div>{props.children}</div>
    </div>
  );
};

export default VerticalChunk;
