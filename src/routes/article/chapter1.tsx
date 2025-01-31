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
          _&ensp;&ensp;&ensp;hello world
          goodbye
          <img />
          byyeee&ensp;&ensp;&ensp;_
          _&ensp;&ensp;&ensp;hello world
          goodbye
          <img />
          &ensp;&ensp;&ensp;_
          <i
               font-size={45}>
            &ensp;&ensp;&ensp;hello world
            goodbye
            <img />
            &ensp;&ensp;&ensp;
          </i>
        </div>
      </Section>
    </Chapter>
  );
};

export default Article;