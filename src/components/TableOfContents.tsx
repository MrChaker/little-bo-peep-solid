import { ParentProps } from "solid-js";
import Columns from "./Columns";
import Spacer from "./Spacer";

const TableOfContents = () => {
  return (
    <Columns>
      <div class="col-start-2">
        <h1 class="text-2xl sm:text-4xl font-baskerville-italic mb-5 gap-4 flex justify-center items-center font-lora">
          <img
            src="/images/table_of_contents.svg"
            class="w-[40px] sm:w-[60px]"
          />
          Table of Contents
          <img
            src="/images/table_of_contents.svg"
            class="flip-y w-[40px] sm:w-[60px]"
          />
        </h1>
        {/* render chapter */}
        <Title label="Chapers" />
        <ItemsList>
          <MenuItem
            article_type="1"
            label="A Few Refreshers"
            on_mobile=""
            href="chapter1"
          />
        </ItemsList>
        {/* end chapter */}
        <Spacer />
        {/* render bootcamp */}
        <Title label="Bootcamps" />
        <ItemsList>
          <MenuItem
            article_type="1"
            label="Sets"
            on_mobile=""
            href="bootcamp1"
          />
        </ItemsList>
        {/* end bootcamp */}
      </div>
    </Columns>
  );
};

const Title = (props: { label: string }) => {
  return (
    <h1 class="text-[2.1rem] font-baskerville-italic mb-5 flex justify-between items-center">
      <img src="/images/title_line.svg" class="w-[30%] sm:w-36" />
      {props.label}
      <img src="/images/title_line.svg" class="rotate-180 w-[30%] sm:w-36" />
    </h1>
  );
};

const ItemsList = (props: ParentProps) => {
  return (
    <ul class="leading-9 lg:leading-10 text-2xl lg:text-3xl">
      {props.children}
    </ul>
  );
};

const MenuItem = (props: {
  href: string;
  label: string;
  on_mobile?: string;
  article_type: string;
}) => {
  //let GlobalState { route, .. } = use_context(cx).unwrap();

  return (
    <a
      href={`/article/${props.href}`}
      class="flex items-baseline justify-between"
      // onClick=move |_| route.set(href)
    >
      <span class="block">{props.article_type}</span>
      <span class="dots"></span>
      <span class="sm:hidden">
        {props.on_mobile == "" ? props.label : props.on_mobile}
      </span>
      <span class="hidden sm:block">{props.label}</span>
    </a>
  );
};

export default TableOfContents;
