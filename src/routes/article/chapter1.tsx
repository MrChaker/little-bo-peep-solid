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
import useScrollX from "~/hooks/useScrollX";
import useSaveScroll from "~/hooks/useSaveScroll";
const Chapter1 = (props: any) => {
  useScrollX();
  useSaveScroll();
  return (
    <>
      <ArticleTitle
        label={`Chapter 1: ` + props.title}
        on_mobile_label={`Chapter 1: ` + props.mobile_title}
      />
      {props.children}
    </>
  );
};

const Article = () => {
  return (
    <>
      <Chapter1 title="A Few Refreshers">
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Square Roots.`}</b>
            {String.raw`
You might remember that “minus times minus 
is plus” and that “plus times plus is plus”.
(Why? The enemy of my enemy is my friend.)
So any nonzero number multiplied by itself
is positive. For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(-2) \times (-2) = 4
$$`}</MathBlock>
          <div class="spacer"></div>
          <CentralDisplay>{String.raw`and`}</CentralDisplay>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
2 \times 2 = 4
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`are both positive. But `}
            <NoBreak>
              <Math>{String.raw`$
\sqrt{4}
$`}</Math>
            </NoBreak>
            {String.raw` is, by 
definition, the unique `}
            <i>{String.raw`nonnegative`}</i>
            {String.raw` 
solution to `}
            <NoBreak>
              <Math>{String.raw`$
x^2 = 4
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Hence, and whether 
you like it or not,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
\sqrt{(-2)^2} = 2
$$`}
            <ImageRight
              use_squiggle_on_mobile={false}
              padding="40px"
              offset_x="-3rem"
              offset_y="-1rem"
              src="/images/svg_cloud_minus_two_squared.svg"
            ></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`and, in particular, it is `}
            <i>{String.raw`not`}</i>
            {String.raw` true that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\sqrt{x^{2}} \rt{0.1} = \rt{0.1} x
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for every real number `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Instead we have`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\sqrt{x^{2}} \rt{0.1} = \rt{0.1} |x|
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for every real number `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` where `}
            <NoBreak>
              <Math>{String.raw`$
|x|
$`}</Math>
            </NoBreak>
            {String.raw` 
denotes the absolute value of `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`(Nb: If ever you want to indicate both 
solutions of the equation `}
            <NoBreak>
              <Math>{String.raw`$
x^2 = 4
$`}</Math>
            </NoBreak>
            {String.raw` you
can always use the notation “`}
            <NoBreak>
              <Math>{String.raw`$
\pm \sqrt{4}
$`}</Math>
              {String.raw`”.`}
            </NoBreak>
            {String.raw` 
This is what happens, for example, in the 
maybe-well-known formula`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x = {-b \pm \sqrt{b^2 - 4ac} \over 2a}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for the solutions to the quadratic equation
`}
            <NoBreak>
              <Math>{String.raw`$
ax^2 + bx + c = 0
$`}</Math>
            </NoBreak>
            {String.raw`.)`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`Now we can ponder, say,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\sqrt{0.5}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`whose value is—by definition—the unique
nonnegative solution to`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x^2 = 0.5.
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`As beginners, there's nothing wrong with 
trying to solve this equation by trial and
error. With `}
            <NoBreak>
              <Math>{String.raw`$
x = {1\over 4}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` for example,
we find`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x^2 = {1\over 4}\times{1\over 4} = {1\over 16}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`so `}
            <NoBreak>
              <Math>{String.raw`$
x = {1\over 4}
$`}</Math>
            </NoBreak>
            {String.raw` is not a solution of 
the equation, being apparently too small. 
Increasing `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` to `}
            <NoBreak>
              <Math>{String.raw`$
x = {1\over 2}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` say, we 
find`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x^2 = {1\over 2}\times{1\over 2} = {1\over 4}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which is better, since `}
            <NoBreak>
              <Math>{String.raw`$
1/4
$`}</Math>
            </NoBreak>
            {String.raw` is closer to `}
            <NoBreak>
              <Math>{String.raw`$
1/2
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` 
but still too small. Increasing `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` by `}
            <NoBreak>
              <Math>{String.raw`$
1/4
$`}</Math>
            </NoBreak>
            {String.raw` 
again, say, to `}
            <NoBreak>
              <Math>{String.raw`$
x = {3\over 4}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` we find`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x^2 = {3\over 4}\times{3\over 4} = {9\over 16}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which—surprise!—is actually pretty close to 
`}
            <NoBreak>
              <Math>{String.raw`$
1/2
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` as `}
            <NoBreak>
              <Math>{String.raw`$
1/2 = 8/16
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` And since `}
            <NoBreak>
              <Math>{String.raw`$
9/16 > 0.5
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` 
`}
            <NoBreak>
              <Math>{String.raw`$
\sqrt{0.5}
$`}</Math>
            </NoBreak>
            {String.raw` must be a little `}
            <i>{String.raw`less`}</i>
            {String.raw` than 
`}
            <NoBreak>
              <Math>{String.raw`$
{3\over 4} = 0.75
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`In last resort, and in reasonably good 
agreement with our observations, a calculator 
reveals that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\sqrt{0.5} = 0.7071067...
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`where the decimals trail off with no pattern. 
(This number is irrational.) Even so, the fact 
that `}
            <NoBreak>
              <Math>{String.raw`$
\sqrt{0.5}
$`}</Math>
            </NoBreak>
            {String.raw` is `}
            <i>{String.raw`greater`}</i>
            {String.raw` than `}
            <NoBreak>
              <Math>{String.raw`$
0.5
$`}</Math>
            </NoBreak>
            {String.raw` is 
often perceived as counterintuitive.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`You can think of it this way: multiplying a 
value by `}
            <NoBreak>
              <Math>{String.raw`$
0.7071
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` or approximately `}
            <NoBreak>
              <Math>{String.raw`$
\sqrt{0.5}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` 
is like taking `}
            <NoBreak>
              <Math>{String.raw`$
70.71\%
$`}</Math>
            </NoBreak>
            {String.raw` of that value—for 
example, say,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
605 \cdot 0.7071 = 427.7955
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is `}
            <NoBreak>
              <Math>{String.raw`$
70.71\%
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
605
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and so on—so if we 
multiply `}
            <i>{String.raw`twice`}</i>
            {String.raw` by `}
            <NoBreak>
              <Math>{String.raw`$
0.7071
$`}</Math>
            </NoBreak>
            {String.raw` we obtain 
“`}
            <NoBreak>
              <Math>{String.raw`$
70.71\%
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
70.71\%
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` and it just so happens 
that “`}
            <NoBreak>
              <Math>{String.raw`$
70.71\%
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
70.71\%
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` is close to 
`}
            <NoBreak>
              <Math>{String.raw`$
50\%
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`The point is: if “`}
            <NoBreak>
              <Math>{String.raw`$
X\%
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
X\%
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` equals `}
            <NoBreak>
              <Math>{String.raw`$
50\%
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` 
then, of course, `}
            <NoBreak>
              <Math>{String.raw`$
\rt{0.03}X > 50
$`}</Math>
              {String.raw`—that`}
            </NoBreak>
            {String.raw` much 
seems logical—and, with a little thought, the
same phenomenon explains why `}
            <NoBreak>
              <Math>{String.raw`$
\sqrt{0.5} > 0.5
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Fractions and Division.`}</b>
            {String.raw`
An elementary fraction, or division, such as`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{50 \over 2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`can be thought of in a few different ways:`}</VerticalChunk>
          <div class="spacer"></div>
          <List>
            <Item>
              {String.raw`Fifty halves (i.e., `}
              <NoBreak>
                <Math>{String.raw`$
50 \times {1\over 2}
$`}</Math>
              </NoBreak>
              {String.raw`).`}
            </Item>
            <Item>
              {String.raw`The size obtained when something of size 
fifty is divided into two equal parts 
(answer: `}
              <NoBreak>
                <Math>{String.raw`$
25
$`}</Math>
              </NoBreak>
              {String.raw`).`}
            </Item>
            <Item>
              {String.raw`The number of times that `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
              </NoBreak>
              {String.raw` goes into `}
              <NoBreak>
                <Math>{String.raw`$
50
$`}</Math>
              </NoBreak>
              {String.raw` 
(answer: `}
              <NoBreak>
                <Math>{String.raw`$
25
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` because it takes twenty-five
`}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
                {String.raw`'s`}
              </NoBreak>
              {String.raw` to make up `}
              <NoBreak>
                <Math>{String.raw`$
50
$`}</Math>
              </NoBreak>
              {String.raw`).`}
            </Item>
          </List>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`But `}
            <NoBreak>
              <Math>{String.raw`$
50/2
$`}</Math>
            </NoBreak>
            {String.raw` is a ratio of integers, which makes 
things particularly nice! For a ratio of 
decimals, such as, say,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{1 \over 0.01}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`our possible points of view are going to be
more restricted. Thankfully, however, we can 
still characterize this fraction as the 
answer to the question “how many times does 
`}
            <NoBreak>
              <Math>{String.raw`$
0.01
$`}</Math>
            </NoBreak>
            {String.raw` go into `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
              {String.raw`?”`}
            </NoBreak>
            {String.raw` as in the third option 
above. And, indeed,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{1 \over 0.01} \,=\,100
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`because `}
            <NoBreak>
              <Math>{String.raw`$
0.01
$`}</Math>
            </NoBreak>
            {String.raw` goes `}
            <NoBreak>
              <Math>{String.raw`$
100
$`}</Math>
            </NoBreak>
            {String.raw` times into `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` For 
that matter,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{ 1 \over 0.001} = 1000,\qquad{1 \over 0.0001} = 10000,\quad\,\,\,\,\textrm{(etc)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`by the same reasoning, which explains why 
dividing by smaller and smaller numbers produces 
larger and larger results (and, by extension, 
why dividing by `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` is undefined).`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Pause></Pause>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Note.`}</b>
            {String.raw` In general, the ratio of two decimal 
numbers can be turned into a ratio of integers 
by multiplying the ratio top and bottom by a 
suitable power of `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` E.g.:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{1.42 \over 0.8} = {100 \cdot 1.42 \over 100 \cdot 0.8} = {142 \over 80} = {71 \over 40}.
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`This example was chosen randomly, and, if you
allow, we would like to see how large `}
            <NoBreak>
              <Math>{String.raw`$
71/40
$`}</Math>
            </NoBreak>
            {String.raw` 
really is (one second!):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\begin{align}
{71 \over 40} \,&=\, {40 + 30 + 1 \over 40} \,=\, {40 \over 40} + {30 \over 40} + {1 \over 40}\\
\,&=\, 1 + {3 \over 4} + {1 \over 4}\!\cdot \!{1 \over 10}\up{1.5}\\
\,&=\, 1 + 0.75 + 0.025 = 1.775\up{1.5}
\end{align}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`...so we find, among others, that `}
            <NoBreak>
              <Math>{String.raw`$
71
$`}</Math>
            </NoBreak>
            {String.raw` is exactly
`}
            <NoBreak>
              <Math>{String.raw`$
77.5\%
$`}</Math>
            </NoBreak>
            {String.raw` greater than `}
            <NoBreak>
              <Math>{String.raw`$
40
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` (Interesting, no?)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Distributivity.`}</b>
            {String.raw`
As you might already know, a number that 
multiplies a sum can be brought “inside” the 
sum. For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
5(10 + 2) \,=\, 5\!\cdot\!10 \,+\, 5\!\cdot\!2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`(five times twelve equals fifty plus ten), or`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
a(b + c) = ab + ac
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`more generally. This property is known as the
`}
            <i>{String.raw`distributivity of multiplication over addition`}</i>
            {String.raw`,
or `}
            <i>{String.raw`distributivity`}</i>
            {String.raw` for short.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`(We might finally clarify that ‘`}
            <NoBreak>
              <Math>{String.raw`$
\cdot
$`}</Math>
              {String.raw`’`}
            </NoBreak>
            {String.raw` means
“times”, i.e., the same as ‘`}
            <NoBreak>
              <Math>{String.raw`$
\times
$`}</Math>
              {String.raw`’.`}
            </NoBreak>
            {String.raw` Moreover,
when we write`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
5\!\cdot\!10 \,+\, 5\!\cdot\!2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`we really mean`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(5\!\cdot\!10) + (5\!\cdot\!2)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`as opposed to something else, such as`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
((5\!\cdot\!10) + 5)\!\cdot\! 2,
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`because multiplication takes precedence over 
addition, by default.)`}</VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`A little more generally, one has such identities 
as`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)(C + D) \,=\, aC + bC + aD + bD
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`that come from multiplying every term of the first 
parenthesis with every term of the second 
parenthesis. Indeed,`}
            <ImageLeft
              offset_y="-10px"
              line={1.5}
              src="/images/325.svg"
            ></ImageLeft>
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)(C + D) = (a + b)C + (a + b)D
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`by one application of distributivity, while`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)C = aC + bC
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)D = aD + bD
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`by distributivity again.`}</VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 1.`}</b>
              {String.raw`
One has`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\begin{align}
(10 + 2)(10 + 4) \,&=\, 10\!\cdot\!10 \,+\, 10\!\cdot\!4 \,+\, 2\!\cdot\!10 \,+\, 2\!\cdot\!4\\
\,&=\, 100 \,+\, 40 \,+\, 20 \,+\, 8\\
\,&=\, 168
\end{align}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`so `}
              <NoBreak>
                <Math>{String.raw`$
12 \times 14 = 168
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 2.`}</b>
              {String.raw`
One has`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\begin{align}
(10 + 3)(10 + 3) \,&=\, 10\!\cdot\!10 \,+\, 10\!\cdot\!3 \,+\, 3\!\cdot\!10 \,+\, 3\!\cdot\!3\\
\,&=\, 100 \,+\, 30 \,+\, 30 \,+\, 9\\
\,&=\, 169
\end{align}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`so `}
              <NoBreak>
                <Math>{String.raw`$
13 \times 13 = 169
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(The fact that `}
            <NoBreak>
              <Math>{String.raw`$
13 \times 13
$`}</Math>
            </NoBreak>
            {String.raw` is exactly one 
greater than `}
            <NoBreak>
              <Math>{String.raw`$
12 \times 14
$`}</Math>
            </NoBreak>
            {String.raw` is a bit curious 
indeed.)`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`If we start from the afore-mentioned identity`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)(C + D) \,=\, aC + bC + aD + bD
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`and set `}
            <NoBreak>
              <Math>{String.raw`$
C = a
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
D = b
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` we find`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)(a + b) \,=\, aa + ba + ab + bb
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or, equivalently,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)^2 = a^2 + 2ab + b^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`since `}
            <NoBreak>
              <Math>{String.raw`$
(a + b)(a + b) = (a + b)^2
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
aa = a^2
$`}</Math>
            </NoBreak>
            {String.raw` 
and `}
            <NoBreak>
              <Math>{String.raw`$
bb = b^2
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` (This is the `}
            <i>{String.raw`binomial expansion 
of degree two`}</i>
            {String.raw`, but such terminology is not very 
important at this stage.)`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 3.`}</b>
              {String.raw`
By the last formula (or “binomial expansion
of degree two”),`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\begin{align}
\up{1} (10 + 3)^2 \,&=\, 10\!\cdot\!10 \,+\, 2\!\cdot\!3\!\cdot\!10 \,+\, 3\!\cdot\!3 \\
\up{1} \,&=\, 100 + 60 + 9 \\
\up{1} \,&=\, 169
\end{align}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`which agrees with Example 2.`}</VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`On the other hand, setting `}
            <NoBreak>
              <Math>{String.raw`$
C = a
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
D = -b
$`}</Math>
            </NoBreak>
            {String.raw` in`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)(C + D) = aC + aD + bC + bD
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`gives`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)(a + (-b)) = aa + a(-b) + ba + b(-b)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or, less pedantically,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)(a - b) = aa - ab + ba - bb
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a + b)(a - b) = a^2 - b^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`since `}
            <NoBreak>
              <Math>{String.raw`$
- ab + ba = 0
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
aa = a^2
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
bb = b^2
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Note that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
a^2 - b^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`a difference of squares`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`whence `}
            <i>{String.raw`a difference of squares can always be 
factored`}</i>
            {String.raw`. (Factored as `}
            <NoBreak>
              <Math>{String.raw`$
(a + b)(a - b)
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` that
is.) (PS: “Factored” means “written as a product”.)`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 4.`}</b>
              {String.raw`
Since`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
19 = 100 - 81 = 10^2 - 9^2
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`is a difference of squares, `}
              <NoBreak>
                <Math>{String.raw`$
19
$`}</Math>
              </NoBreak>
              {String.raw` can be 
factored. (On the other hand `}
              <NoBreak>
                <Math>{String.raw`$
19
$`}</Math>
              </NoBreak>
              {String.raw` is a prime 
number, but nevermind.)`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 5.`}</b>
              {String.raw`
The algebraic expression`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
1 - x^2
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`can be factored, because`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
1 = 1^2
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`implies that`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
1 - x^2
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`truly is “a difference of squares”. And, indeed,`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
1 - x^2 = (1 - x)(1 + x)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`as per “`}
              <NoBreak>
                <Math>{String.raw`$
\rt{0.04}a^2 - b^2 = (a - b)(a + b)
$`}</Math>
              </NoBreak>
              {String.raw`”.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`In relation to distributivity, we should also 
mention the simple but important fact that 
multiplying a difference by `}
            <NoBreak>
              <Math>{String.raw`$
-1
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <i>{String.raw`reverses`}</i>
            {String.raw` the 
difference. That is,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(-1)(a - b) \,=\, b - a
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or, for short,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
-(a - b) \,=\, b - a
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`because, indeed,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\begin{align}
(-1)(a - b) \,&=\, (-1)(a + (-b)) \\
\,&=\, (-1)a + (-1)(-b) \\
\,&=\, -a + b
\end{align}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`by distributivity (used in the second step).`}</VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 6.`}</b>
              {String.raw`
We have `}
              <NoBreak>
                <Math>{String.raw`$
-(10 - 3) = 3 - 10
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` 
(Because `}
              <NoBreak>
                <Math>{String.raw`$
-7 = -7
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` as it would be, haha.)`}
            </VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section divider={false}>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Epilogue.`}</b>
            {String.raw` Do you remember the near miss between`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
12\cdot 14 \,=\, 168
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
13 \cdot 13 \,=\, 13^2 \,=\, 169
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`...? Well if you observe, additionally, that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\begin{align}
11\,\cdot\,13 &= 12^2 - 1\\
10\,\cdot\,12 &= 11^2 - 1\\
9\,\cdot\,11 &= 10^2 - 1
\end{align}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`(etc) you might become suspicious of a pattern! 
But the mystery is rather thin: we have`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(n - 1)(n + 1) \,=\, n^2 - 1
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for `}
            <i>{String.raw`every`}</i>
            {String.raw` real number `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` because of the 
formula`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(a - b)(a + b) \,=\, a^2 - b^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`for a difference of squares!`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Vocabulary.`}</b>
            {String.raw`
A pair of algebraic expressions of the form`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
a + b,\, a - b
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is called a `}
            <i>{String.raw`conjugate pair`}</i>
            {String.raw`. For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
n + 1,\, n - 1
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is a conjugate pair, as is`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\sqrt{3} + \sqrt{2},\,\, \sqrt{3} - \sqrt{2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and so on. (Generally speaking, conjugate pairs
are good things to multiply together.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Exercises labels={["0", "1"]}>
          <Exercise exercise_number={0}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 1.`}</b>
              {String.raw`
True or false (and, if possible, explain):`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Grid
              center_on_overflow={true}
              sm_cutoff={520}
              sm_cols={2}
              cols={3}
            >
              <Item>
                {String.raw`a. `}
                <NoBreak>
                  <Math>{String.raw`$
 0.9^2 < 0.9 
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`b. `}
                <NoBreak>
                  <Math>{String.raw`$
 \sqrt{0.01} = 0.1 
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`c. `}
                <NoBreak>
                  <Math>{String.raw`$
 \sqrt[2]{\up{0.8}\sqrt[3]{2}} = \sqrt[3]{\up{0.8}\sqrt[2]{2}} 
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`d. `}
                <NoBreak>
                  <Math>{String.raw`$
{\sqrt{2} \over \up{0.55}2} = \sqrt{0.5}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`e. `}
                <NoBreak>
                  <Math>{String.raw`$
 {1 \over \sqrt{2}} = \sqrt{0.5} 
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`f. `}
                <NoBreak>
                  <Math>{String.raw`$
 2^{30} > 1000^3 
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`g. `}
                <NoBreak>
                  <Math>{String.raw`$
 {1 \over 0.95} > 1.05 
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`h. `}
                <NoBreak>
                  <Math>{String.raw`$
 (-1)^{101} = -1 
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`i. `}
                <NoBreak>
                  <Math>{String.raw`$
 {100 \over \up{0.5}99} < {101 \over \up{0.5}100} 
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
            </Grid>
            <div class="spacer"></div>
            <Solution solution_number={0}>
              <VerticalChunk>{String.raw`Part by part:`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>{String.raw`a. (True) We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
0.9^2 = {9 \over 10}\cdot{9 \over 10} = {81 \over 100} = 0.81
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and `}
                <NoBreak>
                  <Math>{String.raw`$
0.81 < 0.9
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>{String.raw`b. (True) We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
0.1^2 = {1 \over 10} \cdot {1 \over 10} = {1 \over 100} = 0.01,
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and `}
                <NoBreak>
                  <Math>{String.raw`$
0.1
$`}</Math>
                </NoBreak>
                {String.raw` is nonnegative, so `}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt{0.01} = 0.1
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw`c. (True) In fact, 
`}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt[2]{\up{0.75}\sqrt[3]{2}}
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt[3]{\up{0.75}\sqrt[2]{2}}
$`}</Math>
                </NoBreak>
                {String.raw` are 
both equal to `}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt[6]{\up{0.6}2}
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` To 
convince yourself, note that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
\begin{align}
&\,\, (\sqrt[2]{\up{0.75}\sqrt[3]{2}}\rt{0.1})^6 \\
=&\,\, \up{1.3}
\sqrt[2]{\up{0.75}\sqrt[3]{2}} \times
\sqrt[2]{\up{0.75}\sqrt[3]{2}} \times
\sqrt[2]{\up{0.75}\sqrt[3]{2}} \times
\sqrt[2]{\up{0.75}\sqrt[3]{2}} \times
\sqrt[2]{\up{0.75}\sqrt[3]{2}} \times
\sqrt[2]{\up{0.75}\sqrt[3]{2}}\qquad\\
=&\,\, \up{1.3}
(\gbk\sqrt[2]{\up{0.75}\sqrt[3]{2}} \times
\sqrt[2]{\up{0.75}\sqrt[3]{2}}\rt{0.11}) \times
(\gbk\sqrt[2]{\up{0.75}\sqrt[3]{2}} \times
\sqrt[2]{\up{0.75}\sqrt[3]{2}}\rt{0.11}) \times
(\gbk\sqrt[2]{\up{0.75}\sqrt[3]{2}} \times
\sqrt[2]{\up{0.75}\sqrt[3]{2}}\rt{0.11}) \\
=& \,\, \up{1.3} (\sqrt[3]{\up{0.64}2}\rt{0.1}) \times (\sqrt[3]{\up{0.64}2}\rt{0.1}) \times
(\sqrt[3]{\up{0.64}2}\rt{0.1})\\
=& \,\, \up{1.4} 2
\end{align}
$$`}
                <ImageLeft offset_y="0.8rem" src="/images/17.svg"></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
\begin{align}
&\,\, (\sqrt[3]{\up{0.75}\sqrt[2]{2}}\rt{0.1})^6 \\
=&\,\, \up{1.3}
\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}}\\
=& \,\, \up{1.3}
(\gbk\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}}\rt{0.11}) \times
(\gbk\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}} \times
\sqrt[3]{\up{0.75}\sqrt[2]{2}}\rt{0.11})\\
=&\,\, \up{1.3}
\sqrt[2]{\up{0.65}2} \times \sqrt[2]{\up{0.65}2}\\
=&\,\, \up{1.4} 2
\end{align}
$$`}
                <ImageLeft src="/images/18.svg"></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`so `}
                <NoBreak>
                  <Math>{String.raw`$
(\sqrt[2]{\up{0.76}\sqrt[3]{2}}\rt{0.1})^6 = 
(\sqrt[3]{\up{0.76}\sqrt[2]{2}}\rt{0.1})^6 = 2
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Technically, however, a number `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` such that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x^6 = 2
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is not necessarily `}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt[6]{\up{0.6}2}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
because `}
                <NoBreak>
                  <Math>{String.raw`$
x = -\sqrt[6]{\up{0.6}2}
$`}</Math>
                </NoBreak>
                {String.raw` satisfies 
this equation as well!`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`The last step, therefore, is to note that
`}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt[2]{\up{0.76}\sqrt[3]{2}}
$`}</Math>
                </NoBreak>
                {String.raw` and
`}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt[3]{\up{0.76}\sqrt[2]{2}}
$`}</Math>
                </NoBreak>
                {String.raw` are both 
