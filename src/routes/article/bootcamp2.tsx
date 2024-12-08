import ArticleTitle from "~/components/ArticleTitle";
import { Section, Example } from "~/components/Wrappers";
import {
  NoBreak,
  CentralDisplay,
  CentralItalicDisplay,
} from "~/components/Delimiters";
import VerticalChunk from "~/components/VerticalChunk";

const Bootcamp2 = (props: any) => {
  return <>{props.children}</>;
};

export const Article = () => {
  return (
    <>
      {" "}
      <Bootcamp2 title="Powers of 10">
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Terminology.`}</b>
            {`
The expression below is called a `}
            <i>{`power`}</i>
            {`; 
the number at the bottom of the power is called
the `}
            <i>{`base`}</i>
            {` (of the power); the number at the top
is called the `}
            <i>{`exponent`}</i>
            {`:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_base_exponent.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {`The whole expression is read `}
            <NoBreak>
              <Math>{`$
\mathit{10}
$`}</Math>
            </NoBreak>
            {` `}
            <i>{`to the power`}</i>
            {` `}
            <NoBreak>
              <Math>{`$
\mathit{3}
$`}</Math>
              {`,`}
            </NoBreak>
            {` and the
general process of taking a power is called `}
            <i>{`exponentiation`}</i>
            {`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Integer powers of 10.`}</b>
            {`
We define`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{\hspace{0.2ex}n}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`as follows, if `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
            </NoBreak>
            {` is a nonnegative integer: start
from `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {` and multiply by `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {` `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
            </NoBreak>
            {` times. We also define`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{-n}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`as follows, if `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
            </NoBreak>
            {` is a positive integer: start from `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {` and divide
by `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {` `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
            </NoBreak>
            {` times. `}
          </VerticalChunk>
          <VerticalChunk indent={true}>{`For example,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^4 = 1 \times 10 \times 10 \times 10 \times 10 = 10000
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^3 = 1 \times 10 \times 10 \times 10 = 1000
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^2 = 1 \times 10 \times 10 = 100
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^1 = 1 \times 10 = 10
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>
            {`$$
\Large 10^0 = 1 = 1
$$`}
            <ImageLeft src="/images/svg_ten_to_the_0_cloud.svg"></ImageLeft>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`(where, in the last line, `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {` is multiplied by `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {` _zero times_,
as per the exponent, which is zero) by the first definition, while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{-1} = 1\,/\,10 = 0.1
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{-2} = (1\,/\, 10)\,/\,10 = 0.01
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{-3} = ((1\,/\, 10)\,/\,10)\,/\,10 = 0.001
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{-4} = (((1\,/\, 10)\,/\,10)\,/\, 10)\,/\, 10 = 0.0001
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`by the second definition.`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`As `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
            </NoBreak>
            {` successive divisions
by `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {` is the same as one division by `}
            <NoBreak>
              <Math>{`$
10^n
$`}</Math>
              {`,`}
            </NoBreak>
            {` one also has`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{-n} = {1 \over 10^{\hspace{0.2ex}n}}\tag{A}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`for every positive integer `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
              {`,`}
            </NoBreak>
            {` which gives an alternate means of computing `}
            <NoBreak>
              <Math>{`$
10^{-n}
$`}</Math>
            </NoBreak>
            {`.
Moreover, (A) actually holds for`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`every`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`integer `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
              {`,`}
            </NoBreak>
            {` which is mildly important. In more
detail, (A) holds for `}
            <NoBreak>
              <Math>{`$
n = 0
$`}</Math>
            </NoBreak>
            {` by inspection, and (A) 
is equivalent to the identity`}
            <ImageLeft src="/images/svg_zero_verification_cloud.svg"></ImageLeft>
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{-n}10^n = 1 \tag{AA}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`which holds for `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
            </NoBreak>
            {` if and only if it holds for
`}
            <NoBreak>
              <Math>{`$
-n
$`}</Math>
              {`.`}
            </NoBreak>
            {` (By which we mean: replacing “`}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
              {`”`}
            </NoBreak>
            {` by “`}
            <NoBreak>
              <Math>{`$
-n
$`}</Math>
            </NoBreak>
            {`”
in (AA) lands you right back on (AA), due to the fact
that `}
            <NoBreak>
              <Math>{`$
-{(-n)} = n
$`}</Math>
              {`.)`}
            </NoBreak>
            {` (So, namely, if (AA) holds for all
positive values of `}
            <NoBreak>
              <Math>{`$
\hspace{0.05em}n
$`}</Math>
              {`,`}
            </NoBreak>
            {` then it holds
for all negative values of `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
              {`,`}
            </NoBreak>
            {` as well.)`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            <Pause></Pause>
            {``}
            <b>{`Vocabulary.`}</b>
            {`
Numbers `}
            <NoBreak>
              <Math>{`$
a
$`}</Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>{`$
b
$`}</Math>
            </NoBreak>
            {` such that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large ab = 1
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`are `}
            <i>{`reciprocal`}</i>
            {`.
If `}
            <NoBreak>
              <Math>{`$
a
$`}</Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>{`$
b
$`}</Math>
            </NoBreak>
            {` are reciprocal, then 
these equations are satisfied...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large ab = 1 \qquad a = {1 \over b} \qquad b = {1 \over a}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`...and any one of these equations implies the other two.
Thus, either of (A) and (AA) expresses the`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`reciprocality`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`of `}
            <NoBreak>
              <Math>{`$
10^n
$`}</Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>{`$
10^{-n}
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Other bases.`}</b>
            {`
Integer powers of other nonzero bases are defined similarly, e.g.,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 2^{-2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is defined as `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {` divided by `}
            <NoBreak>
              <Math>{`$
2
$`}</Math>
            </NoBreak>
            {` twice, etc.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`However, a small quirk occurs for base `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
              {`:`}
            </NoBreak>
            {` as one cannot
divide by `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
              {`,`}
            </NoBreak>
            {` negative powers of `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
            </NoBreak>
            {` remain undefined. E.g.,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 0^{-2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`would be “`}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {` divided by `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
            </NoBreak>
            {` twice”, but this
is undefined. 
Hence `}
            <NoBreak>
              <Math>{`$
0^{-1}
$`}</Math>
              {`,`}
            </NoBreak>
            {` `}
            <NoBreak>
              <Math>{`$
0^{-2}
$`}</Math>
              {`,`}
            </NoBreak>
            {` etc, remain undefined.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`Also (in case you're wondering) `}
            <NoBreak>
              <Math>{`$
0^0 = 1
$`}</Math>
            </NoBreak>
            {`.
You can see this by writing down the first few powers of `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
            </NoBreak>
            {` in descending order:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 0^3 = 1 \times 0 \times 0 \times 0 = 0
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 0^2 = 1 \times 0 \times 0 = 0
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 0^1 = 1 \times 0 = 0
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 0^0 = 1 = 1
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`In other words, every positive power of `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
            </NoBreak>
            {` is zero, 
but when it comes to `}
            <NoBreak>
              <Math>{`$
0^0
$`}</Math>
            </NoBreak>
            {`,
the ‘`}
            <NoBreak>
              <Math>{`$
0\hspace{0.12ex}
$`}</Math>
              {`’`}
            </NoBreak>
            {` in the
exponent “wins out” over the ‘`}
            <NoBreak>
              <Math>{`$
0\hspace{0.12ex}
$`}</Math>
              {`’`}
            </NoBreak>
            {` in the base, 
making the result `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`Note that mathematicians sometimes refer 
to a power with an exponent of `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
            </NoBreak>
            {` as an`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`empty product`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`and they will repeatedly admonish that`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {`an empty product is `}
            <NoBreak>
              <Math>{`$
\mathit{1}
$`}</Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`in the sense that “all products start at 
`}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
              {`”,`}
            </NoBreak>
            {` and that if you start at `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {` and don't
multiply anything in, you stay at `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Additivity of exponents.`}</b>
            {`
If you think about it,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{13} \times 10^{14} = 10^{\hspace{0.1ex}27}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`because `}
            <NoBreak>
              <Math>{`$
13
$`}</Math>
            </NoBreak>
            {` multiplications by `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {` followed
by `}
            <NoBreak>
              <Math>{`$
14
$`}</Math>
            </NoBreak>
            {` multiplications by `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {` makes `}
            <NoBreak>
              <Math>{`$
13 + 14 = 27
$`}</Math>
            </NoBreak>
            {`
multiplications by `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{`More generally,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^{\hspace{0.1ex}n} \times 10^{\hspace{0.1ex}m} = 10^{\hspace{0.1ex}n + m}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`for all `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>{`$
m
$`}</Math>
            </NoBreak>
            {` (and other bases than `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {`),
which is known as`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`additivity of exponents`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`and which is sometimes paraphrased by saying
that`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the product of the powers is the power of the sum`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`where `}
            <i>{`the product of the powers`}</i>
            {` refers to
“`}
            <NoBreak>
              <Math>{`$
10^n \times 10^m
$`}</Math>
              {`”`}
            </NoBreak>
            {` and `}
            <i>{`the power of the sum`}</i>
            {`
refers to “`}
            <NoBreak>
              <Math>{`$
10^{n+m}
$`}</Math>
              {`”.`}
            </NoBreak>
            {` (Or for some other base.)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`The third law of exponents.`}</b>
            {`
Also, if you think about it,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large (10^{13})^{14} = 10^{13\cdot 14}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`because multiplying `}
            <NoBreak>
              <Math>{`$
14
$`}</Math>
            </NoBreak>
            {` times by `}
            <NoBreak>
              <Math>{`$
10^{13}
$`}</Math>
            </NoBreak>
            {` is like
multiplying `}
            <NoBreak>
              <Math>{`$
13\cdot 14
$`}</Math>
            </NoBreak>
            {` times by `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
              {`.`}
            </NoBreak>
            {` More
generally,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large (10^n)^m = 10^{nm}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`for all `}
            <NoBreak>
              <Math>{`$
n
$`}</Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>{`$
m
$`}</Math>
              {`.`}
            </NoBreak>
            {` This is known as “the third law 
of exponents”. `}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`On this subject, note that if one writes`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large a^{b^{c}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`[“`}
            <NoBreak>
              <Math>{`$
a
$`}</Math>
            </NoBreak>
            {` to the power `}
            <NoBreak>
              <Math>{`$
b
$`}</Math>
            </NoBreak>
            {` to the power `}
            <NoBreak>
              <Math>{`$
c
$`}</Math>
            </NoBreak>
            {`”]
there is a seeming ambiguity: does it mean`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large a^{\left(b^{c}\right)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`[“`}
            <NoBreak>
              <Math>{`$
a
$`}</Math>
            </NoBreak>
            {` to the power [`}
            <NoBreak>
              <Math>{`$
b
$`}</Math>
            </NoBreak>
            {` to the power `}
            <NoBreak>
              <Math>{`$
c
$`}</Math>
            </NoBreak>
            {`]”]
or does it mean`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large (a^{b})^{c}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`[“[`}
            <NoBreak>
              <Math>{`$
a
$`}</Math>
            </NoBreak>
            {` to the power `}
            <NoBreak>
              <Math>{`$
b
$`}</Math>
              {`]`}
            </NoBreak>
            {` to the power `}
            <NoBreak>
              <Math>{`$
c
$`}</Math>
            </NoBreak>
            {`”]...?
Well, because the second way can be written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large a^{bc}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`by the third law of exponents, the second way already has  
“its own” notation, and therefore the convention is that... `}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large a^{b^c}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`...absolutely always means... `}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large a^{\left(b^c\right)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`...!`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Famous powers of 10.`}</b>
            {`
Many human languages have special names for
various integer powers of `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
              {`,`}
            </NoBreak>
            {` due to the fact
that many of our ancestors chose to count in base
`}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`In English, e.g., these are some of the “famous”
powers of `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {`:`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            <div align="center">
              <table margin-bottom="1em" margin-top="1em" class="first-line">
                <col width="60px"></col>
                <col width="200px"></col>
                <col width="140px"></col>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
n
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
\,\,10^n
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>{`name`}</VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
0
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
1
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`one`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
1
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`ten`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
2
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
100
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`hundred`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
3
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
1000
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`thousand`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
6
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
1\,000\,000
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`million`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
9
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
1\,000\,000\,000
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`billion`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
12
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
1\,000\,000\,000\,000
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`trillion`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
              </table>
            </div>
            <Pause></Pause>
            {`One can note that
`}
          </VerticalChunk>
          <CentralItalicDisplay>{`one million is a thousand thousand`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{`
because`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 1000 \times 1000 = 1000\hspace{0.3ex}000
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`by counting zeroes, or, equivalently, because`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 10^3 \times 10^3 = 10^6
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`by additivity of exponents. Similarly, note that`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`one billion is a thousand million`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {``}
            <ImageLeft src="/images/svg_ten_to_the_3_times_ten_to_the_6_cloud.svg"></ImageLeft>
          </VerticalChunk>
          <VerticalChunk>{`and `}</VerticalChunk>
          <CentralItalicDisplay>{`one trillion is a thousand billion`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {``}
            <ImageLeft src="/images/svg_ten_to_the_3_times_ten_to_the_9_cloud.svg"></ImageLeft>
          </VerticalChunk>
          <VerticalChunk>{`and also (while we're at it)`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`one trillion is a million million`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {``}
            <ImageRight src="/images/svg_ten_to_the_6_times_ten_to_the_6_cloud.svg"></ImageRight>
          </VerticalChunk>
          <VerticalChunk>
            {`as can be seen, for example, by replacing “billion”
with “thousand million” in the previous sentence and
then further replacing “thousand thousand” with “million”
in `}
            <i>{`that`}</i>
            {` sentence.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Negative exponent prefixes.`}</b>
            {`
For negative exponents we simply say “one tenth”
instead of “ten”, etc. Specifically, the table looks
like so:`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            <div align="center">
              <table margin-bottom="1em" margin-top="1em" class="first-line">
                <col width="60px"></col>
                <col width="200px"></col>
                <col width="140px"></col>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
n
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
\,\,10^n
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>{`name`}</VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
-1
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
0.1
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`one tenth`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
-2
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
0.01
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`one hundredth`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
-3
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
0.001
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`one thousandth`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
-6
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
0.000001
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`one millionth`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
-9
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
0.000000001
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`one trillionth`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
              </table>
            </div>
            <Pause></Pause>
            {`In passing, note how the standard decimal expansion
for `}
            <NoBreak>
              <Math>{`$
10^{-1}
$`}</Math>
            </NoBreak>
            {` contains exactly one `}
            <NoBreak>
              <Math>{`$
{0}
$`}</Math>
            </NoBreak>
            {`:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_one_blue_one_image_equation.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {`Likewise, the standard decimal expansion for `}
            <NoBreak>
              <Math>{`$
10^{-2}
$`}</Math>
            </NoBreak>
            {`
contains exactly two `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
            </NoBreak>
            {`'s...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_two_blue_one_image_equation.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{`...and so on, which is a possible trick to check 
one's work and avoid mistakes.`}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`However, there also exist negative exponent`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`prefixes`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`that people use to qualify other measures. For
example, a`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`millimeter`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`is `}
            <NoBreak>
              <Math>{`$
10^{-3}
$`}</Math>
            </NoBreak>
            {` meters, i.e., one thousandth of
a meter, because “milli” happens to be the prefix
for `}
            <NoBreak>
              <Math>{`$
10^{-3}
$`}</Math>
              {`.`}
            </NoBreak>
            {` Here is a list of the most common
such prefixes:`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            <div align="center">
              <table margin-bottom="1em" margin-top="1em" class="first-line">
                <col width="120px"></col>
                <col width="120px"></col>
                <tr>
                  <td align="center">
                    <VerticalChunk>{`power`}</VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>{`prefix`}</VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{-1}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`deci`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{-2}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`centi`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{-3}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`milli`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{-6}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`micro`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{-9}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`nano`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{-12}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`pico`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{-15}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`femto`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
              </table>
            </div>
            <Pause></Pause>
            {`(Funny how the prefixes switch from 
ending in ‘i’ to ending in ‘o’ after 
`}
            <NoBreak>
              <Math>{`$
10^{-3}
$`}</Math>
              {`.)`}
            </NoBreak>
            {` (Well, anyway.)`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{`To give an idea of scale,`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`micrometers`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`are smaller than the smallest animal
cells (human red blood cells, which 
are among the smallest animal cells,
have a diameter of
`}
            <NoBreak>
              <Math>{`$
7
$`}</Math>
            </NoBreak>
            {`~`}
            <NoBreak>
              <Math>{`$
9
$`}</Math>
            </NoBreak>
            {` `}
            <NoBreak>
              <Math>{`$
\mu\textrm{m}
$`}</Math>
              {`)`}
            </NoBreak>
            {` (nb: “`}
            <NoBreak>
              <Math>{`$
\mu
$`}</Math>
            </NoBreak>
            {`”
stands for “micro” and “`}
            <NoBreak>
              <Math>{`$
\mu
$`}</Math>
              {`m”`}
            </NoBreak>
            {` stands
for “micrometer”). Next down,`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`nanometers`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`happen to be smaller than the diameter
of DNA, with DNA having a diameter of
about `}
            <NoBreak>
              <Math>{`$
2.5
$`}</Math>
              {`nm`}
            </NoBreak>
            {` (“nm” = “nanometer”).`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {``}
            <b>{`Positive exponent prefixes.`}</b>
            {`
There exists a similar set of prefixes
for positve powers of `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
              {`.`}
            </NoBreak>
            {` Going up
to `}
            <NoBreak>
              <Math>{`$
10^{15}
$`}</Math>
              {`,`}
            </NoBreak>
            {` these are:`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            <div align="center">
              <table margin-bottom="1em" margin-top="1em" class="first-line">
                <col width="120px"></col>
                <col width="120px"></col>
                <tr>
                  <td align="center">
                    <VerticalChunk>{`power`}</VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>{`prefix`}</VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^1
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`deca`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{2}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`hecto`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{3}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`kilo`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{6}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`mega`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{9}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`giga`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{12}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`tera`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <NoBreak>
                        <Math>{`$
10^{15}
$`}</Math>
                      </NoBreak>
                      {``}
                    </VerticalChunk>
                  </td>
                  <td align="center">
                    <VerticalChunk>
                      {``}
                      <i>{`peta`}</i>
                      {``}
                    </VerticalChunk>
                  </td>
                </tr>
              </table>
            </div>
            <Pause></Pause>
            {`For example, a`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`kilometer`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`is a thousand meters
[b/`}
            <NoBreak>
              <Math>{`$
\!\hspace{0.1ex}\rm{c}
$`}</Math>
            </NoBreak>
            {` “kilo” = thousand], 
while a`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`terabyte`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`is a trillion bytes [b/`}
            <NoBreak>
              <Math>{`$
\!\hspace{0.1ex}\rm{c}
$`}</Math>
            </NoBreak>
            {` “tera” = trillion].
(In case you don't know, by the way, 
a `}
          </VerticalChunk>
          <CentralItalicDisplay>{`byte`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {` is a unit of computer memory
that is equal to `}
            <NoBreak>
              <Math>{`$
8
$`}</Math>
            </NoBreak>
            {` _bits_, with a `}
            <i>{`bit`}</i>
            {`
being a single 0/1 value.)`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {``}
            <b>{`Logarithms base 10.`}</b>
            {`
Every positive number can be uniquely 
written as “ten to the power something”.
This “something” will heretofore be called
the `}
            <i>
              {`logarithm base `}
              <NoBreak>
                <Math>{`$
\mathit{10}
$`}</Math>
              </NoBreak>
              {``}
            </i>
            {` of that 
(positive) number.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{`For example,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 100
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`can be uniquely written as “ten to the power
something”. To wit, `}
            <NoBreak>
              <Math>{`$
100
$`}</Math>
            </NoBreak>
            {` is, of course,`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {`ten to the power `}
            <NoBreak>
              <Math>{`$
\mathit{2}
$`}</Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`and this means that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is the logarithm base `}
            <NoBreak>
              <Math>{`$
10
$`}</Math>
            </NoBreak>
            {` of `}
            <NoBreak>
              <Math>{`$
100
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>{`It so happens that`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large 99 = 10^{1.99563519...}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`under an extended definition of exponentiation that allows us to 
compute `}
              <NoBreak>
                <Math>{`$
10^x
$`}</Math>
              </NoBreak>
              {` for every `}
              <NoBreak>
                <Math>{`$
x \in \rr
$`}</Math>
                {`.`}
              </NoBreak>
              {` 
So `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large 1.99563519...
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`is the logarithm base `}
              <NoBreak>
                <Math>{`$
10
$`}</Math>
              </NoBreak>
              {` of `}
              <NoBreak>
                <Math>{`$
99
$`}</Math>
              </NoBreak>
              {`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>{`It so happens that`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large 98 = 10^{1.99122607...}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`under the same extended definition, so `}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large 1.99122607...
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`is the logarithm base `}
              <NoBreak>
                <Math>{`$
10
$`}</Math>
              </NoBreak>
              {` of `}
              <NoBreak>
                <Math>{`$
98
$`}</Math>
              </NoBreak>
              {`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>{`Since`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large 0.1 = 10^{-1}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`the logarithm base `}
              <NoBreak>
                <Math>{`$
10
$`}</Math>
              </NoBreak>
              {` of `}
              <NoBreak>
                <Math>{`$
0.1
$`}</Math>
              </NoBreak>
              {` is `}
              <NoBreak>
                <Math>{`$
-1
$`}</Math>
              </NoBreak>
              {`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>{`Since`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              {`$$
\Large 0.00001 = 10^{-5}
$$`}
              <ImageRight src="/images/svg_ten_to_the_-5_cloud.svg"></ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`the logarithm base `}
              <NoBreak>
                <Math>{`$
10
$`}</Math>
              </NoBreak>
              {` of `}
              <NoBreak>
                <Math>{`$
0.00001
$`}</Math>
              </NoBreak>
              {` is `}
              <NoBreak>
                <Math>{`$
-5
$`}</Math>
              </NoBreak>
              {`.`}
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
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 1.`}</b>
              {`
Compute `}
              <NoBreak>
                <Math>{`$
2^{-2}
$`}</Math>
                {`,`}
              </NoBreak>
              {` `}
              <NoBreak>
                <Math>{`$
2^{-3}
$`}</Math>
              </NoBreak>
              {` and `}
              <NoBreak>
                <Math>{`$
2^{-4}
$`}</Math>
              </NoBreak>
              {` by hand.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={0}>
              <VerticalChunk>
                {`Since `}
                <NoBreak>
                  <Math>{`$
2^{-1} = 1/2 = 0.5
$`}</Math>
                  {`,`}
                </NoBreak>
                {` one has`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 2^{-2} = {2^{-1}\over 2} = {0.5 \over 2} = 0.25
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 2^{-3} = {2^{-2}\over 2} = {0.25 \over 2} = 0.125
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 2^{-4} = {2^{-3}\over 2} = {0.125 \over 2} = 0.0625
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`respectively.            `}</VerticalChunk>
              <VerticalChunk indent={true}>
                {``}
                <i>{`Notes.`}</i>
                {` 
For the last computation, `}
                <NoBreak>
                  <Math>{`$
0.125
$`}</Math>
                </NoBreak>
                {` can be viewed 
as twelve hundredths plus `}
                <NoBreak>
                  <Math>{`$
5
$`}</Math>
                </NoBreak>
                {` thousandths:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_0.125_twelve_5.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {`Half of twelve hundredths is six hundredths, and 
half of `}
                <NoBreak>
                  <Math>{`$
5
$`}</Math>
                </NoBreak>
                {` thousandths is `}
                <NoBreak>
                  <Math>{`$
2.5
$`}</Math>
                </NoBreak>
                {` thousandths:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_06_and_0025.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {`...so `}
                <NoBreak>
                  <Math>{`$
0.125/2
$`}</Math>
                </NoBreak>
                {` is `}
                <NoBreak>
                  <Math>{`$
0.06 + 0.0025 = 0.0625
$`}</Math>
                </NoBreak>
                {`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 2.`}</b>
              {`
Compute `}
              <NoBreak>
                <Math>{`$
100/16
$`}</Math>
              </NoBreak>
              {` by hand.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={1}>
              <VerticalChunk>{`We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {1 \over 16} = {1 \over 2\cdot 2\cdot 2\cdot 2} = 2^{-4} = 0.0625
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`so`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {100 \over 16} = 100 \cdot {1 \over 16} = 100\cdot 0.0625 = 6.25
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`and that's all there is to it! (Or you could repeatedly divide `}
                <NoBreak>
                  <Math>{`$
100
$`}</Math>
                </NoBreak>
                {` by `}
                <NoBreak>
                  <Math>{`$
2
$`}</Math>
                </NoBreak>
                {`,
until you reach `}
                <NoBreak>
                  <Math>{`$
6.25
$`}</Math>
                  {`,`}
                </NoBreak>
                {` after the fourth division.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 3.`}</b>
              {`
If “万” is Chinese for _ten thousand_, what is “万万” in English?
What about “万万万”?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={2}>
              <VerticalChunk>{`“万万” is “ten thousand ten thousand”, or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 10^4 \times 10^4 = 10^8
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`or `}
                <i>{`one hundred million`}</i>
                {` since `}
                <NoBreak>
                  <Math>{`$
10^8 = 10^2 \times 10^6
$`}</Math>
                </NoBreak>
                {` is a hundred times a 
million. Similarly, “万万万” is `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 10^4 \times 10^4 \times 10^4 = 10^{12}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`which is just one trillion.`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <Pause></Pause>
                {``}
                <i>{`Notes.`}</i>
                {`
Rearranging`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{``}</VerticalChunk>
              <CentralItalicDisplay>{`ten thousand ten thousand`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{``}</VerticalChunk>
              <VerticalChunk indent={true}>{`to`}</VerticalChunk>
              <VerticalChunk indent={true}>{``}</VerticalChunk>
              <CentralItalicDisplay>{`ten ten thousand thousand`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{``}</VerticalChunk>
              <VerticalChunk
                indent={true}>{`directly leads us to “hundred million” 
without having to use exponents, since ten
times ten is a hundred and since a thousand 
times a thousand is a million.`}</VerticalChunk>
              <VerticalChunk indent={true}>{`(Similarly,`}</VerticalChunk>
              <VerticalChunk indent={true}>{``}</VerticalChunk>
              <CentralItalicDisplay>{`ten thousand ten thousand ten thousand`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{``}</VerticalChunk>
              <VerticalChunk indent={true}>{`becomes`}</VerticalChunk>
              <VerticalChunk indent={true}>{``}</VerticalChunk>
              <CentralItalicDisplay>{`ten ten ten thousand thousand thousand`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{``}</VerticalChunk>
              <VerticalChunk
                indent={true}>{`after rearrangement, which can be seen to
equal one trillion because “ten ten ten” is
a thousand.)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 4.`}</b>
              {`
How many millimeters in a kilometer? 
How many kilometers in a millimeter?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={3}>
              <VerticalChunk>
                {`There are `}
                <NoBreak>
                  <Math>{`$
10^3
$`}</Math>
                </NoBreak>
                {` millimeters in a meter 
(`}
                <i>{`milli`}</i>
                {` = thousandth) and `}
                <NoBreak>
                  <Math>{`$
10^3
$`}</Math>
                </NoBreak>
                {` meters
in a kilometer, so there are 
`}
                <NoBreak>
                  <Math>{`$
10^3 \times 10^3 = 10^6
$`}</Math>
                </NoBreak>
                {` 
millimeters in a kilometer.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {`From there, it automatically follows that
there are `}
                <NoBreak>
                  <Math>{`$
1/10^6 = 10^{-6}
$`}</Math>
                </NoBreak>
                {` kilometers in
a millimeter.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {`(Or you can run the reverse reasoning: 
There are `}
                <NoBreak>
                  <Math>{`$
10^{-3}
$`}</Math>
                </NoBreak>
                {` kilometers in a meter, 
and `}
                <NoBreak>
                  <Math>{`$
10^{-3}
$`}</Math>
                </NoBreak>
                {` meters in a millimeter, 
so `}
                <NoBreak>
                  <Math>{`$
10^{-3} \times 10^{-3} = 10^{-6}
$`}</Math>
                </NoBreak>
                {` 
kilometers in a millimeter.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 5.`}</b>
              {`
How many kilometers is `}
              <NoBreak>
                <Math>{`$
10^{24}
$`}</Math>
              </NoBreak>
              {` millimeters?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={4}>
              <VerticalChunk>{`We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 1\textrm{mm} = 10^{-6}\textrm{km}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`by the previous problem, so `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 10^{24} \textrm{mm} = 10^{24}\cdot 10^{-6}\textrm{km} = 10^{18}\textrm{km}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`by direct substitution. (You can do that with
units.) The answer is therefore: `}
                <NoBreak>
                  <Math>{`$
10^{18}
$`}</Math>
                </NoBreak>
                {`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 6.`}</b>
              {`
If the US yearly budget is `}
              <NoBreak>
                <Math>{`$
4
$`}</Math>
              </NoBreak>
              {` trillion
dollars, what percentage of the budget is
one hundred billion \$?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={5}>
              <VerticalChunk>
                {`One hundred billion is `}
                <NoBreak>
                  <Math>{`$
10\%
$`}</Math>
                </NoBreak>
                {` of one trillion [cf.: 
`}
                <NoBreak>
                  <Math>{`$
10^2 \times 10^9 = {1 \over 10}\times 10^{12}
$`}</Math>
                </NoBreak>
                {`]
and one trillion is a quarter of `}
                <NoBreak>
                  <Math>{`$
4
$`}</Math>
                </NoBreak>
                {` 
trillion, so the answer is `}
                <NoBreak>
                  <Math>{`$
{1\over 4}\cdot 10\% = 2.5\%
$`}</Math>
                </NoBreak>
                {`.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <Pause></Pause>
                {``}
                <i>{`Postscript`}</i>
                {`:
There is no such thing as “the U.S. budget”. A
monetarily sovereign nation `}
                <i>{`spends`}</i>
                {` its currency
into existence. (And taxes it out of existence.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 7.`}</b>
              {`
What is the logarithm base `}
              <NoBreak>
                <Math>{`$
10
$`}</Math>
              </NoBreak>
              {` of one trillion?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={6}>
              <VerticalChunk>
                {``}
                <NoBreak>
                  <Math>{`$
12
$`}</Math>
                  {`,`}
                </NoBreak>
                {` because one trillion is `}
                <NoBreak>
                  <Math>{`$
10^{12}
$`}</Math>
                </NoBreak>
                {`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 8.`}</b>
              {`
What is the logarithm base `}
              <NoBreak>
                <Math>{`$
10
$`}</Math>
              </NoBreak>
              {` of `}
              <NoBreak>
                <Math>{`$
1
$`}</Math>
              </NoBreak>
              {`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={7}>
              <VerticalChunk>
                {``}
                <NoBreak>
                  <Math>{`$
0
$`}</Math>
                  {`,`}
                </NoBreak>
                {` because `}
                <NoBreak>
                  <Math>{`$
1 = 10^0
$`}</Math>
                </NoBreak>
                {`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 9.`}</b>
              {`
What is the logarithm base `}
              <NoBreak>
                <Math>{`$
10
$`}</Math>
              </NoBreak>
              {` of: `}
              <i>{`a trillion times a billion times a million times a thousand`}</i>
              {`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={8}>
              <VerticalChunk>{`Since `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
%\Large 10^{12}\times 10^{9}\times 10^{6}\times 10^3 = 10^{12+9+6+3} = 10^{30}
\Large 10^{12}\times 10^{9}\times 10^{6}\times 10^3 = 10^{12+9+6+3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`the answer is `}
                <NoBreak>
                  <Math>{`$
12+9+6+3
$`}</Math>
                  {`,`}
                </NoBreak>
                {` i.e., `}
                <NoBreak>
                  <Math>{`$
30
$`}</Math>
                  {`.`}
                </NoBreak>
                {` `}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 10.`}</b>
              {`
Evaluate:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large {10^6 \cdot 10^{-12} \cdot 10^{10} \over 10^{-4}\cdot 10^{-4}} 
$$`}</MathBlock>
            <div class="spacer"></div>
            <Solution solution_number={9}>
              <VerticalChunk>{`We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {10^6 \cdot 10^{-12} \cdot 10^{10} \over 10^{-4}\cdot 10^{-4}} = {10^{6-12+10} \over 10^{-4 -4}} = {10^4 \over 10^{-8}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {10^4 \over 10^{-8}} = 10^4 \cdot {1 \over 10^{-8}} = 10^4\cdot 10^{-(-8)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 10^4\cdot 10^{-(-8)} = 10^4\cdot 10^8 = 10^{4 + 8} = 10^{12}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`so the answer is `}
                <NoBreak>
                  <Math>{`$
10^{12}
$`}</Math>
                </NoBreak>
                {`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 11.`}</b>
              {`
How many `}
              <i>{`millibits`}</i>
              {` in a `}
              <i>{`gigabyte`}</i>
              {`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={10}>
              <VerticalChunk>
                {`Presumably, there are `}
                <NoBreak>
                  <Math>{`$
1000
$`}</Math>
                </NoBreak>
                {` “millibits”
(whatever those are, we can go along with
the joke here) in one bit. Since there are
eight bits in a byte, and a million bytes 
in a gigabyte, this means that there would
be`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 1000 \times 8 \times 10^6 = 8 \times 10^9
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`or `}
                <NoBreak>
                  <Math>{`$
8
$`}</Math>
                </NoBreak>
                {` billion “millibits” per gigabyte.
(But to reiterate, there is no such thing 
as a “millibit”; a bit is a _discrete_—i.e., 
indivisible—unit of computer memory.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 12.`}</b>
              {`
It so happens that `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large 6.25
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {` 
(i.e., the value of `}
              <NoBreak>
                <Math>{`$
100/16
$`}</Math>
                {`)`}
              </NoBreak>
              {` is also
famous for being equal to `}
              <NoBreak>
                <Math>{`$
2.5^2
$`}</Math>
                {`.`}
              </NoBreak>
              {` (You can 
verify that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large 25^2 = 625
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`and, by shifting two decimal places, one
finds `}
              <NoBreak>
                <Math>{`$
2.5^2 = 6.25
$`}</Math>
                {`.)`}
              </NoBreak>
              {` Can you elucidate
why it would be that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large {100 \over 16} = 2.5^2
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`by using some kind of algebra?`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={11}>
              <VerticalChunk>{`One has`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {100 \over 16} = {10^2 \over 4^2} = \left(\!{10\over 4}\!\right)^{\!\!2} = \left(\!{5\over 2}\!\right)^{\!\!2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`and `}
                <NoBreak>
                  <Math>{`$
5/2 = 2.5
$`}</Math>
                  {`.`}
                </NoBreak>
                {` (Ta-daa!)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 13.`}</b>
              {`
Prove that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large {10^n \over \vphantom{10^{A^n}}10^m} = 10^{n-m}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`for all integers `}
              <NoBreak>
                <Math>{`$
n
$`}</Math>
              </NoBreak>
              {` and `}
              <NoBreak>
                <Math>{`$
m
$`}</Math>
                {`.`}
              </NoBreak>
              {` (You can
take for granted any identity that is stated
in this `}
              <del>
                <VerticalChunk>{`chapter`}</VerticalChunk>
              </del>
              {`bootcamp.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={12}>
              <VerticalChunk>{`Here is the “proof” that your professor is 
hoping for:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_start_end_proof.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{`The point is that the second equality uses the identity`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {1 \over 10^m} = 10^{-m}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`stated earlier in the chapter as (A), while the third equality uses
additivity of exponents, also stated earlier. (So: We are only using “known”
facts, alongside some ordinary arithmetic.)`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <Pause></Pause>
                {``}
                <i>{`Notes.`}</i>
                {`
The identity proved in this exercise, 
when generalized to any base, 
is one of the “laws of exponents”, whose complete list 
(even more-than-complete, other sources list fewer laws)
is as follows (minus fine print):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_laws_exp.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{`The first law can be recognized as “additivity of exponents”
while the second law 
is the above-mentioned generalization of this exercise's result.
(Nb: Concerning the next-to-last law, note that, <i>by definition</i>,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large \left({a\over b}\right)^{\!-1} = {1 \over \left( {a \over b}\right)} 
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`and it so happens that`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {1 \over \left( {a \over b}\right)} = {b \over a}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`for all `}
                <NoBreak>
                  <Math>{`$
a, b \ne 0
$`}</Math>
                  {`,`}
                </NoBreak>
                {` by some principle of elementary arithmetic.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 14.`}</b>
              {`
Rewrite each of these expressions... `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large {L \over T}
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large {M (L/T) \over T}
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large \left.{ML \over T^2 } \right/ \left({L^2} {(L/T) \over L}\right) 
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{`...in the form...`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large M^aL^bT^c
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`...for some integer exponents `}
              <NoBreak>
                <Math>{`$
a
$`}</Math>
                {`,`}
              </NoBreak>
              {` `}
              <NoBreak>
                <Math>{`$
b
$`}</Math>
                {`,`}
              </NoBreak>
              {` `}
              <NoBreak>
                <Math>{`$
c
$`}</Math>
              </NoBreak>
              {`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={13}>
              <VerticalChunk>{`We have (#1)`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {L \over T} = LT^{-1} = M^0L^1T^{-1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {L \over T} = L\cdot {1\over T} = LT^{-1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`and (#2)`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {M (L/T) \over T} = MLT^{-2} = M^1L^1T^{-2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large {L/T \over T} = {L\over T}\cdot{1 \over T} = {L \over T^2} = LT^{-2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`and (#3)`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large \left.{ML \over T^2 } \right/ \left({L^2} {(L/T) \over L}\right) = ML^{-1}T^{-1} = M^1L^{-1}T^{-1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large L^2{L/T\over L} = L^2{1/T \over 1} = {L^2\over T}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large \left.{ML \over T^2 } \right/ {L^2\over T} = {ML\over T^2}\cdot {T\over L^2} = {M \over TL} = MT^{-1}L^{-1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`given that `}
                <NoBreak>
                  <Math>{`$
{1\over T} = T^{-1}
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
{1\over L}=L^{-1}
$`}</Math>
                </NoBreak>
                {`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise>
            <VerticalChunk>
              {``}
              <b>{`Exercise 15.`}</b>
              {`
Find integers `}
              <NoBreak>
                <Math>{`$
a
$`}</Math>
                {`,`}
              </NoBreak>
              {` `}
              <NoBreak>
                <Math>{`$
b
$`}</Math>
              </NoBreak>
              {` and `}
              <NoBreak>
                <Math>{`$
c
$`}</Math>
              </NoBreak>
              {` such that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large v^aF^b\mu^c\rho = 1
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {`where `}
              <NoBreak>
                <Math>{`$
v
$`}</Math>
                {`,`}
              </NoBreak>
              {` `}
              <NoBreak>
                <Math>{`$
F
$`}</Math>
                {`,`}
              </NoBreak>
              {` `}
              <NoBreak>
                <Math>{`$
\mu
$`}</Math>
              </NoBreak>
              {` and `}
              <NoBreak>
                <Math>{`$
\rho
$`}</Math>
              </NoBreak>
              {` are defined as below.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large v = {L \over T}
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large F = {ML \over T^2}
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large \mu = {M \over TL }
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{`$$
\Large \rho = {M \over L^3}
$$`}</MathBlock>
            <div class="spacer"></div>
            <Solution solution_number={14}>
              <VerticalChunk>
                {`Firstly we can rewrite `}
                <NoBreak>
                  <Math>{`$
v
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
F
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
\mu
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
\rho
$`}</Math>
                </NoBreak>
                {`
in the canonical form `}
                <NoBreak>
                  <Math>{`$
M^xL^yT^z
$`}</Math>
                </NoBreak>
                {`
for integers `}
                <NoBreak>
                  <Math>{`$
x
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
y
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
z
$`}</Math>
                </NoBreak>
                {` (as in the previous
exercise):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large v = LT^{-1} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large F = MLT^{-2} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large \mu = MT^{-1}L^{-1} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large \rho = ML^{-3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`(Ok.) Nextly, we compute `}
                <NoBreak>
                  <Math>{`$
v^a
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
F^b
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
\mu^c
$`}</Math>
                </NoBreak>
                {`
by applying the fourth law of exponents (note e.g.
that `}
                <NoBreak>
                  <Math>{`$
(T^{-1})^a = T^{(-1)a} = T^{-a}
$`}</Math>
                  {`,`}
                </NoBreak>
                {` etc):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large v^a = L^aT^{-a} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large F^b = M^{b}L^bT^{-2b} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large \mu^c = M^cT^{-c}L^{-c} \vphantom{\rho = ML^{-3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large \rho = ML^{-3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`(In the last line we just restated `}
                <NoBreak>
                  <Math>{`$
\rho
$`}</Math>
                </NoBreak>
                {`.)
Then `}
                <NoBreak>
                  <Math>{`$
v^aF^b\mu^c\rho
$`}</Math>
                </NoBreak>
                {` becomes`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large M^{b+c+1}L^{a+b-c-3}T^{-a-2b-c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`by multiplying everything together and using
additivity of exponents. (E.g., `}
                <NoBreak>
                  <Math>{`$
M^bM^cM = M^{b+c+1}
$`}</Math>
                </NoBreak>
                {`,
and so on.) This expression equals `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {` 
independently of the values of `}
                <NoBreak>
                  <Math>{`$
M
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
L
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
T
$`}</Math>
                </NoBreak>
                {`
if and only if...`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{``}</VerticalChunk>
              <CentralItalicDisplay>{`the three exponents are zero`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {`...(!!!) which means that we need to find values
`}
                <NoBreak>
                  <Math>{`$
a
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
b
$`}</Math>
                </NoBreak>
                {` and `}
                <NoBreak>
                  <Math>{`$
c
$`}</Math>
                </NoBreak>
                {` such that these three equations...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large b + c + 1 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large a + b - c - 3 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>
                {`$$
\Large -a -2b - c = 0
$$`}
                <ImageRight
                  offset_y="1em"
                  src="/images/svg_add_equations_cloud.svg"></ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`...are satisfied! Adding the second and 
third equation together, we find `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large -b -2c -3 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`and adding this last equation to the first
equation above, we find `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large -c -2 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`which implies that `}
                <NoBreak>
                  <Math>{`$
-c = 2
$`}</Math>
                  {`,`}
                </NoBreak>
                {` i.e., that `}
                <NoBreak>
                  <Math>{`$
c = -2
$`}</Math>
                  {`.`}
                </NoBreak>
                {` 
Plugging `}
                <NoBreak>
                  <Math>{`$
c = -2
$`}</Math>
                </NoBreak>
                {` into the first of our three
equations, we find`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large b + (-2) + 1 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{`or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large b - 1 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`which implies that `}
                <NoBreak>
                  <Math>{`$
b = 1
$`}</Math>
                  {`.`}
                </NoBreak>
                {` Lastly, plugging
`}
                <NoBreak>
                  <Math>{`$
b = 1
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
c = -2
$`}</Math>
                </NoBreak>
                {` in our second equation above
gives us `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large a + 1 - (-2) - 3 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`which implies that `}
                <NoBreak>
                  <Math>{`$
a = 0
$`}</Math>
                </NoBreak>
                {` since `}
                <NoBreak>
                  <Math>{`$
1-(-2)-3 = 0
$`}</Math>
                </NoBreak>
                {`.
(One can finally check that 
setting `}
                <NoBreak>
                  <Math>{`$
a=0
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
b = 1
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
c=-2
$`}</Math>
                </NoBreak>
                {` satisfies that
third equation, `}
                <NoBreak>
                  <Math>{`$
-a-2b-c=0
$`}</Math>
                  {`,`}
                </NoBreak>
                {` which it does.)`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {`In summary, the solution is `}
                <NoBreak>
                  <Math>{`$
a = 0
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
b = 1
$`}</Math>
                </NoBreak>
                {`,
`}
                <NoBreak>
                  <Math>{`$
c = -2
$`}</Math>
                  {`;`}
                </NoBreak>
                {` we have discovered that `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large v^0 F^1 \mu^{-2} \rho = 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`under the given definitions of `}
                <NoBreak>
                  <Math>{`$
v
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
F
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
\mu
$`}</Math>
                </NoBreak>
                {`
and `}
                <NoBreak>
                  <Math>{`$
\rho
$`}</Math>
                  {`,`}
                </NoBreak>
                {` or which is to say, we have discovered
that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{`$$
\Large F\mu^{-2}\rho = 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {`(since `}
                <NoBreak>
                  <Math>{`$
v^0 = 1
$`}</Math>
                  {`,`}
                </NoBreak>
                {` `}
                <NoBreak>
                  <Math>{`$
F^1 = F
$`}</Math>
                </NoBreak>
                {`).`}
              </VerticalChunk>
            </Solution>
          </Exercise>
        </Exercises>
      </Bootcamp2>{" "}
    </>
  );
};
