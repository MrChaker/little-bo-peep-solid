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
const Chapter4 = (props: any) => {
  useScrollX();
  useSaveScroll();
  return (
    <>
      <ArticleTitle
        label={`Chapter 4: ` + props.title}
        on_mobile_label={`Chapter 4: ` + props.mobile_title}
      />
      {props.children}
    </>
  );
};

const Article = () => {
  return (
    <>
      <Chapter4 title="Derivatives">
        <Image src="/images/svg_ch4_polaroids.svg"></Image>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Definitions.`}</b>
            {String.raw`
The `}
            <i>{String.raw`derivative`}</i>
            {String.raw` of a function`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f : \rr \ra \rr 
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is a (new) function`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f' : \rr \ra \rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`that gives the slope of `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` at each point. 
In other words`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f'(a)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is the slope of the graph `}
            <NoBreak>
              <Math>{String.raw`$
y = f(x)
$`}</Math>
            </NoBreak>
            {String.raw` at
`}
            <NoBreak>
              <Math>{String.raw`$
x = a
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` And—surprise!—each pair of graphs
above is a pair of the form `}
            <NoBreak>
              <Math>{String.raw`$
y = f(x)
$`}</Math>
            </NoBreak>
            {String.raw` [`}
            <NoBreak>
              <Math>{String.raw`$
=
$`}</Math>
            </NoBreak>
            {String.raw`
“before”], `}
            <NoBreak>
              <Math>{String.raw`$
y = f'(x)
$`}</Math>
            </NoBreak>
            {String.raw` [`}
            <NoBreak>
              <Math>{String.raw`$
=
$`}</Math>
            </NoBreak>
            {String.raw` “after”]. (Meaning,
the “after” graph records the slope of the 
“before” graph.) E.g.:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_explanation1.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`Note that `}
            <NoBreak>
              <Math>{String.raw`$
f'\!
$`}</Math>
            </NoBreak>
            {String.raw` (read “`}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` prime”) remains 
undefined where `}
            <NoBreak>
              <Math>{String.raw`$
y = f(x)
$`}</Math>
            </NoBreak>
            {String.raw` has a sharp “corner” 
and no well-defined slope. By opposition, if 
there is a well-defined tangent line to 
`}
            <NoBreak>
              <Math>{String.raw`$
y = f(x)
$`}</Math>
            </NoBreak>
            {String.raw` at `}
            <NoBreak>
              <Math>{String.raw`$
x = a
$`}</Math>
            </NoBreak>
            {String.raw` the slope of this
tangent line supplies the value of `}
            <NoBreak>
              <Math>{String.raw`$
f'(a)
$`}</Math>
            </NoBreak>
            {String.raw`:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_explanation2.svg"></Image>
          <ImageRight
            src="/images/svg_ch4_explanation2_cloud.svg"
            offset_x="-5em"
            offset_y="1em"
            y="top"
          ></ImageRight>
          <VerticalChunk>{String.raw`In fact,
we can
succinctly describe the derivative by...`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f'(a) = \te{[slope of tangent line to $y = f(x)$ at $x = a$]}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`...with the understanding that `}
            <NoBreak>
              <Math>{String.raw`$
f'(a)
$`}</Math>
            </NoBreak>
            {String.raw` is 
undefined if a tangent line does not exist 
or if the tangent is vertical. But for one 
last asterisk—and speaking of the existence,
or not, of the tangent—note that the endpoint
of a curve does not count as having a tangent,
and therefore leaves a missing value for the 
derivative:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_explanation_one_sided_tangent.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`(In other words, “half-tangents” do not actually 
count as tangents.) `}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Vocabulary.`}</b>
            {String.raw`
A function `}
            <NoBreak>
              <Math>{String.raw`$
f : \rr \ra \rr
$`}</Math>
            </NoBreak>
            {String.raw` is`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`differentiable`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`if `}
            <NoBreak>
              <Math>{String.raw`$
\dom\,f' = \dom\,f
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Also, if `}
            <NoBreak>
              <Math>{String.raw`$
