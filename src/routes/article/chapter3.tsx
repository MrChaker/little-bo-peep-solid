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
         number={3}
         counter="NoteCounter"
         counter="ExampleCounter"
         title="Functions">
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Syntax.
          </b>
          {" "}
          A
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          function
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          is a “rule” for transforming inputs (usually
          numbers) into outputs (usually numbers as well).
          One can think of a function as a box with an
          “input tube” and an “output tube”:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch3_f_box.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          An input goes in via the input tube, is
          processed according to the function's rule,
          and the result comes out the other side.
          (Metaphorically speaking.)
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          In the above picture, the name of the function
          is “
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          ”.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Notation-wise, one writes
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;f(x)&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          (which is read “
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
            ”,
          </NoBreak>
          {" "}and that's 
          important) for the result of passing an input
          {" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
          </NoBreak>
          {" "}to a function{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            .
          </NoBreak>
          {" "}For example, if the rule
          according to which{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}processes inputs is
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          the output is the square of the input
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          then
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;f(2) = 4&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [“
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $
              2
              $
            </Math>
          </NoBreak>
          {" "}equals{" "}
          <NoBreak>
            <Math>
              $
              4
              $
            </Math>
            ”]
          </NoBreak>
          {" "}because{" "}
          <NoBreak>
            <Math>
              $
              2^2 = 4
              $
            </Math>
            ,
          </NoBreak>
          {" "}and
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;f(3) = 9&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [“
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $
              3
              $
            </Math>
          </NoBreak>
          {" "}equals{" "}
          <NoBreak>
            <Math>
              $
              9
              $
            </Math>
            ”]
          </NoBreak>
          {" "}because{" "}
          <NoBreak>
            <Math>
              $
              3^2 = 9
              $
            </Math>
            ,
          </NoBreak>
          {" "}and
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123; f(0.1) = 0.01&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [...] because{" "}
          <NoBreak>
            <Math>
              $
              0.1^2 = 0.01
              $
            </Math>
            ,
          </NoBreak>
          {" "}and so on. Also,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;f(x) = x^2&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [“
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
          </NoBreak>
          {" "}equals{" "}
          <NoBreak>
            <Math>
              $
              x^2
              $
            </Math>
            ”]
          </NoBreak>
          {" "}more generally, which
          is actually the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          definition
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          of{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            !!
          </NoBreak>
          {" "}(Stated algebraically.)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Lambda functions.
          </b>
          {" "}
          A
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          lambda function
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          is not a type of function, but a type of
          notation  that enables one to define a function 
          without giving it a name, such as “
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            ”.
          </NoBreak>
          {" "}In fact 
          there are two different mainstream notations, in 
          this instance. One notation writes
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \lambda&#123;&#125;x.x^2
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          to mean “the function that maps{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
          </NoBreak>
          {" "}to{" "}
          <NoBreak>
            <Math>
              $
              x^2
              $
            </Math>
            ”
          </NoBreak>
          {" "}
          (and by the way,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \lambda&#123;&#125;z.z^2
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is{" "}
          <i>
            the same
          </i>
          {" "}function, because 
          it specifies the same in-out mapping—a thing 
          goes to its square—also by the way, the symbol
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Huge \lambda
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is the Greek letter “lambda”, giving its name 
          to the topic) while the other notation writes{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x \rightarrow x^2
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          to mean the same thing.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Note that
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (x \ra x^2)(0.1)
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          means “the function that maps each number to its
          square, of{" "}
          <NoBreak>
            <Math>
              $
              0.1
              $
            </Math>
            ”.
          </NoBreak>
          {" "}So...
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (x \ra x^2)(0.1) = 0.01
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          ...the same as an equation of the form 
          “
          <NoBreak>
            <Math>
              $
              f(\dots) = \dots
              $
            </Math>
          </NoBreak>
          ”.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          For more practice:
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (\lambda x.x^3)(10) = 1000
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (\lambda u.u^5)(10) = 100000
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (v \ra v^2)(10) = 100
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (z \ra z^3)(10) + (t \ra t^2)(5) = 1025.
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          (Etc.) (Indeed, to emphasize again, the variable 
          denoting the input does not matter: it is just a 
          placeholder, and you obtain the same output, and 
          the same{" "}
          <i>
            function
          </i>
          , no matter what symbol 
          you choose.*) (\*As long as you don't collide 
          with other existing variable names.)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Definition by cases.
          </b>
          {" "}
          Sometimes a function is defined by an expression 
          of the form
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x \ra \begin&#123;cases&#125;
          \ldots & \te&#123;if $\ldots$&#125;\\
          \ldots & \te&#123;if $\ldots$&#125;\\
          \vdots & \vdots\\
          \ldots & \te&#123;$\ldots$&#125;
          \end&#123;cases&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          where the right-hand side is a list of mutually 
          exclusive cases to consider according to the 
          value of{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
            .
          </NoBreak>
          {" "}Equivalently,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          g(x) = \begin&#123;cases&#125;
          \ldots & \te&#123;if $\ldots$&#125;\\
          \ldots & \te&#123;if $\ldots$&#125;\\
          \vdots & \vdots\\
          \ldots & \te&#123;$\ldots$&#125;
          \end&#123;cases&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          in the case where the function has a name, such
          as “
          <NoBreak>
            <Math>
              $
              g
              $
            </Math>
          </NoBreak>
          ”.
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
            If VX-11/78A (don't mind the weird name, chosen
            at random) is the function defined by
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \te&#123;VX-11/78A&#125;(x) = \begin&#123;cases&#125; 
            3.5 & \te&#123;if $x = 0$&#125;,\\
            2.5\up&#123;1.1&#125; & \te&#123;if $x = 1$&#125;,\\
            \te&#123;undefined&#125;\up&#123;1.1&#125; & \te&#123;if $x \ne 0, 1$&#125;
            \end&#123;cases&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            then
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \te&#123;VX-11/78A&#125;(0) = 3.5,
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
            \te&#123;VX-11/78A&#125;(1) = 2.5,
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            aaand... and these are the only two values of 
            {" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
            </NoBreak>
            {" "}for which VX-11/78A
            <NoBreak>
              <Math>
                $
                (x)
                $
              </Math>
            </NoBreak>
            {" "}is defined, as 
            specified.
          </VerticalChunk>
        </Example>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            On arbitrariness.
          </b>
          {" "}
          While a function such as VX-11/78A might seem 
          completely arbitrary, one lesson from the former 
          example is that functions{" "}
          <i>
            can
          </i>
          {" "}be 
          completely arbitrary! In fact, there are only 
          two “ground rules” to respect in order for 
          something to qualify as a function:{" "}
          <b>
            (i)
          </b>
          {" "}to 
          output
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          one
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          output per (accepted) input, and{" "}
          <b>
            (ii)
          </b>
          {" "}to return 
          the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          same
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          output each time on the same input. (Sometimes,
          functions are said to be
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          deterministic
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          because of{" "}
          <b>
            (ii)
          </b>
          .)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Graphs.
          </b>
          {" "}
          The
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          graph
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          of a function is a visualization device. A point
          on the graph corresponds to an input for which
          the function is defined. The{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
            -coordinate
          </NoBreak>
          {" "}of 
          the point is the value of the input, while the 
          {" "}
          <NoBreak>
            <Math>
              $
              y
              $
            </Math>
            -coordinate
          </NoBreak>
          {" "}is the value of the corresponding 
          output.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          For example, here is a graph of VX-11/78A:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch3_vx1178A.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          The graph has only two points, because VX-78/11A 
          is defined at only two values. One point is...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch3_vx1178A_@0_with_cors.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          ...
          <NoBreak>
            <Math>
              $
              (0, 3.5)
              $
            </Math>
            ,
          </NoBreak>
          {" "}because VX-78/11A maps{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
          </NoBreak>
          {" "}to 
          {" "}
          <NoBreak>
            <Math>
              $
              3.5
              $
            </Math>
            ,
          </NoBreak>
          {" "}while the other point is...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch3_vx1178A_@1_with_cors.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          ...
          <NoBreak>
            <Math>
              $
              (1, 2.5)
              $
            </Math>
            ,
          </NoBreak>
          {" "}because VX-78/11A maps{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          {" "}to{" "}
          <NoBreak>
            <Math>
              $
              2.5
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
              Example 2.
            </b>
            {" "}
            Here is a graph of{" "}
            <NoBreak>
              <Math>
                $
                x \ra x^2
                $
              </Math>
            </NoBreak>
            {" "}on the interval
            {" "}
            <NoBreak>
              <Math>
                $
                [-1, 1]
                $
              </Math>
            </NoBreak>
            {" "}(meaning: going from{" "}
            <NoBreak>
              <Math>
                $
                x = -1
                $
              </Math>
            </NoBreak>
            {" "}to 
            {" "}
            <NoBreak>
              <Math>
                $
                x = 1
                $
              </Math>
            </NoBreak>
            ):
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_x_squared_1_worked.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            Among all the points on this graph that we 
            could discuss, let us name, say, the point 
            {" "}
            <NoBreak>
              <Math>
                $
                (0.75, 0.5625)
                $
              </Math>
            </NoBreak>
            ...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_x_squared_2_worked.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...which finds itself on the graph, namely, 
            because the square of{" "}
            <NoBreak>
              <Math>
                $
                0.75
                $
              </Math>
            </NoBreak>
            {" "}is 
            {" "}
            <NoBreak>
              <Math>
                $
                0.5625 = 9/16
                $
              </Math>
            </NoBreak>
            .
            <ImageLeft
                 offset_y="0em"
                 line={-1.0}
                 src="/images/svg_ch3_0.5625_cloud.svg" />
          </VerticalChunk>
        </Example>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Domains.
          </b>
          {" "}
          The{" "}
          <i>
            domain
          </i>
          {" "}of a function{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          —written
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \dom\, f
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          —is the set of inputs{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
          </NoBreak>
          {" "}for which{" "}
          <NoBreak>
            <Math>
              $
              f(x)
              $
            </Math>
          </NoBreak>
          {" "}is
          defined.
        </VerticalChunk>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 3.
            </b>
            {" "}
            We have
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \dom\,\rt&#123;0.1&#125; \te&#123;VX-11/78A&#125; = \left\&#123; 0\rt&#123;0.1&#125;, 1 \right\&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            because VX-11/78A
            <NoBreak>
              <Math>
                $
                (x)
                $
              </Math>
            </NoBreak>
            {" "}is only defined at{" "}
            <NoBreak>
              <Math>
                $
                x = 0
                $
              </Math>
              ,
            </NoBreak>
            {" "}
            {" "}
            <NoBreak>
              <Math>
                $
                1
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
            If DM-1700 (another weirdly named function) is 
            defined by
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \te&#123;DM-1700&#125;(x) = 
            \begin&#123;cases&#125; 
            0             & \te&#123;if $x \leq 0$ or $x \geq 1$&#125;,\\
            1 - x\up&#123;1.1&#125; & \te&#123;if $0 &lt; x &lt; 1$&#125;
            \end&#123;cases&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            then
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \dom\,\rt&#123;0.1&#125; \te&#123;DM-1700&#125; = \rr
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            because{" "}
            <NoBreak>
              <Math>
                $
                \te&#123;DM-1700&#125;(x)
                $
              </Math>
            </NoBreak>
            {" "}is defined for all
            {" "}
            <NoBreak>
              <Math>
                $
                x \in \rr
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
              Example 5.
            </b>
            {" "}
            If{" "}
            <NoBreak>
              <Math>
                $
                g : \rr \ra \rr
                $
              </Math>
            </NoBreak>
            {" "}(we are going to explain 
            this notation imminently) is the function given 
            by
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            g(x) = \sqrt&#123;x - 1^&#123;\color&#123;white&#125;*\!\!&#125;&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            then
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \begin&#123;align&#125;
            \dom\, g &\,=\, [1, \infty)
            \end&#123;align&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            because the square root of a number is defined 
            if and only if that number is{" "}
            <i>
              nonnegative
            </i>
            {" "}
            (i.e., we need{" "}
            <NoBreak>
              <Math>
                $
                x - 1 \geq 0
                $
              </Math>
            </NoBreak>
            {" "}in order for{" "}
            <NoBreak>
              <Math>
                $
                g(x)
                $
              </Math>
            </NoBreak>
            {" "}
            to be defined, i.e., we need{" "}
            <NoBreak>
              <Math>
                $
                x \geq 1
                $
              </Math>
            </NoBreak>
            ).
          </VerticalChunk>
        </Example>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 6.
            </b>
            {" "}
            If{" "}
            <NoBreak>
              <Math>
                $
                h : \rr \ra \rr
                $
              </Math>
            </NoBreak>
            {" "}is defined by
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            h(x) = \frac&#123;1&#125;&#123;x+1&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            then
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \begin&#123;align&#125;
            \dom\,h \,=\, \rr\back\&#123;-1\&#125; =\, (-\infty,-1) \cup (-1,\infty)
            \end&#123;align&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            because{" "}
            <NoBreak>
              <Math>
                $
                1/(x+1)
                $
              </Math>
            </NoBreak>
            {" "}is well-defined if and only if
            division by 0 is avoided, i.e., if and only if 
            {" "}
            <NoBreak>
              <Math>
                $
                x \ne -1
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
        </Example>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            “From/To” Notation.
          </b>
          {" "}
          The notation
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f : \rr \ra \rr
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          means that{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}is a function
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          from{" "}
          <NoBreak>
            <Math>
              $
              \rr
              $
            </Math>
          </NoBreak>
          {" "}to{" "}
          <NoBreak>
            <Math>
              $
              \rr
              $
            </Math>
          </NoBreak>
          {" "}{" "}
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          or, which is to say, that
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \dom f \subseteq \rr
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [translation:{" "}
          <i>
            the domain of{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}is a subset of 
            the set of real numbers
          </i>
          ] and that
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \&#123;f(x) : x \in \dom f\&#125; \subseteq \rr
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          [translation:{" "}
          <i>
            the set of values output by{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}
            is a subset of the set of real numbers
          </i>
          ].
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Generalizing,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f : A \ra B
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          means that
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \dom f \subseteq A
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          (i.e., that{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}only accepts values from{" "}
          <NoBreak>
            <Math>
              $
              A
              $
            </Math>
            )
          </NoBreak>
          {" "}and 
          that
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \&#123;f(x) : x \in \dom f\&#125; \subseteq B
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          (i.e., that{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}only outputs values from{" "}
          <NoBreak>
            <Math>
              $
              B
              $
            </Math>
            ),
          </NoBreak>
          {" "}
          following the pattern above.{" "}
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            The Vertical Line Test.
          </b>
          {" "}
          As it turns out, the term “graph” just means 
          “set of points in the plane”. So a{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          function graph
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          (as described above) is just one particular 
          kind of “graph” among other things that are 
          also called “graphs”, but that are not 
          function graphs.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          The so-called
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          vertical line test
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          observes that a graph [
          <NoBreak>
            <Math>
              $
              =
              $
            </Math>
          </NoBreak>
          {" "}{" "}
          <i>
            set of points 
            in the plane
          </i>
          ] is a function graph if and 
          only if every{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
            -value
          </NoBreak>
          {" "}(a.k.a., input) 
          corresponds to at most one{" "}
          <NoBreak>
            <Math>
              $
              y
              $
            </Math>
            -value
          </NoBreak>
          {" "}(a.k.a., 
          output). In other words, every vertical line 
          should intersect the graph at most once.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          For example, this particular graph...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch3_wiggle_graph.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          is a function graph (or locally at least, from
          what we can see), because every vertical line 
          intersects the graph at most once, but this 
          graph...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch3_circle.svg" />
        <ImageRight
             use_squiggle_on_mobile={false}
             src="/images/svg_ch3_crossing_cloud_circle.svg" />
        <VerticalChunk>
          ...is not the graph of any function, because 
          some vertical lines intersect the graph more 
          than once.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          (Oops. To backtrack and quickly clarify a small 
          matter, an empty circle at the end of a segment, 
          in the vein of the previous figure...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             class="pt-4 mb-3"
             src="/images/svg_ch3_empty_circle.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          ...means that the point in question is{" "}
          <i>
            excluded
          </i>
          {" "}
          from the graph. A filled circle, by opposition, 
          means that the point is included!)
        </VerticalChunk>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 7.
            </b>
            {" "}
            This{" "}
            <i>
              upper semicircle
            </i>
            {" "}of unit radius...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_semicircle.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...passes the vertical line test, and, hence, 
            defines a function.
          </VerticalChunk>
        </Example>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 8.
            </b>
            {" "}
            This graph defines a function...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_factory_function.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...because it passes the vertical line test, 
            while this graph does not define a function...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_factory_nonfunction.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...because it does{" "}
            <i>
              not
            </i>
            {" "}pass the vertical 
            line test!
          </VerticalChunk>
        </Example>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            A Famous Discontinuity.
          </b>
          {" "}
          As already seen, functions can have
          {" "}
          <i>
            discontinuities
          </i>
          : a place where the function 
          experiences a sudden “jump” in value.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          For a famous example of a “naturally” occurring 
          discontinuity (that we feel compelled to 
          mention, for some reason) we need look no 
          further than the function
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \Large x \ra 0^x
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          as it so happens that
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          0^x = 
          \begin&#123;cases&#125; 0 & \te&#123;if &#125; x &gt; 0\\
          1 & \te&#123;if &#125; x = 0\\
          \te&#123;undefined&#125; & \te&#123;if &#125;x &lt; 0 \end&#123;cases&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          which implies a discontinuity in the graph of
          {" "}
          <NoBreak>
            <Math>
              $
              y = 0^x
              $
            </Math>
          </NoBreak>
          {" "}at{" "}
          <NoBreak>
            <Math>
              $
              x = 0
              $
            </Math>
            ,
          </NoBreak>
          {" "}as pictured here:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch3_zero_to_the_x.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          (Pretty cool, no?)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Distinguishing “
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
              ”
            </NoBreak>
            {" "}and “
            <NoBreak>
              <Math>
                $
                f(x)
                $
              </Math>
            </NoBreak>
            ”.
          </b>
          {" "}
          The difference between
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;\te&#123;VX-11/78A&#125;&#125;
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
          &#123;\te&#123;VX-11/78A&#125;(x)&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is that the former is a
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          function
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          while the latter is a
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          value.
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          (Well, provided{" "}
          <NoBreak>
            <Math>
              $
              x \in \&#123;0, 1\&#125;
              $
            </Math>
            ,
          </NoBreak>
          {" "}to make it 
          well-defined at all.) Likewise, if{" "}
          <NoBreak>
            <Math>
              $
              f : \rr \ra \rr
              $
            </Math>
            ,
          </NoBreak>
          {" "}
          the difference between{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          and{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f(x)
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is that the former is a
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          function
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          while the latter is a
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          value.
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          Amusingly, though, if we add “
          <NoBreak>
            <Math>
              $
              x \ra
              $
            </Math>
            ”
          </NoBreak>
          {" "}in front 
          of “
          <NoBreak>
            <Math>
              $
              f(x)
              $
            </Math>
            ”
          </NoBreak>
          {" "}then we are back to considering a{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          function
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          and which is namely the function whose rule is: 
          apply{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            .
          </NoBreak>
          {" "}In fact,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f = (x \ra f(x))
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          where the above is{" "}
          <i>
            an equality between functions
          </i>
          . 
          (You cannot use this equality to
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          define
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          {" "}{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}because that would lead to a circular 
          definition. But that doesn't make the equality 
          any less true. And btw, you can go “one layer 
          deeper”:
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f = (x \ra f(x)) = (x \ra (t \ra f(t))(x))
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          ...where we use the fact that{" "}
          <NoBreak>
            <Math>
              $
              f = (t \ra f(t))
              $
            </Math>
          </NoBreak>
          {" "}
          in the second equality. You could keep going, 
          replacing each time “
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            ”
          </NoBreak>
          {" "}by a self-referential 
          expression, but the process is not intrinsically 
          useful.)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Distinguishing “
            <NoBreak>
              <Math>
                $
                x^3
                $
              </Math>
              ”
            </NoBreak>
            {" "}and “
            <NoBreak>
              <Math>
                $
                x \ra x^3
                $
              </Math>
            </NoBreak>
            ”.
          </b>
          {" "}
          Technically,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x^3
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is a{" "}
          <i>
            value
          </i>
          {" "}(not a function) and the way 
          logicians think of it, philosophically speaking, 
          is like so: at inception, every symbol has 
          some default value attached, absent any other 
          context.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          By contrast,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x \ra x^3
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is clearly a{" "}
          <i>
            function
          </i>
          , not a{" "}
          <i>
            value
          </i>
          . 
          So “
          <NoBreak>
            <Math>
              $
              x^3
              $
            </Math>
            ”
          </NoBreak>
          {" "}and “
          <NoBreak>
            <Math>
              $
              x \ra x^3
              $
            </Math>
            ”
          </NoBreak>
          {" "}are very (VERY) 
          different, qualitatively speaking.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          But including the arrow everywhere is 
          impractical and even pedantic, so, in the end,
          you might see us refer to an expression such as, 
          e.g.,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x^3 + x^2
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          as a “function”, arrow or no arrow.{" "}
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Polynomials.
          </b>
          {" "}
          A function{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}of the form
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f(x) = a_kx^k + a_&#123;k-1&#125;x^&#123;k-1&#125; + \dots + a_2x^2 + a_1x + a_0
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is called a{" "}
          <i>
            polynomial
          </i>
          . Here
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          a_0,\,a_1,\, \ldots,\, a_k \in \rr
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          are arbitrary constants, also known as the 
          {" "}
          <i>
            coefficients
          </i>
          {" "}of the polynomial. The{" "}
          <i>
            degree
          </i>
          {" "}
          of the polynomial is{" "}
          <NoBreak>
            <Math>
              $
              k
              $
            </Math>
            ,
          </NoBreak>
          {" "}if{" "}
          <NoBreak>
            <Math>
              $
              a_k \ne 0
              $
            </Math>
            .
          </NoBreak>
          {" "}
          (Otherwise, work your way down until you find
          a nonzero coefficient—if there are none, because 
          the polynomial is just the constant{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
            ,
          </NoBreak>
          {" "}then 
          the degree is{" "}
          <i>
            minus infinity
          </i>
          .) (We're not 
          kidding.)
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          For example,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          2x + \sqrt&#123;2&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is a polynomial of degree 1, and
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x^2 - 10
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is a polynomial of degree 2, and
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x^&#123;100&#125; + x^&#123;99&#125; + x^&#123;98&#125; + \dots + x^4 + x^3 + x^2 + x + 1
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is a polynomial of degree 100.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Polynomials of low degree have their own 
          special names, as inventoried in the following 
          table:
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \begin&#123;array&#125;&#123;c|c|c&#125;
          \,\,\,\,\te&#123;degree&#125;\,\,\,\, & \te&#123;name&#125; & \,\,\,\,\te&#123;example&#125;\,\,\,\,\Rule&#123;0pt&#125;&#123;0.8em&#125;&#123;0.5em&#125; \\ \hline
          -\infty & \te&#123;zero&#125; & 0\Rule&#123;0pt&#125;&#123;1.1em&#125;&#123;0.0em&#125;\\
          \te&#123;0&#125; & \te&#123;constant&#125; & 1 + \sqrt&#123;5^&#123;\color&#123;white&#125;*\!\!\!&#125;&#125;\\
          \te&#123;1&#125; & \te&#123;affine&#125; & 10x - 1\\
          \te&#123;2&#125; & \,\,\,\,\te&#123;quadratic&#125;\,\,\,\, & x^2 - 1\\
          \te&#123;3&#125; & \te&#123;cubic&#125; & x^3 - 1\\
          \te&#123;4&#125; & \te&#123;quartic&#125; & 1 - x^4\\
          \te&#123;5&#125; & \te&#123;quintic&#125; & x^5
          \end&#123;array&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          There is some confusion about the term
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          affine
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          for which the term
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          linear
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          is sometimes substituted. But if we say 
          “linear” we mean a function of the form{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x \ra a_1x
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          for a constant{" "}
          <NoBreak>
            <Math>
              $
              a_1 \in \rr
              $
            </Math>
            .
          </NoBreak>
          {" "}This is more 
          restricted than an affine function, because
          there is no constant{" "}
          <NoBreak>
            <Math>
              $
              a_0
              $
            </Math>
          </NoBreak>
          !
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch3_affine_linear_cloud.svg" />
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Quadratic, linear, and constant terms.
          </b>
          {" "}
          To finish up on polynomials: the terms of degree
          {" "}
          <NoBreak>
            <Math>
              $
              2
              $
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $
              1
              $
            </Math>
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
          </NoBreak>
          {" "}are called the{" "}
          <i>
            quadratic
          </i>
          , 
          {" "}
          <i>
            linear
          </i>
          , and{" "}
          <i>
            constant
          </i>
          {" "}terms of the 
          polynomial, respectively. If you see
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          a_7x^7 + a_6x^6 + a_5x^5 + a_4x^4 + a_3x^3 - a_2x^2 + a_1x + a_0
          $$
          <ImageRight
               src="/images/svg_ch3_quadratic_linear_constant_cloud.svg" />
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          then the quadratic term is{" "}
          <NoBreak>
            <Math>
              $
              -a_2x^2
              $
            </Math>
            ,
          </NoBreak>
          {" "}not 
          {" "}
          <NoBreak>
            <Math>
              $
              a_2x^2
              $
            </Math>
            ,
          </NoBreak>
          {" "}fyi.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Note that the linear term can also be viewed as
          the “
          <NoBreak>
            <Math>
              $
              x^1
              $
            </Math>
          </NoBreak>
          {" "}term” while the constant term can
          also be viewed as the “
          <NoBreak>
            <Math>
              $
              x^0
              $
            </Math>
          </NoBreak>
          {" "}term”; because
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x^1 = x
          $$
          <ImageRight
               src="/images/svg_ch3_a1_x1_cloud.svg" />
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
            ,
          </NoBreak>
          {" "}and{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x^0 = 1
          $$
          <ImageRight
               src="/images/svg_ch3_a0_x0_cloud.svg" />
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          for all{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
          </NoBreak>
          {" "}(even{" "}
          <NoBreak>
            <Math>
              $
              x = 0
              $
            </Math>
            ),
          </NoBreak>
          {" "}namely.
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Exercises
           labels={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
           counter="ExerciseCounter">
        <Exercise
             exercise_number={0}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 1.
            </b>
            {" "}
            How can you define the absolute value 
            function using “definition by cases”?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={0}>
            <VerticalChunk>
              The absolute value function is{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x \ra \begin&#123;cases&#125; x & \te&#123;if $x \geq 0$,&#125;\\ -x\!\!\up&#123;1.2&#125; & \te&#123;if $x &lt; 0$&#125;\end&#123;cases&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $
                  -(-1) = 1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  -(-5) = 5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}etc.
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
            How can you define the absolute value 
            function using an “ordinary” algebraic formula?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={1}>
            <VerticalChunk>
              We have
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              |x| = \sqrt&#123;x^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $
                  \sqrt&#123;(-1)^2&#125; = 1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \sqrt&#123;(-5)^2&#125; = 5
                  $
                </Math>
              </NoBreak>
              ,
              etc.{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              This definition is less ad-hoc than might seem, 
              being a 1-dimensional form of the Pythagorean 
              theorem.
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
            Evaluate:
          </VerticalChunk>
          <div
               class="spacer" />
          <Grid
               column_first={true}
               with_padding={false}
               place_items="start"
               center_on_overflow={true}
               sm_cutoff={460}
               sm_cols={1}
               cols={2}>
            <Item>
              i.{" "}
              <NoBreak>
                <Math>
                  $
                  (\lambda u.u^3)(0.5)
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </Item>
            <Item>
              ii.{" "}
              <NoBreak>
                <Math>
                  $
                  (u \ra u^2)(x + 1)
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </Item>
            <Item>
              iii.{" "}
              <NoBreak>
                <Math>
                  $
                  (\lambda t.t - 1)(100) \cdot (\lambda t.t + 1)(100)
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </Item>
            <Item>
              iv.{" "}
              <NoBreak>
                <Math>
                  $
                  (u \ra u^2)(a + b)
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </Item>
          </Grid>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={2}>
            <VerticalChunk>
              The answers are:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Grid
                 column_first={true}
                 with_padding={false}
                 place_items="start"
                 center_on_overflow={true}
                 sm_cutoff={460}
                 sm_cols={1}
                 cols={2}>
              <Item>
                i.{" "}
                <NoBreak>
                  <Math>
                    $
                    0.5^3 = 0.125
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </Item>
              <Item>
                ii.{" "}
                <NoBreak>
                  <Math>
                    $
                    (x + 1)^2 = x^2 + 2x + 1
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </Item>
              <Item>
                iii.{" "}
                <NoBreak>
                  <Math>
                    $
                    (100 - 1) \cdot (100 + 1) = 9999
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </Item>
              <Item>
                iv.{" "}
                <NoBreak>
                  <Math>
                    $
                    (a + b)^2 = a^2 + 2ab + b^2
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </Item>
            </Grid>
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
            The{" "}
            <i>
              floor
            </i>
            {" "}of a real number{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
              ,
            </NoBreak>
            {" "}written
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \lfloor x \rfloor,
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            is the greatest integer less than or equal 
            to{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
              .
            </NoBreak>
            {" "}(Start at{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
            </NoBreak>
            {" "}and travel left on the 
            number line until you meet an integer; but if
            {" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
            </NoBreak>
            {" "}is already an integer, stay there; the 
            place you land is{" "}
            <NoBreak>
              <Math>
                $
                \lfloor x \rfloor
                $
              </Math>
            </NoBreak>
            .)
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            Sketch the graph{" "}
            <NoBreak>
              <Math>
                $
                y = \floor&#123;x&#125;
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            Secondly, find a formula for a function whose
            graph looks like this, where you are allowed
            to use “
            <NoBreak>
              <Math>
                $
                \floor&#123;x&#125;
                $
              </Math>
              ”
            </NoBreak>
            {" "}in your formula:
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_factory_roof_graph.svg" />
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={3}>
            <VerticalChunk>
              As{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}grows, so does{" "}
              <NoBreak>
                <Math>
                  $
                  \floor&#123;x&#125;
                  $
                </Math>
                ,
              </NoBreak>
              {" "}but
              {" "}
              <NoBreak>
                <Math>
                  $
                  \floor&#123;x&#125;
                  $
                </Math>
              </NoBreak>
              {" "}only “levels up” each time{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              reaches a new integer, and “flatlines”
              otherwise; this gives rise to the following
              staircase-shaped graph:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_floor_graph.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (For example,{" "}
              <NoBreak>
                <Math>
                  $
                  \floor&#123;1&#125; = 1
                  $
                </Math>
              </NoBreak>
              {" "}because the 
              greatest integer less than or equal to{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              {" "}
              is{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \floor&#123;-0.5&#125; = -1
                  $
                </Math>
              </NoBreak>
              {" "}because the greatest
              integer less than or equal to{" "}
              <NoBreak>
                <Math>
                  $
                  -0.5
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
              ,
              and so on.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For the second part note that the following 
              two displacements, excerpted from the “factory 
              roof” graph in the statement, are equal:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_factory_roof_graph_with_displacement_arrows_worked.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The red dot to the left of{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}has{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinate
              {" "}
              <NoBreak>
                <Math>
                  $
                  \floor&#123;x&#125;
                  $
                </Math>
                ,
              </NoBreak>
              {" "}so the horizontal displacement is{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x - \floor&#123;x&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              so the equation of the graph is{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              y = x - \floor&#123;x&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}{" "}
              <i>
                is
              </i>
              {" "}the 
              vertical displacement, given that the vertical 
              displacement starts at{" "}
              <NoBreak>
                <Math>
                  $
                  y = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and because
              the vertical and horizontal displacements are
              equal.
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
            Find the formula for a function whose graph 
            looks like this, again using the floor function
            ‘
            <NoBreak>
              <Math>
                $
                \lfloor \cdot \rfloor
                $
              </Math>
              ’
            </NoBreak>
            {" "}as a building block:
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_factory_roof_stretched_x2_graph_worked.svg" />
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={4}>
            <VerticalChunk>
              We would like to argue the correctness of 
              the following two-step process (divide the 
              input by{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}apply the function from Exercise 
              4):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_factory_roof_stretched_and_compressed.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Indeed, the two graphs featured above differ
              only by a horizontal dilation; dividing the 
              input by{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
              </NoBreak>
              {" "}“undoes” the dilation, at which 
              point it suffices to apply the function pictured
              in the second graph; having declared our method 
              correct, the answer is thus...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;x/2 - \lfloor x/2 \rfloor&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...as obtained by “sticking”{" "}
              <NoBreak>
                <Math>
                  $
                  x/2
                  $
                </Math>
              </NoBreak>
              {" "}(the halved 
              input) in place of “
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ”
              </NoBreak>
              {" "}in “
              <NoBreak>
                <Math>
                  $
                  \,x - \lfloor x \rfloor
                  $
                </Math>
              </NoBreak>
              ”,
              the formula for the function from Exercise 4.
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              One can check the answer by typing “x/2 - floor(x/2)”
              in DESMOS. Viz:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="1400px"
                 src="/images/png_ch3_desmos_composition_0_c.png" />
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 2.
              </i>
              {" "}
              Alternately, enter “f(x) = x - floor(x)” and
              then “f(x/2)”, viz:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="1400px"
                 src="/images/png_ch3_desmos_composition_1_c.png" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Or we can be even fancier:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="1400px"
                 src="/images/png_ch3_desmos_composition_2_b.png" />
            <div
                 class="spacer" />
            <VerticalChunk>
              What you see above (the graph in orange) is 
              the so-called{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              composition
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}of the functions 
              {" "}
              <NoBreak>
                <Math>
                  $
                  \f
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
                ;
              </NoBreak>
              {" "}in more detail, if we switch the 
              “input tube” and “output tube” sides of a function...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_f_box_inverted.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...(compared to the drawing at the top of the
              chapter), then the composition of{" "}
              <NoBreak>
                <Math>
                  $
                  \f
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
              </NoBreak>
              ,
              written
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\f \circ g&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and read
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              “
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}of{" "}
              <NoBreak>
                <Math>
                  $
                  \hlfbk&#123;&#125;g
                  $
                </Math>
              </NoBreak>
              ”
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              (mathematicians have to invent a notation for 
              everything—that little circle “
              <NoBreak>
                <Math>
                  $
                  \circ
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is called 
              the{" "}
              <i>
                composition operator
              </i>
              ,
              by the way) is the function that you get by
              gluing{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
                's
              </NoBreak>
              {" "}box to the right of{" "}
              <NoBreak>
                <Math>
                  $
                  \f
                  $
                </Math>
                's
              </NoBreak>
              {" "}box, 
              like so:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_f_box_g_box.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In other words,{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
                's
              </NoBreak>
              {" "}output is passed on to{" "}
              <NoBreak>
                <Math>
                  $
                  \f
                  $
                </Math>
              </NoBreak>
              {" "}
              for further processing. (A certain movie called
              “The Human Centipede” comes to mind.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              (To be perfectly clear,
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_f_circle_g_and_f_box_g_box.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  f \circ g
                  $
                </Math>
              </NoBreak>
              {" "}is a{" "}
              <i>
                function
              </i>
              , defined as the
              above assemblage of “
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
              </NoBreak>
              {" "}first,{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}second”.)
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 3.
              </i>
              {" "}
              For a formal definition of “
              <NoBreak>
                <Math>
                  $
                  f \circ g
                  $
                </Math>
              </NoBreak>
              ”—something
              not based on pictures—one need only specify what
              {" "}
              <NoBreak>
                <Math>
                  $
                  f \circ g
                  $
                </Math>
              </NoBreak>
              {" "}does to inputs. Specifically:
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \,&#123;(f \circ g)(x) = f(g(x))&#125;.
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (So that equation is a formal definition.) One can
              also clarify that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\dom f \circ g = \&#123;x\, \in\, \dom g:\, g(x)\, \in\, \dom f\&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which is to say that the domain of{" "}
              <NoBreak>
                <Math>
                  $
                  f \circ g
                  $
                </Math>
              </NoBreak>
              {" "}
              consists of all{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}such that:{" "}
              <b>
                (i)
              </b>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  g(x)
                  $
                </Math>
              </NoBreak>
              {" "}
              exists (a.k.a, “
              <NoBreak>
                <Math>
                  $
                  x \in \dom g
                  $
                </Math>
                ”)
              </NoBreak>
              {" "}and,
              {" "}
              <b>
                (ii)
              </b>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  f(g(x))
                  $
                </Math>
              </NoBreak>
              {" "}exists (a.k.a., “
              <NoBreak>
                <Math>
                  $
                  g(x) \in \dom f
                  $
                </Math>
              </NoBreak>
              ”).
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 4.
              </i>
              {" "}
              Amusingly—or not—both sides of{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;(f \circ g)(x) = f(g(x))&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              are read
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              “
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}of{" "}
              <NoBreak>
                <Math>
                  $
                  \hlfbk&#123;&#125;g
                  $
                </Math>
              </NoBreak>
              {" "}of{" "}
              <NoBreak>
                <Math>
                  $
                  x\hspace&#123;0.1em&#125;
                  $
                </Math>
              </NoBreak>
              ”
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              since “
              <NoBreak>
                <Math>
                  $
                  f \circ g
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is read “
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}of{" "}
              <NoBreak>
                <Math>
                  $
                  g\rt&#123;0.1&#125;
                  $
                </Math>
              </NoBreak>
              ”,
              and “
              <NoBreak>
                <Math>
                  $
                  f(\dots)
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is read “
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}of ...”.
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
            Find formulas for functions whose graphs look 
            like these:
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_factory_roof_x2_worked.svg" />
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={5}>
            <VerticalChunk>
              For the first graph,{" "}
              <del>
                <VerticalChunk>
                  the{" "}
                </VerticalChunk>
              </del>
              an answer is{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              2 \cdot(x/2 - \fl&#123;x/2&#125;)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which simplifies to
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x - 2\fl&#123;x/2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because all we have to do is to multiply 
              Exercise 5's formula by{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For the second graph, an answer is
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x/3 - \fl&#123;x/3&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because the problem is similar to Exercise 5 
              except with a factor{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              {" "}horizontal dilation.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For the third graph, we will first stop to 
              find a formula  for the function depicted here:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_factory_roof_stretched_x3_translated_1_worked.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              And that formula is...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_factory_roof_stretched_x3_translated_1_explanation.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...iiiiiiiS...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x-1)/3 - \fl&#123;(x-1)/3&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as obtained by substituting “
              <NoBreak>
                <Math>
                  $
                  x - 1
                  $
                </Math>
                ”
              </NoBreak>
              {" "}
              (the input, minus{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
                )
              </NoBreak>
              {" "}in place of “
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ”
              </NoBreak>
              {" "}in 
              “
              <NoBreak>
                <Math>
                  $
                  \,x/3 - \fl&#123;x/3&#125;
                  $
                </Math>
                ”,
              </NoBreak>
              {" "}the formula for the 
              second graph. Then we multiply that by{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              {" "}
              (to go from ”
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <InlineImage
                   width="0.9em"
                   src="/images/svg_ch3_3_3_grid_1.svg" />
              ” to “
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <InlineImage
                   width="0.9em"
                   src="/images/svg_ch3_3_3_grid_2.svg" />
              ”, namely), meaning that the final answer is
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              3 \cdot ((x-1)/3 - \fl&#123;(x-1)/3&#125;)
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
                 
              (x - 1) - 3\fl&#123;(x-1)/3&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              after simplification. (Or just
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x - 1 - 3\fl&#123;(x-1)/3&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              though we personally prefer the previous 
              form, it being more “talkative”.)
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
            If
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \cos \dblcol \rr \ra \rr
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            (the “hollow dot colon” means that{" "}
            <NoBreak>
              <Math>
                $
                \dom \cos = \rr
                $
              </Math>
            </NoBreak>
            )
            is a function whose graph looks like so...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch3_cosine.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...then does the function...
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            &#123;x \ra \cos(1000x)&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            ...have a graph that looks like a bunch of very tight 
            bumps, or, instead, very flat{" "}
            <i>
              &
            </i>
            {" "}spaced-out bumps??
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={6}>
            <VerticalChunk>
              Consider how to “read off” a value of{" "}
              <NoBreak>
                <Math>
                  $
                  y = \cos(1000x)
                  $
                </Math>
              </NoBreak>
              {" "}
              from the graph{" "}
              <NoBreak>
                <Math>
                  $
                  y = \cos(x)
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_cosine_1000x_worked.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              By the first step, a
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              horizontal dilation by a factor 1000
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              maps the first graph onto the second graph—i.e.,
              a point
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x, y)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is on the first graph if and only the dilated
              point
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (1000x, y)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is on the second graph. The first graph is
              therefore some very compressed thing, full of
              scrunched bumps!
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              One can also reason that a small change in{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              results in a large change in{" "}
              <NoBreak>
                <Math>
                  $
                  1000x
                  $
                </Math>
                ,
              </NoBreak>
              {" "}so that 
              {" "}
              <NoBreak>
                <Math>
                  $
                  \cos(1000x)
                  $
                </Math>
              </NoBreak>
              {" "}must “cycle” much faster through 
              values than{" "}
              <NoBreak>
                <Math>
                  $
                  \cos(x)
                  $
                </Math>
              </NoBreak>
              {" "}does.
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
            Rewrite
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            <CustomBlock
                 style="font-size:1.1em">
              <MathBlock>
                $$
                \tag&#123;A&#125;(f \circ (g \circ h))(x)
                $$
              </MathBlock>
            </CustomBlock>
            without using “
            <NoBreak>
              <Math>
                $
                \circ
                $
              </Math>
              ”,
            </NoBreak>
            {" "}using only the 
            “definitional equation of function 
            composition”, which is namely
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            <CustomBlock
                 style="font-size:1.1em">
              <MathBlock>
                $$
                \tag&#123;AA&#125;(r \circ s)(x) = r(s(x))
                $$
              </MathBlock>
            </CustomBlock>
            (where{" "}
            <NoBreak>
              <Math>
                $
                r
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                s
                $
              </Math>
            </NoBreak>
            {" "}are functions); plz
            note that you will have to apply (AA) 
            {" "}
            <i>
              twice
            </i>
            , as each application of (AA) 
            makes{" "}
            <i>
              one
            </i>
            {" "}copy of the symbol “
            <NoBreak>
              <Math>
                $
                \circ
                $
              </Math>
              ”
            </NoBreak>
            {" "}
            disappear, and (A) contains{" "}
            <i>
              two
            </i>
            {" "}copies of 
            “
            <NoBreak>
              <Math>
                $
                \circ
                $
              </Math>
            </NoBreak>
            ”!!
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={7}>
            <VerticalChunk>
              Setting “
              <NoBreak>
                <Math>
                  $
                  r
                  $
                </Math>
                ”
              </NoBreak>
              {" "}to “
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
                ”
              </NoBreak>
              {" "}and “
              <NoBreak>
                <Math>
                  $
                  s
                  $
                </Math>
                ”
              </NoBreak>
              {" "}to “
              <NoBreak>
                <Math>
                  $
                  (g \circ h)
                  $
                </Math>
                ”
              </NoBreak>
              {" "}
              in (AA) yields
              <ImageLeft
                   offset_y="-0.5em"
                   offset_x="1em"
                   popup={true}
                   src="/images/svg_ch3_r_s_substitution_1_1.1em_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  (f \circ (g \circ h))(x) = \f((g \circ h)(x))
                  $$
                </MathBlock>
              </CustomBlock>
              ...which already constitutes progress towards
              our goal, since only one copy of “
              <NoBreak>
                <Math>
                  $
                  \circ
                  $
                </Math>
                ”
              </NoBreak>
              {" "}
              exists on the right-hand side! But
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  (g \circ h)(x) = g(h(x))
                  $$
                </MathBlock>
              </CustomBlock>
              by the “definitional equation” again, so
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  f((g \circ h)(x)) = \f(g(h(x)))
                  $$
                </MathBlock>
              </CustomBlock>
              ...and this completes the computation!
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              We can collect both steps of the computation 
              into a single string of equalities:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_first_victim_second_victim_1_1em.svg" />
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
            Same question as Exercise 17, but for 
            “
            <NoBreak>
              <Math>
                $
                f \circ (g \circ h)
                $
              </Math>
              ”
            </NoBreak>
            {" "}instead of 
            “
            <NoBreak>
              <Math>
                $
                (f \circ g) \circ h
                $
              </Math>
            </NoBreak>
            ”.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={8}>
            <VerticalChunk>
              We will again evaluate the “outer”
              composition operator first and the “inner”
              composition operator second, where the “outer”
              composition operator is the one that is fewer
              pairs of parentheses away from the outside 
              world:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_inner_outer_1_1em.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              So the first step is...
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  ((f \circ g) \circ h)(x) = (f \circ g)(h(x))
                  $$
                </MathBlock>
              </CustomBlock>
              ...by setting{" "}
              <NoBreak>
                <Math>
                  $
                  r = f \circ g
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  s = h
                  $
                </Math>
              </NoBreak>
              {" "}in
              the definitional equation, and the second step
              is...
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  (f \circ g)(h(x)) = \f(g(h(x)))
                  $$
                </MathBlock>
              </CustomBlock>
              ...by setting{" "}
              <NoBreak>
                <Math>
                  $
                  r = f
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  s = g
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and while
              replacing “
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ”
              </NoBreak>
              {" "}by “
              <NoBreak>
                <Math>
                  $
                  h(x)
                  $
                </Math>
              </NoBreak>
              ”.
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              The fact that
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  (f \circ (g \circ h))(x)
                  $$
                </MathBlock>
              </CustomBlock>
              and
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  ((f \circ g) \circ h)(x)
                  $$
                </MathBlock>
              </CustomBlock>
              both evaluate to
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  f(g(h(x)))
                  $$
                </MathBlock>
              </CustomBlock>
              actually implies that
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  f \circ (g \circ h)
                  $$
                </MathBlock>
              </CustomBlock>
              and
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  (f \circ g) \circ h
                  $$
                </MathBlock>
              </CustomBlock>
              are the same function; this function is namely
              the function that maps{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  f(g(h(x)))
                  $
                </Math>
              </NoBreak>
              {" "}for 
              all{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}(or
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  x \ra f(g(h(x)))
                  $$
                </MathBlock>
              </CustomBlock>
              in lambda notation).
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 2.
              </i>
              {" "}
              Because of this, we can write
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  f \circ g \circ half
                  $$
                </MathBlock>
              </CustomBlock>
              without any parentheses. (The point is: either
              way you parenthesize it you obtain the same 
              function, so why bother?)
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 3.
              </i>
              {" "}
              The fact that
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  &#123;(a + b) + c = a + (b + c)&#125;
                  $$
                </MathBlock>
              </CustomBlock>
              for all numbers{" "}
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
              {" "}is known as the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              associativity
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of addition; likewise, the fact that
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  (ab)c = a(bc)
                  $$
                </MathBlock>
              </CustomBlock>
              for all numbers{" "}
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
              {" "}is known as the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              associativity
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of multiplication; and again likewise,
              the fact that
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  &#123;(f \circ g) \circ h  =  f \circ (g \circ h)&#125;
                  $$
                </MathBlock>
              </CustomBlock>
              for all functions{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}is known 
              as the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              associativity
              <ImageRight
                   src="/images/svg_ch3_associativity_cloud.svg" />
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of function composition.
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 4.
              </i>
              {" "}
              One of the best ways to explain{" "}
              <i>
                &
              </i>
              {" "}understand
              the associativity of function composition 
              uses this picture:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_truth_be_said.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In the above{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  C
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  D
                  $
                </Math>
              </NoBreak>
              {" "}are sets 
              while the arrows encode functions{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}that, respectively in reverse order, 
              go from{" "}
              <NoBreak>
                <Math>
                  $
                  D
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  C
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  C
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
                .
              </NoBreak>
              {" "}
              For example,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \Large h(
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
              <InlineImage
                   y_anchor="-3px"
                   width="1rem"
                   src="/images/svg_ch3_composition_icon_clubs.svg" />
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \Large&#123;&#125;) =
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
              <InlineImage
                   margin_right=".5rem"
                   margin_left=".5rem"
                   y_anchor="-3px"
                   width="1.25rem"
                   src="/images/svg_ch3_composition_icon_die_3.svg" />
              {" "}{" "}
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              because the arrow that originates at
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <InlineImage
                   space_right={true}
                   space_left={true}
                   y_anchor="-4px"
                   width="1rem"
                   src="/images/svg_ch3_composition_icon_clubs.svg" />
              in set{" "}
              <NoBreak>
                <Math>
                  $
                  D
                  $
                </Math>
              </NoBreak>
              {" "}lands at{" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <InlineImage
                   space_right={true}
                   space_left={true}
                   y_anchor="-4px"
                   width="1.25rem"
                   src="/images/svg_ch3_composition_icon_die_3.svg" />
              in set{" "}
              <NoBreak>
                <Math>
                  $
                  C
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $
                  \Large g(h(
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
              <InlineImage
                   y_anchor="-3px"
                   width="1rem"
                   src="/images/svg_ch3_composition_icon_clubs.svg" />
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \Large&#123;&#125;))&#123;&#125;=
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
              <InlineImage
                   space_right={true}
                   space_left={true}
                   y_anchor="-4px"
                   width="2.3rem"
                   src="/images/svg_ch3_composition_icon_fence.svg" />
              {" "}{" "}
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              because, pursuing that path onwards, the arrow 
              that originates at
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <InlineImage
                   space_right={true}
                   space_left={true}
                   y_anchor="-4px"
                   width="1.25rem"
                   src="/images/svg_ch3_composition_icon_die_3.svg" />
              in set{" "}
              <NoBreak>
                <Math>
                  $
                  C
                  $
                </Math>
              </NoBreak>
              {" "}lands at
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <InlineImage
                   space_right={true}
                   space_left={true}
                   y_anchor="-4px"
                   width="2.3rem"
                   src="/images/svg_ch3_composition_icon_fence.svg" />
              in set{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
                ,
              </NoBreak>
              {" "}etc.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Under this representation one can “compute”
              {" "}
              <NoBreak>
                <Math>
                  $
                  f \circ g \circ h
                  $
                </Math>
              </NoBreak>
              {" "}by gluing arrows end-to-end.
              First, say, obliviate set{" "}
              <NoBreak>
                <Math>
                  $
                  C
                  $
                </Math>
              </NoBreak>
              {" "}in the middle 
              right, then do the same with set{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
              </NoBreak>
              {" "}in the
              middle left:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="2000px"
                 src="/images/svg_ch3_truth_be_said_right_first.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              We can also get rid of{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
              </NoBreak>
              {" "}first,{" "}
              <NoBreak>
                <Math>
                  $
                  C
                  $
                </Math>
              </NoBreak>
              {" "}second:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="2000px"
                 src="/images/svg_ch3_truth_be_said_left_first.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The first order of computation corresponds
              to the parenthetization “
              <NoBreak>
                <Math>
                  $
                  f \circ (g \circ h)
                  $
                </Math>
              </NoBreak>
              ”
              while the second corresponds to the 
              parenthetization “
              <NoBreak>
                <Math>
                  $
                  (f \circ g) \circ h
                  $
                </Math>
              </NoBreak>
              ”.
              Intuitively, the reason they come out the 
              same (in “step 6”, bottom left) is because 
              each final arrow in the last diagram comes 
              from a path-of-arrows in the original 
              diagram, and the order in which the 
              waypoints along a path are “straightened” 
              (or “collapsed”) does not affect the origin 
              point or destination point of the final 
              arrow.
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 5.
              </i>
              {" "}
              The last series of diagrams might leave one 
              with the impression that the composition of 
              two or more functions can be “precomputed”
              by looking ahead along the path of yellow arrows. 
              Just so you know, computers do not generically 
              do this. For reason, computers are not given 
              functions as tables of input-output values to 
              know by heart but rather as “recipes” (synonyms: 
              algorithms, code, programs) that allow them 
              to compute an output for any given input. 
              Moreover, there is no general way of flattening 
              two recipes into a single, shorter one—when 
              composing two functions the computer has, in 
              general, no choice but to diligently apply 
              each recipe in order—the first function first,
              the second function second.
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 6.
              </i>
              {" "}
              We have taken for granted the fact that two 
              functions{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
              </NoBreak>
              {" "}are “equal” if and only
              if they produce the same outupt for every 
              input but this is a actually subtle thing 
              that has to do with how functions are defined 
              “under the hood”. Specifically, mathematicians 
              view functions as
              <del>
                <VerticalChunk>
                  long
                </VerticalChunk>
              </del>
              <del>
                <VerticalChunk>
                  lists of
                </VerticalChunk>
              </del>
              sets of ordered pairs; for example—conceptual
              cold water shock ahead—
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\textrm&#123;VX-11/78A&#125; = \&#123;(0, 3.5), (1, 2.5)\&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because VX-11/78A maps{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  3.5
                  $
                </Math>
              </NoBreak>
              {" "}and maps 
              {" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  2.5
                  $
                </Math>
                .
              </NoBreak>
              {" "}(The presence of an ordered pair
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <CustomBlock
                   style="font-size:1.1em">
                <MathBlock>
                  $$
                  (a, b)
                  $$
                </MathBlock>
              </CustomBlock>
              means that input{" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
              </NoBreak>
              {" "}produces output{" "}
              <NoBreak>
                <Math>
                  $
                  b
                  $
                </Math>
                .)
              </NoBreak>
              {" "}So 
              two functions are equal if and only if they 
              are equal
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              as sets of ordered pairs
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              because the set of ordered pairs is the 
              underlying “thing” that the function is. In 
              particular, there is no notion of a “formula” 
              or of a “procedure” being attached to a 
              function, that might cause two functions to 
              be considered unequal even if they produce the 
              same output on every input—producing the same
              output on every input implies that the{" "}
              <del>
                <VerticalChunk>
                  list of
                </VerticalChunk>
              </del>
              set of ordered pairs is equal, and, perforce, 
              that the two functions are equal!!
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
            Show that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            x^2 + 10x + 30
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            can be written in the form{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (x + \dots)^2 + \,\dots
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for some numbers “
            <NoBreak>
              <Math>
                $
                \dots
                $
              </Math>
              ”
            </NoBreak>
            {" "}and “
            <NoBreak>
              <Math>
                $
                \dots
                $
              </Math>
            </NoBreak>
            ”.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={9}>
            <VerticalChunk>
              The answer is
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x + 5)^2 + 5
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              \,\,\,\,(x + 5)^2
              &= x^2 + (2\cdot 5)x + 5^2 \\
              &= \up&#123;1.4&#125; x^2 + 10x + 25
              \end&#123;align&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and adding{" "}
              <NoBreak>
                <Math>
                  $
                  5
                  $
                </Math>
              </NoBreak>
              {" "}gives{" "}
              <NoBreak>
                <Math>
                  $
                  x^2 + 10x + 30
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
            Solve Exercise 10 using algebra{" "}
            <i>
              &
            </i>
            {" "}
            variables.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={10}>
            <VerticalChunk>
              Put an unknown “
              <NoBreak>
                <Math>
                  $
                  U
                  $
                </Math>
                ”
              </NoBreak>
              {" "}for the first set
              of dots and an unknown “
              <NoBreak>
                <Math>
                  $
                  V
                  $
                </Math>
                ”
              </NoBreak>
              {" "}for the 
              second set of dots. Then
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x + U)^2 + V = x^2 + 10x + 30
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              becomes the equation to satisfy.
              Expanding the left-hand side, we get:
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x^2 + 2Ux + U^2 + V = x^2 + 10x + 30.
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              In order for this equation to hold as an 
              equality between polynomials (i.e., for all
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                )
              </NoBreak>
              {" "}the coefficients of{" "}
              <NoBreak>
                <Math>
                  $
                  x^2
                  $
                </Math>
              </NoBreak>
              {" "}on both 
              sides of the equation must be equal, the 
              coefficients of{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}on both sides of the
              equation must be equal, and the constant
              terms on boths of the equation must be 
              equal—this gives us
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              1 = 1
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (equating the coefficients of{" "}
              <NoBreak>
                <Math>
                  $
                  x^2
                  $
                </Math>
                ),
              </NoBreak>
              {" "}and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              2U = 10
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (equating the coefficients of{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ),
              </NoBreak>
              {" "}and{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              U^2 + V = 30
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (equating the constant terms). Only the
              latter two equations contain information.
              In particular,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              2U = 10
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              implies{" "}
              <NoBreak>
                <Math>
                  $
                  U = 5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}so{" "}
              <NoBreak>
                <Math>
                  $
                  U^2 + V = 30
                  $
                </Math>
              </NoBreak>
              {" "}becomes
              {" "}
              <NoBreak>
                <Math>
                  $
                  25 + V = 30
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and 
              {" "}
              <NoBreak>
                <Math>
                  $
                  V = 30 - 25 = 5
                  $
                </Math>
              </NoBreak>
              .
              So{" "}
              <NoBreak>
                <Math>
                  $
                  U = V = 5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}as previously found.
              (But now we know that the solution is{" "}
              <i>
                unique
              </i>
              ,
              because the only number{" "}
              <NoBreak>
                <Math>
                  $
                  U
                  $
                </Math>
              </NoBreak>
              {" "}that satisfies
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              2U = 10
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is{" "}
              <NoBreak>
                <Math>
                  $
                  U = 5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and the only number{" "}
              <NoBreak>
                <Math>
                  $
                  V
                  $
                </Math>
              </NoBreak>
              {" "}that
              satisfies{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              25 + V = 30
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is{" "}
              <NoBreak>
                <Math>
                  $
                  V = 5
                  $
                </Math>
              </NoBreak>
              .)
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
            Show that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            x^2 + 10x + 30 = 0
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            (cf
            <NoBreak>
              <Math>
                $
                .
                $
              </Math>
            </NoBreak>
            {" "}Exercise 21) has no solutions{" "}
            <NoBreak>
              <Math>
                $
                x \in \rr
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={11}>
            <VerticalChunk>
              The equation is equivalent to
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x + 5)^2 + 5 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by Exercise 21, but this implies
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x + 5)^2 = -5
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which is an equation with no solution over
              the reals because the square of a real number
              is nonnegative.
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
            Show that{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            x^2 + 10x - 30 = 0
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            has two solutions{" "}
            <NoBreak>
              <Math>
                $
                x \in \rr
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={12}>
            <VerticalChunk>
              The equation can be written
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x + 5)^2 - 55 = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $
                  (x + 5)^2 = x^2 + 10x + 25
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  25 - 55 = -30
                  $
                </Math>
                .
              </NoBreak>
              {" "}Passing{" "}
              <NoBreak>
                <Math>
                  $
                  55
                  $
                </Math>
              </NoBreak>
              {" "}to the
              other side, we find
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x + 5)^2 = 55
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which holds if and only if
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \,x + 5 = \pm\sqrt&#123;55&#125;
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
              \,x = -5 \pm\sqrt&#123;55&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              constituting two distinct solutions.
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
            What sequence of geometric transformations
            (rotations, translations, scalings, etc) 
            maps the curve
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            &#123;y = x^2&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            onto
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            &#123;y = Ax^2 + Bx&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for constants{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
            </NoBreak>
            {" "}such that{" "}
            <NoBreak>
              <Math>
                $
                A \ne 0
                $
              </Math>
              ?
            </NoBreak>
            {" "}{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={13}>
            <VerticalChunk>
              Write
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;Ax^2 + Bx&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;A\Big(x^2 + &#123;B \over A&#125;x\Big)&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and then write
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;x^2 + &#123;B \over A&#125;x&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              so that, altogether,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;Ax^2 + Bx&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is rewritten
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              that can be seen as descending from{" "}
              <NoBreak>
                <Math>
                  $
                  y = x^2
                  $
                </Math>
              </NoBreak>
              {" "}
              in three steps:
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = x^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;.
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              Three steps, three geometric transformations!
              The third step effects a
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              vertical scaling by{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              i.e., vertically stretches the graph by
              a factor{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
                ,
              </NoBreak>
              {" "}because we multiply the
              value of{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}by{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
                .
              </NoBreak>
              {" "}The second step 
              effects a
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              vertical translation by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;-&#123;B^2 \over 4A^2&#125;&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              i.e., lowers the height of the entire
              graph by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;B^2 \over 4A^2&#125;
                  $
                </Math>
                ,
              </NoBreak>
              {" "}because we add 
              {" "}
              <NoBreak>
                <Math>
                  $
                  -&#123;B^2 \over 4A^2&#125;
                  $
                </Math>
              </NoBreak>
              {" "}to the value of{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              .
              The first step, on the other hand, is
              entirely different: it is a
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              preprocessing
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              step, in that we mess with the input (i.e., 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ),
              </NoBreak>
              {" "}instead of adding on (or “multiplying 
              on”) to the current value of{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                .
              </NoBreak>
              {" "}{" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              To understand how a preprocessing step 
              affects the shape of a graph, note that, more
              generally, a graph of the form
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = f(x + a)&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (for some constant{" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
                )
              </NoBreak>
              {" "}“fetches” values on
              the graph
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = f(x)&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by going{" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
              </NoBreak>
              {" "}units to the right. The larger{" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
              </NoBreak>
              {" "}
              is, thus, the further{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = f(x + a)&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              drifts off to the left. For example,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = f(x + 20)&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              has value{" "}
              <NoBreak>
                <Math>
                  $
                  f(0)
                  $
                </Math>
              </NoBreak>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $
                  x = -20
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and if you replace
              {" "}
              <NoBreak>
                <Math>
                  $
                  20
                  $
                </Math>
              </NoBreak>
              {" "}with something larger, that position (i.e., 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x = -20
                  $
                </Math>
                )
              </NoBreak>
              {" "}drifts even further off to the left!
              In any case, the graph{" "}
              <NoBreak>
                <Math>
                  $
                  y = f(x + a)
                  $
                </Math>
              </NoBreak>
              {" "}is the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              leftward
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              translate by{" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
              </NoBreak>
              {" "}units of{" "}
              <NoBreak>
                <Math>
                  $
                  y = f(x)
                  $
                </Math>
              </NoBreak>
              {" "}
              and, as a consequence, the first step effects a
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              leftward translation by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;B\over 2A&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the curve{" "}
              <NoBreak>
                <Math>
                  $
                  y = x^2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}or
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              horizontal translation by{" "}
              <NoBreak>
                <Math>
                  $
                  -&#123;B\over 2A&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              more elegantly put. (The second formulation
              doesn't assume a particular orientation of the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -axis,
              </NoBreak>
              {" "}that's why it's “more elegantly put”,
              in our opinion.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              To recapitulate, the three transformations
              are,in order:
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              1. horizontal translation by{" "}
              <NoBreak>
                <Math>
                  $
                  -&#123;B \over 2A&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              2. vertical translation by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;-&#123;B^2 \over 4A^2&#125;&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              3. vertical scaling by{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              You could do the vertical translation
              before the horizontal translation,
              geometrically it comes out the same.
              That order of geometric transformations 
              would correspond to the following sequence
              of algebraic transformations:
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = x^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = x^2 - &#123;B^2 \over 4A^2&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;y = A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...in which the{" "}
              <i>
                second
              </i>
              {" "}step is a 
              preprocessing step. (I.e., a step that 
              replaces “
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ”
              </NoBreak>
              {" "}with something else.)
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
            Let{" "}
            <NoBreak>
              <Math>
                $
                x_0 \in \rr
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                y_0 \in \rr
                $
              </Math>
            </NoBreak>
            {" "}and 
            {" "}
            <NoBreak>
              <Math>
                $
                a \in \rr
                $
              </Math>
            </NoBreak>
            {" "}with{" "}
            <NoBreak>
              <Math>
                $
                y_0 \geq 0
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                a \ne 0.
                $
              </Math>
            </NoBreak>
            {" "}
            If you apply these transformations...
          </VerticalChunk>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            1. vertical translation by{" "}
            <NoBreak>
              <Math>
                $
                -y_0
                $
              </Math>
            </NoBreak>
            {" "}{" "}
          </CentralDisplayItalic>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            2. horizontal translation by{" "}
            <NoBreak>
              <Math>
                $
                x_0
                $
              </Math>
            </NoBreak>
            {" "}{" "}
          </CentralDisplayItalic>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            3. vertical scaling by{" "}
            <NoBreak>
              <Math>
                $
                a
                $
              </Math>
            </NoBreak>
            {" "}{" "}
          </CentralDisplayItalic>
          <div
               class="spacer" />
          <VerticalChunk>
            ...to the curve{" "}
            <NoBreak>
              <Math>
                $
                y = x^2
                $
              </Math>
              ,
            </NoBreak>
            {" "}what are the 
            roots of the final curve that you obtain?
            (Nb:{" "}
            <i>
              Roots
            </i>
            {" "}are values of{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
            </NoBreak>
            {" "}such 
            that{" "}
            <NoBreak>
              <Math>
                $
                y = 0
                $
              </Math>
            </NoBreak>
            .)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={14}>
            <VerticalChunk>
              Start by noting that the point 
              {" "}
              <NoBreak>
                <Math>
                  $
                  (\sqrt&#123;y_0&#125;, y_0)
                  $
                </Math>
              </NoBreak>
              {" "}is on the curve{" "}
              <NoBreak>
                <Math>
                  $
                  y = x^2
                  $
                </Math>
              </NoBreak>
              ,
              as well as the point{" "}
              <NoBreak>
                <Math>
                  $
                  (-\sqrt&#123;y_0&#125;, y_0)
                  $
                </Math>
                ,
              </NoBreak>
              {" "}
              because
              {" "}
              <NoBreak>
                <Math>
                  $
                  (\sqrt&#123;y_0&#125;)^2 = (-\sqrt&#123;y_0&#125;)^2 =
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  y_0;
                  $
                </Math>
              </NoBreak>
              {" "}
              here is a sketch of the situation before 
              anything happens:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="760px"
                 src="/images/svg_ch3_x0_y0_step0.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              After vertically translating by{" "}
              <NoBreak>
                <Math>
                  $
                  -y_0
                  $
                </Math>
              </NoBreak>
              {" "}
              the roots will therefore be at{" "}
              <NoBreak>
                <Math>
                  $
                  x = \pm\sqrt&#123;y_0&#125;
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="760px"
                 src="/images/svg_ch3_x0_y0_step1_alone.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Then after horizontally translating by{" "}
              <NoBreak>
                <Math>
                  $
                  x_0
                  $
                </Math>
              </NoBreak>
              {" "}
              the roots mosey over to{" "}
              <NoBreak>
                <Math>
                  $
                  x = x_0\pm\sqrt&#123;y_0&#125;
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="760px"
                 src="/images/svg_ch3_x0_y0_step2_alone.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Lastly, vertical scaling does not affect 
              the position of the roots, because it 
              stretches the graph{" "}
              <i>
                about
              </i>
              {" "}the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              axis (here{" "}
              <NoBreak>
                <Math>
                  $
                  a \approx 1.7
                  $
                </Math>
              </NoBreak>
              ):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 width="760px"
                 src="/images/svg_ch3_x0_y0_step3_alone.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              So the roots are at:{" "}
              <NoBreak>
                <Math>
                  $
                  x = x_0 \pm \sqrt&#123;y_0&#125;
                  $
                </Math>
              </NoBreak>
              .
              (Like we found them after the second step.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={15}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 16.
            </b>
            {" "}
            Use the results of the previous two exercises
            to find the value(s) of{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
            </NoBreak>
            {" "}such that 
            {" "}
            <NoBreak>
              <Math>
                $
                Ax^2 + Bx = 0
                $
              </Math>
            </NoBreak>
            {" "}for constants{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
            </NoBreak>
            {" "}such 
            that{" "}
            <NoBreak>
              <Math>
                $
                A \ne 0
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={15}>
            <VerticalChunk>
              Well,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              Ax^2 + Bx = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              obviously has solution{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0
                  $
                </Math>
              </NoBreak>
              {" "}to start
              with, so we{" "}
              <i>
                don't need
              </i>
              {" "}the previous 
              exercises for one of the roots at least—actually,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              Ax^2 + Bx = x(Ax + B)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              so the equation is equivalent to
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x(Ax + B) = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and so one of the roots is{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and the other root is the value of{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              such that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              Ax + B = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which is{" "}
              <NoBreak>
                <Math>
                  $
                  x = -B/A
                  $
                </Math>
                .
              </NoBreak>
              {" "}(In order for the product
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x(Ax + B)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              to be{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}you either need the first term to
              be{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}leading us to{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}or the second
              term to be{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}leading us to{" "}
              <NoBreak>
                <Math>
                  $
                  Ax + B = 0
                  $
                </Math>
                —the
              </NoBreak>
              {" "}
              product of two things is{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}if and only if
              one of the two things is{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              .)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              So the roots are{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  x = -B/A
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              To complete the problem{" "}
              <i>
                as we were asked
              </i>
              , 
              however, we will use the fact that{" "}
              <NoBreak>
                <Math>
                  $
                  y = Ax^2 + Bx
                  $
                </Math>
              </NoBreak>
              {" "}
              is obtained from{" "}
              <NoBreak>
                <Math>
                  $
                  y = x^2
                  $
                </Math>
              </NoBreak>
              {" "}by the following
              sequence of transformations (cf. Exercise 14):
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              1. vertical translation by{" "}
              <NoBreak>
                <Math>
                  $
                  -&#123;B^2 \over 4A^2&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              2. horizontal translation by{" "}
              <NoBreak>
                <Math>
                  $
                  -&#123;B \over 2A&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              3. vertical scaling by{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              (We put the vertical translation first.)
              By Exercise 15, the roots of{" "}
              <NoBreak>
                <Math>
                  $
                  y = Ax^2 + Bx
                  $
                </Math>
              </NoBreak>
              {" "}
              are thus at
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \tag&#123;A&#125;
              x = -&#123;B\over 2A&#125; \pm \sqrt&#123;B^2 \over 4A^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which looks a little different than our 
              previous result of{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  x = -B/A
                  $
                </Math>
              </NoBreak>
              {" "}
              until you realize that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \pm \sqrt&#123;B^2 \over 4A^2&#125; = \pm &#123;B \over 2A&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (because
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \left(&#123;B \over 2A&#125;\right)^&#123;\!2&#125; = &#123;B^2 \over 4A^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and even though{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;B\over 2A&#125;
                  $
                </Math>
              </NoBreak>
              {" "}could be 
              negative, the “
              <NoBreak>
                <Math>
                  $
                  \pm
                  $
                </Math>
                ”
              </NoBreak>
              {" "}on either side of 
              the equation means that the{" "}
              <i>
                set
              </i>
              {" "}of values
              on either side of the equation is the same),
              so that (A) becomes
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x = -&#123;B\over 2A&#125; \pm &#123;B \over 2A&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and, on the one hand,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              -&#123;B\over 2A&#125; + &#123;B \over 2A&#125; = 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              while, on the other hand,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              -&#123;B\over 2A&#125; - &#123;B \over 2A&#125; = -&#123;2B\over 2A&#125; = -&#123;B\over A&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              so here too we find that the roots are{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  x = -B/A
                  $
                </Math>
                .
              </NoBreak>
              {" "}(It must be the right answer!)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={16}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 17.
            </b>
            {" "}
            True or false (
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                g
                $
              </Math>
            </NoBreak>
            {" "}are functions):
          </VerticalChunk>
          <div
               class="spacer" />
          <Grid
               column_first={true}
               with_padding={false}
               place_items="start"
               center_on_overflow={true}
               sm_cutoff={520}
               sm_cols={1}
               cols={2}>
            <Item>
              i.{" "}
              <NoBreak>
                <Math>
                  $
                  f \circ g = (x \ra f(g(x)))
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </Item>
            <Item>
              ii.{" "}
              <NoBreak>
                <Math>
                  $
                  g \circ f = (x \ra f(g(x)))
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </Item>
            <Item>
              iii.{" "}
              <NoBreak>
                <Math>
                  $
                  f \circ g = (x \ra g(f(x)))
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </Item>
            <Item>
              iv.{" "}
              <NoBreak>
                <Math>
                  $
                  g \circ f = (x \ra g(f(x)))
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </Item>
          </Grid>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={16}>
            <VerticalChunk>
              The true statements are i, iv, because
              {" "}
              <NoBreak>
                <Math>
                  $
                  f \circ g
                  $
                </Math>
              </NoBreak>
              {" "}is the function that maps an 
              input{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  f(g(x))
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and symmetrically 
              for{" "}
              <NoBreak>
                <Math>
                  $
                  g \circ f
                  $
                </Math>
                .
              </NoBreak>
              {" "}{" "}
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={17}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 18.
            </b>
            {" "}
            If{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                g
                $
              </Math>
            </NoBreak>
            {" "}are functions then we define 
            (and not just us but people in general)
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f + g
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            to be
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            t \ra f(t) + g(t)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            (use ‘
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
              ’
            </NoBreak>
            {" "}if you like), 
            i.e., to be the function that applies{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}and
            {" "}
            <NoBreak>
              <Math>
                $
                g
                $
              </Math>
            </NoBreak>
            {" "}separately and then takes the sum,
            and we define{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            fg
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            to be
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            z \ra f(z)g(z)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            (use ‘
            <NoBreak>
              <Math>
                $
                t
                $
              </Math>
              ’
            </NoBreak>
            {" "}if you like, hehe),
            i.e., to be the function that applies{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}and 
            {" "}
            <NoBreak>
              <Math>
                $
                g
                $
              </Math>
            </NoBreak>
            {" "}separately and then takes the product.
            (These definitions are similar to how we define
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f \circ g
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            to be
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            u \ra f(g(u))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for the symbol “
            <NoBreak>
              <Math>
                $
                \circ
                $
              </Math>
              ”,
            </NoBreak>
            {" "}except that now we 
            are defining the{" "}
            <i>
              sum
            </i>
            {" "}and{" "}
            <i>
              product
            </i>
            {" "}of functions,
            instead of their{" "}
            <i>
              composition
            </i>
            , namely.)
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            Given these definitions, which of the following
            equalities hold, in general for all functions{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            ,
            {" "}
            <NoBreak>
              <Math>
                $
                g
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                h
                $
              </Math>
            </NoBreak>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f \circ (g + h) = (x \ra f(g(x)) + f(h(x)))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f \circ (g + h) = (x \ra f(g(x) + h(x)))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (g + h) \circ f = (x \ra h(f(x)) + g(f(x)))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (g + h) \circ f = (x \ra (g + h)(f(x)))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={17}>
            <VerticalChunk>
              The first equality is false because the 
              right-hand side is actually
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f \circ g) + (f \circ h)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              not{" "}
              <NoBreak>
                <Math>
                  $
                  f \circ (g + h)
                  $
                </Math>
                ;
              </NoBreak>
              {" "}the second equality is
              true; the third equality is true even though you
              would expect the right-hand side to be written{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x \ra g(f(x)) + h(f(x)))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              with “
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
                ”
              </NoBreak>
              {" "}and “
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
                ”
              </NoBreak>
              {" "}switched (but addition is
              commutative, so it doesn't matter); the fourth
              equality is true: it is the definition of “
              <NoBreak>
                <Math>
                  $
                  \circ
                  $
                </Math>
              </NoBreak>
              ”.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={18}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 19.
            </b>
            {" "}
            What sequence of geometric transformations 
            of length no more than 3 maps
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            y = x^2
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            onto
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            y = Ax^2 + Bx + C
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for constants{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                C
                $
              </Math>
            </NoBreak>
            {" "}such that{" "}
            <NoBreak>
              <Math>
                $
                A \ne 0
                $
              </Math>
            </NoBreak>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={18}>
            <VerticalChunk>
              Write
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              Ax^2 + Bx + C
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A\Big(x^2 + &#123;B \over A&#125;x + &#123;C\over A&#125;\Big)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and, similarly to Exercise 14, write
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x^2 + &#123;B \over A&#125;x
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              so that, altogether,{" "}
              <NoBreak>
                <Math>
                  $
                  Ax^2 + Bx + C
                  $
                </Math>
              </NoBreak>
              {" "}
              becomes
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125; + &#123;C\over A&#125;\right]
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              or{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 - 4AC\over 4A^2&#125;\right]
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by putting things on a common denominator.
              (We have endeavored to keep the minus sign 
              out front of the common denominator fraction 
              in order to maintain the most similarity with
              the term “
              <NoBreak>
                <Math>
                  $
                  -&#123;B^2\over 4A&#125;
                  $
                </Math>
                ”
              </NoBreak>
              {" "}of Exercise 14,
              that also has a minus sign out front.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              By direct analogy with Exercise 14, the three
              transformations are thus...
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              1. horizontal translation by{" "}
              <NoBreak>
                <Math>
                  $
                  -&#123;B \over 2A&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              2. vertical translation by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              3. vertical scaling by{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...or...
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              1. vertical translation by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              2. horizontal translation by{" "}
              <NoBreak>
                <Math>
                  $
                  -&#123;B \over 2A&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              3. vertical scaling by{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...if we put the vertical translation first.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={19}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 20.
            </b>
            {" "}
            What are the roots (i.e., solutions){" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
            </NoBreak>
            {" "}of
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            Ax^2 + Bx + C = 0
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for constants{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                C
                $
              </Math>
            </NoBreak>
            {" "}such that{" "}
            <NoBreak>
              <Math>
                $
                A \ne 0
                $
              </Math>
            </NoBreak>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={19}>
            <VerticalChunk>
              The curve
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              y = Ax^2 + Bx + C
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is obtained from the curve{" "}
              <NoBreak>
                <Math>
                  $
                  y = x^2
                  $
                </Math>
              </NoBreak>
              {" "}by the following sequence of 
              transformations (cf. Exercise 19):
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              1. vertical translation by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              2. horizontal translation by{" "}
              <NoBreak>
                <Math>
                  $
                  -&#123;B \over 2A&#125;
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              3. vertical scaling by{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <CentralDisplay>
              ~
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              On the one hand, if
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;B^2 - 4AC \over 4A^2&#125; &lt; 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              then
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              -&#123;B^2 - 4AC \over 4A^2&#125; &gt; 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and the vertical translation is{" "}
              <i>
                upward
              </i>
              , 
              the curve detaches from the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}axis never
              to see it again, and there are no roots!
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              On the other hand, if
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;B^2 - 4AC \over 4A^2&#125; \geq 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              then the roots are given by
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x = -&#123;B \over 2A&#125; \pm \sqrt&#123;B^2 - 4AC \over 4A^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by Exercise 15.{" "}
              <NoBreak>
                <Math>
                  $
                  \rightarrow
                  $
                </Math>
              </NoBreak>
              {" "}~The End~{" "}
              <NoBreak>
                <Math>
                  $
                  \leftarrow
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              In fact,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \pm\sqrt&#123;B^2 - 4AC \over 4A^2&#125; = \pm &#123;\sqrt&#123;B^2 - 4AC&#125; \over 2A&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (square both sides of the equation—in general,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \pm E = \pm F
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as one set of two values equalling another 
              set of two values, if and only if
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              |E| = |F|
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              or{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              E^2 = F^2
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              —so that's why we say “square both sides”),
              so the formula for the roots can also be written
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x = -&#123;B \over 2A&#125; \pm &#123;\sqrt&#123;B^2 - 4AC&#125; \over 2A&#125;
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
              x = &#123;&#123;-B \pm \sqrt&#123;B^2 - 4AC&#125;&#125; \over 2A&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as briefly flashed by, e.g., in Chapter 1.
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 2.
              </i>
              {" "}
              If
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;B^2 - 4AC \over 4A^2&#125; &lt; 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              then
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \sqrt&#123;B^2 - 4AC \over 4A^2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              does not exist, alerting you to the absence 
              of roots, if you try to use the first formula 
              we gave. Also
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;B^2 - 4AC \over 4A^2&#125; &lt; 0\iff B^2 - 4AC &lt; 0
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $
                  4A^2 &gt; 0
                  $
                </Math>
              </NoBreak>
              {" "}for all{" "}
              <NoBreak>
                <Math>
                  $
                  A \ne 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}
              so the second set of formulas would alert you
              to the absence of roots in that case, as well.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={20}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 21.
            </b>
            {" "}
            Summon your senses of extrapolation{" "}
            <i>
              &
            </i>
            {" "}
            imagination to evaluate this expression:
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (f \ra x \ra h \ra &#123;f(x+h) - f(x)\over h&#125;)(x \ra x^2)(5)(0.1)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            (Hint: The answer is a specific real number.)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               counter="SolutionNoteCounter"
               solution_number={20}>
            <VerticalChunk>
              ...in an expression such as...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x \ra x^3)(6)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...we pair the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}with{" "}
              <NoBreak>
                <Math>
                  $
                  6
                  $
                </Math>
              </NoBreak>
              ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_connection_x_6.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and{" "}
              <NoBreak>
                <Math>
                  $
                  6
                  $
                </Math>
              </NoBreak>
              {" "}becomes the value to use for{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              in “
              <NoBreak>
                <Math>
                  $
                  x^3
                  $
                </Math>
              </NoBreak>
              ”:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_connection_x_6_in_computation.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...; in an expression such as...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x \ra y \ra x^3y)(6)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...we also pair the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}with{" "}
              <NoBreak>
                <Math>
                  $
                  6
                  $
                </Math>
              </NoBreak>
              ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_connection_x_6_again.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and{" "}
              <NoBreak>
                <Math>
                  $
                  6
                  $
                </Math>
              </NoBreak>
              {" "}becomes the value to use for{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              in “
              <NoBreak>
                <Math>
                  $
                  y \ra x^3y
                  $
                </Math>
              </NoBreak>
              ”:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_connection_x_6_again_in_computation.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...(in this case the result is not a number,
              but a function—a function is a mathematical 
              object like another, after all); in an 
              expression such as...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x \ra y \ra x^3y)(6)(8)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...we pair the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}with{" "}
              <NoBreak>
                <Math>
                  $
                  6
                  $
                </Math>
              </NoBreak>
              {" "}and the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}with{" "}
              <NoBreak>
                <Math>
                  $
                  8
                  $
                </Math>
              </NoBreak>
              ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_connection_x_y_6_8.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and{" "}
              <NoBreak>
                <Math>
                  $
                  6
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  8
                  $
                </Math>
              </NoBreak>
              {" "}become respectively the 
              values to use for{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}in “
              <NoBreak>
                <Math>
                  $
                  x^3y
                  $
                </Math>
              </NoBreak>
              ”:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_connection_x_y_6_8_in_computation.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...; now in an expression such as...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f \ra x \ra h \ra &#123;f(x+h) - f(x)\over h&#125;)(x \ra x^2)(5)(0.1)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...we pair the{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}with{" "}
              <NoBreak>
                <Math>
                  $
                  x \ra x^2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}with{" "}
              <NoBreak>
                <Math>
                  $
                  5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and the{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}with{" "}
              <NoBreak>
                <Math>
                  $
                  0.1
                  $
                </Math>
              </NoBreak>
              ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_connection_f_x_h.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and{" "}
              <NoBreak>
                <Math>
                  $
                  x \ra x^2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  5
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  0.1
                  $
                </Math>
              </NoBreak>
              {" "}become
              respectively the values to use for{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}in “
              <NoBreak>
                <Math>
                  $
                  &#123;f(x + h) - f(x)\over h&#125;
                  $
                </Math>
              </NoBreak>
              ”:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch3_connection_f_x_h_in_computation.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...; evaluating...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;(x \ra x^2)(5 + 0.1) - (x \ra x^2)(5) \over 0.1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...we...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;(x \ra x^2)(5.1) - (x \ra x^2)(5) \over 0.1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...get...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;5.1^2 - 5^2 \over 0.1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...this...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;26.01 - 25 \over 0.1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...
              <i>
                thiiis
              </i>
              ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;1.01 \over 0.1&#125; = 1.01 \times 10 = 10.1
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...result! (The answer is: ten point one.)
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
    </Chapter>
  );
};

export default Article;