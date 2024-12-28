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

const Chapter3 = (props: any) => {
  return (
    <Container>
      <Nav />
      <ArticleTitle
        label={`Chapter 3: ` + props.title}
        on_mobile_label={`Chapter 3: ` + props.mobile_title}
      />
      {props.children}
    </Container>
  );
};

const Article = () => {
  return (
    <>
      <Chapter3 title="Functions">
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Syntax.`}</b>
            {String.raw`
A`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`function`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`is a “rule” for transforming inputs (usually
numbers) into outputs (usually numbers as well).
One can think of a function as a box with an
“input tube” and an “output tube”:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch3_f_box.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`An input goes in via the input tube, is
processed according to the function's rule,
and the result comes out the other side.
(Metaphorically speaking.)`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`In the above picture, the name of the function
is “`}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw`”.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`Notation-wise, one writes`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{f(x)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(which is read “`}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`”,`}
            </NoBreak>
            {String.raw` and that's 
important) for the result of passing an input
`}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` to a function `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` For example, if the rule
according to which `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` processes inputs is`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`the output is the square of the input`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw`then`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{f(2) = 4}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[“`}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
2
$`}</Math>
            </NoBreak>
            {String.raw` equals `}
            <NoBreak>
              <Math>{String.raw`$
4
$`}</Math>
              {String.raw`”]`}
            </NoBreak>
            {String.raw` because `}
            <NoBreak>
              <Math>{String.raw`$
2^2 = 4
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{f(3) = 9}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[“`}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
3
$`}</Math>
            </NoBreak>
            {String.raw` equals `}
            <NoBreak>
              <Math>{String.raw`$
9
$`}</Math>
              {String.raw`”]`}
            </NoBreak>
            {String.raw` because `}
            <NoBreak>
              <Math>{String.raw`$
3^2 = 9
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{ f(0.1) = 0.01}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[...] because `}
            <NoBreak>
              <Math>{String.raw`$
