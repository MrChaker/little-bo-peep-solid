import PanelTitle from "./PanelTitle";
import PanelItem from "./PanelItem";

const PanelAuthorSuppliedContent = () => {
  return (
    <>
      <div id="chapter">
        <PanelTitle label="Chapters" />
        <ul>
          <PanelItem
            article_type={1}
            label="Functions"
            on_mobile="Functions"
            href="chapter1" />
        </ul>
      </div>
    </>
  );
};

export default PanelAuthorSuppliedContent;