import mainColumnWidth from "~/hooks/useMainColumnWidth";
import {
  CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP,
  CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE,
  CHAPTER_TITLE_TOP_MARGIN_DESKTOP,
  CHAPTER_TITLE_TOP_MARGIN_MOBILE,
} from "../constants";
import onMobile from "../hooks/useOnMobile";

const ArticleTitle = (props: {
  label: string;
  on_mobile_label?: string;
  class?: string;
}) => {
  return (
    <div class="slice" style={`width:${mainColumnWidth()}px;`}>
      <h1
        class="text-2rem sm:text-4xl pt-5 sm:pt-4 pb-4"
        style={`margin-top: ${
          onMobile()
            ? CHAPTER_TITLE_TOP_MARGIN_MOBILE
            : CHAPTER_TITLE_TOP_MARGIN_DESKTOP
        }px;margin-bottom: ${
          onMobile()
            ? CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE
            : CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP
        }px`}
      >
        <span class="sm:hidden">
          {onMobile() ? props.on_mobile_label : props.label}
        </span>
        <span class="hidden sm:block">{props.label}</span>
      </h1>
    </div>
  );
};

export default ArticleTitle;
