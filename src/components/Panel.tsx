import { HAMBURGER_MENU_HEIGHT } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { Store } from "~/store";
import PanelTableOfContents from "./PanelAuthorSuppliedContent";
import PanelTitle from "./PanelTitle";

const Panel = () => {
  const { store } = useGlobalContext();
  const menu_closed = () => !store.panel_opened;

  const toggle_scroll = (overflow: string) => {
    if (menu_closed()) {
      document.body.style.setProperty("overflow", overflow);
    } else {
      document.body.style.setProperty("overflow", overflow);
    }
  };

  return (
    <div
      id="sidebar"
      class="w-full z-50 fixed translate-x-0 translate-y-0 right-0 top-14 flex self-start font-baskerville text-xl leading-3 sm:leading-5 select-none transition ease-linear duration-300 scrollbar-hidden"
      classList={{
        "duration-500": menu_closed(),
        "duration-200": !menu_closed(),
      }}
      style={{
        transform: `translateX(${menu_closed() ? "100%" : "0"})`,
      }}
    >
      <div
        onMouseEnter={() => toggle_scroll("hidden")}
        onMouseLeave={() => toggle_scroll("auto")}
        onTouchStart={() => toggle_scroll("hidden")}
        onTouchEnd={() => toggle_scroll("auto")}
        style={{
          "min-height": `calc(100vh - ${HAMBURGER_MENU_HEIGHT - 1.0}px)`,
          height: `calc(100vh - ${HAMBURGER_MENU_HEIGHT}px)`,
        }}
        class="select-none overscroll-none absolute right-0 w-[16rem] sm:w-[22rem] z-40 bg-stone-100 overflow-scroll translate-y-0 sm:translate-y-[-1px]"
      >
        <div class="select-none scrollbar-hidden sm:h-full pt-[0.6em] px-[1em] overflow-y-hidden [&ul]:mb-[8px] [&ul]:p-0">
          <PanelTableOfContents />
          <div id="options">
            <PanelTitle label="Options" />
            <Option label="Areas" state_key="show_areas" />
            <Option
              label="Section Dividers"
              state_key="show_section_dividers"
            />
            <Option label="Squiggles" state_key="show_squiggles" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Option = (props: { label: string; state_key: keyof Store }) => {
  const { store, set_store } = useGlobalContext();
  const state = () => store[props.state_key] as boolean;

  return (
    <div class="flex justify-between items-center text-2xl pb-1.5 sm:pb-2">
      <p>{props.label}</p>
      <Checkbox
        value={state()}
        onChange={() => set_store(props.state_key, !state())}
      />
    </div>
  );
};

const Checkbox = (props: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => {
  return (
    <div
      onClick={() => props.onChange(!props.value)}
      class={`w-5 h-5 border border-solid border-black rounded flex items-center justify-center cursor-pointer ${
        props.value
          ? "bg-[#c1ebff] hover:bg-[#9ac1d3]"
          : "bg-white hover:bg-[#f3f3f3]"
      }`}
    >
      {props.value && (
        <svg
          width="14"
          height="9"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="2.09"
            height="7.33987"
            rx="1.045"
            transform="matrix(0.460058 -0.887889 0.625737 0.780034 0 6.85571)"
            fill="white"
          ></rect>
          <rect
            width="2.09"
            height="13.38"
            rx="1.045"
            transform="matrix(0.529272 0.848452 -0.560655 0.828049 11.5157 0)"
            fill="white"
          ></rect>
        </svg>
      )}
    </div>
  );
};

export default Panel;
