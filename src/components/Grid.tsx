import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

type GridProps = ParentProps &
  SharedProps & {
    cols?: number;
    sm_cols?: number;
    center_on_overflow?: boolean;
    sm_cutoff?: number;
    place_items?: "end" | "start" | "center";
  };

const Grid = (props: GridProps) => {
  return (
    <div class={`slice grid ${props.class}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Grid;
