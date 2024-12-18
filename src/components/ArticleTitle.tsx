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
    on_mobile_label?: string;
    class?: string;
  }
  // label: &'static str,
  // #[prop(default = "")] on_mobile: &'static str,
  // #[prop(default = "")] class: &'static str,
) => {
  const { on_mobile } = useOnMobile();

  return (
    <div class="slice pt-14">
      <h1
        class="text-3xl sm:text-4xl py-4"
        style={`margin-top: ${
          on_mobile()
            ? CHAPTER_TITLE_TOP_MARGIN_MOBILE
            : CHAPTER_TITLE_TOP_MARGIN_DESKTOP
        }px;margin-bottom: ${
          on_mobile()
            ? CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE
            : CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP
        }px`}>
        <span class="sm:hidden">
          {on_mobile() ? props.on_mobile_label : props.label}
        </span>
        <span class="hidden sm:block">{props.label}</span>
      </h1>
    </div>
  );
};

export default ArticleTitle;
