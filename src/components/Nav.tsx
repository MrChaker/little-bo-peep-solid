import { createSignal } from "solid-js";
import PanelButton from "./PanelButton";

const HAMBURGER_MENU_HEIGHT = 56;

const Nav = () => {
  return (
    <>
      <nav class="select-none w-full">
        <div class="select-none flex justify-center items-center fixed sm:absolute bg-white z-40 h-14 w-full left-0">
          <Title />
        </div>
      </nav>
      <div
        style={{ top: `${HAMBURGER_MENU_HEIGHT - 1.0}px` }}
        class="h-0 border-b left-[-1500px] !w-[4400px] fixed sm:absolute z-50"></div>
    </>
  );
};

const Title = () => {
  const [route, setRoute] = createSignal("/");

  return (
    <div
      class="slice select-none w-full h-full border-r-0 font-clickerscript"
      id="Header">
      <div class="font-clickerscript text-3xl pt-2 self-end pb-2">
        <a href="/" onClick={() => setRoute("/")}>
          Little Bo Peep
        </a>
      </div>
    </div>
  );
};

export default Nav;
