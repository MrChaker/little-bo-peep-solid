import AbstractArticle from "./AbstractArticle";
import ArticleTitle from "./ArticleTitle";

const Chapter = (props: any) => {
  return (
    <AbstractArticle
      id={props.id}
      largest_centered_image_width={props.largest_centered_image_width}
      largest_side_image_width={props.largest_side_image_width}>
      <ArticleTitle
        label={`Chapter ${props.number}: ` + props.title}
        on_mobile_label={
          `Chapter ${props.number}: ` + (props.mobile_title || props.title)
        }
      />
      {props.children}
    </AbstractArticle>
  );
};

export default Chapter;
