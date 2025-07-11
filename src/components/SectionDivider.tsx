import { useGlobalContext } from "~/store/StoreProvider";
import { Spacer } from "./Spacer";

export const SectionDivider = (props: { src?: string }) => {
  let { store } = useGlobalContext();

  if (!store.show_areas) return <></>;
  return (
    <>
      <Spacer />
      <img
        class="text-column"
        src={props.src || "/images/section_divider.svg"}
      />
    </>
  );
};
