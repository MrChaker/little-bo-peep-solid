import { createEffect, onCleanup, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "../store/StoreProvider";

const VerticalChunk = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  let node_ref: HTMLDivElement | undefined;
  const { store,  } = useGlobalContext();

  return (
    <p
      ref={node_ref}
      class={twJoin(
        "slice", 
        props.indent && "indent-10",
        props.class,
        store.show_areas && "test-bg"
      )}
      style={props.style}
    >
      {props.children}
    </p>
  );
};

export default VerticalChunk;
