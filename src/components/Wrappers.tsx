import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

export const Section = (props: ParentProps) => {
  return <section>{props.children}</section>;
};

export const Example = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const NoBreak = (props: ParentProps) => {
  return <span class="nobreak">{props.children}</span>;
};

export const CustomBlock = (props: ParentProps & SharedProps) => {
  return (
    <span class={props.class} style={props.style}>
      {props.children}
    </span>
  );
};
