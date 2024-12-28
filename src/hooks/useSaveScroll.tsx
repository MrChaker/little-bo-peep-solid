import { createEffect, createSignal } from "solid-js";
import { useLocalStorage } from "solidjs-hooks";

const useSaveScroll = () => {
  const [scroll, set_scroll] = createSignal<number | null>(null);

  createEffect(() => {
    const update = () => {
      set_scroll(window.scrollY);
    };

    requestAnimationFrame(() => {
      const article = location.pathname.split("/").pop();
      set_scroll(Number(localStorage.getItem(`${article}_scroll`) || "0"));

      if (scroll() !== null) {
        window.scrollTo(0, Number(scroll()));
      }

      window.addEventListener("scroll", () => update());
    });

    return () => {
      window.removeEventListener("scroll", update);
    };
  });

  createEffect(() => {
    let _ = scroll();
    requestAnimationFrame(() => {
      const article = location.pathname.split("/").pop();
      localStorage.setItem(`${article}_scroll`, window.scrollY.toString());
    });
  });
};

export default useSaveScroll;