import {
  Accessor,
  createEffect,
  createSignal,
  ParentProps,
  onCleanup,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { GREEN_DIV_HEIGHT, TEXT_X_PADDING } from "~/constants";
import { twJoin } from "tailwind-merge";
import Spacer from "./Spacer";
import { useGlobalContext } from "~/store/StoreProvider";

type SolutionProps = ParentProps &
  SharedProps & {
    solution_number: number;
  };

const turnOffScrollHistory = () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}

const turnOnScrollHistory = () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}

const Solution = (props: SolutionProps) => {
  let button_ref: HTMLDivElement | undefined;
  let ref: HTMLDivElement | undefined;
  let { store, set_store } = useGlobalContext();

  const solution_open = () => store.solutions_open[props.solution_number];
  let transition_duration = () => store.transition_duration;

  let [content_height, set_content_height] = createSignal(0);
  let [bot_div, set_bot_div] = createSignal(false);
  let [solution_fully_opened, set_solution_fully_opened] = createSignal(true); // set true to get ref.height
  let [handle, set_handle] = createSignal<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleResize = () => {
    set_content_height(ref?.clientHeight || 0);
  };

  createEffect(() => {
    if (solution_open()) {
      set_content_height(ref?.offsetHeight || 0);
      window.addEventListener("scroll", handleResize);
      setTimeout(
        () => { set_bot_div(false); },
        transition_duration()[props.solution_number]
      );
    } else {
      window.removeEventListener("scroll", handleResize);
      set_content_height(0);
      setTimeout(
        () => { set_bot_div(true); }, 
        transition_duration()[props.solution_number]
      );
    }

    onCleanup(() => window.removeEventListener("scroll", handleResize));
  });

  // set transition duration
  createEffect(() => {
    if (ref?.offsetHeight)
      set_store("transition_duration", (prev) =>
        prev.map((val, i) =>
          i === props.solution_number ? Math.min(ref?.offsetHeight, 1000) : val
        )
      );
  });

  // solution fully opened
  createEffect(() => {
    if (solution_open()) {
      let timeout_handle = setTimeout(
        () => { set_solution_fully_opened(true); },
        transition_duration()[props.solution_number]
      );
      set_handle(timeout_handle);
    } else {
      if (handle()) {
        clearTimeout(handle()!);
      }
      set_solution_fully_opened(false);
      setTimeout(
        () => { set_solution_fully_opened(false); },
        transition_duration()[props.solution_number]
      );
    }
  });

  return (
    <>
      <div
        ref={button_ref}
        class="relative"
        style={`padding-inline: ${TEXT_X_PADDING}`}
      >
        <SolutionSVG
          solution_open={solution_open}
          onClick={
            () => {
              let element_pos =
                window.innerHeight - (ref?.getBoundingClientRect()?.bottom || 0);
              let should_scroll_to_button_first =
                element_pos > GREEN_DIV_HEIGHT + 40 + 56;
              if (solution_open() && should_scroll_to_button_first) {
                document?.getElementById("exo")?.scrollIntoView();
              }
              set_store(
                "solutions_open",
                (prev) => {
                  prev[props.solution_number] = !solution_open();
                  return [...prev];
                }
              );
            }
          }
        />
      </div>
      <div
        class={twJoin(
          "solution relative transition-all",
          !solution_open() && "pointer-events-none",
          !solution_fully_opened() && "overflow-y-clip"
        )}
        style={{
          height: `${content_height()}px`,
          "transition-duration": `${
            transition_duration()[props.solution_number]
          }ms`,
          "transition-property": "height",
        }}
      >
        <div
          ref={ref}
          class={twJoin(
            "transition-transform",
            !solution_open() && "-translate-y-full"
          )}
          style={{
            "transition-duration": `${
              transition_duration()[props.solution_number]
            }ms`,
          }}
        >
          {props.children}
          <div
            style={{
              "transition-duration": `${
                transition_duration()[props.solution_number]
              }ms`,
            }}
            class={twJoin(
              "backup-arrow mt-[32px] flex items-center justify-center transition-opacity",
              !(solution_open() && solution_fully_opened()) && "opacity-0",
              bot_div() && "delay-[2s]"
            )}
          >
            <BackupArrow />
          </div>
        </div>
      </div>
    </>
  );
};

export const BackupArrow = () => {
  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="tab cursor-pointer overflow-visible z-10"
      onClick={() => {
        document?.getElementById("exo")?.scrollIntoView();
      }}
    >
      <path
        class="overflow-visible"
        d="M35.4941 1H6.65545C3.53203 1 1 3.53203 1 6.65545V35.4941C1 38.6175 3.53203 41.1495 6.65545 41.1495H35.4941C38.6175 41.1495 41.1495 38.6175 41.1495 35.4941V6.65545C41.1495 3.53203 38.6175 1 35.4941 1Z"
        fill="#EEFFAA"
        fill-opacity="0.4"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="2"
      ></path>
      <path
        d="M20 32C20 32.5523 20.4477 33 21 33C21.5523 33 22 32.5523 22 32H20ZM21 11L15.2265 21H26.7735L21 11ZM22 32L22 20H20L20 32H22Z"
        fill="black"
      ></path>
    </svg>
  );
};

type BtnProps = {
  onClick: () => void;
  solution_open: Accessor<boolean>;
};

export const SolutionSVG = (props: BtnProps) => {
  return (
    <>
      <Spacer />
      <div
        onClick={props.onClick}
        class="cursor-pointer"
      >
        <svg class="mx-auto h-[37px] overflow-visible">
          <g class="solution_button_svg">
            <rect
              id="solution_button_focus_rect"
              class="focus_alpha_fill"
              x="-7"
              y="-7"
              width="123"
              height="50"
            ></rect>

            <rect
              id="solution_button_focus_rect"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_rect"
                  : "active_solution_button_rect"
              )}
              width="109"
              height="36"
            ></rect>

            <path
              id="solution_button_lip"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_lip"
                  : "active_solution_button_lip"
              )}
              d="M 0 10 v -10 h 109 v 10 M 0 26 v 10 h 109 v -10"
            ></path>

            <g
              id="solution_button_finger_pair"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_hands"
                  : "active_solution_button_hands"
              )}
            >
              <g transform="translate(101.5, 18)">
                <use href="#finger_pointing_left"></use>
              </g>
              <g transform="scale(-1, 1) translate(-8, 20)">
                <use href="#finger_pointing_left"></use>
              </g>
              <use href="#solution_button_text"></use>
            </g>
          </g>
        </svg>
      </div>
      <Spacer />
      <Spacer />
    </>
  );
};

export default Solution;
