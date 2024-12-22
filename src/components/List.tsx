import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";

export const List = (props: ParentProps & SharedProps) => {
  return (
    <div class={twJoin("slice", props.class)} style={props.style}>
      <ol class="list-decimal px-4 ml-6">{props.children}</ol>
    </div>
  );
};

export const Item = (props: ParentProps & SharedProps) => {
  return (
    <li class={props.class} style={props.style}>
      {props.children}
    </li>
  );
};
