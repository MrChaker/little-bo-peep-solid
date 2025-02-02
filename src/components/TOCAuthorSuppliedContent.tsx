import TOCTitle from "./TOCTitle";
import TOCItem from "./TOCItem";
import Spacer from "./Spacer";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItem
            article_type={1}
            label="Functions"
            on_mobile="Functions"
            href="chapter1" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;