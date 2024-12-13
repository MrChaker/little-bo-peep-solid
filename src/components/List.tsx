import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";

export const List = (props: ParentProps & SharedProps) => {
  return (
    <div
      class={twJoin("slice px-4 list-decimal", props.class)}
      style={props.style}>
      <ol>{props.children}</ol>
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
