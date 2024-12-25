import ArticleTitle from "~/components/ArticleTitle";
import Container from "~/components/Container";
import Nav from "~/components/Nav";
import {
  Section,
  Example,
  NoBreak,
  CustomBlock,
  Pause,
  WriterlyBlankLine,
} from "~/components/Wrappers";
import { CenterDisplay, CentralItalicDisplay } from "~/components/Delimiters";
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

const Chapter2 = (props: any) => {
  return (
    <Container>
      <Nav />
      <ArticleTitle
        label={`Chapter 2: ` + props.title}
        on_mobile_label={`Chapter 2: ` + props.mobile_title}
      />
      {props.children}
    </Container>
  );
};

const Article = () => {
  return (
    <>
      <Chapter2 title="Slopes">
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Slopes.`}</b>
            {String.raw`
The `}
            <i>{String.raw`slope`}</i>
            {String.raw` of a line is a mathematical measure
of how “steep” a line is. Here are a few examples
(for an explanation of the values, see below):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/chapter_2_1.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`To explain, the slope of a line is...`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 
{y_2 - y_1 \over x_2 - x_1}\qquad\,\,\,\,\,\te{and}\,\,\,\,\,\qquad{y_1 - y_2 \over x_1 - x_2} 
{y_2 - y_1 \over x_2 - x_1}\qquad\,\,\,\,\,\te{and}\,\,\,\,\,\qquad{y_1 - y_2 \over x_1 - x_2} 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`the number of units the line goes up with each
unit to the right`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`...assuming that numbers on the `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
              {String.raw`-axis`}
            </NoBreak>
            {String.raw` increase
going up and that numbers on the `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`-axis`}
            </NoBreak>
            {String.raw` increase
going right, as is usually the case. One can also
describe slope as...`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`the amount of vertical change per unit of
horizontal change`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`...more elegant!`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`For example, the line below has slope 1, because
it goes up by `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` unit for each unit to the right:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image class="pl-[2px]" src="/images/slope_1_example.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`On the other hand, the line below has slope
`}
            <NoBreak>
              <Math>{String.raw`$
-0.5
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` because it goes up by `}
            <i>{String.raw`minus`}</i>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
0.5
$`}</Math>
            </NoBreak>
            {String.raw` units
with each unit to the right:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image
            class="pl-[19.5px]"
            src="/images/slope_0.5_example.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`(Etc.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Measuring Slope.`}</b>
            {String.raw`
The slope of a line is also the ratio of vertical
change to horizontal change between any two
distinct points `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
            </NoBreak>
            {String.raw` on the line:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image
            cloud_image={true}
            class="mt-6 mb-2"
            src="/images/31.svg"></Image>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 \te{slope} = {\te{vertical change from A to B} \over \te{horizontal change from A to B}} 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`Indeed, dividing the vertical change by the
horizontal change gives the per-horizontal-unit
vertical change.`}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`More precisely, if`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 A = (x_1, y_1) 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 B = (x_2, y_2) 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`then`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 x_2 - x_1 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 y_2 - y_1 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`are the horizontal _&_ the vertical change,
respectively, from `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` to `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` so`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
\te{slope} = {y_2 - y_1 \over x_2 - x_1}
$$`}
            <ImageRight offset_y="-1rem" src="/images/32.svg"></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`more succinctly. We call this the `}
            <i>{String.raw`slope formula`}</i>
            {String.raw`.`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 1.`}</b>
              {String.raw`
A line that passes through the points`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
A = (-2, 5)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`and`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
B = (4, 1)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`has slope`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
{1 - 5 \over 4 - (-2)} = {-4 \over 6} = - {2 \over 3}.
$$`}</MathBlock>
          </Example>
          <div class="spacer"></div>
          <VerticalChunk>
            <StarDivider></StarDivider>
            {String.raw`(The main thing to understand about Example
1 is that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 1 - 5 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is the vertical change from `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` to `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 4 - (-2) 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is the horizontal change from `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` to `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
            </NoBreak>
            {String.raw`.)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Sign Combinations.`}</b>
            {String.raw`
Technically, quantities such as`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 x_2 - x_1 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 y_2 - y_1 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`are not distances but `}
            <i>{String.raw`differences`}</i>
            {String.raw` (or,
equivalently, `}
            <i>{String.raw`changes`}</i>
            {String.raw`). A distance, by
definition, is a nonnegative number, while a
difference carries no such restriction.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`In particular, since`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 x_2 - x_1 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`can be positive or negative, while`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 y_2 - y_1 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`can be positive or negative or zero (more on
zero below), the following sign combinations
arise (lines of slope zero not included):`}</VerticalChunk>
          <div class="spacer"></div>
          <Table lines={true} cols={[120, 120, 120, 120]}>
            <tr>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
x_2 - x_1
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
y_2 - y_1
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:7px; margin-bottom:7px;"
                  width={50}
                  src="/images/33.svg"></img>
              </td>
              <td>
                <MathBlock>{String.raw`$$
{y_2-y_1 \over x_2-x_1}
$$`}</MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
+
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
+
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:7px; margin-bottom:7px;"
                  width={105}
                  src="/images/34.svg"></img>
              </td>
              <td>
                <MathBlock>{String.raw`$$
{+ \over +} = \,+
$$`}</MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
-
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
-
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:10px; margin-bottom:4px;"
                  width={105}
                  src="/images/35.svg"></img>
              </td>
              <td>
                <MathBlock>{String.raw`$$
{- \over -} = \,+
$$`}</MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
+
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
-
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:10px; margin-bottom:4px;"
                  width={105}
                  src="/images/36.svg"></img>
              </td>
              <td>
                <MathBlock>{String.raw`$$
{- \over +} = \,-
$$`}</MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
-
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <VerticalChunk>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
+
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </td>
              <td>
                <img
                  style="margin-top:10px; margin-bottom:4px;"
                  width={105}
                  src="/images/37.svg"></img>
              </td>
              <td>
                <MathBlock>{String.raw`$$
\frac{+}{-} = \,-
$$`}</MathBlock>
              </td>
            </tr>
          </Table>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`In fact, we `}
            <i>{String.raw`should`}</i>
            {String.raw` be able to algebraically
verify that the slope formula gives the same
answer if `}
            <NoBreak>
              <Math>{String.raw`$
(x_1, y_1)
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
(x_2, y_2)
$`}</Math>
            </NoBreak>
            {String.raw` swap
places, or, namely, to show that the fractions`}
            <ImageRight line={3.0} src="/images/38.svg"></ImageRight>
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 {y_2 - y_1 \over x_2 - x_1}\qquad\,\,\,\,\,\te{and}\,\,\,\,\,\qquad{y_1 - y_2 \over x_1 - x_2} 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`are somehow equal. But, indeed,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
 {y_2 - y_1 \over x_2 - x_1} = {-(y_2 - y_1) \over -(x_2 - x_1)} = {y_1 - y_2 \over x_1 - x_2} 
$$`}
            <ImageLeft offset_y="-3.5rem" src="/images/39.svg"></ImageLeft>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`which verifies this hypothesis. In particular,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 {y_2 - y_1 \over x_2 - x_1}\qquad\,\,\,\,\,\te{and}\,\,\,\,\,\qquad{y_1 - y_2 \over x_1 - x_2} 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`are equally valid incarnations of the slope
