import { ParentProps } from "solid-js";

export const Section = (
  props: ParentProps & { divider?: boolean; id?: string },
) => {
  return <section id={`${props.id}`}>{props.children}</section>;
};

export const Example = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const Note = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const SolutionNote = (props: ParentProps & { id?: string }) => {
  return <div id={props.id}>{props.children}</div>;
};

export const NoBreak = (props: ParentProps) => {
  return <span class="nobreak">{props.children}</span>;
};

export const Pause = () => {
  return <div class="spacer-150" />;
};
