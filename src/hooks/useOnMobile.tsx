import type { Accessor } from "solid-js";
import {
  createSignal,
  createRenderEffect,
  onCleanup,
  createEffect,
} from "solid-js";
import { MOBILE_MAX_WIDTH } from "../constants";
import { useEffect } from "solidjs-hooks";

function useOnMobile(): {
  on_mobile: Accessor<boolean>;
} {
  const [on_mobile, set_on_mobile] = createSignal(false);

  createEffect(() => {
    set_on_mobile(window.innerWidth <= MOBILE_MAX_WIDTH);
  });

  const handle = () => {
    set_on_mobile(window.innerWidth <= MOBILE_MAX_WIDTH);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", handle);

    onCleanup(() => {
      window.removeEventListener("resize", handle);
    });
  }

  return { on_mobile };
}

export default useOnMobile;
