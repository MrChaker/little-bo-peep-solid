import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";

type TableProps = ParentProps &
  SharedProps & {
    lines?: boolean;
    cols?: number[];
  };

const Table = (props: TableProps) => {
  return (
    <div class={`slice`}>
      <table class={twJoin("lines ", props.class)}>{props.children}</table>
    </div>
  );
};

export default Table;
