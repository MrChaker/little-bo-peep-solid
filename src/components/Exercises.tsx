import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";

type ExercisesProps = ParentProps &
  SharedProps & {
    labels: string[];
  };

export const Exercises = (props: ExercisesProps) => {
  return <>{props.children}</>;
};

export const Exercise = (props: ParentProps & SharedProps) => {
  return <>{props.children}</>;
};
