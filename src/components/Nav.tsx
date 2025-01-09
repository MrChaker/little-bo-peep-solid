import { createSignal } from "solid-js";
import PanelButton from "./PanelButton";

const HAMBURGER_MENU_HEIGHT = 56;

const Nav = () => {
  return (
    <>
      <nav class="select-none w-full">
        <div class="select-none flex justify-center items-center fixed sm:absolute bg-white z-40 w-full h-14 left-0 border-b">
          <Title />
        </div>
      </nav>
      <div class="h-14"></div>
    </>
  );
};

const Title = () => {
  const [route, setRoute] = createSignal("/");

  return (
    <div
      class="slice select-none w-full h-full border-r-0 font-clickerscript"
      id="Header">
      <div class="font-clickerscript text-3xl self-end mt-auto mb-auto pt-1">
        <a href="/" onClick={() => setRoute("/")}>
          Little Bo Peep
        </a>
      </div>
    </div>
  );
};

export default Nav;
