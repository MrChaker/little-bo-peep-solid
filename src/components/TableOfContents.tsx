import Columns from "./Columns";

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

        {/* {render_content_for_article!(
                  "chapters", r#"
                <Title label="Chapters"/>
            "# */}
        <ul class="leading-9 lg:leading-10 text-2xl lg:text-3xl">
          {/*   {render_articles_list!("chapters")} */}
        </ul>
        {/* <Spacer/> */}
        {/*  {render_content_for_article!(
                  "bootcamps", r#"
                <Title label="Bootcamps"/>
              "#
              )} */}
        <ul class="leading-9 lg:leading-10 text-2xl lg:text-3xl">
          {/*  {render_articles_list!("bootcamps")} */}
        </ul>
      </div>
    </Columns>
  );
};

export default TableOfContents;
