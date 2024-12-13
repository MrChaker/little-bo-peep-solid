import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

type SolutionProps = ParentProps &
  SharedProps & {
    solution_number: number;
  };

const Solution = (props: SolutionProps) => {
  return <>{props.children}</>;
};

export default Solution;
