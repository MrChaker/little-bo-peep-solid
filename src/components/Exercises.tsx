import {
  Accessor,
  children,
  createEffect,
  createMemo,
  createSignal,
  For,
  ParentProps,
  Setter,
  useContext,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import Image from "./Image";
import { JSX } from "solid-js/h/jsx-runtime";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";
import { GREEN_DIV_HEIGHT } from "~/constants";
import { getSelectedExercise } from "~/store";
import { useLocation, useSearchParams } from "@solidjs/router";
import { useLocalStorage, useToggle } from "solidjs-hooks";
import useExercises from "~/hooks/useExercises";

type ExercisesProps = ParentProps &
  SharedProps & {
    labels: string[];
  };

export const Exercises = (props: ExercisesProps) => {
  let children_list = children(() => props.children);
  useExercises(children_list.toArray().length);
  let { store, set_store } = useGlobalContext();
  let selected_exo = () => store.selected_exo;
  set_store(
    "transition_duration",
    Array.from({ length: children_list.toArray().length }).map(() => 1000)
  );

  return (
    <>
      <Image
        id="exo"
        src="/images/seperator.png"
        height="50px"
        class="mt-[15px] mb-[40px]"></Image>
      <Switcher exercises={children_list.toArray()} />
      <div class="h-[31px]"></div>
      <For each={children_list.toArray()}>
        {(child, index) => {
          return (
            <div
              class={twJoin(
                "duration-500 ",
                selected_exo() == index()
                  ? "opacity-100 h-auto overflow-visible transition-none"
                  : "opacity-0 h-0 overflow-hidden transition-opacity"
              )}>
              {child}
            </div>
          );
        }}
      </For>
    </>
  );
};

type SwitcherProps = {
  exercises: JSX.Element[];
  // selected_exo: Accessor<number>;
  // set_selected_exo: Setter<number>;
};

const Switcher = (props: SwitcherProps) => {
  let { store, set_store } = useGlobalContext();
  let selected_exo = () => store.selected_exo;

  return (
    <div class="flex justify-center !text-xl gap-2 mt-[2px]">
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={twJoin(
          "tab cursor-pointer overflow-visible",
          selected_exo() === 0 ? "disabled" : ""
        )}
        onClick={() => {
          if (selected_exo() !== 0) {
            const new_selected = selected_exo() - 1;
            set_store("selected_exo", new_selected);
          }
        }}>
        <path
          class="overflow-visible"
          d="M35.4941 1H6.65545C3.53203 1 1 3.53203 1 6.65545V35.4941C1 38.6175 3.53203 41.1495 6.65545 41.1495H35.4941C38.6175 41.1495 41.1495 38.6175 41.1495 35.4941V6.65545C41.1495 3.53203 38.6175 1 35.4941 1Z"
          fill-opacity={selected_exo() != 0 ? "0.4" : "1"}
          fill={selected_exo() != 0 ? "#EEFFAA" : "#EBEBEB"}
          stroke="black"
          stroke-width="1.5"
          stroke-miterlimit="2"></path>
        <path
          d="M8 21L18 26.7735V15.2265L8 21ZM17 22H34V20H17V22Z"
          fill="black"></path>
      </svg>
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={twJoin(
          "tab cursor-pointer overflow-visible",
          selected_exo() === props.exercises.length - 1 ? "disabled" : ""
        )}
        onClick={() => {
          if (selected_exo() !== props.exercises.length - 1) {
            const new_selected = selected_exo() + 1;
            set_store("selected_exo", new_selected);
          }
        }}>
        <path
          class="overflow-visible"
          d="M35.4941 1H6.65545C3.53203 1 1 3.53203 1 6.65545V35.4941C1 38.6175 3.53203 41.1495 6.65545 41.1495H35.4941C38.6175 41.1495 41.1495 38.6175 41.1495 35.4941V6.65545C41.1495 3.53203 38.6175 1 35.4941 1Z"
          fill={
            selected_exo() != props.exercises.length - 1 ? "#EEFFAA" : "#EBEBEB"
          }
          fill-opacity={
            selected_exo() != props.exercises.length - 1 ? "0.4" : "1"
          }
          stroke="black"
          stroke-width="1.5"
          stroke-miterlimit="2"></path>
        <path
          d="M8 21L18 26.7735V15.2265L8 21ZM17 22H34V20H17V22Z"
          fill="black"
          style="transform: rotate(180deg) translateY(1px); transform-origin: center"></path>
      </svg>
    </div>
  );
};

export const Exercise = (
  props: ParentProps &
    SharedProps & {
      exercise_number: number;
    }
) => {
  let { store, set_store } = useGlobalContext();
  const solution_open = () => store.solutions_open[props.exercise_number];

  let transition_duration = () => store.transition_duration;

  let [bot_div, set_bot_div] = createSignal(false);

  // toggle bot div
  createEffect(() => {
    if (solution_open()) {
      setTimeout(() => {
        set_bot_div(false);
      }, transition_duration()[props.exercise_number]);
    } else {
      setTimeout(() => {
        set_bot_div(true);
      }, transition_duration()[props.exercise_number]);
    }
  });

  return (
    <div>
      {props.children}
      <div
        class="slice transition-all col-start-2"
        style={{
          height: `${!solution_open() || bot_div() ? GREEN_DIV_HEIGHT : 0}px`,
          "background-color": store.show_areas ? "#00440050" : "",
          "transition-duration": `${
            transition_duration()[props.exercise_number]
          }ms`,
        }}></div>
    </div>
  );
};