formula.`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Pathological Cases.`}</b>
            {String.raw`
If`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 x_2 - x_1 = 0 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`the slope formula “breaks down” in the sense that
division by 0 is undefined. This occurs, e.g., if
we attempt to measure the slope of a vertical
line:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/40.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`Indeed, vertical lines have `}
            <i>{String.raw`undefined`}</i>
            {String.raw` slope.
Moreover the bad case`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 x_2 - x_1 = 0 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`can also occur another way, namely if the points
`}
            <NoBreak>
              <Math>{String.raw`$
(x_1, y_1)
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
(x_2, y_2)
$`}</Math>
            </NoBreak>
            {String.raw` coincide. In that
case, more precisely, the slope formula evaluates
to`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
 \frac{y_2 - y_1}{x_2 - x_1} = \frac{0}{0} 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which could be anything. (Technically, “`}
            <NoBreak>
              <Math>{String.raw`$
0/0
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` is
undefined.) Indeed, infinitely many different
lines pass through any given point!`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`“Rise over Run”.`}</b>
            {String.raw`
Some people remember the slope formula as “slope
equals rise over run” (i.e., “`}
            <NoBreak>
              <Math>{String.raw`$
\te{slope} =
$`}</Math>
            </NoBreak>
            {String.raw``}
            <InlineImage
              space_right={true}
              width="28px"
              src="/images/rise-run.svg"></InlineImage>
            {String.raw`”), following such a picture:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image class="pt-4 mb-4" width="300px" src="/images/44.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`In this context, note that, in physics, a
