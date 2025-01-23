import useOnMobile from "~/hooks/useOnMobile";

const TOCTitle = (props: { label: string }) => {
  return (
    <h1 class="slice !text-[2.1rem] !leading-7 font-baskerville-italic mb-5 !justify-between items-center">
      <div class="flex items-center justify-between gap-4">
        <div class="flex-1">
          <img src="/images/title_line.svg" class="w-full" />
        </div>

        <div class="whitespace-nowrap">
          <p class="">{props.label}</p>
        </div>

        <div class="flex-1">
          <img src="/images/title_line.svg" class="w-full rotate-180" />
        </div>
      </div>
    </h1>
  );
};

export default TOCTitle;