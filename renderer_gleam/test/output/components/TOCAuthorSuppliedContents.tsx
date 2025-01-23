import TOCTitle from "./TOCTitle";
import TOCItem from "./TOCItem";
import Spacer from "./Spacer";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
      <div id="chapter">
        <TOCTitle label="Chapters"></TOCTitle>
        <ul>
          <TOCItem
            article_type={1}
            label="A Few Refreshers"
            on_mobile="A Few Refreshers"
            href="chapter1"
          ></TOCItem>
          <TOCItem
            article_type={2}
            label="Slopes"
            on_mobile="Slopes"
            href="chapter2"
          ></TOCItem>
          <TOCItem
            article_type={3}
            label="Functions"
            on_mobile="Functions"
            href="chapter3"
          ></TOCItem>
          <TOCItem
            article_type={4}
            label="Derivatives"
            on_mobile="Derivatives"
            href="chapter4"
          ></TOCItem>
        </ul>
      </div>
      <Spacer></Spacer>
      <div id="bootcamp">
        <TOCTitle label="Bootcamps"></TOCTitle>
        <ul>
          <TOCItem
            article_type={1}
            label="Sets"
            on_mobile="Sets"
            href="bootcamp1"
          ></TOCItem>
          <TOCItem
            article_type={2}
            label="Powers of 10"
            on_mobile="Powers of 10"
            href="bootcamp2"
          ></TOCItem>
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;