`}
                <i>{String.raw`nonnegative`}</i>
                {String.raw` numbers (taken as obvious),
and which implies that they are the `}
                <i>{String.raw`unique
nonnegative`}</i>
                {String.raw` solution to `}
                <NoBreak>
                  <Math>{String.raw`$
x^6 = 2
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>{String.raw`d. (True) In general,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\sqrt{x} \over \sqrt{y}} = \sqrt{\up{0.7}x \over y}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for all `}
                <NoBreak>
                  <Math>{String.raw`$
x \geq 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
y > 0
$`}</Math>
                </NoBreak>
                {String.raw` (you need each 
root to be defined), so`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\sqrt{2} \over 2} = {\sqrt{2} \over \sqrt{4}} = \sqrt{\up{0.8}2 \over 4} = \sqrt{0.5}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...ta-daa!`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw` One can also proceed by “direct
verification”:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\left({\sqrt{2} \over 2}\right)^{\!2} = {\sqrt{2} \over 2}\cdot{\sqrt{2} \over 2}
= {\sqrt{2}\cdot\sqrt{2} \over 4} = {2 \over 4} = 0.5.
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(This, together with the fact that 
`}
                <NoBreak>
                  <Math>{String.raw`$
{\sqrt{2} \over 2}
$`}</Math>
                </NoBreak>
                {String.raw` is not negative, 
establishes that `}
                <NoBreak>
                  <Math>{String.raw`$
{\sqrt{2} \over 2} = 
\sqrt{0.5}
$`}</Math>
                </NoBreak>
                {String.raw`.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw`e. (True) Using the 
“`}
                <NoBreak>
                  <Math>{String.raw`$
{\sqrt{x} \over \sqrt{y}} = 
\sqrt{\up{0.7}x \over y}
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` identity:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over \sqrt{2}} = {\sqrt{1} \over \sqrt{2}} = \sqrt{\up{0.8}1 \over 2} = \sqrt{0.5}.
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Or by direct verification:`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\left({1 \over \sqrt{2}}\right)^{\!2} = {1 \over \sqrt{2}}\cdot{1 \over \sqrt{2}}
= {1 \over \sqrt{2}\cdot\sqrt{2}} = {1 \over 2} = 0.5.
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(And `}
                <NoBreak>
                  <Math>{String.raw`$
1 \over \sqrt{2}
$`}</Math>
                </NoBreak>
                {String.raw` is nonnegative.)
Or by reducing to part d:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over \sqrt{2}} = {\sqrt{2} \over \sqrt{2} \cdot \sqrt{2}} = {\sqrt{2} \over 2}.
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(The point being: we already know that 
`}
                <NoBreak>
                  <Math>{String.raw`$
{\sqrt{2} \over 2} = \sqrt{0.5}
$`}</Math>
                </NoBreak>
                {String.raw` by part d.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>{String.raw`f. (True) We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
2^{30} = 2^{10} \times 2^{10} \times 2^{10} = (2^{10})^3
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(2^{10})^3 = (1024)^3 > 1000^3.
$$`}</MathBlock>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
The first ten or so powers of `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw` are worth
knowing by heart (here's `}
                <i>{String.raw`eleven`}</i>
                {String.raw` powers, mind
you):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{array}{c|c}
\,\,\,\,n\,\,\,\, & 2^n\dn{0.3} \\ \hline
0 & 1 \up{1.1}\\
1 & 2 \\
2 & 4 \\
3 & 8 \\
4 & 16 \\
5 & 32 \\
6 & 64 \\
7 & 128 \\
8 & 256 \\
9 & 512 \\
10 & 1024
\end{array}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Among which, the fact that`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
2^{10} \approx 10^3
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`can be particularly useful to know! For 
example, if a 1-millimeter-thick napkin is 
folded `}
                <NoBreak>
                  <Math>{String.raw`$
50
$`}</Math>
                </NoBreak>
                {String.raw` times over, doubling the width 
each time, one obtains something of 
thickness`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
2^{50}\fw\te{mm} = (2^{10})^5\fw\te{mm} \approx (10^3)^5\fw\te{mm} = 10^{15}\fw\te{mm}.
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`As`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
1\fw\te{mm} = 10^{-6}\fw\te{km}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`this is`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
10^{9}\fw\te{km}
$$`}
                <ImageRight
                  use_squiggle_on_mobile={false}
                  children_x="39%"
                  children_y="48%"
                  offset_y="-1rem"
                  offset_x="-4rem"
                  src="/images/104.svg"
                >
                  <VerticalChunk>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
10^{15}\fw\te{mm} = 10^{15}\fw(10^{-6}\fw\te{km}) = \dots
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`or `}
                <i>{String.raw`one billion`}</i>
                {String.raw` kilometers. By 
comparison, the distance from the Earth to
the Sun is a mere `}
                <NoBreak>
                  <Math>{String.raw`$
150
$`}</Math>
                </NoBreak>
                {String.raw` million kilometers.
(The point being: that we could go from the 
relatively mysterious`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\te{“}2^{50}\fw\te{mm}\te{”}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`to the relatively less mysterious`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\te{“}\fw10^{15}\te{mm}\te{”}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by the approximation `}
                <NoBreak>
                  <Math>{String.raw`$
2^{10} \approx 10^3
$`}</Math>
                </NoBreak>
                {String.raw`.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>{String.raw`g. (True) As an inequality can be multiplied 
on both sides by a positive number while 
preserving the inequality, one has`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
& {1 \over 0.95} > 1.05\\
\iff & 1 > 1.05 \cdot 0.95\up{1.4}\\
\iff & 1 > (1 + 0.05)(1 - 0.05)\up{1.4}\\
\iff & 1 > 1 - 0.05^2\up{1.4}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(using the fact that `}
                <NoBreak>
                  <Math>{String.raw`$
(1+x)(1-x) = 1-x^2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` of`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\te{“}\,(a+b)(a-b) = a^2-b^2\,\te{”}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`fame), and since the `}
                <i>{String.raw`last`}</i>
                {String.raw` inequality is true,
the `}
                <i>{String.raw`first`}</i>
                {String.raw` inequality is true! (Recall that
“`}
                <NoBreak>
                  <Math>{String.raw`$
\!\iff\!
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` means “if and only if”.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 3.`}</i>
                {String.raw`
More generally, even though`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 1 - \epsilon} > 1 + \epsilon
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for any small `}
                <NoBreak>
                  <Math>{String.raw`$
\epsilon > 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` the number 
`}
                <NoBreak>
                  <Math>{String.raw`$
1 + \epsilon
$`}</Math>
                </NoBreak>
                {String.raw` remains a good approximation to 
`}
                <NoBreak>
                  <Math>{String.raw`$
{1 \over 1 - \epsilon}
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` For example,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 0.99}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is a good approximation to`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 0.99}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`while`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 0.999}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is a good approximation to`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 0.999},
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`etc.`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw`h. (True) Here are the first few powers of `}
                <NoBreak>
                  <Math>{String.raw`$
-1
$`}</Math>
                </NoBreak>
                {String.raw`
(note how each additional multiplication by `}
                <NoBreak>
                  <Math>{String.raw`$
-1
$`}</Math>
                </NoBreak>
                {String.raw`
simply changes the sign of the previous result):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Grid place_items="end" cols={3}>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1)^1 = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1) = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 -1 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1)^2 = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1)\times (-1) = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 1 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1)^3 = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1)\times(-1)\times (-1) = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 -1 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1)^4 = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1)\times(-1)\times(-1)\times(-1) = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 1 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 (-1)^5 = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 \,\,\,(-1)\times(-1)\times(-1)\times(-1)\times(-1) = 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
 -1 
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
              </Grid>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(Etc.) Obviously, even powers of `}
                <NoBreak>
                  <Math>{String.raw`$
(-1)
$`}</Math>
                </NoBreak>
                {String.raw` are 
equal to `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` while odd powers of `}
                <NoBreak>
                  <Math>{String.raw`$
(-1)
$`}</Math>
                </NoBreak>
                {String.raw` are
equal to `}
                <NoBreak>
                  <Math>{String.raw`$
-1
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` As `}
                <NoBreak>
                  <Math>{String.raw`$
101
$`}</Math>
                </NoBreak>
                {String.raw` is odd, `}
                <NoBreak>
                  <Math>{String.raw`$
(-1)^{101}
$`}</Math>
                </NoBreak>
                {String.raw` 
is `}
                <NoBreak>
                  <Math>{String.raw`$
-1
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>{String.raw`i. (False) We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{100 \over 99} = {99 + 1 \over 99} = 1 + {1 \over 99}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{101 \over 100} = {100 + 1 \over 100} = 1 + {1 \over 100}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`so the smaller of the two fractions is `}
                <NoBreak>
                  <Math>{String.raw`$
{101 
\over 100}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` since `}
                <NoBreak>
                  <Math>{String.raw`$
{1 \over 100} < {1 \over 
99}
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 4.`}</i>
                {String.raw`
The difference`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 99} - {1 \over 100}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is interesting in its own right, being 
connected to a famous infinite sum. To 
visualize this sum, picture a hare poised at 
`}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                </NoBreak>
                {String.raw` on the number line. This hare runs
forward by one unit and backwards by half a
unit, stopping at the number`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
1 - {1\over 2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by virtue of this back-and-forth movement. 
The hare then proceeds to run forward by 
`}
                <i>{String.raw`half`}</i>
                {String.raw` a unit and back by a `}
                <i>{String.raw`third`}</i>
                {String.raw` of a unit,
stopping at`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
&\, \left(1 - {1 \over 2}\right) \\
+ \,&\, \left({1 \over 2} - {1 \over 3}\right)_{\color{white} a_{a_a}\!\!\!\!\!\!\!\!\!\!} \\
\hline
= \,&\, \left(1 - {1 \over 3}\right)^{\color{white} a^{a^a}}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`for another break. Keeping with this pattern,
the hare then stops at`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
&\, \left(1 - {1 \over 2}\right)\\
+ \,&\, \left({1 \over 2} - {1 \over 3}\right)\\
+ \,&\, \left({1 \over 3} - {1 \over 4}\right)_{\color{white} a_{a_a}\!\!\!\!\!\!\!\!\!\!}\\
\hline
= \,&\, \left(1 - {1 \over 4}\right)^{\color{white} a^{a^a}}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and then at`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
&\, \left(1 - {1 \over 2}\right)\\
+ \,&\, \left({1 \over 2} - {1 \over 3}\right)\\
+ \,&\, \left({1 \over 3} - {1 \over 4}\right)\\
+ \,&\, \left({1 \over 4} - {1 \over 5}\right)_{\color{white} a_{a_a}\!\!\!\!\!\!\!\!\!\!}\\
\hline
= \,&\, \left(1 - {1 \over 5}\right)^{\color{white} a^{a^a}}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and so on.
Clearly, the successive positions at which 
the hare stops are approaching the number `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw`
from the left, pointing to the fact that the 
`}
                <i>{String.raw`infinite`}</i>
                {String.raw` sum`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
&\, \left(1 - {1 \over 2}\right)\\
+ \,&\, \left({1 \over 2} - {1 \over 3}\right)\\
+ \,&\, \left({1 \over 3} - {1 \over 4}\right)\\
+ \,&\, \left({1 \over 4} - {1 \over 5}\right)\\
+ \,&\, \left({1 \over 5} - {1 \over 6}\right)\\
+ \,&\, \left({1 \over 6} - {1 \over 7}\right)\\
+ \,&\, \,\,\,\,\,\,\,\,\dots\up{1.3}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is “equal” (in some sense) to `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` But how 
much, exactly, is the `}
                <NoBreak>
                  <Math>{String.raw`$
n
$`}</Math>
                  {String.raw`-th`}
                </NoBreak>
                {String.raw` term`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over n} - {1 \over n+1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`of the sum? (By the way, this `}
                <NoBreak>
                  <Math>{String.raw`$
n
$`}</Math>
                  {String.raw`-th`}
                </NoBreak>
                {String.raw` term 
is the difference
`}
                <NoBreak>
                  <Math>{String.raw`$
{1 \over 99} - {1 \over 100}
$`}</Math>
                </NoBreak>
                {String.raw` for `}
                <NoBreak>
                  <Math>{String.raw`$
n = 99
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
which is how we came to be reminded of this 
infinite sum in the first place.) Well...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
\begin{align}
{1 \over n} - {1 \over n+1} &= {1 \over n}\cdot{n+1 \over n+1}\, - \,
{1 \over n+1}\cdot{n \over n}\up{1.5}\\
&= {n+1 \over n(n+1)} - {n \over n(n+1)}\up{1.5}\\
&= {1 \over n(n+1)}\up{1.5}
\end{align}
$$`}
                <ImageRight
                  children_y="30%"
                  children_x="30%"
                  y="12%"
                  offset_y="3.5rem"
                  src="/images/24.svg"
                >
                  <MathBlock>{String.raw`$$
\begin{align}
{1 \over 99} - {1 \over 100}
&= {1 \over 99}\cdot{100 \over 100}\, - \,{1 \over 100}\cdot{99 \over 99}\up{1.5}\\
&= {100 \over 99\cdot 100} - {99 \over 99\cdot 100}\up{1.5}\\
&= {1 \over 99\cdot 100}\up{1.5}
\end{align}
$$`}</MathBlock>
                </ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...it's that much. (For example,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 1} - {1 \over 2} = {1 \over 1 \cdot 2} = {1 \over 2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 2} - {1 \over 3} = {1 \over 2 \cdot 3} = {1 \over 6}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and so on.) So the infinite sum`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
&\, \left(1 - {1 \over 2}\right)\\
+ \,&\, \left({1 \over 2} - {1 \over 3}\right)\\
+ \,&\, \left({1 \over 3} - {1 \over 4}\right)\\
+ \,&\, \left({1 \over 4} - {1 \over 5}\right)\\
+ \,&\, \left({1 \over 5} - {1 \over 6}\right)\\
+ \,&\, \left({1 \over 6} - {1 \over 7}\right)\\
+ \,&\, \,\,\,\,\,\,\,\,\dots\up{1.3}\dn{1}\\ \hline
= \,&\, 1\up{1.5}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`can also be written`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 1 \cdot 2} + {1 \over 2 \cdot 3} + {1 \over 3 \cdot 4} + {1 \over 4 \cdot 5} + {1 \over
5 \cdot 6} + \dots \,=\, 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 2} + {1 \over 6} + {1 \over 12} + {1 \over 20} + {1 \over 30} + \dots \,=\, 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`equivalently) which is not obvious at first 
glance, and kind of interesting!`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 5.`}</i>
                {String.raw` The fact that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over n} - {1 \over n+1} = {1 \over n(n+1)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`means, in particular, that 
`}
                <NoBreak>
                  <Math>{String.raw`$
{1 \over n} - {1 \over n+1}
$`}</Math>
                </NoBreak>
                {String.raw` is roughly 
`}
                <NoBreak>
                  <Math>{String.raw`$
{1 \over n^2}
$`}</Math>
                </NoBreak>
                {String.raw` for large `}
                <NoBreak>
                  <Math>{String.raw`$
n
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which is 
sometimes handy to know. For example,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 10} - {1 \over 11}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is approximately `}
                <NoBreak>
                  <Math>{String.raw`$
1/10^2 = 0.01
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` while`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 100} - {1 \over 101}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is approximately `}
                <NoBreak>
                  <Math>{String.raw`$
1/100^2 = 0.01^2 = 0.0001
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
etc.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={1}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 2.`}</b>
              {String.raw`
In the solution to Exercise 1, we observed how 
the difference`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
{1 \over n} - {1 \over n+1}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`is `}
              <i>{String.raw`roughly`}</i>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