a, b \in \rr
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` 
`}
            <NoBreak>
              <Math>{String.raw`$
a < b
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` is`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw`differentiable on `}
            <NoBreak>
              <Math>{String.raw`$
[a,b]
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`if `}
            <NoBreak>
              <Math>{String.raw`$
[a,b] \subseteq \dom \,f'
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Lastly, `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` is`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw`differentiable at `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`if `}
            <NoBreak>
              <Math>{String.raw`$
a \in \dom\,f'
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Sketching a Derivative.`}</b>
            {String.raw`
Say that you would like to sketch the derivative
of the “before” function from the last “before”/“after” pair above
(the one with the closed endpoints):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_curve_to_sketch.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`One method is simply to eyeball the slope at 
a few points along the curve, plot these 
values and interpolate:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_first_derivative_sketch.svg"></Image>
          <ImageRight src="/images/svg_ch4_polaroid_cloud.svg"></ImageRight>
          <VerticalChunk>{String.raw`...voilà!`}</VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`An alternate approach is to start by
determining intervals on which the derivative
is positive and negative, and then to 
interpolate via the largest (respectively, 
smallest) value of the derivative in each 
interval:`}</VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_second_derivative_sketch_pt1.svg"></Image>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_second_derivative_sketch_pt2.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`The result (at bottom right)
is a charming “robosketch” of the true
derivative! (Well, charming in our opinion,
at least.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Derivative of a constant function.`}</b>
            {String.raw`
A constant function is a function of the form `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x \ra B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for some `}
            <NoBreak>
              <Math>{String.raw`$
B \in \rr
$`}</Math>
            </NoBreak>
            {String.raw` independent of `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw`.
The graph of the constant function is the line `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
y = B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`of slope `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` So`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
(x \ra B)' = (x \ra 0)
$$`}
            <ImageLeft src="/images/svg_ch4_constant_derivative_cloud.svg"></ImageLeft>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`because at each `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
              {String.raw`-value`}
            </NoBreak>
            {String.raw` you find a slope of
`}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` when you look up (down?) at the graph.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`If we refer to`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x \ra 0
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`as the`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`zero function`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`we can summarize the situation by saying that`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`~ the derivative of a constant function
is the zero function ~`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or, more shortly,`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`~ the derivative of a constant is zero ~`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`(the way people usually state it).`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Derivative of an affine function.`}</b>
            {String.raw`
An affine function is a function of the form`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
x \ra Ax + B
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
B \in \rr
$`}</Math>
            </NoBreak>
            {String.raw`.
The graph of `}
            <NoBreak>
              <Math>{String.raw`$
x \ra Ax + B
$`}</Math>
            </NoBreak>
            {String.raw` is a line of 
slope `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` so`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
(x \ra Ax + B)' = (x \ra A)
$$`}
            <ImageLeft src="/images/svg_ch4_affine_derivative_cloud.svg"></ImageLeft>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`because the slope of a line of slope `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` is
`}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` no matter where you put yourself on the
line. In particular, `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
            </NoBreak>
            {String.raw` plays no role in the
derivative! (`}
            <NoBreak>
              <Math>{String.raw`$
\,
$`}</Math>
              {String.raw`Just`}
            </NoBreak>
            {String.raw` like in the case of a
constant function, the derivative leaves no
trace of `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
              {String.raw`'s`}
            </NoBreak>
            {String.raw` value—and for the same reason
that `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
            </NoBreak>
            {String.raw` effects a vertical translation, which
does not change the slope of anything.)`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw`In words:`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw`~ the derivative of the affine function 
`}
            <NoBreak>
              <Math>{String.raw`$
y = ax + b
$`}</Math>
            </NoBreak>
            {String.raw` is the constant function `}
            <NoBreak>
              <Math>{String.raw`$
y = a
$`}</Math>
            </NoBreak>
            {String.raw` ~`}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`Or, flexing our linguistic prowess a tad more:`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`~ the derivative of an affine function is 
the coefficient of its linear term ~`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(The “linear term” of `}
            <NoBreak>
              <Math>{String.raw`$
y = ax + b
$`}</Math>
            </NoBreak>
            {String.raw` is `}
            <NoBreak>
              <Math>{String.raw`$
ax
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` 
of coefficient `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
            </NoBreak>
            {String.raw`.)`}
          </VerticalChunk>
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
(x \ra 3x + 1)' = (x \ra 3)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`as per`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(x \ra Ax + B)' = (x \ra A)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`with `}
              <NoBreak>
                <Math>{String.raw`$
A = 3
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
B = 1
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
(x \ra 12 - x)' = (x \ra -1)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`as per`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(x \ra Ax + B)' = (x \ra A)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`with `}
              <NoBreak>
                <Math>{String.raw`$
A = -1
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
B = 12
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
            <b>{String.raw`Units of the Derivative.`}</b>
            {String.raw`
If units are present, we have`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\te{$y$ axis units for $f'$} \,= {\te{$y$ axis units for $\f$} \over \te{$x$ axis units for $\f$}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`because a value output by `}
            <NoBreak>
              <Math>{String.raw`$
\f'
$`}</Math>
            </NoBreak>
            {String.raw` is the
`}
            <i>{String.raw`slope`}</i>
            {String.raw` of a tangent line attached to the
graph `}
            <NoBreak>
              <Math>{String.raw`$
y = f(x)
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\te{$x$ axis units for $f'$}\, = \rt{0.02}\,\te{$x$ axis units for $f$}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`because an input for `}
            <NoBreak>
              <Math>{String.raw`$
\f'
$`}</Math>
            </NoBreak>
            {String.raw` is, originally, 
an input for `}
            <NoBreak>
              <Math>{String.raw`$
\f
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`For example, if the “before” graph has units 
of...`}</VerticalChunk>
          <ul>
            <li>
              <VerticalChunk>
                {String.raw`seconds on the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` axis, meters on the 
`}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis`}
              </VerticalChunk>
            </li>
          </ul>
          <ImageRight src="/images/svg_ch4_units1_cloud.svg"></ImageRight>
          <VerticalChunk>{String.raw`...then the “after” graph will have units of...`}</VerticalChunk>
          <VerticalChunk indent={true}>
            <ul>
              <li>
                <VerticalChunk>
                  {String.raw`seconds on the `}
                  <NoBreak>
                    <Math>{String.raw`$
x
$`}</Math>
                  </NoBreak>
                  {String.raw` axis, meters per
second on the `}
                  <NoBreak>
                    <Math>{String.raw`$
y
$`}</Math>
                  </NoBreak>
                  {String.raw` axis`}
                </VerticalChunk>
              </li>
            </ul>
            {String.raw`...while if the “before” graph has units of...`}
          </VerticalChunk>
          <ul>
            <li>
              <VerticalChunk>
                {String.raw`years on the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` axis, dollars on the
`}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis`}
              </VerticalChunk>
            </li>
          </ul>
          <ImageLeft src="/images/svg_ch4_units2_cloud.svg"></ImageLeft>
          <VerticalChunk>{String.raw`...then the “after” graph will have units of...`}</VerticalChunk>
          <VerticalChunk indent={true}>
            <ul>
              <li>
                <VerticalChunk>
                  {String.raw`years on the `}
                  <NoBreak>
                    <Math>{String.raw`$
x
$`}</Math>
                  </NoBreak>
                  {String.raw` axis, dollars per
year on the `}
                  <NoBreak>
                    <Math>{String.raw`$
y
$`}</Math>
                  </NoBreak>
                  {String.raw` axis`}
                </VerticalChunk>
              </li>
            </ul>
            {String.raw`...and so on.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`Units might additionally prompt us to refer
to `}
            <NoBreak>
              <Math>{String.raw`$
f'
$`}</Math>
            </NoBreak>
            {String.raw` as the`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`rate of change`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`of `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` or, depending, as the`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`instantaneous`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`rate of change of `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` The latter bit of
emphasis has to do with the fact that, in a
general graph, the slope of the tangent
keeps changing from point to point.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`The second derivative.`}</b>
            {String.raw`
The `}
            <i>{String.raw`second derivative`}</i>
            {String.raw` of `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
            </NoBreak>
            {String.raw` is the derivative
of the derivative of `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` It is written “`}
            <NoBreak>
              <Math>{String.raw`$
f''
$`}</Math>
            </NoBreak>
            {String.raw`”:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\,\,\,f'' = (f')'.
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`Likewise, we have, e.g.,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\begin{align}
\up{0.95}f''' &= (f'')'\\
\up{1.25}f'''' &= (f''')'\\
\up{1.25}f''''\psa' &= (f'''')'\\
\end{align}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`these being, namely, the `}
            <i>{String.raw`third`}</i>
            {String.raw`, `}
            <i>{String.raw`fourth`}</i>
            {String.raw`
and `}
            <i>{String.raw`fifth`}</i>
            {String.raw` derivatives of `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` One can also 
write`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f^{(n)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for the `}
            <NoBreak>
              <Math>{String.raw`$
n
$`}</Math>
              {String.raw`-th`}
            </NoBreak>
            {String.raw` derivative of `}
            <NoBreak>
              <Math>{String.raw`$
f
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` so that, for
example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f^{(7)}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`means the same as`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f'''''''
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`but with the advantage that you don't have to
squint and start re-counting the apostrophes 
several times over.`}</VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 3.`}</b>
              {String.raw`
We have`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              {String.raw`$$
(x \ra 3x + 1)'' = (x \ra 0)
$$`}
              <ImageRight src="/images/svg_ch4_3x_plus_one_and_second_cloud.svg"></ImageRight>
            </MathBlock>
          </Example>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`because, firstly,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(x \ra 3x + 1)' = (x \ra 3)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and, secondly,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(x \ra 3)' = (x \ra 0)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`so that, from start to finish,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
(x \ra 3x + 1)'' =  ((x \ra 3x + 1)')' = (x \ra 3)' = (x \ra 0)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`where we unpeel the onion starting from the
inside. (Physically difficult.)`}</VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 4.`}</b>
              {String.raw`
More generally,`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\,\,\,(x \ra ax + b)'' = (x \ra 0)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for all `}
              <NoBreak>
                <Math>{String.raw`$
a, b \in \rr
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` by a similar computation;
a.k.a.:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <CentralDisplayItalic>
              {String.raw`~ the second derivative of an affine function is zero ~`}
              <ImageLeft src="/images/svg_ch4_adding_statements_cloud.svg"></ImageLeft>
            </CentralDisplayItalic>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Geometric interpretation of the second derivative.`}</b>
            {String.raw`
The sign of the second derivative—whether
it is positive or negative—indicates whether
a graph is “bending upwards” or “bending 
downwards”. Upward-bending graphs have a positive
second derivative, whereas downward-bending graphs
have a negative second derivative:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_bendiness.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`Reason like this: the second derivative is `}
            <del>
              <VerticalChunk>{String.raw`“the rate of change of the rate of change”.`}</VerticalChunk>
            </del>
            {String.raw`Sorry: “the rate of change of the slope”. 
(Same difference.) Ergo, if the second derivative
is positive, the slope is increasing; if the
second derivative is negative, the slope is 
decreasing. Moreover, an`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`increasing`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`slope gives curves a “bending upwards” shape, while a`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`decreasing`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`slope gives curves a “bending downward” shape!`}</VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`To emphasize, if the second derivative is some`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplay>{String.raw`LARGE POSITIVE NUMBER`}</CentralDisplay>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`then the slope is increasing at that rate, 
which could result in a sharp bend upwards
in the graph (unless you are near vertical
already—you can't see the difference between
slope `}
            <NoBreak>
              <Math>{String.raw`$
100
$`}</Math>
            </NoBreak>
            {String.raw` and slope `}
            <NoBreak>
              <Math>{String.raw`$
1000
$`}</Math>
            </NoBreak>
            {String.raw` very well, at most
scales—nor between `}
            <NoBreak>
              <Math>{String.raw`$
-1000
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
-100
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` for that
matter).`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`Likewise, if the second derivative is some`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplay>{String.raw`LARGE NEGATIVE NUMBER`}</CentralDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`then the slope is decreasing at [the absolute 
value of] that rate, which could result in 
a sharp bend downwards in the graph (unless
you are near vertical already, once again,
because verticality can disguise the presence
of a significant change in slope, once again).`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Vocabulary #1.`}</b>
            {String.raw`
Curves with increasing (technically: 
`}
            <i>{String.raw`nondecreasing`}</i>
            {String.raw`) slope are called `}
            <i>{String.raw`convex`}</i>
            {String.raw`, 
while curves with decreasing (technically: 
`}
            <i>{String.raw`nonincreasing`}</i>
            {String.raw`) slope are called `}
            <i>{String.raw`concave`}</i>
            {String.raw`.
Viz:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_convex_concave.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Vocabulary #2.`}</b>
            {String.raw`
An `}
            <i>{String.raw`inflection point`}</i>
            {String.raw` is a point at the
interface between convex and concave sections
of a graph:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_inflection_point.svg"></Image>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 5.`}</b>
              {String.raw`
The fact that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(x \ra 3x + 1)'' = (x \ra 0)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`indicates that the graph`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
y = 3x + 1
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`is neither “bending upwards” nor “bending 
downwards”—`}
              <NoBreak>
                <Math>{String.raw`$
0
$`}</Math>
              </NoBreak>
              {String.raw` is neither positive, nor negative.`}
            </VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`The Second Derivative of Position.`}</b>
            {String.raw`
A graph of the form...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_position_by_time.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`...describes `}
            <i>{String.raw`position as a function of time`}</i>
            {String.raw`
(look at the units); the derivative...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_position_by_time_der.svg"></Image>
          <ImageRight src="/images/svg_ch4_position_by_time_cloud.svg"></ImageRight>
          <VerticalChunk>
            {String.raw`...describes `}
            <i>{String.raw`velocity as a function of time`}</i>
            {String.raw`;
finally, the second derivative...`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_position_by_time_der_der.svg"></Image>
          <ImageLeft src="/images/svg_ch4_position_by_time_der_cloud.svg"></ImageLeft>
          <VerticalChunk>{String.raw`...describes`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`the rate of change of velocity`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`also known as the`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`acceleration`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`as a function of time.`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`Note that the units on the `}
            <NoBreak>
              <Math>{String.raw`$
y
$`}</Math>
            </NoBreak>
            {String.raw` axis of the
second derivative are given by`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{\te{$y$ axis units for $f'$} \over \te{$x$ axis units for $f'$}} = 
{\te{m}/\te{s} \over \te{s}} = 
{\te{m} \over \rt{0.1}\te{s}\!{\,}^2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`because `}
            <NoBreak>
              <Math>{String.raw`$
f'' = (f')'
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` The point is, a tangent
to the graph `}
            <NoBreak>
              <Math>{String.raw`$
y = f'(t)
$`}</Math>
            </NoBreak>
            {String.raw` has a “rise” measured
in meters per second and a “run” measured in 
seconds:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Image src="/images/svg_ch4_position_by_time_tangent.svg"></Image>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`The ratio “rise over run” has the form`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{\te{m}/\te{s} \over \te{s}} 
= {\te{m} \over \te{s}} \times {1 \over \te{s}}
= {\te{m} \over \te{s}\!{\,}^2}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`which produces the above-mentioned units of
the second derivative. Also note that a ratio of
the form`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{\te{difference in velocity} \over \te{amount of time}}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`is, indeed, an acceleration, in that acceleration
is defined as “the increase in velocity per unit 
time”.`}</VerticalChunk>
          <VerticalChunk
            indent={true}
          >{String.raw`To summarize:`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`~ velocity is the derivative of position ~`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`~ acceleration is the derivative of velocity ~`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            <StarDivider></StarDivider>
            {String.raw``}
            <b>{String.raw`Note.`}</b>
            {String.raw`
The exotic units`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
%\left[{\te{m} \over \,\te{s}\!{\,}^2}\right]
{\te{m} \over \,\te{s}\!{\,}^2}
%\te{m}/\te{s}\!{\,}^2
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`can be read`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`meters per second squared`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`which sounds pretty cryptic, unfortunately, or`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`meters per second per second`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`which is better, or (slight difference!)`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`meters per second, per second`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which is even better because it “shows” acceleration
to be a number of m`}
            <NoBreak>
              <Math>{String.raw`$
/
$`}</Math>
              {String.raw`s`}
            </NoBreak>
            {String.raw` per second. (Acceleration `}
            <i>{String.raw`is`}</i>
            {String.raw`
a number of m`}
            <NoBreak>
              <Math>{String.raw`$
/
$`}</Math>
              {String.raw`s`}
            </NoBreak>
            {String.raw` per second, no?)`}
          </VerticalChunk>
          <div class="spacer"></div>
          <Example>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Example 6.`}</b>
              {String.raw`
Over a period of `}
              <NoBreak>
                <Math>{String.raw`$
10
$`}</Math>
                {String.raw`s,`}
              </NoBreak>
              {String.raw` an object that is
accelerating at a constant rate of`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
2{\te{m}/\te{s}\!{\,}^2}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`increases its velocity by`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              {String.raw`$$
(2{\te{m}/\te{s}\!{\,}^2}) \times\, (10\te{s}) = 20{\te{m}/\te{s}}
$$`}
              <ImageRight src="/images/svg_ch4_unit_cancellation_cloud.svg"></ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`according to the template`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(\te{rate of change}) \times \te{(amount of time)}\\
= \te{(amount of change)}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`or, more specifically,`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(\te{acceleration}) \times (\te{amount of time}) =\\ (\te{change in velocity})
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`since acceleration is the rate of change of
velocity.`}</VerticalChunk>
          </Example>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`The Jerk.`}</b>
            {String.raw`
The rate of change of acceleration has a
name as well, being known as the`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`jerk`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`in physics. The units of jerk (or “the”
units of jerk, since any units of same 
`}
            <i>{String.raw`dimension`}</i>
            {String.raw` would do as well) are`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{\te{m} \over \,\te{s}\!{\,}^3}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`meters per second, per second, per second`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which is mildly amusing. Basically, the
jerk specifies how many `}
            <i>{String.raw`meters per second,
per second`}</i>
            {String.raw` (a measure of acceleration!)
is being gained or lost `}
            <i>{String.raw`per second`}</i>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`The word “jerk” is aptly chosen,
too, considering that people don't lose 
balance under constant acceleration, but, 
rather, when some some `}
            <i>{String.raw`jerk`}</i>
            {String.raw` occurs in 
the movement of their train or subway car,
etc. In fact,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`constant acceleration`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`zero jerk`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`are synonymous, insofar as the everyday 
world is concerned—which is good, because
these notions are also equivalent in the
mathematical realm, what with jerk being
the derivative of acceleration!`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw``}
            <b>{String.raw`Postscript: Sums, Products, Quotients,
and Differences of Functions.`}</b>
            {String.raw`
Coming briefly back to Chapter 3-related
matters, if`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f, g : \rr \ra \rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`then`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f \circ g = (x \ra f(g(x)))
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f + g = (x \ra f(x) + g(x))
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
fg = (x \ra f(x)g
(x))
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
{f/g} = (x \ra {f(x)/g(x)})
$$`}</MathBlock>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f - g = (x \ra f(x) - g(x))
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`with each equation being a `}
            <i>{String.raw`definition`}</i>
            {String.raw`. 
The notation`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f \circ g
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`goes back to Exercise 5 of Chapter 3, with
the little circle “`}
            <NoBreak>
              <Math>{String.raw`$
\circ
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` being known as
the `}
            <i>{String.raw`composition operator`}</i>
            {String.raw`, while the sum`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
f + g
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and product`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
fg
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`of functions already appear in Exercise 18 of
Chapter 3, also. On the other hand, the`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`quotient`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(i.e., `}
            <NoBreak>
              <Math>{String.raw`$
f/g
$`}</Math>
              {String.raw`)`}
            </NoBreak>
            {String.raw` and`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`difference`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(i.e., `}
            <NoBreak>
              <Math>{String.raw`$
f - g
$`}</Math>
              {String.raw`)`}
            </NoBreak>
            {String.raw` of two functions from `}
            <NoBreak>
              <Math>{String.raw`$
\rr
$`}</Math>
            </NoBreak>
            {String.raw` to
`}
            <NoBreak>
              <Math>{String.raw`$
\rr
$`}</Math>
            </NoBreak>
            {String.raw` appear here for the first time! (We are
“completing our collection”.)`}
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
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
          ]}
        >
          <Exercise exercise_number={0}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 1.`}</b>
              {String.raw`
Sketch the derivative of a function with the
following graph (what `}
              <i>{String.raw`looks`}</i>
              {String.raw` like a sharp corner
`}
              <i>{String.raw`is`}</i>
              {String.raw` a sharp corner):`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_slope_one_half_see_saw.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={0}>
              <VerticalChunk>{String.raw`That would be:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_slope_one_half_see_saw_derivative.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(The derivative is `}
                <NoBreak>
                  <Math>{String.raw`$
1/2
$`}</Math>
                </NoBreak>
                {String.raw` when the slope is `}
                <NoBreak>
                  <Math>{String.raw`$
1/2
$`}</Math>
                </NoBreak>
                {String.raw`,
is `}
                <NoBreak>
                  <Math>{String.raw`$
-1/2
$`}</Math>
                </NoBreak>
                {String.raw` when the slope is `}
                <NoBreak>
                  <Math>{String.raw`$
-1/2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and is undefined at
the corners.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={1}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 2.`}</b>
              {String.raw`
Would the derivative of`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
y = {1\over x}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`be a very large negative number, or a very
large positive number, near `}
              <NoBreak>
                <Math>{String.raw`$
x = 0
$`}</Math>
                {String.raw`?`}
              </NoBreak>
              {String.raw` Or would
it depend on which side of 0 you are?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={1}>
              <VerticalChunk>
                {String.raw`The graph of `}
                <NoBreak>
                  <Math>{String.raw`$
y = {1 \over x}
$`}</Math>
                </NoBreak>
                {String.raw` looks like so:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_over_x.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`As one can see, the slope is very negative
near `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` on either side. So the answer is:
“very large negative”.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={2}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 3.`}</b>
              {String.raw`
Sketch the`}
            </VerticalChunk>
            <div class="spacer"></div>
            <CentralDisplayItalic>{String.raw`second`}</CentralDisplayItalic>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`derivative of the graph in Exercise 1.`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={2}>
              <VerticalChunk>{String.raw`The second derivative is zero wherever the
first derivative is flat, and is undefined
wherever the first derivative is undefined;
this gives the second derivative the following 
pockmarked appearance:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_slope_one_half_see_saw_second_derivative.svg"></Image>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
Taking even further derivatives produces
the same graph back, over and over again.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
“first derivative” is a synonym of “derivative”. `}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={3}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 4.`}</b>
              {String.raw`
If we pretend that the graph of Exercise 1
depicts the `}
              <del>
                <VerticalChunk>{String.raw`distance that a car has traveled
as a function of time,`}</VerticalChunk>
              </del>
              {String.raw`&ensp;position of a car as a function of 
time, with hours (hr) on the `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
                {String.raw`-axis`}
              </NoBreak>
              {String.raw` 
and kilometers (km) on the `}
              <NoBreak>
                <Math>{String.raw`$
y
$`}</Math>
                {String.raw`-axis,`}
              </NoBreak>
              {String.raw` what
do the units become on the axes of the first
and second derivatives?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={3}>
              <VerticalChunk>
                {String.raw`The units on the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis become kilometers,
kilometers per hour, and kilometers per
hours squared (or “kilometers per hour, per
hour”), including the first graph. (Each time
another derivative is taken, divide the
units of the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis by the units of the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` axis.) These are the position, velocity,
and acceleration of the car as a function
of time:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units.svg"></Image>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units_derivative.svg"></Image>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units_second_derivative.svg"></Image>
            </Solution>
          </Exercise>
          <Exercise exercise_number={4}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 5.`}</b>
              {String.raw`
Is the following equation correct, incorrect,
or nonsensical?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(x \ra x + 1) \,+\, (u \ra 2u + 1) \,=\, (t \ra 3t + 2)
$$`}</MathBlock>
            <div class="spacer"></div>
            <Solution solution_number={4}>
              <VerticalChunk>{String.raw`The equation is true!
Syntatically,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x \ra x + 1) \,+\, (u \ra 2u + 1)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is a`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`sum of functions`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because `}
                <NoBreak>
                  <Math>{String.raw`$
x \ra x + 1
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
u \ra 2u + 1
$`}</Math>
                </NoBreak>
                {String.raw` are
both functions. Now by definition, the sum`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f + g
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`of functions `}
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
                {String.raw` is the function`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x \ra f(x) + g(x)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`that maps a number to the sum of the individual
values of the functions. So—for example—`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
& \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(5) \\
=& \,\,\,(x \ra x + 1)(5) + (u \ra 2u + 1)(5) \up{1.5} \\
=& \,\,\,(5 + 1) + (2\cdot 5 + 1) \up{1.5} \\
=& \,\,\,3\cdot 5 + 2 = 17 \up{1.5}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and—with a general input `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`—`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
& \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(t) \\
=& \,\,\,(x \ra x + 1)(t) + (u \ra 2u + 1)(t) \up{1.5} \\
=& \,\,\,(t + 1) + (2t + 1) \up{1.5} \\
=& \,\,\,3t + 2 \up{1.5}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`which implies that, indeed,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(x \ra x + 1) \,+\, (u \ra 2u + 1)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is the function that maps each real number `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
3t + 2
$`}</Math>
                </NoBreak>
                {String.raw`,
i.e., is equal to the function `}
                <NoBreak>
                  <Math>{String.raw`$
t \ra 3t + 2
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (!!)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
One can also do the main computation with `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`
in place of `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
& \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(x) \\
=& \,\,\,(x \ra x + 1)(x) + (u \ra 2u + 1)(x) \up{1.5} \\
=& \,\,\,(x + 1) + (2x + 1) \up{1.5} \\
=& \,\,\,3x + 2 \up{1.5}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Here we have two different `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`'s:`}
                </NoBreak>
                {String.raw` the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` that
denotes the input, and the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` that is used as
a placeholder to describe how the first function
acts.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={5}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 6.`}</b>
              {String.raw`
Complete the missing units for each strip
below, based on those units that are given:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_missing_units.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={5}>
              <VerticalChunk>
                {String.raw`The pattern to respect is that, each time 
you take a derivative, the units on the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`
axis stay the same, while the units on the
`}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis become divided by those on the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` 
axis. This gives the unique solutions:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_missing_units_solution.svg"></Image>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
A unit of “`}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is a`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`dimensionless`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`unit. Dimensionless units arise when 
quantities are divided by like quantities.
Think of dimensionless quantities as “pure 
fractions” or “pure ratios”. (Percentages
are dimensionless—in fact the term`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`percentage`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is synonymous with`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`dimensionless ratio`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`though if you spoke to people about 
“dimensionless ratios” they would look at 
you funny. Also percentages are a system of
notation, whereby the symbol “%” means 
“divide the preceding number by 100, in 
order to discover the numerical value of 
the ratio I'm talking about”.) (To drive
it home: In Chinese, the written expressions 
“`}
                <NoBreak>
                  <Math>{String.raw`$
23\%
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` and “`}
                <NoBreak>
                  <Math>{String.raw`$
23/100
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` are 
indistinguishable when read out loud; they
are both  read “`}
                <NoBreak>
                  <Math>{String.raw`$
23
$`}</Math>
                </NoBreak>
                {String.raw` over `}
                <NoBreak>
                  <Math>{String.raw`$
100
$`}</Math>
                  {String.raw`”;`}
                </NoBreak>
                {String.raw` that is
the simple `}
                <i>{String.raw`&`}</i>
                {String.raw` correct way!)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={6}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 7.`}</b>
              {String.raw`
Among the functions below, which is the
zeroth, first, and second derivative? 
(I.e., which is `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
f'
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
f''
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` 
assuming that relationship exists.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_position_by_time_find_the_order.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={6}>
              <VerticalChunk>
                {String.raw`The graphs are already in the right order 
(hehe): if “`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is the original function 
then `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` is on the left, `}
                <NoBreak>
                  <Math>{String.raw`$
f'
$`}</Math>
                </NoBreak>
                {String.raw` is in the 
middle, and `}
                <NoBreak>
                  <Math>{String.raw`$
f''
$`}</Math>
                </NoBreak>
                {String.raw` is on the right:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_position_by_time_find_the_order_answer.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`For example, the graph on the left 
has a slope that starts at `}
                <NoBreak>
                  <Math>{String.raw`$
\sim\!-1
$`}</Math>
                </NoBreak>
                {String.raw` and
ends at `}
                <NoBreak>
                  <Math>{String.raw`$
\sim\!1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` while those are the
values at which the graph in the middle
starts and ends (and not coincidentally,
since the graph in the middle is the
derivative of the graph on the left!):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_position_by_time_find_the_order_first_pair.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Moreover the middle graph has slope
close to `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` at either end, and some
slope near `}
                <NoBreak>
                  <Math>{String.raw`$
1.5
$`}</Math>
                </NoBreak>
                {String.raw` or `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw` towards the middle,
matching the `}
                <i>{String.raw`values`}</i>
                {String.raw` of the graph
on the right:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_position_by_time_find_the_order_second_pair.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(Taking one more derivative would produce a
zigzag, by the way.)`}
                <ImageRight src="/images/svg_ch4_position_by_time_find_the_order_cloud.svg"></ImageRight>
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={7}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 8.`}</b>
              {String.raw`
Given these graphs...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_sketch_the_middle_a.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`...what can you say about `}
              <NoBreak>
                <Math>{String.raw`$
g'(x)
$`}</Math>
              </NoBreak>
              {String.raw`?
(Produce the best sketch of `}
              <NoBreak>
                <Math>{String.raw`$
g'(x)
$`}</Math>
              </NoBreak>
              {String.raw` that
you can, taking into account all the
information above.) (Don't get us wrong:
You don't `}
              <i>{String.raw`need`}</i>
              {String.raw` the second derivative
to sketch the first derivative, but if
you're a human and not a machine, it can
help!)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={7}>
              <VerticalChunk>
                {String.raw`To start with, the slope of `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                </NoBreak>
                {String.raw` seems to be
about `}
                <NoBreak>
                  <Math>{String.raw`$
-1.5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` and (a bit greater than) `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw`
at `}
                <NoBreak>
                  <Math>{String.raw`$
x = -2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
x = 2
$`}</Math>
                </NoBreak>
                {String.raw` respectively:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_a_sol1.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`This already gives us three points from which
to interpolate a basic approximation to the graph 
`}
                <NoBreak>
                  <Math>{String.raw`$
y = g'(x)
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_a_sol2.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`But the graph of `}
                <NoBreak>
                  <Math>{String.raw`$
g''(x)
$`}</Math>
                </NoBreak>
                {String.raw` indicates more,
namely that `}
                <NoBreak>
                  <Math>{String.raw`$
g'(x)
$`}</Math>
                </NoBreak>
                {String.raw` has a slope that rises 
from `}
                <NoBreak>
                  <Math>{String.raw`$
\approx 0.2
$`}</Math>
                </NoBreak>
                {String.raw` near the left edge of 
the graph up to `}
                <NoBreak>
                  <Math>{String.raw`$
1.3
$`}</Math>
                </NoBreak>
                {String.raw` at `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0.5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` before 
falling again to `}
                <NoBreak>
                  <Math>{String.raw`$
0.6
$`}</Math>
                </NoBreak>
                {String.raw` past `}
                <NoBreak>
                  <Math>{String.raw`$
x = 2
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_a_sol3.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`As a second step, we thus “bend into shape”
our previous sketch to produce these slopes...`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_a_sol4.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...achieving our final answer. `}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw` For reference, the actual 
derivative looks like so:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_a_sol5.svg"></Image>
            </Solution>
          </Exercise>
          <Exercise exercise_number={8}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 9.`}</b>
              {String.raw`
Given these graphs...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_sketch_the_middle_b.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`...sketch `}
              <NoBreak>
                <Math>{String.raw`$
y = h'(x)
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` analogously to
Exercise 10.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={8}>
              <VerticalChunk>
                {String.raw`Firstly, the graph of `}
                <NoBreak>
                  <Math>{String.raw`$
h(x)
$`}</Math>
                </NoBreak>
                {String.raw` seems to have
slope `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` around `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0.6
$`}</Math>
                </NoBreak>
                {String.raw`...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol1.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...which gives us one data point on the
curve `}
                <NoBreak>
                  <Math>{String.raw`$
y = h'(x)
$`}</Math>
                </NoBreak>
                {String.raw` to start with...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol2.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...moreover, by the graph of `}
                <NoBreak>
                  <Math>{String.raw`$
h''(x)
$`}</Math>
                </NoBreak>
                {String.raw`,
the slope of `}
                <NoBreak>
                  <Math>{String.raw`$
h'(x)
$`}</Math>
                </NoBreak>
                {String.raw` is near `}
                <NoBreak>
                  <Math>{String.raw`$
-1/3
$`}</Math>
                </NoBreak>
                {String.raw` on an
interval that is approximately (say)
`}
                <NoBreak>
                  <Math>{String.raw`$
[-0.85,0.7]
$`}</Math>
                </NoBreak>
                {String.raw`....`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol3.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...so, as a second step, we can extend
the graph of `}
                <NoBreak>
                  <Math>{String.raw`$
h'(x)
$`}</Math>
                </NoBreak>
                {String.raw` by a segment of slope
`}
                <NoBreak>
                  <Math>{String.raw`$
-1/3
$`}</Math>
                </NoBreak>
                {String.raw` on this interval:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol4.svg"></Image>
              <ImageLeft src="/images/svg_ch4_sketch_the_middle_b_cloud.svg"></ImageLeft>
              <VerticalChunk>
                {String.raw`(To achieve a passable slope of `}
                <NoBreak>
                  <Math>{String.raw`$
-1/3
$`}</Math>
                </NoBreak>
                {String.raw` we
modeled ourselves on a nearby grid segment.) 
Next, `}
                <NoBreak>
                  <Math>{String.raw`$
h(x)
$`}</Math>
                </NoBreak>
                {String.raw` has slope `}
                <NoBreak>
                  <Math>{String.raw`$
\approx 1.2
$`}</Math>
                </NoBreak>
                {String.raw` at
`}
                <NoBreak>
                  <Math>{String.raw`$
x = -2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and slope `}
                <NoBreak>
                  <Math>{String.raw`$
\approx -0.9
$`}</Math>
                </NoBreak>
                {String.raw` (?) at
`}
                <NoBreak>
                  <Math>{String.raw`$
x = 2
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol5.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`This gives us two more points on the graph
`}
                <NoBreak>
                  <Math>{String.raw`$
y = h'(x)
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol6.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Then, because the second derivative has
value `}
                <NoBreak>
                  <Math>{String.raw`$
\approx -1/3
$`}</Math>
                </NoBreak>
                {String.raw` for `}
                <NoBreak>
                  <Math>{String.raw`$
x \leq -1.6
$`}</Math>
                </NoBreak>
                {String.raw`
(about) and for `}
                <NoBreak>
                  <Math>{String.raw`$
x \geq 1.5
$`}</Math>
                </NoBreak>
                {String.raw` (about)...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol7.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...we extend these two new data points by
segments of slope `}
                <NoBreak>
                  <Math>{String.raw`$
-1/3
$`}</Math>
                </NoBreak>
                {String.raw`...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol8.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...on the relevant intervals. (I.e., for 
`}
                <NoBreak>
                  <Math>{String.raw`$
x \leq -1.6
$`}</Math>
                </NoBreak>
                {String.raw` and for `}
                <NoBreak>
                  <Math>{String.raw`$
x \geq 1.5
$`}</Math>
                  {String.raw`.)`}
                </NoBreak>
                {String.raw` The 
last step is to join the existing segments 
by some kind of “connector curves” of 
yet-to-be-determined shape:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol9.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Since `}
                <NoBreak>
                  <Math>{String.raw`$
h''(x)
$`}</Math>
                </NoBreak>
                {String.raw` shows that the two 
connectors have slopes of about `}
                <NoBreak>
                  <Math>{String.raw`$
-1/3
$`}</Math>
                </NoBreak>
                {String.raw`
at their edges and slopes of about `}
                <NoBreak>
                  <Math>{String.raw`$
-1.4
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
-1.6
$`}</Math>
                </NoBreak>
                {String.raw` (respectively) near their
middles...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol10.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...our final answer, given by the
following sketch, is obtained by 
“bending into shape” the connector curves...`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol11.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...to give them a slope of `}
                <NoBreak>
                  <Math>{String.raw`$
-1/3
$`}</Math>
                </NoBreak>
                {String.raw` at
their endpoints, and slopes of `}
                <NoBreak>
                  <Math>{String.raw`$
-1.4
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
`}
                <NoBreak>
                  <Math>{String.raw`$
-1.6
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` respectively, in their middles.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
Here is the actual graph of `}
                <NoBreak>
                  <Math>{String.raw`$
h'
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_sketch_the_middle_b_sol12.svg"></Image>
            </Solution>
          </Exercise>
          <Exercise exercise_number={9}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 10.`}</b>
              {String.raw`
If you scale the graph of a function `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw`
vertically by a factor `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
                {String.raw`—i.e.,`}
              </NoBreak>
              {String.raw` multiply
each output by `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
                {String.raw`—is`}
              </NoBreak>
              {String.raw` the derivative 
also scaled by `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
              </NoBreak>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={9}>
              <VerticalChunk>
                {String.raw`Yes, this is the case. For a joke way
of seeing it, here is a graph of a 
putative function `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` before and after
scaling:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_scaling_figure.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The second graph truly is the first
graph vertically scaled by a factor `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw`,
because the scale on the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis has
been doubled. This means that the ratio`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\te{rise}\over \te{run}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`has doubled in the second graph, because
“rise” has doubled (each `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate
is twice as large!), whereas “run” stays
the same. (So the slope of the tangent has
doubled, so the derivative is doubled.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={10}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 11.`}</b>
              {String.raw`
Where is the rate of change of the function
below, on the part shown, greatest? And
where is the`}
            </VerticalChunk>
            <div class="spacer"></div>
            <CentralDisplayItalic>{String.raw`rate of change of the rate of change`}</CentralDisplayItalic>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`greatest?`}</VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_narrow_and_less_narrow_bends.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={10}>
              <VerticalChunk>{String.raw`The rate of change is the slope, which
is greatest along the right-hand portion
of the curve:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_narrow_and_less_narrow_bends_steepest.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`On the other hand,`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`the rate of change of the rate of change`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`[a.k.a., second derivative] is the rate
of change  of the slope, and that will
be greatest at the first bend of the curve,
where the slope is changing at the fastest 
rate:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_narrow_and_less_narrow_bends_curviest.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(Well, believe us or not, but we're right!)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={11}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 12.`}</b>
              {String.raw`
In the following graph, which curve might 
be a derivative of which other curve?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_cosine_curves.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={11}>
              <VerticalChunk>{String.raw`As it happens—and by the exact method
that we used to generate these curves—the
blue is the derivative of the red:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_blue_red_only.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Likewise, the derivative of the blue
is the yellow, the derivative of the yellow
is the green, and the derivative of the 
green is the red, at which point it starts
all over again! (For example, the 
`}
                <i>{String.raw`fifth`}</i>
                {String.raw` derivative of the red curve
is the blue, because the `}
                <i>{String.raw`fourth`}</i>
                {String.raw`
derivative of the red curve is itself.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
After all, the slope of these curves
keeps oscillating between two fixed 
values—the “most slanted up” and the 
“most slanted down”—so their derivatives
were always going to have an oscillatory
pattern, as well.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
Because “most slanted up” occurs when
the curve has not yet crested, but when
the derivative `}
                <i>{String.raw`is already`}</i>
                {String.raw` in the
process of cresting (that's why it's
“most slanted up”), the derivative is
ahead of the original curve by half a
bump, not the other way around:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_cresting.svg"></Image>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 3.`}</i>
                {String.raw`
When we examine the velocity of a
particle moving in the plane, we examine
the velocities of its shadow on the
`}
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
                </NoBreak>
                {String.raw`-axes:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_two_dimensional_vel.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The velocities of the two shadows
encode the overall “two-dimensional”
velocity of the particle. (No need for 
quotes, really: the velocity `}
                <i>{String.raw`is`}</i>
                {String.raw` 
two-dimensional.) `}
              </VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`Here's another point of view: just like`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`position`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`
is encoded by a pair of numbers—sometimes
known as the `}
                <i>{String.raw`position vector`}</i>
                {String.raw` by
the way, where “vector” is a term of art
for “pair of numbers”—so the`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`velocity`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is encoded by a pair of numbers—equally
known as the `}
                <i>{String.raw`velocity vector`}</i>
                {String.raw`—which
is no coincidence, because the first
coordinate of the`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`velocity vector`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is the derivative of the first coordinate
of the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`position vector`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and likewise for the second coordinate—two
coordinates, two rates of change!`}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Geometrically, if we use the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-`}
                </NoBreak>
                {String.raw` and
`}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-components`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
v_x
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
v_y
$`}</Math>
                </NoBreak>
                {String.raw` of the 
velocity to draw an arrow emanating 
from a point on the curve, this arrow
is tangent to the curve, and the`}
                <ImageRight src="/images/svg_ch4_cosine_curves_tangent_velocity_cloud.svg"></ImageRight>
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`length`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of the arrow is the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`speed`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`of the particle at that moment in time.
More precisely, if you let the particle
drift at the exact same `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-`}
                </NoBreak>
                {String.raw` and 
`}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-velocities`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
v_x
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
v_y
$`}</Math>
                </NoBreak>
                {String.raw` that you
measured at the root of the arrow for
one unit of time, the particle would 
cover exactly the length of the arrow
in that one unit of time, no more no less, 
because the particle would cover `}
                <NoBreak>
                  <Math>{String.raw`$
v_x
$`}</Math>
                </NoBreak>
                {String.raw`
units in `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
v_y
$`}</Math>
                </NoBreak>
                {String.raw` units in `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`.
And speed being`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`distance per unit time`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`the length of the arrow is, therefore,
the speed!`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`Now consider not one but four particles,
going around a unit circle in clockwise
fashion, 90° apart in phase, at unit 
speed (“unit speed” = speed 1, “unit 
circle” = radius 1) (ps: We center the
circle at the origin):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_unit_circle.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`position vectors`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of the particles are as follows:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_unit_circle_position_vectors.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(You can't really see it so well, but
each arrow originates at `}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                  {String.raw`.)`}
                </NoBreak>
                {String.raw` While
the`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`velocity vectors`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`are as follows:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_unit_circle_velocity_vectors.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(Like the position vectors, the 
velocity vectors keep changing instant by 
instant—this is the subtlety of calculus!)
The velocity vectors have length `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw` because
the speed is `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <i>{String.raw`&`}</i>
                {String.raw` are brushed
in the direction of travel.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`(Nb: When we draw a vector as an arrow
we mean that the first coordinate of the
vector is equal to the horizontal 
displacement from the tail of the arrow
to the head of the arrow, and likewise
that the second coordinate is equal to the
vertical displacement from the tail of the
arrow to the head of the arrow.)`}
                <ImageRight src="/images/svg_ch4_cosine_curves_vector_illustration_cloud.svg"></ImageRight>
              </VerticalChunk>
              <VerticalChunk>
                {String.raw`Due to the 90° rotations and uniform 
lengths of `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` one particle's velocity
vector is another particle's position
vector; as one example, the red particle's
velocity vector is the blue particle's 
position vector:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_unit_circle_equality.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`From the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinates,`}
                </NoBreak>
                {String.raw` for example,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the velocity in `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` of the red particle
is the position in `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` of the blue particle`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`at any given moment in time. This also
means:`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the rate of change of the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate
of the red particle is the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate
of the blue particle`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...because “velocity in `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is the same
as “rate of change of the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate”.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Concretely, if you graph the
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinates`}
                </NoBreak>
                {String.raw` of the red and blue 
particles on the same graph, the rate of
change of the red particle's `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate
will equal the value of the blue particle's
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate.`}
                </NoBreak>
                {String.raw` These are the reds and blue
curves from the problem statement, if we
start the red particle at position`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(1, 0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`at time `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_verified.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`If we add the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinates`}
                </NoBreak>
                {String.raw` of the green
and yellow particles, we find the graph
from the problem statement!`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 4.`}</i>
                {String.raw`
If needed, here is an illustration of 
one `}
                <NoBreak>
                  <Math>{String.raw`$
360^\circ
$`}</Math>
                </NoBreak>
                {String.raw` rotation of the particles
of Note 3,  with each curve being an 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_rolling_wheel.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(If the above just looks like a 
confusing mess then don't sweat it—it's
not that important.)`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 5.`}</i>
                {String.raw`
To reiterate, take a look at this
figure again:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_curves_cresting.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The derivative is`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`ahead`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`of the red particle, so that 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinates`}
                </NoBreak>
                {String.raw` you see `}
                <i>{String.raw`now`}</i>
                {String.raw` on the
blue particle will be seen `}
                <i>{String.raw`a little later`}</i>
                {String.raw`
on the red particle! (In particular, if you
wanted to generate the same curves with a
counterclockwise rotation, you could do that,
but you would have to reverse the order of
the particles around the circle to keep the
blue particle ahead of the red particle,
the yellow particle ahead of the blue 
particle, etc.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={12}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 13.`}</b>
              {String.raw`
How can we generate the following set of
curves by rotating points around a circle,
and tracking their `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
                {String.raw`-coordinates?`}
              </NoBreak>
              {String.raw` (This
graph is an exact `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
              </NoBreak>
              {String.raw`&#x200b;`}
              <NoBreak>
                <Math>{String.raw`$
\times
$`}</Math>
              </NoBreak>
              {String.raw` [“two
x”] vertical dilation of the graph in Exercise
12.) Should we use a circle of radius `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
              </NoBreak>
              {String.raw`,
or make the points go twice as fast? Or both?
Or something else yet?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_scaled_cosine_curves.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={12}>
              <VerticalChunk>
                {String.raw`The values oscillate between `}
                <NoBreak>
                  <Math>{String.raw`$
+2
$`}</Math>
                </NoBreak>
                {String.raw` and
`}
                <NoBreak>
                  <Math>{String.raw`$
-2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` so we need a circle of radius `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw`
to generate these curves. Also the
values go through one cycle in the same 
amount of time as the particles of
Exercise 12, but the circle has twice the 
circumference (having twice the radius),
so the particles are going twice as fast!
(I.e.: speed 2, since the particles of
Exercise 12 have unit speed.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
In this and in the previous exercise the
units of time and distance are “anonymous”: 
distance could be meters, kilometers, or
anything, and time could be seconds, hours,
etc—it doesn't matter. However, one should
be aware that what amounts to`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`unit speed`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`under one set of units is no longer “unit
speed” under a different set of units—this
is not a “physical” property of the 
particles, but, rather, a “mathematical”
property that holds only for one specific
“tweaking” of the units.`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={13}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 14.`}</b>
              {String.raw`
Exercise 12 exhibits a function `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
                {String.raw`—in`}
              </NoBreak>
              {String.raw` fact,
four different functions `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
                {String.raw`—such`}
              </NoBreak>
              {String.raw` that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f' \ne f
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`and`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f'' \ne f
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`and`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f''' \ne f
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`but`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f^{(4)} = f
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`surprise, surprise! Can you do the same with
“`}
              <NoBreak>
                <Math>{String.raw`$
5
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` instead of “`}
              <NoBreak>
                <Math>{String.raw`$
4
$`}</Math>
                {String.raw`”?`}
              </NoBreak>
              {String.raw` I.e., find a function
`}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` such that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f^{(n)} \ne f
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for `}
              <NoBreak>
                <Math>{String.raw`$
n = 1, 2, 3, 4
$`}</Math>
              </NoBreak>
              {String.raw` but`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f^{(5)} = f
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...?`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={13}>
              <VerticalChunk>
                {String.raw`We can naïvely try to imitiate how the
curves of Exercise 16 are generated by
placing five equally spaced particles
around the unit circle (“the” unit circle
is the one centered at `}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` by
convention), instead of 4:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_position_vectors.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The idea would be that the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`velocity vector`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of the red particle is the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`position vector`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of the blue particle, 
likewise for the blue and yellow particles,
and so on. (Position vectors shown above.)
For example, at the instant above, the
velocity vectors would be as follows:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_velocity_vectors.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The velocity vectors are`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplay>{String.raw`NOT`}</CentralDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`tangent to the unit circle, and so the
particles will leave the circle!
(But that's OK.) In one-tenth a unit
of time, for example, the particles would
travel approximately one-tenth their
velocity vectors, that would bring them
to approximately these new positions:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_1_10th.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In the next one-tenth unit of time we 
can apply a similar approximation again,
advancing the particles by `}
                <NoBreak>
                  <Math>{String.raw`$
{1\over 10}
$`}</Math>
                </NoBreak>
                {String.raw`th
of [the current approximation to] their
velocity vectors. Skipping the construction
lines:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_2_10th.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Applying the same process for `}
                <NoBreak>
                  <Math>{String.raw`$
8
$`}</Math>
                </NoBreak>
                {String.raw` more
steps:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_10_10th.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`To be clear, in the above figure, the
position of the red particle at, say, the
fifth step...`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_5_10th.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...is obtained by starting from the red
particle's position at the fourth step...`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_4_10th.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...and adding one-tenth of the approximation
that we have to the red particle's velocity
vector at that moment, that approximation
being namely the blue particle's position 
vector at the fourth step (`}
                <NoBreak>
                  <Math>{String.raw`$
t = {4\over 10}
$`}</Math>
                </NoBreak>
                {String.raw`)...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_4_10th_b.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...and we do the same for each particle,
to advance to the next step.`}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`If we stop `}
                <NoBreak>
                  <Math>{String.raw`$
10
$`}</Math>
                </NoBreak>
                {String.raw` times as often,
advancing the clock by `}
                <NoBreak>
                  <Math>{String.raw`$
{1\over 100}
$`}</Math>
                  {String.raw`th`}
                </NoBreak>
                {String.raw` of
a unit of time at each step, the same figure
becomes just a blur (still going from
`}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
t = 1
$`}</Math>
                </NoBreak>
                {String.raw`):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_100_100th_blur.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`To visualize such a fine-grained
approximation we need to revert to drawing
the particles as points. In the following
figure the colored paths are points that
come from a “`}
                <NoBreak>
                  <Math>{String.raw`$
{1\over 100}
$`}</Math>
                  {String.raw`th”`}
                </NoBreak>
                {String.raw` approximation,
while the orange dots are the old positions
obtained from a “`}
                <NoBreak>
                  <Math>{String.raw`$
{1\over 10}
$`}</Math>
                </NoBreak>
                {String.raw`th”
approximation:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_100_100th_points.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Zooming in a bit (or else we still can't
see anything):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_after_100_100th_zoomed.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In any case, even the “`}
                <NoBreak>
                  <Math>{String.raw`$
{1\over 100}
$`}</Math>
                </NoBreak>
                {String.raw`th”
approximation is just an approximation,
but the point is that such approximations
do converge to a set of “true” particle
paths, as pictured in Fig`}
                <NoBreak>
                  <Math>{String.raw`$
.
$`}</Math>
                </NoBreak>
                {String.raw` 1, that can
be computed by some wizards; as time can
be played forward or backward, these paths
form doubly-infinite spirals—in to infinity,
out to infinity.`}
                <ImageLeft
                  children_y="2em"
                  children_x="50%"
                  src="/images/svg_ch4_5_euler_spiral_figure.svg"
                  offset_x="1.5em"
                >
                  <span font-size="1.4em">
                    <VerticalChunk>{String.raw`Fig. 1`}</VerticalChunk>
                  </span>
                </ImageLeft>
              </VerticalChunk>
              <VerticalChunk>{String.raw`In any case [take two] the point is that
whether or not you are one of the wizards,
you can`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`guess`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`the existence of these five paths—sort 
of “feel” that they exist! (This is a 
moral consolation prize, at least.)`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`We can also convert the paths into a 
function`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`that satisfies the problem requirements.`}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`For example let `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` be the function that,
given a time `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` outputs the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate
of the red particle at `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                  {String.raw`;`}
                </NoBreak>
                {String.raw` then, to spell
it all out, since`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the rate of change of the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the red particle is the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the blue particle`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
f'
$`}</Math>
                </NoBreak>
                {String.raw` is the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the blue 
particle; and since `}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the rate of change of the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the blue particle is the
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the yellow particle`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
f''
$`}</Math>
                </NoBreak>
                {String.raw` is the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the
yellow particle; and since`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the rate of change of the
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the yellow particle is the
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the green particle`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
f'''
$`}</Math>
                </NoBreak>
                {String.raw` is the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the
green particle; and since`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the rate of change of the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the green particle
is the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the purple
particle`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
f''''
$`}</Math>
                </NoBreak>
                {String.raw` is the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the
purple particle; and since`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the rate of change of the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the purple particle is the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the red particle`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
f''''' = f^{(5)}
$`}</Math>
                </NoBreak>
                {String.raw` equals `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
If you graph the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinates`}
                </NoBreak>
                {String.raw` of the
5 particles over time, each in their 
color, you get a graph like so, in which
blue is the derivative of red, yellow is
the derivative of blue, etc; the function 
`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` can be taken to be any one of these
curves:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_final_graph.svg"></Image>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
There is nothing special about 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinates`}
                </NoBreak>
                {String.raw` vis-à-vis `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-coordinates.
You can also define `}
                <NoBreak>
                  <Math>{String.raw`$
f(t)
$`}</Math>
                </NoBreak>
                {String.raw` to be, e.g.,
the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the red particle
at time `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 3.`}</i>
                {String.raw`
It is worth noting that, in fact, the 
`}
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
                  {String.raw`-coordinates`}
                </NoBreak>
                {String.raw` live separate
lives. The rate of change of each 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` is some other `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate,`}
                </NoBreak>
                {String.raw` 
and the rate of change of each `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate
is some other `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 4.`}</i>
                {String.raw`
Adding to this observation, we don't
`}
                <i>{String.raw`need`}</i>
                {String.raw` to start the particles in
a symmetric configuration. Symmetry only
helps to picture how the positions of the
particles will evolve without making any
computations. We also don't `}
                <i>{String.raw`need`}</i>
                {String.raw`
to work in two dimensions. We can place
the particles in a one-dimensional world,
e.g., ...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_5_euler_one_dimensional.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...(the initial positions really don't
matter much, as long as you don't give 
all the particles the `}
                <i>{String.raw`same`}</i>
                {String.raw` initial
position, or else you won't have `}
                <NoBreak>
                  <Math>{String.raw`$
f \ne f'
$`}</Math>
                </NoBreak>
                {String.raw`
etc) and stipulate the same rules, namely
that the `}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`velocity`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(now `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`-dimensional)`}
                </NoBreak>
                {String.raw` of the red particle
be the`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`position`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(now `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`-dimensional)`}
                </NoBreak>
                {String.raw` of the blue particle
and so on—you can “release” the particles
from their initial configuration and
simulate (or compute exactly, if you have
the know-how) their motion by the same
methods as above. The five position
functions obtained are each a solution
`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` to the problem. (But this solution will
typically look more chaotic than the curves
from Note 1.) `}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 5.`}</i>
                {String.raw`
In fact, our symmetric two-dimensional
solution is an instance in which you can say
that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the whole is simpler than the parts`}
                <ImageLeft src="/images/svg_ch4_5_euler_hearts_left.svg"></ImageLeft>
                <ImageRight src="/images/svg_ch4_5_euler_hearts_right.svg"></ImageRight>
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`in that you would never spot the symmetry
at play, or have a chance of eyeballing
the long-term evolution of the system, if
you were shown just the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinates,
or just the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-coordinates,`}
                </NoBreak>
                {String.raw` on their own!`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={14}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 15.`}</b>
              {String.raw`
If we seek a function `}
              <NoBreak>
                <Math>{String.raw`$
f : \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw`
such that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f^{(17)} = f
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`and such that `}
              <NoBreak>
                <Math>{String.raw`$
f \ne 0
$`}</Math>
              </NoBreak>
              {String.raw` (or: `}
              <NoBreak>
                <Math>{String.raw`$
f \ne (x \ra 0)
$`}</Math>
              </NoBreak>
              {String.raw`,
pedantically) and such that `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` grows relatively
slowly in either the positive or negative direction
of the number line, insofar as such things are 
concerned, what would our options be? `}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={14}>
              <VerticalChunk>
                {String.raw`Take `}
                <NoBreak>
                  <Math>{String.raw`$
17
$`}</Math>
                </NoBreak>
                {String.raw` particles equally spaced out along
the unit circle, such as these (shown here 
with position vectors):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_17_position_vectors.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Set the velocity of particle`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\Large 1}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`equal to the position of particle`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{\Large 5}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`and keep going by this pattern, making the
velocity of each particle equal to the
position of the particle that is `}
                <NoBreak>
                  <Math>{String.raw`$
4
$`}</Math>
                </NoBreak>
                {String.raw` later;
in the configuration above, the velocity
vectors end up looking like so, for example:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_17_velocity_vector_1.svg"></Image>
              <ImageRight src="/images/svg_ch4_17_velocity_vector_1_cloud.svg"></ImageRight>
              <VerticalChunk>
                {String.raw`Maintaining this relationship at all 
points in time, and given that the velocity 
vectors point very slightly outward from
the unit circle, and because all the
symmetry and all the angles are maintained
as we play time forward or backward, the
particles spiral gently outward/inward from
the circle for time forward/backward,
respectively. Taking `}
                <NoBreak>
                  <Math>{String.raw`$
f(t)
$`}</Math>
                </NoBreak>
                {String.raw` to be the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-`}
                </NoBreak>
                {String.raw` 
or `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of any one of the particles
(e.g., particle `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` at time `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw` gives an
oscillating function whose `}
                <NoBreak>
                  <Math>{String.raw`$
17
$`}</Math>
                  {String.raw`th`}
                </NoBreak>
                {String.raw` derivative
is itself (because the rate of change of
the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of particle `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw` is the
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of particle `}
                <NoBreak>
                  <Math>{String.raw`$
5
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` etc, until
we make it all the way back to particle `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw`),
and that grows comparatively slowly over
time. ~The End~`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
In case you're curious, the actual spiral paths
of the particles look like so:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_17_paths.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...and if you take the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinates`}
                </NoBreak>
                {String.raw` of
the particles over time, with time `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw`
corresponding to the original configuration
depicted where particle 1 is at `}
                <NoBreak>
                  <Math>{String.raw`$
(1, 0)
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` you
find `}
                <del>
                  <VerticalChunk>{String.raw`paths`}</VerticalChunk>
                </del>
                {String.raw`&ensp;functions that look like so:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_17_actual_functions.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`For example, the derivative of curve `}
                <InlineImage src="/images/svg_ch4_17_particle1_inline.svg"></InlineImage>
                {String.raw`, highlighted below in red, is curve `}
                <InlineImage src="/images/svg_ch4_17_particle5_inline.svg"></InlineImage>
                {String.raw`, highlighted in blue:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_17_actual_functions_with_highlights.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...and taking sixteen more derivatives 
starting from curve `}
                <InlineImage
                  style="margin-right:0.8em"
                  src="/images/svg_ch4_17_particle5_inline.svg"
                ></InlineImage>
                {String.raw`we would go through curves `}
                <InlineImage src="/images/svg_ch4_17_particle9_inline.svg"></InlineImage>
                {String.raw`, `}
                <InlineImage src="/images/svg_ch4_17_particle13_inline.svg"></InlineImage>
                {String.raw`, `}
                <InlineImage src="/images/svg_ch4_17_particle17_inline.svg"></InlineImage>
                {String.raw`, `}
                <InlineImage src="/images/svg_ch4_17_particle4_inline.svg"></InlineImage>
                {String.raw`, ..., `}
                <InlineImage src="/images/svg_ch4_17_particle14_inline.svg"></InlineImage>
                {String.raw`before finally coming back to curve`}
                <InlineImage
                  style="margin-right:0.1em"
                  src="/images/svg_ch4_17_particle1_inline.svg"
                ></InlineImage>
                {String.raw`!`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
It can be interesting to examine what
goes wrong if we attempt to make the 
velocity vectors even more tangent to the
unit circle. For example, if we start the
particles so that particle 5 is at
`}
                <NoBreak>
                  <Math>{String.raw`$
90^\circ
$`}</Math>
                </NoBreak>
                {String.raw` exactly from particle 1, 
particle 9 is at `}
                <NoBreak>
                  <Math>{String.raw`$
90^\circ
$`}</Math>
                </NoBreak>
                {String.raw` exactly from
particle 5, and so on, until we reach
particle 14, the last particle in this
order; then we have the following starting
configuration:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_17_other_start.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`To parse the above figure, understand
that:`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <ul style="margin:20px 20px 0px 50px">
                  <li>
                    <VerticalChunk>{String.raw`the red arrows indicate which particle
takes its velocity from the position
of which other particle; for example,
particle 1 has velocity equal to the
position of particle 5`}</VerticalChunk>
                  </li>
                  <li>
                    <VerticalChunk>{String.raw`particles that occupy the same starting
position on the unit circle appear
stacked together, as a representation
device; for example, particle 2 has the
same starting position as particle 5`}</VerticalChunk>
                  </li>
                </ul>
                {String.raw`(Note that the red arrows have to form
a cycle of length 17 in order for us to
later extract a function `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` such that `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f^{(17)} = f
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`but this is the case: the red arrows only
“close the loop” after going through all
17 particles!)`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`In this starting configuration, all
velocity vectors are exactly tangent to
the unit circle`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplay>{String.raw`EXCEPT`}</CentralDisplay>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for particle 14, whose velocity vector, 
being the position of particle 1, is straight
out from the circle! So, as we “start time”,
particle 14 will push out from the circle,
that will in turn affect particle 10, and
so on, until all particles end up being
“peeled off” from the circle, in due time;
if you are so curious, the particle
trajectories end up like so (shown only for
`}
                <NoBreak>
                  <Math>{String.raw`$
t \geq 0
$`}</Math>
                </NoBreak>
                {String.raw`):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_17_other_start_paths.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The particles shoot of to infinity in short
order—the solution is much worse—for fun we
have also highlighted two particle trajectories
in this figure:`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <ul style="margin:1em 1em 0em 2.5em">
                  <li>
                    <VerticalChunk>
                      {String.raw`in `}
                      <span style="border:1px solid blue">
                        <VerticalChunk>{String.raw`blue`}</VerticalChunk>
                      </span>
                      {String.raw`, particle 1, the last particle
to be (noticeably*) “peeled off” from
the circle (*all particles are 
instantaneously peeled off from the 
circle to `}
                      <i>{String.raw`some`}</i>
                      {String.raw` degree, as one 
particle's slight deviation affects
the next, that affects the next, etc)`}
                    </VerticalChunk>
                  </li>
                  <li>
                    <VerticalChunk>
                      {String.raw`in `}
                      <span style="border:1px solid red">
                        <VerticalChunk>{String.raw`red`}</VerticalChunk>
                      </span>
                      {String.raw`, particle 14, the `}
                      <i>{String.raw`first`}</i>
                      {String.raw` particle
to leave the circle—but because its
velocity vector is given by particle 1,
which itself starts by going around in
a circle, it, too, starts out by going
around in a circle!`}
                    </VerticalChunk>
                  </li>
                </ul>
                {String.raw`(The point is: if your velocity vector 
is tracing a circle centered at `}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                  {String.raw`—at`}
                </NoBreak>
                {String.raw` 
a uniform rate—then you, too, are going
around in a circle—it's just that your
circle could be centered anywhere, not
necessarily at `}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                </NoBreak>
                {String.raw`!)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={15}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 16.`}</b>
              {String.raw`
Add elements to the following drawing...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_newton_quotient_unfinished.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...such that it becomes a “complete”
illustration of this here algebraic 
expression...`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
{f(x+h) - f(x) \over h}
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...and reveal the “geometric meaning” of
the expression, if any.`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={15}>
              <VerticalChunk>{String.raw`This version pictures all the elements
that appear in the fraction:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_newton_quotient_finished.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The point is: the fraction`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{f(x + h) - f(x)\over h}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is seen to have the form `}
                <i>{String.raw`rise over run`}</i>
                {String.raw`, 
and is more precisely equal to the slope
of the pale brown line going through the
point `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
(x, f(x))
$$`}
                <ImageLeft src="/images/svg_ch4_new_quatient_x_fx_cloud.svg"></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`at one end, and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
(x + h, f(x + h))
$$`}
                <ImageRight
                  src="/images/svg_ch4_new_quatient_x_fxplush_cloud.svg"
                  offset_y="-0.5em"
                ></ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`at the other end. (This is also the case
if `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` is negative, by the way.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw` 
A fraction of this form is called a `}
                <i>{String.raw`Newton
quotient`}</i>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
The pale brown line is sometimes known as
the `}
                <i>{String.raw`secant`}</i>
                {String.raw` [through `}
                <NoBreak>
                  <Math>{String.raw`$
(x, f(x))
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
(x+h, f(x+h))
$`}</Math>
                </NoBreak>
                {String.raw`].
“Secant” is a general term for “line passing
through two specified points on another
curve”.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 3.`}</i>
                {String.raw`
If we let `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` drop to `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and if `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` is
differentiable at `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` the 
Newton-quotient-a.k.a.-slope-of-the-secant
approaches`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f'(x)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw` `}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`because the secant approaches the tangent,
in that case, and the slope of the secant
is also, perforce, approaching the slope
of the tangent, which is `}
                <NoBreak>
                  <Math>{String.raw`$
f'(x)
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (But you
cannot directly set `}
                <NoBreak>
                  <Math>{String.raw`$
h = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` because`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{f(x+0)-f(x)\over 0} = {0 \over 0}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is undefined.)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={16}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 17.`}</b>
              {String.raw`
In this exercise we consider two points
in time `}
              <NoBreak>
                <Math>{String.raw`$
t_0
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
t_0 + \Delta{}t
$`}</Math>
              </NoBreak>
              {String.raw` (here
“`}
              <NoBreak>
                <Math>{String.raw`$
\Delta{}t
$`}</Math>
                {String.raw`”,`}
              </NoBreak>
              {String.raw` read “delta `}
              <NoBreak>
                <Math>{String.raw`$
t
$`}</Math>
                {String.raw`”,`}
              </NoBreak>
              {String.raw` is a
standard notation for a small amount of
time):`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_RATS_timeline.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`We also consider quantities `}
              <NoBreak>
                <Math>{String.raw`$
A
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
B
$`}</Math>
              </NoBreak>
              {String.raw`
that are changing with time; `}
              <NoBreak>
                <Math>{String.raw`$
A
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
B
$`}</Math>
              </NoBreak>
              {String.raw`
have some value at `}
              <NoBreak>
                <Math>{String.raw`$
t_0
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` and, say, grow
to be larger at `}
              <NoBreak>
                <Math>{String.raw`$
t_0 + \Delta{}t
$`}</Math>
              </NoBreak>
              {String.raw`:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_RATS_timeline_with_A_B.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`More specifically, we are interested in
the change in the value of the product `}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large AB
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`over said course of time.`}</VerticalChunk>
            <VerticalChunk indent={true}>
              {String.raw`To introduce an unsolicited metaphor,
imagine `}
              <NoBreak>
                <Math>{String.raw`$
A
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
B
$`}</Math>
              </NoBreak>
              {String.raw` as`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_RATS_rats.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`that are crossing a hallway surveyed by
a cat. One side of the hallway is time
`}
              <NoBreak>
                <Math>{String.raw`$
t_0
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` the other side of the hallway is
time `}
              <NoBreak>
                <Math>{String.raw`$
t_0 + \Delta{}t
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` So great is their
terror that `}
              <NoBreak>
                <Math>{String.raw`$
A
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
B
$`}</Math>
              </NoBreak>
              {String.raw` have decided to 
scurry across the hallway one at a time.
First `}
              <NoBreak>
                <Math>{String.raw`$
A
$`}</Math>
              </NoBreak>
              {String.raw` will go, then `}
              <NoBreak>
                <Math>{String.raw`$
B
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` In so, we 
can separate the following moments of 
interest (“moments” that exist inside the
metaphorical timeline of the story, not
on the `}
              <NoBreak>
                <Math>{String.raw`$
t
$`}</Math>
                {String.raw`-number`}
              </NoBreak>
              {String.raw` line, to be clear):`}
              <ImageLeft
                src="/images/svg_ch4_RATS_corridor_cloud.svg"
                offset_y="-0.5em"
                offset_x="0.5em"
              ></ImageLeft>
            </VerticalChunk>
            <VerticalChunk>
              <ol style="margin:0 1.5em 1em 2em">
                <li style="margin-top:0.5em">
                  <VerticalChunk>
                    {String.raw`when `}
                    <NoBreak>
                      <Math>{String.raw`$
A
$`}</Math>
                    </NoBreak>
                    {String.raw` and `}
                    <NoBreak>
                      <Math>{String.raw`$
B
$`}</Math>
                    </NoBreak>
                    {String.raw` are both still at `}
                    <NoBreak>
                      <Math>{String.raw`$
t_0
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li style="margin-top:0.5em">
                  <VerticalChunk>
                    {String.raw`when `}
                    <NoBreak>
                      <Math>{String.raw`$
A
$`}</Math>
                    </NoBreak>
                    {String.raw` has made it to `}
                    <NoBreak>
                      <Math>{String.raw`$
t_0 + \Delta{}t
$`}</Math>
                    </NoBreak>
                    {String.raw`,
and `}
                    <NoBreak>
                      <Math>{String.raw`$
B
$`}</Math>
                    </NoBreak>
                    {String.raw` is still at `}
                    <NoBreak>
                      <Math>{String.raw`$
t_0
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li style="margin-top:0.5em">
                  <VerticalChunk>
                    <del>
                      <VerticalChunk>
                        {String.raw`when `}
                        <NoBreak>
                          <Math>{String.raw`$
B
$`}</Math>
                          {String.raw`'s`}
                        </NoBreak>
                        {String.raw` tail is sticking out of the
cat's mouth, and`}
                      </VerticalChunk>
                    </del>
                    {String.raw`&ensp;when `}
                    <NoBreak>
                      <Math>{String.raw`$
A
$`}</Math>
                    </NoBreak>
                    {String.raw` and `}
                    <NoBreak>
                      <Math>{String.raw`$
B
$`}</Math>
                    </NoBreak>
                    {String.raw` have both made it
to `}
                    <NoBreak>
                      <Math>{String.raw`$
t_0 + \Delta{}t
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </li>
              </ol>
              {String.raw`Correspondingly, the product`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large AB
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`changes in two increments: first as `}
              <NoBreak>
                <Math>{String.raw`$
A
$`}</Math>
              </NoBreak>
              {String.raw`
makes it to the other side of the hallway
(and `}
              <NoBreak>
                <Math>{String.raw`$
A
$`}</Math>
              </NoBreak>
              {String.raw` grows bigger); then as `}
              <NoBreak>
                <Math>{String.raw`$
B
$`}</Math>
              </NoBreak>
              {String.raw` joins
him/her (and `}
              <NoBreak>
                <Math>{String.raw`$
B
$`}</Math>
              </NoBreak>
              {String.raw` grows bigger). In an
equation:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_RATS_equation.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`If we divide the above equation by `}
              <NoBreak>
                <Math>{String.raw`$
\Delta{}t
$`}</Math>
              </NoBreak>
              {String.raw`
and let `}
              <NoBreak>
                <Math>{String.raw`$
\Delta{}t
$`}</Math>
              </NoBreak>
              {String.raw` drop to `}
              <NoBreak>
                <Math>{String.raw`$
0
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` what does
each term become?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={16}>
              <VerticalChunk>
                {String.raw`Dividing by `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta{}t
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_RATS_equation_over_Dt.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`As `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta{}t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` the term
on the left-hand side approaches`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(AB)'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where we view `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                </NoBreak>
                {String.raw` as functions
of time with, therefore, the product `}
                <NoBreak>
                  <Math>{String.raw`$
AB
$`}</Math>
                </NoBreak>
                {String.raw` 
also becoming a function of time. (By 
definition, `}
                <NoBreak>
                  <Math>{String.raw`$
AB
$`}</Math>
                </NoBreak>
                {String.raw` is the function`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
t \rightarrow A(t)B(t)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where `}
                <NoBreak>
                  <Math>{String.raw`$
A(t)
$`}</Math>
                </NoBreak>
                {String.raw` is the value of `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw` at time 
`}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
B(t)
$`}</Math>
                </NoBreak>
                {String.raw` is the value of `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                </NoBreak>
                {String.raw` at time
`}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                  {String.raw`.)`}
                </NoBreak>
                {String.raw` Indeed, a ratio of the form`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{f(t_0 + \Delta{}t) - f(t_0)\over \Delta{}t}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is a Newton quotient (cf. Exercise 16),
that approaches `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta{}t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` assuming
`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` is differentiable at `}
                <NoBreak>
                  <Math>{String.raw`$
t_0
$`}</Math>
                </NoBreak>
                {String.raw` (cf.
Exercise 16 Note 3), and`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_RATS_over_Dt_first_term.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`has the form`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{f(t_0 + \Delta{}t) - f(t_0)\over \Delta{}t}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for `}
                <NoBreak>
                  <Math>{String.raw`$
f = AB
$`}</Math>
                </NoBreak>
                {String.raw`.`}
                <ImageLeft src="/images/svg_ch4_RATS_for_f_equals_AB_cloud.svg"></ImageLeft>
              </VerticalChunk>
              <VerticalChunk>
                {String.raw`The first term on the right-hand side, for
its part, approaches`}
                <ImageRight src="/images/svg_ch4_RATS_first_term_cloud.svg"></ImageRight>
              </VerticalChunk>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta{}t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` Indeed,
when you write it out, that term becomes
the algebraic expression`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{A(t_0 + \Delta{}t)B(t_0) - A(t_0)B(t_0) \over \Delta{}t}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where every term on top contains a
“`}
                <NoBreak>
                  <Math>{String.raw`$
B(t_0)
$`}</Math>
                  {String.raw`”,`}
                </NoBreak>
                {String.raw` that can therefore be factored
out, giving us the equivalent expression`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
B(t_0)\cdot{A(t_0 + \Delta{}t) - A(t_0) \over \Delta{}t}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`that, you will notice, has the form `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
B(t_0)\cdot{f(t_0 + \Delta{}t) - f(t_0) \over \Delta{}t}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for `}
                <NoBreak>
                  <Math>{String.raw`$
f = A
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and thus approaches`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
B(t_0) \cdot A'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` by the property
of the Newton quotient.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Lastly the most interesting term is the
second term on the right-hand side!
Symmetrically to the first term on the
right-hand side, the second term approaches `}
                <ImageRight src="/images/svg_ch4_RATS_second_term_cloud.svg"></ImageRight>
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A(t_0)B'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta{}t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` but the
reasons are slightly different! (Slightly.)
Indeed, this term, written out, is`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{A(t_0 + \Delta{}t)B(t_0+\Delta{}t) - A(t_0+ \Delta{}t)B(t_0) \over \Delta{}t}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`which is equal to`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A(t_0 + \Delta{}t)\cdot{B(t_0+\Delta{}t) - B(t_0) \over \Delta{}t}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by factoring out the common term `}
                <NoBreak>
                  <Math>{String.raw`$
A(t_0 + \Delta{}t)
$`}</Math>
                </NoBreak>
                {String.raw`;
and`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{B(t_0+\Delta{}t) - B(t_0) \over \Delta{}t}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`approaches`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
B'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta{}t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` like before
(when we had `}
                <NoBreak>
                  <Math>{String.raw`$
AB
$`}</Math>
                </NoBreak>
                {String.raw` or `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw` instead of `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                </NoBreak>
                {String.raw`)
whereas`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A(t_0 + \Delta{}t)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`—which is a bit different from before—approaches`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta{}t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`—so`}
                </NoBreak>
                {String.raw` that makes up
`}
                <NoBreak>
                  <Math>{String.raw`$
A(t_0)B'(t_0)
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (The`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`differentiability`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`of `}
                <NoBreak>
                  <Math>{String.raw`$
A
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
B
$`}</Math>
                </NoBreak>
                {String.raw` at `}
                <NoBreak>
                  <Math>{String.raw`$
t_0
$`}</Math>
                  {String.raw`—that`}
                </NoBreak>
                {String.raw` we are tacitly
assuming—implies`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`continuity`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as well, which implies that `}
                <NoBreak>
                  <Math>{String.raw`$
A(t_0 + \Delta{}t)
$`}</Math>
                </NoBreak>
                {String.raw`
approaches `}
                <NoBreak>
                  <Math>{String.raw`$
A(t_0)
$`}</Math>
                </NoBreak>
                {String.raw` as `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw`.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`Summarizing, the three terms separately
approach`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(AB)'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
B(t_0)A'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A(t_0)B'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
\Delta{}t
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` and, in fact, 
because the equation holds no matter how
close we make each term to its respective limit
above, one can conclude that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(AB)'(t_0) = B(t_0)A'(t_0) + A(t_0)B'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for functions `}
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
                {String.raw` differentiable at
a point `}
                <NoBreak>
                  <Math>{String.raw`$
t_0
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` `}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Nb: This result is known as the `}
                <i>{String.raw`product rule`}</i>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
Keeping things alphabetical everywhere, the 
same equation is more often written`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(AB)'(t_0) = A'(t_0)B(t_0) + A(t_0)B'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`with “`}
                <NoBreak>
                  <Math>{String.raw`$
A'(t_0)B(t_0)
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` in the middle. (But
which is the same, of course, as `}
                <NoBreak>
                  <Math>{String.raw`$
B(t_0)A'(t_0)
$`}</Math>
                </NoBreak>
                {String.raw`.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={17}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 18.`}</b>
              {String.raw`
The identity`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(f + g)' = f' + g'
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`happens to be true for differentiable
functions `}
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
                {String.raw`.`}
              </NoBreak>
              {String.raw` What English-language
aphorism can summarize it? (This identity
is known as the `}
              <i>{String.raw`sum rule`}</i>
              {String.raw`, by the way.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={17}>
              <VerticalChunk>{String.raw`One can say`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`the derivative of the sum is the sum of the
derivatives`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`the rate of change of the sum is the sum of
the rates of change`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or (we made this one up)`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`the rate of change of the aggregate is the sum
of the rates of change of the components`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(etc).`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={18}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 19.`}</b>
              {String.raw`
If we rewrite the “product rule” of Exercise
17 in the same terse style as the “sum rule”
of Exercise 19, what do we obtain?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={18}>
              <VerticalChunk>{String.raw`The form of...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...that follows the style of...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f + g)' = f' + g'
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...is...`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)' = f'g + fg'
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...this. (Valid for differentiable functions
`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
g:
$`}</Math>
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
\rr \ra \rr
$`}</Math>
                </NoBreak>
                {String.raw`.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
Whereas`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is an equality between real numbers,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)' = f'g + fg'
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is an equality between functions. So there is 
a more-than-skin-deep difference between the
two forms. Also note that each form has its
own “qualitatively distinct” qualifying conditions.`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`(To wit,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`holds “for `}
                <NoBreak>
                  <Math>{String.raw`$
t_0
$`}</Math>
                </NoBreak>
                {String.raw` at which `}
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
                {String.raw` are
differentiable”, while`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)' = f'g + fg'
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`holds “for differentiable functions `}
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
                {String.raw`”.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={19}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 20.`}</b>
              {String.raw`
If the identities`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(f + g)' = f' + g'
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`and`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(fg)' = f'g + fg'
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for differentiable `}
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
              {String.raw` are deemed 
“differentiation formulas”, then what is a
third “differentiation formula” `}
              <i>{String.raw`already 
encountered`}</i>
              {String.raw` (in possibly disguised form) prior 
to this point?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={19}>
              <VerticalChunk>{String.raw`That would be the fact that`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(cf)' = cf'
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for all differentiable functions `}
                <NoBreak>
                  <Math>{String.raw`$
f : \rr \ra \rr
$`}</Math>
                </NoBreak>
                {String.raw`,
for all `}
                <NoBreak>
                  <Math>{String.raw`$
c \in \rr
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` mentioned in Exercise 10
for `}
                <NoBreak>
                  <Math>{String.raw`$
c = 2
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
You can also write `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(cf)' = c \cdot f'
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`if it helps clarify the difference between the
left- and right-hand sides. (The difference being
namely “(`}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                </NoBreak>
                {String.raw` times `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` prime” on the left vs. “c
times (`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` prime)” on the right.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={20}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 21.`}</b>
              {String.raw`
The solution to the previous exercise
erroneously assumes that the product of a
constant and a function has been defined. It
has not! Keeping in mind that the `}
              <i>{String.raw`sum`}</i>
              {String.raw`
of two functions `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` `}
              <NoBreak>
                <Math>{String.raw`$
g: \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw``}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f + g
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`is defined by the equation`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f + g = (x \ra f(x) + g(x))
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`while their composition is defined by`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f \circ g = (x \ra f(g(x)))
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`and so on, what is the similar, most logical
definition for `}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
cf
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`where `}
              <NoBreak>
                <Math>{String.raw`$
c \in \rr
$`}</Math>
              </NoBreak>
              {String.raw` and `}
              <NoBreak>
                <Math>{String.raw`$
f : \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={20}>
              <VerticalChunk>{String.raw`The “logical” definition is:`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
cf = (x \ra cf(x))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where the product “`}
                <NoBreak>
                  <Math>{String.raw`$
cf(x)
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is an ordinary
multiplication between two real numbers,
because `}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                </NoBreak>
                {String.raw` is a real number and `}
                <NoBreak>
                  <Math>{String.raw`$
f(x)
$`}</Math>
                </NoBreak>
                {String.raw` is
a real number! (In this way, the product of
a function by a real number “bootstraps”
off of the ordinary product of real numbers—this
is already similar to what happens for the
definition... `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
fg = (x \ra f(x)g(x))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`of the product of two functions from `}
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
                {String.raw`,
or with the case of function addition, that
relies on real number addition.) BUT. There
is a MORE CLEVER way of doing the definition.
Which is to define`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
cf = (x \ra c)f
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where the right-hand-side is `}
                <i>{String.raw`one function
times another`}</i>
                {String.raw`, i.e., `}
                <i>{String.raw`a product of functions`}</i>
                {String.raw`,
which is something that has ITSELF ALREADY BEEN
DEFINED. (!) (To wit, the definition of
function multiplication is that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
fg = (x \ra f(x)g(x))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of course.) (Wait we just mentioned that
already.) Mathematicians LOVE to bootstrap off
an intermediate step, instead of going back to
the beginning, so the second way is clearly the
superior definition!!`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={21}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 22.`}</b>
              {String.raw`
The definition`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f + g = (x \ra f(x) + f(x))
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for a sum of functions `}
              <NoBreak>
                <Math>{String.raw`$
f, g : \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw`
can also be written`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(f + g)(x) = f(x) + g(x)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`in the sense that either of these equations tells
you how `}
              <NoBreak>
                <Math>{String.raw`$
f + g
$`}</Math>
              </NoBreak>
              {String.raw` acts on an arbitrary input. (Which
is what you need to do, to define a function. A
slight subtlety is that the definition`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f + g = (x \ra f(x) + f(x))
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`announces more clearly via its notation that 
“`}
              <NoBreak>
                <Math>{String.raw`$
f + g
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` `}
              <i>{String.raw`is a function`}</i>
              {String.raw` and not some other
object, like a number, but this is a minor point.)
Rewrite the definitions of`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f \circ g
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
fg
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f/g
$$`}</MathBlock>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f - g
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`in the style of the second equation. For extra
credit: use a different symbol each time to denote
the input.`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={21}>
              <VerticalChunk>{String.raw`E.g.:`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f \circ g)(x) = f(g(x))
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)(u) = f(u)g(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f/g)(z) = f(z)/g(z)
$$`}</MathBlock>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f - g)(t) = f(t) - g(t)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(Looking at these definitions we must really admit that
we prefer the first form, with the arrow, found at the
end of the chapter—it's more explicit!)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={22}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 23.`}</b>
              {String.raw`
What does...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>
              {String.raw`$$
A_1(t_0 + h) \,\times\, \dots \,\times\, A_{i-1}(t_0 + h) \,\times\, {A_i(t_0 + h) - A_i(t_0)\over h} \,\times\, A_{i + 1}(t_0) \,\times\, \cdots  \,\times\, A_n(t_0)
$$`}
              <ImageRight src="/images/svg_ch4_big_product_parchment_cloud.svg"></ImageRight>
            </MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`...approach as `}
              <NoBreak>
                <Math>{String.raw`$
h
$`}</Math>
              </NoBreak>
              {String.raw` goes to `}
              <NoBreak>
                <Math>{String.raw`$
0
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` if `}
              <NoBreak>
                <Math>{String.raw`$
A_1, \dots, A_n
$`}</Math>
              </NoBreak>
              {String.raw` 
`}
              <NoBreak>
                <Math>{String.raw`$
: \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw` are differentiable at the point `}
              <NoBreak>
                <Math>{String.raw`$
t_0
$`}</Math>
              </NoBreak>
              {String.raw`?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={22}>
              <VerticalChunk>{String.raw`We can start with the fraction in the
middle of the product:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_big_product_fraction_outline.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`This is seen to be a Newton quotient
(cf. Exercise 16)`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f(x + h) - f(x)\over h
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`with `}
                <NoBreak>
                  <Math>{String.raw`$
f = A_i
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
x = t_0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` per which
(Exercise 16 Note 3), the fraction approaches`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A_i'(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` given also the assumption 
that each of the functions `}
                <NoBreak>
                  <Math>{String.raw`$
A_1
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` ..., `}
                <NoBreak>
                  <Math>{String.raw`$
A_n
$`}</Math>
                </NoBreak>
                {String.raw` 
(including `}
                <NoBreak>
                  <Math>{String.raw`$
A_i
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` is differentiable at `}
                <NoBreak>
                  <Math>{String.raw`$
t_0
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Next down in order of interesting-ness we presumably
have the terms `}
                <NoBreak>
                  <Math>{String.raw`$
A_1(t_0 + h)
$`}</Math>
                </NoBreak>
                {String.raw` through `}
                <NoBreak>
                  <Math>{String.raw`$
A_{i-1}(t_0 + h)
$`}</Math>
                </NoBreak>
                {String.raw`
at the beginning of the product...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_big_product_prefix_outline.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...; here the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`differentiability`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`of `}
                <NoBreak>
                  <Math>{String.raw`$
A_1
$`}</Math>
                </NoBreak>
                {String.raw` at `}
                <NoBreak>
                  <Math>{String.raw`$
t_0
$`}</Math>
                </NoBreak>
                {String.raw` implies the`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`continuity`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`of `}
                <NoBreak>
                  <Math>{String.raw`$
A_1
$`}</Math>
                </NoBreak>
                {String.raw` at `}
                <NoBreak>
                  <Math>{String.raw`$
t_0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which implies that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A_1(t_0 + h)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`approaches`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A_1(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (These various
technicalities concerning a generic function
`}
                <NoBreak>
                  <Math>{String.raw`$
f : \rr \ra \rr
$`}</Math>
                </NoBreak>
                {String.raw` are mentioned in the solution
to Exercise 17.) Similarly for `}
                <NoBreak>
                  <Math>{String.raw`$
A_2(t_0 + h)
$`}</Math>
                </NoBreak>
                {String.raw`,
etc, up to `}
                <NoBreak>
                  <Math>{String.raw`$
A_{i-1}(t_0 + h)
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` so`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A_1(t_0 + h) \,\times\, \dots \,\times\, A_{i-1}(t_0 + h)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`approaches`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
A_1(t_0) \,\times\, \dots \,\times\, A_{i-1}(t_0)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` approaches `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (If some quantities are
each approaching a different value, then the 
product-of-the-quantities will approach the 
product-of-the-values—something not mentioned
in the solution to Exercise 17, but that might
have been.)`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Lastly one has the tail end of the product,
where `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` does not even appear:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_big_product_suffix_outline.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Because `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw` does not appear here, the tail end`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`stays put`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where it is, irrespective of the value of `}
                <NoBreak>
                  <Math>{String.raw`$
h
$`}</Math>
                </NoBreak>
                {String.raw`.
So that was easy! Altogether, the answer is
therefore: `}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_big_product_final_answer.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...with a lone “`}
                <NoBreak>
                  <Math>{String.raw`$
A_i'
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` in the middle.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={23}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 24.`}</b>
              {String.raw`
The function below is also the red
curve from Exercise 12, known as the
`}
              <i>{String.raw`cosine function`}</i>
              {String.raw` (already encountered
in Chapter 3, Exercise 7). Knowing that
this function is the `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
                {String.raw`-coordinate`}
              </NoBreak>
              {String.raw` of a
point rotating at unit speed around a unit
circle, find, by inspection of the graph,
a rational approximation to the circumference
of a unit circle.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_cosine_for_eta.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={23}>
              <VerticalChunk>{String.raw`Because the particle is going at unit speed the
circumference of the unit circle is equal to the
amount of time it takes the particle to complete one
revolution of the circle. That is, for example, the
length of this yellow interval:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_for_eta_with_yellow.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`One revolution around the circle is also
made up of four quarter-revolutions, where
each quarter-revolution of the circle is “half a bump”,
on the graph:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_for_eta_with_two_yellows.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Going a bit further, `}
                <i>{String.raw`seven`}</i>
                {String.raw` of these
quarter-revolutions appear to take up exactly
`}
                <NoBreak>
                  <Math>{String.raw`$
t = 11
$`}</Math>
                </NoBreak>
                {String.raw` units of time (!!!!!!!!!!!) (or maybe
just a `}
                <i>{String.raw`little`}</i>
                {String.raw` less than `}
                <NoBreak>
                  <Math>{String.raw`$
11
$`}</Math>
                </NoBreak>
                {String.raw` units, if
you zoom in):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_for_eta_revealed.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Therefore`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {11 \over 7}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is an approximation to the quarter-circumference of
the circle, and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 4 \cdot {11 \over 7} = {44 \over 7}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is an approximation to the circumference of a unit
circle.`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
This approximation ends up being about 
half-a-part-in-a-thousand too large 
(`}
                <NoBreak>
                  <Math>{String.raw`$
0.040249943...\%
$`}</Math>
                </NoBreak>
                {String.raw` too large) (or just: 
<span class="nobreak">“`}
                <NoBreak>
                  <Math>{String.raw`$
0.00040249943...
$`}</Math>
                </NoBreak>
                {String.raw`</span>
too large”), which is strikingly good, all things
considered.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
Numerically, note that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {44 \over 7} = 6.285714\dots
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is a bit larger than `}
                <NoBreak>
                  <Math>{String.raw`$
6
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which agrees with
what we see here for the length of a full
revolution...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_for_eta_tau_verification.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...whereas`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {11 \over 7} = 1.571428\dots
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is about `}
                <NoBreak>
                  <Math>{String.raw`$
1.6
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which also appears to agree
with what we can see on the graph about the
length of a quarter-revolution:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_for_eta_eta_verification.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(So, we have some secondary “visual confirmation”
of our approximations.)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={24}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 25.`}</b>
              {String.raw`
The graphs below are the horizontal and
vertical velocities...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_pacman1_hor0.svg"></Image>
            <ImageLeft
              src="/images/svg_ch4_pacman1_x_prime_t_scloud.svg"
              offset_y="1em"
            ></ImageLeft>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_pacman1_ver0.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`...of PACMAN, with unit of
distance of one “cell”, or “c”—the distance 
between two food pellets—and units of velocity 
of “cells per second”, or “c/s”—also,
`}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
                {String.raw`-coordinates`}
              </NoBreak>
              {String.raw` increase towards the right, 
and `}
              <NoBreak>
                <Math>{String.raw`$
y
$`}</Math>
                {String.raw`-coordinates`}
              </NoBreak>
              {String.raw` increase towards the top:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image
              src="/images/svg_ch4_pacman1_maze.svg"
              height="590px"
            ></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`Where is Pacman at `}
              <NoBreak>
                <Math>{String.raw`$
t = 49
$`}</Math>
                {String.raw`s?`}
              </NoBreak>
              {String.raw` (Note: Pacman 
is NOT assumed to be anywhere in particular at 
`}
              <NoBreak>
                <Math>{String.raw`$
t = 40
$`}</Math>
                {String.raw`s—you`}
              </NoBreak>
              {String.raw` have to figure that out from the 
data!)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={24}>
              <VerticalChunk>{String.raw`Let's start by examining Pacman's first six displacements,
appearing here in blue (positive displacements, going to the right 
or up) and red (negative displacements, going to the left or down):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman1_hor1.svg"></Image>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman1_ver1.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`We can estimate the duration of each
displacement to the closest 10th of a second
(mistakes of estimation can be made, we shall recover):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman1_hor2.svg"></Image>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman1_ver2.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`We can also estimate the velocity to be`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\pm 6.75\te{c}\hlfbk/\hlfbk\te{s}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`when it is nonzero (for displacement`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet5_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`the velocity might seem more like `}
                <NoBreak>
                  <Math>{String.raw`$
-6.8\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                </NoBreak>
                {String.raw` 
at the least, but we've already made more
significant errors while eyeballing the durations, so
nevermind). Using`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
(\te{velocity}) \times (\te{amount of time}) = (\te{displacement})
$$`}
                <ImageRight src="/images/svg_ch4_pacman1_velocity_times_amt_time_cloud.svg"></ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`then gives us the following estimates for the`}
                <del>
                  <VerticalChunk>{String.raw`amount of travel`}</VerticalChunk>
                </del>
                {String.raw`&ensp;`}
                <del>
                  <VerticalChunk>{String.raw`during the`}</VerticalChunk>
                </del>
                {String.raw`&ensp;six displacements:`}
              </VerticalChunk>
              <CenterDisplay>
                <VerticalChunk>
                  <InlineImage
                    style="margin-right:1em"
                    src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                    class="ch4_pacman1_inline_number_pellet"
                  ></InlineImage>
                  {String.raw``}
                  <NoBreak>
                    <Math>{String.raw`$
-6.75\te{c}\hlfbk/\hlfbk\te{s}\,\,\times\,\,0.5\te{s}\,\,=\,\,-3.375\,\te{cells}
$`}</Math>
                  </NoBreak>
                  {String.raw``}
                </VerticalChunk>
              </CenterDisplay>
              <ImageRight src="/images/svg_ch4_pacman1_cells_per_second_times_seconds_cloud.svg"></ImageRight>
              <VerticalChunk>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      style="margin-right:1em"
                      src="/images/svg_ch4_pacman1_pellet2_inline.svg"
                      class="ch4_pacman1_inline_number_pellet"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
-6.75\te{c}\hlfbk/\hlfbk\te{s}\,\,\times\,\,0.4\te{s}\,\,=\,\,-2.7\,\te{cells}
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      style="margin-right:1em"
                      src="/images/svg_ch4_pacman1_pellet3_inline.svg"
                      class="ch4_pacman1_inline_number_pellet"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
6.75\te{c}\hlfbk/\hlfbk\te{s}\,\,\times\,\,0.9\te{s}\,\,=\,\,6.075\,\te{cells}
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      style="margin-right:1em"
                      src="/images/svg_ch4_pacman1_pellet4_inline.svg"
                      class="ch4_pacman1_inline_number_pellet"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
6.75\te{c}\hlfbk/\hlfbk\te{s}\,\,\times\,\,0.4\te{s}\,\,=\,\,2.7\,\te{cells}
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      style="margin-right:1em"
                      src="/images/svg_ch4_pacman1_pellet5_inline.svg"
                      class="ch4_pacman1_inline_number_pellet"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
-6.75\te{c}\hlfbk/\hlfbk\te{s}\,\,\times\,\,0.4\te{s}\,\,=\,\,-2.7\,\te{cells}
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      style="margin-right:1em"
                      src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                      class="ch4_pacman1_inline_number_pellet"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
6.75\te{c}\hlfbk/\hlfbk\te{s}\,\,\times\,\,0.9\te{s}\,\,=\,\,6.075\,\te{cells}
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`Given the horizontal/vertical alternation
of displacements, this would nominally 
imply the following set of initial motions:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman1_initial_displacements_before_rounding.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`But these are approximate numbers and the
true values must be integers, except for`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`. (Because we don't know where Pacman started
out. For`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`&ensp;the next displacement, if you look back at
the graphs, is horizontal, so yes.) In fact,
if you look at the maze,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
3
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`cells is the smallest amount that Pacman
can travel vertically when changing `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate,
between two moments of horizontal motion.
The next smallest possible amounts are`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
4
$$`}
                <ImageLeft
                  src="/images/svg_ch4_pacman1_disp_4_cloud.svg"
                  width="700px"
                ></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
6
$$`}
                <ImageLeft
                  src="/images/svg_ch4_pacman1_disp_6_cloud.svg"
                  width="1400px"
                ></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
7
$$`}
                <ImageLeft
                  src="/images/svg_ch4_pacman1_disp_7_cloud.svg"
                  width="700px"
                ></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`cells, with `}
                <NoBreak>
                  <Math>{String.raw`$
5
$`}</Math>
                </NoBreak>
                {String.raw` not being a possibility.
In the horizontal direction,
the smallest amounts are`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
3, 6, \te{ and } 9
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(and `}
                <NoBreak>
                  <Math>{String.raw`$
12
$`}</Math>
                </NoBreak>
                {String.raw` and ...) which is even more restrictive.
Now if each of our duration 
measurements carries an error of no more than`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\pm{}0.2\te{s}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`each computed displacement is at most `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
6.75\te{c}\hlfbk/\hlfbk\te{s}\,\times\,\pm{}0.2\te{s}\,=\,\pm1.35\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`from the truth, give or take the small
difference between `}
                <NoBreak>
                  <Math>{String.raw`$
6.75\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`
and the actual velocity. So`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
-2.7\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`must be either`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
-3\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`or`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
-4\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`these being the only two posssible integer
vertical displacements within `}
                <NoBreak>
                  <Math>{String.raw`$
\pm1.35
$`}</Math>
                  {String.raw`c`}
                </NoBreak>
                {String.raw` of `}
                <NoBreak>
                  <Math>{String.raw`$
-2.7
$`}</Math>
                  {String.raw`c.`}
                </NoBreak>
                {String.raw` 
Then, applying similar logic to each
measurement, the initial motions must be:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman1_initial_motions.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The maze fits these constraints in only two places
(note that`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet2_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`&ensp;and `}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet4_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`&ensp;equal `}
                <NoBreak>
                  <Math>{String.raw`$
-3\te{c}
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
3\te{c}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` in each
case):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_pacman1_maze_two_possibilities.svg"
                height="590px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Looking into the future, 
the next three displacements are 
right/down/right and last
~`}
                <NoBreak>
                  <Math>{String.raw`$
3.2
$`}</Math>
                </NoBreak>
                {String.raw`s/~`}
                <NoBreak>
                  <Math>{String.raw`$
0.4
$`}</Math>
                </NoBreak>
                {String.raw`s/~`}
                <NoBreak>
                  <Math>{String.raw`$
1.3
$`}</Math>
                </NoBreak>
                {String.raw`s
respectively:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman1_hor3.svg"></Image>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman1_ver3.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(Nb: Imagine translating these intervals to the left or right until
the start of the interval is at an integer value: this is a good
way to estimate the length.)`}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Because displacement`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`&ensp;is horizontal to the right the only possible
remaining solution is the right-hand one,
or else Pacman would collide with the ghost cage,
with displacement`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`&ensp;equal to 6c not 7c, or else Pacman would 
collide with a wall:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_pacman1_maze_would_collide.svg"
                height="590px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
6.75\te{c}\hlfbk/\hlfbk\te{s}\,\times\,3.2\te{s}\,=\,21.6\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`it seems that displacement`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`&ensp;brings Pacman all the way around the maze to
the left edge of the ghost cage, like so...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_pacman1_maze_bring_around.svg"
                height="590px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...though it is hard to measure that distance;
but this is confirmed by the fact that the next
two displacements are “down by `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw` and to the right”;
specifically, since`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
-6.75\te{c}\hlfbk/\hlfbk\te{s}\,\times\,0.4\te{s}\,=\,-2.7\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`displacement`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`&ensp;must be `}
                <NoBreak>
                  <Math>{String.raw`$
-3
$`}</Math>
                  {String.raw`c`}
                </NoBreak>
                {String.raw` or `}
                <NoBreak>
                  <Math>{String.raw`$
-4
$`}</Math>
                </NoBreak>
                {String.raw`c;
must actually be `}
                <NoBreak>
                  <Math>{String.raw`$
-3
$`}</Math>
                  {String.raw`c`}
                </NoBreak>
                {String.raw` since displacement`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet9_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`is to the right; so, notwithstanding the exact 
length of displacement`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet9_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`, there is only one possibility for displacements`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`through`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_pacman1_maze_final_solution.svg"
                height="590px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`So at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 49
$`}</Math>
                  {String.raw`s,`}
                </NoBreak>
                {String.raw` between displacements`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`&ensp;and`}
                <InlineImage
                  src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                  class="ch4_pacman1_inline_number_pellet"
                ></InlineImage>
                {String.raw`, Pacman is immediately to the left of the ghost cage. `}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={25}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 26.`}</b>
              {String.raw`
Same question, but for the following maze...`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image
              src="/images/svg_ch4_pacman2_maze.svg"
              height="551px"
            ></Image>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`...and for the following velocity data, with the 
horizontal and vertical velocities
superimposed on one graph (just a cosmetic 
change—note that green is the vertical velocity)...`}</VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_pacman2_frankenstein.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`...and asking for Pacman's position at `}
              <NoBreak>
                <Math>{String.raw`$
t = 34
$`}</Math>
              </NoBreak>
              {String.raw`s.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={25}>
              <VerticalChunk>{String.raw`It seems well-advised to start by heuristically verifying
that Pacman's speed remains`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\approx 6.75\te{c}\hlfbk/\hlfbk\te{s}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`no matter the direction that Pacman is headed, as long as Pacman is
in motion.`}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`For example, take the instant `}
                <NoBreak>
                  <Math>{String.raw`$
t \approx 23.7
$`}</Math>
                  {String.raw`s,`}
                </NoBreak>
                {String.raw` when the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-`}
                </NoBreak>
                {String.raw` and <span class="nobreak">`}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-velocities</span>`}
                </NoBreak>
                {String.raw` are 
both about (?) `}
                <NoBreak>
                  <Math>{String.raw`$
4.8\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_at_23_7.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The velocity vector (cf. Exercise 12) is therefore about`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(4.8, 4.8)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`in units of `}
                <NoBreak>
                  <Math>{String.raw`$
\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                </NoBreak>
                {String.raw` at `}
                <NoBreak>
                  <Math>{String.raw`$
t \approx 23.7
$`}</Math>
                </NoBreak>
                {String.raw`s,
and the speed, being the length of the velocity
vector (cf. Exercise 12), is about`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
\sqrt{4.8^2 + 4.8^2} = \sqrt{2} \times 4.8 = 6.788...
$$`}
                <ImageLeft src="/images/svg_ch4_pacman2_4_point_8_cloud.svg"></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(Pythagoras!)
in units of `}
                <NoBreak>
                  <Math>{String.raw`$
\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                </NoBreak>
                {String.raw` as well,
and`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
6.788... \approx 6.75
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`which supports, in this case, the hypothesis that
Pacman's speed is `}
                <NoBreak>
                  <Math>{String.raw`$
\approx 6.75\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`
regardless of the direction of travel.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`For more verification, take `}
                <NoBreak>
                  <Math>{String.raw`$
t = 26\te{s}
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
at which point the velocity vector is roughly`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(6.5, -2)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`cells per second:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_at_26.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`This gives a speed of`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\sqrt{6.5^2 + 2^2} = \sqrt{46.25} = 6.800...
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`cells per second, Again close to `}
                <NoBreak>
                  <Math>{String.raw`$
6.75\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` (!)`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`For two more verifications take `}
                <NoBreak>
                  <Math>{String.raw`$
t = 27\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
t = 30\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_at_27_and_30.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The speed at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 27\te{s}
$`}</Math>
                </NoBreak>
                {String.raw` is approximately`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\sqrt{3^2 + 6.2^2} = \sqrt{47.44} = 6.888
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`cells per second, while the speed at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 30\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`
is approximately`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\sqrt{5.6^2 + 3.6^2} = \sqrt{44.32} = 6.657
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`cells per second. Both close-ish to
`}
                <NoBreak>
                  <Math>{String.raw`$
6.75\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                  {String.raw`!`}
                </NoBreak>
                {String.raw` For one last
verification (truly the last, we promise)
consider `}
                <NoBreak>
                  <Math>{String.raw`$
t = 31\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_at_31.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`This yields a speed of`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\sqrt{2.6^2 + 6.2^2} = \sqrt{45.2} = 6.723...
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`cells per second, again close to `}
                <NoBreak>
                  <Math>{String.raw`$
6.75\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                  {String.raw`!`}
                </NoBreak>
                {String.raw` 
(Closest so far, in fact.)`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`We now admit, after this “heuristic verification”, 
that Pacman goes approximately the same speed
regardless of direction, namely something in
the vicinity of `}
                <NoBreak>
                  <Math>{String.raw`$
6.75\te{c}\hlfbk/\hlfbk\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Now consider the time interval from `}
                <NoBreak>
                  <Math>{String.raw`$
t = 22.7\te{s}
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
t = 24.7\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_first_big_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Both the `}
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
                  {String.raw`-velocities`}
                </NoBreak>
                {String.raw` are nonzero
during this interval, which indicates the presence
of a curve. The curve starts with vertical motion
and ends with horizontal motion:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_first_big_purple_annotations.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Thus Pacman starts the curve going up, and ends the curve
going right. Moreover, it takes Pacman`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
24.7\te{s} - 22.7\te{s} = 3\te{s}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`to complete the curve (we know the curve is fully
completed from the purely horizontal motion at
either end), from which the curve must be
approximately`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
6.75\te{c}\hlfbk/\hlfbk\te{s} \times 3\te{s} = 20.25\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`in length! In turn, using the approximation`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\approx {11 \over 7}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for the quarter-circumference of a unit circle
(cf`}
                <NoBreak>
                  <Math>{String.raw`$
.
$`}</Math>
                </NoBreak>
                {String.raw` Exercise 24), this would indicate that
the curve (which is a quarter-circle, as 
all curves in this maze) has radius`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\approx {20.25\te{c} \over 11/7} = {7 \times 20.25\te{c} \over 11} = {141.75\te{c} \over 11} = 12.886...\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where we give up and use a calculator at the
last step. But the possible radii are `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
6
$`}</Math>
                </NoBreak>
                {String.raw`,
`}
                <NoBreak>
                  <Math>{String.raw`$
9
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
12
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` This all but rules out all of the
maze curves except the one that has radius `}
                <NoBreak>
                  <Math>{String.raw`$
12
$`}</Math>
                </NoBreak>
                {String.raw`,
and that allows a traversal that starts upward
and ends rightward; we mean the upper left
curve of the maze:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_pacman2_upper_left_highlight.svg"
                height="551px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`From there, Pacman goes right for a bit, then
takes another curve 3 seconds long, that starts
rightward and ends downward:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_second_big_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...this second curve must, of course, be the
upper right-hand corner of the maze, that has the
appropriate length, position, and orientation:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_pacman2_upper_right_highlight.svg"
                height="551px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`What is extremely strange, however, is that
Pacman immediately follows the end of this curve
with rightward motion:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_first_warning_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In fact, it is also strange that Pacman `}
                <i>{String.raw`preceded`}</i>
                {String.raw`
the first curve with rightward motion (when that curve
starts at the leftmost edge of the maze):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_second_warning_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Looking back over our work, 
we find that we made a mistake when we wrote`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
24.7\te{s} - 22.7\te{s} = 3\te{s}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`the corrected version of that being of course`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
24.7\te{s} - 22.7\te{s} = 2\te{s}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(the second curve likewise lasted `}
                <NoBreak>
                  <Math>{String.raw`$
2\te{s}
$`}</Math>
                </NoBreak>
                {String.raw`,
not `}
                <NoBreak>
                  <Math>{String.raw`$
3\te{s}
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` making the length and radius of
the first curve two-thirds of whatever we previously 
computed (because `}
                <NoBreak>
                  <Math>{String.raw`$
2\te{s}
$`}</Math>
                </NoBreak>
                {String.raw` is two-thirds of
`}
                <NoBreak>
                  <Math>{String.raw`$
3\te{s}
$`}</Math>
                  {String.raw`),`}
                </NoBreak>
                {String.raw` i.e.,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{2 \over 3} \times 12.886...\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for the `}
                <i>{String.raw`radius`}</i>
                {String.raw` of the first (and second)
curve, which means that the first and second curves
actually had radii `}
                <NoBreak>
                  <Math>{String.raw`$
9
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` undoubtedly,
and that Pacman's initial motion followed the 
one-inside track (the two rightward motions are 
easily seen to be ~`}
                <NoBreak>
                  <Math>{String.raw`$
3\te{c}
$`}</Math>
                </NoBreak>
                {String.raw` each):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_pacman2_corrected_highlights.svg"
                height="551px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Next, after some downward motion we are faced
with a long, juicy, down-and-then-left curve,
which must surely be the bottom-right curve of
radius `}
                <NoBreak>
                  <Math>{String.raw`$
12
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_third_big_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Indeed, the curve lasts ~`}
                <NoBreak>
                  <Math>{String.raw`$
2.7
$`}</Math>
                  {String.raw`s,`}
                </NoBreak>
                {String.raw` and `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
6.75\te{c}\hlfbk/\hlfbk\te{s} \times 2.7\te{s} = 18.225\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is approximately the same as `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{11 \over 7} \cdot 12\te{c} = 18.85...\te{c}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`confirming the radius of `}
                <NoBreak>
                  <Math>{String.raw`$
12\te{c}
$`}</Math>
                </NoBreak>
                {String.raw` and the location
of the curve.
Pacman's trajectory so far is then:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_pacman2_continued_highlights.svg"
                height="551px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Next Pacman seems to reverse course, and briefly
re-enters the curve (going right and up a tiny bit):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_back_in_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`But then changes again, and re-exits the curve
(going left and down a tiny bit):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_back_out_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Then Pacman goes left-and-then-right-again by
some small amount:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_pacman2_frankenstein_back_out_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`At this point—and in particular at 
`}
                <NoBreak>
                  <Math>{String.raw`$
t = 34\te{s}
$`}</Math>
                  {String.raw`—Pacman`}
                </NoBreak>
                {String.raw` is between a moment 
of purely horizontal motion and purely vertical
motion; since the left-and-then-right-again 
motion did obviously not bring Pacman `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw` cells
over to the left (which is the next place 
after the curve exit that is connected to both 
horizontal and vertical paths),
Pacman must 
be at the bottom-left exit of the bottom-right
maze corner, still.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
Feel free to follow Pacman all the way
to the end of the timeseries. He ends up somewhere
near...`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={26}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 27.`}</b>
              {String.raw`
Describe what a function might look like
if its second derivative has this graph (broadly):`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_one_long_line.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={26}>
              <VerticalChunk>{String.raw`As the second derivative is the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`rate of change of the slope`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`places where the second derivative is zero are 
places where the slope of the function is constant.
So the function will have a constant slope over
each of these purple intervals (we're going to
assume that what looks like `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` is `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and eyeball 
where that starts and ends, the statement
does say “broadly” anyway):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_with_purple.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`As`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`constant slope`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`means`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`line segment`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`the function will therefore be a 
line segment, over each of the purple intervals!`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`Between these line segments, however, things
happen, and there is a change in slope! The
change in slope is given by the “amount of bump”
in the second derivative between the intervals.
As it turns out, the area enclosed by the bump
gives the total change in slope:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_positive_area.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(We won't argue this right now, but it's 
sort-of-intuitive.)
For bumps lying below the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-axis`}
                </NoBreak>
                {String.raw` the area
counts as negative; that negative area is, again,
the total change in slope from one end of the bump
to the other:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_negative_area.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In any case the areas are all the same `}
                <i>{String.raw`in absolute
value`}</i>
                {String.raw`, meaning that whatever slope is gained as
we pass over a positive bump, the same amount
is lost again as we pass over a negative bump!
Thus, the line segments of the original function
will alternate between “low” and “high”
slopes—as we pass over a positive bump we switch
from a “low slope” line segment to a “high slope”
line segment, and vice-versa when we pass over a
negative bump.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>{String.raw`Put `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large a
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for the area of a positive bump (per appearances, 
`}
                <NoBreak>
                  <Math>{String.raw`$
a \approx 1
$`}</Math>
                  {String.raw`),`}
                </NoBreak>
                {String.raw` and`}
                <ImageRight src="/images/svg_ch4_one_long_line_a_is_about_1_cloud.svg"></ImageRight>
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large c
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`for the slope of a “low slope” line segment. Then a
“high slope” line segment has slope `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large c + a
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`since we add `}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                </NoBreak>
                {String.raw` to the slope each time we go over
a positive bump. 
(And the slope goes back down to`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large (c + a) + (-a) = c
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`when we pass over a negative bump, with `}
                <NoBreak>
                  <Math>{String.raw`$
-a
$`}</Math>
                </NoBreak>
                {String.raw` being
the (negative) area of a negative bump.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`With these variables in place, here is a generic
illustration of a graph (in black) whose second
derivative is the one from the statement (faded in
the background):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_solution_sketch_1.svg"></Image>
              <ImageLeft src="/images/svg_ch4_one_long_line_c_is_approx_0_point_2_cloud.svg"></ImageLeft>
              <VerticalChunk>
                {String.raw`In this example `}
                <NoBreak>
                  <Math>{String.raw`$
c \approx 0.2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` but `}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                </NoBreak>
                {String.raw` can be any
value—this is not constrained by the second derivative.
Moreover any amount of vertical translation can 
also be introduced to the graph. (Vertical
translation does not affect the derivative,
much less the second derivative.)`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`For another example, if `}
                <NoBreak>
                  <Math>{String.raw`$
c = -a/2
$`}</Math>
                </NoBreak>
                {String.raw`,
meaning `}
                <NoBreak>
                  <Math>{String.raw`$
c \approx -1/2
$`}</Math>
                </NoBreak>
                {String.raw`,
the graph ends up a perfectly balanced see-saw that 
stays confined to a bounded range of `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-values:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_solution_sketch_2.svg"></Image>
              <ImageLeft src="/images/svg_ch4_one_long_line_c_is_approx_minus_a_over_2_cloud.svg"></ImageLeft>
              <VerticalChunk>{String.raw`Moreover, like the previous graph, this solution
can also be vertically translated by any amount!
(And same for any solution.)`}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`For yet another example, here is a graph in which
`}
                <NoBreak>
                  <Math>{String.raw`$
c + a = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` `}
                <NoBreak>
                  <Math>{String.raw`$
c = -a \approx -1
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_solution_sketch_3.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Again, any of these graphs are`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`equally valid`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`solutions, and, for the last time,`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`any amount of vertical translation can be introduced`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`(you can move the graphs up and down). So in
other words we have a “two-parameter family of
solutions”: one parameter of the solution—free
to choose—is `}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                  {String.raw`—while`}
                </NoBreak>
                {String.raw` another parameter—independently
free to choose—is the amount of vertical
translation.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`To claim a truly good “theoretical” understanding
of the solution, however, we should also determine
this rise here, if we can, as a function of `}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` i.e., the amount of rise between the end
of one line segment and the start of the next:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_1.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In fact, is not entirely clear that there aren't
possibly `}
                <i>{String.raw`two different`}</i>
                {String.raw` values of this rise,
for the two different kinds of “connector curves”
that exist (the concave ones and the convex ones):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_2.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(It will turn out that 
the rises are all the same
but we're just pointing out.)
Focusing on the case
of a convex connector curve, note 
that the rise is lower bounded by`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1.6c
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where `}
                <NoBreak>
                  <Math>{String.raw`$
1.6 = 0.8 + 0.8
$`}</Math>
                </NoBreak>
                {String.raw` is the length (run) of
the connector curve, because `}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                </NoBreak>
                {String.raw` is the `}
                <i>{String.raw`lowest 
slope`}</i>
                {String.raw` found anywhere inside the connector
curve:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_connector_curve_lower_bound.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Symmetrically,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1.6(c + a)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is an upper bound on the rise, because `}
                <NoBreak>
                  <Math>{String.raw`$
c + a
$`}</Math>
                </NoBreak>
                {String.raw` is the
`}
                <i>{String.raw`greatest slope`}</i>
                {String.raw` anywhere inside the
connector curve:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_connector_curve_upper_bound.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`To go any further we must add the first
derivative to this sketch—the first derivative
has value`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large c
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where the function has slope `}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` has value`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large c + a
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`where the function has slope `}
                <NoBreak>
                  <Math>{String.raw`$
c + a
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` and
climbs up/down along an S-shaped curve outside
of those intervals, adhering
to a slope that is given by the value of the
second derivative: `}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_3.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`The afore-mentioned lower bound of `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1.6c
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`coincides with the area of a rectangle that `}
                <i>{String.raw`lies
below`}</i>
                {String.raw` the graph of the derivative:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_connector_curve_lower_bound_area.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Whereas the afore-mentioned upper bound of `}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1.6(a + c)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`coincides with the area of a rectangle that
`}
                <i>{String.raw`lies above`}</i>
                {String.raw` the graph of the derivative:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_connector_curve_upper_bound_area.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`In other words, the rise of the convex connector
curve is lower and upper bounded by these
two areas. It will be helpful to write this
as a pictorial inequality:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_one_long_line_inequality_1.svg"
                width="800px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`But we can tighten the inequality by dividing the
areas halfway (we'll let you think about this 
one—if you don't get it, don't worry, because we'll
revisit the same topic in detail at some point):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_one_long_line_inequality_2.svg"
                width="800px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Or even:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_one_long_line_inequality_3.svg"
                width="800px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`If we take this logic to its bitter conclusion, we
find the `}
                <i>{String.raw`e`}</i>
                {String.raw`quality:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image
                src="/images/svg_ch4_one_long_line_equality.svg"
                width="800px"
              ></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`And because the S-curve is centrally symmetric
(the slopes at equal distance from the center are
the same because those slopes can be read off the
second derivative, and the second derivative bump
is left-right symmetric) we can compute the area
that the curve encloses exactly, by a geometric
surgery:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_area_surgery.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Long story short, the area enclosed, which is
also the rise of the connector curve, is`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1.6\cdot (c + {a\over 2})
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...that can be read as “run times average slope”
(because`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1.6
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is the run while the slope (first derivative)
spends equal amounts of time, in equal measure,
above and below the value`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large c + {a \over 2}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`that is, indeed, the average of `}
                <NoBreak>
                  <Math>{String.raw`$
c
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
c + a
$`}</Math>
                </NoBreak>
                {String.raw`).
For concave connector curves the
S-curve of the derivative is...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_concave_connector.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...flipped around from before, going from
high to low, but the area enclosed by the S-curve
is the same. This area is also the rise of the
connector curve. Hence, long story short—for the
second time—all connector curves have rise`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 1.6\cdot (c + {a\over 2})
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and we can annotate our sketch of the
“generic” solution with this additional piece of
information, if we want. (Well...`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_long_line_with_rises_shown.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...there, no one can accuse us of not doing the
homework ourselves.)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={27}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 28.`}</b>
              {String.raw`
Apply the definition`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
fg = (u \ra f(u)g(u))
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`of function multiplication
in order to show that`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(fg)h = f(gh)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for all functions `}
              <NoBreak>
                <Math>{String.raw`$
f, g, h : \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw`,
or, namely, to show that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <CentralDisplayItalic>
              {String.raw`(`}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` times `}
              <NoBreak>
                <Math>{String.raw`$
g
$`}</Math>
                {String.raw`)`}
              </NoBreak>
              {String.raw` times `}
              <NoBreak>
                <Math>{String.raw`$
h
$`}</Math>
              </NoBreak>
              {String.raw``}
            </CentralDisplayItalic>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`equals`}</VerticalChunk>
            <div class="spacer"></div>
            <CentralDisplayItalic>
              {String.raw``}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` times (`}
              <NoBreak>
                <Math>{String.raw`$
g
$`}</Math>
              </NoBreak>
              {String.raw` times `}
              <NoBreak>
                <Math>{String.raw`$
h
$`}</Math>
              </NoBreak>
              {String.raw`)`}
            </CentralDisplayItalic>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for all functions `}
              <NoBreak>
                <Math>{String.raw`$
f, g, h : \rr \ra \rr
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={27}>
              <VerticalChunk>{String.raw`It is necessary and sufficient to show that`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
((fg)h)(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is the same as`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f(gh))(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for an arbitrary input `}
                <NoBreak>
                  <Math>{String.raw`$
u \in \rr
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` in order to
show that `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)h
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f(gh)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`are the same function. (Function equality is
based on input-output behavior: two functions are
equal if and only if every input is mapped to the
same output under either function. See Note 6,
Exercise 9, Chapter 3.)`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`Starting up,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
((fg)h)(u) = (fg)(u) \cdot h(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`by the definition of function multiplication,
and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f(gh))(u) = f(u) \cdot (gh)(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`likewise. Moreover,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(fg)(u) = f(u) \cdot g(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(gh)(u) = g(u) \cdot h(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`by the same definition again. Therefore,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
((fg)h)(u) = (f(u) \cdot g(u)) \cdot h(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`on the one hand, and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f(gh))(u) = f(u) \cdot (g(u) \cdot h(u))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`on the other hand. But`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f(u) \cdot g(u)) \cdot h(u) = f(u) \cdot (g(u) \cdot h(u))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by the associativity of ordinary real number
multiplication. (Not function multiplication:
`}
                <i>{String.raw`real number multiplication`}</i>
                {String.raw`.) So`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
((fg)h)(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`equals`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f(gh))(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for arbitrary `}
                <NoBreak>
                  <Math>{String.raw`$
u
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which completes the proof.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
In words, we have just established the`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`associativity of function multiplication`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`while we had previously established the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`associativity of function composition`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(if you recall that one) in Exercise 9 of Chapter 
3.`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
By this result, we can write`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
fgh
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`without any parentheses at all: 
it doesn't matter whether we think of this 
product as `}
                <NoBreak>
                  <Math>{String.raw`$
(fg)h
$`}</Math>
                </NoBreak>
                {String.raw` or `}
                <NoBreak>
                  <Math>{String.raw`$
f(gh)
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` the result 
is the same.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={28}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 29.`}</b>
              {String.raw`
Prove that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f + g = g + f
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`and that`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
fg = gf
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for all `}
              <NoBreak>
                <Math>{String.raw`$
f, g : \rr \ra \rr
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` using the fact that `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
a + b = b + a
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`and that`}</VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
ab = ba
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for all `}
              <NoBreak>
                <Math>{String.raw`$
a, b \in \rr
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` 
(Prove something for functions by using the
corresponding fact for numbers, namely.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={28}>
              <VerticalChunk>
                {String.raw`Given an arbitrary `}
                <NoBreak>
                  <Math>{String.raw`$
u \in \rr
$`}</Math>
                </NoBreak>
                {String.raw` we have`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f + g)(u) = f(u) + g(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(g + f)(u) = g(u) + f(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`by the definition of function addition. But`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f(u) + g(u) = g(u) + f(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by the commutativity of real number addition
[`}
                <NoBreak>
                  <Math>{String.raw`$
f(u)
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
g(u)
$`}</Math>
                </NoBreak>
                {String.raw` are both real numbers—the`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`commutativity`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of real number addition is the fact that`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
a + b = b + a
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for all real numbers `}
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
                {String.raw` mentioned in the
statement—so we can use this here]; thus`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f + g)(u) = (g + f)(u)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for all `}
                <NoBreak>
                  <Math>{String.raw`$
u \in \rr
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which implies`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f + g = g + f
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`by definition of function equality. `}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`For the second half we have, similarly,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\begin{align}
(fg)(u) &= f(u) \cdot g(u) \\
&= g(u) \cdot f(u) \up{1.5}\\
&= (gf)(u) \up{1.5}
\end{align}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for arbitrary `}
                <NoBreak>
                  <Math>{String.raw`$
u\in \rr
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` where the first and
last equality are by the definition of a
product of functions and where
the middle equality is by commutativity of real
number multiplication. [That would be the fact that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
ab = ba
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for all `}
                <NoBreak>
                  <Math>{String.raw`$
a, b \in \rr
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` as mentioned in the statement.] Hence`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
fg
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`and`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
gf
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`agree on an arbitrary input, hence `}
                <NoBreak>
                  <Math>{String.raw`$
fg = gf
$`}</Math>
                </NoBreak>
                {String.raw` by
definition of function equality.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={29}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 30.`}</b>
              {String.raw`
A rat is running a fundraising race. The function`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large f : \rr \ra \rr
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`gives the amount raised as a function of position;
specifically, `}
              <NoBreak>
                <Math>{String.raw`$
{f(x)}
$`}</Math>
              </NoBreak>
              {String.raw` is the total number of 
`}
              <NoBreak>
                <Math>{String.raw`$
\te{\$}
$`}</Math>
                {String.raw`'s`}
              </NoBreak>
              {String.raw` earned by virtue of running 
`}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
              </NoBreak>
              {String.raw` meters from the start of the race; 
a second function`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
\Large g : \rr \ra \rr
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`gives the position of the rat as a function of time;
specifically, `}
              <NoBreak>
                <Math>{String.raw`$
{g(t)}
$`}</Math>
              </NoBreak>
              {String.raw` is the position from the start,
in meters, reached by the rat at `}
              <NoBreak>
                <Math>{String.raw`$
t
$`}</Math>
              </NoBreak>
              {String.raw` seconds after the
start of the race.`}
            </VerticalChunk>
            <VerticalChunk indent={true}>
              {String.raw`In this case, what does `}
              <NoBreak>
                <Math>{String.raw`$
f \circ g
$`}</Math>
              </NoBreak>
              {String.raw` compute?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={29}>
              <VerticalChunk>
                {String.raw`It computes
the amount earned by the rat as a function of time. In 
more detail, `}
                <NoBreak>
                  <Math>{String.raw`$
(f \circ g)(t)
$`}</Math>
                </NoBreak>
                {String.raw`
is the number of `}
                <NoBreak>
                  <Math>{String.raw`$
\te{\$}
$`}</Math>
                  {String.raw`'s`}
                </NoBreak>
                {String.raw` earned by the rat at `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`
seconds after the start of the race.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
In even more detail,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
g(t)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is the position in meters of the rat `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`
seconds after start, by definition 
of `}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` at which position the rat has
earned`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f(g(t))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw``}
                <NoBreak>
                  <Math>{String.raw`$
\te{\$}
$`}</Math>
                  {String.raw`'s`}
                </NoBreak>
                {String.raw` in total, by definition of `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw`.
And`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f(g(t))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f \circ g)(t)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by definition of “`}
                <NoBreak>
                  <Math>{String.raw`$
\circ
$`}</Math>
                </NoBreak>
                {String.raw`”.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
If it helps, 
here is a pictorialization of the 
“units transformation pipeline” that 
occurs inside `}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g
$`}</Math>
                  {String.raw`:`}
                </NoBreak>
                {String.raw` `}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_f_g_composition_units.svg"></Image>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 3.`}</i>
                {String.raw`
To emphasize, `}
                <NoBreak>
                  <Math>{String.raw`$
f(x)
$`}</Math>
                </NoBreak>
                {String.raw` is the`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`~ total ~`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`amount earned when position `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw` is reached.
In real life `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw`'s
graph might therefore look something like this, 
while inventing some numbers:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_f_g_first_example_of_f.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In the above the rat earns `}
                <NoBreak>
                  <Math>{String.raw`$
\te{\$}
$`}</Math>
                  {String.raw`3`}
                </NoBreak>
                {String.raw` for the 
first 50m, after which the dollar-per-meter 
rate is reduced.
Or 
`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw`
could look like this,
with discrete “unlocks”: `}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_f_g_second_example_of_f.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`In our mathematicians' imaginations, however, `}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw`
might also look like this, nice and differentiable,
with periods of negative slope (corresponding to
parts of the course that momentarily lose you money):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_f_g_third_example_of_f.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(Etc.)`}</VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={30}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 31.`}</b>
              {String.raw`
What does `}
              <NoBreak>
                <Math>{String.raw`$
(f \circ g)'
$`}</Math>
              </NoBreak>
              {String.raw` compute,
keeping the same setup as in Exercise 34?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={30}>
              <VerticalChunk>{String.raw`It computes the dollars-per-second earnings rate 
as a function of time. In full detail,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f \circ g)'(t)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is the dollars-per-second rate which the rat is
fundraising at `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw` seconds after the start of the race.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
You don't need to know anything about “`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw`”
or “`}
                <NoBreak>
                  <Math>{String.raw`$
g
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` to answer this question. You only need to
know what “`}
                <NoBreak>
                  <Math>{String.raw`$
f \circ g
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is. `}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={31}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 32.`}</b>
              {String.raw`
Continuing with the fundraising rat as in the 
previous two exercises, assume that the functions
`}
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
              {String.raw` have these graphs:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_f_g_actual_exercise_f.svg"></Image>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_f_g_actual_exercise_g.svg"></Image>
            <div class="spacer"></div>
            <Solution solution_number={31}>
              <VerticalChunk>
                {String.raw`At `}
                <NoBreak>
                  <Math>{String.raw`$
t = 2
$`}</Math>
                  {String.raw`s`}
                </NoBreak>
                {String.raw` the rat is running at a velocity of`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{5\over 3\up{1}}[{\te{m/s}}]
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by the slope of this line segment on `}
                <NoBreak>
                  <Math>{String.raw`$
y = g(t)
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_f_g_actual_exercise_g_with_slope.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Moreover at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 2
$`}</Math>
                  {String.raw`s`}
                </NoBreak>
                {String.raw` the rat 
has reached
`}
                <NoBreak>
                  <Math>{String.raw`$
2 \cdot (5/3) = 10/3 = 3.\overline{33}
$`}</Math>
                </NoBreak>
                {String.raw`m,
where the dollars-per-meter earnings
rate is one-tenth of a dollar per meter, by
the slope of this segment on the graph `}
                <NoBreak>
                  <Math>{String.raw`$
y = f(x)
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_f_g_actual_exercise_f_with_slope.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Multiplying the `}
                <NoBreak>
                  <Math>{String.raw`$
5/3
$`}</Math>
                </NoBreak>
                {String.raw` meters-per-second velocity
by the `}
                <NoBreak>
                  <Math>{String.raw`$
1/10
$`}</Math>
                </NoBreak>
                {String.raw` dollars-per-meter rate gives
us the dollars-per-second rate at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 2
$`}</Math>
                  {String.raw`s`}
                </NoBreak>
                {String.raw` (our 
final answer—recall that `}
                <NoBreak>
                  <Math>{String.raw`$
(f \circ g)'(2)
$`}</Math>
                </NoBreak>
                {String.raw` is 
the dollars-per-second rate at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 2
$`}</Math>
                  {String.raw`s,`}
                </NoBreak>
                {String.raw` by Exercise 35):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
\left({5\over 3\up{1}}\left[{\te{m} \over \te{s}}\right]\right) \times \left({1 \over 10\up{1}}\left[{\te{\$} \over \te{m}}\right]\right) = {5\over 30\up{1}}\left[{\te{\$} \over \te{s}}\right].
$$`}
                <ImageRight src="/images/svg_ch4_f_g_actual_exercise_cloud.svg"></ImageRight>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Or since`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{5 \over 3} = 1.6666...
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`that would be`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{0.1666...}[\te{\$/s}]
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`in decimal, i.e., `}
                <span style="font-family:Clicker Script;font-size:1.3em;">
                  <VerticalChunk>{String.raw`~sixteen~ `}</VerticalChunk>
                </span>
                {String.raw`point `}
                <NoBreak>
                  <Math>{String.raw`$
666...
$`}</Math>
                </NoBreak>
                {String.raw` cents per second.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Postscript.`}</i>
                {String.raw`
It turns out that`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{5 \over 30} = {1 \over 6}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`as we weren't really paying attention to the 
possibility of simplifying the fraction. In
particular,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{1 \over 6} = 0.1666...
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`as, indeed, `}
                <NoBreak>
                  <Math>{String.raw`$
0.1666...
$`}</Math>
                </NoBreak>
                {String.raw` is half of `}
                <NoBreak>
                  <Math>{String.raw`$
0.333...
$`}</Math>
                  {String.raw`!`}
                </NoBreak>
                {String.raw` (Learn
something every day.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={32}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 33.`}</b>
              {String.raw`
Conjecture a general formula for `}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
(f \circ g)'(t)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for arbitrary (differentiable, say) functions
`}
              <NoBreak>
                <Math>{String.raw`$
f, g : \rr \ra \rr
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` (If it helps, interpret `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw`
and `}
              <NoBreak>
                <Math>{String.raw`$
g
$`}</Math>
              </NoBreak>
              {String.raw` exactly as in the scenario of the fundraising
race, cf`}
              <NoBreak>
                <Math>{String.raw`$
.
$`}</Math>
              </NoBreak>
              {String.raw` Exercises 34-37.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={32}>
              <VerticalChunk>{String.raw`The sought-for formula is`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
g'(t)\cdot f'(g(t))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because—to come back to the example of the 
fundraising race—one must multiply the meters-per-second
velocity at time `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw` (that is, `}
                <NoBreak>
                  <Math>{String.raw`$
g'(t)
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` by the dollars-per-meter 
earnings rate at position `}
                <NoBreak>
                  <Math>{String.raw`$
g(t)
$`}</Math>
                </NoBreak>
                {String.raw` (that is, `}
                <NoBreak>
                  <Math>{String.raw`$
f'(g(t))
$`}</Math>
                  {String.raw`)`}
                </NoBreak>
                {String.raw` to obtain
the final dollars-per-second earning rate at time `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`
(that is, `}
                <NoBreak>
                  <Math>{String.raw`$
(f \circ g)'(t)
$`}</Math>
                </NoBreak>
                {String.raw`).`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`(For example, the solution to Exercise 36 can actually
be written`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
g'(2) \cdot f'(g(2))
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`since, indeed, `}
                <NoBreak>
                  <Math>{String.raw`$
g(2) = 3.333...
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` [Remember that we ended
up multiplying `}
                <NoBreak>
                  <Math>{String.raw`$
g'(2) = {5\over 3}\te{m/s}
$`}</Math>
                </NoBreak>
                {String.raw` by 
`}
                <NoBreak>
                  <Math>{String.raw`$
f'(3.333...) = {1\over 10}\te{\$/s}
$`}</Math>
                  {String.raw`—the`}
                </NoBreak>
                {String.raw` “`}
                <NoBreak>
                  <Math>{String.raw`$
3.333...
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` is
`}
                <NoBreak>
                  <Math>{String.raw`$
g(2)
$`}</Math>
                </NoBreak>
                {String.raw`.])`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Nb: This result is known as the `}
                <i>{String.raw`chain rule`}</i>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw` Said `}
                <i>{String.raw`chain rule`}</i>
                {String.raw`
is more commonly written...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f \circ g)'(x) = f'(g(x))g'(x)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...with “`}
                <NoBreak>
                  <Math>{String.raw`$
g'(x)
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` last. (And “`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`”`}
                </NoBreak>
                {String.raw` instead of “`}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`”.)`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw` One can also write the chain rule very succinctly like so... `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
(f \circ g)' = (f' \circ g)g'
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`...where the right-hand-side is the product of `}
                <NoBreak>
                  <Math>{String.raw`$
g'
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
f' \circ g
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={33}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 34.`}</b>
              {String.raw`
Sketch the velocity vector of a particle
going at three times unit speed (“speed `}
              <NoBreak>
                <Math>{String.raw`$
3
$`}</Math>
                {String.raw`”`}
              </NoBreak>
              {String.raw` in common
parlance) clockwise around a circle of radius `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
              </NoBreak>
              {String.raw`.
What path does the velocity vector describe 
over time? (I.e., if you cut-paste the velocity
vector back to the origin, so that its “tail” 
is at `}
              <NoBreak>
                <Math>{String.raw`$
(0, 0)
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` what curve does the far end of the
vector describe?) Over how much time?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={33}>
              <VerticalChunk>
                {String.raw`The velocity vector is an arrow of length `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw`
tangent to a circle of radius `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` brushed
clockwise:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_velocity_vector_radius_2_speed_3_sketch_1.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`If we bring the tail of the vector back to
`}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                </NoBreak>
                {String.raw` we find an arrow of length `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw`
tracing a circle of radius `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_velocity_vector_radius_2_speed_3_centered.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Lastly, the velocity vector does a full revolution
of the red circle in the same amount of time that
the particle does a full revolution of the blue circle,
which is`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{2\cdot (\te{circumference of a unit circle}) \over \te{3}}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`because the circumference of the blue circle
is twice the circumference of a unit circle,
and the particle is going at speed `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw` 
In such diagrams we recycle the axes
to plot quantities of several different
dimensions: positions (in blue, in this
case) have dimensions of length ([L]) while
velocities (in red, in this case) have 
dimensions of length over time ([L/T]).`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={34}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 35.`}</b>
              {String.raw`
What is the `}
            </VerticalChunk>
            <div class="spacer"></div>
            <CentralDisplayItalic>{String.raw`acceleration vector`}</CentralDisplayItalic>
            <div class="spacer"></div>
            <VerticalChunk>{String.raw`(velocity vector of the velocity vector)
of the particle from Exercise 39?`}</VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={34}>
              <VerticalChunk>
                {String.raw`The velocity vector of Exercise 39 travels
in a circle of radius `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw` in the same amount
of time that the position vector 
travels around a circle of radius `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                </NoBreak>
                {String.raw`.
The speed of the velocity vector is therefore
`}
                <NoBreak>
                  <Math>{String.raw`$
1.5
$`}</Math>
                </NoBreak>
                {String.raw` times the speed of the position vector,
or `}
                <NoBreak>
                  <Math>{String.raw`$
1.5 \times 3 = 4.5
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`As the derivative of the velocity vector,
the acceleration vector is therefore
a vector of length `}
                <NoBreak>
                  <Math>{String.raw`$
4.5
$`}</Math>
                </NoBreak>
                {String.raw` (= the speed of the 
velocity vector) brushed clockwise along 
the path of the velocity vector:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_what_is_the_acceleration_vector_uncentered.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Or, if we translate the acceleration vector back 
to the origin and trace out its path over time 
(either way is fine):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_what_is_the_acceleration_vector_centered.svg"></Image>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
You truly have to think of the acceleration
vector as “the velocity of the velocity 
vector”—if the velocity vector is changing, the
acceleration vector is nonzero!`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={35}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 36.`}</b>
              {String.raw`
Sketch the velocity vector, acceleration vector,
and jerk vector of a particle going around a circle
of radius `}
              <NoBreak>
                <Math>{String.raw`$
3
$`}</Math>
              </NoBreak>
              {String.raw` at speed `}
              <NoBreak>
                <Math>{String.raw`$
2
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` (Clockwise, say.)`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={35}>
              <VerticalChunk>
                {String.raw`The velocity vector has length `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` because the
particle has speed `}
                <NoBreak>
                  <Math>{String.raw`$
2
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` So the velocity vector
looks like so, while attached to the particle path
(top) or brought back to the origin (bottom):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_uncentered.svg"></Image>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_centered.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Moreover (!) the speed of the velocity vector is 
`}
                <NoBreak>
                  <Math>{String.raw`$
2/3
$`}</Math>
                </NoBreak>
                {String.raw` the speed of the particle, because the 
velocity vector goes around a circle of `}
                <NoBreak>
                  <Math>{String.raw`$
2/3
$`}</Math>
                </NoBreak>
                {String.raw` the 
radius in the same amount of time. So the velocity 
vector has speed`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large 2 \cdot {2\over 3} = {4\over 3}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`from which the acceleration vector—that can be 
described as “the velocity vector of the velocity
vector”—has length `}
                <NoBreak>
                  <Math>{String.raw`$
{4\over 3}
$`}</Math>
                </NoBreak>
                {String.raw` (the speed of the
velocity vector), and looks like so (in either representation):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_acceleration_uncentered.svg"></Image>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_acceleration_centered.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Lastly the acceleration vector has speed`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
\Large {4\over 3}\cdot {2\over 3} = {8 \over 9}
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`by virtue of circling a circle of radius `}
                <NoBreak>
                  <Math>{String.raw`$
2/3
$`}</Math>
                </NoBreak>
                {String.raw` 
that of the velocity vector, that has speed `}
                <NoBreak>
                  <Math>{String.raw`$
4/3
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
in the same amount of time. Since the jerk is the
derivative of the acceleration, this becomes the
length of the jerk vector, that is exactly opposite
to the velocity vector, being twice `}
                <NoBreak>
                  <Math>{String.raw`$
90^\circ
$`}</Math>
                </NoBreak>
                {String.raw` away:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_jerk_uncentered.svg"></Image>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_jerk_centered.svg"></Image>
              <StarDivider></StarDivider>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
If the particle's original path is centered at
`}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                </NoBreak>
                {String.raw` then that path constitutes a fourth
circle obeying the same pattern
of `}
                <NoBreak>
                  <Math>{String.raw`$
2/3
$`}</Math>
                  {String.raw`-ratios`}
                </NoBreak>
                {String.raw` between the successive radii:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_with_position.svg"></Image>
            </Solution>
          </Exercise>
          <Exercise exercise_number={36}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 37.`}</b>
              {String.raw`
Imagine a single particle in a one-dimensional
world, whose velocity equals its position; at `}
              <NoBreak>
                <Math>{String.raw`$
t = 0
$`}</Math>
              </NoBreak>
              {String.raw`,
the particle is sitting at `}
              <NoBreak>
                <Math>{String.raw`$
x = 1
$`}</Math>
              </NoBreak>
              {String.raw`:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_one_particle_at_1.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`If we play time backward, will the particle 
ever reach `}
              <NoBreak>
                <Math>{String.raw`$
x = 0
$`}</Math>
                {String.raw`?`}
              </NoBreak>
              {String.raw` `}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={36}>
              <VerticalChunk>{String.raw`Going back in time,
examine how long it would take
the particle to cross each of the intervals defined by
the following geometric progression* (*see Note 1):`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_one_particle_interval_subdivision.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The interval from `}
                <NoBreak>
                  <Math>{String.raw`$
0.5
$`}</Math>
                </NoBreak>
                {String.raw` to `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw`
takes `}
                <i>{String.raw`at least`}</i>
                {String.raw``}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
{0.5 \over 1} = 0.5
$$`}
                <ImageLeft src="/images/svg_ch4_one_particle_speed_equals_time_cloud.svg"></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`time to cross, because the maximum speed of the particle
inside of that interval is `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw`.
Similarly, the interval from `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = 0.25
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`to`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = 0.5
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`takes `}
                <i>{String.raw`at least`}</i>
                {String.raw``}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{0.25 \over 0.5} = 0.5
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`time to cross, because the maximum speed of the particle
inside of that interval is `}
                <NoBreak>
                  <Math>{String.raw`$
0.5
$`}</Math>
                </NoBreak>
                {String.raw`!
And, again, the interval from `}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = 0.125
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`to`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
x = 0.25
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`takes at least`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
{0.125 \over 0.25} = 0.5
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`time to cross, because the maximum speed of the particle
inside of that interval is `}
                <NoBreak>
                  <Math>{String.raw`$
0.25
$`}</Math>
                  {String.raw`.`}
                </NoBreak>
                {String.raw` Etc—each interval 
takes `}
                <i>{String.raw`at least`}</i>
                {String.raw``}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
0.5
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`units of time to cross, because the length of each
interval is half of the maximum speed within the interval!
But there are infinitely many intervals, and, therefore,
it takes`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`at least`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`infinitely much time to make it to `}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` where the
“infinitely” comes from adding infinitely many `}
                <NoBreak>
                  <Math>{String.raw`$
0.5
$`}</Math>
                </NoBreak>
                {String.raw`'s
together! (In other words, the particle never makes it to
`}
                <NoBreak>
                  <Math>{String.raw`$
x = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` no matter how far back in time you look.)`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`A so-called`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`geometric progression`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is a sequence of numbers in which each number
is a fixed multiple of the previous number.
For example,`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
100,\, 300,\, 900,\, 2700
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is a (finite) geometric progression, because each number
is the previous number multiplied by `}
                <NoBreak>
                  <Math>{String.raw`$
3
$`}</Math>
                </NoBreak>
                {String.raw`,
and`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
1,\, 0.5,\, 0.25,\, 0.125,\, 0.0625,\, \ldots
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is an (infinite) geometric progression, because each number
is the previous multiplied by `}
                <NoBreak>
                  <Math>{String.raw`$
0.5
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={37}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 38.`}</b>
              {String.raw`
Take a system of two particles on the real
line; at time `}
              <NoBreak>
                <Math>{String.raw`$
t = 0
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` the first particle (yellow)
is at `}
              <NoBreak>
                <Math>{String.raw`$
x = -1
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` while the second one (blue)
is at `}
              <NoBreak>
                <Math>{String.raw`$
x = 1
$`}</Math>
              </NoBreak>
              {String.raw`:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_three_one_dimensional_particles.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`If the velocity of the yellow particle is set to track
the position of the blue particle and vice-versa, 
give a qualitative sketch of the
position-as-a-function-of-time (time on the `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
              </NoBreak>
              {String.raw`
axis, position on the `}
              <NoBreak>
                <Math>{String.raw`$
y
$`}</Math>
              </NoBreak>
              {String.raw` axis) of the two 
particles. If we add also the graph of the position
of the red particle from Exercise 41 to this set of
graphs, what symmetries
exist altogether between the three graphs?`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={37}>
              <VerticalChunk>
                {String.raw`For `}
                <NoBreak>
                  <Math>{String.raw`$
t > 0
$`}</Math>
                </NoBreak>
                {String.raw` the yellow and blue particles
approach `}
                <NoBreak>
                  <Math>{String.raw`$
0
$`}</Math>
                </NoBreak>
                {String.raw` in a kind of “radioactive decay”
pattern; for `}
                <NoBreak>
                  <Math>{String.raw`$
t < 0
$`}</Math>
                </NoBreak>
                {String.raw`,
they spin
off to `}
                <NoBreak>
                  <Math>{String.raw`$
-\infty
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
\infty
$`}</Math>
                </NoBreak>
                {String.raw` respectively at an
accelerating rate:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_three_one_dimensional_particles_blue_yellow.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`If we add the graph of the red particle to the
mix, it is simply the mirror image of the
blue particle's position through the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis
(`}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis that is ironically labeled “`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`”):`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_three_one_dimensional_particles_blue_yellow_red.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Indeed, for the red graph,`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the slope equals the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-value`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`(velocity = position), while`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`the slope equals minus the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-value`}
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`for the blue graph (velocity = position
of yellow = minus own position). 
(We forgot to mention that the blue and
yellow graphs are mirror images of one another
through the horizontal axis—this is one of the 
“symmetries” that the problem statement asks about, though.)
As taking a mirror image through the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw` axis
negates slopes without affecting `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                </NoBreak>
                {String.raw`-coordinates,
while both the blue and red graphs have the same
value at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` this explains why the mirror
image of one graph fits the constraints of the other
and vice-versa:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_three_one_dimensional_particles_red_and_blue_symmetry.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`Also note that all graphs have slopes of
`}
                <NoBreak>
                  <Math>{String.raw`$

\pm 1

$`}</Math>
                </NoBreak>
                {String.raw`
at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` as we tried to reflect in the sketches, 
because each corresponding particle position 
is either `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw` or `}
                <NoBreak>
                  <Math>{String.raw`$
-1
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={38}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 39.`}</b>
              {String.raw`
Four particles are placed 
at intervals of `}
              <NoBreak>
                <Math>{String.raw`$
90^\circ
$`}</Math>
              </NoBreak>
              {String.raw`
around a circle of radius `}
              <NoBreak>
                <Math>{String.raw`$
1
$`}</Math>
              </NoBreak>
              {String.raw` 
centered at `}
              <NoBreak>
                <Math>{String.raw`$
(2, 4)
$`}</Math>
              </NoBreak>
              {String.raw` in the plane:`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Image src="/images/svg_ch4_circle_at_2_4.svg"></Image>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`The velocity of each particle is set to 
the position of the next particle clockwise
around the circle, with this relationship
maintained at all points in time.
If the configuration above shows time 
`}
              <NoBreak>
                <Math>{String.raw`$
t = 0
$`}</Math>
                {String.raw`,`}
              </NoBreak>
              {String.raw` how will the positions of the
particles evolve? Discuss both positive and 
negative values of `}
              <NoBreak>
                <Math>{String.raw`$
t
$`}</Math>
              </NoBreak>
              {String.raw`.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={38}>
              <VerticalChunk>
                {String.raw`At `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw`
the particles have position vectors that
are up and the right,
so the velocity vectors will be
up and to the right,
so the particles will move more up and
to the right, and the velocity vectors
will become more “up and to the right”, 
and so on—broadly speaking, for `}
                <NoBreak>
                  <Math>{String.raw`$
t > 0
$`}</Math>
                </NoBreak>
                {String.raw`
there will ensue
a kind of 
four-particle explosion
that goes up and to the right,
off to `}
                <NoBreak>
                  <Math>{String.raw`$
(+\infty, +\infty)
$`}</Math>
                </NoBreak>
                {String.raw`.`}
                <ImageRight src="/images/svg_ch4_circle_at_2_4_with_some_vectors_cloud.svg"></ImageRight>
              </VerticalChunk>
              <VerticalChunk>
                {String.raw`For `}
                <NoBreak>
                  <Math>{String.raw`$
t < 0
$`}</Math>
                </NoBreak>
                {String.raw` motion will be
down and to the left, at least initially—it
is hard to forecast off the top of one's
head (unless you have a sudden flash of insight)
what will happen for larger negative
values of `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`.`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`HOWEVER.`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`It is possible to say much more.`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`To go deeper, we introduce eight new
particles, comprising the original colors but
in white and black flavors:`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw`, `}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw`, `}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw`, `}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw`, `}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw`, `}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw`, `}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw`, `}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`At `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw` the white particles are just a
translate of the original particles, such
that the circle on which they lie is 
centered at `}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_circle_at_2_4_white_version.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The black particles, for their part, are
piled on top of one another at `}
                <NoBreak>
                  <Math>{String.raw`$
(x, y) = (2, 4)
$`}</Math>
                </NoBreak>
                {String.raw` at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` 
that we draw as four quarter-pies
of different colors, like a UNO card:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_circle_at_2_4_black_version.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`Within each group we set the velocity of
the purple particle to the position of the
yellow particle, 
the velocity of the yellow particle to the
position of the green particle, and so on,
like for the original set of particles.`}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`In this case the white particles will
rotate at unit speed around their circle of
radius `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw` centered at the origin, just like
the particles discussed in the solution to
Exercise 12, that obey a similar set of
constraints
(albeit with a different set of colors). `}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`The black particles, for their part, 
behave as a single fused-together particle
whose velocity is equal to its position,
and will
see their motion confined to an infinite 
half-line through
`}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                </NoBreak>
                {String.raw` and `}
                <NoBreak>
                  <Math>{String.raw`$
(2, 4)
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` as their velocity—being
equal to their position—stays parallel to the
line between them and the origin, meaning
they are “stuck” to that line.`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`Also note that the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`speed`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of the black particles, being equal to the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`length of the velocity vector`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of said particles, is equal to the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>
                {String.raw`length of the position vector`}
                <ImageRight src="/images/svg_ch4_circle_at_2_4_position_equals_velocity_cloud.svg"></ImageRight>
              </CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of said particles, is equal to the`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`distance to the origin`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`of said particles,
since the length of the position vector is
the distance to the origin.`}</VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`This means that if we introduce gradations
to the afore-mentioned half-line through `}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                </NoBreak>
                {String.raw`
and `}
                <NoBreak>
                  <Math>{String.raw`$
(2, 4)
$`}</Math>
                </NoBreak>
                {String.raw`...`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_circle_at_2_4_UNO_with_gradated_line.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`...indicating the distance to the origin,
the black particles behave like a 
one-dimensional system comprising a single
particle on a half-line (or entire line,
it doesn't hurt) whose velocity is equal to
its position on this line:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_circle_at_2_4_UNO_flat_half_line.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The behavior of such a particle is
identical to the behavior of the red
particle from Exercise 41, 
except that the current
“UNO particle” has a slight head-start over the
red particle from Exercise 41, being
at position `}
                <NoBreak>
                  <Math>{String.raw`$
x = 2\sqrt{5}
$`}</Math>
                </NoBreak>
                {String.raw` 
instead of at position `}
                <NoBreak>
                  <Math>{String.raw`$
x = 1
$`}</Math>
                </NoBreak>
                {String.raw` at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw`.
(!!)`}
                <ImageLeft src="/images/svg_ch4_circle_at_2_4_sqrt_20_cloud.svg"></ImageLeft>
              </VerticalChunk>
              <VerticalChunk>{String.raw`This describes an “understandable”
behavior of the black and white particles.`}</VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`Next we write`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`for the function that gives 
the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the purple-white particle
as a function of time (in more detail,`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x : \rr \ra \rr
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`to emphasize that WE ARE TALKING ABOUT A FUNCTION, e.g.,`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(2)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`is the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of 
the purple-white particle at
`}
                <NoBreak>
                  <Math>{String.raw`$
t = 2
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` etc), and write`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`for the function that gives
the `}
                <NoBreak>
                  <Math>{String.raw`$
y
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the purple-white 
particle as a function of time, and so on 
for all the other particles.`}
              </VerticalChunk>
              <VerticalChunk
                indent={true}
              >{String.raw`For example,`}</VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`because the rate of change of the 
`}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                  {String.raw`-coordinate`}
                </NoBreak>
                {String.raw` of the purple-white particle 
is the value of the `}
                <NoBreak>
                  <Math>{String.raw`$
x
$`}</Math>
                </NoBreak>
                {String.raw`-coordinate
of the yellow-white particle; we also have`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`by adding two such equations together; this can also be
written`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
(
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x)' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`by the sum rule; but this gives us an idea!; we can
try to `}
                <i>{String.raw`define`}</i>
                {String.raw` the original particles `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;by setting...`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`...and see if these definitions satisfy the constraints
of the problem! (We momentarily have two different
purple particles: the one from the problem statement, 
and the one that we have just defined; but that's ok,
as long as we are aware of this small semantic
transgression, it is not such a big deal, 
and we shall soon prove that these two
particles are one and the same.)
For starters...`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = (
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\!\rt{0.05})' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\,\!\!\!' = (
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\!\rt{0.05})' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = (
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\!\rt{0.05})' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\,\!\!\!' = (
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\!\rt{0.05})' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = (
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\!\rt{0.05})' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\,\!\!\!' = (
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\!\rt{0.05})' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = (
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\!\rt{0.05})' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\,\!\!\!' = (
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\!\rt{0.05})' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y =
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`...or...`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y\,\!\!\!' = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`...cutting out the middle computation, so the constraints
relating particle velocities to particle positions are
satisfied (e.g., the velocity vector of the purple particle
is the position vector of the yellow particle); 
for seconders, evaluating these definitions at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw` gives...`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) + 
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`...or...`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                <CenterDisplay>
                  <VerticalChunk>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_x(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                  <VerticalChunk indent={true}>
                    <br></br>
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0) = 2\,\,+
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                    <InlineImage
                      src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                      class="ch4_inline_blackwhite_particles"
                    ></InlineImage>
                    {String.raw``}
                    <NoBreak>
                      <Math>{String.raw`$
_y(0)
$`}</Math>
                    </NoBreak>
                    {String.raw``}
                  </VerticalChunk>
                </CenterDisplay>
                {String.raw`...cutting out the middle computation, which is to
say that the positions at time `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw` of our 
newly-defined particles `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;and`}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;are the translate of the white particle
positions at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw` back up and to the right
by the vector `}
                <NoBreak>
                  <Math>{String.raw`$
(2, 4)
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` which brings those
positions back to the original positions of `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;and `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;as they appear in the problem statement! I.e.,
our newly-defined
particles `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;and `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;are in the desired place at `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw`!`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`In other words, the proposed definitions of `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`, `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;and `}
                <InlineImage
                  src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                  class="ch4_inline_blackwhite_particles"
                ></InlineImage>
                {String.raw`&ensp;“work” in the sense of satisfying all the conditions
of the problem statement, and are, indeed, the
solution we seek.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Qualitatively, this implies that the particles
can be understood as four particles rotating at 
unit speed around a circle of radius `}
                <NoBreak>
                  <Math>{String.raw`$
1
$`}</Math>
                </NoBreak>
                {String.raw` (the 
white particles) where the center of circle (the 
UNO particle) is moving at exponential rate along
a half-line. In particular, the particles remain
at constant distance from one another for all `}
                <NoBreak>
                  <Math>{String.raw`$
t
$`}</Math>
                </NoBreak>
                {String.raw`,
whether that seems intuitive or not.`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw`Concretely, 
the particle trajectories
end up like so, locally around `}
                <NoBreak>
                  <Math>{String.raw`$
t = 0
$`}</Math>
                </NoBreak>
                {String.raw`:`}
              </VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_circle_at_2_4_solution_curves.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The above plot goes from `}
                <NoBreak>
                  <Math>{String.raw`$
t = -5
$`}</Math>
                </NoBreak>
                {String.raw` to 
`}
                <NoBreak>
                  <Math>{String.raw`$
t \approx 1
$`}</Math>
                  {String.raw`—winding`}
                </NoBreak>
                {String.raw` further back in time would produce
near-perfect counterclockwise circular motion,
as the black particles rush up to `}
                <NoBreak>
                  <Math>{String.raw`$
(0, 0)
$`}</Math>
                </NoBreak>
                {String.raw`
and come to a near-halt rather fast,
leaving only the residual motion of the white
particles!`}
              </VerticalChunk>
              <VerticalChunk indent={true}>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
When we said that, for `}
                <NoBreak>
                  <Math>{String.raw`$
t > 0
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` there ensues`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplay>{String.raw`“a [kind of] four-particle explosion”`}</CentralDisplay>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`in the first paragraph of the solution, the word 
“explosion” might be misleading, implying increased
distances between the particles over time. This is
not the case! (But we didn't know any better, back
then.)`}</VerticalChunk>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 2.`}</i>
                {String.raw`