0.1^2 = 0.01
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and so on. Also,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{f(x) = x^2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[“`}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` equals `}
            <NoBreak>
              <Math>{String.raw`$
x^2
$`}</Math>
              {String.raw`”]`}
            </NoBreak>
            {String.raw` more generally, which
is actually the`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`definition`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`of `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`!!`}
            </NoBreak>
            {String.raw` (Stated algebraically.)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Lambda functions.`}</b>
            {String.raw`
A`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`lambda function`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`is not a type of function, but a type of
notation  that enables one to define a function 
without giving it a name, such as “`}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`”.`}
            </NoBreak>
            {String.raw` In fact 
there are two different mainstream notations, in 
this instance. One notation writes`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\lambda{}x.x^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`to mean “the function that maps `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` to `}
            <NoBreak>
              <Math>{String.raw`$
x^2
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` 
(and by the way,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\lambda{}z.z^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is `}
            <i>{String.raw`the same`}</i>
            {String.raw` function, because 
it specifies the same in-out mapping—a thing 
goes to its square—also by the way, the symbol`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Huge \lambda
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is the Greek letter “lambda”, giving its name 
to the topic) while the other notation writes `}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x \rightarrow x^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`to mean the same thing.`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw`Note that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(x \ra x^2)(0.1)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`means “the function that maps each number to its
square, of `}
            <NoBreak>
              <Math>{String.raw`$
0.1
$`}</Math>
              {String.raw`”.`}
            </NoBreak>
            {String.raw` So...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(x \ra x^2)(0.1) = 0.01
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`...the same as an equation of the form 
“`}
            <NoBreak>
              <Math>{String.raw`$
f(\dots) = \dots
$`}</Math>
            </NoBreak>
            {String.raw`”.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`For more practice:`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(\lambda x.x^3)(10) = 1000
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(\lambda u.u^5)(10) = 100000
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(v \ra v^2)(10) = 100
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(z \ra z^3)(10) + (t \ra t^2)(5) = 1025.
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`(Etc.) (Indeed, to emphasize again, the variable 
denoting the input does not matter: it is just a 
placeholder, and you obtain the same output, and 
the same _function_, no matter what symbol 
you choose.*) (\*As long as you don't collide 
with other existing variable names.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Definition by cases.`}</b>
            {String.raw`
Sometimes a function is defined by an expression 
of the form`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x \ra \begin{cases}
\ldots & \te{if $\ldots$}\\
\ldots & \te{if $\ldots$}\\
\vdots & \vdots\\
\ldots & \te{$\ldots$}
\end{cases}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`where the right-hand side is a list of mutually 
exclusive cases to consider according to the 
value of `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Equivalently,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
g(x) = \begin{cases}
\ldots & \te{if $\ldots$}\\
\ldots & \te{if $\ldots$}\\
\vdots & \vdots\\
\ldots & \te{$\ldots$}
\end{cases}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`in the case where the function has a name, such
as “`}
            <NoBreak>
              <Math>{String.raw`$
g
$`}</Math>
            </NoBreak>
            {String.raw`”.`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 1.`}</b>
              {String.raw`
If VX-11/78A (don't mind the weird name, chosen
at random) is the function defined by`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\te{VX-11/78A}(x) = \begin{cases} 
3.5 & \te{if $x = 0$},\\
2.5\up{1.1} & \te{if $x = 1$},\\
\te{undefined}\up{1.1} & \te{if $x \ne 0, 1$}
\end{cases}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`then`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\te{VX-11/78A}(0) = 3.5,
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`and`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\te{VX-11/78A}(1) = 2.5,
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`aaand... and these are the only two values of 
`}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
              </NoBreak>
              {String.raw` for which VX-11/78A`}
              <NoBreak>
                <Math>{String.raw`$
(x)
$`}</Math>
              </NoBreak>
              {String.raw` is defined, as 
specified.`}
            </VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`On arbitrariness.`}</b>
            {String.raw`
While a function such as VX-11/78A might seem 
completely arbitrary, one lesson from the former 
example is that functions `}
            <i>{String.raw`can`}</i>
            {String.raw` be 
completely arbitrary! In fact, there are only 
two “ground rules” to respect in order for 
something to qualify as a function: *(i)* to 
output`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`one`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`output per (accepted) input, and *(ii)* to return 
the`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`same`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`output each time on the same input. (Sometimes,
functions are said to be`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`deterministic`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`because of *(ii)*.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Graphs.`}</b>
            {String.raw`
The`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`graph`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`of a function is a visualization device. A point
on the graph corresponds to an input for which
the function is defined. The `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`-coordinate`}
            </NoBreak>
            {String.raw` of 
the point is the value of the input, while the 
`}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
              {String.raw`-coordinate`}
            </NoBreak>
            {String.raw` is the value of the corresponding 
output.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`For example, here is a graph of VX-11/78A:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch3_vx1178A.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`The graph has only two points, because VX-78/11A 
is defined at only two values. One point is...`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch3_vx1178A_@0_with_cors.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`...`}
            <NoBreak>
              <Math>{String.raw`$
(0, 3.5)
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` because VX-78/11A maps `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` to 
`}
            <NoBreak>
              <Math>{String.raw`$
3.5
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` while the other point is...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch3_vx1178A_@1_with_cors.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`...`}
            <NoBreak>
              <Math>{String.raw`$
(1, 2.5)
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` because VX-78/11A maps `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` to `}
            <NoBreak>
              <Math>{String.raw`$
2.5
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
Here is a graph of `}
              <NoBreak>
                <Math>{String.raw`$
x \ra x^2
$`}</Math>
              </NoBreak>
              {String.raw` on the interval
`}
              <NoBreak>
                <Math>{String.raw`$
[-1, 1]
$`}</Math>
              </NoBreak>
              {String.raw` (meaning: going from `}
              <NoBreak>
                <Math>{String.raw`$
x = -1
$`}</Math>
              </NoBreak>
              {String.raw` to 
`}
              <NoBreak>
                <Math>{String.raw`$
x = 1
$`}</Math>
              </NoBreak>
              {String.raw`):`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_x_squared_1_worked.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`Among all the points on this graph that we 
could discuss, let us name, say, the point 
`}
              <NoBreak>
                <Math>{String.raw`$
(0.75, 0.5625)
$`}</Math>
              </NoBreak>
              {String.raw`...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_x_squared_2_worked.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`...which finds itself on the graph, namely, 
because the square of `}
              <NoBreak>
                <Math>{String.raw`$
0.75
$`}</Math>
              </NoBreak>
              {String.raw` is 
`}
              <NoBreak>
                <Math>{String.raw`$
0.5625 = 9/16
$`}</Math>
              </NoBreak>
              {String.raw`.`}
              <ImageLeft
                offset_y="0em"
                line={-1.0}
                src="/images/svg_ch3_0.5625_cloud.svg"></ImageLeft>
            </VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Domains.`}</b>
            {String.raw`
The `}
            <i>{String.raw`domain`}</i>
            {String.raw` of a function `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw`—written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\dom\, f
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`—is the set of inputs `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` for which `}
            <NoBreak>
              <Math>{String.raw`$
f(x)
$`}</Math>
            </NoBreak>
            {String.raw` is
defined.`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 3.`}</b>
              {String.raw`
We have`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\dom\,\rt{0.1} \te{VX-11/78A} = \left\{ 0\rt{0.1}, 1 \right\}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`because VX-11/78A`}
              <NoBreak>
                <Math>{String.raw`$
(x)
$`}</Math>
              </NoBreak>
              {String.raw` is only defined at `}
              <NoBreak>
                <Math>{String.raw`$
x = 0
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` 
`}
              <NoBreak>
                <Math>{String.raw`$
1
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 4.`}</b>
              {String.raw`
If DM-1700 (another weirdly named function) is 
defined by`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\te{DM-1700}(x) = 
\begin{cases} 
0             & \te{if $x \leq 0$ or $x \geq 1$},\\
1 - x\up{1.1} & \te{if $0 < x < 1$}
\end{cases}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`then`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\dom\,\rt{0.1} \te{DM-1700} = \rr
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`because `}
              <NoBreak>
                <Math>{String.raw`$
\te{DM-1700}(x)
$`}</Math>
              </NoBreak>
              {String.raw` is defined for all
`}
              <NoBreak>
                <Math>{String.raw`$
x \in \rr
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 5.`}</b>
              {String.raw`
If `}
              <NoBreak>
                <Math>{String.raw`$
g : \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw` (we are going to explain 
this notation imminently) is the function given 
by`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
g(x) = \sqrt{x - 1^{\color{white}*\!\!}}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`then`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\begin{align}
\dom\, g &\,=\, [1, \infty)
\end{align}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`because the square root of a number is defined 
if and only if that number is `}
              <i>{String.raw`nonnegative`}</i>
              {String.raw` 
(i.e., we need `}
              <NoBreak>
                <Math>{String.raw`$
x - 1 \geq 0
$`}</Math>
              </NoBreak>
              {String.raw` in order for `}
              <NoBreak>
                <Math>{String.raw`$
g(x)
$`}</Math>
              </NoBreak>
              {String.raw` 
to be defined, i.e., we need `}
              <NoBreak>
                <Math>{String.raw`$
x \geq 1
$`}</Math>
              </NoBreak>
              {String.raw`).`}
            </VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 6.`}</b>
              {String.raw`
If `}
              <NoBreak>
                <Math>{String.raw`$
h : \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw` is defined by`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
h(x) = \frac{1}{x+1}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`then`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\begin{align}
\dom\,h \,=\, \rr\back\{-1\} =\, (-\infty,-1) \cup (-1,\infty)
\end{align}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`because `}
              <NoBreak>
                <Math>{String.raw`$
1/(x+1)
$`}</Math>
              </NoBreak>
              {String.raw` is well-defined if and only if
division by 0 is avoided, i.e., if and only if 
`}
              <NoBreak>
                <Math>{String.raw`$
x \ne -1
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`“From/To” Notation.`}</b>
            {String.raw`
The notation`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f : \rr \ra \rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`means that `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` is a function`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>
            {String.raw`from `}
            <NoBreak>
              <Math>{String.raw`$
\rr
$`}</Math>
            </NoBreak>
            {String.raw` to `}
            <NoBreak>
              <Math>{String.raw`$
\rr
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`or, which is to say, that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\dom f \subseteq \rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[translation: `}
            <i>
              {String.raw`the domain of `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` is a subset of 
the set of real numbers`}
            </i>
            {String.raw`] and that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\{f(x) : x \in \dom f\} \subseteq \rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`[translation: `}
            <i>
              {String.raw`the set of values output by `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` 
is a subset of the set of real numbers`}
            </i>
            {String.raw`].`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`Generalizing,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f : A \ra B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`means that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\dom f \subseteq A
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(i.e., that `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` only accepts values from `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
              {String.raw`)`}
            </NoBreak>
            {String.raw` and 
that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\{f(x) : x \in \dom f\} \subseteq B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(i.e., that `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` only outputs values from `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
              {String.raw`),`}
            </NoBreak>
            {String.raw` 
following the pattern above. `}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`The Vertical Line Test.`}</b>
            {String.raw`
As it turns out, the term “graph” just means 
“set of points in the plane”. So a `}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`function graph`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`(as described above) is just one particular 
kind of “graph” among other things that are 
also called “graphs”, but that are not 
function graphs.`}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`The so-called`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`vertical line test`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`observes that a graph [`}
            <NoBreak>
              <Math>{String.raw`$
=
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <i>{String.raw`set of points 
in the plane`}</i>
            {String.raw`] is a function graph if and 
only if every `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`-value`}
            </NoBreak>
            {String.raw` (a.k.a., input) 
corresponds to at most one `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
              {String.raw`-value`}
            </NoBreak>
            {String.raw` (a.k.a., 
output). In other words, every vertical line 
should intersect the graph at most once.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`For example, this particular graph...`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch3_wiggle_graph.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is a function graph (or locally at least, from
what we can see), because every vertical line 
intersects the graph at most once, but this 
graph...`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch3_circle.svg"></Image>
          <ImageRight
            use_squiggle_on_mobile={false}
            src="/images/svg_ch3_crossing_cloud_circle.svg"></ImageRight>
          <VerticalChunk>{String.raw`...is not the graph of any function, because 
some vertical lines intersect the graph more 
than once.`}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`(Oops. To backtrack and quickly clarify a small 
matter, an empty circle at the end of a segment, 
in the vein of the previous figure...`}</VerticalChunk>
          <div class="spacer"></div>
          <Image
            class="pt-4 mb-3"
            src="/images/svg_ch3_empty_circle.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`...means that the point in question is `}
            <i>{String.raw`excluded`}</i>
            {String.raw` 
from the graph. A filled circle, by opposition, 
means that the point is included!)`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 7.`}</b>
              {String.raw`
This `}
              <i>{String.raw`upper semicircle`}</i>
              {String.raw` of unit radius...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_semicircle.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...passes the vertical line test, and, hence, 
defines a function.`}</VerticalChunk>
          </Example>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 8.`}</b>
              {String.raw`
This graph defines a function...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_factory_function.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...because it passes the vertical line test, 
while this graph does not define a function...`}</VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_factory_nonfunction.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`...because it does `}
              <i>{String.raw`not`}</i>
              {String.raw` pass the vertical 
line test!`}
            </VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`A Famous Discontinuity.`}</b>
            {String.raw`
As already seen, functions can have
`}
            <i>{String.raw`discontinuities`}</i>
            {String.raw`: a place where the function 
experiences a sudden “jump” in value.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`For a famous example of a “naturally” occurring 
discontinuity (that we feel compelled to 
mention, for some reason) we need look no 
further than the function`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large x \ra 0^x
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`as it so happens that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
0^x = 
\begin{cases} 0 & \te{if } x > 0\\
1 & \te{if } x = 0\\
\te{undefined} & \te{if }x &lt; 0 \end{cases}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which implies a discontinuity in the graph of
`}
            <NoBreak>
              <Math>{String.raw`$
y = 0^x
$`}</Math>
            </NoBreak>
            {String.raw` at `}
            <NoBreak>
              <Math>{String.raw`$
x = 0
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` as pictured here:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch3_zero_to_the_x.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`(Pretty cool, no?)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>
              {String.raw`Distinguishing “`}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` and “`}
              <NoBreak>
                <Math>{String.raw`$
f(x)
$`}</Math>
              </NoBreak>
              {String.raw`”.`}
            </b>
            {String.raw` 
The difference between`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{\te{VX-11/78A}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{\te{VX-11/78A}(x)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is that the former is a`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`function`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`while the latter is a`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`value.`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`(Well, provided `}
            <NoBreak>
              <Math>{String.raw`$
x \in \{0, 1\}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` to make it 
well-defined at all.) Likewise, if `}
            <NoBreak>
              <Math>{String.raw`$
f : \rr \ra \rr
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` 
the difference between `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and `}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f(x)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is that the former is a`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`function`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`while the latter is a`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`value.`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`Amusingly, though, if we add “`}
            <NoBreak>
              <Math>{String.raw`$
x \ra
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` in front 
of “`}
            <NoBreak>
              <Math>{String.raw`$
f(x)
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` then we are back to considering a `}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`function`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`and which is namely the function whose rule is: 
apply `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` In fact,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f = (x \ra f(x))
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`where the above is `}
            <i>{String.raw`an equality between functions`}</i>
            {String.raw`. 
(You cannot use this equality to`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`define`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw``}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` because that would lead to a circular 
definition. But that doesn't make the equality 
any less true. And btw, you can go “one layer 
deeper”:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f = (x \ra f(x)) = (x \ra (t \ra f(t))(x))
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`...where we use the fact that `}
            <NoBreak>
              <Math>{String.raw`$
f = (t \ra f(t))
$`}</Math>
            </NoBreak>
            {String.raw` 
in the second equality. You could keep going, 
replacing each time “`}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` by a self-referential 
expression, but the process is not intrinsically 
useful.)`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>
              {String.raw`Distinguishing “`}
              <NoBreak>
                <Math>{String.raw`$
x^3
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` and “`}
              <NoBreak>
                <Math>{String.raw`$
x \ra x^3
$`}</Math>
              </NoBreak>
              {String.raw`”.`}
            </b>
            {String.raw`
Technically,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x^3
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is a `}
            <i>{String.raw`value`}</i>
            {String.raw` (not a function) and the way 
logicians think of it, philosophically speaking, 
is like so: at inception, every symbol has 
some default value attached, absent any other 
context.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`By contrast,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x \ra x^3
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is clearly a _function_, not a `}
            <i>{String.raw`value`}</i>
            {String.raw`. 
So “`}
            <NoBreak>
              <Math>{String.raw`$
x^3
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` and “`}
            <NoBreak>
              <Math>{String.raw`$
x \ra x^3
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` are very (VERY) 
different, qualitatively speaking.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`But including the arrow everywhere is 
impractical and even pedantic, so, in the end,
you might see us refer to an expression such as, 
e.g.,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x^3 + x^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`as a “function”, arrow or no arrow. `}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Polynomials.`}</b>
            {String.raw`
A function `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` of the form`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f(x) = a_kx^k + a_{k-1}x^{k-1} + \dots + a_2x^2 + a_1x + a_0
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is called a `}
            <i>{String.raw`polynomial`}</i>
            {String.raw`. Here`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
a_0,\,a_1,\, \ldots,\, a_k \in \rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`are arbitrary constants, also known as the 
`}
            <i>{String.raw`coefficients`}</i>
            {String.raw` of the polynomial. The `}
            <i>{String.raw`degree`}</i>
            {String.raw` 
of the polynomial is `}
            <NoBreak>
              <Math>{String.raw`$
k
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` if `}
            <NoBreak>
              <Math>{String.raw`$
a_k \ne 0
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` 
(Otherwise, work your way down until you find
a nonzero coefficient—if there are none, because 
the polynomial is just the constant `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` then 
the degree is `}
            <i>{String.raw`minus infinity`}</i>
            {String.raw`.) (We're not 
kidding.)`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`For example,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
2x + \sqrt{2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is a polynomial of degree 1, and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x^2 - 10
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is a polynomial of degree 2, and`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x^{100} + x^{99} + x^{98} + \dots + x^4 + x^3 + x^2 + x + 1
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is a polynomial of degree 100.`}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`Polynomials of low degree have their own 
special names, as inventoried in the following 
table:`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\begin{array}{c|c|c}
\,\,\,\,\te{degree}\,\,\,\, & \te{name} & \,\,\,\,\te{example}\,\,\,\,\Rule{0pt}{0.8em}{0.5em} \\ \hline
-\infty & \te{zero} & 0\Rule{0pt}{1.1em}{0.0em}\\
\te{0} & \te{constant} & 1 + \sqrt{5^{\color{white}*\!\!\!}}\\
\te{1} & \te{affine} & 10x - 1\\
\te{2} & \,\,\,\,\te{quadratic}\,\,\,\, & x^2 - 1\\
\te{3} & \te{cubic} & x^3 - 1\\
\te{4} & \te{quartic} & 1 - x^4\\
\te{5} & \te{quintic} & x^5
\end{array}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`There is some confusion about the term`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`affine`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`for which the term`}</VerticalChunk>
          <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
          <CentralItalicDisplay>{String.raw`linear`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{String.raw`is sometimes substituted. But if we say 
“linear” we mean a function of the form `}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x \ra a_1x
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for a constant `}
            <NoBreak>
              <Math>{String.raw`$
a_1 \in \rr
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` This is more 
restricted than an affine function, because
there is no constant `}
            <NoBreak>
              <Math>{String.raw`$
a_0
$`}</Math>
            </NoBreak>
            {String.raw`!`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch3_affine_linear_cloud.svg"></Image>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Quadratic, linear, and constant terms.`}</b>
            {String.raw`
To finish up on polynomials: the terms of degree
`}
            <NoBreak>
              <Math>{String.raw`$
2
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` are called the `}
            <i>{String.raw`quadratic_, 
`}</i>
            {String.raw`linear_, and `}
            <i>{String.raw`constant`}</i>
            {String.raw` terms of the 
polynomial, respectively. If you see`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
a_7x^7 + a_6x^6 + a_5x^5 + a_4x^4 + a_3x^3 - a_2x^2 + a_1x + a_0
$$`}
            <ImageRight src="/images/svg_ch3_quadratic_linear_constant_cloud.svg"></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`then the quadratic term is `}
            <NoBreak>
              <Math>{String.raw`$
-a_2x^2
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` not 
`}
            <NoBreak>
              <Math>{String.raw`$
a_2x^2
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` fyi.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`Note that the linear term can also be viewed as
the “`}
            <NoBreak>
              <Math>{String.raw`$
x^1
$`}</Math>
            </NoBreak>
            {String.raw` term” while the constant term can
also be viewed as the “`}
            <NoBreak>
              <Math>{String.raw`$
x^0
$`}</Math>
            </NoBreak>
            {String.raw` term”; because`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
x^1 = x
$$`}
            <ImageRight src="/images/svg_ch3_a1_x1_cloud.svg"></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for all `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
x^0 = 1
$$`}
            <ImageRight src="/images/svg_ch3_a0_x0_cloud.svg"></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for all `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` (even `}
            <NoBreak>
              <Math>{String.raw`$
x = 0
$`}</Math>
              {String.raw`),`}
            </NoBreak>
            {String.raw` namely.`}
          </VerticalChunk>
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
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
          ]}>
          <Exercise exercise_number={0}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 1.`}</b>
              {String.raw`
How can you define the absolute value 
function using “definition by cases”?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={0}>
              <VerticalChunk>{String.raw`The absolute value function is `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x \ra \begin{cases} x & \te{if $x \geq 0$,}\\ -x\!\!\up{1.2} & \te{if $x < 0$}\end{cases}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because `}
                <NoBreak>
                  <Math>{String.raw`$
-(-1) = 1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
-(-5) = 5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` etc.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={1}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 2.`}</b>
              {String.raw`
How can you define the absolute value 
function using an “ordinary” algebraic formula?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={1}>
              <VerticalChunk>{String.raw`We have`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
|x| = \sqrt{x^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because `}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt{(-1)^2} = 1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
\sqrt{(-5)^2} = 5
$`}</Math>
                </NoBreak>
                {String.raw`,
etc. `}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
This definition is less ad-hoc than might seem, 
being a 1-dimensional form of the Pythagorean 
theorem.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={2}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 3.`}</b>
              {String.raw`
Evaluate:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Grid
              column_first={true}
              with_padding={false}
              place_items="start"
              center_on_overflow={true}
              sm_cutoff={460}
              sm_cols={1}
              cols={2}>
              <Item>
                {String.raw`i. `}
                <NoBreak>
                  <Math>{String.raw`$
(\lambda u.u^3)(0.5)
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`ii. `}
                <NoBreak>
                  <Math>{String.raw`$
(u \ra u^2)(x + 1)
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`iii. `}
                <NoBreak>
                  <Math>{String.raw`$
(\lambda t.t - 1)(100) \cdot (\lambda t.t + 1)(100)
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`iv. `}
                <NoBreak>
                  <Math>{String.raw`$
(u \ra u^2)(a + b)
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
            </Grid>
            <div class="spacer"></div>
            <Solution solution_number={2}>
              <VerticalChunk>{String.raw`The answers are:`}</VerticalChunk>
              <div class="spacer"></div>
              <Grid
                column_first={true}
                with_padding={false}
                place_items="start"
                center_on_overflow={true}
                sm_cutoff={460}
                sm_cols={1}
                cols={2}>
                <Item>
                  {String.raw`i. `}
                  <NoBreak>
                    <Math>{String.raw`$
0.5^3 = 0.125
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw`ii. `}
                  <NoBreak>
                    <Math>{String.raw`$
(x + 1)^2 = x^2 + 2x + 1
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw`iii. `}
                  <NoBreak>
                    <Math>{String.raw`$
(100 - 1) \cdot (100 + 1) = 9999
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
                <Item>
                  {String.raw`iv. `}
                  <NoBreak>
                    <Math>{String.raw`$
(a + b)^2 = a^2 + 2ab + b^2
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </Item>
              </Grid>
            </Solution>
          </Exercise>
          <Exercise exercise_number={3}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 4.`}</b>
              {String.raw`
The `}
              <i>{String.raw`floor`}</i>
              {String.raw` of a real number `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` written`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\lfloor x \rfloor,
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`is the greatest integer less than or equal 
to `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` (Start at `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
              </NoBreak>
              {String.raw` and travel left on the 
number line until you meet an integer; but if
`}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
              </NoBreak>
              {String.raw` is already an integer, stay there; the 
place you land is `}
              <NoBreak>
                <Math>{String.raw`$
\lfloor x \rfloor
$`}</Math>
              </NoBreak>
              {String.raw`.)`}
            </VerticalChunk>
            <VerticalChunk indent={true}>
              {String.raw`Sketch the graph `}
              <NoBreak>
                <Math>{String.raw`$
y = \floor{x}
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
            <VerticalChunk indent={true}>
              {String.raw`Secondly, find a formula for a function whose
graph looks like this, where you are allowed
to use “`}
              <NoBreak>
                <Math>{String.raw`$
\floor{x}
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` in your formula:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_factory_roof_graph.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={3}>
              <VerticalChunk>
                {String.raw`As `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` grows, so does `}
                <NoBreak>
                  <Math>{String.raw`$
\floor{x}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` but
`}
                <NoBreak>
                  <Math>{String.raw`$
\floor{x}
$`}</Math>
                </NoBreak>
                {String.raw` only “levels up” each time `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`
reaches a new integer, and “flatlines”
otherwise; this gives rise to the following
staircase-shaped graph:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_floor_graph.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(For example, `}
                <NoBreak>
                  <Math>{String.raw`$
\floor{1} = 1
$`}</Math>
                </NoBreak>
                {String.raw` because the 
greatest integer less than or equal to `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw` 
is `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
\floor{-0.5} = -1
$`}</Math>
                </NoBreak>
                {String.raw` because the greatest
integer less than or equal to `}
                <NoBreak>
                  <Math>{String.raw`$
-0.5
$`}</Math>
                </NoBreak>
                {String.raw` is `}
                <NoBreak>
                  <Math>{String.raw`$
-1
$`}</Math>
                </NoBreak>
                {String.raw`,
and so on.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`For the second part note that the following 
two displacements, excerpted from the “factory 
roof” graph in the statement, are equal:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_factory_roof_graph_with_displacement_arrows_worked.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The red dot to the left of `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` has `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate
`}
                <NoBreak>
                  <Math>{String.raw`$
\floor{x}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` so the horizontal displacement is `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x - \floor{x}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`so the equation of the graph is `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
y = x - \floor{x}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` `}
                <i>{String.raw`is`}</i>
                {String.raw` the 
vertical displacement, given that the vertical 
displacement starts at `}
                <NoBreak>
                  <Math>{String.raw`$
y = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and because
the vertical and horizontal displacements are
equal.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={4}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 5.`}</b>
              {String.raw`
Find the formula for a function whose graph 
looks like this, again using the floor function
‘`}
              <NoBreak>
                <Math>{String.raw`$
\lfloor \cdot \rfloor
$`}</Math>
                {String.raw`’`}
              </NoBreak>
              {String.raw` as a building block:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_factory_roof_stretched_x2_graph_worked.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={4}>
              <VerticalChunk>
                {String.raw`We would like to argue the correctness of 
the following two-step process (divide the 
input by `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` apply the function from Exercise 
4):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_factory_roof_stretched_and_compressed.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Indeed, the two graphs featured above differ
only by a horizontal dilation; dividing the 
input by `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw` “undoes” the dilation, at which 
point it suffices to apply the function pictured
in the second graph; having declared our method 
correct, the answer is thus...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{x/2 - \lfloor x/2 \rfloor}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...as obtained by “sticking” `}
                <NoBreak>
                  <Math>{String.raw`$
x/2
$`}</Math>
                </NoBreak>
                {String.raw` (the halved 
input) in place of “`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` in “`}
                <NoBreak>
                  <Math>{String.raw`$
\,x - \lfloor x \rfloor
$`}</Math>
                </NoBreak>
                {String.raw`”,
the formula for the function from Exercise 4.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
One can check the answer by typing “x/2 - floor(x/2)”
in DESMOS. Viz:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="1400px"
                src="/images/png_ch3_desmos_composition_0_c.png"></Image>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
Alternately, enter “f(x) = x - floor(x)” and
then “f(x/2)”, viz:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="1400px"
                src="/images/png_ch3_desmos_composition_1_c.png"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Or we can be even fancier:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="1400px"
                src="/images/png_ch3_desmos_composition_2_b.png"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`What you see above (the graph in orange) is 
the so-called `}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`composition`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw` of the functions 
`}
                <NoBreak>
                  <Math>{String.raw`$
\f
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                  {String.raw`;`}
                </NoBreak>
                {String.raw` in more detail, if we switch the 
“input tube” and “output tube” sides of a function...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_f_box_inverted.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...(compared to the drawing at the top of the
chapter), then the composition of `}
                <NoBreak>
                  <Math>{String.raw`$
\f
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                </NoBreak>
                {String.raw`,
written`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\f \circ g}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and read`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`“`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` of `}
                <NoBreak>
                  <Math>{String.raw`$
\hlfbk{}g
$`}</Math>
                </NoBreak>
                {String.raw`”`}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`(mathematicians have to invent a notation for 
everything—that little circle “`}
                <NoBreak>
                  <Math>{String.raw`$
\circ
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is called 
the _composition operator_,
by the way) is the function that you get by
gluing `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                  {String.raw`'s`}
                </NoBreak>
                {String.raw` box to the right of `}
                <NoBreak>
                  <Math>{String.raw`$
\f
$`}</Math>
                  {String.raw`'s`}
                </NoBreak>
                {String.raw` box, 
like so:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_f_box_g_box.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In other words, `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                  {String.raw`'s`}
                </NoBreak>
                {String.raw` output is passed on to `}
                <NoBreak>
                  <Math>{String.raw`$
\f
$`}</Math>
                </NoBreak>
                {String.raw` 
for further processing. (A certain movie called
“The Human Centipede” comes to mind.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`(To be perfectly clear,`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_f_circle_g_and_f_box_g_box.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g
$`}</Math>
                </NoBreak>
                {String.raw` is a _function_, defined as the
above assemblage of “`}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                </NoBreak>
                {String.raw` first, `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` second”.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 3.`}</i>
                {String.raw`
For a formal definition of “`}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g
$`}</Math>
                </NoBreak>
                {String.raw`”—something
not based on pictures—one need only specify what
`}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g
$`}</Math>
                </NoBreak>
                {String.raw` does to inputs. Specifically:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\,{(f \circ g)(x) = f(g(x))}.
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(So that equation is a formal definition.) One can
also clarify that`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\dom f \circ g = \{x\, \in\, \dom g:\, g(x)\, \in\, \dom f\}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which is to say that the domain of `}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g
$`}</Math>
                </NoBreak>
                {String.raw`
consists of all `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` such that: *(i)* `}
                <NoBreak>
                  <Math>{String.raw`$
g(x)
$`}</Math>
                </NoBreak>
                {String.raw`
exists (a.k.a, “`}
                <NoBreak>
                  <Math>{String.raw`$
x \in \dom g
$`}</Math>
                  {String.raw`”)`}
                </NoBreak>
                {String.raw` and,
*(ii)* `}
                <NoBreak>
                  <Math>{String.raw`$
f(g(x))
$`}</Math>
                </NoBreak>
                {String.raw` exists (a.k.a., “`}
                <NoBreak>
                  <Math>{String.raw`$
g(x) \in \dom f
$`}</Math>
                </NoBreak>
                {String.raw`”).`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 4.`}</i>
                {String.raw`
Amusingly—or not—both sides of `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{(f \circ g)(x) = f(g(x))}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`are read`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CenterDisplay>
                {String.raw`“`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` of `}
                <NoBreak>
                  <Math>{String.raw`$
\hlfbk{}g
$`}</Math>
                </NoBreak>
                {String.raw` of `}
                <NoBreak>
                  <Math>{String.raw`$
x\hspace{0.1em}
$`}</Math>
                </NoBreak>
                {String.raw`”`}
              </CenterDisplay>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`since “`}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is read “`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` of `}
                <NoBreak>
                  <Math>{String.raw`$
g\rt{0.1}
$`}</Math>
                </NoBreak>
                {String.raw`”,
and “`}
                <NoBreak>
                  <Math>{String.raw`$
f(\dots)
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is read “`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` of ...”.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={5}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 6.`}</b>
              {String.raw`
Find formulas for functions whose graphs look 
like these:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_factory_roof_x2_worked.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={5}>
              <VerticalChunk>
                {String.raw`For the first graph, `}
                <del>
                  <VerticalChunk>{String.raw`the `}</VerticalChunk>
                </del>
                {String.raw`an answer is `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
2 \cdot(x/2 - \fl{x/2})
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`which simplifies to`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x - 2\fl{x/2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because all we have to do is to multiply 
Exercise 5's formula by `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`For the second graph, an answer is`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x/3 - \fl{x/3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because the problem is similar to Exercise 5 
except with a factor `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw` horizontal dilation.`}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`For the third graph, we will first stop to 
find a formula  for the function depicted here:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_factory_roof_stretched_x3_translated_1_worked.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`And that formula is...`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_factory_roof_stretched_x3_translated_1_explanation.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...iiiiiiiS...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x-1)/3 - \fl{(x-1)/3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as obtained by substituting “`}
                <NoBreak>
                  <Math>{String.raw`$
x - 1
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw`  
(the input, minus `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` in place of “`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` in 
“`}
                <NoBreak>
                  <Math>{String.raw`$
\,x/3 - \fl{x/3}
$`}</Math>
                  {String.raw`”,`}
                </NoBreak>
                {String.raw` the formula for the 
second graph. Then we multiply that by `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw` 
(to go from ”`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <InlineImage
                  width="0.9em"
                  src="/images/svg_ch3_3_3_grid_1.svg"></InlineImage>
                {String.raw`” to “`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <InlineImage
                  width="0.9em"
                  src="/images/svg_ch3_3_3_grid_2.svg"></InlineImage>
                {String.raw`”, namely), meaning that the final answer is`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
3 \cdot ((x-1)/3 - \fl{(x-1)/3})
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
   
(x - 1) - 3\fl{(x-1)/3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`after simplification. (Or just`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x - 1 - 3\fl{(x-1)/3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`though we personally prefer the previous 
form, it being more “talkative”.)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={6}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 7.`}</b>
              {String.raw`
If`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\cos \dblcol \rr \ra \rr
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`(the “hollow dot colon” means that `}
              <NoBreak>
                <Math>{String.raw`$
\dom \cos = \rr
$`}</Math>
              </NoBreak>
              {String.raw`)
is a function whose graph looks like so...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch3_cosine.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...then does the function...`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
{x \ra \cos(1000x)}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...have a graph that looks like a bunch of very tight 
bumps, or, instead, very flat _&_ spaced-out bumps??`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={6}>
              <VerticalChunk>
                {String.raw`Consider how to “read off” a value of `}
                <NoBreak>
                  <Math>{String.raw`$
y = \cos(1000x)
$`}</Math>
                </NoBreak>
                {String.raw`
from the graph `}
                <NoBreak>
                  <Math>{String.raw`$
y = \cos(x)
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_cosine_1000x_worked.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`By the first step, a`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`horizontal dilation by a factor 1000`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw` `}</VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`maps the first graph onto the second graph—i.e.,
a point`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x, y)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is on the first graph if and only the dilated
point`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(1000x, y)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is on the second graph. The first graph is
therefore some very compressed thing, full of
scrunched bumps!`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
One can also reason that a small change in `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` 
results in a large change in `}
                <NoBreak>
                  <Math>{String.raw`$
1000x
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` so that 
`}
                <NoBreak>
                  <Math>{String.raw`$
\cos(1000x)
$`}</Math>
                </NoBreak>
                {String.raw` must “cycle” much faster through 
values than `}
                <NoBreak>
                  <Math>{String.raw`$
\cos(x)
$`}</Math>
                </NoBreak>
                {String.raw` does.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={7}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 8.`}</b>
              {String.raw`
Rewrite`}
            </VerticalChunk>
            <VerticalChunk indent={true}>
              <CustomBlock style="font-size:1.1em">
                <MathBlock>{String.raw`$$
\tag{A}(f \circ (g \circ h))(x)
$$`}</MathBlock>
              </CustomBlock>
              {String.raw`without using “`}
              <NoBreak>
                <Math>{String.raw`$
\circ
$`}</Math>
                {String.raw`”,`}
              </NoBreak>
              {String.raw` using only the 
“definitional equation of function 
composition”, which is namely`}
            </VerticalChunk>
            <VerticalChunk indent={true}>
              <CustomBlock style="font-size:1.1em">
                <MathBlock>{String.raw`$$
\tag{AA}(r \circ s)(x) = r(s(x))
$$`}</MathBlock>
              </CustomBlock>
              {String.raw`(where `}
              <NoBreak>
                <Math>{String.raw`$
r
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
s
$`}</Math>
              </NoBreak>
              {String.raw` are functions); plz
note that you will have to apply (AA) 
_twice_, as each application of (AA) 
makes `}
              <i>{String.raw`one`}</i>
              {String.raw` copy of the symbol “`}
              <NoBreak>
                <Math>{String.raw`$
\circ
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` 
disappear, and (A) contains `}
              <i>{String.raw`two`}</i>
              {String.raw` copies of 
“`}
              <NoBreak>
                <Math>{String.raw`$
\circ
$`}</Math>
              </NoBreak>
              {String.raw`”!!`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={7}>
              <VerticalChunk>
                {String.raw`Setting “`}
                <NoBreak>
                  <Math>{String.raw`$
r
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` to “`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` and “`}
                <NoBreak>
                  <Math>{String.raw`$
s
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` to “`}
                <NoBreak>
                  <Math>{String.raw`$
(g \circ h)
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` 
in (AA) yields`}
                <ImageLeft
                  offset_y="-0.5em"
                  offset_x="1em"
                  popup={true}
                  src="/images/svg_ch3_r_s_substitution_1_1.1em_cloud.svg"></ImageLeft>
              </VerticalChunk>
              <VerticalChunk>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
(f \circ (g \circ h))(x) = \f((g \circ h)(x))
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`...which already constitutes progress towards
our goal, since only one copy of “`}
                <NoBreak>
                  <Math>{String.raw`$
\circ
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` 
exists on the right-hand side! But`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
(g \circ h)(x) = g(h(x))
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`by the “definitional equation” again, so`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
f((g \circ h)(x)) = \f(g(h(x)))
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`...and this completes the computation!`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
We can collect both steps of the computation 
into a single string of equalities:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_first_victim_second_victim_1_1em.svg"></Image>
            </Solution>
          </Exercise>
          <Exercise exercise_number={8}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 9.`}</b>
              {String.raw`
Same question as Exercise 17, but for 
“`}
              <NoBreak>
                <Math>{String.raw`$
f \circ (g \circ h)
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` instead of 
“`}
              <NoBreak>
                <Math>{String.raw`$
(f \circ g) \circ h
$`}</Math>
              </NoBreak>
              {String.raw`”.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={8}>
              <VerticalChunk>{String.raw`We will again evaluate the “outer”
composition operator first and the “inner”
composition operator second, where the “outer”
composition operator is the one that is fewer
pairs of parentheses away from the outside 
world:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_inner_outer_1_1em.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`So the first step is...`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
((f \circ g) \circ h)(x) = (f \circ g)(h(x))
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`...by setting `}
                <NoBreak>
                  <Math>{String.raw`$
r = f \circ g
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
s = h
$`}</Math>
                </NoBreak>
                {String.raw` in
the definitional equation, and the second step
is...`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
(f \circ g)(h(x)) = \f(g(h(x)))
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`...by setting `}
                <NoBreak>
                  <Math>{String.raw`$
r = f
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
s = g
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and while
replacing “`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` by “`}
                <NoBreak>
                  <Math>{String.raw`$
h(x)
$`}</Math>
                </NoBreak>
                {String.raw`”.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
The fact that`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
(f \circ (g \circ h))(x)
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`and`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
((f \circ g) \circ h)(x)
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`both evaluate to`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
f(g(h(x)))
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`actually implies that`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
f \circ (g \circ h)
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`and`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
(f \circ g) \circ h
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`are the same function; this function is namely
the function that maps `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
f(g(h(x)))
$`}</Math>
                </NoBreak>
                {String.raw` for 
all `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` (or`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
x \ra f(g(h(x)))
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`in lambda notation).`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
Because of this, we can write`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
f \circ g \circ half
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`without any parentheses. (The point is: either
way you parenthesize it you obtain the same 
function, so why bother?)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 3.`}</i>
                {String.raw`
The fact that`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
{(a + b) + c = a + (b + c)}
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`for all numbers `}
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
                {String.raw` is known as the`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`associativity`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`of addition; likewise, the fact that`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
(ab)c = a(bc)
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`for all numbers `}
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
                {String.raw` is known as the`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`associativity`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk
                indent={true}>{String.raw`of multiplication; and again likewise,
the fact that`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
{(f \circ g) \circ h  =  f \circ (g \circ h)}
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`for all functions `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` is known 
as the`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`associativity`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw``}
                <ImageRight src="/images/svg_ch3_associativity_cloud.svg"></ImageRight>
              </VerticalChunk>
              <VerticalChunk>{String.raw`of function composition.`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 4.`}</i>
                {String.raw`
One of the best ways to explain _&_ understand
the associativity of function composition 
uses this picture:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_truth_be_said.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In the above `}
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
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
C
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
D
$`}</Math>
                </NoBreak>
                {String.raw` are sets 
while the arrows encode functions `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                </NoBreak>
                {String.raw` 
and `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` that, respectively in reverse order, 
go from `}
                <NoBreak>
                  <Math>{String.raw`$
D
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
C
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
C
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` 
For example,`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <DisplayCenterDisplayed>
                  <VerticalChunk>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
\Large h(
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <InlineImage
                      y_anchor="-3px"
                      width="1rem"
                      src="/images/svg_ch3_composition_icon_clubs.svg"></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
\Large{}) =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <InlineImage
                    margin_right=".5rem"
                    margin_left=".5rem"
                    y_anchor="-3px"
                    width="1.25rem"
                    src="/images/svg_ch3_composition_icon_die_3.svg"></InlineImage>
                </DisplayCenterDisplayed>
                {String.raw`because the arrow that originates at `}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <InlineImage
                  space_right={true}
                  space_left={true}
                  y_anchor="-4px"
                  width="1rem"
                  src="/images/svg_ch3_composition_icon_clubs.svg"></InlineImage>
                {String.raw`in set `}
                <NoBreak>
                  <Math>{String.raw`$
D
$`}</Math>
                </NoBreak>
                {String.raw` lands at `}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <InlineImage
                  space_right={true}
                  space_left={true}
                  y_anchor="-4px"
                  width="1.25rem"
                  src="/images/svg_ch3_composition_icon_die_3.svg"></InlineImage>
                {String.raw`in set `}
                <NoBreak>
                  <Math>{String.raw`$
C
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw`  and`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <DisplayCenterDisplayed>
                  <VerticalChunk>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
\Large g(h(
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <InlineImage
                      y_anchor="-3px"
                      width="1rem"
                      src="/images/svg_ch3_composition_icon_clubs.svg"></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
\Large{})){}=
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <InlineImage
                    space_right={true}
                    space_left={true}
                    y_anchor="-4px"
                    width="2.3rem"
                    src="/images/svg_ch3_composition_icon_fence.svg"></InlineImage>
                </DisplayCenterDisplayed>
                {String.raw`because, pursuing that path onwards, the arrow 
that originates at`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <InlineImage
                  space_right={true}
                  space_left={true}
                  y_anchor="-4px"
                  width="1.25rem"
                  src="/images/svg_ch3_composition_icon_die_3.svg"></InlineImage>
                {String.raw`in set `}
                <NoBreak>
                  <Math>{String.raw`$
C
$`}</Math>
                </NoBreak>
                {String.raw` lands at`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <InlineImage
                  space_right={true}
                  space_left={true}
                  y_anchor="-4px"
                  width="2.3rem"
                  src="/images/svg_ch3_composition_icon_fence.svg"></InlineImage>
                {String.raw`in set `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` etc.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Under this representation one can “compute”
`}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g \circ h
$`}</Math>
                </NoBreak>
                {String.raw` by gluing arrows end-to-end.
First, say, obliviate set `}
                <NoBreak>
                  <Math>{String.raw`$
C
$`}</Math>
                </NoBreak>
                {String.raw` in the middle 
right, then do the same with set `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                </NoBreak>
                {String.raw` in the
middle left:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="2000px"
                src="/images/svg_ch3_truth_be_said_right_first.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`We can also get rid of `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                </NoBreak>
                {String.raw` first, `}
                <NoBreak>
                  <Math>{String.raw`$
C
$`}</Math>
                </NoBreak>
                {String.raw` second:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="2000px"
                src="/images/svg_ch3_truth_be_said_left_first.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The first order of computation corresponds
to the parenthetization “`}
                <NoBreak>
                  <Math>{String.raw`$
f \circ (g \circ h)
$`}</Math>
                </NoBreak>
                {String.raw`”
while the second corresponds to the 
parenthetization “`}
                <NoBreak>
                  <Math>{String.raw`$
(f \circ g) \circ h
$`}</Math>
                </NoBreak>
                {String.raw`”.
Intuitively, the reason they come out the 
same (in “step 6”, bottom left) is because 
each final arrow in the last diagram comes 
from a path-of-arrows in the original 
diagram, and the order in which the 
waypoints along a path are “straightened” 
(or “collapsed”) does not affect the origin 
point or destination point of the final 
arrow.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 5.`}</i>
                {String.raw`
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
the second function second.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 6.`}</i>
                {String.raw`
We have taken for granted the fact that two 
functions `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                </NoBreak>
                {String.raw` are “equal” if and only
if they produce the same outupt for every 
input but this is a actually subtle thing 
that has to do with how functions are defined 
“under the hood”. Specifically, mathematicians 
view functions as`}
                <del>
                  <VerticalChunk>{String.raw`long`}</VerticalChunk>
                </del>
                <del>
                  <VerticalChunk>{String.raw`lists of`}</VerticalChunk>
                </del>
                {String.raw`sets of ordered pairs; for example—conceptual
cold water shock ahead—`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\textrm{VX-11/78A} = \{(0, 3.5), (1, 2.5)\}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because VX-11/78A maps `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
3.5
$`}</Math>
                </NoBreak>
                {String.raw` and maps 
`}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
2.5
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (The presence of an ordered pair`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CustomBlock style="font-size:1.1em">
                  <MathBlock>{String.raw`$$
(a, b)
$$`}</MathBlock>
                </CustomBlock>
                {String.raw`means that input `}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                </NoBreak>
                {String.raw` produces output `}
                <NoBreak>
                  <Math>{String.raw`$
b
$`}</Math>
                  {String.raw`.)`}
                </NoBreak>
                {String.raw` So 
two functions are equal if and only if they 
are equal`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`as sets of ordered pairs`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`because the set of ordered pairs is the 
underlying “thing” that the function is. In 
particular, there is no notion of a “formula” 
or of a “procedure” being attached to a 
function, that might cause two functions to 
be considered unequal even if they produce the 
same output on every input—producing the same
output on every input implies that the `}
                <del>
                  <VerticalChunk>{String.raw`list of`}</VerticalChunk>
                </del>
                {String.raw`set of ordered pairs is equal, and, perforce, 
that the two functions are equal!!`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={9}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 10.`}</b>
              {String.raw`
Show that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
x^2 + 10x + 30
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`can be written in the form `}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(x + \dots)^2 + \,\dots
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for some numbers “`}
              <NoBreak>
                <Math>{String.raw`$
\dots
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` and “`}
              <NoBreak>
                <Math>{String.raw`$
\dots
$`}</Math>
              </NoBreak>
              {String.raw`”.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={9}>
              <VerticalChunk>{String.raw`The answer is`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x + 5)^2 + 5
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`because`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
\,\,\,\,(x + 5)^2
&= x^2 + (2\cdot 5)x + 5^2 \\
&= \up{1.4} x^2 + 10x + 25
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and adding `}
                <NoBreak>
                  <Math>{String.raw`$
5
$`}</Math>
                </NoBreak>
                {String.raw` gives `}
                <NoBreak>
                  <Math>{String.raw`$
x^2 + 10x + 30
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
Solve Exercise 10 using algebra _&_
variables.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={10}>
              <VerticalChunk>
                {String.raw`Put an unknown “`}
                <NoBreak>
                  <Math>{String.raw`$
U
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` for the first set
of dots and an unknown “`}
                <NoBreak>
                  <Math>{String.raw`$
V
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` for the 
second set of dots. Then`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x + U)^2 + V = x^2 + 10x + 30
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`becomes the equation to satisfy.
Expanding the left-hand side, we get:`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x^2 + 2Ux + U^2 + V = x^2 + 10x + 30.
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In order for this equation to hold as an 
equality between polynomials (i.e., for all
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` the coefficients of `}
                <NoBreak>
                  <Math>{String.raw`$
x^2
$`}</Math>
                </NoBreak>
                {String.raw` on both 
sides of the equation must be equal, the 
coefficients of `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` on both sides of the
equation must be equal, and the constant
terms on boths of the equation must be 
equal—this gives us`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
1 = 1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(equating the coefficients of `}
                <NoBreak>
                  <Math>{String.raw`$
x^2
$`}</Math>
                  {String.raw`),`}
                </NoBreak>
                {String.raw` and`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
2U = 10
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(equating the coefficients of `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`),`}
                </NoBreak>
                {String.raw` and `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
U^2 + V = 30
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(equating the constant terms). Only the
latter two equations contain information.
In particular,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
2U = 10
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`implies `}
                <NoBreak>
                  <Math>{String.raw`$
U = 5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` so `}
                <NoBreak>
                  <Math>{String.raw`$
U^2 + V = 30
$`}</Math>
                </NoBreak>
                {String.raw` becomes
`}
                <NoBreak>
                  <Math>{String.raw`$
25 + V = 30
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and 
`}
                <NoBreak>
                  <Math>{String.raw`$
V = 30 - 25 = 5
$`}</Math>
                </NoBreak>
                {String.raw`.
So `}
                <NoBreak>
                  <Math>{String.raw`$
U = V = 5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` as previously found.
(But now we know that the solution is _unique_,
because the only number `}
                <NoBreak>
                  <Math>{String.raw`$
U
$`}</Math>
                </NoBreak>
                {String.raw` that satisfies`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
2U = 10
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is `}
                <NoBreak>
                  <Math>{String.raw`$
U = 5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and the only number `}
                <NoBreak>
                  <Math>{String.raw`$
V
$`}</Math>
                </NoBreak>
                {String.raw` that
satisfies `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
25 + V = 30
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is `}
                <NoBreak>
                  <Math>{String.raw`$
V = 5
$`}</Math>
                </NoBreak>
                {String.raw`.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={11}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 12.`}</b>
              {String.raw`
Show that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
x^2 + 10x + 30 = 0
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`(cf`}
              <NoBreak>
                <Math>{String.raw`$
.
$`}</Math>
              </NoBreak>
              {String.raw` Exercise 21) has no solutions `}
              <NoBreak>
                <Math>{String.raw`$
x \in \rr
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={11}>
              <VerticalChunk>{String.raw`The equation is equivalent to`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x + 5)^2 + 5 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`by Exercise 21, but this implies`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x + 5)^2 = -5
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`which is an equation with no solution over
the reals because the square of a real number
is nonnegative.`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={12}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 13.`}</b>
              {String.raw`
Show that `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
x^2 + 10x - 30 = 0
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`has two solutions `}
              <NoBreak>
                <Math>{String.raw`$
x \in \rr
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={12}>
              <VerticalChunk>{String.raw`The equation can be written`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x + 5)^2 - 55 = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because `}
                <NoBreak>
                  <Math>{String.raw`$
(x + 5)^2 = x^2 + 10x + 25
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
25 - 55 = -30
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` Passing `}
                <NoBreak>
                  <Math>{String.raw`$
55
$`}</Math>
                </NoBreak>
                {String.raw` to the
other side, we find`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x + 5)^2 = 55
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`which holds if and only if`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\,x + 5 = \pm\sqrt{55}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\,x = -5 \pm\sqrt{55}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`constituting two distinct solutions.`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={13}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 14.`}</b>
              {String.raw`
What sequence of geometric transformations
(rotations, translations, scalings, etc) 
maps the curve`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
{y = x^2}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`onto`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
{y = Ax^2 + Bx}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for constants `}
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
              {String.raw` such that `}
              <NoBreak>
                <Math>{String.raw`$
A \ne 0
$`}</Math>
                {String.raw`?`}
              </NoBreak>
              {String.raw` `}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={13}>
              <VerticalChunk>{String.raw`Write`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{Ax^2 + Bx}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`as`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{A\Big(x^2 + {B \over A}x\Big)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and then write`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{x^2 + {B \over A}x}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`as`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`so that, altogether,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{Ax^2 + Bx}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is rewritten`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}\right]}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`that can be seen as descending from `}
                <NoBreak>
                  <Math>{String.raw`$
y = x^2
$`}</Math>
                </NoBreak>
                {String.raw` 
in three steps:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = x^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\downarrow}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = \,\Big(x + {B \over 2A}\Big)^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\downarrow}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = \,\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\downarrow}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}\right]}.
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Three steps, three geometric transformations!
The third step effects a`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`vertical scaling by `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`i.e., vertically stretches the graph by
a factor `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` because we multiply the
value of `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` by `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` The second step 
effects a`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`vertical translation by `}
                <NoBreak>
                  <Math>{String.raw`$
{-{B^2 \over 4A^2}}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`i.e., lowers the height of the entire
graph by `}
                <NoBreak>
                  <Math>{String.raw`$
{B^2 \over 4A^2}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` because we add 
`}
                <NoBreak>
                  <Math>{String.raw`$
-{B^2 \over 4A^2}
$`}</Math>
                </NoBreak>
                {String.raw` to the value of `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`.
The first step, on the other hand, is
entirely different: it is a`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`preprocessing`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`step, in that we mess with the input (i.e., 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`),`}
                </NoBreak>
                {String.raw` instead of adding on (or “multiplying 
on”) to the current value of `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw`     `}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`To understand how a preprocessing step 
affects the shape of a graph, note that, more
generally, a graph of the form`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = f(x + a)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(for some constant `}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` “fetches” values on
the graph`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = f(x)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by going `}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                </NoBreak>
                {String.raw` units to the right. The larger `}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                </NoBreak>
                {String.raw`
is, thus, the further `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = f(x + a)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`drifts off to the left. For example,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = f(x + 20)}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`has value `}
                <NoBreak>
                  <Math>{String.raw`$
f(0)
$`}</Math>
                </NoBreak>
                {String.raw` at `}
                <NoBreak>
                  <Math>{String.raw`$
x = -20
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and if you replace
`}
                <NoBreak>
                  <Math>{String.raw`$
20
$`}</Math>
                </NoBreak>
                {String.raw` with something larger, that position (i.e., 
`}
                <NoBreak>
                  <Math>{String.raw`$
x = -20
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` drifts even further off to the left!
In any case, the graph `}
                <NoBreak>
                  <Math>{String.raw`$
y = f(x + a)
$`}</Math>
                </NoBreak>
                {String.raw` is the`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>{String.raw`leftward`}</CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`translate by `}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                </NoBreak>
                {String.raw` units of `}
                <NoBreak>
                  <Math>{String.raw`$
y = f(x)
$`}</Math>
                </NoBreak>
                {String.raw`
and, as a consequence, the first step effects a`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`leftward translation by `}
                <NoBreak>
                  <Math>{String.raw`$
{B\over 2A}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`of the curve `}
                <NoBreak>
                  <Math>{String.raw`$
y = x^2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` or`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`horizontal translation by `}
                <NoBreak>
                  <Math>{String.raw`$
-{B\over 2A}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`more elegantly put. (The second formulation
doesn't assume a particular orientation of the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-axis,`}
                </NoBreak>
                {String.raw` that's why it's “more elegantly put”,
in our opinion.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`To recapitulate, the three transformations
are,in order:`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`1. horizontal translation by `}
                <NoBreak>
                  <Math>{String.raw`$
-{B \over 2A}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`2. vertical translation by `}
                <NoBreak>
                  <Math>{String.raw`$
{-{B^2 \over 4A^2}}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`3. vertical scaling by `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
You could do the vertical translation
before the horizontal translation,
geometrically it comes out the same.
That order of geometric transformations 
would correspond to the following sequence
of algebraic transformations:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = x^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\downarrow}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = x^2 - {B^2 \over 4A^2}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\downarrow}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = \,\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\downarrow}
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{y = A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}\right]}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...in which the `}
                <i>{String.raw`second`}</i>
                {String.raw` step is a 
preprocessing step. (I.e., a step that 
replaces “`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` with something else.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={14}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 15.`}</b>
              {String.raw`
Let `}
              <NoBreak>
                <Math>{String.raw`$
x_0 \in \rr
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
y_0 \in \rr
$`}</Math>
              </NoBreak>
              {String.raw` and 
`}
              <NoBreak>
                <Math>{String.raw`$
a \in \rr
$`}</Math>
              </NoBreak>
              {String.raw` with `}
              <NoBreak>
                <Math>{String.raw`$
y_0 \geq 0
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
a \ne 0.
$`}</Math>
              </NoBreak>
              {String.raw`
If you apply these transformations...`}
            </VerticalChunk>
            <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
            <CentralItalicDisplay>
              {String.raw`1. vertical translation by `}
              <NoBreak>
                <Math>{String.raw`$
-y_0
$`}</Math>
              </NoBreak>
              {String.raw``}
            </CentralItalicDisplay>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw``}</VerticalChunk>
            <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
            <CentralItalicDisplay>
              {String.raw`2. horizontal translation by `}
              <NoBreak>
                <Math>{String.raw`$
x_0
$`}</Math>
              </NoBreak>
              {String.raw``}
            </CentralItalicDisplay>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw``}</VerticalChunk>
            <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
            <CentralItalicDisplay>
              {String.raw`3. vertical scaling by `}
              <NoBreak>
                <Math>{String.raw`$
a
$`}</Math>
              </NoBreak>
              {String.raw``}
            </CentralItalicDisplay>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw``}</VerticalChunk>
            <VerticalChunk indent={true}>
              {String.raw`...to the curve `}
              <NoBreak>
                <Math>{String.raw`$
y = x^2
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` what are the 
roots of the final curve that you obtain?
(Nb: `}
              <i>{String.raw`Roots`}</i>
              {String.raw` are values of `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
              </NoBreak>
              {String.raw` such 
that `}
              <NoBreak>
                <Math>{String.raw`$
y = 0
$`}</Math>
              </NoBreak>
              {String.raw`.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={14}>
              <VerticalChunk>
                {String.raw`Start by noting that the point 
`}
                <NoBreak>
                  <Math>{String.raw`$
(\sqrt{y_0}, y_0)
$`}</Math>
                </NoBreak>
                {String.raw` is on the curve `}
                <NoBreak>
                  <Math>{String.raw`$
y = x^2
$`}</Math>
                </NoBreak>
                {String.raw`,
as well as the point `}
                <NoBreak>
                  <Math>{String.raw`$
(-\sqrt{y_0}, y_0)
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
because
`}
                <NoBreak>
                  <Math>{String.raw`$
(\sqrt{y_0})^2 = (-\sqrt{y_0})^2 =
$`}</Math>
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
y_0;
$`}</Math>
                </NoBreak>
                {String.raw`
here is a sketch of the situation before 
anything happens:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="760px"
                src="/images/svg_ch3_x0_y0_step0.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`After vertically translating by `}
                <NoBreak>
                  <Math>{String.raw`$
-y_0
$`}</Math>
                </NoBreak>
                {String.raw` 
the roots will therefore be at `}
                <NoBreak>
                  <Math>{String.raw`$
x = \pm\sqrt{y_0}
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="760px"
                src="/images/svg_ch3_x0_y0_step1_alone.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Then after horizontally translating by `}
                <NoBreak>
                  <Math>{String.raw`$
x_0
$`}</Math>
                </NoBreak>
                {String.raw`
the roots mosey over to `}
                <NoBreak>
                  <Math>{String.raw`$
x = x_0\pm\sqrt{y_0}
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="760px"
                src="/images/svg_ch3_x0_y0_step2_alone.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Lastly, vertical scaling does not affect 
the position of the roots, because it 
stretches the graph `}
                <i>{String.raw`about`}</i>
                {String.raw` the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` 
axis (here `}
                <NoBreak>
                  <Math>{String.raw`$
a \approx 1.7
$`}</Math>
                </NoBreak>
                {String.raw`):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                width="760px"
                src="/images/svg_ch3_x0_y0_step3_alone.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`So the roots are at: `}
                <NoBreak>
                  <Math>{String.raw`$
x = x_0 \pm \sqrt{y_0}
$`}</Math>
                </NoBreak>
                {String.raw`.
(Like we found them after the second step.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={15}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 16.`}</b>
              {String.raw`
Use the results of the previous two exercises
to find the value(s) of `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
              </NoBreak>
              {String.raw` such that 
`}
              <NoBreak>
                <Math>{String.raw`$
Ax^2 + Bx = 0
$`}</Math>
              </NoBreak>
              {String.raw` for constants `}
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
              {String.raw` such 
that `}
              <NoBreak>
                <Math>{String.raw`$
A \ne 0
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={15}>
              <VerticalChunk>{String.raw`Well,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
Ax^2 + Bx = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`obviously has solution `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                </NoBreak>
                {String.raw` to start
with, so we `}
                <i>{String.raw`don't need`}</i>
                {String.raw` the previous 
exercises for one of the roots at least—actually,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
Ax^2 + Bx = x(Ax + B)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`so the equation is equivalent to`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x(Ax + B) = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and so one of the roots is `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and the other root is the value of `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`
such that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
Ax + B = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which is `}
                <NoBreak>
                  <Math>{String.raw`$
x = -B/A
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (In order for the product`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x(Ax + B)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`to be `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` you either need the first term to
be `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` leading us to `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` or the second
term to be `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` leading us to `}
                <NoBreak>
                  <Math>{String.raw`$
Ax + B = 0
$`}</Math>
                  {String.raw`—the`}
                </NoBreak>
                {String.raw` 
product of two things is `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` if and only if
one of the two things is `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw`.)`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`So the roots are `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
x = -B/A
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`To complete the problem _as we were asked_, 
however, we will use the fact that `}
                <NoBreak>
                  <Math>{String.raw`$
y = Ax^2 + Bx
$`}</Math>
                </NoBreak>
                {String.raw`
is obtained from `}
                <NoBreak>
                  <Math>{String.raw`$
y = x^2
$`}</Math>
                </NoBreak>
                {String.raw` by the following
sequence of transformations (cf. Exercise 14):`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`1. vertical translation by `}
                <NoBreak>
                  <Math>{String.raw`$
-{B^2 \over 4A^2}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`2. horizontal translation by `}
                <NoBreak>
                  <Math>{String.raw`$
-{B \over 2A}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`3. vertical scaling by `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`(We put the vertical translation first.)
By Exercise 15, the roots of `}
                <NoBreak>
                  <Math>{String.raw`$
y = Ax^2 + Bx
$`}</Math>
                </NoBreak>
                {String.raw` 
are thus at`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\tag{A}
x = -{B\over 2A} \pm \sqrt{B^2 \over 4A^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which looks a little different than our 
previous result of `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
x = -B/A
$`}</Math>
                </NoBreak>
                {String.raw`
until you realize that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\pm \sqrt{B^2 \over 4A^2} = \pm {B \over 2A}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(because`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\left({B \over 2A}\right)^{\!2} = {B^2 \over 4A^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and even though `}
                <NoBreak>
                  <Math>{String.raw`$
{B\over 2A}
$`}</Math>
                </NoBreak>
                {String.raw` could be 
negative, the “`}
                <NoBreak>
                  <Math>{String.raw`$
\pm
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` on either side of 
the equation means that the `}
                <i>{String.raw`set`}</i>
                {String.raw` of values
on either side of the equation is the same),
so that (A) becomes`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = -{B\over 2A} \pm {B \over 2A}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and, on the one hand,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
-{B\over 2A} + {B \over 2A} = 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`while, on the other hand,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
-{B\over 2A} - {B \over 2A} = -{2B\over 2A} = -{B\over A}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`so here too we find that the roots are `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
x = -B/A
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (It must be the right answer!)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={16}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 17.`}</b>
              {String.raw`
True or false (`}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
g
$`}</Math>
              </NoBreak>
              {String.raw` are functions):`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Grid
              column_first={true}
              with_padding={false}
              place_items="start"
              center_on_overflow={true}
              sm_cutoff={520}
              sm_cols={1}
              cols={2}>
              <Item>
                {String.raw`i. `}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g = (x \ra f(g(x)))
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`ii. `}
                <NoBreak>
                  <Math>{String.raw`$
g \circ f = (x \ra f(g(x)))
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`iii. `}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g = (x \ra g(f(x)))
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
              <Item>
                {String.raw`iv. `}
                <NoBreak>
                  <Math>{String.raw`$
g \circ f = (x \ra g(f(x)))
$`}</Math>
                </NoBreak>
                {String.raw``}
              </Item>
            </Grid>
            <div class="spacer"></div>
            <Solution solution_number={16}>
              <VerticalChunk>
                {String.raw`The true statements are i, iv, because
`}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g
$`}</Math>
                </NoBreak>
                {String.raw` is the function that maps an 
input `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
f(g(x))
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and symmetrically 
for `}
                <NoBreak>
                  <Math>{String.raw`$
g \circ f
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` `}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={17}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 18.`}</b>
              {String.raw`
If `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
g
$`}</Math>
              </NoBreak>
              {String.raw` are functions then we define 
(and not just us but people in general)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f + g
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`to be`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
t \ra f(t) + g(t)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`(use ‘`}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
                {String.raw`’`}
              </NoBreak>
              {String.raw` if you like), 
i.e., to be the function that applies `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` and
`}
              <NoBreak>
                <Math>{String.raw`$
g
$`}</Math>
              </NoBreak>
              {String.raw` separately and then takes the sum,
and we define `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
fg
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`to be`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
z \ra f(z)g(z)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`(use ‘`}
              <NoBreak>
                <Math>{String.raw`$
t
$`}</Math>
                {String.raw`’`}
              </NoBreak>
              {String.raw` if you like, hehe),
i.e., to be the function that applies `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` and 
`}
              <NoBreak>
                <Math>{String.raw`$
g
$`}</Math>
              </NoBreak>
              {String.raw` separately and then takes the product.
(These definitions are similar to how we define`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f \circ g
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`to be`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
u \ra f(g(u))
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for the symbol “`}
              <NoBreak>
                <Math>{String.raw`$
\circ
$`}</Math>
                {String.raw`”,`}
              </NoBreak>
              {String.raw` except that now we 
are defining the `}
              <i>{String.raw`sum`}</i>
              {String.raw` and `}
              <i>{String.raw`product`}</i>
              {String.raw` of functions,
instead of their _composition_, namely.)`}
            </VerticalChunk>
            <VerticalChunk indent={true}>
              {String.raw`Given these definitions, which of the following
equalities hold, in general for all functions `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw`,
`}
              <NoBreak>
                <Math>{String.raw`$
g
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
h
$`}</Math>
              </NoBreak>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f \circ (g + h) = (x \ra f(g(x)) + f(h(x)))
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f \circ (g + h) = (x \ra f(g(x) + h(x)))
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(g + h) \circ f = (x \ra h(f(x)) + g(f(x)))
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(g + h) \circ f = (x \ra (g + h)(f(x)))
$$`}</MathBlock>
            <div class="spacer"></div>
            <Solution solution_number={17}>
              <VerticalChunk>{String.raw`The first equality is false because the 
right-hand side is actually`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f \circ g) + (f \circ h)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`not `}
                <NoBreak>
                  <Math>{String.raw`$
f \circ (g + h)
$`}</Math>
                  {String.raw`;`}
                </NoBreak>
                {String.raw` the second equality is
true; the third equality is true even though you
would expect the right-hand side to be written `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x \ra g(f(x)) + h(f(x)))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`with “`}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` and “`}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` switched (but addition is
commutative, so it doesn't matter); the fourth
equality is true: it is the definition of “`}
                <NoBreak>
                  <Math>{String.raw`$
\circ
$`}</Math>
                </NoBreak>
                {String.raw`”.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={18}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 19.`}</b>
              {String.raw`
What sequence of geometric transformations 
of length no more than 3 maps`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
y = x^2
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`onto`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
y = Ax^2 + Bx + C
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for constants `}
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
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
C
$`}</Math>
              </NoBreak>
              {String.raw` such that `}
              <NoBreak>
                <Math>{String.raw`$
A \ne 0
$`}</Math>
              </NoBreak>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={18}>
              <VerticalChunk>{String.raw`Write`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
Ax^2 + Bx + C
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`as`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A\Big(x^2 + {B \over A}x + {C\over A}\Big)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and, similarly to Exercise 14, write`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x^2 + {B \over A}x
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`as`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`so that, altogether, `}
                <NoBreak>
                  <Math>{String.raw`$
Ax^2 + Bx + C
$`}</Math>
                </NoBreak>
                {String.raw`
becomes`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2} + {C\over A}\right]
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 - 4AC\over 4A^2}\right]
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by putting things on a common denominator.
(We have endeavored to keep the minus sign 
out front of the common denominator fraction 
in order to maintain the most similarity with
the term “`}
                <NoBreak>
                  <Math>{String.raw`$
-{B^2\over 4A}
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` of Exercise 14,
that also has a minus sign out front.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`By direct analogy with Exercise 14, the three
transformations are thus...`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`1. horizontal translation by `}
                <NoBreak>
                  <Math>{String.raw`$
-{B \over 2A}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`2. vertical translation by `}
                <NoBreak>
                  <Math>{String.raw`$
{-{B^2 - 4AC \over 4A^2}}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`3. vertical scaling by `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk
                indent={true}>{String.raw`...or...`}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`1. vertical translation by `}
                <NoBreak>
                  <Math>{String.raw`$
{-{B^2 - 4AC \over 4A^2}}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`2. horizontal translation by `}
                <NoBreak>
                  <Math>{String.raw`$
-{B \over 2A}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`3. vertical scaling by `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`...if we put the vertical translation first.`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={19}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 20.`}</b>
              {String.raw`
What are the roots (i.e., solutions) `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
              </NoBreak>
              {String.raw` of`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
Ax^2 + Bx + C = 0
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for constants `}
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
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
C
$`}</Math>
              </NoBreak>
              {String.raw` such that `}
              <NoBreak>
                <Math>{String.raw`$
A \ne 0
$`}</Math>
              </NoBreak>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={19}>
              <VerticalChunk>{String.raw`The curve`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
y = Ax^2 + Bx + C
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is obtained from the curve `}
                <NoBreak>
                  <Math>{String.raw`$
y = x^2
$`}</Math>
                </NoBreak>
                {String.raw` by the following sequence of 
transformations (cf. Exercise 19):`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`1. vertical translation by `}
                <NoBreak>
                  <Math>{String.raw`$
{-{B^2 - 4AC \over 4A^2}}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`2. horizontal translation by `}
                <NoBreak>
                  <Math>{String.raw`$
-{B \over 2A}
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CentralItalicDisplay>
                {String.raw`3. vertical scaling by `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw``}
              </CentralItalicDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk indent={true}>{String.raw``}</VerticalChunk>
              <CenterDisplay>{String.raw`~`}</CenterDisplay>
              <VerticalChunk>{String.raw``}</VerticalChunk>
              <VerticalChunk
                indent={true}>{String.raw`On the one hand, if`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{B^2 - 4AC \over 4A^2} < 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`then`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
-{B^2 - 4AC \over 4A^2} > 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and the vertical translation is _upward_, 
the curve detaches from the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` axis never
to see it again, and there are no roots!`}
              </VerticalChunk>
              <VerticalChunk
                indent={
                  true
                }>{String.raw`On the other hand, if`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{B^2 - 4AC \over 4A^2} \geq 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`then the roots are given by`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = -{B \over 2A} \pm \sqrt{B^2 - 4AC \over 4A^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by Exercise 15. `}
                <NoBreak>
                  <Math>{String.raw`$
\rightarrow
$`}</Math>
                </NoBreak>
                {String.raw` ~The End~ `}
                <NoBreak>
                  <Math>{String.raw`$
\leftarrow
$`}</Math>
                </NoBreak>
                {String.raw``}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
In fact,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\pm\sqrt{B^2 - 4AC \over 4A^2} = \pm {\sqrt{B^2 - 4AC} \over 2A}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(square both sides of the equation—in general,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\pm E = \pm F
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`as one set of two values equalling another 
set of two values, if and only if`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
|E| = |F|
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
E^2 = F^2
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`—so that's why we say “square both sides”),
so the formula for the roots can also be written`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = -{B \over 2A} \pm {\sqrt{B^2 - 4AC} \over 2A}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = {{-B \pm \sqrt{B^2 - 4AC}} \over 2A}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`as briefly flashed by, e.g., in Chapter 1.`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
If`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{B^2 - 4AC \over 4A^2} < 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`then`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\sqrt{B^2 - 4AC \over 4A^2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`does not exist, alerting you to the absence 
of roots, if you try to use the first formula 
we gave. Also`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{B^2 - 4AC \over 4A^2} < 0\iff B^2 - 4AC < 0
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because `}
                <NoBreak>
                  <Math>{String.raw`$
4A^2 > 0
$`}</Math>
                </NoBreak>
                {String.raw` for all `}
                <NoBreak>
                  <Math>{String.raw`$
A \ne 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
so the second set of formulas would alert you
to the absence of roots in that case, as well.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={20}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 21.`}</b>
              {String.raw`
Summon your senses of extrapolation _&_ 
imagination to evaluate this expression:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(f \ra x \ra h \ra {f(x+h) - f(x)\over h})(x \ra x^2)(5)(0.1)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`(Hint: The answer is a specific real number.)`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={20}>
              <VerticalChunk>{String.raw`...in an expression such as...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x \ra x^3)(6)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...we pair the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` with `}
                <NoBreak>
                  <Math>{String.raw`$
6
$`}</Math>
                </NoBreak>
                {String.raw`...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_connection_x_6.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...and `}
                <NoBreak>
                  <Math>{String.raw`$
6
$`}</Math>
                </NoBreak>
                {String.raw` becomes the value to use for `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`
in “`}
                <NoBreak>
                  <Math>{String.raw`$
x^3
$`}</Math>
                </NoBreak>
                {String.raw`”:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_connection_x_6_in_computation.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...; in an expression such as...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x \ra y \ra x^3y)(6)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...we also pair the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` with `}
                <NoBreak>
                  <Math>{String.raw`$
6
$`}</Math>
                </NoBreak>
                {String.raw`...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_connection_x_6_again.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...and `}
                <NoBreak>
                  <Math>{String.raw`$
6
$`}</Math>
                </NoBreak>
                {String.raw` becomes the value to use for `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`
in “`}
                <NoBreak>
                  <Math>{String.raw`$
y \ra x^3y
$`}</Math>
                </NoBreak>
                {String.raw`”:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_connection_x_6_again_in_computation.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...(in this case the result is not a number,
but a function—a function is a mathematical 
object like another, after all); in an 
expression such as...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x \ra y \ra x^3y)(6)(8)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...we pair the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` with `}
                <NoBreak>
                  <Math>{String.raw`$
6
$`}</Math>
                </NoBreak>
                {String.raw` and the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` with `}
                <NoBreak>
                  <Math>{String.raw`$
8
$`}</Math>
                </NoBreak>
                {String.raw`...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_connection_x_y_6_8.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...and `}
                <NoBreak>
                  <Math>{String.raw`$
6
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
8
$`}</Math>
                </NoBreak>
                {String.raw` become respectively the 
values to use for `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` in “`}
                <NoBreak>
                  <Math>{String.raw`$
x^3y
$`}</Math>
                </NoBreak>
                {String.raw`”:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_connection_x_y_6_8_in_computation.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...; now in an expression such as...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f \ra x \ra h \ra {f(x+h) - f(x)\over h})(x \ra x^2)(5)(0.1)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...we pair the `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` with `}
                <NoBreak>
                  <Math>{String.raw`$
x \ra x^2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` with `}
                <NoBreak>
                  <Math>{String.raw`$
5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and the `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` with `}
                <NoBreak>
                  <Math>{String.raw`$
0.1
$`}</Math>
                </NoBreak>
                {String.raw`...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_connection_f_x_h.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...and `}
                <NoBreak>
                  <Math>{String.raw`$
x \ra x^2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
5
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
0.1
$`}</Math>
                </NoBreak>
                {String.raw` become
respectively the values to use for `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` in “`}
                <NoBreak>
                  <Math>{String.raw`$
{f(x + h) - f(x)\over h}
$`}</Math>
                </NoBreak>
                {String.raw`”:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch3_connection_f_x_h_in_computation.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...; evaluating...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{(x \ra x^2)(5 + 0.1) - (x \ra x^2)(5) \over 0.1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...we...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{(x \ra x^2)(5.1) - (x \ra x^2)(5) \over 0.1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...get...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{5.1^2 - 5^2 \over 0.1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...this...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{26.01 - 25 \over 0.1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...`}
                <i>{String.raw`thiiis`}</i>
                {String.raw`...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1.01 \over 0.1} = 1.01 \times 10 = 10.1
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...result! (The answer is: ten point one.)`}</VerticalChunk>
            </Solution>
          </Exercise>
        </Exercises>
      </Chapter3>
    </>
  );
};
export default Article;
