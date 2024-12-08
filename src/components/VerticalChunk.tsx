import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

const VerticalChunk = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  return (
    <div
      class={`slice ${props.indent && "indent-10"} ${props.class}`}
      style={props.style}>
      <div>{props.children}</div>
    </div>
  );
};

export default VerticalChunk;
