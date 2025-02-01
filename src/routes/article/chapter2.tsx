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
      number={2}
      title="Slopes">
      <Section>
        <VerticalChunk>
          <b>
            Slopes.
          </b>
          {" "}
          The{" "}
          <i>
            slope
          </i>
          {" "}of a line is a mathematical measure
          of how “steep” a line is. Here are a few examples
          (for an explanation of the values, see below):
        </VerticalChunk>
        <div class="spacer" />
        <Image src="/images/chapter_2_1.svg" />
        <div class="spacer" />
        <VerticalChunk>
          To explain, the slope of a line is...
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          the number of units the line goes up with each
          unit to the right
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          ...assuming that numbers on the{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis
          </NoBreak>
          {" "}increase
          going up and that numbers on the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}increase
          going right, as is usually the case. One can also
          describe slope as...
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          the amount of vertical change per unit of
          horizontal change
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          ...more elegant!
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example, the line below has slope 1, because
          it goes up by{" "}
          <Math>
            $1$
          </Math>
          {" "}unit for each unit to the right:
        </VerticalChunk>
        <div class="spacer" />
        <Image
          class="pl-[2px]"
          src="/images/slope_1_example.svg" />
        <div class="spacer" />
        <VerticalChunk>
          On the other hand, the line below has slope
          {" "}
          <NoBreak>
            <Math>
              $-0.5$
            </Math>
            ,
          </NoBreak>
          {" "}because it goes up by{" "}
          <i>
            minus
          </i>
          {" "}{" "}
          <Math>
            $0.5$
          </Math>
          {" "}units
          with each unit to the right:
        </VerticalChunk>
        <div class="spacer" />
        <Image
          class="pl-[19.5px]"
          src="/images/slope_0.5_example.svg" />
        <div class="spacer" />
        <VerticalChunk>
          (Etc.)
        </VerticalChunk>
      </Section>
      <div class="spacer" />
      <Section>
        <VerticalChunk>
          <b>
            Measuring Slope.
          </b>
          {" "}
          The slope of a line is also the ratio of vertical
          change to horizontal change between any two
          distinct points{" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <Math>
            $B$
          </Math>
          {" "}on the line:
        </VerticalChunk>
        <div class="spacer" />
        <Image
          class="mt-6 mb-2"
          src="/images/31.svg" />
        <div class="spacer" />
        <MathBlock>
          $$ \te&#123;slope&#125; = &#123;\te&#123;vertical change from A to B&#125; \over \te&#123;horizontal change from A to B&#125;&#125; $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          Indeed, dividing the vertical change by the
          horizontal change gives the per-horizontal-unit
          vertical change.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          More precisely, if
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ A = (x_1, y_1) $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          and
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ B = (x_2, y_2) $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          then
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          and
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          are the horizontal{" "}
          <i>
            &
          </i>
          {" "}the vertical change,
          respectively, from{" "}
          <Math>
            $A$
          </Math>
          {" "}to{" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ,
          </NoBreak>
          {" "}so
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$\te&#123;slope&#125; = &#123;y_2 - y_1 \over x_2 - x_1&#125;$$
          <ImageRight
            offset_y="-1rem"
            src="/images/32.svg" />
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          more succinctly. We call this the{" "}
          <i>
            slope formula
          </i>
          .
        </VerticalChunk>
        <div class="spacer" />
        <Example>
          <VerticalChunk>
            <b>
              Example 1.
            </b>
            {" "}
            A line that passes through the points
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$A = (-2, 5)$$
          </MathBlock>
          <div class="spacer" />
          <VerticalChunk>
            and
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$B = (4, 1)$$
          </MathBlock>
          <div class="spacer" />
          <VerticalChunk>
            has slope
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$&#123;1 - 5 \over 4 - (-2)&#125; = &#123;-4 \over 6&#125; = - &#123;2 \over 3&#125;.$$
          </MathBlock>
        </Example>
        <div class="spacer" />
        <VerticalChunk>
          <StarDivider />
          (The main thing to understand about Example
          1 is that
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ 1 - 5 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          is the vertical change from{" "}
          <Math>
            $A$
          </Math>
          {" "}to{" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ,
          </NoBreak>
          {" "}while
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ 4 - (-2) $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          is the horizontal change from{" "}
          <Math>
            $A$
          </Math>
          {" "}to{" "}
          <Math>
            $B$
          </Math>
          .)
        </VerticalChunk>
      </Section>
      <div class="spacer" />
      <Section>
        <VerticalChunk>
          <b>
            Sign Combinations.
          </b>
          {" "}
          Technically, quantities such as
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          and
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          are not distances but{" "}
          <i>
            differences
          </i>
          {" "}(or,
          equivalently,{" "}
          <i>
            changes
          </i>
          ). A distance, by
          definition, is a nonnegative number, while a
          difference carries no such restriction.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In particular, since
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          can be positive or negative, while
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          can be positive or negative or zero (more on
          zero below), the following sign combinations
          arise (lines of slope zero not included):
        </VerticalChunk>
        <div class="spacer" />
        <Table
          lines={true}
          cols={[120, 120, 120, 120]}>
          <tr>
            <td>
              <VerticalChunk>
                <Math>
                  $x_2 - x_1$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <VerticalChunk>
                <Math>
                  $y_2 - y_1$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <img
                style="margin-top:7px; margin-bottom:7px;"
                width={50}
                src="/images/33.svg" />
            </td>
            <td>
              <MathBlock>
                $$&#123;y_2-y_1 \over x_2-x_1&#125;$$
              </MathBlock>
            </td>
          </tr>
          <tr>
            <td>
              <VerticalChunk>
                <Math>
                  $+$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <VerticalChunk>
                <Math>
                  $+$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <img
                style="margin-top:7px; margin-bottom:7px;"
                width={105}
                src="/images/34.svg" />
            </td>
            <td>
              <MathBlock>
                $$&#123;+ \over +&#125; = \,+$$
              </MathBlock>
            </td>
          </tr>
          <tr>
            <td>
              <VerticalChunk>
                <Math>
                  $-$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <VerticalChunk>
                <Math>
                  $-$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <img
                style="margin-top:10px; margin-bottom:4px;"
                width={105}
                src="/images/35.svg" />
            </td>
            <td>
              <MathBlock>
                $$&#123;- \over -&#125; = \,+$$
              </MathBlock>
            </td>
          </tr>
          <tr>
            <td>
              <VerticalChunk>
                <Math>
                  $+$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <VerticalChunk>
                <Math>
                  $-$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <img
                style="margin-top:10px; margin-bottom:4px;"
                width={105}
                src="/images/36.svg" />
            </td>
            <td>
              <MathBlock>
                $$&#123;- \over +&#125; = \,-$$
              </MathBlock>
            </td>
          </tr>
          <tr>
            <td>
              <VerticalChunk>
                <Math>
                  $-$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <VerticalChunk>
                <Math>
                  $+$
                </Math>
              </VerticalChunk>
            </td>
            <td>
              <img
                style="margin-top:10px; margin-bottom:4px;"
                width={105}
                src="/images/37.svg" />
            </td>
            <td>
              <MathBlock>
                $$\frac&#123;+&#125;&#123;-&#125; = \,-$$
              </MathBlock>
            </td>
          </tr>
        </Table>
        <div class="spacer" />
        <VerticalChunk>
          In fact, we{" "}
          <i>
            should
          </i>
          {" "}be able to algebraically
          verify that the slope formula gives the same
          answer if{" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "}and{" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "}swap
          places, or, namely, to show that the fractions
          <ImageRight
            line={3.0}
            src="/images/38.svg" />
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125; $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          are somehow equal. But, indeed,
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125; = &#123;-(y_2 - y_1) \over -(x_2 - x_1)&#125; = &#123;y_1 - y_2 \over x_1 - x_2&#125; $$
          <ImageLeft
            offset_y="-3.5rem"
            src="/images/39.svg" />
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          which verifies this hypothesis. In particular,
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125; $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          are equally valid incarnations of the slope
          formula.
        </VerticalChunk>
      </Section>
      <div class="spacer" />
      <Section>
        <VerticalChunk>
          <b>
            Pathological Cases.
          </b>
          {" "}
          If
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ x_2 - x_1 = 0 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          the slope formula “breaks down” in the sense that
          division by 0 is undefined. This occurs, e.g., if
          we attempt to measure the slope of a vertical
          line:
        </VerticalChunk>
        <div class="spacer" />
        <Image src="/images/40.svg" />
        <div class="spacer" />
        <VerticalChunk>
          Indeed, vertical lines have{" "}
          <i>
            undefined
          </i>
          {" "}slope.
          Moreover the bad case
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ x_2 - x_1 = 0 $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          can also occur another way, namely if the points
          {" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "}and{" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "}coincide. In that
          case, more precisely, the slope formula evaluates
          to
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$ \frac&#123;y_2 - y_1&#125;&#123;x_2 - x_1&#125; = \frac&#123;0&#125;&#123;0&#125; $$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          which could be anything. (Technically, “
          <NoBreak>
            <Math>
              $0/0$
            </Math>
            ”
          </NoBreak>
          {" "}is
          undefined.) Indeed, infinitely many different
          lines pass through any given point!
        </VerticalChunk>
      </Section>
      <div class="spacer" />
      <Section>
        <VerticalChunk>
          <b>
            “Rise over Run”.
          </b>
          {" "}
          Some people remember the slope formula as “slope
          equals rise over run” (i.e., “
          <Math>
            $\te&#123;slope&#125; =$
          </Math>
          {" "}{" "}
          <InlineImage
            space_right={true}
            width="28px"
            src="/images/rise-run.svg" />
          ”), following such a picture:
        </VerticalChunk>
        <div class="spacer" />
        <Image
          class="pt-4 mb-4"
          width="300px"
          src="/images/44.svg" />
        <div class="spacer" />
        <VerticalChunk>
          In this context, note that, in physics, a
          one-dimensional displacement is measured as
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$\left(&#123;\te&#123;coordinate&#125; \atop \te&#123;at arrival&#125;&#125;\right)\,\, - \,\,\left(&#123;\te&#123;coordinate&#125; \atop \te&#123;at start&#125;&#125;\right)$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          in accordance, namely, with the coordinate
          differences “
          <NoBreak>
            <Math>
              $x_2 - x_1\!$
            </Math>
            ”,
          </NoBreak>
          {" "}“
          <Math>
            $y_2 - y_1\!$
          </Math>
          ”
          that appear in the slope formula.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (In order not to discriminate, maybe we should
          also include this picture:
        </VerticalChunk>
        <div class="spacer" />
        <Image
          class="pt-4 mb-4"
          src="/images/47.svg" />
        <div class="spacer" />
        <VerticalChunk>
          Then “rise” and “run” have their signs flipped,
          but the ratio rise-over-run is the same, as
          already mentioned.)
        </VerticalChunk>
        <div class="spacer" />
        <Pause />
        <VerticalChunk>
          <i>
            An Additional Miscellaneous Notation.
          </i>
          {" "}
          The slope formula is occasionally written
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$\te&#123;slope&#125; = \frac&#123;\Delta y&#125;&#123;\Delta x&#125;$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          where the foreign-looking symbols{" "}
          <Math>
            $\Delta x$
          </Math>
          ,
          {" "}
          <Math>
            $\Delta y$
          </Math>
          {" "}can be thought of as shorthands for
          “
          <NoBreak>
            <Math>
              $x_2 - x_1$
            </Math>
            ”,
          </NoBreak>
          {" "}“
          <NoBreak>
            <Math>
              $y_2 - y_1$
            </Math>
            ”
          </NoBreak>
          {" "}respectively. (Or,
          a little more exactly, as shorthands for the
          phrases “change in{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ”,
          </NoBreak>
          {" "}“change in{" "}
          <Math>
            $y$
          </Math>
          ”.)
        </VerticalChunk>
      </Section>
      <div class="spacer" />
      <Section>
        <VerticalChunk>
          <b>
            Solving for “rise” and “run”.
          </b>
          {" "}
          Multiplying
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$\te&#123;slope&#125; = &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          on each side by “run” gives
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$\te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          or “rise equals slope times run”. After which,
          dividing each side by “slope”, we find
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$\te&#123;run&#125; = &#123;\te&#123;rise&#125; \over \te&#123;slope&#125;&#125;$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          or “run equals rise over slope”. Thus:
        </VerticalChunk>
        <div class="spacer" />
        <Image src="/images/48.svg" />
        <div class="spacer" />
        <VerticalChunk>
          ...as can sometimes be useful to know.
        </VerticalChunk>
      </Section>
      <div class="spacer" />
      <Section>
        <VerticalChunk>
          <b>
            Slopes and Line Equations.
          </b>
          {" "}An equation of the
          form
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$y = ax + b$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          where{" "}
          <Math>
            $a$
          </Math>
          {" "}and{" "}
          <Math>
            $b$
          </Math>
          {" "}are constants defines a line in
          the Cartesian plane. E.g.:
        </VerticalChunk>
        <div class="spacer" />
        <Image
          width="640px"
          src="/images/49.svg" />
        <div class="spacer" />
        <VerticalChunk>
          Note that, assuming said{" "}
          <NoBreak>
            <Math>
              $y = ax + b$
            </Math>
            ,
          </NoBreak>
          {" "}one has
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$y = a\cdot 0 + b = b$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          at{" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "}so{" "}
          <Math>
            $b$
          </Math>
          {" "}is the height of the line at
          {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            .
          </NoBreak>
          {" "}(FYI, this height is called the
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          {" "}{" "}
          <Math>
            $y$
          </Math>
          -intercept
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          of the line, because{" "}
          <Math>
            $x = 0$
          </Math>
          {" "}is where the line
          crosses the{" "}
          <Math>
            $y$
          </Math>
          {" "}axis. But the point
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$(0, b)$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          is also sometimes called the
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          {" "}{" "}
          <Math>
            $y$
          </Math>
          -intercept
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          of the line, so the term “
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept”
          </NoBreak>
          {" "}might
          either refer to the value{" "}
          <Math>
            $b$
          </Math>
          {" "}or to the point
          {" "}
          <NoBreak>
            <Math>
              $(0,b)$
            </Math>
            ,
          </NoBreak>
          {" "}depending.) On the other hand, at
          {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            ,
          </NoBreak>
          {" "}we have
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$y = a\cdot 1 + b = a + b$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          so{" "}
          <Math>
            $y$
          </Math>
          {" "}increases by{" "}
          <Math>
            $a$
          </Math>
          {" "}between{" "}
          <Math>
            $x = 0$
          </Math>
          {" "}and
          {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            .
          </NoBreak>
          {" "}In fact,{" "}
          <Math>
            $y$
          </Math>
          {" "}increases by{" "}
          <Math>
            $a$
          </Math>
          {" "}each time
          {" "}
          <Math>
            $x$
          </Math>
          {" "}increases by 1, so, by our own definition of
          slope—the increase in{" "}
          <Math>
            $y$
          </Math>
          {" "}per unit increase in
          {" "}
          <Math>
            $x$
          </Math>
          —
          <Math>
            $a$
          </Math>
          {" "}is the slope of{" "}
          <Math>
            $y = ax + b$
          </Math>
          .
        </VerticalChunk>
        <div class="spacer" />
        <Example>
          <VerticalChunk>
            <b>
              Example 2.
            </b>
            {" "}
            The equation
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$y = 100x - 3$$
          </MathBlock>
          <div class="spacer" />
          <VerticalChunk>
            defines a line of slope 100.
          </VerticalChunk>
        </Example>
        <div class="spacer" />
        <VerticalChunk>
          On the other hand, an equation of the form
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$y = ax + b$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          cannot describe a vertical line, because{" "}
          <Math>
            $a$
          </Math>
          {" "}is
          the slope, while a vertical line has no slope, so
          what would{" "}
          <Math>
            $a$
          </Math>
          {" "}be equal to? Instead, a vertical
          line is described by an equation of the form
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$x = c$$
          <ImageLeft
            use_squiggle_on_mobile={false}
            offset_x="4rem"
            offset_y="1rem"
            src="/images/svg_vertical_line_equation.svg" />
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          (see Fig. 1) where{" "}
          <Math>
            $c \in \rr$
          </Math>
          {" "}is a constant, 
          similarly to the more familiar equation
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$y = b$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          for a horizontal line, where{" "}
          <Math>
            $b \in \rr$
          </Math>
          {" "}is a
          constant.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          One should also keep in mind that an equation can
          define a line without having either of the forms
          “
          <NoBreak>
            <Math>
              $y = ax + b$
            </Math>
            ”
          </NoBreak>
          {" "}or “
          <NoBreak>
            <Math>
              $x = c$
            </Math>
            ”.
          </NoBreak>
          {" "}For example,
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$x + y = 3$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          is equivalent to
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$y = 3 - x$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          and thus describes a line of{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept
          </NoBreak>
          {" "}{" "}
          <Math>
            $3$
          </Math>
          {" "}
          and slope{" "}
          <Math>
            $-1$
          </Math>
          .
          <ImageRight
            offset_x="2rem"
            line={1.0}
            src="/images/svg_3_plus_minus_one_times_x_cloud.svg" />
        </VerticalChunk>
      </Section>
      <div class="spacer" />
      <Section>
        <VerticalChunk>
          <b>
            Slopes and Units.
          </b>
          {" "}
          If the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axes
          </NoBreak>
          {" "}have units then a line's
          slope has units
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$&#123;\te&#123;$y$ axis units&#125; \over \te&#123;$x$ axis units&#125;&#125;$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          as should make sense, given that the slope is a
          change in{" "}
          <Math>
            $y$
          </Math>
          {" "}divided by a change in{" "}
          <Math>
            $x$
          </Math>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          For example, if the units on the{" "}
          <Math>
            $y$
          </Math>
          {" "}axis are
          meters (“m”) and the units on the{" "}
          <Math>
            $x$
          </Math>
          {" "}axis are
          seconds (“s”) then the slope has units
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$&#123;\te&#123;$y$ axis units&#125; \over \te&#123;$x$ axis units&#125;&#125; = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125;$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          also known as{" "}
          <i>
            meters per second
          </i>
          . This is
          precisely the case, for example, in the following
          graph, that purports to plot the height of a
          balloon, in meters, as a function of time elapsed,
          in seconds:
        </VerticalChunk>
        <div class="spacer" />
        <Image
          class="mt-[1.4em] mb-[1.2em]"
          src="/images/52.svg" />
        <div class="spacer" />
        <VerticalChunk>
          The slope of the graph is{" "}
          <Math>
            $0.75$
          </Math>
          {" "}{" "}
          <i>
            meters per
            second
          </i>
          {" "}because the balloon's height increases by
          three{" "}
          <i>
            meters
          </i>
          {" "}over the first four{" "}
          <i>
            seconds
          </i>
          {" "}(if
          you had noticed):
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$\te&#123;slope&#125; \left(\!= &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;\right) = &#123;3\te&#123;m&#125; \over 4\te&#123;s&#125;&#125; = 0.75\te&#123;m&#125;/\te&#123;s&#125;$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          In fact, the slope is the balloon's upward
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          velocity
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          since velocity is defined as
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          displacement over time
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          and this is precisely the form of the ratio “rise
          over run” for the current graph. (More generally,
          we have
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplay>
          “slope = velocity”
        </CentralDisplay>
        <div class="spacer" />
        <VerticalChunk>
          whenever the{" "}
          <Math>
            $y$
          </Math>
          {" "}axis has dimensions of length and
          the{" "}
          <Math>
            $x$
          </Math>
          {" "}axis has dimensions of time—whether the
          slope turns out to be{" "}
          <Math>
            $\te&#123;m&#125;/\te&#123;s&#125;$
          </Math>
          {" "}or{" "}
          <Math>
            $\te&#123;km&#125;/\te&#123;s&#125;$
          </Math>
          {" "}
          or km/hour, etc, depends on the exact units involved.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          Terminology-wise, slopes are often known as
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          rates of change
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          in the presence of units. More particularly, in the
          common case when the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}denotes time, the
          formula
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$\te&#123;slope&#125; = &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          can be rephrased as
        </VerticalChunk>
        <div class="spacer" />
        <MathBlock>
          $$“\rt&#123;0.1&#125;\te&#123;rate of change&#125; \,\,=\,\,
          &#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125; \over \te&#123;amount of time&#125;&#125;\rt&#123;0.1&#125;”$$
        </MathBlock>
        <div class="spacer" />
        <VerticalChunk>
          where “amount of change” is short for “amount of
          change on the{" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis”.
          </NoBreak>
          {" "}By extension, taking all
          three permutations of the slope formula into account
          gives us...
        </VerticalChunk>
        <div class="spacer" />
        <Image src="/images/53.svg" />
        <div class="spacer" />
        <VerticalChunk>
          ...these formulas, commonly useful in “applied”
          problems.
        </VerticalChunk>
        <div class="spacer" />
        <Example>
          <VerticalChunk>
            <b>
              Example 3.
            </b>
            {" "}
            The increase in height of the above balloon
            over a period of 5 seconds is
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$0.75\te&#123;m&#125;/\te&#123;s&#125; \times 5\te&#123;s&#125; = 3.75\te&#123;m&#125;$$
          </MathBlock>
          <div class="spacer" />
          <VerticalChunk>
            following the template
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$\begin&#123;array&#125;&#123;c&#125;
            \rt&#123;0.08&#125;
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;\rt&#123;0.05&#125;
            \end&#123;array&#125;$$
          </MathBlock>
          <div class="spacer" />
          <VerticalChunk>
            found in the second line of the table. (Indeed,
            {" "}
            <Math>
              $0.75$
            </Math>
            m
            <NoBreak>
              <Math>
                $/$
              </Math>
              s
            </NoBreak>
            {" "}is the “rate of change” of the
            balloon's height.)
          </VerticalChunk>
        </Example>
        <div class="spacer" />
        <Example>
          <VerticalChunk>
            <b>
              Example 4.
            </b>
            {" "}
            The amount of time required
            for the balloon to go up by (say){" "}
            <NoBreak>
              <Math>
                $4$
              </Math>
              m
            </NoBreak>
            {" "}is
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$\frac&#123;4\te&#123;m&#125;&#125;&#123;0.75\te&#123;m&#125;/\te&#123;s&#125;&#125;\! = 5.3333...\te&#123;s&#125;$$
            <ImageRight
              style="width:930px"
              offset_x="-6rem"
              src="/images/svg_ch2_ch_units_cloud.svg" />
          </MathBlock>
          <div class="spacer" />
          <VerticalChunk>
            following the template
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$\te&#123;“&#125;\rt&#123;0.1&#125;
            \te&#123;amount of time&#125; \,\,=\,\, \frac&#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125;&#125;&#123;\te&#123;rate of change&#125;&#125;
            \rt&#123;0.1&#125;\te&#123;”&#125;$$
          </MathBlock>
          <div class="spacer" />
          <VerticalChunk>
            found in the third line of the table.
          </VerticalChunk>
        </Example>
      </Section>
      <div class="spacer" />
      <Section divider={false}>
        <VerticalChunk>
          <b>
            Postscript: Units vs Dimensions.
          </b>
          {" "}
          Comparing
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplay>
          “the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}has dimensions of time”
        </CentralDisplay>
        <div class="spacer" />
        <VerticalChunk>
          with
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplay>
          “the{" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "}has units of seconds”
        </CentralDisplay>
        <div class="spacer" />
        <VerticalChunk>
          one could easily be tricked into thinking that a
          “dimension” is the same thing as a “unit”. In
          fact, dimensions are broader categories, such as,
          namely,
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          time
        </CentralDisplayItalic>
        <div class="spacer" />
        <CentralDisplayItalic>
          length
        </CentralDisplayItalic>
        <div class="spacer" />
        <CentralDisplayItalic>
          mass
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          each of which covers{" "}
          <i>
            several different
          </i>
          {" "}units.
          For example, in the “time” dimension, one finds
          individual units of the type
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          years, seconds, minutes, hours, days
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          (etc), while in
          the “length” dimension one finds
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          meters, kilometers, millimeters, yards, feet
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          (etc), and so on. (You can imagine some of the
          units found in the “mass” dimension, e.g..) On
          the other hand, dimensions can be multiplied and
          divided just like units. For example,
        </VerticalChunk>
        <div class="spacer" />
        <CentralDisplayItalic>
          length over time
        </CentralDisplayItalic>
        <div class="spacer" />
        <VerticalChunk>
          is another dimension, commonly known as...
          velocity!
        </VerticalChunk>
      </Section>
      <div class="spacer" />
      <Exercises labels={["0", "1", "2", "3"]}>
        <Exercise exercise_number={0}>
          <VerticalChunk>
            <b>
              Exercise 1.
            </b>
            {" "}
            True or false: Lines of slope{" "}
            <Math>
              $-1 \over 2$
            </Math>
            {" "}
            are perpendicular to lines of slope{" "}
            <Math>
              $2$
            </Math>
            .
          </VerticalChunk>
          <div class="spacer" />
          <Solution solution_number={0}>
            <VerticalChunk>
              This is true, as illustrated by the following pair of lines:
            </VerticalChunk>
            <div class="spacer" />
            <Image
              class="relative w-fit"
              src="/images/55.svg">
              <ImageRight
                use_squiggle_on_mobile={false}
                offset_x="-1.3rem"
                offset_y="5rem"
                src="/images/56.svg" />
              <ImageLeft
                use_squiggle_on_mobile={false}
                img_position="bottom"
                y="bottom"
                offset_y="0.5rem"
                offset_x="-7rem"
                src="/images/57.svg" />
            </Image>
            <div class="spacer" />
            <VerticalChunk>
              In more detail, the two triangles are related
              by a{" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}rotation and so, likewise,
              are the lines defined by their hypotenuses!
            </VerticalChunk>
            <div class="spacer" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              More generally, a line of slope{" "}
              <Math>
                $p$
              </Math>
              {" "}is
              perpendicular to a line of slope{" "}
              <NoBreak>
                <Math>
                  $-1/p$
                </Math>
                ,
              </NoBreak>
              {" "}for
              all{" "}
              <NoBreak>
                <Math>
                  $p \ne 0$
                </Math>
                .
              </NoBreak>
              {" "}By a similar drawing:
            </VerticalChunk>
            <div class="spacer" />
            <Image
              class="relative w-fit"
              src="/images/58.svg">
              <ImageRight
                use_squiggle_on_mobile={false}
                offset_x="-1.2rem"
                offset_y="7.2rem"
                src="/images/59.svg" />
              <ImageLeft
                use_squiggle_on_mobile={false}
                img_position="bottom"
                y="bottom"
                offset_y="0.5rem"
                offset_x="-5rem"
                src="/images/60.svg" />
            </Image>
            <div class="spacer" />
            <VerticalChunk>
              (If the axes are oriented the usual way then 
              the above drawing covers all the cases{" "}
              <Math>
                $p &gt; 0$
              </Math>
              ,
              whereas if we flip the two number axes to point
              down/left the above drawing covers all the cases 
              {" "}
              <Math>
                $p &lt; 0$
              </Math>
              —magic!)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={1}>
          <VerticalChunk>
            <b>
              Exercise 2.
            </b>
            {" "}
            Find the general equation of a line of slope
            {" "}
            <Math>
              $p$
            </Math>
            {" "}passing through a point{" "}
            <Math>
              $(x_0, y_0)$
            </Math>
            .
            (Hint: Start from the slope formula.)
          </VerticalChunk>
          <div class="spacer" />
          <Solution solution_number={1}>
            <VerticalChunk>
              A point{" "}
              <Math>
                $(x,y) \ne (x_0,y_0)$
              </Math>
              {" "}is on the
              line of slope{" "}
              <Math>
                $p$
              </Math>
              {" "}if and only if
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$ p = &#123;y - y_0 \over x - x_0&#125; $$
              <ImageLeft
                use_squiggle_on_mobile={false}
                offset_y="-7.1rem"
                offset_x="-5.5rem"
                img_position="top"
                src="/images/62.svg" />
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              because
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$ \,\,&#123;y - y_0 \over x - x_0&#125; $$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              is the slope of the line segment from
              {" "}
              <Math>
                $(x_0,y_0)$
              </Math>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $(x,y)$
                </Math>
                ,
              </NoBreak>
              {" "}and it is necessary
              and sufficient for this segment to have slope
              {" "}
              <Math>
                $p$
              </Math>
              {" "}in order for the point{" "}
              <Math>
                $(x,y)$
              </Math>
              {" "}to be on
              the line!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Unfortunately, the equation
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$ p = &#123;y - y_0 \over x - x_0&#125; $$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              is not an entirely satisfactory answer,
              because the point{" "}
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "}itself
              does not satisfy the equation. (We find
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$ p = &#123;0 \over 0&#125; $$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              if we plug in{" "}
              <NoBreak>
                <Math>
                  $x = x_0$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $y = y_0$
                </Math>
                ,
              </NoBreak>
              {" "}which is
              not a valid equality because the right-hand
              side is an undefined quantity.)
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Instead, multiplying
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$p = &#123;y - y_0 \over x - x_0&#125;$$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              on both sides by{" "}
              <NoBreak>
                <Math>
                  $x-x_0$
                </Math>
                ,
              </NoBreak>
              {" "}we find the
              fraction-less equation
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$p(x-x_0) = y-y_0$$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              which is satisfied by the point{" "}
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "}
              as well as by every other point on the line.
              This can be a final answer, and, pleasingly,
              has the form
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$\te&#123;“&#125;\te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;\te&#123;”&#125;$$
              <ImageRight
                offset_y="-0.5rem"
                offset_x="2.5rem"
                src="/images/svg_slope_times_run_equals_rise_cloud.svg" />
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              which can also make it easy to remember!
            </VerticalChunk>
            <div class="spacer" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              The answer we gave is more often written
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$y - y_0 = p(x - x_0)$$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              with the two sides of the equation swapped, or
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$y = p(x - x_0) + y_0$$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              with{" "}
              <Math>
                $y$
              </Math>
              {" "}isolated on the left-hand side. From
              there one can also distribute{" "}
              <Math>
                $p(x-x_0)$
              </Math>
              ,
              obtaining (after putting “
              <NoBreak>
                <Math>
                  $-px_0$
                </Math>
                ”
              </NoBreak>
              {" "}last)
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$y = px + y_0 - px_0$$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              which has the form
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$y = ax + b$$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              with{" "}
              <NoBreak>
                <Math>
                  $a = p$
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <Math>
                $b = y_0 - px_0$
              </Math>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={2}>
          <VerticalChunk>
            <b>
              Exercise 3.
            </b>
            {" "}
            Plot the vertical velocity of an object a
            mosquito whose height over time is given by
            this graph (use the same time interval as the
            graph):
          </VerticalChunk>
          <div class="spacer" />
          <Image
            class="pt-[22px] pb-[15px] pl-[90px]"
            src="/images/1.svg" />
          <div class="spacer" />
          <Solution solution_number={2}>
            <VerticalChunk>
              Here is the “official” graph of the (vertical)
              velocity:
            </VerticalChunk>
            <div class="spacer" />
            <Image
              class="pt-[21px] pb-[20px] pl-[46px]"
              src="/images/64.svg" />
            <div class="spacer" />
            <VerticalChunk>
              On each interval, the velocity is rate of
              change of the height, i.e., the{" "}
              <i>
                slope
              </i>
              {" "}of
              the height. For example, the rate of change
              of the height is
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$&#123;1\te&#123;m&#125; \over 1\te&#123;s&#125;&#125; = 1\te&#123;m&#125;/\te&#123;s&#125;$$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              between{" "}
              <NoBreak>
                <Math>
                  $-4$
                </Math>
                s
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $-3$
                </Math>
                s,
              </NoBreak>
              {" "}where the mosquito
              goes up by one meter during a one second
              period, so the vertical velocity is 1m
              <Math>
                $/$
              </Math>
              s
              for that time interval, etc.
            </VerticalChunk>
            <div class="spacer" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}
              As explained in Chapter 3, an empty circle of
              this type
            </VerticalChunk>
            <div class="spacer" />
            <Image src="/images/svg_empty_circle_alone.svg" />
            <div class="spacer" />
            <VerticalChunk>
              indicates a “missing” value. Specifically, in
              our case, the vertical velocity is{" "}
              <i>
                undefined
              </i>
              {" "}
              wherever the graph of the height has a sharp
              corner. (Because the slope of the graph is not
              well-defined at such corners.)
            </VerticalChunk>
            <div class="spacer" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 2.
              </i>
              {" "}
              For the time interval from{" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                s
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $2.5$
                </Math>
                s,
              </NoBreak>
              {" "}the
              slope is
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$ &#123;-2\rt&#123;0.05&#125;\te&#123;m&#125; \over 0.5\rt&#123;0.05&#125;\te&#123;s&#125;&#125; = -\rt&#123;0.07&#125;4\rt&#123;0.1&#125;\te&#123;m&#125;/\te&#123;s&#125; $$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              and similarly for the time interval from
              {" "}
              <NoBreak>
                <Math>
                  $2.5$
                </Math>
                s
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                s
              </NoBreak>
              {" "}the slope is
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$ &#123;2\rt&#123;0.05&#125;\te&#123;m&#125; \over 0.5\rt&#123;0.05&#125;\te&#123;s&#125;&#125; = 4\rt&#123;0.1&#125;\te&#123;m&#125;/\te&#123;s&#125; $$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $2/0.5 = 4$
                </Math>
                .
              </NoBreak>
              {" "}(Think:{" "}
              <i>
                how many times
              </i>
              {" "}
              does{" "}
              <Math>
                $0.5$
              </Math>
              {" "}go into{" "}
              <Math>
                $2$
              </Math>
              ?)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={3}>
          <VerticalChunk>
            <b>
              Exercise 4.
            </b>
            {" "}
            Digressing on the second-to-last equation
            in the solution to Exercise 2, explain why
          </VerticalChunk>
          <div class="spacer" />
          <MathBlock>
            $$ y_0 - px_0 $$
          </MathBlock>
          <div class="spacer" />
          <VerticalChunk>
            is the{" "}
            <NoBreak>
              <Math>
                $y$
              </Math>
              -intercept
            </NoBreak>
            {" "}of the line of slope{" "}
            <Math>
              $p$
            </Math>
            {" "}
            through the point{" "}
            <Math>
              $(x_0,y_0)$
            </Math>
            {" "}by using a drawing
            and “rise equals slope times run”.
          </VerticalChunk>
          <div class="spacer" />
          <Solution solution_number={3}>
            <VerticalChunk>
              E.g.:
            </VerticalChunk>
            <div class="spacer" />
            <Image src="/images/66.svg" />
            <div class="spacer" />
            <VerticalChunk>
              The rise from the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "}to{" "}
              <Math>
                $(x_0, y_0)$
              </Math>
              {" "}
              is{" "}
              <NoBreak>
                <Math>
                  $px_0$
                </Math>
                ,
              </NoBreak>
              {" "}as found by “rise equals slope times
              run”, implying that
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$y_0 - px_0$$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              is the{" "}
              <Math>
                $y$
              </Math>
              -intercept.
            </VerticalChunk>
            <div class="spacer" />
            <Pause />
            <VerticalChunk>
              <i>
                Note 1.
              </i>
              {" "}Our drawing makes some implicit
              assumptions, such as{" "}
              <Math>
                $p &gt; 0$
              </Math>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $x_0 &gt; 0$
                </Math>
                .
              </NoBreak>
              {" "}But
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$ px_0 $$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              is the rise from the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "}to
              {" "}
              <Math>
                $(x_0, y_0)$
              </Math>
              {" "}regardless of the sign of{" "}
              <Math>
                $p$
              </Math>
              {" "}or
              {" "}
              <Math>
                $x_0$
              </Math>
              {" "}(because{" "}
              <Math>
                $x_0$
              </Math>
              {" "}is the run in all cases),
              making
            </VerticalChunk>
            <div class="spacer" />
            <MathBlock>
              $$ y_0 - px_0 $$
            </MathBlock>
            <div class="spacer" />
            <VerticalChunk>
              the{" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "}in all cases.
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
    </Chapter>
  );
};

export default Article;