import Chapter from "~/components/Chapter";
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

const Article = () => {
  return (
    <Chapter number={1} title="A Few Refreshers">
      <Section>
        <VerticalChunk>
          {" "}
          <b>Square Roots.</b> You might remember that “minus times minus is
          plus” and that “plus times plus is plus”. (Why? The enemy of my enemy
          is my friend.) So any nonzero number multiplied by itself is positive.
          For example,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (-2) \times (-2) = 4 $$</MathBlock>
        <div class="spacer"></div>
        <CentralDisplay>and</CentralDisplay>
        <div class="spacer"></div>
        <MathBlock>$$ 2 \times 2 = 4 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          are both positive. But{" "}
          <NoBreak>
            <Math>$ \sqrt&#123;4&#125; $</Math>
          </NoBreak>{" "}
          is, by definition, the unique <i>nonnegative</i> solution to{" "}
          <NoBreak>
            <Math>$ x^2 = 4 $</Math>.
          </NoBreak>{" "}
          Hence, and whether you like it or not,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ \sqrt&#123;(-2)^2&#125; = 2 $$
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
          and, in particular, it is <i>not</i> true that
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ \sqrt&#123;x^&#123;2&#125;&#125; \rt&#123;0.1&#125; =
          \rt&#123;0.1&#125; x $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          for every real number{" "}
          <NoBreak>
            <Math>$ x $</Math>.
          </NoBreak>{" "}
          Instead we have
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ \sqrt&#123;x^&#123;2&#125;&#125; \rt&#123;0.1&#125; =
          \rt&#123;0.1&#125; |x| $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          for every real number{" "}
          <NoBreak>
            <Math>$ x $</Math>,
          </NoBreak>{" "}
          where{" "}
          <NoBreak>
            <Math>$ |x| $</Math>
          </NoBreak>{" "}
          denotes the absolute value of{" "}
          <NoBreak>
            <Math>$ x $</Math>
          </NoBreak>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (Nb: If ever you want to indicate both solutions of the equation{" "}
          <NoBreak>
            <Math>$ x^2 = 4 $</Math>
          </NoBreak>{" "}
          you can always use the notation “
          <NoBreak>
            <Math>$ \pm \sqrt&#123;4&#125; $</Math>
            ”.
          </NoBreak>{" "}
          This is what happens, for example, in the maybe-well-known formula
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ x = &#123;-b \pm \sqrt&#123;b^2 - 4ac&#125; \over 2a&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          for the solutions to the quadratic equation{" "}
          <NoBreak>
            <Math>$ ax^2 + bx + c = 0 $</Math>
          </NoBreak>
          .)
        </VerticalChunk>
        <VerticalChunk indent={true}>Now we can ponder, say,</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ \sqrt&#123;0.5&#125; $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          whose value is—by definition—the unique nonnegative solution to
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ x^2 = 0.5. $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          As beginners, there's nothing wrong with trying to solve this equation
          by trial and error. With{" "}
          <NoBreak>
            <Math>$ x = &#123;1\over 4&#125; $</Math>,
          </NoBreak>{" "}
          for example, we find
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ x^2 = &#123;1\over 4&#125;\times&#123;1\over 4&#125; = &#123;1\over
          16&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          so{" "}
          <NoBreak>
            <Math>$ x = &#123;1\over 4&#125; $</Math>
          </NoBreak>{" "}
          is not a solution of the equation, being apparently too small.
          Increasing{" "}
          <NoBreak>
            <Math>$ x $</Math>
          </NoBreak>{" "}
          to{" "}
          <NoBreak>
            <Math>$ x = &#123;1\over 2&#125; $</Math>,
          </NoBreak>{" "}
          say, we find
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ x^2 = &#123;1\over 2&#125;\times&#123;1\over 2&#125; = &#123;1\over
          4&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          which is better, since{" "}
          <NoBreak>
            <Math>$ 1/4 $</Math>
          </NoBreak>{" "}
          is closer to{" "}
          <NoBreak>
            <Math>$ 1/2 $</Math>,
          </NoBreak>{" "}
          but still too small. Increasing{" "}
          <NoBreak>
            <Math>$ x $</Math>
          </NoBreak>{" "}
          by{" "}
          <NoBreak>
            <Math>$ 1/4 $</Math>
          </NoBreak>{" "}
          again, say, to{" "}
          <NoBreak>
            <Math>$ x = &#123;3\over 4&#125; $</Math>,
          </NoBreak>{" "}
          we find
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ x^2 = &#123;3\over 4&#125;\times&#123;3\over 4&#125; = &#123;9\over
          16&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          which—surprise!—is actually pretty close to{" "}
          <NoBreak>
            <Math>$ 1/2 $</Math>,
          </NoBreak>{" "}
          as{" "}
          <NoBreak>
            <Math>$ 1/2 = 8/16 $</Math>.
          </NoBreak>{" "}
          And since{" "}
          <NoBreak>
            <Math>$ 9/16 &gt; 0.5 $</Math>,
          </NoBreak>{" "}
          <NoBreak>
            <Math>$ \sqrt&#123;0.5&#125; $</Math>
          </NoBreak>{" "}
          must be a little <i>less</i> than{" "}
          <NoBreak>
            <Math>$ &#123;3\over 4&#125; = 0.75 $</Math>
          </NoBreak>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          In last resort, and in reasonably good agreement with our
          observations, a calculator reveals that
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ \sqrt&#123;0.5&#125; = 0.7071067... $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          where the decimals trail off with no pattern. (This number is
          irrational.) Even so, the fact that{" "}
          <NoBreak>
            <Math>$ \sqrt&#123;0.5&#125; $</Math>
          </NoBreak>{" "}
          is <i>greater</i> than{" "}
          <NoBreak>
            <Math>$ 0.5 $</Math>
          </NoBreak>{" "}
          is often perceived as counterintuitive.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          You can think of it this way: multiplying a value by{" "}
          <NoBreak>
            <Math>$ 0.7071 $</Math>,
          </NoBreak>{" "}
          or approximately{" "}
          <NoBreak>
            <Math>$ \sqrt&#123;0.5&#125; $</Math>,
          </NoBreak>{" "}
          is like taking{" "}
          <NoBreak>
            <Math>$ 70.71\% $</Math>
          </NoBreak>{" "}
          of that value—for example, say,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ 605 \cdot 0.7071 = 427.7955 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          is{" "}
          <NoBreak>
            <Math>$ 70.71\% $</Math>
          </NoBreak>{" "}
          of{" "}
          <NoBreak>
            <Math>$ 605 $</Math>,
          </NoBreak>{" "}
          and so on—so if we multiply <i>twice</i> by{" "}
          <NoBreak>
            <Math>$ 0.7071 $</Math>
          </NoBreak>{" "}
          we obtain “
          <NoBreak>
            <Math>$ 70.71\% $</Math>
          </NoBreak>{" "}
          of{" "}
          <NoBreak>
            <Math>$ 70.71\% $</Math>”
          </NoBreak>{" "}
          and it just so happens that “
          <NoBreak>
            <Math>$ 70.71\% $</Math>
          </NoBreak>{" "}
          of{" "}
          <NoBreak>
            <Math>$ 70.71\% $</Math>”
          </NoBreak>{" "}
          is close to{" "}
          <NoBreak>
            <Math>$ 50\% $</Math>
          </NoBreak>
          .
        </VerticalChunk>
        <VerticalChunk indent={true}>
          The point is: if “
          <NoBreak>
            <Math>$ X\% $</Math>
          </NoBreak>{" "}
          of{" "}
          <NoBreak>
            <Math>$ X\% $</Math>”
          </NoBreak>{" "}
          equals{" "}
          <NoBreak>
            <Math>$ 50\% $</Math>,
          </NoBreak>{" "}
          then, of course,{" "}
          <NoBreak>
            <Math>$ \rt&#123;0.03&#125;X &gt; 50 $</Math>
            —that
          </NoBreak>{" "}
          much seems logical—and, with a little thought, the same phenomenon
          explains why{" "}
          <NoBreak>
            <Math>$ \sqrt&#123;0.5&#125; &gt; 0.5 $</Math>
          </NoBreak>
          .
        </VerticalChunk>
      </Section>
      <div class="spacer"></div>
      <Section>
        <VerticalChunk>
          {" "}
          <b>Fractions and Division.</b> An elementary fraction, or division,
          such as
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ &#123;50 \over 2&#125; $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          can be thought of in a few different ways:
        </VerticalChunk>
        <div class="spacer"></div>
        <List>
          <Item>
            Fifty halves (i.e.,{" "}
            <NoBreak>
              <Math>$ 50 \times &#123;1\over 2&#125; $</Math>
            </NoBreak>
            ).
          </Item>
          <Item>
            The size obtained when something of size fifty is divided into two
            equal parts (answer:{" "}
            <NoBreak>
              <Math>$ 25 $</Math>
            </NoBreak>
            ).
          </Item>
          <Item>
            The number of times that{" "}
            <NoBreak>
              <Math>$ 2 $</Math>
            </NoBreak>{" "}
            goes into{" "}
            <NoBreak>
              <Math>$ 50 $</Math>
            </NoBreak>{" "}
            (answer:{" "}
            <NoBreak>
              <Math>$ 25 $</Math>,
            </NoBreak>{" "}
            because it takes twenty-five{" "}
            <NoBreak>
              <Math>$ 2 $</Math>
              's
            </NoBreak>{" "}
            to make up{" "}
            <NoBreak>
              <Math>$ 50 $</Math>
            </NoBreak>
            ).
          </Item>
        </List>
        <div class="spacer"></div>
        <VerticalChunk>
          But{" "}
          <NoBreak>
            <Math>$ 50/2 $</Math>
          </NoBreak>{" "}
          is a ratio of integers, which makes things particularly nice! For a
          ratio of decimals, such as, say,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ &#123;1 \over 0.01&#125; $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          our possible points of view are going to be more restricted.
          Thankfully, however, we can still characterize this fraction as the
          answer to the question “how many times does{" "}
          <NoBreak>
            <Math>$ 0.01 $</Math>
          </NoBreak>{" "}
          go into{" "}
          <NoBreak>
            <Math>$ 1 $</Math>
            ?”
          </NoBreak>{" "}
          as in the third option above. And, indeed,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ &#123;1 \over 0.01&#125; \,=\,100 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          because{" "}
          <NoBreak>
            <Math>$ 0.01 $</Math>
          </NoBreak>{" "}
          goes{" "}
          <NoBreak>
            <Math>$ 100 $</Math>
          </NoBreak>{" "}
          times into{" "}
          <NoBreak>
            <Math>$ 1 $</Math>.
          </NoBreak>{" "}
          For that matter,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ &#123; 1 \over 0.001&#125; = 1000,\qquad&#123;1 \over 0.0001&#125;
          = 10000,\quad\,\,\,\,\textrm&#123;(etc)&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          by the same reasoning, which explains why dividing by smaller and
          smaller numbers produces larger and larger results (and, by extension,
          why dividing by{" "}
          <NoBreak>
            <Math>$ 0 $</Math>
          </NoBreak>{" "}
          is undefined).
        </VerticalChunk>
        <div class="spacer"></div>
        <Pause></Pause>
        <VerticalChunk>
          {" "}
          <b>Note.</b> In general, the ratio of two decimal numbers can be
          turned into a ratio of integers by multiplying the ratio top and
          bottom by a suitable power of{" "}
          <NoBreak>
            <Math>$ 10 $</Math>.
          </NoBreak>{" "}
          E.g.:
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ &#123;1.42 \over 0.8&#125; = &#123;100 \cdot 1.42 \over 100 \cdot
          0.8&#125; = &#123;142 \over 80&#125; = &#123;71 \over 40&#125;. $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          This example was chosen randomly, and, if you allow, we would like to
          see how large{" "}
          <NoBreak>
            <Math>$ 71/40 $</Math>
          </NoBreak>{" "}
          really is (one second!):
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ \begin&#123;align&#125; &#123;71 \over 40&#125; \,&=\, &#123;40 +
          30 + 1 \over 40&#125; \,=\, &#123;40 \over 40&#125; + &#123;30 \over
          40&#125; + &#123;1 \over 40&#125;\\ \,&=\, 1 + &#123;3 \over 4&#125; +
          &#123;1 \over 4&#125;\!\cdot \!&#123;1 \over
          10&#125;\up&#123;1.5&#125;\\ \,&=\, 1 + 0.75 + 0.025 =
          1.775\up&#123;1.5&#125; \end&#123;align&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          ...so we find, among others, that{" "}
          <NoBreak>
            <Math>$ 71 $</Math>
          </NoBreak>{" "}
          is exactly{" "}
          <NoBreak>
            <Math>$ 77.5\% $</Math>
          </NoBreak>{" "}
          greater than{" "}
          <NoBreak>
            <Math>$ 40 $</Math>.
          </NoBreak>{" "}
          (Interesting, no?)
        </VerticalChunk>
      </Section>
      <div class="spacer"></div>
      <Section>
        <VerticalChunk>
          {" "}
          <b>Distributivity.</b> As you might already know, a number that
          multiplies a sum can be brought “inside” the sum. For example,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ 5(10 + 2) \,=\, 5\!\cdot\!10 \,+\, 5\!\cdot\!2 $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          (five times twelve equals fifty plus ten), or
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ a(b + c) = ab + ac $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          more generally. This property is known as the{" "}
          <i>distributivity of multiplication over addition</i>, or{" "}
          <i>distributivity</i> for short.
        </VerticalChunk>
        <VerticalChunk indent={true}>
          (We might finally clarify that ‘
          <NoBreak>
            <Math>$ \cdot $</Math>’
          </NoBreak>{" "}
          means “times”, i.e., the same as ‘
          <NoBreak>
            <Math>$ \times $</Math>
            ’.
          </NoBreak>{" "}
          Moreover, when we write
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ 5\!\cdot\!10 \,+\, 5\!\cdot\!2 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>we really mean</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (5\!\cdot\!10) + (5\!\cdot\!2) $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>as opposed to something else, such as</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ ((5\!\cdot\!10) + 5)\!\cdot\! 2, $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          because multiplication takes precedence over addition, by default.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          A little more generally, one has such identities as
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)(C + D) \,=\, aC + bC + aD + bD $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          that come from multiplying every term of the first parenthesis with
          every term of the second parenthesis. Indeed,
          <ImageLeft
            offset_y="-10px"
            line={1.5}
            src="/images/325.svg"
          ></ImageLeft>
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)(C + D) = (a + b)C + (a + b)D $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          by one application of distributivity, while
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)C = aC + bC $$</MathBlock>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)D = aD + bD $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>by distributivity again.</VerticalChunk>
        <div class="spacer"></div>
        <Example>
          <VerticalChunk>
            {" "}
            <b>Example 1.</b> One has
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            $$ \begin&#123;align&#125; (10 + 2)(10 + 4) \,&=\, 10\!\cdot\!10
            \,+\, 10\!\cdot\!4 \,+\, 2\!\cdot\!10 \,+\, 2\!\cdot\!4\\ \,&=\, 100
            \,+\, 40 \,+\, 20 \,+\, 8\\ \,&=\, 168 \end&#123;align&#125; $$
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            so{" "}
            <NoBreak>
              <Math>$ 12 \times 14 = 168 $</Math>
            </NoBreak>
            .
          </VerticalChunk>
        </Example>
        <div class="spacer"></div>
        <Example>
          <VerticalChunk>
            {" "}
            <b>Example 2.</b> One has
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            $$ \begin&#123;align&#125; (10 + 3)(10 + 3) \,&=\, 10\!\cdot\!10
            \,+\, 10\!\cdot\!3 \,+\, 3\!\cdot\!10 \,+\, 3\!\cdot\!3\\ \,&=\, 100
            \,+\, 30 \,+\, 30 \,+\, 9\\ \,&=\, 169 \end&#123;align&#125; $$
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            so{" "}
            <NoBreak>
              <Math>$ 13 \times 13 = 169 $</Math>
            </NoBreak>
            .
          </VerticalChunk>
        </Example>
        <div class="spacer"></div>
        <VerticalChunk>
          (The fact that{" "}
          <NoBreak>
            <Math>$ 13 \times 13 $</Math>
          </NoBreak>{" "}
          is exactly one greater than{" "}
          <NoBreak>
            <Math>$ 12 \times 14 $</Math>
          </NoBreak>{" "}
          is a bit curious indeed.)
        </VerticalChunk>
        <VerticalChunk indent={true}>
          If we start from the afore-mentioned identity
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)(C + D) \,=\, aC + bC + aD + bD $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          and set{" "}
          <NoBreak>
            <Math>$ C = a $</Math>,
          </NoBreak>{" "}
          <NoBreak>
            <Math>$ D = b $</Math>,
          </NoBreak>{" "}
          we find
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)(a + b) \,=\, aa + ba + ab + bb $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>or, equivalently,</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)^2 = a^2 + 2ab + b^2 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          since{" "}
          <NoBreak>
            <Math>$ (a + b)(a + b) = (a + b)^2 $</Math>,
          </NoBreak>{" "}
          <NoBreak>
            <Math>$ aa = a^2 $</Math>
          </NoBreak>{" "}
          and{" "}
          <NoBreak>
            <Math>$ bb = b^2 $</Math>.
          </NoBreak>{" "}
          (This is the <i>binomial expansion of degree two</i>, but such
          terminology is not very important at this stage.)
        </VerticalChunk>
        <div class="spacer"></div>
        <Example>
          <VerticalChunk>
            {" "}
            <b>Example 3.</b> By the last formula (or “binomial expansion of
            degree two”),
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            $$ \begin&#123;align&#125; \up&#123;1&#125; (10 + 3)^2 \,&=\,
            10\!\cdot\!10 \,+\, 2\!\cdot\!3\!\cdot\!10 \,+\, 3\!\cdot\!3 \\
            \up&#123;1&#125; \,&=\, 100 + 60 + 9 \\ \up&#123;1&#125; \,&=\, 169
            \end&#123;align&#125; $$
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>which agrees with Example 2.</VerticalChunk>
        </Example>
        <div class="spacer"></div>
        <VerticalChunk>
          On the other hand, setting{" "}
          <NoBreak>
            <Math>$ C = a $</Math>,
          </NoBreak>{" "}
          <NoBreak>
            <Math>$ D = -b $</Math>
          </NoBreak>{" "}
          in
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)(C + D) = aC + aD + bC + bD $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>gives</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)(a + (-b)) = aa + a(-b) + ba + b(-b) $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>or, less pedantically,</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)(a - b) = aa - ab + ba - bb $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>or</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a + b)(a - b) = a^2 - b^2 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          since{" "}
          <NoBreak>
            <Math>$ - ab + ba = 0 $</Math>,
          </NoBreak>{" "}
          <NoBreak>
            <Math>$ aa = a^2 $</Math>,
          </NoBreak>{" "}
          <NoBreak>
            <Math>$ bb = b^2 $</Math>.
          </NoBreak>{" "}
          Note that
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ a^2 - b^2 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>is</VerticalChunk>
        <div class="spacer"></div>
        <CentralDisplayItalic>a difference of squares</CentralDisplayItalic>
        <div class="spacer"></div>
        <VerticalChunk>
          whence <i>a difference of squares can always be factored</i>.
          (Factored as{" "}
          <NoBreak>
            <Math>$ (a + b)(a - b) $</Math>,
          </NoBreak>{" "}
          that is.) (PS: “Factored” means “written as a product”.)
        </VerticalChunk>
        <div class="spacer"></div>
        <Example>
          <VerticalChunk>
            {" "}
            <b>Example 4.</b> Since
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>$$ 19 = 100 - 81 = 10^2 - 9^2 $$</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            is a difference of squares,{" "}
            <NoBreak>
              <Math>$ 19 $</Math>
            </NoBreak>{" "}
            can be factored. (On the other hand{" "}
            <NoBreak>
              <Math>$ 19 $</Math>
            </NoBreak>{" "}
            is a prime number, but nevermind.)
          </VerticalChunk>
        </Example>
        <div class="spacer"></div>
        <Example>
          <VerticalChunk>
            {" "}
            <b>Example 5.</b> The algebraic expression
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>$$ 1 - x^2 $$</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>can be factored, because</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>$$ 1 = 1^2 $$</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>implies that</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>$$ 1 - x^2 $$</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            truly is “a difference of squares”. And, indeed,
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>$$ 1 - x^2 = (1 - x)(1 + x) $$</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            as per “
            <NoBreak>
              <Math>$ \rt&#123;0.04&#125;a^2 - b^2 = (a - b)(a + b) $</Math>
            </NoBreak>
            ”.
          </VerticalChunk>
        </Example>
        <div class="spacer"></div>
        <VerticalChunk>
          In relation to distributivity, we should also mention the simple but
          important fact that multiplying a difference by{" "}
          <NoBreak>
            <Math>$ -1 $</Math>
          </NoBreak>{" "}
          <i>reverses</i> the difference. That is,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (-1)(a - b) \,=\, b - a $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>or, for short,</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ -(a - b) \,=\, b - a $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>because, indeed,</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ \begin&#123;align&#125; (-1)(a - b) \,&=\, (-1)(a + (-b)) \\ \,&=\,
          (-1)a + (-1)(-b) \\ \,&=\, -a + b \end&#123;align&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          by distributivity (used in the second step).
        </VerticalChunk>
        <div class="spacer"></div>
        <Example>
          <VerticalChunk>
            {" "}
            <b>Example 6.</b> We have{" "}
            <NoBreak>
              <Math>$ -(10 - 3) = 3 - 10 $</Math>.
            </NoBreak>{" "}
            (Because{" "}
            <NoBreak>
              <Math>$ -7 = -7 $</Math>,
            </NoBreak>{" "}
            as it would be, haha.)
          </VerticalChunk>
        </Example>
      </Section>
      <div class="spacer"></div>
      <Section divider={false}>
        <VerticalChunk>
          {" "}
          <b>Epilogue.</b> Do you remember the near miss between
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ 12\cdot 14 \,=\, 168 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>and</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ 13 \cdot 13 \,=\, 13^2 \,=\, 169 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          ...? Well if you observe, additionally, that
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ \begin&#123;align&#125; 11\,\cdot\,13 &= 12^2 - 1\\ 10\,\cdot\,12
          &= 11^2 - 1\\ 9\,\cdot\,11 &= 10^2 - 1 \end&#123;align&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          (etc) you might become suspicious of a pattern! But the mystery is
          rather thin: we have
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (n - 1)(n + 1) \,=\, n^2 - 1 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          for <i>every</i> real number{" "}
          <NoBreak>
            <Math>$ n $</Math>
          </NoBreak>{" "}
          because of the formula
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ (a - b)(a + b) \,=\, a^2 - b^2 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>for a difference of squares!</VerticalChunk>
      </Section>
      <div class="spacer"></div>
      <Section>
        <VerticalChunk>
          {" "}
          <b>Vocabulary.</b> A pair of algebraic expressions of the form
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ a + b,\, a - b $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          is called a <i>conjugate pair</i>. For example,
        </VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>$$ n + 1,\, n - 1 $$</MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>is a conjugate pair, as is</VerticalChunk>
        <div class="spacer"></div>
        <MathBlock>
          $$ \sqrt&#123;3&#125; + \sqrt&#123;2&#125;,\,\, \sqrt&#123;3&#125; -
          \sqrt&#123;2&#125; $$
        </MathBlock>
        <div class="spacer"></div>
        <VerticalChunk>
          and so on. (Generally speaking, conjugate pairs are good things to
          multiply together.)
        </VerticalChunk>
      </Section>
      <div class="spacer"></div>
      <Exercises labels={["0", "1"]}>
        <Exercise exercise_number={0}>
          <VerticalChunk>
            {" "}
            <b>Exercise 1.</b> True or false (and, if possible, explain):
          </VerticalChunk>
          <div class="spacer"></div>
          <Grid center_on_overflow={true} sm_cutoff={520} sm_cols={2} cols={3}>
            <Item>
              a.{" "}
              <NoBreak>
                <Math>$ 0.9^2 &lt; 0.9 $</Math>
              </NoBreak>{" "}
            </Item>
            <Item>
              b.{" "}
              <NoBreak>
                <Math>$ \sqrt&#123;0.01&#125; = 0.1 $</Math>
              </NoBreak>{" "}
            </Item>
            <Item>
              c.{" "}
              <NoBreak>
                <Math>
                  $ \sqrt[2]&#123;\up&#123;0.8&#125;\sqrt[3]&#123;2&#125;&#125;
                  = \sqrt[3]&#123;\up&#123;0.8&#125;\sqrt[2]&#123;2&#125;&#125;
                  $
                </Math>
              </NoBreak>{" "}
            </Item>
            <Item>
              d.{" "}
              <NoBreak>
                <Math>
                  $ &#123;\sqrt&#123;2&#125; \over \up&#123;0.55&#125;2&#125; =
                  \sqrt&#123;0.5&#125; $
                </Math>
              </NoBreak>{" "}
            </Item>
            <Item>
              e.{" "}
              <NoBreak>
                <Math>
                  $ &#123;1 \over \sqrt&#123;2&#125;&#125; =
                  \sqrt&#123;0.5&#125; $
                </Math>
              </NoBreak>{" "}
            </Item>
            <Item>
              f.{" "}
              <NoBreak>
                <Math>$ 2^&#123;30&#125; &gt; 1000^3 $</Math>
              </NoBreak>{" "}
            </Item>
            <Item>
              g.{" "}
              <NoBreak>
                <Math>$ &#123;1 \over 0.95&#125; &gt; 1.05 $</Math>
              </NoBreak>{" "}
            </Item>
            <Item>
              h.{" "}
              <NoBreak>
                <Math>$ (-1)^&#123;101&#125; = -1 $</Math>
              </NoBreak>{" "}
            </Item>
            <Item>
              i.{" "}
              <NoBreak>
                <Math>
                  $ &#123;100 \over \up&#123;0.5&#125;99&#125; &lt; &#123;101
                  \over \up&#123;0.5&#125;100&#125; $
                </Math>
              </NoBreak>{" "}
            </Item>
          </Grid>
          <div class="spacer"></div>
          <Solution solution_number={0}>
            <VerticalChunk>Part by part:</VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>a. (True) We have</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ 0.9^2 = &#123;9 \over 10&#125;\cdot&#123;9 \over 10&#125; =
              &#123;81 \over 100&#125; = 0.81 $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              and{" "}
              <NoBreak>
                <Math>$ 0.81 &lt; 0.9 $</Math>
              </NoBreak>
              .
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>b. (True) We have</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ 0.1^2 = &#123;1 \over 10&#125; \cdot &#123;1 \over 10&#125; =
              &#123;1 \over 100&#125; = 0.01, $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              and{" "}
              <NoBreak>
                <Math>$ 0.1 $</Math>
              </NoBreak>{" "}
              is nonnegative, so{" "}
              <NoBreak>
                <Math>$ \sqrt&#123;0.01&#125; = 0.1 $</Math>
              </NoBreak>
              .
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              c. (True) In fact,{" "}
              <NoBreak>
                <Math>
                  $ \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
                  $
                </Math>
              </NoBreak>{" "}
              and{" "}
              <NoBreak>
                <Math>
                  $ \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
                  $
                </Math>
              </NoBreak>{" "}
              are both equal to{" "}
              <NoBreak>
                <Math>$ \sqrt[6]&#123;\up&#123;0.6&#125;2&#125; $</Math>.
              </NoBreak>{" "}
              To convince yourself, note that
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &\,\,
              (\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6
              \\ =&\,\, \up&#123;1.3&#125;
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
              \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
              \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
              \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
              \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
              \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\qquad\\
              =&\,\, \up&#123;1.3&#125;
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
              \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;)
              \times
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
              \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;)
              \times
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;
              \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;)
              \\ =& \,\, \up&#123;1.3&#125;
              (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;)
              \times
              (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;)
              \times
              (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;)\\ =&
              \,\, \up&#123;1.4&#125; 2 \end&#123;align&#125; $$
              <ImageLeft offset_y="0.8rem" src="/images/17.svg"></ImageLeft>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>and</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &\,\,
              (\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6
              \\ =&\,\, \up&#123;1.3&#125;
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\\ =&
              \,\, \up&#123;1.3&#125;
              (\gbk\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.11&#125;)
              \times
              (\gbk\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;
              \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.11&#125;)\\
              =&\,\, \up&#123;1.3&#125; \sqrt[2]&#123;\up&#123;0.65&#125;2&#125;
              \times \sqrt[2]&#123;\up&#123;0.65&#125;2&#125;\\ =&\,\,
              \up&#123;1.4&#125; 2 \end&#123;align&#125; $$
              <ImageLeft src="/images/18.svg"></ImageLeft>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              so{" "}
              <NoBreak>
                <Math>
                  $
                  (\sqrt[2]&#123;\up&#123;0.76&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6
                  =
                  (\sqrt[3]&#123;\up&#123;0.76&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6
                  = 2 $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <VerticalChunk indent={true}>
              Technically, however, a number{" "}
              <NoBreak>
                <Math>$ x $</Math>
              </NoBreak>{" "}
              such that
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ x^6 = 2 $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              is not necessarily{" "}
              <NoBreak>
                <Math>$ \sqrt[6]&#123;\up&#123;0.6&#125;2&#125; $</Math>,
              </NoBreak>{" "}
              because{" "}
              <NoBreak>
                <Math>$ x = -\sqrt[6]&#123;\up&#123;0.6&#125;2&#125; $</Math>
              </NoBreak>{" "}
              satisfies this equation as well!
            </VerticalChunk>
            <VerticalChunk indent={true}>
              The last step, therefore, is to note that{" "}
              <NoBreak>
                <Math>
                  $ \sqrt[2]&#123;\up&#123;0.76&#125;\sqrt[3]&#123;2&#125;&#125;
                  $
                </Math>
              </NoBreak>{" "}
              and{" "}
              <NoBreak>
                <Math>
                  $ \sqrt[3]&#123;\up&#123;0.76&#125;\sqrt[2]&#123;2&#125;&#125;
                  $
                </Math>
              </NoBreak>{" "}
              are both <i>nonnegative</i> numbers (taken as obvious), and which
              implies that they are the <i>unique nonnegative</i> solution to{" "}
              <NoBreak>
                <Math>$ x^6 = 2 $</Math>
              </NoBreak>
              .
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>d. (True) In general,</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;\sqrt&#123;x&#125; \over \sqrt&#123;y&#125;&#125; =
              \sqrt&#123;\up&#123;0.7&#125;x \over y&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>$ x \geq 0 $</Math>,
              </NoBreak>{" "}
              <NoBreak>
                <Math>$ y &gt; 0 $</Math>
              </NoBreak>{" "}
              (you need each root to be defined), so
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;\sqrt&#123;2&#125; \over 2&#125; =
              &#123;\sqrt&#123;2&#125; \over \sqrt&#123;4&#125;&#125; =
              \sqrt&#123;\up&#123;0.8&#125;2 \over 4&#125; =
              \sqrt&#123;0.5&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>...ta-daa!</VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              {" "}
              <i>Note 1.</i> One can also proceed by “direct verification”:
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \left(&#123;\sqrt&#123;2&#125; \over
              2&#125;\right)^&#123;\!2&#125; = &#123;\sqrt&#123;2&#125; \over
              2&#125;\cdot&#123;\sqrt&#123;2&#125; \over 2&#125; =
              &#123;\sqrt&#123;2&#125;\cdot\sqrt&#123;2&#125; \over 4&#125; =
              &#123;2 \over 4&#125; = 0.5. $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              (This, together with the fact that{" "}
              <NoBreak>
                <Math>$ &#123;\sqrt&#123;2&#125; \over 2&#125; $</Math>
              </NoBreak>{" "}
              is not negative, establishes that{" "}
              <NoBreak>
                <Math>
                  $ &#123;\sqrt&#123;2&#125; \over 2&#125; =
                  \sqrt&#123;0.5&#125; $
                </Math>
              </NoBreak>
              .)
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              e. (True) Using the “
              <NoBreak>
                <Math>
                  $ &#123;\sqrt&#123;x&#125; \over \sqrt&#123;y&#125;&#125; =
                  \sqrt&#123;\up&#123;0.7&#125;x \over y&#125; $
                </Math>
                ”
              </NoBreak>{" "}
              identity:
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over \sqrt&#123;2&#125;&#125; =
              &#123;\sqrt&#123;1&#125; \over \sqrt&#123;2&#125;&#125; =
              \sqrt&#123;\up&#123;0.8&#125;1 \over 2&#125; =
              \sqrt&#123;0.5&#125;. $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>Or by direct verification:</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \left(&#123;1 \over
              \sqrt&#123;2&#125;&#125;\right)^&#123;\!2&#125; = &#123;1 \over
              \sqrt&#123;2&#125;&#125;\cdot&#123;1 \over
              \sqrt&#123;2&#125;&#125; = &#123;1 \over
              \sqrt&#123;2&#125;\cdot\sqrt&#123;2&#125;&#125; = &#123;1 \over
              2&#125; = 0.5. $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              (And{" "}
              <NoBreak>
                <Math>$ 1 \over \sqrt&#123;2&#125; $</Math>
              </NoBreak>{" "}
              is nonnegative.) Or by reducing to part d:
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over \sqrt&#123;2&#125;&#125; =
              &#123;\sqrt&#123;2&#125; \over \sqrt&#123;2&#125; \cdot
              \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;.
              $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              (The point being: we already know that{" "}
              <NoBreak>
                <Math>
                  $ &#123;\sqrt&#123;2&#125; \over 2&#125; =
                  \sqrt&#123;0.5&#125; $
                </Math>
              </NoBreak>{" "}
              by part d.)
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>f. (True) We have</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ 2^&#123;30&#125; = 2^&#123;10&#125; \times 2^&#123;10&#125;
              \times 2^&#123;10&#125; = (2^&#123;10&#125;)^3 $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>and</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ (2^&#123;10&#125;)^3 = (1024)^3 &gt; 1000^3. $$
            </MathBlock>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              {" "}
              <i>Note 2.</i> The first ten or so powers of{" "}
              <NoBreak>
                <Math>$ 2 $</Math>
              </NoBreak>{" "}
              are worth knowing by heart (here's <i>eleven</i> powers, mind
              you):
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;array&#125;&#123;c|c&#125; \,\,\,\,n\,\,\,\, &
              2^n\dn&#123;0.3&#125; \\ \hline 0 & 1 \up&#123;1.1&#125;\\ 1 & 2
              \\ 2 & 4 \\ 3 & 8 \\ 4 & 16 \\ 5 & 32 \\ 6 & 64 \\ 7 & 128 \\ 8 &
              256 \\ 9 & 512 \\ 10 & 1024 \end&#123;array&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>Among which, the fact that</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ 2^&#123;10&#125; \approx 10^3 $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              can be particularly useful to know! For example, if a
              1-millimeter-thick napkin is folded{" "}
              <NoBreak>
                <Math>$ 50 $</Math>
              </NoBreak>{" "}
              times over, doubling the width each time, one obtains something of
              thickness
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ 2^&#123;50&#125;\fw\te&#123;mm&#125; =
              (2^&#123;10&#125;)^5\fw\te&#123;mm&#125; \approx
              (10^3)^5\fw\te&#123;mm&#125; =
              10^&#123;15&#125;\fw\te&#123;mm&#125;. $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>As</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ 1\fw\te&#123;mm&#125; = 10^&#123;-6&#125;\fw\te&#123;km&#125;
              $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>this is</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ 10^&#123;9&#125;\fw\te&#123;km&#125; $$
              <ImageRight
                use_squiggle_on_mobile={false}
                children_x="39%"
                children_y="48%"
                offset_y="-1rem"
                offset_x="-4rem"
                src="/images/104.svg"
              >
                <VerticalChunk>
                  {" "}
                  <NoBreak>
                    <Math>
                      $ 10^&#123;15&#125;\fw\te&#123;mm&#125; =
                      10^&#123;15&#125;\fw(10^&#123;-6&#125;\fw\te&#123;km&#125;)
                      = \dots $
                    </Math>
                  </NoBreak>{" "}
                </VerticalChunk>
              </ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              or <i>one billion</i> kilometers. By comparison, the distance from
              the Earth to the Sun is a mere{" "}
              <NoBreak>
                <Math>$ 150 $</Math>
              </NoBreak>{" "}
              million kilometers. (The point being: that we could go from the
              relatively mysterious
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$
              \te&#123;“&#125;2^&#123;50&#125;\fw\te&#123;mm&#125;\te&#123;”&#125;
              $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>to the relatively less mysterious</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$
              \te&#123;“&#125;\fw10^&#123;15&#125;\te&#123;mm&#125;\te&#123;”&#125;
              $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              by the approximation{" "}
              <NoBreak>
                <Math>$ 2^&#123;10&#125; \approx 10^3 $</Math>
              </NoBreak>
              .)
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              g. (True) As an inequality can be multiplied on both sides by a
              positive number while preserving the inequality, one has
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; & &#123;1 \over 0.95&#125; &gt; 1.05\\
              \iff & 1 &gt; 1.05 \cdot 0.95\up&#123;1.4&#125;\\ \iff & 1 &gt; (1
              + 0.05)(1 - 0.05)\up&#123;1.4&#125;\\ \iff & 1 &gt; 1 -
              0.05^2\up&#123;1.4&#125; \end&#123;align&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              (using the fact that{" "}
              <NoBreak>
                <Math>$ (1+x)(1-x) = 1-x^2 $</Math>,
              </NoBreak>{" "}
              of
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \te&#123;“&#125;\,(a+b)(a-b) = a^2-b^2\,\te&#123;”&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              fame), and since the <i>last</i> inequality is true, the{" "}
              <i>first</i> inequality is true! (Recall that “
              <NoBreak>
                <Math>$ \!\iff\! $</Math>”
              </NoBreak>{" "}
              means “if and only if”.)
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              {" "}
              <i>Note 3.</i> More generally, even though
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 1 - \epsilon&#125; &gt; 1 + \epsilon $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              for any small{" "}
              <NoBreak>
                <Math>$ \epsilon &gt; 0 $</Math>,
              </NoBreak>{" "}
              the number{" "}
              <NoBreak>
                <Math>$ 1 + \epsilon $</Math>
              </NoBreak>{" "}
              remains a good approximation to{" "}
              <NoBreak>
                <Math>$ &#123;1 \over 1 - \epsilon&#125; $</Math>.
              </NoBreak>{" "}
              For example,
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ &#123;1 \over 0.99&#125; $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>is a good approximation to</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ &#123;1 \over 0.99&#125; $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>while</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ &#123;1 \over 0.999&#125; $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>is a good approximation to</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ &#123;1 \over 0.999&#125;, $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>etc.</VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              h. (True) Here are the first few powers of{" "}
              <NoBreak>
                <Math>$ -1 $</Math>
              </NoBreak>{" "}
              (note how each additional multiplication by{" "}
              <NoBreak>
                <Math>$ -1 $</Math>
              </NoBreak>{" "}
              simply changes the sign of the previous result):
            </VerticalChunk>
            <div class="spacer"></div>
            <Grid place_items="end" cols={3}>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1)^1 = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1) = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ -1 $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1)^2 = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1)\times (-1) = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ 1 $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1)^3 = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1)\times(-1)\times (-1) = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ -1 $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1)^4 = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1)\times(-1)\times(-1)\times(-1) = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ 1 $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ (-1)^5 = $</Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>
                    $ \,\,\,(-1)\times(-1)\times(-1)\times(-1)\times(-1) = $
                  </Math>
                </NoBreak>{" "}
              </Item>
              <Item>
                {" "}
                <NoBreak>
                  <Math>$ -1 $</Math>
                </NoBreak>{" "}
              </Item>
            </Grid>
            <div class="spacer"></div>
            <VerticalChunk>
              (Etc.) Obviously, even powers of{" "}
              <NoBreak>
                <Math>$ (-1) $</Math>
              </NoBreak>{" "}
              are equal to{" "}
              <NoBreak>
                <Math>$ 1 $</Math>,
              </NoBreak>{" "}
              while odd powers of{" "}
              <NoBreak>
                <Math>$ (-1) $</Math>
              </NoBreak>{" "}
              are equal to{" "}
              <NoBreak>
                <Math>$ -1 $</Math>.
              </NoBreak>{" "}
              As{" "}
              <NoBreak>
                <Math>$ 101 $</Math>
              </NoBreak>{" "}
              is odd,{" "}
              <NoBreak>
                <Math>$ (-1)^&#123;101&#125; $</Math>
              </NoBreak>{" "}
              is{" "}
              <NoBreak>
                <Math>$ -1 $</Math>
              </NoBreak>
              .
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>i. (False) We have</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;100 \over 99&#125; = &#123;99 + 1 \over 99&#125; = 1 +
              &#123;1 \over 99&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>and</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;101 \over 100&#125; = &#123;100 + 1 \over 100&#125; = 1 +
              &#123;1 \over 100&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              so the smaller of the two fractions is{" "}
              <NoBreak>
                <Math>$ &#123;101 \over 100&#125; $</Math>,
              </NoBreak>{" "}
              since{" "}
              <NoBreak>
                <Math>
                  $ &#123;1 \over 100&#125; &lt; &#123;1 \over 99&#125; $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              {" "}
              <i>Note 4.</i> The difference
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 99&#125; - &#123;1 \over 100&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              is interesting in its own right, being connected to a famous
              infinite sum. To visualize this sum, picture a hare poised at{" "}
              <NoBreak>
                <Math>$ x = 0 $</Math>
              </NoBreak>{" "}
              on the number line. This hare runs forward by one unit and
              backwards by half a unit, stopping at the number
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ 1 - &#123;1\over 2&#125; $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              by virtue of this back-and-forth movement. The hare then proceeds
              to run forward by <i>half</i> a unit and back by a <i>third</i> of
              a unit, stopping at
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &\, \left(1 - &#123;1 \over
              2&#125;\right) \\ + \,&\, \left(&#123;1 \over 2&#125; - &#123;1
              \over 3&#125;\right)_&#123;\color&#123;white&#125;
              a_&#123;a_a&#125;\!\!\!\!\!\!\!\!\!\!&#125; \\ \hline = \,&\,
              \left(1 - &#123;1 \over
              3&#125;\right)^&#123;\color&#123;white&#125;
              a^&#123;a^a&#125;&#125; \end&#123;align&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              for another break. Keeping with this pattern, the hare then stops
              at
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &\, \left(1 - &#123;1 \over
              2&#125;\right)\\ + \,&\, \left(&#123;1 \over 2&#125; - &#123;1
              \over 3&#125;\right)\\ + \,&\, \left(&#123;1 \over 3&#125; -
              &#123;1 \over 4&#125;\right)_&#123;\color&#123;white&#125;
              a_&#123;a_a&#125;\!\!\!\!\!\!\!\!\!\!&#125;\\ \hline = \,&\,
              \left(1 - &#123;1 \over
              4&#125;\right)^&#123;\color&#123;white&#125;
              a^&#123;a^a&#125;&#125; \end&#123;align&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>and then at</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &\, \left(1 - &#123;1 \over
              2&#125;\right)\\ + \,&\, \left(&#123;1 \over 2&#125; - &#123;1
              \over 3&#125;\right)\\ + \,&\, \left(&#123;1 \over 3&#125; -
              &#123;1 \over 4&#125;\right)\\ + \,&\, \left(&#123;1 \over 4&#125;
              - &#123;1 \over 5&#125;\right)_&#123;\color&#123;white&#125;
              a_&#123;a_a&#125;\!\!\!\!\!\!\!\!\!\!&#125;\\ \hline = \,&\,
              \left(1 - &#123;1 \over
              5&#125;\right)^&#123;\color&#123;white&#125;
              a^&#123;a^a&#125;&#125; \end&#123;align&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              and so on. Clearly, the successive positions at which the hare
              stops are approaching the number{" "}
              <NoBreak>
                <Math>$ 1 $</Math>
              </NoBreak>{" "}
              from the left, pointing to the fact that the <i>infinite</i> sum
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &\, \left(1 - &#123;1 \over
              2&#125;\right)\\ + \,&\, \left(&#123;1 \over 2&#125; - &#123;1
              \over 3&#125;\right)\\ + \,&\, \left(&#123;1 \over 3&#125; -
              &#123;1 \over 4&#125;\right)\\ + \,&\, \left(&#123;1 \over 4&#125;
              - &#123;1 \over 5&#125;\right)\\ + \,&\, \left(&#123;1 \over
              5&#125; - &#123;1 \over 6&#125;\right)\\ + \,&\, \left(&#123;1
              \over 6&#125; - &#123;1 \over 7&#125;\right)\\ + \,&\,
              \,\,\,\,\,\,\,\,\dots\up&#123;1.3&#125; \end&#123;align&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              is “equal” (in some sense) to{" "}
              <NoBreak>
                <Math>$ 1 $</Math>.
              </NoBreak>{" "}
              But how much, exactly, is the{" "}
              <NoBreak>
                <Math>$ n $</Math>
                -th
              </NoBreak>{" "}
              term
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over n&#125; - &#123;1 \over n+1&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              of the sum? (By the way, this{" "}
              <NoBreak>
                <Math>$ n $</Math>
                -th
              </NoBreak>{" "}
              term is the difference{" "}
              <NoBreak>
                <Math>
                  $ &#123;1 \over 99&#125; - &#123;1 \over 100&#125; $
                </Math>
              </NoBreak>{" "}
              for{" "}
              <NoBreak>
                <Math>$ n = 99 $</Math>,
              </NoBreak>{" "}
              which is how we came to be reminded of this infinite sum in the
              first place.) Well...
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &#123;1 \over n&#125; - &#123;1 \over
              n+1&#125; &= &#123;1 \over n&#125;\cdot&#123;n+1 \over n+1&#125;\,
              - \, &#123;1 \over n+1&#125;\cdot&#123;n \over
              n&#125;\up&#123;1.5&#125;\\ &= &#123;n+1 \over n(n+1)&#125; -
              &#123;n \over n(n+1)&#125;\up&#123;1.5&#125;\\ &= &#123;1 \over
              n(n+1)&#125;\up&#123;1.5&#125; \end&#123;align&#125; $$
              <ImageRight
                children_y="30%"
                children_x="30%"
                y="12%"
                offset_y="3.5rem"
                src="/images/24.svg"
              >
                <MathBlock>
                  $$ \begin&#123;align&#125; &#123;1 \over 99&#125; - &#123;1
                  \over 100&#125; &= &#123;1 \over 99&#125;\cdot&#123;100 \over
                  100&#125;\, - \,&#123;1 \over 100&#125;\cdot&#123;99 \over
                  99&#125;\up&#123;1.5&#125;\\ &= &#123;100 \over 99\cdot
                  100&#125; - &#123;99 \over 99\cdot
                  100&#125;\up&#123;1.5&#125;\\ &= &#123;1 \over 99\cdot
                  100&#125;\up&#123;1.5&#125; \end&#123;align&#125; $$
                </MathBlock>
              </ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>...it's that much. (For example,</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 1&#125; - &#123;1 \over 2&#125; = &#123;1 \over 1
              \cdot 2&#125; = &#123;1 \over 2&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>and</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 2&#125; - &#123;1 \over 3&#125; = &#123;1 \over 2
              \cdot 3&#125; = &#123;1 \over 6&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>and so on.) So the infinite sum</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &\, \left(1 - &#123;1 \over
              2&#125;\right)\\ + \,&\, \left(&#123;1 \over 2&#125; - &#123;1
              \over 3&#125;\right)\\ + \,&\, \left(&#123;1 \over 3&#125; -
              &#123;1 \over 4&#125;\right)\\ + \,&\, \left(&#123;1 \over 4&#125;
              - &#123;1 \over 5&#125;\right)\\ + \,&\, \left(&#123;1 \over
              5&#125; - &#123;1 \over 6&#125;\right)\\ + \,&\, \left(&#123;1
              \over 6&#125; - &#123;1 \over 7&#125;\right)\\ + \,&\,
              \,\,\,\,\,\,\,\,\dots\up&#123;1.3&#125;\dn&#123;1&#125;\\ \hline =
              \,&\, 1\up&#123;1.5&#125; \end&#123;align&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>can also be written</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 1 \cdot 2&#125; + &#123;1 \over 2 \cdot 3&#125; +
              &#123;1 \over 3 \cdot 4&#125; + &#123;1 \over 4 \cdot 5&#125; +
              &#123;1 \over 5 \cdot 6&#125; + \dots \,=\, 1 $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>(or</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 2&#125; + &#123;1 \over 6&#125; + &#123;1 \over
              12&#125; + &#123;1 \over 20&#125; + &#123;1 \over 30&#125; + \dots
              \,=\, 1 $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              equivalently) which is not obvious at first glance, and kind of
              interesting!
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              {" "}
              <i>Note 5.</i> The fact that
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over
              n(n+1)&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              means, in particular, that{" "}
              <NoBreak>
                <Math>$ &#123;1 \over n&#125; - &#123;1 \over n+1&#125; $</Math>
              </NoBreak>{" "}
              is roughly{" "}
              <NoBreak>
                <Math>$ &#123;1 \over n^2&#125; $</Math>
              </NoBreak>{" "}
              for large{" "}
              <NoBreak>
                <Math>$ n $</Math>,
              </NoBreak>{" "}
              which is sometimes handy to know. For example,
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 10&#125; - &#123;1 \over 11&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              is approximately{" "}
              <NoBreak>
                <Math>$ 1/10^2 = 0.01 $</Math>,
              </NoBreak>{" "}
              while
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 100&#125; - &#123;1 \over 101&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              is approximately{" "}
              <NoBreak>
                <Math>$ 1/100^2 = 0.01^2 = 0.0001 $</Math>,
              </NoBreak>{" "}
              etc.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise exercise_number={1}>
          <VerticalChunk>
            {" "}
            <b>Exercise 2.</b> In the solution to Exercise 1, we observed how
            the difference
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            $$ &#123;1 \over n&#125; - &#123;1 \over n+1&#125; $$
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            is <i>roughly</i>{" "}
            <NoBreak>
              <Math>$ 1/n^2 $</Math>
            </NoBreak>{" "}
            for large{" "}
            <NoBreak>
              <Math>$ n $</Math>.
            </NoBreak>{" "}
            But how far off is this exactly? (I.e., what is the difference
            between{" "}
            <NoBreak>
              <Math>$ &#123;1 \over n&#125; - &#123;1 \over n+1&#125; $</Math>
            </NoBreak>{" "}
            and{" "}
            <NoBreak>
              <Math>$ &#123;1 \over n^2&#125; $</Math>
              ?)
            </NoBreak>{" "}
            And <i>roughly</i> how much is this far-offness, for large{" "}
            <NoBreak>
              <Math>$ n $</Math>
            </NoBreak>
            ?
          </VerticalChunk>
          <div class="spacer"></div>
          <Solution solution_number={1}>
            <VerticalChunk>Since</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over
              n(n+1)&#125; $$
              <ImageRight
                use_squiggle_on_mobile={false}
                children_x="41%"
                children_y="13%"
                src="/images/25.svg"
                offset_y="1.2rem"
                offset_x="-6rem"
              >
                <MathBlock>$$ &#123;1 \over 99\cdot 100&#125; $$</MathBlock>
              </ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              (as previously computed) is smaller than
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over n^2&#125; $$
              <ImageRight
                use_squiggle_on_mobile={false}
                children_x="41%"
                children_y="15%"
                src="/images/26.svg"
                offset_y="1.2rem"
                offset_x="-6rem"
              >
                <MathBlock>$$ &#123;1 \over 99^2&#125; $$</MathBlock>
              </ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>we will compute the difference</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>as opposed to the “other difference</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over n(n+1)&#125; - &#123;1 \over n^2&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              to avoid a minus sign in the result. (Computing the second
              difference and having a minus sign does not constitute a mistake,
              however.) Having said this, the difference is:
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ \begin&#123;align&#125; &#123;1 \over n^2&#125; - &#123;1 \over
              n(n+1)&#125; &= &#123;1 \over n^2&#125; \cdot &#123;n+1 \over
              n+1&#125; - &#123;1 \over n(n+1)&#125; \cdot &#123;n \over
              n&#125;\\ &= &#123;n+1 \over n^2(n+1)&#125; - &#123;n \over
              n^2(n+1)&#125;\up&#123;1.5&#125;\\ &= &#123;1 \over
              n^2(n+1)&#125;\up&#123;1.5&#125; \end&#123;align&#125; $$
              <ImageRight
                clickable_on_desktop={true}
                children_x="23%"
                children_y="27%"
                y="12%"
                offset_y="2rem"
                src="/images/27.svg"
              >
                <MathBlock>
                  $$ \begin&#123;align&#125; &#123;1 \over 99^2&#125; - &#123;1
                  \over 99\cdot 100&#125; &= &#123;1 \over
                  99^2&#125;\cdot&#123;100 \over 100&#125;\, - \, &#123;1 \over
                  99\cdot 100&#125;\cdot&#123;99 \over 99&#125;\\ &= &#123;100
                  \over 99^2 \cdot 100&#125; - &#123;99 \over 99^2 \cdot
                  100&#125;\up&#123;1.5&#125;\\ &= &#123;1 \over 99^2\cdot
                  100&#125;\up&#123;1.5&#125; \end&#123;align&#125; $$
                </MathBlock>
              </ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              which, for large{" "}
              <NoBreak>
                <Math>$ n $</Math>,
              </NoBreak>{" "}
              is roughly
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ &#123;1 \over n^3&#125; $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              since{" "}
              <NoBreak>
                <Math>$ n^2(n+1) \approx n^3 $</Math>
              </NoBreak>{" "}
              for large{" "}
              <NoBreak>
                <Math>$ n $</Math>
              </NoBreak>
              .
            </VerticalChunk>
            <div class="spacer"></div>
            <Pause></Pause>
            <VerticalChunk>
              {" "}
              <i>Example 1.</i> Above, we estimated
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 10&#125; - &#123;1 \over 11&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              to be roughly{" "}
              <NoBreak>
                <Math>$ 1/100 = 0.01 $</Math>,
              </NoBreak>{" "}
              but{" "}
              <NoBreak>
                <Math>$ 1/100 $</Math>
              </NoBreak>{" "}
              is bigger than the actual value of{" "}
              <NoBreak>
                <Math>
                  $ &#123;1 \over 10\cdot 11&#125; = &#123;1 \over 110&#125; $
                </Math>
              </NoBreak>{" "}
              by
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ &#123;1 \over 10^2\cdot 11&#125; $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              or close to{" "}
              <NoBreak>
                <Math>$ 1/10^3 = 0.001 $</Math>.
              </NoBreak>{" "}
              (So
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              $$ &#123;1 \over 10&#125; - &#123;1 \over 11&#125; $$
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              is about{" "}
              <NoBreak>
                <Math>$ 0.01 $</Math>,
              </NoBreak>{" "}
              while making an error of about{" "}
              <NoBreak>
                <Math>$ 0.001 $</Math>
                .)
              </NoBreak>{" "}
              (In fact,
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>$$ &#123;1 \over 10^2\cdot 11&#125; $$</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              is <i>less</i> than{" "}
              <NoBreak>
                <Math>$ 1/10^3 $</Math>,
              </NoBreak>{" "}
              so the error is <i>less</i> than{" "}
              <NoBreak>
                <Math>$ 0.001 $</Math>
              </NoBreak>
              .)
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
    </Chapter>
  );
};

export default Article;