1/n^2
$`}</Math>
              </NoBreak>
              {String.raw` for large `}
              <NoBreak>
                <Math>{String.raw`$
n
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` But how 
far off is this exactly? (I.e., what is the
difference between `}
              <NoBreak>
                <Math>{String.raw`$
{1 \over n} - {1 \over n+1}
$`}</Math>
              </NoBreak>
              {String.raw` 
and `}
              <NoBreak>
                <Math>{String.raw`$
{1 \over n^2}
$`}</Math>
                {String.raw`?)`}
              </NoBreak>
              {String.raw` And `}
              <i>{String.raw`roughly`}</i>
              {String.raw` how much is
this far-offness, for large `}
              <NoBreak>
                <Math>{String.raw`$
n
$`}</Math>
              </NoBreak>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={1}>
              <VerticalChunk>{String.raw`Since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
{1 \over n} - {1 \over n+1} = {1 \over n(n+1)}
$$`}
                <ImageRight
                  use_squiggle_on_mobile={false}
                  children_x="41%"
                  children_y="13%"
                  src="/images/25.svg"
                  offset_y="1.2rem"
                  offset_x="-6rem"
                >
                  <MathBlock>{String.raw`$$
{1 \over 99\cdot 100}
$$`}</MathBlock>
                </ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(as previously computed) is smaller than`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
{1 \over n^2}
$$`}
                <ImageRight
                  use_squiggle_on_mobile={false}
                  children_x="41%"
                  children_y="15%"
                  src="/images/26.svg"
                  offset_y="1.2rem"
                  offset_x="-6rem"
                >
                  <MathBlock>{String.raw`$$
{1 \over 99^2}
$$`}</MathBlock>
                </ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`we will compute the difference`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over n^2} - {1 \over n(n+1)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`as opposed to the “other difference`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over n(n+1)} - {1 \over n^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`to avoid a minus sign in the result. 
(Computing the second difference and having 
a minus sign does not constitute a mistake, 
however.) Having said this, the difference is:`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
\begin{align}
{1 \over n^2} - {1 \over n(n+1)} &= {1 \over n^2} \cdot {n+1 \over n+1} - {1 \over n(n+1)} \cdot
{n \over n}\\
&= {n+1 \over n^2(n+1)} - {n \over n^2(n+1)}\up{1.5}\\
&= {1 \over n^2(n+1)}\up{1.5}
\end{align}
$$`}
                <ImageRight
                  clickable_on_desktop={true}
                  children_x="23%"
                  children_y="27%"
                  y="12%"
                  offset_y="2rem"
                  src="/images/27.svg"
                >
                  <MathBlock>{String.raw`$$
\begin{align}
{1 \over 99^2} - {1 \over 99\cdot 100} &=
{1 \over 99^2}\cdot{100 \over 100}\, - \,
{1 \over 99\cdot 100}\cdot{99 \over 99}\\
&= {100 \over 99^2 \cdot 100} - {99 \over 99^2 \cdot 100}\up{1.5}\\
&= {1 \over 99^2\cdot 100}\up{1.5}
\end{align}
$$`}</MathBlock>
                </ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which, for large `}
                <NoBreak>
                  <Math>{String.raw`$
n
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` is roughly`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over n^3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`since `}
                <NoBreak>
                  <Math>{String.raw`$
n^2(n+1) \approx n^3
$`}</Math>
                </NoBreak>
                {String.raw` for large `}
                <NoBreak>
                  <Math>{String.raw`$
n
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Example 1.`}</i>
                {String.raw` Above, we estimated`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 10} - {1 \over 11}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`to be roughly `}
                <NoBreak>
                  <Math>{String.raw`$
1/100 = 0.01
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` but `}
                <NoBreak>
                  <Math>{String.raw`$
1/100
$`}</Math>
                </NoBreak>
                {String.raw` is 
bigger than the actual value of
`}
                <NoBreak>
                  <Math>{String.raw`$
{1 \over 10\cdot 11} = {1 \over 110}
$`}</Math>
                </NoBreak>
                {String.raw` by`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 10^2\cdot 11}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`or close to `}
                <NoBreak>
                  <Math>{String.raw`$
1/10^3 = 0.001
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` 
(So`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 10} - {1 \over 11}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is about `}
                <NoBreak>
                  <Math>{String.raw`$
0.01
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` while making an error of about
`}
                <NoBreak>
                  <Math>{String.raw`$
0.001
$`}</Math>
                  {String.raw`.)`}
                </NoBreak>
                {String.raw` (In fact,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 10^2\cdot 11}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is `}
                <i>{String.raw`less`}</i>
                {String.raw` than `}
                <NoBreak>
                  <Math>{String.raw`$
1/10^3
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` so the error is `}
                <i>{String.raw`less`}</i>
                {String.raw`
than `}
                <NoBreak>
                  <Math>{String.raw`$
0.001
$`}</Math>
                </NoBreak>
                {String.raw`.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
        </Exercises>
      </Chapter1>
    </>
  );
};
export default Article;
