import { ParentProps, createEffect, onCleanup } from "solid-js";
import Nav from "./Nav";
import SVGDefs from "./SVGDefs";

const Container = (props: ParentProps) => {
  // can_click is for disabling click on page transition
  // there is an inital scroll when each page is loaded .
  // code for it is in useScrollX used in renderder helpers
  // add_imports and table of contents

  createEffect(() => {
    const scroll_back = () => {
      if (
        window.scrollX > 1300.0 &&
        window.scrollX < 1700.0
      ) {
        window.scroll({
          left: 1500,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("scrollend", scroll_back);
    document.addEventListener("touchend", scroll_back);

    onCleanup(() => {
      document.removeEventListener("scrollend", scroll_back);
      document.removeEventListener("touchend", scroll_back);
    });
  });

  createEffect(() => {
    document.addEventListener("click", (_) => {
      window.scroll({
        left: 1500,
        behavior: "smooth",
      });
    });
  });

  return (
    <div class="">
      <div
        class="relative flex justify-center align-center w-full pb-14 min-h-screen left-[1500px]"
        id="Container">
        <div class="w-full transition duration-300 sm:overflow-visible sm:translate-x-0">
          <div class="font-baskerville w-full">
            <Nav />
            {props.children}
            <SVGDefs />
          </div>
        </div>
        <ColumnButtonLeft />
        <ColumnButtonRight />
      </div>
    </div>
  );
};

const ColumnButtonRight = () => {
  return (
    <div
      style="width: 1500px;"
      class={`z-40 transition duration-300 absolute grid grid-cols-4 justify-end items-center w-full h-full translate-x-3/4 lg:translate-x-[85%] opacity-0 pointer-events-none`}></div>
  );
};

const ColumnButtonLeft = () => {
  return (
    <div
      style="width: 1500px;"
      class={`z-40 transition duration-300 lg:hidden absolute grid grid-cols-4 justify-end items-center w-full h-full lg:translate-0 -translate-x-3/4 opacity-0 pointer-events-none`}></div>
  );
};

export default Container;
