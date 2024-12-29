import { createSignal, ParentProps } from "solid-js";
import { HAMBURGER_MENU_HEIGHT } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import Spacer from "./Spacer";
import useOnMobile from "~/hooks/useOnMobile";

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
      }}>
      <div
        onMouseEnter={() => toggle_scroll("hidden")}
        onMouseLeave={() => toggle_scroll("auto")}
        onTouchStart={() => toggle_scroll("hidden")}
        onTouchEnd={() => toggle_scroll("auto")}
        style={{
          "min-height": `calc(100vh - ${HAMBURGER_MENU_HEIGHT - 1.0}px)`,
          height: `calc(100vh - ${HAMBURGER_MENU_HEIGHT}px)`,
        }}
        class="select-none overscroll-none absolute right-0 w-[16rem] sm:w-[22rem] z-40 bg-stone-100 overflow-scroll translate-y-0 sm:translate-y-[-1px]">
        <div class="select-none scrollbar-hidden sm:h-full pt-[0.6em] px-[1em] overflow-y-hidden [&ul]:mb-[8px] [&ul]:p-0">
          <div id="chapter">
            {" "}
            <Title label="Chapters" />
            <ItemsList>
              <MenuItem
                article_type="1"
                label="A Few Refreshers"
                on_mobile=""
                href="chapter1"
              />

              <MenuItem
                article_type="2"
                label="Slopes"
                on_mobile=""
                href="chapter2"
              />

              <MenuItem
                article_type="3"
                label="Functions"
                on_mobile=""
                href="chapter3"
              />

              <MenuItem
                article_type="4"
                label="Derivatives"
                on_mobile=""
                href="chapter4"
              />
            </ItemsList>
          </div>
          <div id="bootcamp">
            {" "}
            <Title label="Bootcamps" />
            <ItemsList>
              <MenuItem
                article_type="1"
                label="Sets"
                on_mobile=""
                href="bootcamp1"
              />

              <MenuItem
                article_type="2"
                label="Powers of 10"
                on_mobile=""
                href="bootcamp2"
              />
            </ItemsList>
          </div>
          <div id="options"></div>
        </div>
      </div>
    </div>
  );
};

const Title = (props: { label: string }) => {
  const { on_mobile } = useOnMobile();

  return (
    <h1 class="text-3xl font-baskerville-italic mt-[5px] mb-[7px] flex justify-between items-center">
      <img
        src={`/images/title_line${on_mobile() ? "_panel" : ""}.svg`}
        class="w-[3rem] sm:w-24"
      />
      {props.label}
      <img
        src={`/images/title_line${on_mobile() ? "_panel" : ""}.svg`}
        class="rotate-180 w-[3rem] sm:w-24"
      />
    </h1>
  );
};

const ItemsList = (props: ParentProps) => {
  return <ul>{props.children}</ul>;
};

const MenuItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: string;
}) => {
  return (
    <a
      href={`/article/${props.href}`}
      class="flex items-baseline justify-between leading-9 sm:leading-8 text-2xl">
      <span class="block">{props.article_type}</span>
      <span class="dots"></span>
      <span class="sm:hidden">
        {props.on_mobile == "" ? props.label : props.on_mobile}
      </span>
      <span class="hidden sm:block">{props.label}</span>
    </a>
  );
};

export default Panel;
