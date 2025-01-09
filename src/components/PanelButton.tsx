import { createEffect, createSignal, onCleanup } from "solid-js";
import { twJoin } from "tailwind-merge";
import {
  HAMBURGER_MENU_HEIGHT,
  HAMBURGER_MENU_SCROLLY_END_FADE,
  HAMBURGER_MENU_SCROLLY_START_FADE,
  HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY,
  MOBILE_MAX_WIDTH,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "../store/StoreProvider";
import { set_store } from "~/store";

const PanelButton = () => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const open = () => store.panel_opened;

  const [opacity, set_opacity] = createSignal(1);
  const [scrollY, set_scrollY] = createSignal(0);
  const [scrollX, set_scrollX] = createSignal(0);
  const [innerWidth, set_innerWidth] = createSignal(0);
  const [scrollWidth, set_scrollWidth] = createSignal(0);

  const calc_opacity = () => {
    return Math.min(
      1.0,
      1.0 -
        (scrollY() - HAMBURGER_MENU_SCROLLY_START_FADE) /
          HAMBURGER_MENU_SCROLLY_END_FADE
    );
  };

  const handleScroll = () => {
    set_scrollY(window.scrollY);
    set_scrollX(window.scrollX);
    set_opacity(calc_opacity());
  };

  const handleResize = () => {
    set_innerWidth(window.innerWidth);
    set_scrollWidth(document.body.scrollWidth);
  };

  createEffect(() => {
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });
  });

  return (
    <>
      <div
        class={twJoin(
          "h-14 w-14 fixed right-0 border-l sm:border-l-0 z-50 border-b",
          !open() && scrollY() > HAMBURGER_MENU_HEIGHT && "sm:border-b-0",
          open() && !on_mobile() && scrollY() > 0 && "hover:border-b-0"
        )}
      >
        <button
          onClick={() => {
            set_store("panel_opened", !open());
          }}
          style={{
            opacity: !open() && !on_mobile() ? opacity() : 1,
          }}
          class="select-none flex items-center justify-center h-8 w-8 m-3 fill-[rgb(30,30,30)] hover:fill-stone-600 hover:!opacity-100"
        >
          <PanelButtonIcon open={open()} />
          
          {
            /* document.body.scrollWidth/2 does not seem
               to be at the center of the column of text;
               to debug, uncomment next '{}' block and scroll
               until center of column of text is at middle
               of right edge of browser; then we should
               have

               (scrollWidth()) / 2 == scrollX() + innerWidth()

               ...but that's not the case
            */
          }
          {/* {scrollWidth()}
          <br></br>{(scrollWidth()) / 2}
          <br></br>{scrollX() + innerWidth()} */}
        </button>
      </div>
      <div
        class={twJoin(
          "w-14 fixed right-0 z-40 h-14",
          scrollY() <= HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY &&
          !on_mobile() &&
          scrollX() + innerWidth() >= (scrollWidth() / 2) + (MOBILE_MAX_WIDTH / 2) && "h-[10rem]"
        )}
        style={{
          "background-color":
            scrollY() > HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY || on_mobile()
              ? "transparent"
              : store.show_areas
              ? "#fff000"
              : "#fff",
        }}
      ></div>
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
          class={`menu-icon-svg ${props.open ? "close-icon-svg-1" : ""}`}
        ></rect>
        <rect
          x="5"
          y="13.5"
          width="20"
          height="3"
          rx="1.5"
          ry="1.5"
          class={`menu-icon-svg ${props.open ? "opacity-0" : ""}`}
        ></rect>
        <rect
          x="5"
          y="21"
          width="20"
          height="3"
          rx="1.5"
          ry="1.5"
          class={`menu-icon-svg ${props.open ? "close-icon-svg-2" : ""}`}
        ></rect>
      </g>
    </svg>
  );
};

export default PanelButton;
