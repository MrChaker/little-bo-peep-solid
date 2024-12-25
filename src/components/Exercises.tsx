import {
  Accessor,
  children,
  createSignal,
  For,
  ParentProps,
  Setter,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import Image from "./Image";
import { JSX } from "solid-js/h/jsx-runtime";
import { twJoin } from "tailwind-merge";

type ExercisesProps = ParentProps &
  SharedProps & {
    labels: string[];
  };

export const Exercises = (props: ExercisesProps) => {
  let children_list = children(() => props.children);
  console.log(children_list);
  let [selected_exo, set_selected_exo] = createSignal(0);

  return (
    <>
      <Image
        id="exo"
        src="/images/seperator.png"
        height="50px"
        class="flex items-center mt-[15px] mb-[40px]"></Image>
      <Swticher
        exercises={children_list.toArray()}
        selected_exo={selected_exo}
        set_selected_exo={set_selected_exo}
      />
      <div class="col-start-2 h-[31px]"></div>
      <For each={children_list.toArray()}>
        {(child, index) => {
          return (
            <div
              class={twJoin(
                "duration-500 ",
                selected_exo() === index() ? "opacity-100" : "opacity-0",
                selected_exo() === index() ? "h-auto" : "h-0",
                selected_exo() === index()
                  ? "overflow-visible"
                  : "overflow-hidden",
                selected_exo() === index()
                  ? "transition-none"
                  : "transition-opacity"
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
  selected_exo: Accessor<number>;
  set_selected_exo: Setter<number>;
};

const Swticher = (props: SwitcherProps) => {
  return (
    <div class="slice !text-xl gap-2 !w-fit mt-[2px]">
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={twJoin(
          "tab cursor-pointer overflow-visible",
          props.selected_exo() === 0 ? "disabled" : ""
        )}
        onClick={() => {
          if (props.selected_exo() !== 0) {
            const new_tab = props.selected_exo() - 1;
            props.set_selected_exo(new_tab);
            let stored_opened_value = false;
            const storage = window.localStorage;
            // if (storage) {
            //     const stored_solution_opened_key = `${props.chapter}_exo_${new_tab}_opened`;
            //     stored_opened_value = storage.getItem(stored_solution_opened_key) === "true";
            // }
            // navigate(
            //     `${window.location.pathname}?tab=${new_tab}&opened=${stored_opened_value}`,
            //     NAVIGATE_OPTIONS
            // );
          }
        }}>
        <path
          class="overflow-visible"
          d="M35.4941 1H6.65545C3.53203 1 1 3.53203 1 6.65545V35.4941C1 38.6175 3.53203 41.1495 6.65545 41.1495H35.4941C38.6175 41.1495 41.1495 38.6175 41.1495 35.4941V6.65545C41.1495 3.53203 38.6175 1 35.4941 1Z"
          fill-opacity={props.selected_exo() != 0 ? "0.4" : "1"}
          fill={props.selected_exo() != 0 ? "#EEFFAA" : "#EBEBEB"}
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
          props.selected_exo() === props.exercises.length - 1 ? "disabled" : ""
        )}
        onClick={() => {
          if (props.selected_exo() !== props.exercises.length - 1) {
            const new_tab = props.selected_exo() + 1;
            props.set_selected_exo(new_tab);
            // let stored_opened_value = false;
            //     const stored_solution_opened_key = `${props.chapter}_exo_${new_tab}_opened`;
            //     stored_opened_value = storage.getItem(stored_solution_opened_key) === "true";
            // navigate(
            //     `${window.location.pathname}?tab=${new_tab}&opened=${stored_opened_value}`,
            //     NAVIGATE_OPTIONS
            // );
          }
        }}>
        <path
          class="overflow-visible"
          d="M35.4941 1H6.65545C3.53203 1 1 3.53203 1 6.65545V35.4941C1 38.6175 3.53203 41.1495 6.65545 41.1495H35.4941C38.6175 41.1495 41.1495 38.6175 41.1495 35.4941V6.65545C41.1495 3.53203 38.6175 1 35.4941 1Z"
          fill={
            props.selected_exo() != props.exercises.length - 1
              ? "#EEFFAA"
              : "#EBEBEB"
          }
          fill-opacity={
            props.selected_exo() != props.exercises.length - 1 ? "0.4" : "1"
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

export const Exercise = (props: ParentProps & SharedProps) => {
  return <div>{props.children}</div>;
};
