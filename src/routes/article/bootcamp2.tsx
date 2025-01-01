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
import useScrollX from "~/hooks/useScrollX";
import useSaveScroll from "~/hooks/useSaveScroll";

const Bootcamp2 = (props: any) => {
  useScrollX();
  useSaveScroll();

  return (
    <>
      <ArticleTitle
        label={`Bootcamp 2: ` + props.title}
        on_mobile_label={`Bootcamp 2: ` + props.mobile_title}
      />
      {props.children}
    </>
  );
};

const Article = () => {
  return (
    <>
      <Bootcamp2 title="Powers of 10">
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Terminology.`}</b>
            {String.raw`
The expression below is called a `}
            <i>{String.raw`power`}</i>
            {String.raw`; 
the number at the bottom of the power is called
the `}
            <i>{String.raw`base`}</i>
            {String.raw` (of the power); the number at the top
is called the `}
            <i>{String.raw`exponent`}</i>
            {String.raw`:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_base_exponent.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`The whole expression is read `}
            <NoBreak>
              <Math>{String.raw`$
\mathit{10}
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <i>{String.raw`to the power`}</i>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
\mathit{3}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and the
general process of taking a power is called `}
            <i>{String.raw`exponentiation`}</i>
            {String.raw`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Integer powers of 10.`}</b>
            {String.raw`
We define`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{\hspace{0.2ex}n}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`as follows, if `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` is a nonnegative integer: start
from `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` and multiply by `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` times. We also define`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{-n}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`as follows, if `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` is a positive integer: start from `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` and divide
by `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` times. `}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`For example,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^4 = 1 \times 10 \times 10 \times 10 \times 10 = 10000
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^3 = 1 \times 10 \times 10 \times 10 = 1000
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^2 = 1 \times 10 \times 10 = 100
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^1 = 1 \times 10 = 10
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
\Large 10^0 = 1 = 1
$$`}
            <ImageLeft src="/images/svg_ten_to_the_0_cloud.svg"></ImageLeft>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(where, in the last line, `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` is multiplied by `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <i>{String.raw`zero times`}</i>
            {String.raw`,
as per the exponent, which is zero) by the first definition, while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{-1} = 1\,/\,10 = 0.1
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{-2} = (1\,/\, 10)\,/\,10 = 0.01
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{-3} = ((1\,/\, 10)\,/\,10)\,/\,10 = 0.001
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{-4} = (((1\,/\, 10)\,/\,10)\,/\, 10)\,/\, 10 = 0.0001
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`by the second definition.`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`As `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` successive divisions
by `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw` is the same as one division by `}
            <NoBreak>
              <Math>{String.raw`$
10^n
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` one also has`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{-n} = {1 \over 10^{\hspace{0.2ex}n}}\tag{A}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for every positive integer `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` which gives an alternate means of computing `}
            <NoBreak>
              <Math>{String.raw`$
10^{-n}
$`}</Math>
            </NoBreak>
            {String.raw`.
Moreover, (A) actually holds for`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`every`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`integer `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` which is mildly important. In more
detail, (A) holds for `}
            <NoBreak>
              <Math>{String.raw`$
n = 0
$`}</Math>
            </NoBreak>
            {String.raw` by inspection, and (A) 
is equivalent to the identity`}
            <ImageLeft src="/images/svg_zero_verification_cloud.svg"></ImageLeft>
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{-n}10^n = 1 \tag{AA}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which holds for `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` if and only if it holds for
`}
            <NoBreak>
              <Math>{String.raw`$
