import useOnMobile from "~/hooks/useOnMobile";

const PanelTitle = (props: { label: string }) => {
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

export default PanelTitle;