one-dimensional displacement is measured as`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\left({\te{coordinate} \atop \te{at arrival}}\right)\,\, - \,\,\left({\te{coordinate} \atop \te{at start}}\right)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`in accordance, namely, with the coordinate
differences “`}
            <NoBreak>
              <Math>{String.raw`$
x_2 - x_1\!
$`}</Math>
              {String.raw`”,`}
            </NoBreak>
            {String.raw` “`}
            <NoBreak>
              <Math>{String.raw`$
y_2 - y_1\!
$`}</Math>
            </NoBreak>
            {String.raw`”
that appear in the slope formula.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`(In order not to discriminate, maybe we should
also include this picture:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image class="pt-4 mb-4" src="/images/47.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`Then “rise” and “run” have their signs flipped,
but the ratio rise-over-run is the same, as
already mentioned.)`}</VerticalChunk>
          <Pause></Pause>
          <VerticalChunk>
            {String.raw``}
            <i>{String.raw`An Additional Miscellaneous Notation.`}</i>
            {String.raw`
The slope formula is occasionally written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\te{slope} = \frac{\Delta y}{\Delta x}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`where the foreign-looking symbols `}
            <NoBreak>
              <Math>{String.raw`$
\Delta x
$`}</Math>
            </NoBreak>
            {String.raw`,
`}
            <NoBreak>
              <Math>{String.raw`$
\Delta y
$`}</Math>
            </NoBreak>
            {String.raw` can be thought of as shorthands for
“`}
            <NoBreak>
              <Math>{String.raw`$
x_2 - x_1
$`}</Math>
              {String.raw`”,`}
            </NoBreak>
            {String.raw` “`}
            <NoBreak>
              <Math>{String.raw`$
y_2 - y_1
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` respectively. (Or,
a little more exactly, as shorthands for the
phrases “change in `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`”,`}
            </NoBreak>
            {String.raw` “change in `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw`”.)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Solving for “rise” and “run”.`}</b>
            {String.raw`
Multiplying`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\te{slope} = {\te{rise} \over \te{run}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`on each side by “run” gives`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\te{slope} \times \te{run} = \te{rise}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or “rise equals slope times run”. After which,
dividing each side by “slope”, we find`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\te{run} = {\te{rise} \over \te{slope}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or “run equals rise over slope”. Thus:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/48.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`...as can sometimes be useful to know.`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Slopes and Line Equations.`}</b>
            {String.raw` An equation of the
form`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
y = ax + b
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`where `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
b
$`}</Math>
            </NoBreak>
            {String.raw` are constants defines a line in
the Cartesian plane. E.g.:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image width="640px" src="/images/49.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`Note that, assuming said `}
            <NoBreak>
              <Math>{String.raw`$
y = ax + b
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` one has`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
y = a\cdot 0 + b = b
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`at `}
            <NoBreak>
              <Math>{String.raw`$
x = 0
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` so `}
            <NoBreak>
              <Math>{String.raw`$
b
$`}</Math>
            </NoBreak>
            {String.raw` is the height of the line at
`}
            <NoBreak>
              <Math>{String.raw`$
x = 0
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` (FYI, this height is called the`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>
            {String.raw``}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw`-intercept`}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`of the line, because `}
            <NoBreak>
              <Math>{String.raw`$
x = 0
$`}</Math>
            </NoBreak>
            {String.raw` is where the line
crosses the `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw` axis. But the point`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(0, b)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is also sometimes called the`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>
            {String.raw``}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw`-intercept`}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`of the line, so the term “`}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
              {String.raw`-intercept”`}
            </NoBreak>
            {String.raw` might
either refer to the value `}
            <NoBreak>
              <Math>{String.raw`$
b
$`}</Math>
            </NoBreak>
            {String.raw` or to the point
`}
            <NoBreak>
              <Math>{String.raw`$
(0,b)
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` depending.) On the other hand, at
`}
            <NoBreak>
              <Math>{String.raw`$
x = 1
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` we have`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
y = a\cdot 1 + b = a + b
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`so `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw` increases by `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` between `}
            <NoBreak>
              <Math>{String.raw`$
x = 0
$`}</Math>
            </NoBreak>
            {String.raw` and
`}
            <NoBreak>
              <Math>{String.raw`$
x = 1
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` In fact, `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw` increases by `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` each time
`}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` increases by 1, so, by our own definition of
slope—the increase in `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw` per unit increase in
`}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw`—`}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` is the slope of `}
            <NoBreak>
              <Math>{String.raw`$
y = ax + b
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 2.`}</b>
              {String.raw`
The equation`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
y = 100x - 3
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`defines a line of slope 100.`}</VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`On the other hand, an equation of the form`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
y = ax + b
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`cannot describe a vertical line, because `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` is
the slope, while a vertical line has no slope, so
what would `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` be equal to? Instead, a vertical
line is described by an equation of the form`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
x = c
$$`}
            <ImageLeft
              use_squiggle_on_mobile={false}
              offset_x="4rem"
              offset_y="1rem"
              src="/images/svg_vertical_line_equation.svg"></ImageLeft>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(see Fig. 1) where `}
            <NoBreak>
              <Math>{String.raw`$
c \in \rr
$`}</Math>
            </NoBreak>
            {String.raw` is a constant, 
similarly to the more familiar equation`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
y = b
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for a horizontal line, where `}
            <NoBreak>
              <Math>{String.raw`$
b \in \rr
$`}</Math>
            </NoBreak>
            {String.raw` is a
constant.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`One should also keep in mind that an equation can
define a line without having either of the forms
“`}
            <NoBreak>
              <Math>{String.raw`$
y = ax + b
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` or “`}
            <NoBreak>
              <Math>{String.raw`$
x = c
$`}</Math>
              {String.raw`”.`}
            </NoBreak>
            {String.raw` For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x + y = 3
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is equivalent to`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
y = 3 - x
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`and thus describes a line of `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
              {String.raw`-intercept`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
3
$`}</Math>
            </NoBreak>
            {String.raw`
and slope `}
            <NoBreak>
              <Math>{String.raw`$
-1
$`}</Math>
            </NoBreak>
            {String.raw`.`}
            <ImageRight
              offset_x="2rem"
              line={1.0}
              src="/images/svg_3_plus_minus_one_times_x_cloud.svg"></ImageRight>
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Slopes and Units.`}</b>
            {String.raw`
