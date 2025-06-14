import { onMount, ParentProps } from "solid-js";

const SectionsBreadcrumbs = (props: ParentProps) => {
  let ref: HTMLDivElement | undefined;
  const _ = <div ref={ref}>{props.children}</div>;

  onMount(() => {
    let list = document.querySelector("#breadcrumbs-list");
    if (list && props.children) {
      ref?.childNodes.forEach((child: any) => {
        list.appendChild(child.cloneNode(true));
      });
    }
  });

  return <></>;
};

export default SectionsBreadcrumbs;
