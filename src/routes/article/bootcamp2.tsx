import Bootcamp from "~/components/Bootcamp";
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
    <Bootcamp
         number={2}
         title="Powers of 10">
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Terminology.
          </b>
          {" "}
          The expression below is called a{" "}
          <i>
            power
          </i>
          ; 
          the number at the bottom of the power is called
          the{" "}
          <i>
            base
          </i>
          {" "}(of the power); the number at the top
          is called the{" "}
          <i>
            exponent
          </i>
          :
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_base_exponent.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          The whole expression is read{" "}
          <NoBreak>
            <Math>
              $
              \mathit&#123;10&#125;
              $
            </Math>
          </NoBreak>
          {" "}{" "}
          <i>
            to the power
          </i>
          {" "}{" "}
          <NoBreak>
            <Math>
              $
              \mathit&#123;3&#125;
              $
            </Math>
            ,
          </NoBreak>
          {" "}and the
          general process of taking a power is called{" "}
          <i>
            exponentiation
          </i>
          .
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Integer powers of 10.
          </b>
          {" "}
          We define
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;\hspace&#123;0.2ex&#125;n&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          as follows, if{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
          </NoBreak>
          {" "}is a nonnegative integer: start
          from{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          {" "}and multiply by{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
          </NoBreak>
          {" "}times. We also define
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;-n&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          as follows, if{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
          </NoBreak>
          {" "}is a positive integer: start from{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          {" "}and divide
          by{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
          </NoBreak>
          {" "}times.{" "}
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          For example,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^4 = 1 \times 10 \times 10 \times 10 \times 10 = 10000
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^3 = 1 \times 10 \times 10 \times 10 = 1000
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^2 = 1 \times 10 \times 10 = 100
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^1 = 1 \times 10 = 10
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^0 = 1 = 1
          $$
          <ImageLeft
               src="/images/svg_ten_to_the_0_cloud.svg" />
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          (where, in the last line,{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          {" "}is multiplied by{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          {" "}{" "}
          <i>
            zero times
          </i>
          ,
          as per the exponent, which is zero) by the first definition, while
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;-1&#125; = 1\,/\,10 = 0.1
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;-2&#125; = (1\,/\, 10)\,/\,10 = 0.01
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;-3&#125; = ((1\,/\, 10)\,/\,10)\,/\,10 = 0.001
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;-4&#125; = (((1\,/\, 10)\,/\,10)\,/\, 10)\,/\, 10 = 0.0001
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          by the second definition.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          As{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
          </NoBreak>
          {" "}successive divisions
          by{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          {" "}is the same as one division by{" "}
          <NoBreak>
            <Math>
              $
              10^n
              $
            </Math>
            ,
          </NoBreak>
          {" "}one also has
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;-n&#125; = &#123;1 \over 10^&#123;\hspace&#123;0.2ex&#125;n&#125;&#125;\tag&#123;A&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          for every positive integer{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
            ,
          </NoBreak>
          {" "}which gives an alternate means of computing{" "}
          <NoBreak>
            <Math>
              $
              10^&#123;-n&#125;
              $
            </Math>
          </NoBreak>
          .
          Moreover, (A) actually holds for
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          every
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          integer{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
            ,
          </NoBreak>
          {" "}which is mildly important. In more
          detail, (A) holds for{" "}
          <NoBreak>
            <Math>
              $
              n = 0
              $
            </Math>
          </NoBreak>
          {" "}by inspection, and (A) 
          is equivalent to the identity
          <ImageLeft
               src="/images/svg_zero_verification_cloud.svg" />
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;-n&#125;10^n = 1 \tag&#123;AA&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          which holds for{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
          </NoBreak>
          {" "}if and only if it holds for
          {" "}
          <NoBreak>
            <Math>
              $
              -n
              $
            </Math>
            .
          </NoBreak>
          {" "}(By which we mean: replacing “
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
            ”
          </NoBreak>
          {" "}by “
          <NoBreak>
            <Math>
              $
              -n
              $
            </Math>
          </NoBreak>
          ”
          in (AA) lands you right back on (AA), due to the fact
          that{" "}
          <NoBreak>
            <Math>
              $
              -&#123;(-n)&#125; = n
              $
            </Math>
            .)
          </NoBreak>
          {" "}(So, namely, if (AA) holds for all
          positive values of{" "}
          <NoBreak>
            <Math>
              $
              \hspace&#123;0.05em&#125;n
              $
            </Math>
            ,
          </NoBreak>
          {" "}then it holds
          for all negative values of{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
            ,
          </NoBreak>
          {" "}as well.)
        </VerticalChunk>
        <div
             class="spacer" />
        <Pause />
        <VerticalChunk>
          {" "}{" "}
          <b>
            Vocabulary.
          </b>
          {" "}
          Numbers{" "}
          <NoBreak>
            <Math>
              $
              a
              $
            </Math>
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $
              b
              $
            </Math>
          </NoBreak>
          {" "}such that
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large ab = 1
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          are{" "}
          <i>
            reciprocal
          </i>
          .
          If{" "}
          <NoBreak>
            <Math>
              $
              a
              $
            </Math>
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $
              b
              $
            </Math>
          </NoBreak>
          {" "}are reciprocal, then 
          these equations are satisfied...
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large ab = 1 \qquad a = &#123;1 \over b&#125; \qquad b = &#123;1 \over a&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          ...and any one of these equations implies the other two.
          Thus, either of (A) and (AA) expresses the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          reciprocality
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          of{" "}
          <NoBreak>
            <Math>
              $
              10^n
              $
            </Math>
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $
              10^&#123;-n&#125;
              $
            </Math>
          </NoBreak>
          .
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Other bases.
          </b>
          {" "}
          Integer powers of other nonzero bases are defined similarly, e.g.,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 2^&#123;-2&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is defined as{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          {" "}divided by{" "}
          <NoBreak>
            <Math>
              $
              2
              $
            </Math>
          </NoBreak>
          {" "}twice, etc.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          However, a small quirk occurs for base{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
            :
          </NoBreak>
          {" "}as one cannot
          divide by{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
            ,
          </NoBreak>
          {" "}negative powers of{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
          </NoBreak>
          {" "}remain undefined. E.g.,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 0^&#123;-2&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          would be “
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          {" "}divided by{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
          </NoBreak>
          {" "}twice”, but this
          is undefined. 
          Hence{" "}
          <NoBreak>
            <Math>
              $
              0^&#123;-1&#125;
              $
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $
              0^&#123;-2&#125;
              $
            </Math>
            ,
          </NoBreak>
          {" "}etc, remain undefined.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Also (in case you're wondering){" "}
          <NoBreak>
            <Math>
              $
              0^0 = 1
              $
            </Math>
          </NoBreak>
          .
          You can see this by writing down the first few powers of{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
          </NoBreak>
          {" "}in descending order:
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 0^3 = 1 \times 0 \times 0 \times 0 = 0
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 0^2 = 1 \times 0 \times 0 = 0
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 0^1 = 1 \times 0 = 0
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 0^0 = 1 = 1
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          In other words, every positive power of{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
          </NoBreak>
          {" "}is zero, 
          but when it comes to{" "}
          <NoBreak>
            <Math>
              $
              0^0
              $
            </Math>
          </NoBreak>
          ,
          the ‘
          <NoBreak>
            <Math>
              $
              0\hspace&#123;0.12ex&#125;
              $
            </Math>
            ’
          </NoBreak>
          {" "}in the
          exponent “wins out” over the ‘
          <NoBreak>
            <Math>
              $
              0\hspace&#123;0.12ex&#125;
              $
            </Math>
            ’
          </NoBreak>
          {" "}in the base, 
          making the result{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          .
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Note that mathematicians sometimes refer 
          to a power with an exponent of{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
          </NoBreak>
          {" "}as an
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          empty product
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          and they will repeatedly admonish that
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          an empty product is{" "}
          <NoBreak>
            <Math>
              $
              \mathit&#123;1&#125;
              $
            </Math>
          </NoBreak>
          {" "}{" "}
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          in the sense that “all products start at 
          {" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
            ”,
          </NoBreak>
          {" "}and that if you start at{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          {" "}and don't
          multiply anything in, you stay at{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          .
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Additivity of exponents.
          </b>
          {" "}
          If you think about it,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;13&#125; \times 10^&#123;14&#125; = 10^&#123;\hspace&#123;0.1ex&#125;27&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          because{" "}
          <NoBreak>
            <Math>
              $
              13
              $
            </Math>
          </NoBreak>
          {" "}multiplications by{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          {" "}followed
          by{" "}
          <NoBreak>
            <Math>
              $
              14
              $
            </Math>
          </NoBreak>
          {" "}multiplications by{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          {" "}makes{" "}
          <NoBreak>
            <Math>
              $
              13 + 14 = 27
              $
            </Math>
          </NoBreak>
          {" "}
          multiplications by{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          .
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          More generally,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^&#123;\hspace&#123;0.1ex&#125;n&#125; \times 10^&#123;\hspace&#123;0.1ex&#125;m&#125; = 10^&#123;\hspace&#123;0.1ex&#125;n + m&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $
              m
              $
            </Math>
          </NoBreak>
          {" "}(and other bases than{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          ),
          which is known as
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          additivity of exponents
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          and which is sometimes paraphrased by saying
          that
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          the product of the powers is the power of the sum
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          where{" "}
          <i>
            the product of the powers
          </i>
          {" "}refers to
          “
          <NoBreak>
            <Math>
              $
              10^n \times 10^m
              $
            </Math>
            ”
          </NoBreak>
          {" "}and{" "}
          <i>
            the power of the sum
          </i>
          {" "}
          refers to “
          <NoBreak>
            <Math>
              $
              10^&#123;n+m&#125;
              $
            </Math>
            ”.
          </NoBreak>
          {" "}(Or for some other base.)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            The third law of exponents.
          </b>
          {" "}
          Also, if you think about it,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large (10^&#123;13&#125;)^&#123;14&#125; = 10^&#123;13\cdot 14&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          because multiplying{" "}
          <NoBreak>
            <Math>
              $
              14
              $
            </Math>
          </NoBreak>
          {" "}times by{" "}
          <NoBreak>
            <Math>
              $
              10^&#123;13&#125;
              $
            </Math>
          </NoBreak>
          {" "}is like
          multiplying{" "}
          <NoBreak>
            <Math>
              $
              13\cdot 14
              $
            </Math>
          </NoBreak>
          {" "}times by{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
            .
          </NoBreak>
          {" "}More
          generally,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large (10^n)^m = 10^&#123;nm&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $
              m
              $
            </Math>
            .
          </NoBreak>
          {" "}This is known as “the third law 
          of exponents”.{" "}
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          On this subject, note that if one writes
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large a^&#123;b^&#123;c&#125;&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [“
          <NoBreak>
            <Math>
              $
              a
              $
            </Math>
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $
              b
              $
            </Math>
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $
              c
              $
            </Math>
          </NoBreak>
          ”]
          there is a seeming ambiguity: does it mean
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large a^&#123;\left(b^&#123;c&#125;\right)&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [“
          <NoBreak>
            <Math>
              $
              a
              $
            </Math>
          </NoBreak>
          {" "}to the power [
          <NoBreak>
            <Math>
              $
              b
              $
            </Math>
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $
              c
              $
            </Math>
          </NoBreak>
          ]”]
          or does it mean
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large (a^&#123;b&#125;)^&#123;c&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [“[
          <NoBreak>
            <Math>
              $
              a
              $
            </Math>
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $
              b
              $
            </Math>
            ]
          </NoBreak>
          {" "}to the power{" "}
          <NoBreak>
            <Math>
              $
              c
              $
            </Math>
          </NoBreak>
          ”]...?
          Well, because the second way can be written
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large a^&#123;bc&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          by the third law of exponents, the second way already has  
          “its own” notation, and therefore the convention is that...{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large a^&#123;b^c&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          ...absolutely always means...{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large a^&#123;\left(b^c\right)&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          ...!
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Famous powers of 10.
          </b>
          {" "}
          Many human languages have special names for
          various integer powers of{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
            ,
          </NoBreak>
          {" "}due to the fact
          that many of our ancestors chose to count in base
          {" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          .
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          In English, e.g., these are some of the “famous”
          powers of{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          :
        </VerticalChunk>
        <div
             class="slice align-center">
          <table
               margin-bottom="1em"
               margin-top="1em"
               class="first-line">
            <colgroup>
              <col
                   width="60px" />
              <col
                   width="200px" />
              <col
                   width="140px" />
            </colgroup>
            <tbody>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        n
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        \,\,10^n
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    name
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        0
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        1
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      one
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        1
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      ten
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        2
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        100
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      hundred
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        3
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        1000
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      thousand
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        6
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        1\,000\,000
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      million
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        9
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        1\,000\,000\,000
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      billion
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        12
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        1\,000\,000\,000\,000
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      trillion
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
             class="spacer" />
        <Pause />
        <VerticalChunk>
          One can note that
          {" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          one million is a thousand thousand
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          {" "}
          because
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 1000 \times 1000 = 1000\hspace&#123;0.3ex&#125;000
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          by counting zeroes, or, equivalently, because
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 10^3 \times 10^3 = 10^6
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          by additivity of exponents. Similarly, note that
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          one billion is a thousand million
          <ImageLeft
               src="/images/svg_ten_to_the_3_times_ten_to_the_6_cloud.svg" />
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          and{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          one trillion is a thousand billion
          <ImageLeft
               src="/images/svg_ten_to_the_3_times_ten_to_the_9_cloud.svg" />
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          and also (while we're at it)
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          one trillion is a million million
          <ImageRight
               src="/images/svg_ten_to_the_6_times_ten_to_the_6_cloud.svg" />
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          as can be seen, for example, by replacing “billion”
          with “thousand million” in the previous sentence and
          then further replacing “thousand thousand” with “million”
          in{" "}
          <i>
            that
          </i>
          {" "}sentence.
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Negative exponent prefixes.
          </b>
          {" "}
          For negative exponents we simply say “one tenth”
          instead of “ten”, etc. Specifically, the table looks
          like so:
        </VerticalChunk>
        <div
             class="slice align-center">
          <table
               margin-bottom="1em"
               margin-top="1em"
               class="first-line">
            <colgroup>
              <col
                   width="60px" />
              <col
                   width="200px" />
              <col
                   width="140px" />
            </colgroup>
            <tbody>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        n
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        \,\,10^n
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    name
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        -1
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        0.1
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      one tenth
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        -2
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        0.01
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      one hundredth
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        -3
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        0.001
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      one thousandth
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        -6
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        0.000001
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      one millionth
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        -9
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        0.000000001
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      one trillionth
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
             class="spacer" />
        <Pause />
        <VerticalChunk>
          In passing, note how the standard decimal expansion
          for{" "}
          <NoBreak>
            <Math>
              $
              10^&#123;-1&#125;
              $
            </Math>
          </NoBreak>
          {" "}contains exactly one{" "}
          <NoBreak>
            <Math>
              $
              &#123;0&#125;
              $
            </Math>
          </NoBreak>
          :
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_one_blue_one_image_equation.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          Likewise, the standard decimal expansion for{" "}
          <NoBreak>
            <Math>
              $
              10^&#123;-2&#125;
              $
            </Math>
          </NoBreak>
          {" "}
          contains exactly two{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
          </NoBreak>
          's...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_two_blue_one_image_equation.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          ...and so on, which is a possible trick to check 
          one's work and avoid mistakes.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          However, there also exist negative exponent
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          prefixes
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          that people use to qualify other measures. For
          example, a
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          millimeter
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          is{" "}
          <NoBreak>
            <Math>
              $
              10^&#123;-3&#125;
              $
            </Math>
          </NoBreak>
          {" "}meters, i.e., one thousandth of
          a meter, because “milli” happens to be the prefix
          for{" "}
          <NoBreak>
            <Math>
              $
              10^&#123;-3&#125;
              $
            </Math>
            .
          </NoBreak>
          {" "}Here is a list of the most common
          such prefixes:
        </VerticalChunk>
        <div
             class="slice align-center">
          <table
               margin-bottom="1em"
               margin-top="1em"
               class="first-line">
            <colgroup>
              <col
                   width="120px" />
              <col
                   width="120px" />
            </colgroup>
            <tbody>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    power
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    prefix
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;-1&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      deci
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;-2&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      centi
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;-3&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      milli
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;-6&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      micro
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;-9&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      nano
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;-12&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      pico
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;-15&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      femto
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
             class="spacer" />
        <Pause />
        <VerticalChunk>
          (Funny how the prefixes switch from 
          ending in ‘i’ to ending in ‘o’ after 
          {" "}
          <NoBreak>
            <Math>
              $
              10^&#123;-3&#125;
              $
            </Math>
            .)
          </NoBreak>
          {" "}(Well, anyway.)
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          To give an idea of scale,
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          micrometers
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          are smaller than the smallest animal
          cells (human red blood cells, which 
          are among the smallest animal cells,
          have a diameter of
          {" "}
          <NoBreak>
            <Math>
              $
              7
              $
            </Math>
          </NoBreak>
          ~
          <NoBreak>
            <Math>
              $
              9
              $
            </Math>
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $
              \mu\textrm&#123;m&#125;
              $
            </Math>
            )
          </NoBreak>
          {" "}(nb: “
          <NoBreak>
            <Math>
              $
              \mu
              $
            </Math>
          </NoBreak>
          ”
          stands for “micro” and “
          <NoBreak>
            <Math>
              $
              \mu
              $
            </Math>
            m”
          </NoBreak>
          {" "}stands
          for “micrometer”). Next down,
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          nanometers
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          happen to be smaller than the diameter
          of DNA, with DNA having a diameter of
          about{" "}
          <NoBreak>
            <Math>
              $
              2.5
              $
            </Math>
            nm
          </NoBreak>
          {" "}(“nm” = “nanometer”).
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          {" "}{" "}
          <b>
            Positive exponent prefixes.
          </b>
          {" "}
          There exists a similar set of prefixes
          for positve powers of{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
            .
          </NoBreak>
          {" "}Going up
          to{" "}
          <NoBreak>
            <Math>
              $
              10^&#123;15&#125;
              $
            </Math>
            ,
          </NoBreak>
          {" "}these are:
        </VerticalChunk>
        <div
             class="slice align-center">
          <table
               margin-bottom="1em"
               margin-top="1em"
               class="first-line">
            <colgroup>
              <col
                   width="120px" />
              <col
                   width="120px" />
            </colgroup>
            <tbody>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    power
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    prefix
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^1
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      deca
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;2&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      hecto
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;3&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      kilo
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;6&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      mega
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;9&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      giga
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;12&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      tera
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
              <tr>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        10^&#123;15&#125;
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
                <td
                     class="align-center">
                  <VerticalChunk>
                    {" "}{" "}
                    <i>
                      peta
                    </i>
                    {" "}{" "}
                  </VerticalChunk>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
             class="spacer" />
        <Pause />
        <VerticalChunk>
          For example, a
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          kilometer
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          is a thousand meters
          [b/
          <NoBreak>
            <Math>
              $
              \!\hspace&#123;0.1ex&#125;\rm&#123;c&#125;
              $
            </Math>
          </NoBreak>
          {" "}“kilo” = thousand], 
          while a
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          terabyte
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          is a trillion bytes [b/
          <NoBreak>
            <Math>
              $
              \!\hspace&#123;0.1ex&#125;\rm&#123;c&#125;
              $
            </Math>
          </NoBreak>
          {" "}“tera” = trillion].
          (In case you don't know, by the way, 
          a{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          byte
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          {" "}is a unit of computer memory
          that is equal to{" "}
          <NoBreak>
            <Math>
              $
              8
              $
            </Math>
          </NoBreak>
          {" "}{" "}
          <i>
            bits
          </i>
          , with a{" "}
          <i>
            bit
          </i>
          {" "}
          being a single 0/1 value.)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Logarithms base 10.
          </b>
          {" "}
          Every positive number can be uniquely 
          written as “ten to the power something”.
          This “something” will heretofore be called
          the{" "}
          <i>
            logarithm base{" "}
            <NoBreak>
              <Math>
                $
                \mathit&#123;10&#125;
                $
              </Math>
            </NoBreak>
            {" "}{" "}
          </i>
          {" "}of that 
          (positive) number.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          For example,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 100
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          can be uniquely written as “ten to the power
          something”. To wit,{" "}
          <NoBreak>
            <Math>
              $
              100
              $
            </Math>
          </NoBreak>
          {" "}is, of course,
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          ten to the power{" "}
          <NoBreak>
            <Math>
              $
              \mathit&#123;2&#125;
              $
            </Math>
          </NoBreak>
          {" "}{" "}
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          and this means that
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large 2
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is the logarithm base{" "}
          <NoBreak>
            <Math>
              $
              10
              $
            </Math>
          </NoBreak>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $
              100
              $
            </Math>
          </NoBreak>
          .
        </VerticalChunk>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 1.
            </b>
            {" "}
            It so happens that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large 99 = 10^&#123;1.99563519...&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            under an extended definition of exponentiation that allows us to 
            compute{" "}
            <NoBreak>
              <Math>
                $
                10^x
                $
              </Math>
            </NoBreak>
            {" "}for every{" "}
            <NoBreak>
              <Math>
                $
                x \in \rr
                $
              </Math>
              .
            </NoBreak>
            {" "}
            So{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large 1.99563519...
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            is the logarithm base{" "}
            <NoBreak>
              <Math>
                $
                10
                $
              </Math>
            </NoBreak>
            {" "}of{" "}
            <NoBreak>
              <Math>
                $
                99
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
        </Example>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 2.
            </b>
            {" "}
            It so happens that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large 98 = 10^&#123;1.99122607...&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            under the same extended definition, so{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large 1.99122607...
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            is the logarithm base{" "}
            <NoBreak>
              <Math>
                $
                10
                $
              </Math>
            </NoBreak>
            {" "}of{" "}
            <NoBreak>
              <Math>
                $
                98
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
        </Example>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 3.
            </b>
            {" "}
            Since
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large 0.1 = 10^&#123;-1&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            the logarithm base{" "}
            <NoBreak>
              <Math>
                $
                10
                $
              </Math>
            </NoBreak>
            {" "}of{" "}
            <NoBreak>
              <Math>
                $
                0.1
                $
              </Math>
            </NoBreak>
            {" "}is{" "}
            <NoBreak>
              <Math>
                $
                -1
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
        </Example>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 4.
            </b>
            {" "}
            Since
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large 0.00001 = 10^&#123;-5&#125;
            $$
            <ImageRight
                 src="/images/svg_ten_to_the_-5_cloud.svg" />
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            the logarithm base{" "}
            <NoBreak>
              <Math>
                $
                10
                $
              </Math>
            </NoBreak>
            {" "}of{" "}
            <NoBreak>
              <Math>
                $
                0.00001
                $
              </Math>
            </NoBreak>
            {" "}is{" "}
            <NoBreak>
              <Math>
                $
                -5
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
        </Example>
      </Section>
      <div
           class="spacer" />
      <Exercises
           labels={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]}>
        <Exercise
             exercise_number={0}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 1.
            </b>
            {" "}
            Compute{" "}
            <NoBreak>
              <Math>
                $
                2^&#123;-2&#125;
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                2^&#123;-3&#125;
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                2^&#123;-4&#125;
                $
              </Math>
            </NoBreak>
            {" "}by hand.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={0}>
            <VerticalChunk>
              Since{" "}
              <NoBreak>
                <Math>
                  $
                  2^&#123;-1&#125; = 1/2 = 0.5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}one has
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 2^&#123;-2&#125; = &#123;2^&#123;-1&#125;\over 2&#125; = &#123;0.5 \over 2&#125; = 0.25
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 2^&#123;-3&#125; = &#123;2^&#123;-2&#125;\over 2&#125; = &#123;0.25 \over 2&#125; = 0.125
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 2^&#123;-4&#125; = &#123;2^&#123;-3&#125;\over 2&#125; = &#123;0.125 \over 2&#125; = 0.0625
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              respectively.{" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              {" "}{" "}
              <i>
                Notes.
              </i>
              {" "}
              For the last computation,{" "}
              <NoBreak>
                <Math>
                  $
                  0.125
                  $
                </Math>
              </NoBreak>
              {" "}can be viewed 
              as twelve hundredths plus{" "}
              <NoBreak>
                <Math>
                  $
                  5
                  $
                </Math>
              </NoBreak>
              {" "}thousandths:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_0.125_twelve_5.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Half of twelve hundredths is six hundredths, and 
              half of{" "}
              <NoBreak>
                <Math>
                  $
                  5
                  $
                </Math>
              </NoBreak>
              {" "}thousandths is{" "}
              <NoBreak>
                <Math>
                  $
                  2.5
                  $
                </Math>
              </NoBreak>
              {" "}thousandths:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_06_and_0025.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...so{" "}
              <NoBreak>
                <Math>
                  $
                  0.125/2
                  $
                </Math>
              </NoBreak>
              {" "}is{" "}
              <NoBreak>
                <Math>
                  $
                  0.06 + 0.0025 = 0.0625
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={1}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 2.
            </b>
            {" "}
            Compute{" "}
            <NoBreak>
              <Math>
                $
                100/16
                $
              </Math>
            </NoBreak>
            {" "}by hand.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={1}>
            <VerticalChunk>
              We have
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;1 \over 16&#125; = &#123;1 \over 2\cdot 2\cdot 2\cdot 2&#125; = 2^&#123;-4&#125; = 0.0625
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              so
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;100 \over 16&#125; = 100 \cdot &#123;1 \over 16&#125; = 100\cdot 0.0625 = 6.25
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and that's all there is to it! (Or you could repeatedly divide{" "}
              <NoBreak>
                <Math>
                  $
                  100
                  $
                </Math>
              </NoBreak>
              {" "}by{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
              </NoBreak>
              ,
              until you reach{" "}
              <NoBreak>
                <Math>
                  $
                  6.25
                  $
                </Math>
                ,
              </NoBreak>
              {" "}after the fourth division.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={2}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 3.
            </b>
            {" "}
            If “万” is Chinese for{" "}
            <i>
              ten thousand
            </i>
            , what is “万万” in English?
            What about “万万万”?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={2}>
            <VerticalChunk>
              “万万” is “ten thousand ten thousand”, or
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 10^4 \times 10^4 = 10^8
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              or{" "}
              <i>
                one hundred million
              </i>
              {" "}since{" "}
              <NoBreak>
                <Math>
                  $
                  10^8 = 10^2 \times 10^6
                  $
                </Math>
              </NoBreak>
              {" "}is a hundred times a 
              million. Similarly, “万万万” is{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 10^4 \times 10^4 \times 10^4 = 10^&#123;12&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which is just one trillion.
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Notes.
              </i>
              {" "}
              Rearranging
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              ten thousand ten thousand
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              to
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              ten ten thousand thousand
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              directly leads us to “hundred million” 
              without having to use exponents, since ten
              times ten is a hundred and since a thousand 
              times a thousand is a million.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              (Similarly,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              ten thousand ten thousand ten thousand
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              becomes
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              ten ten ten thousand thousand thousand
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              after rearrangement, which can be seen to
              equal one trillion because “ten ten ten” is
              a thousand.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={3}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 4.
            </b>
            {" "}
            How many millimeters in a kilometer? 
            How many kilometers in a millimeter?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={3}>
            <VerticalChunk>
              There are{" "}
              <NoBreak>
                <Math>
                  $
                  10^3
                  $
                </Math>
              </NoBreak>
              {" "}millimeters in a meter 
              (
              <i>
                milli
              </i>
              {" "}= thousandth) and{" "}
              <NoBreak>
                <Math>
                  $
                  10^3
                  $
                </Math>
              </NoBreak>
              {" "}meters
              in a kilometer, so there are 
              {" "}
              <NoBreak>
                <Math>
                  $
                  10^3 \times 10^3 = 10^6
                  $
                </Math>
              </NoBreak>
              {" "}
              millimeters in a kilometer.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              From there, it automatically follows that
              there are{" "}
              <NoBreak>
                <Math>
                  $
                  1/10^6 = 10^&#123;-6&#125;
                  $
                </Math>
              </NoBreak>
              {" "}kilometers in
              a millimeter.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              (Or you can run the reverse reasoning: 
              There are{" "}
              <NoBreak>
                <Math>
                  $
                  10^&#123;-3&#125;
                  $
                </Math>
              </NoBreak>
              {" "}kilometers in a meter, 
              and{" "}
              <NoBreak>
                <Math>
                  $
                  10^&#123;-3&#125;
                  $
                </Math>
              </NoBreak>
              {" "}meters in a millimeter, 
              so{" "}
              <NoBreak>
                <Math>
                  $
                  10^&#123;-3&#125; \times 10^&#123;-3&#125; = 10^&#123;-6&#125;
                  $
                </Math>
              </NoBreak>
              {" "}
              kilometers in a millimeter.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={4}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 5.
            </b>
            {" "}
            How many kilometers is{" "}
            <NoBreak>
              <Math>
                $
                10^&#123;24&#125;
                $
              </Math>
            </NoBreak>
            {" "}millimeters?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={4}>
            <VerticalChunk>
              We have
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1\textrm&#123;mm&#125; = 10^&#123;-6&#125;\textrm&#123;km&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by the previous problem, so{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 10^&#123;24&#125; \textrm&#123;mm&#125; = 10^&#123;24&#125;\cdot 10^&#123;-6&#125;\textrm&#123;km&#125; = 10^&#123;18&#125;\textrm&#123;km&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by direct substitution. (You can do that with
              units.) The answer is therefore:{" "}
              <NoBreak>
                <Math>
                  $
                  10^&#123;18&#125;
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={5}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 6.
            </b>
            {" "}
            If the US yearly budget is{" "}
            <NoBreak>
              <Math>
                $
                4
                $
              </Math>
            </NoBreak>
            {" "}trillion
            dollars, what percentage of the budget is
            one hundred billion \$?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={5}>
            <VerticalChunk>
              One hundred billion is{" "}
              <NoBreak>
                <Math>
                  $
                  10\%
                  $
                </Math>
              </NoBreak>
              {" "}of one trillion [cf.: 
              {" "}
              <NoBreak>
                <Math>
                  $
                  10^2 \times 10^9 = &#123;1 \over 10&#125;\times 10^&#123;12&#125;
                  $
                </Math>
              </NoBreak>
              ]
              and one trillion is a quarter of{" "}
              <NoBreak>
                <Math>
                  $
                  4
                  $
                </Math>
              </NoBreak>
              {" "}
              trillion, so the answer is{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;1\over 4&#125;\cdot 10\% = 2.5\%
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Postscript
              </i>
              :
              There is no such thing as “the U.S. budget”. A
              monetarily sovereign nation{" "}
              <i>
                spends
              </i>
              {" "}its currency
              into existence. (And taxes it out of existence.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={6}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 7.
            </b>
            {" "}
            What is the logarithm base{" "}
            <NoBreak>
              <Math>
                $
                10
                $
              </Math>
            </NoBreak>
            {" "}of one trillion?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={6}>
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  12
                  $
                </Math>
                ,
              </NoBreak>
              {" "}because one trillion is{" "}
              <NoBreak>
                <Math>
                  $
                  10^&#123;12&#125;
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={7}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 8.
            </b>
            {" "}
            What is the logarithm base{" "}
            <NoBreak>
              <Math>
                $
                10
                $
              </Math>
            </NoBreak>
            {" "}of{" "}
            <NoBreak>
              <Math>
                $
                1
                $
              </Math>
            </NoBreak>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={7}>
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}because{" "}
              <NoBreak>
                <Math>
                  $
                  1 = 10^0
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={8}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 9.
            </b>
            {" "}
            What is the logarithm base{" "}
            <NoBreak>
              <Math>
                $
                10
                $
              </Math>
            </NoBreak>
            {" "}of:{" "}
            <i>
              a trillion times a billion times a million times a thousand
            </i>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={8}>
            <VerticalChunk>
              Since{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              %\Large 10^&#123;12&#125;\times 10^&#123;9&#125;\times 10^&#123;6&#125;\times 10^3 = 10^&#123;12+9+6+3&#125; = 10^&#123;30&#125;
              \Large 10^&#123;12&#125;\times 10^&#123;9&#125;\times 10^&#123;6&#125;\times 10^3 = 10^&#123;12+9+6+3&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              the answer is{" "}
              <NoBreak>
                <Math>
                  $
                  12+9+6+3
                  $
                </Math>
                ,
              </NoBreak>
              {" "}i.e.,{" "}
              <NoBreak>
                <Math>
                  $
                  30
                  $
                </Math>
                .
              </NoBreak>
              {" "}{" "}
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={9}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 10.
            </b>
            {" "}
            Evaluate:
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large &#123;10^6 \cdot 10^&#123;-12&#125; \cdot 10^&#123;10&#125; \over 10^&#123;-4&#125;\cdot 10^&#123;-4&#125;&#125; 
            $$
          </MathBlock>
          <div
               class="spacer" />
          <Solution
               solution_number={9}>
            <VerticalChunk>
              We have
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;10^6 \cdot 10^&#123;-12&#125; \cdot 10^&#123;10&#125; \over 10^&#123;-4&#125;\cdot 10^&#123;-4&#125;&#125; = &#123;10^&#123;6-12+10&#125; \over 10^&#123;-4 -4&#125;&#125; = &#123;10^4 \over 10^&#123;-8&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;10^4 \over 10^&#123;-8&#125;&#125; = 10^4 \cdot &#123;1 \over 10^&#123;-8&#125;&#125; = 10^4\cdot 10^&#123;-(-8)&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 10^4\cdot 10^&#123;-(-8)&#125; = 10^4\cdot 10^8 = 10^&#123;4 + 8&#125; = 10^&#123;12&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              so the answer is{" "}
              <NoBreak>
                <Math>
                  $
                  10^&#123;12&#125;
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={10}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 11.
            </b>
            {" "}
            How many{" "}
            <i>
              millibits
            </i>
            {" "}in a{" "}
            <i>
              gigabyte
            </i>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={10}>
            <VerticalChunk>
              Presumably, there are{" "}
              <NoBreak>
                <Math>
                  $
                  1000
                  $
                </Math>
              </NoBreak>
              {" "}“millibits”
              (whatever those are, we can go along with
              the joke here) in one bit. Since there are
              eight bits in a byte, and a million bytes 
              in a gigabyte, this means that there would
              be
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1000 \times 8 \times 10^6 = 8 \times 10^9
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              or{" "}
              <NoBreak>
                <Math>
                  $
                  8
                  $
                </Math>
              </NoBreak>
              {" "}billion “millibits” per gigabyte.
              (But to reiterate, there is no such thing 
              as a “millibit”; a bit is a{" "}
              <i>
                discrete
              </i>
              —i.e., 
              indivisible—unit of computer memory.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={11}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 12.
            </b>
            {" "}
            It so happens that{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large 6.25
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            {" "}
            (i.e., the value of{" "}
            <NoBreak>
              <Math>
                $
                100/16
                $
              </Math>
              )
            </NoBreak>
            {" "}is also
            famous for being equal to{" "}
            <NoBreak>
              <Math>
                $
                2.5^2
                $
              </Math>
              .
            </NoBreak>
            {" "}(You can 
            verify that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large 25^2 = 625
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            and, by shifting two decimal places, one
            finds{" "}
            <NoBreak>
              <Math>
                $
                2.5^2 = 6.25
                $
              </Math>
              .)
            </NoBreak>
            {" "}Can you elucidate
            why it would be that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large &#123;100 \over 16&#125; = 2.5^2
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            by using some kind of algebra?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={11}>
            <VerticalChunk>
              One has
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;100 \over 16&#125; = &#123;10^2 \over 4^2&#125; = \left(\!&#123;10\over 4&#125;\!\right)^&#123;\!\!2&#125; = \left(\!&#123;5\over 2&#125;\!\right)^&#123;\!\!2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and{" "}
              <NoBreak>
                <Math>
                  $
                  5/2 = 2.5
                  $
                </Math>
                .
              </NoBreak>
              {" "}(Ta-daa!)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={12}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 13.
            </b>
            {" "}
            Prove that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large &#123;10^n \over \vphantom&#123;10^&#123;A^n&#125;&#125;10^m&#125; = 10^&#123;n-m&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for all integers{" "}
            <NoBreak>
              <Math>
                $
                n
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                m
                $
              </Math>
              .
            </NoBreak>
            {" "}(You can
            take for granted any identity that is stated
            in this{" "}
            <del>
              <VerticalChunk>
                chapter
              </VerticalChunk>
            </del>
            bootcamp.)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={12}>
            <VerticalChunk>
              Here is the “proof” that your professor is 
              hoping for:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_start_end_proof.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The point is that the second equality uses the identity
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;1 \over 10^m&#125; = 10^&#123;-m&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              stated earlier in the chapter as (A), while the third equality uses
              additivity of exponents, also stated earlier. (So: We are only using “known”
              facts, alongside some ordinary arithmetic.)
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Notes.
              </i>
              {" "}
              The identity proved in this exercise, 
              when generalized to any base, 
              is one of the “laws of exponents”, whose complete list 
              (even more-than-complete, other sources list fewer laws)
              is as follows (minus fine print):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_laws_exp.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The first law can be recognized as “additivity of exponents”
              while the second law 
              is the above-mentioned generalization of this exercise's result.
              (Nb: Concerning the next-to-last law, note that, &lt;i&gt;by definition&lt;/i&gt;,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large \left(&#123;a\over b&#125;\right)^&#123;\!-1&#125; = &#123;1 \over \left( &#123;a \over b&#125;\right)&#125; 
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and it so happens that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;1 \over \left( &#123;a \over b&#125;\right)&#125; = &#123;b \over a&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $
                  a, b \ne 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}by some principle of elementary arithmetic.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={13}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 14.
            </b>
            {" "}
            Rewrite each of these expressions...{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large &#123;L \over T&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large &#123;M (L/T) \over T&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large \left.&#123;ML \over T^2 &#125; \right/ \left(&#123;L^2&#125; &#123;(L/T) \over L&#125;\right) 
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            ...in the form...
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large M^aL^bT^c
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            ...for some integer exponents{" "}
            <NoBreak>
              <Math>
                $
                a
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                b
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                c
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={13}>
            <VerticalChunk>
              We have (#1)
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;L \over T&#125; = LT^&#123;-1&#125; = M^0L^1T^&#123;-1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              since
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;L \over T&#125; = L\cdot &#123;1\over T&#125; = LT^&#123;-1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and (#2)
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;M (L/T) \over T&#125; = MLT^&#123;-2&#125; = M^1L^1T^&#123;-2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              since
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;L/T \over T&#125; = &#123;L\over T&#125;\cdot&#123;1 \over T&#125; = &#123;L \over T^2&#125; = LT^&#123;-2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and (#3)
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large \left.&#123;ML \over T^2 &#125; \right/ \left(&#123;L^2&#125; &#123;(L/T) \over L&#125;\right) = ML^&#123;-1&#125;T^&#123;-1&#125; = M^1L^&#123;-1&#125;T^&#123;-1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              since
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large L^2&#123;L/T\over L&#125; = L^2&#123;1/T \over 1&#125; = &#123;L^2\over T&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large \left.&#123;ML \over T^2 &#125; \right/ &#123;L^2\over T&#125; = &#123;ML\over T^2&#125;\cdot &#123;T\over L^2&#125; = &#123;M \over TL&#125; = MT^&#123;-1&#125;L^&#123;-1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              given that{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;1\over T&#125; = T^&#123;-1&#125;
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;1\over L&#125;=L^&#123;-1&#125;
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={14}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 15.
            </b>
            {" "}
            Find integers{" "}
            <NoBreak>
              <Math>
                $
                a
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                b
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                c
                $
              </Math>
            </NoBreak>
            {" "}such that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large v^aF^b\mu^c\rho = 1
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            where{" "}
            <NoBreak>
              <Math>
                $
                v
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                F
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                \mu
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                \rho
                $
              </Math>
            </NoBreak>
            {" "}are defined as below.
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large v = &#123;L \over T&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large F = &#123;ML \over T^2&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large \mu = &#123;M \over TL &#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large \rho = &#123;M \over L^3&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <Solution
               solution_number={14}>
            <VerticalChunk>
              Firstly we can rewrite{" "}
              <NoBreak>
                <Math>
                  $
                  v
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  F
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \mu
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \rho
                  $
                </Math>
              </NoBreak>
              {" "}
              in the canonical form{" "}
              <NoBreak>
                <Math>
                  $
                  M^xL^yT^z
                  $
                </Math>
              </NoBreak>
              {" "}
              for integers{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  z
                  $
                </Math>
              </NoBreak>
              {" "}(as in the previous
              exercise):
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large v = LT^&#123;-1&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large F = MLT^&#123;-2&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large \mu = MT^&#123;-1&#125;L^&#123;-1&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large \rho = ML^&#123;-3&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (Ok.) Nextly, we compute{" "}
              <NoBreak>
                <Math>
                  $
                  v^a
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  F^b
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \mu^c
                  $
                </Math>
              </NoBreak>
              {" "}
              by applying the fourth law of exponents (note e.g.
              that{" "}
              <NoBreak>
                <Math>
                  $
                  (T^&#123;-1&#125;)^a = T^&#123;(-1)a&#125; = T^&#123;-a&#125;
                  $
                </Math>
                ,
              </NoBreak>
              {" "}etc):
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large v^a = L^aT^&#123;-a&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large F^b = M^&#123;b&#125;L^bT^&#123;-2b&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large \mu^c = M^cT^&#123;-c&#125;L^&#123;-c&#125; \vphantom&#123;\rho = ML^&#123;-3&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large \rho = ML^&#123;-3&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (In the last line we just restated{" "}
              <NoBreak>
                <Math>
                  $
                  \rho
                  $
                </Math>
              </NoBreak>
              .)
              Then{" "}
              <NoBreak>
                <Math>
                  $
                  v^aF^b\mu^c\rho
                  $
                </Math>
              </NoBreak>
              {" "}becomes
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large M^&#123;b+c+1&#125;L^&#123;a+b-c-3&#125;T^&#123;-a-2b-c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by multiplying everything together and using
              additivity of exponents. (E.g.,{" "}
              <NoBreak>
                <Math>
                  $
                  M^bM^cM = M^&#123;b+c+1&#125;
                  $
                </Math>
              </NoBreak>
              ,
              and so on.) This expression equals{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}
              independently of the values of{" "}
              <NoBreak>
                <Math>
                  $
                  M
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  L
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  T
                  $
                </Math>
              </NoBreak>
              {" "}
              if and only if...
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the three exponents are zero
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...(!!!) which means that we need to find values
              {" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  b
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
              </NoBreak>
              {" "}such that these three equations...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large b + c + 1 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large a + b - c - 3 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large -a -2b - c = 0
              $$
              <ImageRight
                   offset_y="1em"
                   src="/images/svg_add_equations_cloud.svg" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...are satisfied! Adding the second and 
              third equation together, we find{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large -b -2c -3 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and adding this last equation to the first
              equation above, we find{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large -c -2 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which implies that{" "}
              <NoBreak>
                <Math>
                  $
                  -c = 2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}i.e., that{" "}
              <NoBreak>
                <Math>
                  $
                  c = -2
                  $
                </Math>
                .
              </NoBreak>
              {" "}
              Plugging{" "}
              <NoBreak>
                <Math>
                  $
                  c = -2
                  $
                </Math>
              </NoBreak>
              {" "}into the first of our three
              equations, we find
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large b + (-2) + 1 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              or
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large b - 1 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which implies that{" "}
              <NoBreak>
                <Math>
                  $
                  b = 1
                  $
                </Math>
                .
              </NoBreak>
              {" "}Lastly, plugging
              {" "}
              <NoBreak>
                <Math>
                  $
                  b = 1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  c = -2
                  $
                </Math>
              </NoBreak>
              {" "}in our second equation above
              gives us{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large a + 1 - (-2) - 3 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which implies that{" "}
              <NoBreak>
                <Math>
                  $
                  a = 0
                  $
                </Math>
              </NoBreak>
              {" "}since{" "}
              <NoBreak>
                <Math>
                  $
                  1-(-2)-3 = 0
                  $
                </Math>
              </NoBreak>
              .
              (One can finally check that 
              setting{" "}
              <NoBreak>
                <Math>
                  $
                  a=0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  b = 1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  c=-2
                  $
                </Math>
              </NoBreak>
              {" "}satisfies that
              third equation,{" "}
              <NoBreak>
                <Math>
                  $
                  -a-2b-c=0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}which it does.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              In summary, the solution is{" "}
              <NoBreak>
                <Math>
                  $
                  a = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  b = 1
                  $
                </Math>
              </NoBreak>
              ,
              {" "}
              <NoBreak>
                <Math>
                  $
                  c = -2
                  $
                </Math>
                ;
              </NoBreak>
              {" "}we have discovered that{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large v^0 F^1 \mu^&#123;-2&#125; \rho = 1
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              under the given definitions of{" "}
              <NoBreak>
                <Math>
                  $
                  v
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  F
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \mu
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  \rho
                  $
                </Math>
                ,
              </NoBreak>
              {" "}or which is to say, we have discovered
              that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large F\mu^&#123;-2&#125;\rho = 1
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (since{" "}
              <NoBreak>
                <Math>
                  $
                  v^0 = 1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  F^1 = F
                  $
                </Math>
              </NoBreak>
              ).
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
    </Bootcamp>
  );
};

export default Article;