If the `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`-`}
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
              {String.raw`-axes`}
            </NoBreak>
            {String.raw` have units then a line's
slope has units`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{\te{$y$ axis units} \over \te{$x$ axis units}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`as should make sense, given that the slope is a
change in `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw` divided by a change in `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`For example, if the units on the `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw` axis are
meters (“m”) and the units on the `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` axis are
seconds (“s”) then the slope has units`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{\te{$y$ axis units} \over \te{$x$ axis units}} = {\te{m} \over \te{s}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`also known as `}
            <i>{String.raw`meters per second`}</i>
            {String.raw`. This is
precisely the case, for example, in the following
graph, that purports to plot the height of a
balloon, in meters, as a function of time elapsed,
in seconds:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image class="mt-[1.4em] mb-[1.2em]" src="/images/52.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`The slope of the graph is `}
            <NoBreak>
              <Math>{String.raw`$
0.75
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <i>{String.raw`meters per
second`}</i>
            {String.raw` because the balloon's height increases by
three `}
            <i>{String.raw`meters`}</i>
            {String.raw` over the first four `}
            <i>{String.raw`seconds`}</i>
            {String.raw` (if
you had noticed):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\te{slope} \left(\!= {\te{rise} \over \te{run}}\right) = {3\te{m} \over 4\te{s}} = 0.75\te{m}/\te{s}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`In fact, the slope is the balloon's upward`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`velocity`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`since velocity is defined as`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`displacement over time`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`and this is precisely the form of the ratio “rise
over run” for the current graph. (More generally,
we have`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CenterDisplay>{String.raw`“slope = velocity”`}</CenterDisplay>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`whenever the `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw` axis has dimensions of length and
the `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` axis has dimensions of time—whether the
slope turns out to be `}
            <NoBreak>
              <Math>{String.raw`$
\te{m}/\te{s}
$`}</Math>
            </NoBreak>
            {String.raw` or `}
            <NoBreak>
              <Math>{String.raw`$
\te{km}/\te{s}
$`}</Math>
            </NoBreak>
            {String.raw`
or km/hour, etc, depends on the exact units involved.)`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`Terminology-wise, slopes are often known as`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`rates of change`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`in the presence of units. More particularly, in the
common case when the `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`-axis`}
            </NoBreak>
            {String.raw` denotes time, the
formula`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\te{slope} = {\te{rise} \over \te{run}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`can be rephrased as`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
“\rt{0.1}\te{rate of change} \,\,=\,\,
{\!\rt{0.15}\te{amount of change}\!\rt{0.1} \over \te{amount of time}}\rt{0.1}”
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`where “amount of change” is short for “amount of
change on the `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
              {String.raw`-axis”.`}
            </NoBreak>
            {String.raw` By extension, taking all
three permutations of the slope formula into account
gives us...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/53.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`...these formulas, commonly useful in “applied”
problems.`}</VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 3.`}</b>
              {String.raw`
The increase in height of the above balloon
over a period of 5 seconds is`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
0.75\te{m}/\te{s} \times 5\te{s} = 3.75\te{m}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`following the template`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\begin{array}{c}
\rt{0.08}
(\te{rate of change}) \times \te{(amount of time)}\\
= \te{(amount of change)}\rt{0.05}
\end{array}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`found in the second line of the table. (Indeed,
`}
              <NoBreak>
                <Math>{String.raw`$
0.75
$`}</Math>
              </NoBreak>
              {String.raw`m`}
              <NoBreak>
                <Math>{String.raw`$
/
$`}</Math>
                {String.raw`s`}
              </NoBreak>
              {String.raw` is the “rate of change” of the
balloon's height.)`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 4.`}</b>
              {String.raw`
The amount of time required
for the balloon to go up by (say) `}
              <NoBreak>
                <Math>{String.raw`$
4
$`}</Math>
                {String.raw`m`}
              </NoBreak>
              {String.raw` is`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              {String.raw`$$
\frac{4\te{m}}{0.75\te{m}/\te{s}}\! = 5.3333...\te{s}
$$`}
              <ImageRight
                clickable_on_desktop={true}
                children_x="29%"
                children_y="34.5%"
                offset_x="-6rem"
                src="/images/54.svg">
                <MathBlock>{String.raw`$$
{4 \over 0.75} = 5.3333...\qquad\qquad\,\,\,
$$`}</MathBlock>
              </ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`following the template`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\te{“}\rt{0.1}
\te{amount of time} \,\,=\,\, \frac{\!\rt{0.15}\te{amount of change}\!\rt{0.1}}{\te{rate of change}}
\rt{0.1}\te{”}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`found in the third line of the table.`}</VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section divider={false}>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Postscript: Units vs Dimensions.`}</b>
            {String.raw`
Comparing`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CenterDisplay>
            {String.raw`“the `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`-axis`}
            </NoBreak>
            {String.raw` has dimensions of time”`}
          </CenterDisplay>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw`with`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CenterDisplay>
            {String.raw`“the `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`-axis`}
            </NoBreak>
            {String.raw` has units of seconds”`}
          </CenterDisplay>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`one could easily be tricked into thinking that a
“dimension” is the same thing as a “unit”. In
fact, dimensions are broader categories, such as,
namely,`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`time`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`
`}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`length`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`
`}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`mass`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`each of which covers `}
            <i>{String.raw`several different`}</i>
            {String.raw` units.
For example, in the “time” dimension, one finds
individual units of the type`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`years, seconds, minutes, hours, days`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw`(etc), while in
the “length” dimension one finds`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`meters, kilometers, millimeters, yards, feet`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`(etc), and so on. (You can imagine some of the
units found in the “mass” dimension, e.g..) On
the other hand, dimensions can be multiplied and
divided just like units. For example,`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`length over time`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`is another dimension, commonly known as...
velocity!`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Exercises labels={["0", "1", "2", "3"]}>
          <Exercise>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 1.`}</b>
              {String.raw`
True or false: Lines of slope `}
              <NoBreak>
                <Math>{String.raw`$
-1 \over 2
$`}</Math>
              </NoBreak>
              {String.raw`
are perpendicular to lines of slope `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={0}>
              <VerticalChunk>{String.raw`This is true, as illustrated by the following pair of lines:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image class="relative w-fit" src="/images/55.svg">
                <ImageRight src="/images/56.svg">
                  <VerticalChunk>
                    {String.raw`offset`}
                    <i>{String.raw`y 5rem
offset`}</i>
                    {String.raw`x -1.3rem
use`}
                    <i>{String.raw`squiggle`}</i>
                    {String.raw`on_mobile false`}
                  </VerticalChunk>
                </ImageRight>
                <ImageLeft src="/images/57.svg">
                  <VerticalChunk>
                    {String.raw`offset`}
                    <i>{String.raw`x -7rem
offset`}</i>
                    {String.raw`y 0.5rem
y bottom
img`}
                    <i>{String.raw`position bottom
use`}</i>
                    {String.raw`squiggle`}
                    <i>{String.raw`on`}</i>
                    {String.raw`mobile false`}
                  </VerticalChunk>
                </ImageLeft>
              </Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In more detail, the two triangles are related
by a `}
                <NoBreak>
                  <Math>{String.raw`$
90^\circ
$`}</Math>
                </NoBreak>
                {String.raw` rotation and so, likewise,
are the lines defined by their hypotenuses!`}
              </VerticalChunk>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
More generally, a line of slope `}
                <NoBreak>
                  <Math>{String.raw`$
p
$`}</Math>
                </NoBreak>
                {String.raw` is
perpendicular to a line of slope `}
                <NoBreak>
                  <Math>{String.raw`$
-1/p
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` for
all `}
                <NoBreak>
                  <Math>{String.raw`$
p \ne 0
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` By a similar drawing:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image class="relative w-fit" src="/images/58.svg">
                <ImageRight src="/images/59.svg">
                  <VerticalChunk>
                    {String.raw`offset`}
                    <i>{String.raw`y 7.2rem
offset`}</i>
                    {String.raw`x -1.2rem
use`}
                    <i>{String.raw`squiggle`}</i>
                    {String.raw`on_mobile false`}
                  </VerticalChunk>
                </ImageRight>
                <ImageLeft src="/images/60.svg">
                  <VerticalChunk>
                    {String.raw`offset`}
                    <i>{String.raw`x -5rem
offset`}</i>
                    {String.raw`y 0.5rem
y bottom
img`}
                    <i>{String.raw`position bottom
use`}</i>
                    {String.raw`squiggle`}
                    <i>{String.raw`on`}</i>
                    {String.raw`mobile false`}
                  </VerticalChunk>
                </ImageLeft>
              </Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(If the axes are oriented the usual way then 
the above drawing covers all the cases `}
                <NoBreak>
                  <Math>{String.raw`$
p > 0
$`}</Math>
                </NoBreak>
                {String.raw`,
whereas if we flip the two number axes to point
down/left the above drawing covers all the cases 
`}
                <NoBreak>
                  <Math>{String.raw`$
p < 0
$`}</Math>
                </NoBreak>
                {String.raw`—magic!)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 2.`}</b>
              {String.raw`
Find the general equation of a line of slope
`}
              <NoBreak>
                <Math>{String.raw`$
p
$`}</Math>
              </NoBreak>
              {String.raw` passing through a point `}
              <NoBreak>
                <Math>{String.raw`$
(x_0, y_0)
$`}</Math>
              </NoBreak>
              {String.raw`.
(Hint: Start from the slope formula.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={1}>
              <VerticalChunk>
                {String.raw`A point `}
                <NoBreak>
                  <Math>{String.raw`$
(x,y) \ne (x_0,y_0)
$`}</Math>
                </NoBreak>
                {String.raw` is on the
line of slope `}
                <NoBreak>
                  <Math>{String.raw`$
p
$`}</Math>
                </NoBreak>
                {String.raw` if and only if`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
 p = {y - y_0 \over x - x_0} 
$$`}
                <ImageLeft
                  use_squiggle_on_mobile={false}
                  offset_y="-7.1rem"
                  offset_x="-7.2rem"
                  img_position="top"
                  src="/images/62.svg"></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`because`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
 \,\,{y - y_0 \over x - x_0} 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is the slope of the line segment from
