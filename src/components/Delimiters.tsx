import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";

export const CenterDisplay = (
  props: ParentProps & SharedProps & { indent?: boolean },
) => {
  let {store} = useGlobalContext();
  return (
    <div
      class={twJoin(props.class, "slice", "text-center", "block")}
      classList={{"indent-10": props.indent, "bg-[#ebe3a0b0]": store.show_areas}}
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
