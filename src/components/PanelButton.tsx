import { createEffect, createSignal, onCleanup } from "solid-js";
import { twJoin } from "tailwind-merge";
import {
  HAMBURGER_MENU_HEIGHT,
  HAMBURGER_MENU_SCROLLY_END_FADE,
  HAMBURGER_MENU_SCROLLY_START_FADE,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "../store/StoreProvider";

const PanelButton = () => {
  const { on_mobile } = useOnMobile();
  const {
    store: { burger_background_on },
  } = useGlobalContext();
  const [open, set_open] = createSignal(false);
  const [opacity, set_opacity] = createSignal(1);
  const [scrollY, set_scrollY] = createSignal(0);

  const calc_opacity = () => {
    return Math.min(
      1.0,
      1.0 -
        (window.scrollY - HAMBURGER_MENU_SCROLLY_START_FADE) /
          HAMBURGER_MENU_SCROLLY_END_FADE,
    );
  };

  const handleScroll = () => {
    set_opacity(calc_opacity());
    set_scrollY(window.scrollY);
  };

  createEffect(() => {
    set_opacity(calc_opacity());
    set_scrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <>
      <div
        class={twJoin(
          "h-14 w-14 fixed right-0 border-l sm:border-l-0 border-b z-50",
          !open() && scrollY() > HAMBURGER_MENU_HEIGHT && "sm:border-b-0",
          open() && !on_mobile() && scrollY() > 0 && "hover:border-b-0",
        )}>
        <button
          onClick={() => {
            set_open(!open());
          }}
          style={{
            opacity: !open() && !on_mobile() ? opacity() : 1,
          }}
          class="select-none flex items-center justify-center h-8 w-8 m-3 fill-[rgb(30,30,30)] hover:fill-stone-600">
          <PanelButtonIcon open={open()} />
        </button>
      </div>
      <div
        class={twJoin(
          "w-14 fixed right-0 z-40 h-14",
          burger_background_on && "h-[10rem]",
          scrollY() == 0 && !burger_background_on && "h-14",
        )}
        style={{
          "background-color":
            scrollY() > 0 && burger_background_on
              ? "transparent"
              : false
                ? "#fff000"
                : "#fff",
        }}></div>
    </>
  );
};

const PanelButtonIcon = (props: { open: boolean }) => {
  return (
    <svg width="30px" height="30px" version="1.1" viewBox="0 0 30 30">
      <g>
        <rect
          x="5"
          y="6"
          width="20"
          height="3"
          rx="1.5"
          ry="1.5"
          class={`menu-icon-svg ${
            props.open ? "close-icon-svg-1" : ""
          }`}></rect>
        <rect
          x="5"
          y="13.5"
          width="20"
          height="3"
          rx="1.5"
          ry="1.5"
          class={`menu-icon-svg ${props.open ? "opacity-0" : ""}`}></rect>
        <rect
          x="5"
          y="21"
          width="20"
          height="3"
          rx="1.5"
          ry="1.5"
          class={`menu-icon-svg ${
            props.open ? "close-icon-svg-2" : ""
          }`}></rect>
      </g>
    </svg>
  );
};

export default PanelButton;
