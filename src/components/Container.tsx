import { ParentProps, createEffect, createSignal } from "solid-js";
import { useGlobalContext } from "../store/StoreProvider";
import useSaveScroll from "~/hooks/useSaveScroll";

const Container = (props: ParentProps) => {
  const { store } = useGlobalContext();
  const page_state = () => store.page_state;
  // let article_node: NodeRef<Div> = create_node_ref::<Div>(cx);
  //  can_click is for disabling click on page transition

  let [state_changed_by_scroll, set_state_changed_by_scroll] =
    createSignal(false);

  // there is an inital scroll when each page is loaded . code for it is in useScrollX used in renderder helpers add_imports and table of contents

  createEffect(() => {
    const scroll_back = () => {
      if (page_state() == "fixed") {
        if (
          !state_changed_by_scroll() &&
          window.scrollX > 1300.0 &&
          window.scrollX < 1700.0
        ) {
          window.scroll({
            left: 1500,
            behavior: "smooth",
          });
        } else {
          set_state_changed_by_scroll(true);
        }
      }
    };

    document.addEventListener("scrollend", scroll_back);
    document.addEventListener("touchend", scroll_back);

    return () => {
      document.removeEventListener("scrollend", scroll_back);
      document.removeEventListener("touchend", scroll_back);
    };
  });

  createEffect(() => {
    document.addEventListener("click", (e) => {
      let sidebar = document.getElementById("sidebar");
      let menu_btn = document.getElementById("menu_btn");
      if (
        true
        // (e.target instanceof Node &&
        //   sidebar &&
        //   !sidebar.contains(e.target) &&
        //   menu_btn &&
        //   !menu_btn.contains(e.target))
      ) {
        window.scroll({
          left: 1500,
          behavior: "smooth",
        });
        set_state_changed_by_scroll(false);
      }
    });
  });

  return (
    <div class="">
      <div
        class="relative flex justify-center align-center w-full pb-14 min-h-screen left-[1500px]"
        id="Container">
        <div class="w-full transition duration-300 sm:overflow-visible sm:translate-x-0">
          <div class="font-baskerville w-full">{props.children}</div>
        </div>
        <ColumnButtonLeft />
        <ColumnButtonRight />
      </div>
    </div>
  );
  {
    /* <MathJaxTypeset/> */
  }
};

{
  /* const MathJaxTypeset = () => {
  return(
      <script>
        {`window.MathJax.typesetPromise().then(() => {
            document.querySelectorAll(".hidden-on-startup").forEach((elem) => {
              elem.classList.remove("hidden-on-startup");
              elem.classList.add("animate-appear");
            });
        });`}
      </script>)
} */
}

const ColumnButtonRight = () => {
  const {
    store: { page_state },
  } = useGlobalContext();

  return (
    <div
      style="width: 1500px;"
      class={`z-40 transition duration-300 absolute grid grid-cols-4 justify-end items-center w-full h-full translate-x-3/4 lg:translate-x-[85%]
        ${page_state == "fixed" ? "opacity-0 pointer-events-none" : ""}
        `}></div>
  );
};

const ColumnButtonLeft = () => {
  const {
    store: { page_state },
  } = useGlobalContext();

  return (
    <div
      style="width: 1500px;"
      class={`z-40 transition duration-300 lg:hidden absolute grid grid-cols-4 justify-end items-center w-full h-full lg:translate-0 -translate-x-3/4 
        ${page_state == "fixed" ? "opacity-0 pointer-events-none" : ""}
        `}></div>
  );
};

export default Container;