As you might already have caught on, but is
maybe worth emphasizing,`}
              </VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`speed`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is not the same thing as`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`velocity`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`because, specifically, speed is`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`distance per unit time`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`—a nonnegative number—whereas velocity is`}</VerticalChunk>
              <div class="spacer"></div>
              <CentralDisplayItalic>{String.raw`displacement per unit time`}</CentralDisplayItalic>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`—a vector-valued quantity, or `}
                <NoBreak>
                  <Math>{String.raw`$
\pm
$`}</Math>
                  {String.raw`-valued`}
                </NoBreak>
                {String.raw` quantity,
in 1 dimension!`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={39}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 40.`}</b>
              {String.raw`
Find a nonzero function `}
              <NoBreak>
                <Math>{String.raw`$
f
$`}</Math>
              </NoBreak>
              {String.raw` and a nonzero
constant `}
              <NoBreak>
                <Math>{String.raw`$
a \in \rr
$`}</Math>
              </NoBreak>
              {String.raw` such that`}
            </VerticalChunk>
            <div class="spacer"></div>
            <MathBlock>{String.raw`$$
f'(x) = f(x + a)
$$`}</MathBlock>
            <div class="spacer"></div>
            <VerticalChunk>
              {String.raw`for all `}
              <NoBreak>
                <Math>{String.raw`$
x
$`}</Math>
                {String.raw`.`}
              </NoBreak>
              {String.raw` `}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={39}>
              <VerticalChunk>{String.raw`Recall the curves from Exercise 12:`}</VerticalChunk>
              <div class="spacer"></div>
              <Image src="/images/svg_ch4_cosine_recall.svg"></Image>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`The blue curve is the derivative of the red curve
but is also the horizontal translate of the red curve by
`}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                </NoBreak>
                {String.raw` units to the left, where`}
              </VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>
                {String.raw`$$
a
$$`}
                <ImageLeft src="/images/svg_ch4_cosine_recall_cloud.svg"></ImageLeft>
              </MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is the distance between adjacent bumps. Thus if`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`is the function that generates the red curve, then`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
f'(x) = f(x + a)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>{String.raw`using the fact that`}</VerticalChunk>
              <div class="spacer"></div>
              <MathBlock>{String.raw`$$
y = f(x + a)
$$`}</MathBlock>
              <div class="spacer"></div>
              <VerticalChunk>
                {String.raw`is the horizontal translate of `}
                <NoBreak>
                  <Math>{String.raw`$
y = f(x)
$`}</Math>
                </NoBreak>
                {String.raw` by `}
                <NoBreak>
                  <Math>{String.raw`$
a
$`}</Math>
                </NoBreak>
                {String.raw` 
units to the left, in general for any function
`}
                <NoBreak>
                  <Math>{String.raw`$
f
$`}</Math>
                </NoBreak>
                {String.raw` and constant `}
                <NoBreak>
                  <Math>{String.raw`$
a \in \rr
$`}</Math>
                  {String.raw`,`}
                </NoBreak>
                {String.raw` as discussed 
in Exercise 14 of Chapter 3. (Well, this shows
one solution, at least.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
          <Exercise exercise_number={40}>
            <VerticalChunk>
              {String.raw``}
              <b>{String.raw`Exercise 41.`}</b>
              {String.raw`
Express the...`}
            </VerticalChunk>
            <VerticalChunk indent={true}>
              <ul style="margin:1em 0 0 2.5em">
                <li>
                  <VerticalChunk>{String.raw`associativity of function composition`}</VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>{String.raw`associativity of function kmultiplication`}</VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>{String.raw`associativity of function addition</li>`}</VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>{String.raw`commutativity of function multiplication</li>`}</VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>{String.raw`commutativity of function addition</li>`}</VerticalChunk>
                </li>
              </ul>
              {String.raw`...as well as the..`}
            </VerticalChunk>
            <VerticalChunk indent={true}>
              <ul style="margin:1em 0 0 2.5em">
                <li>
                  <VerticalChunk>{String.raw`associativity of real number multiplication`}</VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>{String.raw`associativity of real number addition`}</VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>{String.raw`commutativity of real number multiplication`}</VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>{String.raw`commutativity of real number addition`}</VerticalChunk>
                </li>
              </ul>
              {String.raw`...in the form of self-contained, formal statements.`}
            </VerticalChunk>
            <div class="spacer"></div>
            <Solution solution_number={40}>
              <VerticalChunk>{String.raw`For the functions:`}</VerticalChunk>
              <ul style="margin:1em 0 0 2.5em">
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the associativity of function multiplication is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
(f \circ g) \circ h = f \circ (g \circ h)
$`}</Math>
                      </NoBreak>
                      {String.raw`
for all functions `}
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
                      {String.raw` such that 
`}
                      <NoBreak>
                        <Math>{String.raw`$
h : D \ra C
$`}</Math>
                        {String.raw`,`}
                      </NoBreak>
                      {String.raw` `}
                      <NoBreak>
                        <Math>{String.raw`$
g : C \ra B
$`}</Math>
                        {String.raw`,`}
                      </NoBreak>
                      {String.raw` `}
                      <NoBreak>
                        <Math>{String.raw`$
f : B \ra A
$`}</Math>
                      </NoBreak>
                      {String.raw` 
[for arbitrary sets `}
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
                      {String.raw`]`}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the associativity of function multiplication is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
f(gh) = (fg)h
$`}</Math>
                      </NoBreak>
                      {String.raw` for all `}
                      <NoBreak>
                        <Math>{String.raw`$
f, g, h : \rr \ra \rr
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the associativity of function addition is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
f + (g + h) = (f + g) + h
$`}</Math>
                      </NoBreak>
                      {String.raw` for all `}
                      <NoBreak>
                        <Math>{String.raw`$
f, g, h : \rr \ra \rr
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the commutativity of function multiplication is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
fg = gf
$`}</Math>
                      </NoBreak>
                      {String.raw` for all `}
                      <NoBreak>
                        <Math>{String.raw`$
f, g : \rr \ra \rr
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the commutativity of function addition is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
f + g = g + f
$`}</Math>
                      </NoBreak>
                      {String.raw` for all `}
                      <NoBreak>
                        <Math>{String.raw`$
f, g : \rr \ra \rr
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
              </ul>
              <ImageLeft src="/images/svg_ch4_express_the_f_g_h_A_B_C_D_cloud.svg"></ImageLeft>
              <VerticalChunk>{String.raw`For the real numbers:`}</VerticalChunk>
              <ul style="margin:1em 0 0 2.5em">
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the associativity of [real number] multiplication is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
a(bc) = (ab)c
$`}</Math>
                      </NoBreak>
                      {String.raw` for all `}
                      <NoBreak>
                        <Math>{String.raw`$
a, b, c \in \rr
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the associativity of [real number] addition is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
a + (b + c) = (a + b) + c
$`}</Math>
                      </NoBreak>
                      {String.raw` for all `}
                      <NoBreak>
                        <Math>{String.raw`$
a, b, c \in \rr
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the commutativity of [real number] multiplication is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
ab = ba
$`}</Math>
                      </NoBreak>
                      {String.raw` for all `}
                      <NoBreak>
                        <Math>{String.raw`$
a, b \in \rr
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    {String.raw``}
                    <i>
                      {String.raw`the commutativity of [real number] addition is
the fact that `}
                      <NoBreak>
                        <Math>{String.raw`$
a + b = b + a
$`}</Math>
                      </NoBreak>
                      {String.raw` for all `}
                      <NoBreak>
                        <Math>{String.raw`$
a, b \in \rr
$`}</Math>
                      </NoBreak>
                      {String.raw``}
                    </i>
                    {String.raw``}
                  </VerticalChunk>
                </li>
              </ul>
              <div class="spacer"></div>
              <Pause></Pause>
              <VerticalChunk>
                {String.raw``}
                <i>{String.raw`Note 1.`}</i>
                {String.raw`
We never took the time to prove the associativity
of function addition, but it is easy to prove! 
(For other proofs see Exercise 32, Exercise 33, as
well as Exercise 9, Chapter 3.)`}
              </VerticalChunk>
            </Solution>
          </Exercise>
        </Exercises>
      </Chapter4>
    </>
  );
};
export default Article;