`}
                <NoBreak>
                  <Math>{String.raw`$
(x_0,y_0)
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
(x,y)
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and it is necessary
and sufficient for this segment to have slope
`}
                <NoBreak>
                  <Math>{String.raw`$
p
$`}</Math>
                </NoBreak>
                {String.raw` in order for the point `}
                <NoBreak>
                  <Math>{String.raw`$
(x,y)
$`}</Math>
                </NoBreak>
                {String.raw` to be on
the line!`}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`Unfortunately, the equation`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
 p = {y - y_0 \over x - x_0} 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is not an entirely satisfactory answer,
because the point `}
                <NoBreak>
                  <Math>{String.raw`$
(x,y) = (x_0,y_0)
$`}</Math>
                </NoBreak>
                {String.raw` itself
does not satisfy the equation. (We find`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
 p = {0 \over 0} 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`if we plug in `}
                <NoBreak>
                  <Math>{String.raw`$
x = x_0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
y = y_0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which is
not a valid equality because the right-hand
side is an undefined quantity.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}>{String.raw`Instead, multiplying`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
p = {y - y_0 \over x - x_0}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`on both sides by `}
                <NoBreak>
                  <Math>{String.raw`$
x-x_0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` we find the
fraction-less equation`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
p(x-x_0) = y-y_0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which is satisfied by the point `}
                <NoBreak>
                  <Math>{String.raw`$
(x,y) = (x_0,y_0)
$`}</Math>
                </NoBreak>
                {String.raw`
as well as by every other point on the line.
This can be a final answer, and, pleasingly,
has the form`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
\te{“}\te{slope} \times \te{run} = \te{rise}\te{”}
$$`}
                <ImageRight
                  offset_y="-0.5rem"
                  offset_x="2.5rem"
                  src="/images/svg_slope_times_run_equals_rise_cloud.svg"></ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`which can also make it easy to remember!`}</VerticalChunk>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
