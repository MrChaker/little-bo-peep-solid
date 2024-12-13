import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

export const CenterDisplay = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  return (
    <div
      class={`slice text-center block ${props.indent && "indent-10"} ${
        props.class
      }`}
      style={props.style}>
      <div>{props.children}</div>
    </div>
  );
};

export const CentralItalicDisplay = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  return (
    <div
      class={`slice font-baskerville-italic text-center block ${
        props.indent && "indent-10"
      } ${props.class}`}
      style={props.style}>
      <div>{props.children}</div>
    </div>
  );
};
