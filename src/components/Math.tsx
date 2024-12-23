import { createEffect, ParentProps } from "solid-js";

export const Math = (props: ParentProps) => {
  let math: HTMLDivElement | undefined;

  createEffect(() => {
    (window as any).MathJax.typesetPromise([math]);
  });

  return (
    <div ref={math} class="math w-fit inline-flex items-baseline indent-0">
      {props.children}
    </div>
  );
};

export const MathBlock = (props: ParentProps) => {
  let math: HTMLDivElement | undefined;

  createEffect(() => {
    (window as any).MathJax.typesetPromise([math]);
  });

  return (
    <div ref={math} class="slice math">
      {props.children}
    </div>
  );
};
