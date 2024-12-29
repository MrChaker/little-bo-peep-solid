import {
  FlowProps,
  mergeProps,
  ParentProps,
  children,
  For,
  createEffect,
  onCleanup,
  createSignal,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { TEXT_X_PADDING } from "~/constants";

type GridProps = ParentProps &
  SharedProps & {
    cols?: number;
    sm_cols?: number;
    center_on_overflow?: boolean;
    sm_cutoff?: number;
    place_items?: "end" | "start" | "center";
    margin_top?: number;
    margin_bottom?: number;
    gap?: string;
    column_first?: boolean;
    with_padding?: boolean;
  };

const Grid = (_props: GridProps) => {
  const props = mergeProps(
    {
      margin_top: 0,
      margin_bottom: 0,
      cols: 0,
      sm_cols: -1,
      sm_cutoff: 520,
      class: "",
      place_items: "center",
      gap: "1rem",
      with_padding: true,
    },
    _props
  );

  const children_list = children(() => props.children);

  const [smActivated, setSmActivated] = createSignal(false);

  const updateSmActivated = () => {
    setSmActivated(window.innerWidth <= props.sm_cutoff);
  };

  createEffect(() => {
    updateSmActivated();
    window.addEventListener("resize", updateSmActivated);
    onCleanup(() => window.removeEventListener("resize", updateSmActivated));
  });

  let parentSpan: HTMLDivElement | undefined;

  createEffect(() => {
    smActivated(); // re-render on change
    const children = parentSpan?.children || [];
    for (let i = 0; i < children.length; i++) {
      let position = i;
      if (props.column_first && !smActivated()) {
        const rows = Math.ceil(children.length / props.cols);
        const elementRow = Math.ceil((i + 1) / props.cols);
        const elementCol = (i % props.cols) + 1;
        const precedingElementsInPrevCols = (elementCol - 1) * rows;
        const precedingElementsInCurrCol = elementRow - 1;
        position = precedingElementsInPrevCols + precedingElementsInCurrCol;
      }
      children[i].setAttribute("style", `order: ${position}`);
    }
  });

  return (
    <div
      class={`slice ${props.class}`}
      style={{
        "margin-top": `${props.margin_top}px`,
        "margin-bottom": `${props.margin_bottom}px`,
        "padding-inline": props.with_padding ? `${TEXT_X_PADDING}px` : "0",
      }}>
      <div
        ref={parentSpan}
        class={`!grid list-none`}
        style={{
          animation: "appear 2s ease 0s 1 normal forwards",
          "place-items": props.place_items,
          gap: props.gap,
          "grid-template-columns": `repeat(${props.cols}, 1fr)`,
        }}>
        <For each={children_list.toArray()}>
          {(child, index) => {
            if (
              props.center_on_overflow &&
              children.length % props.sm_cols === 1 &&
              index() === children.length - 1
            ) {
              return (
                <span class="col-span-full sm:col-span-1 w-max">{child}</span>
              );
            }
            return <span class="w-max">{child}</span>;
          }}
        </For>
      </div>
    </div>
  );
};

export default Grid;
