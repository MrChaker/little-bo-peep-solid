import type { Accessor } from "solid-js";
import { createSignal, createRenderEffect } from "solid-js";
import { MOBILE_MAX_WIDTH } from "../constants";
import { useEffect } from "solidjs-hooks";

function useOnMobile(): {
  on_mobile: Accessor<boolean>;
} {
  const [on_mobile, set_on_mobile] = createSignal(false);

  const handler = () => {
    set_on_mobile(window.innerWidth < MOBILE_MAX_WIDTH);
  };

  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  });

  createRenderEffect(() => {
    handler();
  });

  return { on_mobile };
}

export default useOnMobile;
