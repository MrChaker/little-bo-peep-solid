import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";

const VerticalChunk = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  return (
    <div
      class={twJoin("slice", props.indent && "indent-10", props.class)}
      style={props.style}>
      <div>{props.children}</div>
    </div>
  );
};

export default VerticalChunk;
