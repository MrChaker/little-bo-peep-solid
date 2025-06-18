import AbstractArticle from "./AbstractArticle";
import ArticleTitle from "./ArticleTitle";

const Bootcamp = (props: any) => {
  return (
    <AbstractArticle
      id={props.id}
      largest_centered_image_width={props.largest_centered_image_width}
      largest_side_image_width={props.largest_side_image_width}>
      <div class="first_child_of_chapter"></div>
      <ArticleTitle
        label={`Bootcamp ${props.number}: ` + props.title}
        on_mobile_label={
          `Bootcamp ${props.number}: ` + (props.mobile_title || props.title)
        }
      />
      {props.children}
    </AbstractArticle>
  );
};

export default Bootcamp;
