import { ParentProps } from "solid-js";

export const Math = (props: ParentProps) => {
  return (
    <div class="w-fit inline-flex items-baseline indent-0">
      {props.children}
    </div>
  );
};

export const MathBlock = (props: ParentProps) => {
  return <div class="slice">{props.children}</div>;
};
