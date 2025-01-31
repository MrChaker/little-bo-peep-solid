import Chapter from "~/components/Chapter";
import { Section, Example, NoBreak, CustomBlock, Pause, WriterlyBlankLine } from "~/components/Wrappers";
import { CentralDisplay, CentralDisplayItalic } from "~/components/Delimiters";
import { Math, MathBlock } from "~/components/Math";
import { ImageRight, ImageLeft } from "~/components/SideImage";
import Image from "~/components/Image";
import InlineImage from "~/components/InlineImage";
import { Exercise, Exercises } from "~/components/Exercises";
import Solution from "~/components/Solution";
import Table from "~/components/Table";
import Grid from "~/components/Grid";
import { List, Item } from "~/components/List";
import { SectionDivider, StarDivider } from "~/components/SectionDivider";
import VerticalChunk from "~/components/VerticalChunk";

const Article = () => {
  return (
    <Chapter
         number={1}
         title="A Few Refreshers">
      <Section>
        <div>
          {" "}{" "}
          <i>
            hello world
            goodbye
            <img />
            byyeee
          </i>
          {" "}{" "}
          {" "}{" "}
          <i>
            hello world
            goodbye
            <img />
            {" "}{" "}
          </i>
          {" "}{" "}
          {" "}{" "}
          <i
               font-size={45}>
            hello world
            goodbye
            <img />
            {" "}{" "}
          </i>
          {" "}{" "}
        </div>
      </Section>
    </Chapter>
  );
};

export default Article;