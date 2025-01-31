import TOCTitle from "./TOCTitle";
import TOCItem from "./TOCItem";
import Spacer from "./Spacer";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
      <div
           id="chapter">
        <TOCTitle
             label="Chapters" />
        <ul>
          <TOCItem
               article_type={1}
               label="A Few Refreshers"
               on_mobile="A Few Refreshers"
               href="chapter1" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;