The answer we gave is more often written`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
y - y_0 = p(x - x_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`with the two sides of the equation swapped, or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
y = p(x - x_0) + y_0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`with `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` isolated on the left-hand side. From
there one can also distribute `}
                <NoBreak>
                  <Math>{String.raw`$
p(x-x_0)
$`}</Math>
                </NoBreak>
                {String.raw`,
obtaining (after putting “`}
                <NoBreak>
                  <Math>{String.raw`$
-px_0
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` last)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
y = px + y_0 - px_0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`which has the form`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
y = ax + b
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`with `}
                <NoBreak>
                  <Math>{String.raw`$
a = p
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
b = y_0 - px_0
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 3.`}</b>
              {String.raw`
Plot the vertical velocity of an object a
mosquito whose height over time is given by
this graph (use the same time interval as the
graph):`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image
              class="pt-[22px] pb-[15px] pl-[90px]"
              src="/images/1.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={2}>
              <VerticalChunk>{String.raw`Here is the “official” graph of the (vertical)
velocity:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image
                class="pt-[21px] pb-[20px] pl-[46px]"
                src="/images/64.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`On each interval, the velocity is rate of
change of the height, i.e., the `}
                <i>{String.raw`slope`}</i>
                {String.raw` of
the height. For example, the rate of change
of the height is`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1\te{m} \over 1\te{s}} = 1\te{m}/\te{s}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`between `}
                <NoBreak>
                  <Math>{String.raw`$
-4
$`}</Math>
                  {String.raw`s`}
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
-3
$`}</Math>
                  {String.raw`s,`}
                </NoBreak>
                {String.raw` where the mosquito
goes up by one meter during a one second
period, so the vertical velocity is 1m`}
                <NoBreak>
                  <Math>{String.raw`$
/
$`}</Math>
                </NoBreak>
                {String.raw`s
for that time interval, etc.`}
              </VerticalChunk>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
As explained in Chapter 3, an empty circle of
this type`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_empty_circle_alone.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`indicates a “missing” value. Specifically, in
our case, the vertical velocity is `}
                <i>{String.raw`undefined`}</i>
                {String.raw`
wherever the graph of the height has a sharp
corner. (Because the slope of the graph is not
well-defined at such corners.)`}
              </VerticalChunk>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
For the time interval from `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                  {String.raw`s`}
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
2.5
$`}</Math>
                  {String.raw`s,`}
                </NoBreak>
                {String.raw` the
slope is`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
 {-2\rt{0.05}\te{m} \over 0.5\rt{0.05}\te{s}} = -\rt{0.07}4\rt{0.1}\te{m}/\te{s} 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and similarly for the time interval from
`}
                <NoBreak>
                  <Math>{String.raw`$
2.5
$`}</Math>
                  {String.raw`s`}
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                  {String.raw`s`}
                </NoBreak>
                {String.raw` the slope is`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
 {2\rt{0.05}\te{m} \over 0.5\rt{0.05}\te{s}} = 4\rt{0.1}\te{m}/\te{s} 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because `}
                <NoBreak>
                  <Math>{String.raw`$
2/0.5 = 4
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (Think: `}
                <i>{String.raw`how many times`}</i>
                {String.raw`
does `}
                <NoBreak>
                  <Math>{String.raw`$
0.5
$`}</Math>
                </NoBreak>
                {String.raw` go into `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw`?)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 4.`}</b>
              {String.raw`
Digressing on the second-to-last equation
in the solution to Exercise 2, explain why`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
 y_0 - px_0 
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`is the `}
              <NoBreak>
                <Math>{String.raw`$
y
$`}</Math>
                {String.raw`-intercept`}
              </NoBreak>
              {String.raw` of the line of slope `}
              <NoBreak>
                <Math>{String.raw`$
p
$`}</Math>
              </NoBreak>
              {String.raw`
through the point `}
              <NoBreak>
                <Math>{String.raw`$
(x_0,y_0)
$`}</Math>
              </NoBreak>
              {String.raw` by using a drawing
and “rise equals slope times run”.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={3}>
              <VerticalChunk>{String.raw`E.g.:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/66.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The rise from the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-intercept`}
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
(x_0, y_0)
$`}</Math>
                </NoBreak>
                {String.raw`
is `}
                <NoBreak>
                  <Math>{String.raw`$
px_0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` as found by “rise equals slope times
run”, implying that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
y_0 - px_0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-intercept.`}
              </VerticalChunk>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw` Our drawing makes some implicit
assumptions, such as `}
                <NoBreak>
                  <Math>{String.raw`$
p > 0
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
x_0 > 0
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` But`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
 px_0 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is the rise from the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-intercept`}
                </NoBreak>
                {String.raw` to
`}
                <NoBreak>
                  <Math>{String.raw`$
(x_0, y_0)
$`}</Math>
                </NoBreak>
                {String.raw` regardless of the sign of `}
                <NoBreak>
                  <Math>{String.raw`$
p
$`}</Math>
                </NoBreak>
                {String.raw` or
`}
                <NoBreak>
                  <Math>{String.raw`$
x_0
$`}</Math>
                </NoBreak>
                {String.raw` (because `}
                <NoBreak>
                  <Math>{String.raw`$
x_0
$`}</Math>
                </NoBreak>
                {String.raw` is the run in all cases),
making`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
 y_0 - px_0 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-intercept`}
                </NoBreak>
                {String.raw` in all cases.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
        </Exercises>
      </Chapter2>
    </>
  );
};
export default Article;
