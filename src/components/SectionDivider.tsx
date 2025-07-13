import { useGlobalContext } from "~/store/StoreProvider";
import { Spacer } from "./Spacer";

export const SectionDivider = (props: { src?: string }) => {
  let { store } = useGlobalContext();

  return (
    <>
      {store.show_section_dividers && (
        <>
          <Spacer />
          <img
            class="text-column"
            style={{
              border: store.show_areas ? "2px solid #8B4513" : "none",
            }}
            src={props.src || "/images/section_divider.svg"}
          />
        </>
      )}
    </>
  );
};
