import {
  CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP,
  CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE,
  CHAPTER_TITLE_TOP_MARGIN_DESKTOP,
  CHAPTER_TITLE_TOP_MARGIN_MOBILE,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";

const ArticleTitle = (
  props: {
    label: string;
    on_mobile?: string;
    class?: string;
  }
  // label: &'static str,
  // #[prop(default = "")] on_mobile: &'static str,
  // #[prop(default = "")] class: &'static str,
) => {
  const { on_mobile } = useOnMobile();

  return (
    <div class="sm:grid gridColsWidth pt-14">
      <h1
        class="sm:col-start-2 text-3xl sm:text-4xl p-4"
        style={`margin-top: ${
          on_mobile()
            ? CHAPTER_TITLE_TOP_MARGIN_MOBILE
            : CHAPTER_TITLE_TOP_MARGIN_DESKTOP
        };margin-bottom: ${
          on_mobile()
            ? CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE
            : CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP
        }`}>
        <span class="sm:hidden">
          {props.on_mobile ? props.on_mobile : props.label}
        </span>
        <span class="hidden sm:block">{props.label}</span>
      </h1>
    </div>
  );
};

export default ArticleTitle;
