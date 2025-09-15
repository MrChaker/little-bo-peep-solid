import mainColumnWidth from "~/hooks/useMainColumnWidth";
import {
  CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP,
  CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE,
  CHAPTER_TITLE_TOP_MARGIN_DESKTOP,
  CHAPTER_TITLE_TOP_MARGIN_MOBILE,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";
import { ParentProps } from "solid-js";

const ArticleTitle = (
<<<<<<< Updated upstream
  props: ParentProps & { banner?: string; }
=======
  props: ParentProps & {
    banner?: string;
  }
>>>>>>> Stashed changes
) => {
  const { on_mobile } = useOnMobile();

  return (
    <div
      class="text-column"
      style={`width:${mainColumnWidth()}px;`}>
      <h1
<<<<<<< Updated upstream
        class="mobile-title sm:text-4xl pt-5 md:pt-6 lg:pt-7 pb-4 lg:pb-5"
      > {props.banner}
=======
        // class="text-2rem sm:text-4xl pt-5 sm:pt-4 pb-4"
        style={`
          font-size:${on_mobile()
            ? "2rem"
            : "2.25rem"};
          line-height: ${on_mobile()
            ? "2.25rem"
            : "2.5rem"};
          margin-top: ${on_mobile()
            ? CHAPTER_TITLE_TOP_MARGIN_MOBILE
            : CHAPTER_TITLE_TOP_MARGIN_DESKTOP}px
          margin-bottom: ${on_mobile()
            ? CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE
            : CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP}px;
        `}
        // style={margin-top: ${
        //   on_mobile()
        //     ? CHAPTER_TITLE_TOP_MARGIN_MOBILE
        //     : CHAPTER_TITLE_TOP_MARGIN_DESKTOP
        // }px;margin-bottom: ${
        //   on_mobile()
        //     ? CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE
        //     : CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP
        // }px`}
      >
>>>>>>> Stashed changes
        {" "}
        {props.banner} {props.children}
      </h1>
    </div>
  );
};

export default ArticleTitle;
