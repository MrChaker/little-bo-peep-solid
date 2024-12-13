import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

type SolutionProps = ParentProps &
  SharedProps & {
    solution_number: number;
  };

export const SectionDivider = () => {
  return <img src="/images/section-divider.svg" />;
};

export const StarDivider = () => {
  return <p class="text-center">* * * *</p>;
};