-n
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` (By which we mean: replacing “`}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` by “`}
            <NoBreak>
              <Math>{String.raw`$
-n
$`}</Math>
            </NoBreak>
            {String.raw`”
in (AA) lands you right back on (AA), due to the fact
that `}
            <NoBreak>
              <Math>{String.raw`$
-{(-n)} = n
$`}</Math>
              {String.raw`.)`}
            </NoBreak>
            {String.raw` (So, namely, if (AA) holds for all
positive values of `}
            <NoBreak>
              <Math>{String.raw`$
\hspace{0.05em}n
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` then it holds
for all negative values of `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` as well.)`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Pause></Pause>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Vocabulary.`}</b>
            {String.raw`
Numbers `}
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
            {String.raw` such that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large ab = 1
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`are `}
            <i>{String.raw`reciprocal`}</i>
            {String.raw`.
If `}
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
            {String.raw` are reciprocal, then 
these equations are satisfied...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large ab = 1 \qquad a = {1 \over b} \qquad b = {1 \over a}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`...and any one of these equations implies the other two.
Thus, either of (A) and (AA) expresses the`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`reciprocality`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`of `}
            <NoBreak>
              <Math>{String.raw`$
10^n
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
10^{-n}
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Other bases.`}</b>
            {String.raw`
Integer powers of other nonzero bases are defined similarly, e.g.,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 2^{-2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is defined as `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` divided by `}
            <NoBreak>
              <Math>{String.raw`$
2
$`}</Math>
            </NoBreak>
            {String.raw` twice, etc.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`However, a small quirk occurs for base `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
              {String.raw`:`}
            </NoBreak>
            {String.raw` as one cannot
divide by `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` negative powers of `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` remain undefined. E.g.,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 0^{-2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`would be “`}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` divided by `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` twice”, but this
is undefined. 
Hence `}
            <NoBreak>
              <Math>{String.raw`$
0^{-1}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
0^{-2}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` etc, remain undefined.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`Also (in case you're wondering) `}
            <NoBreak>
              <Math>{String.raw`$
0^0 = 1
$`}</Math>
            </NoBreak>
            {String.raw`.
You can see this by writing down the first few powers of `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` in descending order:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 0^3 = 1 \times 0 \times 0 \times 0 = 0
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 0^2 = 1 \times 0 \times 0 = 0
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 0^1 = 1 \times 0 = 0
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 0^0 = 1 = 1
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`In other words, every positive power of `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` is zero, 
but when it comes to `}
            <NoBreak>
              <Math>{String.raw`$
0^0
$`}</Math>
            </NoBreak>
            {String.raw`,
the ‘`}
            <NoBreak>
              <Math>{String.raw`$
0\hspace{0.12ex}
$`}</Math>
              {String.raw`’`}
            </NoBreak>
            {String.raw` in the
exponent “wins out” over the ‘`}
            <NoBreak>
              <Math>{String.raw`$
0\hspace{0.12ex}
$`}</Math>
              {String.raw`’`}
            </NoBreak>
            {String.raw` in the base, 
making the result `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`Note that mathematicians sometimes refer 
to a power with an exponent of `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` as an`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`empty product`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`and they will repeatedly admonish that`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>
            {String.raw`an empty product is `}
            <NoBreak>
              <Math>{String.raw`$
\mathit{1}
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`in the sense that “all products start at 
`}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
              {String.raw`”,`}
            </NoBreak>
            {String.raw` and that if you start at `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` and don't
multiply anything in, you stay at `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Additivity of exponents.`}</b>
            {String.raw`
If you think about it,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{13} \times 10^{14} = 10^{\hspace{0.1ex}27}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`because `}
            <NoBreak>
              <Math>{String.raw`$
13
$`}</Math>
            </NoBreak>
            {String.raw` multiplications by `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw` followed
by `}
            <NoBreak>
              <Math>{String.raw`$
14
$`}</Math>
            </NoBreak>
            {String.raw` multiplications by `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw` makes `}
            <NoBreak>
              <Math>{String.raw`$
13 + 14 = 27
$`}</Math>
            </NoBreak>
            {String.raw`
multiplications by `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`More generally,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^{\hspace{0.1ex}n} \times 10^{\hspace{0.1ex}m} = 10^{\hspace{0.1ex}n + m}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for all `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
m
$`}</Math>
            </NoBreak>
            {String.raw` (and other bases than `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw`),
which is known as`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`additivity of exponents`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`and which is sometimes paraphrased by saying
that`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`the product of the powers is the power of the sum`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`where `}
            <i>{String.raw`the product of the powers`}</i>
            {String.raw` refers to
“`}
            <NoBreak>
              <Math>{String.raw`$
10^n \times 10^m
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` and `}
            <i>{String.raw`the power of the sum`}</i>
            {String.raw`
refers to “`}
            <NoBreak>
              <Math>{String.raw`$
10^{n+m}
$`}</Math>
              {String.raw`”.`}
            </NoBreak>
            {String.raw` (Or for some other base.)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`The third law of exponents.`}</b>
            {String.raw`
Also, if you think about it,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large (10^{13})^{14} = 10^{13\cdot 14}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`because multiplying `}
            <NoBreak>
              <Math>{String.raw`$
14
$`}</Math>
            </NoBreak>
            {String.raw` times by `}
            <NoBreak>
              <Math>{String.raw`$
10^{13}
$`}</Math>
            </NoBreak>
            {String.raw` is like
multiplying `}
            <NoBreak>
              <Math>{String.raw`$
13\cdot 14
$`}</Math>
            </NoBreak>
            {String.raw` times by `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` More
generally,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large (10^n)^m = 10^{nm}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for all `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
m
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` This is known as “the third law 
of exponents”. `}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`On this subject, note that if one writes`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large a^{b^{c}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[“`}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` to the power `}
            <NoBreak>
              <Math>{String.raw`$
b
$`}</Math>
            </NoBreak>
            {String.raw` to the power `}
            <NoBreak>
              <Math>{String.raw`$
c
$`}</Math>
            </NoBreak>
            {String.raw`”]
there is a seeming ambiguity: does it mean`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large a^{\left(b^{c}\right)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[“`}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` to the power [`}
            <NoBreak>
              <Math>{String.raw`$
b
$`}</Math>
            </NoBreak>
            {String.raw` to the power `}
            <NoBreak>
              <Math>{String.raw`$
c
$`}</Math>
            </NoBreak>
            {String.raw`]”]
or does it mean`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large (a^{b})^{c}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[“[`}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw` to the power `}
            <NoBreak>
              <Math>{String.raw`$
b
$`}</Math>
              {String.raw`]`}
            </NoBreak>
            {String.raw` to the power `}
            <NoBreak>
              <Math>{String.raw`$
c
$`}</Math>
            </NoBreak>
            {String.raw`”]...?
Well, because the second way can be written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large a^{bc}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`by the third law of exponents, the second way already has  
“its own” notation, and therefore the convention is that... `}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large a^{b^c}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`...absolutely always means... `}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large a^{\left(b^c\right)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`...!`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Famous powers of 10.`}</b>
            {String.raw`
Many human languages have special names for
various integer powers of `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` due to the fact
that many of our ancestors chose to count in base
`}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`In English, e.g., these are some of the “famous”
powers of `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw`:`}
          </VerticalChunk>
          <div class="slice align-center">
            <table margin-bottom="1em" margin-top="1em" class="first-line">
              <colgroup>
                <col width="60px" />
                <col width="200px" />
                <col width="140px" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
n
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
\,\,10^n
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>{String.raw`name`}</VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
0
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
1
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`one`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
1
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`ten`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
2
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
100
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`hundred`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
3
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
1000
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`thousand`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
6
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
1\,000\,000
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`million`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
9
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
1\,000\,000\,000
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`billion`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
12
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
1\,000\,000\,000\,000
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`trillion`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="spacer"></div>
          <Pause></Pause>
          <VerticalChunk>{String.raw`One can note that
`}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`one million is a thousand thousand`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`
because`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 1000 \times 1000 = 1000\hspace{0.3ex}000
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`by counting zeroes, or, equivalently, because`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 10^3 \times 10^3 = 10^6
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`by additivity of exponents. Similarly, note that`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`one billion is a thousand million`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw``}
            <ImageLeft src="/images/svg_ten_to_the_3_times_ten_to_the_6_cloud.svg"></ImageLeft>
          </VerticalChunk>
          <VerticalChunk>{String.raw`and `}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`one trillion is a thousand billion`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw``}
            <ImageLeft src="/images/svg_ten_to_the_3_times_ten_to_the_9_cloud.svg"></ImageLeft>
          </VerticalChunk>
          <VerticalChunk>{String.raw`and also (while we're at it)`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`one trillion is a million million`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw``}
            <ImageRight src="/images/svg_ten_to_the_6_times_ten_to_the_6_cloud.svg"></ImageRight>
          </VerticalChunk>
          <VerticalChunk>
            {String.raw`as can be seen, for example, by replacing “billion”
with “thousand million” in the previous sentence and
then further replacing “thousand thousand” with “million”
in `}
            <i>{String.raw`that`}</i>
            {String.raw` sentence.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Negative exponent prefixes.`}</b>
            {String.raw`
For negative exponents we simply say “one tenth”
instead of “ten”, etc. Specifically, the table looks
like so:`}
          </VerticalChunk>
          <div class="slice align-center">
            <table margin-bottom="1em" margin-top="1em" class="first-line">
              <colgroup>
                <col width="60px" />
                <col width="200px" />
                <col width="140px" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
n
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
\,\,10^n
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>{String.raw`name`}</VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
-1
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
0.1
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`one tenth`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
-2
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
0.01
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`one hundredth`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
-3
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
0.001
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`one thousandth`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
-6
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
0.000001
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`one millionth`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
-9
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
0.000000001
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`one trillionth`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="spacer"></div>
          <Pause></Pause>
          <VerticalChunk>
            {String.raw`In passing, note how the standard decimal expansion
for `}
            <NoBreak>
              <Math>{String.raw`$
10^{-1}
$`}</Math>
            </NoBreak>
            {String.raw` contains exactly one `}
            <NoBreak>
              <Math>{String.raw`$
{0}
$`}</Math>
            </NoBreak>
            {String.raw`:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_one_blue_one_image_equation.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`Likewise, the standard decimal expansion for `}
            <NoBreak>
              <Math>{String.raw`$
10^{-2}
$`}</Math>
            </NoBreak>
            {String.raw`
contains exactly two `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw`'s...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_two_blue_one_image_equation.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`...and so on, which is a possible trick to check 
one's work and avoid mistakes.`}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`However, there also exist negative exponent`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`prefixes`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`that people use to qualify other measures. For
example, a`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`millimeter`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`is `}
            <NoBreak>
              <Math>{String.raw`$
10^{-3}
$`}</Math>
            </NoBreak>
            {String.raw` meters, i.e., one thousandth of
a meter, because “milli” happens to be the prefix
for `}
            <NoBreak>
              <Math>{String.raw`$
10^{-3}
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Here is a list of the most common
such prefixes:`}
          </VerticalChunk>
          <div class="slice align-center">
            <table margin-bottom="1em" margin-top="1em" class="first-line">
              <colgroup>
                <col width="120px" />
                <col width="120px" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>{String.raw`power`}</VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>{String.raw`prefix`}</VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{-1}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`deci`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{-2}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`centi`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{-3}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`milli`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{-6}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`micro`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{-9}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`nano`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{-12}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`pico`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{-15}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`femto`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="spacer"></div>
          <Pause></Pause>
          <VerticalChunk>
            {String.raw`(Funny how the prefixes switch from 
ending in ‘i’ to ending in ‘o’ after 
`}
            <NoBreak>
              <Math>{String.raw`$
10^{-3}
$`}</Math>
              {String.raw`.)`}
            </NoBreak>
            {String.raw` (Well, anyway.)`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`To give an idea of scale,`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`micrometers`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`are smaller than the smallest animal
cells (human red blood cells, which 
are among the smallest animal cells,
have a diameter of
`}
            <NoBreak>
              <Math>{String.raw`$
7
$`}</Math>
            </NoBreak>
            {String.raw`~`}
            <NoBreak>
              <Math>{String.raw`$
9
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
\mu\textrm{m}
$`}</Math>
              {String.raw`)`}
            </NoBreak>
            {String.raw` (nb: “`}
            <NoBreak>
              <Math>{String.raw`$
\mu
$`}</Math>
            </NoBreak>
            {String.raw`”
stands for “micro” and “`}
            <NoBreak>
              <Math>{String.raw`$
\mu
$`}</Math>
              {String.raw`m”`}
            </NoBreak>
            {String.raw` stands
for “micrometer”). Next down,`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`nanometers`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`happen to be smaller than the diameter
of DNA, with DNA having a diameter of
about `}
            <NoBreak>
              <Math>{String.raw`$
2.5
$`}</Math>
              {String.raw`nm`}
            </NoBreak>
            {String.raw` (“nm” = “nanometer”).`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw``}
            <b>{String.raw`Positive exponent prefixes.`}</b>
            {String.raw`
There exists a similar set of prefixes
for positve powers of `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Going up
to `}
            <NoBreak>
              <Math>{String.raw`$
10^{15}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` these are:`}
          </VerticalChunk>
          <div class="slice align-center">
            <table margin-bottom="1em" margin-top="1em" class="first-line">
              <colgroup>
                <col width="120px" />
                <col width="120px" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>{String.raw`power`}</VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>{String.raw`prefix`}</VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^1
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`deca`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{2}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`hecto`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{3}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`kilo`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{6}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`mega`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{9}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`giga`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{12}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`tera`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <NoBreak>
                        <Math>{String.raw`$
10^{15}
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                  <td class="align-center">
                    <VerticalChunk>
                      {String.raw``}
                      <i>{String.raw`peta`}</i>
                      {String.raw``}
                    </VerticalChunk>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="spacer"></div>
          <Pause></Pause>
          <VerticalChunk>{String.raw`For example, a`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`kilometer`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`is a thousand meters
[b/`}
            <NoBreak>
              <Math>{String.raw`$
\!\hspace{0.1ex}\rm{c}
$`}</Math>
            </NoBreak>
            {String.raw` “kilo” = thousand], 
while a`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`terabyte`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`is a trillion bytes [b/`}
            <NoBreak>
              <Math>{String.raw`$
\!\hspace{0.1ex}\rm{c}
$`}</Math>
            </NoBreak>
            {String.raw` “tera” = trillion].
(In case you don't know, by the way, 
a `}
          </VerticalChunk>
          <CentralItalicDisplay>{String.raw`byte`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw` is a unit of computer memory
that is equal to `}
            <NoBreak>
              <Math>{String.raw`$
8
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <i>{String.raw`bits`}</i>
            {String.raw`, with a `}
            <i>{String.raw`bit`}</i>
            {String.raw`
being a single 0/1 value.)`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw``}
            <b>{String.raw`Logarithms base 10.`}</b>
            {String.raw`
Every positive number can be uniquely 
written as “ten to the power something”.
This “something” will heretofore be called
the `}
            <i>
              {String.raw`logarithm base `}
              <NoBreak>
                <Math>{String.raw`$
\mathit{10}
$`}</Math>
              </NoBreak>
              {String.raw``}
            </i>
            {String.raw` of that 
(positive) number.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`For example,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 100
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`can be uniquely written as “ten to the power
something”. To wit, `}
            <NoBreak>
              <Math>{String.raw`$
100
$`}</Math>
            </NoBreak>
            {String.raw` is, of course,`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>
            {String.raw`ten to the power `}
            <NoBreak>
              <Math>{String.raw`$
\mathit{2}
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`and this means that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is the logarithm base `}
            <NoBreak>
              <Math>{String.raw`$
10
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
100
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>{String.raw`It so happens that`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large 99 = 10^{1.99563519...}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`under an extended definition of exponentiation that allows us to 
compute `}
              <NoBreak>
                <Math>{String.raw`$
10^x
$`}</Math>
              </NoBreak>
              {String.raw` for every `}
              <NoBreak>
                <Math>{String.raw`$
x \in \rr
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` 
So `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large 1.99563519...
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`is the logarithm base `}
              <NoBreak>
                <Math>{String.raw`$
10
$`}</Math>
              </NoBreak>
              {String.raw` of `}
              <NoBreak>
                <Math>{String.raw`$
99
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>{String.raw`It so happens that`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large 98 = 10^{1.99122607...}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`under the same extended definition, so `}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large 1.99122607...
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`is the logarithm base `}
              <NoBreak>
                <Math>{String.raw`$
10
$`}</Math>
              </NoBreak>
              {String.raw` of `}
              <NoBreak>
                <Math>{String.raw`$
98
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>{String.raw`Since`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large 0.1 = 10^{-1}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`the logarithm base `}
              <NoBreak>
                <Math>{String.raw`$
10
$`}</Math>
              </NoBreak>
              {String.raw` of `}
              <NoBreak>
                <Math>{String.raw`$
0.1
$`}</Math>
              </NoBreak>
              {String.raw` is `}
              <NoBreak>
                <Math>{String.raw`$
-1
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>{String.raw`Since`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              {String.raw`$$
\Large 0.00001 = 10^{-5}
$$`}
              <ImageRight src="/images/svg_ten_to_the_-5_cloud.svg"></ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`the logarithm base `}
              <NoBreak>
                <Math>{String.raw`$
10
$`}</Math>
              </NoBreak>
              {String.raw` of `}
              <NoBreak>
                <Math>{String.raw`$
0.00001
$`}</Math>
              </NoBreak>
              {String.raw` is `}
              <NoBreak>
                <Math>{String.raw`$
-5
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Exercises
          labels={[
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
          ]}>
          <Exercise exercise_number={0}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 1.`}</b>
              {String.raw`
Compute `}
              <NoBreak>
                <Math>{String.raw`$
2^{-2}
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
2^{-3}
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
2^{-4}
$`}</Math>
              </NoBreak>
              {String.raw` by hand.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={0}>
              <VerticalChunk>
                {String.raw`Since `}
                <NoBreak>
                  <Math>{String.raw`$
2^{-1} = 1/2 = 0.5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` one has`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 2^{-2} = {2^{-1}\over 2} = {0.5 \over 2} = 0.25
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 2^{-3} = {2^{-2}\over 2} = {0.25 \over 2} = 0.125
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 2^{-4} = {2^{-3}\over 2} = {0.125 \over 2} = 0.0625
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`respectively.            `}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw``}
                <i>{String.raw`Notes.`}</i>
                {String.raw` 
For the last computation, `}
                <NoBreak>
                  <Math>{String.raw`$
0.125
$`}</Math>
                </NoBreak>
                {String.raw` can be viewed 
as twelve hundredths plus `}
                <NoBreak>
                  <Math>{String.raw`$
5
$`}</Math>
                </NoBreak>
                {String.raw` thousandths:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_0.125_twelve_5.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Half of twelve hundredths is six hundredths, and 
half of `}
                <NoBreak>
                  <Math>{String.raw`$
5
$`}</Math>
                </NoBreak>
                {String.raw` thousandths is `}
                <NoBreak>
                  <Math>{String.raw`$
2.5
$`}</Math>
                </NoBreak>
                {String.raw` thousandths:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_06_and_0025.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...so `}
                <NoBreak>
                  <Math>{String.raw`$
0.125/2
$`}</Math>
                </NoBreak>
                {String.raw` is `}
                <NoBreak>
                  <Math>{String.raw`$
0.06 + 0.0025 = 0.0625
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={1}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 2.`}</b>
              {String.raw`
Compute `}
              <NoBreak>
                <Math>{String.raw`$
100/16
$`}</Math>
              </NoBreak>
              {String.raw` by hand.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={1}>
              <VerticalChunk>{String.raw`We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {1 \over 16} = {1 \over 2\cdot 2\cdot 2\cdot 2} = 2^{-4} = 0.0625
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`so`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {100 \over 16} = 100 \cdot {1 \over 16} = 100\cdot 0.0625 = 6.25
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and that's all there is to it! (Or you could repeatedly divide `}
                <NoBreak>
                  <Math>{String.raw`$
100
$`}</Math>
                </NoBreak>
                {String.raw` by `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw`,
until you reach `}
                <NoBreak>
                  <Math>{String.raw`$
6.25
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` after the fourth division.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={2}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 3.`}</b>
              {String.raw`
If “万” is Chinese for `}
              <i>{String.raw`ten thousand`}</i>
              {String.raw`, what is “万万” in English?
What about “万万万”?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={2}>
              <VerticalChunk>{String.raw`“万万” is “ten thousand ten thousand”, or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 10^4 \times 10^4 = 10^8
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`or `}
                <i>{String.raw`one hundred million`}</i>
                {String.raw` since `}
                <NoBreak>
                  <Math>{String.raw`$
10^8 = 10^2 \times 10^6
$`}</Math>
                </NoBreak>
                {String.raw` is a hundred times a 
million. Similarly, “万万万” is `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 10^4 \times 10^4 \times 10^4 = 10^{12}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`which is just one trillion.`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Notes.`}</i>
                {String.raw`
Rearranging`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`ten thousand ten thousand`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw`to`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`ten ten thousand thousand`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`directly leads us to “hundred million” 
without having to use exponents, since ten
times ten is a hundred and since a thousand 
times a thousand is a million.`}</VerticalChunk>
              <VerticalChunk
                indent={true}>{String.raw`(Similarly,`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`ten thousand ten thousand ten thousand`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw`becomes`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`ten ten ten thousand thousand thousand`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`after rearrangement, which can be seen to
equal one trillion because “ten ten ten” is
a thousand.)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={3}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 4.`}</b>
              {String.raw`
How many millimeters in a kilometer? 
How many kilometers in a millimeter?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={3}>
              <VerticalChunk>
                {String.raw`There are `}
                <NoBreak>
                  <Math>{String.raw`$
10^3
$`}</Math>
                </NoBreak>
                {String.raw` millimeters in a meter 
(`}
                <i>{String.raw`milli`}</i>
                {String.raw` = thousandth) and `}
                <NoBreak>
                  <Math>{String.raw`$
10^3
$`}</Math>
                </NoBreak>
                {String.raw` meters
in a kilometer, so there are 
`}
                <NoBreak>
                  <Math>{String.raw`$
10^3 \times 10^3 = 10^6
$`}</Math>
                </NoBreak>
                {String.raw` 
millimeters in a kilometer.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`From there, it automatically follows that
there are `}
                <NoBreak>
                  <Math>{String.raw`$
1/10^6 = 10^{-6}
$`}</Math>
                </NoBreak>
                {String.raw` kilometers in
a millimeter.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`(Or you can run the reverse reasoning: 
There are `}
                <NoBreak>
                  <Math>{String.raw`$
10^{-3}
$`}</Math>
                </NoBreak>
                {String.raw` kilometers in a meter, 
and `}
                <NoBreak>
                  <Math>{String.raw`$
10^{-3}
$`}</Math>
                </NoBreak>
                {String.raw` meters in a millimeter, 
so `}
                <NoBreak>
                  <Math>{String.raw`$
10^{-3} \times 10^{-3} = 10^{-6}
$`}</Math>
                </NoBreak>
                {String.raw` 
kilometers in a millimeter.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={4}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 5.`}</b>
              {String.raw`
How many kilometers is `}
              <NoBreak>
                <Math>{String.raw`$
10^{24}
$`}</Math>
              </NoBreak>
              {String.raw` millimeters?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={4}>
              <VerticalChunk>{String.raw`We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1\textrm{mm} = 10^{-6}\textrm{km}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`by the previous problem, so `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 10^{24} \textrm{mm} = 10^{24}\cdot 10^{-6}\textrm{km} = 10^{18}\textrm{km}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by direct substitution. (You can do that with
units.) The answer is therefore: `}
                <NoBreak>
                  <Math>{String.raw`$
10^{18}
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={5}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 6.`}</b>
              {String.raw`
If the US yearly budget is `}
              <NoBreak>
                <Math>{String.raw`$
4
$`}</Math>
              </NoBreak>
              {String.raw` trillion
dollars, what percentage of the budget is
one hundred billion \$?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={5}>
              <VerticalChunk>
                {String.raw`One hundred billion is `}
                <NoBreak>
                  <Math>{String.raw`$
10\%
$`}</Math>
                </NoBreak>
                {String.raw` of one trillion [cf.: 
`}
                <NoBreak>
                  <Math>{String.raw`$
10^2 \times 10^9 = {1 \over 10}\times 10^{12}
$`}</Math>
                </NoBreak>
                {String.raw`]
and one trillion is a quarter of `}
                <NoBreak>
                  <Math>{String.raw`$
4
$`}</Math>
                </NoBreak>
                {String.raw` 
trillion, so the answer is `}
                <NoBreak>
                  <Math>{String.raw`$
{1\over 4}\cdot 10\% = 2.5\%
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Postscript`}</i>
                {String.raw`:
There is no such thing as “the U.S. budget”. A
monetarily sovereign nation `}
                <i>{String.raw`spends`}</i>
                {String.raw` its currency
into existence. (And taxes it out of existence.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={6}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 7.`}</b>
              {String.raw`
What is the logarithm base `}
              <NoBreak>
                <Math>{String.raw`$
10
$`}</Math>
              </NoBreak>
              {String.raw` of one trillion?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={6}>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
12
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` because one trillion is `}
                <NoBreak>
                  <Math>{String.raw`$
10^{12}
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={7}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 8.`}</b>
              {String.raw`
What is the logarithm base `}
              <NoBreak>
                <Math>{String.raw`$
10
$`}</Math>
              </NoBreak>
              {String.raw` of `}
              <NoBreak>
                <Math>{String.raw`$
1
$`}</Math>
              </NoBreak>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={7}>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` because `}
                <NoBreak>
                  <Math>{String.raw`$
1 = 10^0
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={8}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 9.`}</b>
              {String.raw`
What is the logarithm base `}
              <NoBreak>
                <Math>{String.raw`$
10
$`}</Math>
              </NoBreak>
              {String.raw` of: `}
              <i>{String.raw`a trillion times a billion times a million times a thousand`}</i>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={8}>
              <VerticalChunk>{String.raw`Since `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
%\Large 10^{12}\times 10^{9}\times 10^{6}\times 10^3 = 10^{12+9+6+3} = 10^{30}
\Large 10^{12}\times 10^{9}\times 10^{6}\times 10^3 = 10^{12+9+6+3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`the answer is `}
                <NoBreak>
                  <Math>{String.raw`$
12+9+6+3
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` i.e., `}
                <NoBreak>
                  <Math>{String.raw`$
30
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` `}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={9}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 10.`}</b>
              {String.raw`
Evaluate:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large {10^6 \cdot 10^{-12} \cdot 10^{10} \over 10^{-4}\cdot 10^{-4}} 
$$`}</MathBlock>
            <div class="spacer"></div>
            <Solution solution_number={9}>
              <VerticalChunk>{String.raw`We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {10^6 \cdot 10^{-12} \cdot 10^{10} \over 10^{-4}\cdot 10^{-4}} = {10^{6-12+10} \over 10^{-4 -4}} = {10^4 \over 10^{-8}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {10^4 \over 10^{-8}} = 10^4 \cdot {1 \over 10^{-8}} = 10^4\cdot 10^{-(-8)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 10^4\cdot 10^{-(-8)} = 10^4\cdot 10^8 = 10^{4 + 8} = 10^{12}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`so the answer is `}
                <NoBreak>
                  <Math>{String.raw`$
10^{12}
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={10}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 11.`}</b>
              {String.raw`
How many `}
              <i>{String.raw`millibits`}</i>
              {String.raw` in a `}
              <i>{String.raw`gigabyte`}</i>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={10}>
              <VerticalChunk>
                {String.raw`Presumably, there are `}
                <NoBreak>
                  <Math>{String.raw`$
1000
$`}</Math>
                </NoBreak>
                {String.raw` “millibits”
(whatever those are, we can go along with
the joke here) in one bit. Since there are
eight bits in a byte, and a million bytes 
in a gigabyte, this means that there would
be`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1000 \times 8 \times 10^6 = 8 \times 10^9
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`or `}
                <NoBreak>
                  <Math>{String.raw`$
8
$`}</Math>
                </NoBreak>
                {String.raw` billion “millibits” per gigabyte.
(But to reiterate, there is no such thing 
as a “millibit”; a bit is a `}
                <i>{String.raw`discrete`}</i>
                {String.raw`—i.e., 
indivisible—unit of computer memory.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={11}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 12.`}</b>
              {String.raw`
It so happens that `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large 6.25
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw` 
(i.e., the value of `}
              <NoBreak>
                <Math>{String.raw`$
100/16
$`}</Math>
                {String.raw`)`}
              </NoBreak>
              {String.raw` is also
famous for being equal to `}
              <NoBreak>
                <Math>{String.raw`$
2.5^2
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` (You can 
verify that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large 25^2 = 625
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`and, by shifting two decimal places, one
finds `}
              <NoBreak>
                <Math>{String.raw`$
2.5^2 = 6.25
$`}</Math>
                {String.raw`.)`}
              </NoBreak>
              {String.raw` Can you elucidate
why it would be that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large {100 \over 16} = 2.5^2
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`by using some kind of algebra?`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={11}>
              <VerticalChunk>{String.raw`One has`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {100 \over 16} = {10^2 \over 4^2} = \left(\!{10\over 4}\!\right)^{\!\!2} = \left(\!{5\over 2}\!\right)^{\!\!2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and `}
                <NoBreak>
                  <Math>{String.raw`$
5/2 = 2.5
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (Ta-daa!)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={12}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 13.`}</b>
              {String.raw`
Prove that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large {10^n \over \vphantom{10^{A^n}}10^m} = 10^{n-m}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for all integers `}
              <NoBreak>
                <Math>{String.raw`$
n
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
m
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` (You can
take for granted any identity that is stated
in this `}
              <del>
                <VerticalChunk>{String.raw`chapter`}</VerticalChunk>
              </del>
              {String.raw`bootcamp.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={12}>
              <VerticalChunk>{String.raw`Here is the “proof” that your professor is 
hoping for:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_start_end_proof.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The point is that the second equality uses the identity`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {1 \over 10^m} = 10^{-m}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`stated earlier in the chapter as (A), while the third equality uses
additivity of exponents, also stated earlier. (So: We are only using “known”
facts, alongside some ordinary arithmetic.)`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Notes.`}</i>
                {String.raw`
The identity proved in this exercise, 
when generalized to any base, 
is one of the “laws of exponents”, whose complete list 
(even more-than-complete, other sources list fewer laws)
is as follows (minus fine print):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_laws_exp.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The first law can be recognized as “additivity of exponents”
while the second law 
is the above-mentioned generalization of this exercise's result.
(Nb: Concerning the next-to-last law, note that, <i>by definition</i>,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large \left({a\over b}\right)^{\!-1} = {1 \over \left( {a \over b}\right)} 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and it so happens that`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {1 \over \left( {a \over b}\right)} = {b \over a}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for all `}
                <NoBreak>
                  <Math>{String.raw`$
a, b \ne 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` by some principle of elementary arithmetic.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={13}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 14.`}</b>
              {String.raw`
Rewrite each of these expressions... `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large {L \over T}
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large {M (L/T) \over T}
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large \left.{ML \over T^2 } \right/ \left({L^2} {(L/T) \over L}\right) 
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...in the form...`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large M^aL^bT^c
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`...for some integer exponents `}
              <NoBreak>
                <Math>{String.raw`$
a
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
b
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
c
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={13}>
              <VerticalChunk>{String.raw`We have (#1)`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {L \over T} = LT^{-1} = M^0L^1T^{-1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {L \over T} = L\cdot {1\over T} = LT^{-1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and (#2)`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {M (L/T) \over T} = MLT^{-2} = M^1L^1T^{-2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {L/T \over T} = {L\over T}\cdot{1 \over T} = {L \over T^2} = LT^{-2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and (#3)`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large \left.{ML \over T^2 } \right/ \left({L^2} {(L/T) \over L}\right) = ML^{-1}T^{-1} = M^1L^{-1}T^{-1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large L^2{L/T\over L} = L^2{1/T \over 1} = {L^2\over T}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large \left.{ML \over T^2 } \right/ {L^2\over T} = {ML\over T^2}\cdot {T\over L^2} = {M \over TL} = MT^{-1}L^{-1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`given that `}
                <NoBreak>
                  <Math>{String.raw`$
{1\over T} = T^{-1}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
{1\over L}=L^{-1}
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={14}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 15.`}</b>
              {String.raw`
Find integers `}
              <NoBreak>
                <Math>{String.raw`$
a
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
b
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
c
$`}</Math>
              </NoBreak>
              {String.raw` such that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large v^aF^b\mu^c\rho = 1
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`where `}
              <NoBreak>
                <Math>{String.raw`$
v
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
F
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
\mu
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
\rho
$`}</Math>
              </NoBreak>
              {String.raw` are defined as below.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large v = {L \over T}
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large F = {ML \over T^2}
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large \mu = {M \over TL }
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large \rho = {M \over L^3}
$$`}</MathBlock>
            <div class="spacer"></div>
            <Solution solution_number={14}>
              <VerticalChunk>
                {String.raw`Firstly we can rewrite `}
                <NoBreak>
                  <Math>{String.raw`$
v
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
F
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
\mu
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
\rho
$`}</Math>
                </NoBreak>
                {String.raw`
in the canonical form `}
                <NoBreak>
                  <Math>{String.raw`$
M^xL^yT^z
$`}</Math>
                </NoBreak>
                {String.raw`
for integers `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
z
$`}</Math>
                </NoBreak>
                {String.raw` (as in the previous
exercise):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large v = LT^{-1} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large F = MLT^{-2} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large \mu = MT^{-1}L^{-1} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large \rho = ML^{-3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(Ok.) Nextly, we compute `}
                <NoBreak>
                  <Math>{String.raw`$
v^a
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
F^b
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
\mu^c
$`}</Math>
                </NoBreak>
                {String.raw`
by applying the fourth law of exponents (note e.g.
that `}
                <NoBreak>
                  <Math>{String.raw`$
(T^{-1})^a = T^{(-1)a} = T^{-a}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` etc):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large v^a = L^aT^{-a} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large F^b = M^{b}L^bT^{-2b} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large \mu^c = M^cT^{-c}L^{-c} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large \rho = ML^{-3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(In the last line we just restated `}
                <NoBreak>
                  <Math>{String.raw`$
\rho
$`}</Math>
                </NoBreak>
                {String.raw`.)
Then `}
                <NoBreak>
                  <Math>{String.raw`$
v^aF^b\mu^c\rho
$`}</Math>
                </NoBreak>
                {String.raw` becomes`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large M^{b+c+1}L^{a+b-c-3}T^{-a-2b-c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by multiplying everything together and using
additivity of exponents. (E.g., `}
                <NoBreak>
                  <Math>{String.raw`$
M^bM^cM = M^{b+c+1}
$`}</Math>
                </NoBreak>
                {String.raw`,
and so on.) This expression equals `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw` 
independently of the values of `}
                <NoBreak>
                  <Math>{String.raw`$
M
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
L
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
T
$`}</Math>
                </NoBreak>
                {String.raw`
if and only if...`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`the three exponents are zero`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`...(!!!) which means that we need to find values
`}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
b
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                </NoBreak>
                {String.raw` such that these three equations...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large b + c + 1 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large a + b - c - 3 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
\Large -a -2b - c = 0
$$`}
                <ImageRight
                  offset_y="1em"
                  src="/images/svg_add_equations_cloud.svg"></ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...are satisfied! Adding the second and 
third equation together, we find `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large -b -2c -3 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and adding this last equation to the first
equation above, we find `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large -c -2 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which implies that `}
                <NoBreak>
                  <Math>{String.raw`$
-c = 2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` i.e., that `}
                <NoBreak>
                  <Math>{String.raw`$
c = -2
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` 
Plugging `}
                <NoBreak>
                  <Math>{String.raw`$
c = -2
$`}</Math>
                </NoBreak>
                {String.raw` into the first of our three
equations, we find`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large b + (-2) + 1 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large b - 1 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which implies that `}
                <NoBreak>
                  <Math>{String.raw`$
b = 1
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` Lastly, plugging
`}
                <NoBreak>
                  <Math>{String.raw`$
b = 1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
c = -2
$`}</Math>
                </NoBreak>
                {String.raw` in our second equation above
gives us `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large a + 1 - (-2) - 3 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which implies that `}
                <NoBreak>
                  <Math>{String.raw`$
a = 0
$`}</Math>
                </NoBreak>
                {String.raw` since `}
                <NoBreak>
                  <Math>{String.raw`$
1-(-2)-3 = 0
$`}</Math>
                </NoBreak>
                {String.raw`.
(One can finally check that 
setting `}
                <NoBreak>
                  <Math>{String.raw`$
a=0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
b = 1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
c=-2
$`}</Math>
                </NoBreak>
                {String.raw` satisfies that
third equation, `}
                <NoBreak>
                  <Math>{String.raw`$
-a-2b-c=0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which it does.)`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`In summary, the solution is `}
                <NoBreak>
                  <Math>{String.raw`$
a = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
b = 1
$`}</Math>
                </NoBreak>
                {String.raw`,
`}
                <NoBreak>
                  <Math>{String.raw`$
c = -2
$`}</Math>
                  {String.raw`;`}
                </NoBreak>
                {String.raw` we have discovered that `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large v^0 F^1 \mu^{-2} \rho = 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`under the given definitions of `}
                <NoBreak>
                  <Math>{String.raw`$
v
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
F
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
\mu
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
\rho
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` or which is to say, we have discovered
that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large F\mu^{-2}\rho = 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(since `}
                <NoBreak>
                  <Math>{String.raw`$
v^0 = 1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
F^1 = F
$`}</Math>
                </NoBreak>
                {String.raw`).`}
              </VerticalChunk>
            </Solution>
          </Exercise>
        </Exercises>
      </Bootcamp2>
    </>
  );
};
export default Article;
