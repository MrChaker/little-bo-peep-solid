import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";

type TableProps = ParentProps &
  SharedProps & {
    lines?: boolean;
    cols?: number[];
  };

const Table = (props: TableProps) => {
  return <table class={twJoin("slice", props.class)}>{props.children}</table>;
};

export default Table;
