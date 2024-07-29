import { createEffect, createSignal } from "solid-js";

const PanelButton = () => {
  const [open, set_open] = createSignal(false);
  const [show_areas, set_show_areas] = createSignal(false);

  createEffect(() => {});
  return (
    <div class="h-14 w-14 fixed right-0 border-l sm:border-l-0 border-b z-50">
      <button
        onClick={() => {
          set_open(!open());
        }}
        class={`select-none flex items-center justify-center h-8 w-8 m-3 fill-[rgb(30,30,30)] hover:fill-stone-600 ${
          show_areas() ? "outline-[10px] outline-black outline" : ""
        }`}>
        <PanelButtonIcon open={open()} />
      </button>
    </div>
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
