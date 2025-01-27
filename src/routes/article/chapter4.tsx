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
         number={4}
         title="Derivatives">
      <Image
           src="/images/svg_ch4_ch_polaroids.svg" />
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Definitions.
          </b>
          {" "}
          The{" "}
          <i>
            derivative
          </i>
          {" "}of a function
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
          is a (new) function
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f' : \rr \ra \rr
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          that gives the slope of{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}at each point. 
          In other words
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f'(a)
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is the slope of the graph{" "}
          <NoBreak>
            <Math>
              $
              y = f(x)
              $
            </Math>
          </NoBreak>
          {" "}at
          {" "}
          <NoBreak>
            <Math>
              $
              x = a
              $
            </Math>
            .
          </NoBreak>
          {" "}And—surprise!—each pair of graphs
          above is a pair of the form{" "}
          <NoBreak>
            <Math>
              $
              y = f(x)
              $
            </Math>
          </NoBreak>
          {" "}[
          <NoBreak>
            <Math>
              $
              =
              $
            </Math>
          </NoBreak>
          {" "}
          “before”],{" "}
          <NoBreak>
            <Math>
              $
              y = f'(x)
              $
            </Math>
          </NoBreak>
          {" "}[
          <NoBreak>
            <Math>
              $
              =
              $
            </Math>
          </NoBreak>
          {" "}“after”]. (Meaning,
          the “after” graph records the slope of the 
          “before” graph.) E.g.:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_explanation1.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          Note that{" "}
          <NoBreak>
            <Math>
              $
              f'\!
              $
            </Math>
          </NoBreak>
          {" "}(read “
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}prime”) remains 
          undefined where{" "}
          <NoBreak>
            <Math>
              $
              y = f(x)
              $
            </Math>
          </NoBreak>
          {" "}has a sharp “corner” 
          and no well-defined slope. By opposition, if 
          there is a well-defined tangent line to 
          {" "}
          <NoBreak>
            <Math>
              $
              y = f(x)
              $
            </Math>
          </NoBreak>
          {" "}at{" "}
          <NoBreak>
            <Math>
              $
              x = a
              $
            </Math>
          </NoBreak>
          {" "}the slope of this
          tangent line supplies the value of{" "}
          <NoBreak>
            <Math>
              $
              f'(a)
              $
            </Math>
          </NoBreak>
          :
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_explanation2.svg" />
        <ImageRight
             src="/images/svg_ch4_explanation2_cloud.svg"
             offset_x="-5em"
             offset_y="1em"
             y="top" />
        <VerticalChunk>
          In fact,
          we can
          succinctly describe the derivative by...
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f'(a) = \te&#123;[slope of tangent line to $y = f(x)$ at $x = a$]&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          ...with the understanding that{" "}
          <NoBreak>
            <Math>
              $
              f'(a)
              $
            </Math>
          </NoBreak>
          {" "}is 
          undefined if a tangent line does not exist 
          or if the tangent is vertical. But for one 
          last asterisk—and speaking of the existence,
          or not, of the tangent—note that the endpoint
          of a curve does not count as having a tangent,
          and therefore leaves a missing value for the 
          derivative:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_explanation_one_sided_tangent.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          (In other words, “half-tangents” do not actually 
          count as tangents.){" "}
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Vocabulary.
          </b>
          {" "}
          A function{" "}
          <NoBreak>
            <Math>
              $
              f : \rr \ra \rr
              $
            </Math>
          </NoBreak>
          {" "}is
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          differentiable
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          if{" "}
          <NoBreak>
            <Math>
              $
              \dom\,f' = \dom\,f
              $
            </Math>
            .
          </NoBreak>
          {" "}Also, if{" "}
          <NoBreak>
            <Math>
              $
              a, b \in \rr
              $
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $
              a &lt; b
              $
            </Math>
            ,
          </NoBreak>
          {" "}{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}is
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          differentiable on{" "}
          <NoBreak>
            <Math>
              $
              [a,b]
              $
            </Math>
          </NoBreak>
          {" "}{" "}
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          if{" "}
          <NoBreak>
            <Math>
              $
              [a,b] \subseteq \dom \,f'
              $
            </Math>
            .
          </NoBreak>
          {" "}Lastly,{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}is
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          differentiable at{" "}
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
          if{" "}
          <NoBreak>
            <Math>
              $
              a \in \dom\,f'
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
            Sketching a Derivative.
          </b>
          {" "}
          Say that you would like to sketch the derivative
          of the “before” function from the last “before”/“after” pair above
          (the one with the closed endpoints):
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_curve_to_sketch.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          One method is simply to eyeball the slope at 
          a few points along the curve, plot these 
          values and interpolate:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_first_derivative_sketch.svg" />
        <ImageRight
             src="/images/svg_ch4_polaroid_cloud.svg" />
        <VerticalChunk>
          ...voilà!
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          An alternate approach is to start by
          determining intervals on which the derivative
          is positive and negative, and then to 
          interpolate via the largest (respectively, 
          smallest) value of the derivative in each 
          interval:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_second_derivative_sketch_pt1.svg" />
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_second_derivative_sketch_pt2.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          The result (at bottom right)
          is a charming “robosketch” of the true
          derivative! (Well, charming in our opinion,
          at least.)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Derivative of a constant function.
          </b>
          {" "}
          A constant function is a function of the form{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x \ra B
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          for some{" "}
          <NoBreak>
            <Math>
              $
              B \in \rr
              $
            </Math>
          </NoBreak>
          {" "}independent of{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
          </NoBreak>
          .
          The graph of the constant function is the line{" "}
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          y = B
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          of slope{" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
            .
          </NoBreak>
          {" "}So
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (x \ra B)' = (x \ra 0)
          $$
          <ImageLeft
               src="/images/svg_ch4_constant_derivative_cloud.svg" />
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          because at each{" "}
          <NoBreak>
            <Math>
              $
              x
              $
            </Math>
            -value
          </NoBreak>
          {" "}you find a slope of
          {" "}
          <NoBreak>
            <Math>
              $
              0
              $
            </Math>
            ,
          </NoBreak>
          {" "}when you look up (down?) at the graph.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          If we refer to
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x \ra 0
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          as the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          zero function
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          we can summarize the situation by saying that
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          ~ the derivative of a constant function
          is the zero function ~
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          or, more shortly,
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          ~ the derivative of a constant is zero ~
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          (the way people usually state it).
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Derivative of an affine function.
          </b>
          {" "}
          An affine function is a function of the form
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          x \ra Ax + B
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
              B \in \rr
              $
            </Math>
          </NoBreak>
          .
          The graph of{" "}
          <NoBreak>
            <Math>
              $
              x \ra Ax + B
              $
            </Math>
          </NoBreak>
          {" "}is a line of 
          slope{" "}
          <NoBreak>
            <Math>
              $
              A
              $
            </Math>
            ,
          </NoBreak>
          {" "}so
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (x \ra Ax + B)' = (x \ra A)
          $$
          <ImageLeft
               src="/images/svg_ch4_affine_derivative_cloud.svg" />
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          because the slope of a line of slope{" "}
          <NoBreak>
            <Math>
              $
              A
              $
            </Math>
          </NoBreak>
          {" "}is
          {" "}
          <NoBreak>
            <Math>
              $
              A
              $
            </Math>
            ,
          </NoBreak>
          {" "}no matter where you put yourself on the
          line. In particular,{" "}
          <NoBreak>
            <Math>
              $
              B
              $
            </Math>
          </NoBreak>
          {" "}plays no role in the
          derivative! (
          <NoBreak>
            <Math>
              $
              \,
              $
            </Math>
            Just
          </NoBreak>
          {" "}like in the case of a
          constant function, the derivative leaves no
          trace of{" "}
          <NoBreak>
            <Math>
              $
              B
              $
            </Math>
            's
          </NoBreak>
          {" "}value—and for the same reason
          that{" "}
          <NoBreak>
            <Math>
              $
              B
              $
            </Math>
          </NoBreak>
          {" "}effects a vertical translation, which
          does not change the slope of anything.)
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          In words:
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          ~ the derivative of the affine function 
          {" "}
          <NoBreak>
            <Math>
              $
              y = ax + b
              $
            </Math>
          </NoBreak>
          {" "}is the constant function{" "}
          <NoBreak>
            <Math>
              $
              y = a
              $
            </Math>
          </NoBreak>
          {" "}~
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          Or, flexing our linguistic prowess a tad more:
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          ~ the derivative of an affine function is 
          the coefficient of its linear term ~
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          (The “linear term” of{" "}
          <NoBreak>
            <Math>
              $
              y = ax + b
              $
            </Math>
          </NoBreak>
          {" "}is{" "}
          <NoBreak>
            <Math>
              $
              ax
              $
            </Math>
            ,
          </NoBreak>
          {" "}
          of coefficient{" "}
          <NoBreak>
            <Math>
              $
              a
              $
            </Math>
          </NoBreak>
          .)
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
            One has
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (x \ra 3x + 1)' = (x \ra 3)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            as per
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            with{" "}
            <NoBreak>
              <Math>
                $
                A = 3
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                B = 1
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
            One has
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (x \ra 12 - x)' = (x \ra -1)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            as per
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            with{" "}
            <NoBreak>
              <Math>
                $
                A = -1
                $
              </Math>
              ,
            </NoBreak>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                B = 12
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
            Units of the Derivative.
          </b>
          {" "}
          If units are present, we have
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \te&#123;$y$ axis units for $f'$&#125; \,= &#123;\te&#123;$y$ axis units for $\f$&#125; \over \te&#123;$x$ axis units for $\f$&#125;&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          because a value output by{" "}
          <NoBreak>
            <Math>
              $
              \f'
              $
            </Math>
          </NoBreak>
          {" "}is the
          {" "}
          <i>
            slope
          </i>
          {" "}of a tangent line attached to the
          graph{" "}
          <NoBreak>
            <Math>
              $
              y = f(x)
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
          \te&#123;$x$ axis units for $f'$&#125;\, = \rt&#123;0.02&#125;\,\te&#123;$x$ axis units for $f$&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          because an input for{" "}
          <NoBreak>
            <Math>
              $
              \f'
              $
            </Math>
          </NoBreak>
          {" "}is, originally, 
          an input for{" "}
          <NoBreak>
            <Math>
              $
              \f
              $
            </Math>
          </NoBreak>
          .
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          For example, if the “before” graph has units 
          of...
        </VerticalChunk>
        <ul>
          <li>
            <VerticalChunk>
              seconds on the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}axis, meters on the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis
            </VerticalChunk>
          </li>
        </ul>
        <ImageRight
             src="/images/svg_ch4_units1_cloud.svg" />
        <VerticalChunk>
          ...then the “after” graph will have units of...
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          <ul>
            <li>
              <VerticalChunk>
                seconds on the{" "}
                <NoBreak>
                  <Math>
                    $
                    x
                    $
                  </Math>
                </NoBreak>
                {" "}axis, meters per
                second on the{" "}
                <NoBreak>
                  <Math>
                    $
                    y
                    $
                  </Math>
                </NoBreak>
                {" "}axis
              </VerticalChunk>
            </li>
          </ul>
          ...while if the “before” graph has units of...
        </VerticalChunk>
        <ul>
          <li>
            <VerticalChunk>
              years on the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}axis, dollars on the
              {" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis
            </VerticalChunk>
          </li>
        </ul>
        <ImageLeft
             src="/images/svg_ch4_units2_cloud.svg" />
        <VerticalChunk>
          ...then the “after” graph will have units of...
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          <ul>
            <li>
              <VerticalChunk>
                years on the{" "}
                <NoBreak>
                  <Math>
                    $
                    x
                    $
                  </Math>
                </NoBreak>
                {" "}axis, dollars per
                year on the{" "}
                <NoBreak>
                  <Math>
                    $
                    y
                    $
                  </Math>
                </NoBreak>
                {" "}axis
              </VerticalChunk>
            </li>
          </ul>
          ...and so on.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Units might additionally prompt us to refer
          to{" "}
          <NoBreak>
            <Math>
              $
              f'
              $
            </Math>
          </NoBreak>
          {" "}as the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          rate of change
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
            ,
          </NoBreak>
          {" "}or, depending, as the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          instantaneous
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          rate of change of{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            .
          </NoBreak>
          {" "}The latter bit of
          emphasis has to do with the fact that, in a
          general graph, the slope of the tangent
          keeps changing from point to point.
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            The second derivative.
          </b>
          {" "}
          The{" "}
          <i>
            second derivative
          </i>
          {" "}of{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
          </NoBreak>
          {" "}is the derivative
          of the derivative of{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            .
          </NoBreak>
          {" "}It is written “
          <NoBreak>
            <Math>
              $
              f''
              $
            </Math>
          </NoBreak>
          ”:
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \,\,\,f'' = (f')'.
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          Likewise, we have, e.g.,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          \begin&#123;align&#125;
          \up&#123;0.95&#125;f''' &= (f'')'\\
          \up&#123;1.25&#125;f'''' &= (f''')'\\
          \up&#123;1.25&#125;f''''\psa' &= (f'''')'\\
          \end&#123;align&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          these being, namely, the{" "}
          <i>
            third
          </i>
          ,{" "}
          <i>
            fourth
          </i>
          {" "}
          and{" "}
          <i>
            fifth
          </i>
          {" "}derivatives of{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            .
          </NoBreak>
          {" "}One can also 
          write
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f^&#123;(n)&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          for the{" "}
          <NoBreak>
            <Math>
              $
              n
              $
            </Math>
            -th
          </NoBreak>
          {" "}derivative of{" "}
          <NoBreak>
            <Math>
              $
              f
              $
            </Math>
            ,
          </NoBreak>
          {" "}so that, for
          example,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f^&#123;(7)&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          means the same as
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f'''''''
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          but with the advantage that you don't have to
          squint and start re-counting the apostrophes 
          several times over.
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
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
            <ImageRight
                 src="/images/svg_ch4_3x_plus_one_and_second_cloud.svg" />
          </MathBlock>
        </Example>
        <div
             class="spacer" />
        <VerticalChunk>
          because, firstly,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (x \ra 3x + 1)' = (x \ra 3)
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          and, secondly,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (x \ra 3)' = (x \ra 0)
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          so that, from start to finish,
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          (x \ra 3x + 1)'' =  ((x \ra 3x + 1)')' = (x \ra 3)' = (x \ra 0)
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          where we unpeel the onion starting from the
          inside. (Physically difficult.)
        </VerticalChunk>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 4.
            </b>
            {" "}
            More generally,
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \,\,\,(x \ra ax + b)'' = (x \ra 0)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for all{" "}
            <NoBreak>
              <Math>
                $
                a, b \in \rr
                $
              </Math>
              ,
            </NoBreak>
            {" "}by a similar computation;
            a.k.a.:
          </VerticalChunk>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            ~ the second derivative of an affine function is zero ~
            <ImageLeft
                 src="/images/svg_ch4_adding_statements_cloud.svg" />
          </CentralDisplayItalic>
        </Example>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Geometric interpretation of the second derivative.
          </b>
          {" "}
          The sign of the second derivative—whether
          it is positive or negative—indicates whether
          a graph is “bending upwards” or “bending 
          downwards”. Upward-bending graphs have a positive
          second derivative, whereas downward-bending graphs
          have a negative second derivative:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_bendiness.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          Reason like this: the second derivative is{" "}
          <del>
            <VerticalChunk>
              “the rate of change of the rate of change”.
            </VerticalChunk>
          </del>
          Sorry: “the rate of change of the slope”. 
          (Same difference.) Ergo, if the second derivative
          is positive, the slope is increasing; if the
          second derivative is negative, the slope is 
          decreasing. Moreover, an
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          increasing
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          slope gives curves a “bending upwards” shape, while a
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          decreasing
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          slope gives curves a “bending downward” shape!
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          To emphasize, if the second derivative is some
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplay>
          LARGE POSITIVE NUMBER
        </CentralDisplay>
        <div
             class="spacer" />
        <VerticalChunk>
          then the slope is increasing at that rate, 
          which could result in a sharp bend upwards
          in the graph (unless you are near vertical
          already—you can't see the difference between
          slope{" "}
          <NoBreak>
            <Math>
              $
              100
              $
            </Math>
          </NoBreak>
          {" "}and slope{" "}
          <NoBreak>
            <Math>
              $
              1000
              $
            </Math>
          </NoBreak>
          {" "}very well, at most
          scales—nor between{" "}
          <NoBreak>
            <Math>
              $
              -1000
              $
            </Math>
          </NoBreak>
          {" "}and{" "}
          <NoBreak>
            <Math>
              $
              -100
              $
            </Math>
            ,
          </NoBreak>
          {" "}for that
          matter).
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Likewise, if the second derivative is some
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplay>
          LARGE NEGATIVE NUMBER
        </CentralDisplay>
        <div
             class="spacer" />
        <VerticalChunk>
          then the slope is decreasing at [the absolute 
          value of] that rate, which could result in 
          a sharp bend downwards in the graph (unless
          you are near vertical already, once again,
          because verticality can disguise the presence
          of a significant change in slope, once again).
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            Vocabulary #1.
          </b>
          {" "}
          Curves with increasing (technically: 
          {" "}
          <i>
            nondecreasing
          </i>
          ) slope are called{" "}
          <i>
            convex
          </i>
          , 
          while curves with decreasing (technically: 
          {" "}
          <i>
            nonincreasing
          </i>
          ) slope are called{" "}
          <i>
            concave
          </i>
          .
          Viz:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_convex_concave.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          {" "}{" "}
          <b>
            Vocabulary #2.
          </b>
          {" "}
          An{" "}
          <i>
            inflection point
          </i>
          {" "}is a point at the
          interface between convex and concave sections
          of a graph:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_inflection_point.svg" />
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 5.
            </b>
            {" "}
            The fact that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            indicates that the graph
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            y = 3x + 1
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            is neither “bending upwards” nor “bending 
            downwards”—
            <NoBreak>
              <Math>
                $
                0
                $
              </Math>
            </NoBreak>
            {" "}is neither positive, nor negative.
          </VerticalChunk>
        </Example>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            The Second Derivative of Position.
          </b>
          {" "}
          A graph of the form...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_position_by_time.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          ...describes{" "}
          <i>
            position as a function of time
          </i>
          {" "}
          (look at the units); the derivative...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_position_by_time_der.svg" />
        <ImageRight
             src="/images/svg_ch4_position_by_time_cloud.svg" />
        <VerticalChunk>
          ...describes{" "}
          <i>
            velocity as a function of time
          </i>
          ;
          finally, the second derivative...
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_position_by_time_der_der.svg" />
        <ImageLeft
             src="/images/svg_ch4_position_by_time_der_cloud.svg" />
        <VerticalChunk>
          ...describes
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          the rate of change of velocity
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          also known as the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          acceleration
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          as a function of time.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          Note that the units on the{" "}
          <NoBreak>
            <Math>
              $
              y
              $
            </Math>
          </NoBreak>
          {" "}axis of the
          second derivative are given by
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units for $f'$&#125; \over \te&#123;$x$ axis units for $f'$&#125;&#125; = 
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125; = 
          &#123;\te&#123;m&#125; \over \rt&#123;0.1&#125;\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          because{" "}
          <NoBreak>
            <Math>
              $
              f'' = (f')'
              $
            </Math>
            .
          </NoBreak>
          {" "}The point is, a tangent
          to the graph{" "}
          <NoBreak>
            <Math>
              $
              y = f'(t)
              $
            </Math>
          </NoBreak>
          {" "}has a “rise” measured
          in meters per second and a “run” measured in 
          seconds:
        </VerticalChunk>
        <div
             class="spacer" />
        <Image
             src="/images/svg_ch4_position_by_time_tangent.svg" />
        <div
             class="spacer" />
        <VerticalChunk>
          The ratio “rise over run” has the form
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125; 
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125; \times &#123;1 \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          which produces the above-mentioned units of
          the second derivative. Also note that a ratio of
          the form
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;\te&#123;difference in velocity&#125; \over \te&#123;amount of time&#125;&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          is, indeed, an acceleration, in that acceleration
          is defined as “the increase in velocity per unit 
          time”.
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          To summarize:
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          ~ velocity is the derivative of position ~
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          ~ acceleration is the derivative of velocity ~
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          <StarDivider />
          {" "}{" "}
          <b>
            Note.
          </b>
          {" "}
          The exotic units
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          %\left[&#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^2&#125;\right]
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          %\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          can be read
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          meters per second squared
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          which sounds pretty cryptic, unfortunately, or
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          meters per second per second
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          which is better, or (slight difference!)
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          meters per second, per second
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          which is even better because it “shows” acceleration
          to be a number of m
          <NoBreak>
            <Math>
              $
              /
              $
            </Math>
            s
          </NoBreak>
          {" "}per second. (Acceleration{" "}
          <i>
            is
          </i>
          {" "}
          a number of m
          <NoBreak>
            <Math>
              $
              /
              $
            </Math>
            s
          </NoBreak>
          {" "}per second, no?)
        </VerticalChunk>
        <div
             class="spacer" />
        <Example>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Example 6.
            </b>
            {" "}
            Over a period of{" "}
            <NoBreak>
              <Math>
                $
                10
                $
              </Math>
              s,
            </NoBreak>
            {" "}an object that is
            accelerating at a constant rate of
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            increases its velocity by
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;) \times\, (10\te&#123;s&#125;) = 20&#123;\te&#123;m&#125;/\te&#123;s&#125;&#125;
            $$
            <ImageRight
                 src="/images/svg_ch4_unit_cancellation_cloud.svg" />
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            according to the template
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            or, more specifically,
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (\te&#123;acceleration&#125;) \times (\te&#123;amount of time&#125;) =\\ (\te&#123;change in velocity&#125;)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            since acceleration is the rate of change of
            velocity.
          </VerticalChunk>
        </Example>
      </Section>
      <div
           class="spacer" />
      <Section>
        <VerticalChunk>
          {" "}{" "}
          <b>
            The Jerk.
          </b>
          {" "}
          The rate of change of acceleration has a
          name as well, being known as the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          jerk
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          in physics. The units of jerk (or “the”
          units of jerk, since any units of same 
          {" "}
          <i>
            dimension
          </i>
          {" "}would do as well) are
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^3&#125;
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          or
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          meters per second, per second, per second
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          which is mildly amusing. Basically, the
          jerk specifies how many{" "}
          <i>
            meters per second,
            per second
          </i>
          {" "}(a measure of acceleration!)
          is being gained or lost{" "}
          <i>
            per second
          </i>
          .
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          The word “jerk” is aptly chosen,
          too, considering that people don't lose 
          balance under constant acceleration, but, 
          rather, when some some{" "}
          <i>
            jerk
          </i>
          {" "}occurs in 
          the movement of their train or subway car,
          etc. In fact,
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          constant acceleration
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          and
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          zero jerk
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          are synonymous, insofar as the everyday 
          world is concerned—which is good, because
          these notions are also equivalent in the
          mathematical realm, what with jerk being
          the derivative of acceleration!
        </VerticalChunk>
        <VerticalChunk
             indent={true}>
          {" "}{" "}
          <b>
            Postscript: Sums, Products, Quotients,
            and Differences of Functions.
          </b>
          {" "}
          Coming briefly back to Chapter 3-related
          matters, if
        </VerticalChunk>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f, g : \rr \ra \rr
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
          f \circ g = (x \ra f(g(x)))
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f + g = (x \ra f(x) + g(x))
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          fg = (x \ra f(x)g
          (x))
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          &#123;f/g&#125; = (x \ra &#123;f(x)/g(x)&#125;)
          $$
        </MathBlock>
        <div
             class="spacer" />
        <MathBlock>
          $$
          f - g = (x \ra f(x) - g(x))
          $$
        </MathBlock>
        <div
             class="spacer" />
        <VerticalChunk>
          with each equation being a{" "}
          <i>
            definition
          </i>
          . 
          The notation
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
          goes back to Exercise 5 of Chapter 3, with
          the little circle “
          <NoBreak>
            <Math>
              $
              \circ
              $
            </Math>
            ”
          </NoBreak>
          {" "}being known as
          the{" "}
          <i>
            composition operator
          </i>
          , while the sum
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
          and product
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
          of functions already appear in Exercise 18 of
          Chapter 3, also. On the other hand, the
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          quotient
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          (i.e.,{" "}
          <NoBreak>
            <Math>
              $
              f/g
              $
            </Math>
            )
          </NoBreak>
          {" "}and
        </VerticalChunk>
        <div
             class="spacer" />
        <CentralDisplayItalic>
          difference
        </CentralDisplayItalic>
        <div
             class="spacer" />
        <VerticalChunk>
          (i.e.,{" "}
          <NoBreak>
            <Math>
              $
              f - g
              $
            </Math>
            )
          </NoBreak>
          {" "}of two functions from{" "}
          <NoBreak>
            <Math>
              $
              \rr
              $
            </Math>
          </NoBreak>
          {" "}to
          {" "}
          <NoBreak>
            <Math>
              $
              \rr
              $
            </Math>
          </NoBreak>
          {" "}appear here for the first time! (We are
          “completing our collection”.)
        </VerticalChunk>
      </Section>
      <div
           class="spacer" />
      <Exercises
           labels={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"]}>
        <Exercise
             exercise_number={0}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 1.
            </b>
            {" "}
            Sketch the derivative of a function with the
            following graph (what{" "}
            <i>
              looks
            </i>
            {" "}like a sharp corner
            {" "}
            <i>
              is
            </i>
            {" "}a sharp corner):
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_slope_one_half_see_saw.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={0}>
            <VerticalChunk>
              That would be:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_slope_one_half_see_saw_derivative.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (The derivative is{" "}
              <NoBreak>
                <Math>
                  $
                  1/2
                  $
                </Math>
              </NoBreak>
              {" "}when the slope is{" "}
              <NoBreak>
                <Math>
                  $
                  1/2
                  $
                </Math>
              </NoBreak>
              ,
              is{" "}
              <NoBreak>
                <Math>
                  $
                  -1/2
                  $
                </Math>
              </NoBreak>
              {" "}when the slope is{" "}
              <NoBreak>
                <Math>
                  $
                  -1/2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and is undefined at
              the corners.)
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
            Would the derivative of
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            y = &#123;1\over x&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            be a very large negative number, or a very
            large positive number, near{" "}
            <NoBreak>
              <Math>
                $
                x = 0
                $
              </Math>
              ?
            </NoBreak>
            {" "}Or would
            it depend on which side of 0 you are?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={1}>
            <VerticalChunk>
              The graph of{" "}
              <NoBreak>
                <Math>
                  $
                  y = &#123;1 \over x&#125;
                  $
                </Math>
              </NoBreak>
              {" "}looks like so:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_over_x.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              As one can see, the slope is very negative
              near{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}on either side. So the answer is:
              “very large negative”.
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
            Sketch the
          </VerticalChunk>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            second
          </CentralDisplayItalic>
          <div
               class="spacer" />
          <VerticalChunk>
            derivative of the graph in Exercise 1.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={2}>
            <VerticalChunk>
              The second derivative is zero wherever the
              first derivative is flat, and is undefined
              wherever the first derivative is undefined;
              this gives the second derivative the following 
              pockmarked appearance:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_slope_one_half_see_saw_second_derivative.svg" />
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              Taking even further derivatives produces
              the same graph back, over and over again.
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
              “first derivative” is a synonym of “derivative”.{" "}
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
            If we pretend that the graph of Exercise 1
            depicts the{" "}
            <del>
              <VerticalChunk>
                distance that a car has traveled
                as a function of time,
              </VerticalChunk>
            </del>
            &ensp;position of a car as a function of 
            time, with hours (hr) on the{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
              -axis
            </NoBreak>
            {" "}
            and kilometers (km) on the{" "}
            <NoBreak>
              <Math>
                $
                y
                $
              </Math>
              -axis,
            </NoBreak>
            {" "}what
            do the units become on the axes of the first
            and second derivatives?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={3}>
            <VerticalChunk>
              The units on the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis become kilometers,
              kilometers per hour, and kilometers per
              hours squared (or “kilometers per hour, per
              hour”), including the first graph. (Each time
              another derivative is taken, divide the
              units of the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis by the units of the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}axis.) These are the position, velocity,
              and acceleration of the car as a function
              of time:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_slope_one_half_see_saw_with_units.svg" />
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_slope_one_half_see_saw_with_units_derivative.svg" />
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_slope_one_half_see_saw_with_units_second_derivative.svg" />
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
            Is the following equation correct, incorrect,
            or nonsensical?
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (x \ra x + 1) \,+\, (u \ra 2u + 1) \,=\, (t \ra 3t + 2)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <Solution
               solution_number={4}>
            <VerticalChunk>
              The equation is true!
              Syntatically,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is a
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              sum of functions
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              because{" "}
              <NoBreak>
                <Math>
                  $
                  x \ra x + 1
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  u \ra 2u + 1
                  $
                </Math>
              </NoBreak>
              {" "}are
              both functions. Now by definition, the sum
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
              of functions{" "}
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
              {" "}is the function
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x \ra f(x) + g(x)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              that maps a number to the sum of the individual
              values of the functions. So—for example—
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              & \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(5) \\
              =& \,\,\,(x \ra x + 1)(5) + (u \ra 2u + 1)(5) \up&#123;1.5&#125; \\
              =& \,\,\,(5 + 1) + (2\cdot 5 + 1) \up&#123;1.5&#125; \\
              =& \,\,\,3\cdot 5 + 2 = 17 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and—with a general input{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              —
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              & \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(t) \\
              =& \,\,\,(x \ra x + 1)(t) + (u \ra 2u + 1)(t) \up&#123;1.5&#125; \\
              =& \,\,\,(t + 1) + (2t + 1) \up&#123;1.5&#125; \\
              =& \,\,\,3t + 2 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which implies that, indeed,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the function that maps each real number{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  3t + 2
                  $
                </Math>
              </NoBreak>
              ,
              i.e., is equal to the function{" "}
              <NoBreak>
                <Math>
                  $
                  t \ra 3t + 2
                  $
                </Math>
                .
              </NoBreak>
              {" "}(!!)
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
              One can also do the main computation with{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              in place of{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              & \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(x) \\
              =& \,\,\,(x \ra x + 1)(x) + (u \ra 2u + 1)(x) \up&#123;1.5&#125; \\
              =& \,\,\,(x + 1) + (2x + 1) \up&#123;1.5&#125; \\
              =& \,\,\,3x + 2 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              Here we have two different{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                's:
              </NoBreak>
              {" "}the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}that
              denotes the input, and the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}that is used as
              a placeholder to describe how the first function
              acts.
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
            Complete the missing units for each strip
            below, based on those units that are given:
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_missing_units.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={5}>
            <VerticalChunk>
              The pattern to respect is that, each time 
              you take a derivative, the units on the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              axis stay the same, while the units on the
              {" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis become divided by those on the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}
              axis. This gives the unique solutions:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_missing_units_solution.svg" />
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              A unit of “
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is a
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              dimensionless
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              unit. Dimensionless units arise when 
              quantities are divided by like quantities.
              Think of dimensionless quantities as “pure 
              fractions” or “pure ratios”. (Percentages
              are dimensionless—in fact the term
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              percentage
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              is synonymous with
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              dimensionless ratio
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              though if you spoke to people about 
              “dimensionless ratios” they would look at 
              you funny. Also percentages are a system of
              notation, whereby the symbol “%” means 
              “divide the preceding number by 100, in 
              order to discover the numerical value of 
              the ratio I'm talking about”.) (To drive
              it home: In Chinese, the written expressions 
              “
              <NoBreak>
                <Math>
                  $
                  23\%
                  $
                </Math>
                ”
              </NoBreak>
              {" "}and “
              <NoBreak>
                <Math>
                  $
                  23/100
                  $
                </Math>
                ”
              </NoBreak>
              {" "}are 
              indistinguishable when read out loud; they
              are both  read “
              <NoBreak>
                <Math>
                  $
                  23
                  $
                </Math>
              </NoBreak>
              {" "}over{" "}
              <NoBreak>
                <Math>
                  $
                  100
                  $
                </Math>
                ”;
              </NoBreak>
              {" "}that is
              the simple{" "}
              <i>
                &
              </i>
              {" "}correct way!)
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
            Among the functions below, which is the
            zeroth, first, and second derivative? 
            (I.e., which is{" "}
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
                f'
                $
              </Math>
              ,
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                f''
                $
              </Math>
              ,
            </NoBreak>
            {" "}
            assuming that relationship exists.)
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_position_by_time_find_the_order.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={6}>
            <VerticalChunk>
              The graphs are already in the right order 
              (hehe): if “
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is the original function 
              then{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}is on the left,{" "}
              <NoBreak>
                <Math>
                  $
                  f'
                  $
                </Math>
              </NoBreak>
              {" "}is in the 
              middle, and{" "}
              <NoBreak>
                <Math>
                  $
                  f''
                  $
                </Math>
              </NoBreak>
              {" "}is on the right:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_position_by_time_find_the_order_answer.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              For example, the graph on the left 
              has a slope that starts at{" "}
              <NoBreak>
                <Math>
                  $
                  \sim\!-1
                  $
                </Math>
              </NoBreak>
              {" "}and
              ends at{" "}
              <NoBreak>
                <Math>
                  $
                  \sim\!1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}while those are the
              values at which the graph in the middle
              starts and ends (and not coincidentally,
              since the graph in the middle is the
              derivative of the graph on the left!):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_position_by_time_find_the_order_first_pair.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Moreover the middle graph has slope
              close to{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}at either end, and some
              slope near{" "}
              <NoBreak>
                <Math>
                  $
                  1.5
                  $
                </Math>
              </NoBreak>
              {" "}or{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
              </NoBreak>
              {" "}towards the middle,
              matching the{" "}
              <i>
                values
              </i>
              {" "}of the graph
              on the right:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_position_by_time_find_the_order_second_pair.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (Taking one more derivative would produce a
              zigzag, by the way.)
              <ImageRight
                   src="/images/svg_ch4_position_by_time_find_the_order_cloud.svg" />
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
            Given these graphs...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_sketch_the_middle_a.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...what can you say about{" "}
            <NoBreak>
              <Math>
                $
                g'(x)
                $
              </Math>
            </NoBreak>
            ?
            (Produce the best sketch of{" "}
            <NoBreak>
              <Math>
                $
                g'(x)
                $
              </Math>
            </NoBreak>
            {" "}that
            you can, taking into account all the
            information above.) (Don't get us wrong:
            You don't{" "}
            <i>
              need
            </i>
            {" "}the second derivative
            to sketch the first derivative, but if
            you're a human and not a machine, it can
            help!)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={7}>
            <VerticalChunk>
              To start with, the slope of{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
              </NoBreak>
              {" "}seems to be
              about{" "}
              <NoBreak>
                <Math>
                  $
                  -1.5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}and (a bit greater than){" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
              </NoBreak>
              {" "}
              at{" "}
              <NoBreak>
                <Math>
                  $
                  x = -2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
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
                  x = 2
                  $
                </Math>
              </NoBreak>
              {" "}respectively:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_a_sol1.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              This already gives us three points from which
              to interpolate a basic approximation to the graph 
              {" "}
              <NoBreak>
                <Math>
                  $
                  y = g'(x)
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_a_sol2.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              But the graph of{" "}
              <NoBreak>
                <Math>
                  $
                  g''(x)
                  $
                </Math>
              </NoBreak>
              {" "}indicates more,
              namely that{" "}
              <NoBreak>
                <Math>
                  $
                  g'(x)
                  $
                </Math>
              </NoBreak>
              {" "}has a slope that rises 
              from{" "}
              <NoBreak>
                <Math>
                  $
                  \approx 0.2
                  $
                </Math>
              </NoBreak>
              {" "}near the left edge of 
              the graph up to{" "}
              <NoBreak>
                <Math>
                  $
                  1.3
                  $
                </Math>
              </NoBreak>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0.5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}before 
              falling again to{" "}
              <NoBreak>
                <Math>
                  $
                  0.6
                  $
                </Math>
              </NoBreak>
              {" "}past{" "}
              <NoBreak>
                <Math>
                  $
                  x = 2
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_a_sol3.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              As a second step, we thus “bend into shape”
              our previous sketch to produce these slopes...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_a_sol4.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...achieving our final answer.{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}For reference, the actual 
              derivative looks like so:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_a_sol5.svg" />
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
            Given these graphs...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_sketch_the_middle_b.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...sketch{" "}
            <NoBreak>
              <Math>
                $
                y = h'(x)
                $
              </Math>
              ,
            </NoBreak>
            {" "}analogously to
            Exercise 10.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={8}>
            <VerticalChunk>
              Firstly, the graph of{" "}
              <NoBreak>
                <Math>
                  $
                  h(x)
                  $
                </Math>
              </NoBreak>
              {" "}seems to have
              slope{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}around{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0.6
                  $
                </Math>
              </NoBreak>
              ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol1.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...which gives us one data point on the
              curve{" "}
              <NoBreak>
                <Math>
                  $
                  y = h'(x)
                  $
                </Math>
              </NoBreak>
              {" "}to start with...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol2.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...moreover, by the graph of{" "}
              <NoBreak>
                <Math>
                  $
                  h''(x)
                  $
                </Math>
              </NoBreak>
              ,
              the slope of{" "}
              <NoBreak>
                <Math>
                  $
                  h'(x)
                  $
                </Math>
              </NoBreak>
              {" "}is near{" "}
              <NoBreak>
                <Math>
                  $
                  -1/3
                  $
                </Math>
              </NoBreak>
              {" "}on an
              interval that is approximately (say)
              {" "}
              <NoBreak>
                <Math>
                  $
                  [-0.85,0.7]
                  $
                </Math>
              </NoBreak>
              ....
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol3.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...so, as a second step, we can extend
              the graph of{" "}
              <NoBreak>
                <Math>
                  $
                  h'(x)
                  $
                </Math>
              </NoBreak>
              {" "}by a segment of slope
              {" "}
              <NoBreak>
                <Math>
                  $
                  -1/3
                  $
                </Math>
              </NoBreak>
              {" "}on this interval:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol4.svg" />
            <ImageLeft
                 src="/images/svg_ch4_sketch_the_middle_b_cloud.svg" />
            <VerticalChunk>
              (To achieve a passable slope of{" "}
              <NoBreak>
                <Math>
                  $
                  -1/3
                  $
                </Math>
              </NoBreak>
              {" "}we
              modeled ourselves on a nearby grid segment.) 
              Next,{" "}
              <NoBreak>
                <Math>
                  $
                  h(x)
                  $
                </Math>
              </NoBreak>
              {" "}has slope{" "}
              <NoBreak>
                <Math>
                  $
                  \approx 1.2
                  $
                </Math>
              </NoBreak>
              {" "}at
              {" "}
              <NoBreak>
                <Math>
                  $
                  x = -2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and slope{" "}
              <NoBreak>
                <Math>
                  $
                  \approx -0.9
                  $
                </Math>
              </NoBreak>
              {" "}(?) at
              {" "}
              <NoBreak>
                <Math>
                  $
                  x = 2
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol5.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              This gives us two more points on the graph
              {" "}
              <NoBreak>
                <Math>
                  $
                  y = h'(x)
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol6.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Then, because the second derivative has
              value{" "}
              <NoBreak>
                <Math>
                  $
                  \approx -1/3
                  $
                </Math>
              </NoBreak>
              {" "}for{" "}
              <NoBreak>
                <Math>
                  $
                  x \leq -1.6
                  $
                </Math>
              </NoBreak>
              {" "}
              (about) and for{" "}
              <NoBreak>
                <Math>
                  $
                  x \geq 1.5
                  $
                </Math>
              </NoBreak>
              {" "}(about)...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol7.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...we extend these two new data points by
              segments of slope{" "}
              <NoBreak>
                <Math>
                  $
                  -1/3
                  $
                </Math>
              </NoBreak>
              ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol8.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...on the relevant intervals. (I.e., for 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x \leq -1.6
                  $
                </Math>
              </NoBreak>
              {" "}and for{" "}
              <NoBreak>
                <Math>
                  $
                  x \geq 1.5
                  $
                </Math>
                .)
              </NoBreak>
              {" "}The 
              last step is to join the existing segments 
              by some kind of “connector curves” of 
              yet-to-be-determined shape:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol9.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Since{" "}
              <NoBreak>
                <Math>
                  $
                  h''(x)
                  $
                </Math>
              </NoBreak>
              {" "}shows that the two 
              connectors have slopes of about{" "}
              <NoBreak>
                <Math>
                  $
                  -1/3
                  $
                </Math>
              </NoBreak>
              {" "}
              at their edges and slopes of about{" "}
              <NoBreak>
                <Math>
                  $
                  -1.4
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  -1.6
                  $
                </Math>
              </NoBreak>
              {" "}(respectively) near their
              middles...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol10.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...our final answer, given by the
              following sketch, is obtained by 
              “bending into shape” the connector curves...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol11.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...to give them a slope of{" "}
              <NoBreak>
                <Math>
                  $
                  -1/3
                  $
                </Math>
              </NoBreak>
              {" "}at
              their endpoints, and slopes of{" "}
              <NoBreak>
                <Math>
                  $
                  -1.4
                  $
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $
                  -1.6
                  $
                </Math>
                ,
              </NoBreak>
              {" "}respectively, in their middles.
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
              Here is the actual graph of{" "}
              <NoBreak>
                <Math>
                  $
                  h'
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_sketch_the_middle_b_sol12.svg" />
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
            If you scale the graph of a function{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}
            vertically by a factor{" "}
            <NoBreak>
              <Math>
                $
                2
                $
              </Math>
              —i.e.,
            </NoBreak>
            {" "}multiply
            each output by{" "}
            <NoBreak>
              <Math>
                $
                2
                $
              </Math>
              —is
            </NoBreak>
            {" "}the derivative 
            also scaled by{" "}
            <NoBreak>
              <Math>
                $
                2
                $
              </Math>
            </NoBreak>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={9}>
            <VerticalChunk>
              Yes, this is the case. For a joke way
              of seeing it, here is a graph of a 
              putative function{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
                ,
              </NoBreak>
              {" "}before and after
              scaling:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_scaling_figure.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The second graph truly is the first
              graph vertically scaled by a factor{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
              </NoBreak>
              ,
              because the scale on the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis has
              been doubled. This means that the ratio
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\te&#123;rise&#125;\over \te&#123;run&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              has doubled in the second graph, because
              “rise” has doubled (each{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -coordinate
              is twice as large!), whereas “run” stays
              the same. (So the slope of the tangent has
              doubled, so the derivative is doubled.)
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
            Where is the rate of change of the function
            below, on the part shown, greatest? And
            where is the
          </VerticalChunk>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            rate of change of the rate of change
          </CentralDisplayItalic>
          <div
               class="spacer" />
          <VerticalChunk>
            greatest?
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_narrow_and_less_narrow_bends.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={10}>
            <VerticalChunk>
              The rate of change is the slope, which
              is greatest along the right-hand portion
              of the curve:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_narrow_and_less_narrow_bends_steepest.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              On the other hand,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the rate of change
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              [a.k.a., second derivative] is the rate
              of change  of the slope, and that will
              be greatest at the first bend of the curve,
              where the slope is changing at the fastest 
              rate:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_narrow_and_less_narrow_bends_curviest.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (Well, believe us or not, but we're right!)
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
            In the following graph, which curve might 
            be a derivative of which other curve?
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_cosine_curves.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={11}>
            <VerticalChunk>
              As it happens—and by the exact method
              that we used to generate these curves—the
              blue is the derivative of the red:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_blue_red_only.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Likewise, the derivative of the blue
              is the yellow, the derivative of the yellow
              is the green, and the derivative of the 
              green is the red, at which point it starts
              all over again! (For example, the 
              {" "}
              <i>
                fifth
              </i>
              {" "}derivative of the red curve
              is the blue, because the{" "}
              <i>
                fourth
              </i>
              {" "}
              derivative of the red curve is itself.)
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
              After all, the slope of these curves
              keeps oscillating between two fixed 
              values—the “most slanted up” and the 
              “most slanted down”—so their derivatives
              were always going to have an oscillatory
              pattern, as well.
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
              Because “most slanted up” occurs when
              the curve has not yet crested, but when
              the derivative{" "}
              <i>
                is already
              </i>
              {" "}in the
              process of cresting (that's why it's
              “most slanted up”), the derivative is
              ahead of the original curve by half a
              bump, not the other way around:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_cresting.svg" />
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 3.
              </i>
              {" "}
              When we examine the velocity of a
              particle moving in the plane, we examine
              the velocities of its shadow on the
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -axes:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_two_dimensional_vel.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The velocities of the two shadows
              encode the overall “two-dimensional”
              velocity of the particle. (No need for 
              quotes, really: the velocity{" "}
              <i>
                is
              </i>
              {" "}
              two-dimensional.){" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Here's another point of view: just like
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              position
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}
              is encoded by a pair of numbers—sometimes
              known as the{" "}
              <i>
                position vector
              </i>
              {" "}by
              the way, where “vector” is a term of art
              for “pair of numbers”—so the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              is encoded by a pair of numbers—equally
              known as the{" "}
              <i>
                velocity vector
              </i>
              —which
              is no coincidence, because the first
              coordinate of the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the derivative of the first coordinate
              of the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              and likewise for the second coordinate—two
              coordinates, two rates of change!
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Geometrically, if we use the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -
              </NoBreak>
              {" "}and
              {" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -components
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  v_x
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  v_y
                  $
                </Math>
              </NoBreak>
              {" "}of the 
              velocity to draw an arrow emanating 
              from a point on the curve, this arrow
              is tangent to the curve, and the
              <ImageRight
                   src="/images/svg_ch4_cosine_curves_tangent_velocity_cloud.svg" />
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              length
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the arrow is the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the particle at that moment in time.
              More precisely, if you let the particle
              drift at the exact same{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -
              </NoBreak>
              {" "}and 
              {" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -velocities
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  v_x
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  v_y
                  $
                </Math>
              </NoBreak>
              {" "}that you
              measured at the root of the arrow for
              one unit of time, the particle would 
              cover exactly the length of the arrow
              in that one unit of time, no more no less, 
              because the particle would cover{" "}
              <NoBreak>
                <Math>
                  $
                  v_x
                  $
                </Math>
              </NoBreak>
              {" "}
              units in{" "}
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
                  v_y
                  $
                </Math>
              </NoBreak>
              {" "}units in{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              .
              And speed being
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              distance per unit time
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              the length of the arrow is, therefore,
              the speed!
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Now consider not one but four particles,
              going around a unit circle in clockwise
              fashion, 90° apart in phase, at unit 
              speed (“unit speed” = speed 1, “unit 
              circle” = radius 1) (ps: We center the
              circle at the origin):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_unit_circle.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              position vectors
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the particles are as follows:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_unit_circle_position_vectors.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (You can't really see it so well, but
              each arrow originates at{" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
                .)
              </NoBreak>
              {" "}While
              the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              velocity vectors
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              are as follows:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_unit_circle_velocity_vectors.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (Like the position vectors, the 
              velocity vectors keep changing instant by 
              instant—this is the subtlety of calculus!)
              The velocity vectors have length{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              {" "}because
              the speed is{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <i>
                &
              </i>
              {" "}are brushed
              in the direction of travel.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              (Nb: When we draw a vector as an arrow
              we mean that the first coordinate of the
              vector is equal to the horizontal 
              displacement from the tail of the arrow
              to the head of the arrow, and likewise
              that the second coordinate is equal to the
              vertical displacement from the tail of the
              arrow to the head of the arrow.)
              <ImageRight
                   src="/images/svg_ch4_cosine_curves_vector_illustration_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk>
              Due to the 90° rotations and uniform 
              lengths of{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}one particle's velocity
              vector is another particle's position
              vector; as one example, the red particle's
              velocity vector is the blue particle's 
              position vector:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_unit_circle_equality.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              From the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinates,
              </NoBreak>
              {" "}for example,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the velocity in{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}of the red particle
              is the position in{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}of the blue particle
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              at any given moment in time. This also
              means:
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinate
              of the red particle is the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinate
              of the blue particle
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...because “velocity in{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is the same
              as “rate of change of the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinate”.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Concretely, if you graph the
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinates
              </NoBreak>
              {" "}of the red and blue 
              particles on the same graph, the rate of
              change of the red particle's{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinate
              will equal the value of the blue particle's
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate.
              </NoBreak>
              {" "}These are the reds and blue
              curves from the problem statement, if we
              start the red particle at position
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (1, 0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              at time{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_verified.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              If we add the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinates
              </NoBreak>
              {" "}of the green
              and yellow particles, we find the graph
              from the problem statement!
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
              If needed, here is an illustration of 
              one{" "}
              <NoBreak>
                <Math>
                  $
                  360^\circ
                  $
                </Math>
              </NoBreak>
              {" "}rotation of the particles
              of Note 3,  with each curve being an 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinate:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_rolling_wheel.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (If the above just looks like a 
              confusing mess then don't sweat it—it's
              not that important.)
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
              To reiterate, take a look at this
              figure again:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_curves_cresting.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The derivative is
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              ahead
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the red particle, so that 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinates
              </NoBreak>
              {" "}you see{" "}
              <i>
                now
              </i>
              {" "}on the
              blue particle will be seen{" "}
              <i>
                a little later
              </i>
              {" "}
              on the red particle! (In particular, if you
              wanted to generate the same curves with a
              counterclockwise rotation, you could do that,
              but you would have to reverse the order of
              the particles around the circle to keep the
              blue particle ahead of the red particle,
              the yellow particle ahead of the blue 
              particle, etc.)
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
            How can we generate the following set of
            curves by rotating points around a circle,
            and tracking their{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
              -coordinates?
            </NoBreak>
            {" "}(This
            graph is an exact{" "}
            <NoBreak>
              <Math>
                $
                2
                $
              </Math>
            </NoBreak>
            &#x200b;
            <NoBreak>
              <Math>
                $
                \times
                $
              </Math>
            </NoBreak>
            {" "}[“two
            x”] vertical dilation of the graph in Exercise
            12.) Should we use a circle of radius{" "}
            <NoBreak>
              <Math>
                $
                2
                $
              </Math>
            </NoBreak>
            ,
            or make the points go twice as fast? Or both?
            Or something else yet?
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_scaled_cosine_curves.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={12}>
            <VerticalChunk>
              The values oscillate between{" "}
              <NoBreak>
                <Math>
                  $
                  +2
                  $
                </Math>
              </NoBreak>
              {" "}and
              {" "}
              <NoBreak>
                <Math>
                  $
                  -2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}so we need a circle of radius{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
              </NoBreak>
              {" "}
              to generate these curves. Also the
              values go through one cycle in the same 
              amount of time as the particles of
              Exercise 12, but the circle has twice the 
              circumference (having twice the radius),
              so the particles are going twice as fast!
              (I.e.: speed 2, since the particles of
              Exercise 12 have unit speed.)
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
              In this and in the previous exercise the
              units of time and distance are “anonymous”: 
              distance could be meters, kilometers, or
              anything, and time could be seconds, hours,
              etc—it doesn't matter. However, one should
              be aware that what amounts to
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              unit speed
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              under one set of units is no longer “unit
              speed” under a different set of units—this
              is not a “physical” property of the 
              particles, but, rather, a “mathematical”
              property that holds only for one specific
              “tweaking” of the units.
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
            Exercise 12 exhibits a function{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
              —in
            </NoBreak>
            {" "}fact,
            four different functions{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
              —such
            </NoBreak>
            {" "}that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f' \ne f
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
            f'' \ne f
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
            f''' \ne f
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            but
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f^&#123;(4)&#125; = f
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            surprise, surprise! Can you do the same with
            “
            <NoBreak>
              <Math>
                $
                5
                $
              </Math>
              ”
            </NoBreak>
            {" "}instead of “
            <NoBreak>
              <Math>
                $
                4
                $
              </Math>
              ”?
            </NoBreak>
            {" "}I.e., find a function
            {" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}such that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f^&#123;(n)&#125; \ne f
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for{" "}
            <NoBreak>
              <Math>
                $
                n = 1, 2, 3, 4
                $
              </Math>
            </NoBreak>
            {" "}but
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f^&#123;(5)&#125; = f
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            ...?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={13}>
            <VerticalChunk>
              We can naïvely try to imitiate how the
              curves of Exercise 16 are generated by
              placing five equally spaced particles
              around the unit circle (“the” unit circle
              is the one centered at{" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
                ,
              </NoBreak>
              {" "}by
              convention), instead of 4:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_position_vectors.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The idea would be that the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the red particle is the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the blue particle, 
              likewise for the blue and yellow particles,
              and so on. (Position vectors shown above.)
              For example, at the instant above, the
              velocity vectors would be as follows:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_velocity_vectors.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The velocity vectors are
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              NOT
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              tangent to the unit circle, and so the
              particles will leave the circle!
              (But that's OK.) In one-tenth a unit
              of time, for example, the particles would
              travel approximately one-tenth their
              velocity vectors, that would bring them
              to approximately these new positions:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_1_10th.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In the next one-tenth unit of time we 
              can apply a similar approximation again,
              advancing the particles by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;1\over 10&#125;
                  $
                </Math>
              </NoBreak>
              th
              of [the current approximation to] their
              velocity vectors. Skipping the construction
              lines:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_2_10th.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Applying the same process for{" "}
              <NoBreak>
                <Math>
                  $
                  8
                  $
                </Math>
              </NoBreak>
              {" "}more
              steps:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_10_10th.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              To be clear, in the above figure, the
              position of the red particle at, say, the
              fifth step...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_5_10th.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...is obtained by starting from the red
              particle's position at the fourth step...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_4_10th.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and adding one-tenth of the approximation
              that we have to the red particle's velocity
              vector at that moment, that approximation
              being namely the blue particle's position 
              vector at the fourth step (
              <NoBreak>
                <Math>
                  $
                  t = &#123;4\over 10&#125;
                  $
                </Math>
              </NoBreak>
              )...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_4_10th_b.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and we do the same for each particle,
              to advance to the next step.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              If we stop{" "}
              <NoBreak>
                <Math>
                  $
                  10
                  $
                </Math>
              </NoBreak>
              {" "}times as often,
              advancing the clock by{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;1\over 100&#125;
                  $
                </Math>
                th
              </NoBreak>
              {" "}of
              a unit of time at each step, the same figure
              becomes just a blur (still going from
              {" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  t = 1
                  $
                </Math>
              </NoBreak>
              ):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_100_100th_blur.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              To visualize such a fine-grained
              approximation we need to revert to drawing
              the particles as points. In the following
              figure the colored paths are points that
              come from a “
              <NoBreak>
                <Math>
                  $
                  &#123;1\over 100&#125;
                  $
                </Math>
                th”
              </NoBreak>
              {" "}approximation,
              while the orange dots are the old positions
              obtained from a “
              <NoBreak>
                <Math>
                  $
                  &#123;1\over 10&#125;
                  $
                </Math>
              </NoBreak>
              th”
              approximation:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_100_100th_points.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Zooming in a bit (or else we still can't
              see anything):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_after_100_100th_zoomed.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In any case, even the “
              <NoBreak>
                <Math>
                  $
                  &#123;1\over 100&#125;
                  $
                </Math>
              </NoBreak>
              th”
              approximation is just an approximation,
              but the point is that such approximations
              do converge to a set of “true” particle
              paths, as pictured in Fig
              <NoBreak>
                <Math>
                  $
                  .
                  $
                </Math>
              </NoBreak>
              {" "}1, that can
              be computed by some wizards; as time can
              be played forward or backward, these paths
              form doubly-infinite spirals—in to infinity,
              out to infinity.
              <ImageLeft
                   children_y="2em"
                   children_x="50%"
                   src="/images/svg_ch4_5_euler_spiral_figure.svg"
                   offset_x="1.5em">
                <span
                     font-size="1.4em">
                  <VerticalChunk>
                    Fig. 1
                  </VerticalChunk>
                </span>
              </ImageLeft>
            </VerticalChunk>
            <VerticalChunk>
              In any case [take two] the point is that
              whether or not you are one of the wizards,
              you can
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              guess
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              the existence of these five paths—sort 
              of “feel” that they exist! (This is a 
              moral consolation prize, at least.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              We can also convert the paths into a 
              function
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
              that satisfies the problem requirements.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For example let{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}be the function that,
              given a time{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
                ,
              </NoBreak>
              {" "}outputs the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinate
              of the red particle at{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
                ;
              </NoBreak>
              {" "}then, to spell
              it all out, since
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the red particle is the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the blue particle
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  f'
                  $
                </Math>
              </NoBreak>
              {" "}is the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the blue 
              particle; and since{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the blue particle is the
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the yellow particle
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  f''
                  $
                </Math>
              </NoBreak>
              {" "}is the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the
              yellow particle; and since
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the yellow particle is the
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the green particle
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  f'''
                  $
                </Math>
              </NoBreak>
              {" "}is the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the
              green particle; and since
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the green particle
              is the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple
              particle
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  f''''
                  $
                </Math>
              </NoBreak>
              {" "}is the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the
              purple particle; and since
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple particle is the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the red particle
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  f''''' = f^&#123;(5)&#125;
                  $
                </Math>
              </NoBreak>
              {" "}equals{" "}
              <NoBreak>
                <Math>
                  $
                  f
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
                Note 1.
              </i>
              {" "}
              If you graph the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinates
              </NoBreak>
              {" "}of the
              5 particles over time, each in their 
              color, you get a graph like so, in which
              blue is the derivative of red, yellow is
              the derivative of blue, etc; the function 
              {" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}can be taken to be any one of these
              curves:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_final_graph.svg" />
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 2.
              </i>
              {" "}
              There is nothing special about 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinates
              </NoBreak>
              {" "}vis-à-vis{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -coordinates.
              You can also define{" "}
              <NoBreak>
                <Math>
                  $
                  f(t)
                  $
                </Math>
              </NoBreak>
              {" "}to be, e.g.,
              the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the red particle
              at time{" "}
              <NoBreak>
                <Math>
                  $
                  t
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
                Note 3.
              </i>
              {" "}
              It is worth noting that, in fact, the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -coordinates
              </NoBreak>
              {" "}live separate
              lives. The rate of change of each 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}is some other{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate,
              </NoBreak>
              {" "}
              and the rate of change of each{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -coordinate
              is some other{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -coordinate.
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
              Adding to this observation, we don't
              {" "}
              <i>
                need
              </i>
              {" "}to start the particles in
              a symmetric configuration. Symmetry only
              helps to picture how the positions of the
              particles will evolve without making any
              computations. We also don't{" "}
              <i>
                need
              </i>
              {" "}
              to work in two dimensions. We can place
              the particles in a one-dimensional world,
              e.g., ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_5_euler_one_dimensional.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...(the initial positions really don't
              matter much, as long as you don't give 
              all the particles the{" "}
              <i>
                same
              </i>
              {" "}initial
              position, or else you won't have{" "}
              <NoBreak>
                <Math>
                  $
                  f \ne f'
                  $
                </Math>
              </NoBreak>
              {" "}
              etc) and stipulate the same rules, namely
              that the{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              (now{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
                -dimensional)
              </NoBreak>
              {" "}of the red particle
              be the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              position
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              (now{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
                -dimensional)
              </NoBreak>
              {" "}of the blue particle
              and so on—you can “release” the particles
              from their initial configuration and
              simulate (or compute exactly, if you have
              the know-how) their motion by the same
              methods as above. The five position
              functions obtained are each a solution
              {" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}to the problem. (But this solution will
              typically look more chaotic than the curves
              from Note 1.){" "}
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
              In fact, our symmetric two-dimensional
              solution is an instance in which you can say
              that
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the whole is simpler than the parts
              <ImageLeft
                   src="/images/svg_ch4_5_euler_hearts_left.svg" />
              <ImageRight
                   src="/images/svg_ch4_5_euler_hearts_right.svg" />
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              in that you would never spot the symmetry
              at play, or have a chance of eyeballing
              the long-term evolution of the system, if
              you were shown just the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinates,
              or just the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -coordinates,
              </NoBreak>
              {" "}on their own!
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
            If we seek a function{" "}
            <NoBreak>
              <Math>
                $
                f : \rr \ra \rr
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
            f^&#123;(17)&#125; = f
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            and such that{" "}
            <NoBreak>
              <Math>
                $
                f \ne 0
                $
              </Math>
            </NoBreak>
            {" "}(or:{" "}
            <NoBreak>
              <Math>
                $
                f \ne (x \ra 0)
                $
              </Math>
            </NoBreak>
            ,
            pedantically) and such that{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}grows relatively
            slowly in either the positive or negative direction
            of the number line, insofar as such things are 
            concerned, what would our options be?{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={14}>
            <VerticalChunk>
              Take{" "}
              <NoBreak>
                <Math>
                  $
                  17
                  $
                </Math>
              </NoBreak>
              {" "}particles equally spaced out along
              the unit circle, such as these (shown here 
              with position vectors):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_17_position_vectors.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Set the velocity of particle
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\Large 1&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              equal to the position of particle
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;\Large 5&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and keep going by this pattern, making the
              velocity of each particle equal to the
              position of the particle that is{" "}
              <NoBreak>
                <Math>
                  $
                  4
                  $
                </Math>
              </NoBreak>
              {" "}later;
              in the configuration above, the velocity
              vectors end up looking like so, for example:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_17_velocity_vector_1.svg" />
            <ImageRight
                 src="/images/svg_ch4_17_velocity_vector_1_cloud.svg" />
            <VerticalChunk>
              Maintaining this relationship at all 
              points in time, and given that the velocity 
              vectors point very slightly outward from
              the unit circle, and because all the
              symmetry and all the angles are maintained
              as we play time forward or backward, the
              particles spiral gently outward/inward from
              the circle for time forward/backward,
              respectively. Taking{" "}
              <NoBreak>
                <Math>
                  $
                  f(t)
                  $
                </Math>
              </NoBreak>
              {" "}to be the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -
              </NoBreak>
              {" "}
              or{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of any one of the particles
              (e.g., particle{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
                )
              </NoBreak>
              {" "}at time{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              {" "}gives an
              oscillating function whose{" "}
              <NoBreak>
                <Math>
                  $
                  17
                  $
                </Math>
                th
              </NoBreak>
              {" "}derivative
              is itself (because the rate of change of
              the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of particle{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              {" "}is the
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of particle{" "}
              <NoBreak>
                <Math>
                  $
                  5
                  $
                </Math>
                ,
              </NoBreak>
              {" "}etc, until
              we make it all the way back to particle{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              ),
              and that grows comparatively slowly over
              time. ~The End~
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
              In case you're curious, the actual spiral paths
              of the particles look like so:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_17_paths.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and if you take the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinates
              </NoBreak>
              {" "}of
              the particles over time, with time{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              {" "}
              corresponding to the original configuration
              depicted where particle 1 is at{" "}
              <NoBreak>
                <Math>
                  $
                  (1, 0)
                  $
                </Math>
                ,
              </NoBreak>
              {" "}you
              find{" "}
              <del>
                <VerticalChunk>
                  paths
                </VerticalChunk>
              </del>
              &ensp;functions that look like so:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_17_actual_functions.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              For example, the derivative of curve{" "}
              <InlineImage
                   src="/images/svg_ch4_17_particle1_inline.svg" />
              , highlighted below in red, is curve{" "}
              <InlineImage
                   src="/images/svg_ch4_17_particle5_inline.svg" />
              , highlighted in blue:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_17_actual_functions_with_highlights.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and taking sixteen more derivatives 
              starting from curve{" "}
              <InlineImage
                   style="margin-right:0.8em"
                   src="/images/svg_ch4_17_particle5_inline.svg" />
              we would go through curves{" "}
              <InlineImage
                   src="/images/svg_ch4_17_particle9_inline.svg" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_17_particle13_inline.svg" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_17_particle17_inline.svg" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_17_particle4_inline.svg" />
              , ...,{" "}
              <InlineImage
                   src="/images/svg_ch4_17_particle14_inline.svg" />
              before finally coming back to curve
              <InlineImage
                   style="margin-right:0.1em"
                   src="/images/svg_ch4_17_particle1_inline.svg" />
              !
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
              It can be interesting to examine what
              goes wrong if we attempt to make the 
              velocity vectors even more tangent to the
              unit circle. For example, if we start the
              particles so that particle 5 is at
              {" "}
              <NoBreak>
                <Math>
                  $
                  90^\circ
                  $
                </Math>
              </NoBreak>
              {" "}exactly from particle 1, 
              particle 9 is at{" "}
              <NoBreak>
                <Math>
                  $
                  90^\circ
                  $
                </Math>
              </NoBreak>
              {" "}exactly from
              particle 5, and so on, until we reach
              particle 14, the last particle in this
              order; then we have the following starting
              configuration:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_17_other_start.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              To parse the above figure, understand
              that:
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <ul
                   style="margin:20px 20px 0px 50px">
                <li>
                  <VerticalChunk>
                    the red arrows indicate which particle
                    takes its velocity from the position
                    of which other particle; for example,
                    particle 1 has velocity equal to the
                    position of particle 5
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    particles that occupy the same starting
                    position on the unit circle appear
                    stacked together, as a representation
                    device; for example, particle 2 has the
                    same starting position as particle 5
                  </VerticalChunk>
                </li>
              </ul>
              (Note that the red arrows have to form
              a cycle of length 17 in order for us to
              later extract a function{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}such that{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f^&#123;(17)&#125; = f
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              but this is the case: the red arrows only
              “close the loop” after going through all
              17 particles!)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              In this starting configuration, all
              velocity vectors are exactly tangent to
              the unit circle
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              EXCEPT
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              for particle 14, whose velocity vector, 
              being the position of particle 1, is straight
              out from the circle! So, as we “start time”,
              particle 14 will push out from the circle,
              that will in turn affect particle 10, and
              so on, until all particles end up being
              “peeled off” from the circle, in due time;
              if you are so curious, the particle
              trajectories end up like so (shown only for
              {" "}
              <NoBreak>
                <Math>
                  $
                  t \geq 0
                  $
                </Math>
              </NoBreak>
              ):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_17_other_start_paths.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The particles shoot of to infinity in short
              order—the solution is much worse—for fun we
              have also highlighted two particle trajectories
              in this figure:
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              <ul
                   style="margin:1em 1em 0em 2.5em">
                <li>
                  <VerticalChunk>
                    in{" "}
                    <span
                         style="border:1px solid blue">
                      <VerticalChunk>
                        blue
                      </VerticalChunk>
                    </span>
                    , particle 1, the last particle
                    to be (noticeably*) “peeled off” from
                    the circle (*all particles are 
                    instantaneously peeled off from the 
                    circle to{" "}
                    <i>
                      some
                    </i>
                    {" "}degree, as one 
                    particle's slight deviation affects
                    the next, that affects the next, etc)
                  </VerticalChunk>
                </li>
                <li>
                  <VerticalChunk>
                    in{" "}
                    <span
                         style="border:1px solid red">
                      <VerticalChunk>
                        red
                      </VerticalChunk>
                    </span>
                    , particle 14, the{" "}
                    <i>
                      first
                    </i>
                    {" "}particle
                    to leave the circle—but because its
                    velocity vector is given by particle 1,
                    which itself starts by going around in
                    a circle, it, too, starts out by going
                    around in a circle!
                  </VerticalChunk>
                </li>
              </ul>
              (The point is: if your velocity vector 
              is tracing a circle centered at{" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
                —at
              </NoBreak>
              {" "}
              a uniform rate—then you, too, are going
              around in a circle—it's just that your
              circle could be centered anywhere, not
              necessarily at{" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
              </NoBreak>
              !)
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
            Add elements to the following drawing...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_newton_quotient_unfinished.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...such that it becomes a “complete”
            illustration of this here algebraic 
            expression...
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            &#123;f(x+h) - f(x) \over h&#125;
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            ...and reveal the “geometric meaning” of
            the expression, if any.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={15}>
            <VerticalChunk>
              This version pictures all the elements
              that appear in the fraction:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_newton_quotient_finished.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The point is: the fraction
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;f(x + h) - f(x)\over h&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is seen to have the form{" "}
              <i>
                rise over run
              </i>
              , 
              and is more precisely equal to the slope
              of the pale brown line going through the
              point{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x, f(x))
              $$
              <ImageLeft
                   src="/images/svg_ch4_new_quatient_x_fx_cloud.svg" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              at one end, and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (x + h, f(x + h))
              $$
              <ImageRight
                   src="/images/svg_ch4_new_quatient_x_fxplush_cloud.svg"
                   offset_y="-0.5em" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              at the other end. (This is also the case
              if{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}is negative, by the way.)
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
              A fraction of this form is called a{" "}
              <i>
                Newton
                quotient
              </i>
              .
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
              The pale brown line is sometimes known as
              the{" "}
              <i>
                secant
              </i>
              {" "}[through{" "}
              <NoBreak>
                <Math>
                  $
                  (x, f(x))
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  (x+h, f(x+h))
                  $
                </Math>
              </NoBreak>
              ].
              “Secant” is a general term for “line passing
              through two specified points on another
              curve”.
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
              If we let{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}drop to{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and if{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}is
              differentiable at{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ,
              </NoBreak>
              {" "}the 
              Newton-quotient-a.k.a.-slope-of-the-secant
              approaches
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f'(x)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              because the secant approaches the tangent,
              in that case, and the slope of the secant
              is also, perforce, approaching the slope
              of the tangent, which is{" "}
              <NoBreak>
                <Math>
                  $
                  f'(x)
                  $
                </Math>
                .
              </NoBreak>
              {" "}(But you
              cannot directly set{" "}
              <NoBreak>
                <Math>
                  $
                  h = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}because
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;f(x+0)-f(x)\over 0&#125; = &#123;0 \over 0&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is undefined.)
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
            In this exercise we consider two points
            in time{" "}
            <NoBreak>
              <Math>
                $
                t_0
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                t_0 + \Delta&#123;&#125;t
                $
              </Math>
            </NoBreak>
            {" "}(here
            “
            <NoBreak>
              <Math>
                $
                \Delta&#123;&#125;t
                $
              </Math>
              ”,
            </NoBreak>
            {" "}read “delta{" "}
            <NoBreak>
              <Math>
                $
                t
                $
              </Math>
              ”,
            </NoBreak>
            {" "}is a
            standard notation for a small amount of
            time):
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_RATS_timeline.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            We also consider quantities{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
            </NoBreak>
            {" "}
            that are changing with time;{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
            </NoBreak>
            {" "}
            have some value at{" "}
            <NoBreak>
              <Math>
                $
                t_0
                $
              </Math>
              ,
            </NoBreak>
            {" "}and, say, grow
            to be larger at{" "}
            <NoBreak>
              <Math>
                $
                t_0 + \Delta&#123;&#125;t
                $
              </Math>
            </NoBreak>
            :
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_RATS_timeline_with_A_B.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            More specifically, we are interested in
            the change in the value of the product{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large AB
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            over said course of time.
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            To introduce an unsolicited metaphor,
            imagine{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
            </NoBreak>
            {" "}as
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_RATS_rats.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            that are crossing a hallway surveyed by
            a cat. One side of the hallway is time
            {" "}
            <NoBreak>
              <Math>
                $
                t_0
                $
              </Math>
              ,
            </NoBreak>
            {" "}the other side of the hallway is
            time{" "}
            <NoBreak>
              <Math>
                $
                t_0 + \Delta&#123;&#125;t
                $
              </Math>
              .
            </NoBreak>
            {" "}So great is their
            terror that{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
            </NoBreak>
            {" "}have decided to 
            scurry across the hallway one at a time.
            First{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
            </NoBreak>
            {" "}will go, then{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
              .
            </NoBreak>
            {" "}In so, we 
            can separate the following moments of 
            interest (“moments” that exist inside the
            metaphorical timeline of the story, not
            on the{" "}
            <NoBreak>
              <Math>
                $
                t
                $
              </Math>
              -number
            </NoBreak>
            {" "}line, to be clear):
            <ImageLeft
                 src="/images/svg_ch4_RATS_corridor_cloud.svg"
                 offset_y="-0.5em"
                 offset_x="0.5em" />
          </VerticalChunk>
          <VerticalChunk>
            <ol
                 style="margin:0 1.5em 1em 2em">
              <li
                   style="margin-top:0.5em">
                <VerticalChunk>
                  when{" "}
                  <NoBreak>
                    <Math>
                      $
                      A
                      $
                    </Math>
                  </NoBreak>
                  {" "}and{" "}
                  <NoBreak>
                    <Math>
                      $
                      B
                      $
                    </Math>
                  </NoBreak>
                  {" "}are both still at{" "}
                  <NoBreak>
                    <Math>
                      $
                      t_0
                      $
                    </Math>
                  </NoBreak>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li
                   style="margin-top:0.5em">
                <VerticalChunk>
                  when{" "}
                  <NoBreak>
                    <Math>
                      $
                      A
                      $
                    </Math>
                  </NoBreak>
                  {" "}has made it to{" "}
                  <NoBreak>
                    <Math>
                      $
                      t_0 + \Delta&#123;&#125;t
                      $
                    </Math>
                  </NoBreak>
                  ,
                  and{" "}
                  <NoBreak>
                    <Math>
                      $
                      B
                      $
                    </Math>
                  </NoBreak>
                  {" "}is still at{" "}
                  <NoBreak>
                    <Math>
                      $
                      t_0
                      $
                    </Math>
                  </NoBreak>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li
                   style="margin-top:0.5em">
                <VerticalChunk>
                  <del>
                    <VerticalChunk>
                      when{" "}
                      <NoBreak>
                        <Math>
                          $
                          B
                          $
                        </Math>
                        's
                      </NoBreak>
                      {" "}tail is sticking out of the
                      cat's mouth, and
                    </VerticalChunk>
                  </del>
                  &ensp;when{" "}
                  <NoBreak>
                    <Math>
                      $
                      A
                      $
                    </Math>
                  </NoBreak>
                  {" "}and{" "}
                  <NoBreak>
                    <Math>
                      $
                      B
                      $
                    </Math>
                  </NoBreak>
                  {" "}have both made it
                  to{" "}
                  <NoBreak>
                    <Math>
                      $
                      t_0 + \Delta&#123;&#125;t
                      $
                    </Math>
                  </NoBreak>
                  {" "}{" "}
                </VerticalChunk>
              </li>
            </ol>
            Correspondingly, the product
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large AB
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            changes in two increments: first as{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
            </NoBreak>
            {" "}
            makes it to the other side of the hallway
            (and{" "}
            <NoBreak>
              <Math>
                $
                A
                $
              </Math>
            </NoBreak>
            {" "}grows bigger); then as{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
            </NoBreak>
            {" "}joins
            him/her (and{" "}
            <NoBreak>
              <Math>
                $
                B
                $
              </Math>
            </NoBreak>
            {" "}grows bigger). In an
            equation:
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_RATS_equation.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            If we divide the above equation by{" "}
            <NoBreak>
              <Math>
                $
                \Delta&#123;&#125;t
                $
              </Math>
            </NoBreak>
            {" "}
            and let{" "}
            <NoBreak>
              <Math>
                $
                \Delta&#123;&#125;t
                $
              </Math>
            </NoBreak>
            {" "}drop to{" "}
            <NoBreak>
              <Math>
                $
                0
                $
              </Math>
              ,
            </NoBreak>
            {" "}what does
            each term become?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={16}>
            <VerticalChunk>
              Dividing by{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta&#123;&#125;t
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_RATS_equation_over_Dt.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              As{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta&#123;&#125;t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}the term
              on the left-hand side approaches
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (AB)'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where we view{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
              </NoBreak>
              {" "}as functions
              of time with, therefore, the product{" "}
              <NoBreak>
                <Math>
                  $
                  AB
                  $
                </Math>
              </NoBreak>
              {" "}
              also becoming a function of time. (By 
              definition,{" "}
              <NoBreak>
                <Math>
                  $
                  AB
                  $
                </Math>
              </NoBreak>
              {" "}is the function
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              t \rightarrow A(t)B(t)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where{" "}
              <NoBreak>
                <Math>
                  $
                  A(t)
                  $
                </Math>
              </NoBreak>
              {" "}is the value of{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}at time 
              {" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  B(t)
                  $
                </Math>
              </NoBreak>
              {" "}is the value of{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
              </NoBreak>
              {" "}at time
              {" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
                .)
              </NoBreak>
              {" "}Indeed, a ratio of the form
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is a Newton quotient (cf. Exercise 16),
              that approaches{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta&#123;&#125;t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}assuming
              {" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}is differentiable at{" "}
              <NoBreak>
                <Math>
                  $
                  t_0
                  $
                </Math>
              </NoBreak>
              {" "}(cf.
              Exercise 16 Note 3), and
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_RATS_over_Dt_first_term.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              has the form
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for{" "}
              <NoBreak>
                <Math>
                  $
                  f = AB
                  $
                </Math>
              </NoBreak>
              .
              <ImageLeft
                   src="/images/svg_ch4_RATS_for_f_equals_AB_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk>
              The first term on the right-hand side, for
              its part, approaches
              <ImageRight
                   src="/images/svg_ch4_RATS_first_term_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta&#123;&#125;t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                .
              </NoBreak>
              {" "}Indeed,
              when you write it out, that term becomes
              the algebraic expression
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0) - A(t_0)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where every term on top contains a
              “
              <NoBreak>
                <Math>
                  $
                  B(t_0)
                  $
                </Math>
                ”,
              </NoBreak>
              {" "}that can therefore be factored
              out, giving us the equivalent expression
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              B(t_0)\cdot&#123;A(t_0 + \Delta&#123;&#125;t) - A(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              that, you will notice, has the form{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              B(t_0)\cdot&#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for{" "}
              <NoBreak>
                <Math>
                  $
                  f = A
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and thus approaches
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              B(t_0) \cdot A'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}by the property
              of the Newton quotient.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Lastly the most interesting term is the
              second term on the right-hand side!
              Symmetrically to the first term on the
              right-hand side, the second term approaches{" "}
              <ImageRight
                   src="/images/svg_ch4_RATS_second_term_cloud.svg" />
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A(t_0)B'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta&#123;&#125;t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}but the
              reasons are slightly different! (Slightly.)
              Indeed, this term, written out, is
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0+\Delta&#123;&#125;t) - A(t_0+ \Delta&#123;&#125;t)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which is equal to
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)\cdot&#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by factoring out the common term{" "}
              <NoBreak>
                <Math>
                  $
                  A(t_0 + \Delta&#123;&#125;t)
                  $
                </Math>
              </NoBreak>
              ;
              and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              approaches
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              B'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta&#123;&#125;t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}like before
              (when we had{" "}
              <NoBreak>
                <Math>
                  $
                  AB
                  $
                </Math>
              </NoBreak>
              {" "}or{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}instead of{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
              </NoBreak>
              )
              whereas
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              —which is a bit different from before—approaches
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta&#123;&#125;t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                —so
              </NoBreak>
              {" "}that makes up
              {" "}
              <NoBreak>
                <Math>
                  $
                  A(t_0)B'(t_0)
                  $
                </Math>
                .
              </NoBreak>
              {" "}(The
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of{" "}
              <NoBreak>
                <Math>
                  $
                  A
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  B
                  $
                </Math>
              </NoBreak>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $
                  t_0
                  $
                </Math>
                —that
              </NoBreak>
              {" "}we are tacitly
              assuming—implies
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              continuity
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              as well, which implies that{" "}
              <NoBreak>
                <Math>
                  $
                  A(t_0 + \Delta&#123;&#125;t)
                  $
                </Math>
              </NoBreak>
              {" "}
              approaches{" "}
              <NoBreak>
                <Math>
                  $
                  A(t_0)
                  $
                </Math>
              </NoBreak>
              {" "}as{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
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
              Summarizing, the three terms separately
              approach
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (AB)'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              B(t_0)A'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A(t_0)B'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  \Delta&#123;&#125;t
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}and, in fact, 
              because the equation holds no matter how
              close we make each term to its respective limit
              above, one can conclude that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (AB)'(t_0) = B(t_0)A'(t_0) + A(t_0)B'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for functions{" "}
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
              {" "}differentiable at
              a point{" "}
              <NoBreak>
                <Math>
                  $
                  t_0
                  $
                </Math>
                .
              </NoBreak>
              {" "}{" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Nb: This result is known as the{" "}
              <i>
                product rule
              </i>
              .
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
              Keeping things alphabetical everywhere, the 
              same equation is more often written
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (AB)'(t_0) = A'(t_0)B(t_0) + A(t_0)B'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              with “
              <NoBreak>
                <Math>
                  $
                  A'(t_0)B(t_0)
                  $
                </Math>
                ”
              </NoBreak>
              {" "}in the middle. (But
              which is the same, of course, as{" "}
              <NoBreak>
                <Math>
                  $
                  B(t_0)A'(t_0)
                  $
                </Math>
              </NoBreak>
              .)
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
            The identity
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (f + g)' = f' + g'
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            happens to be true for differentiable
            functions{" "}
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
              .
            </NoBreak>
            {" "}What English-language
            aphorism can summarize it? (This identity
            is known as the{" "}
            <i>
              sum rule
            </i>
            , by the way.)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={17}>
            <VerticalChunk>
              One can say
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the derivative of the sum is the sum of the
              derivatives
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              or
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the sum is the sum of
              the rates of change
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              or (we made this one up)
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the rate of change of the aggregate is the sum
              of the rates of change of the components
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              (etc).
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
            If we rewrite the “product rule” of Exercise
            17 in the same terse style as the “sum rule”
            of Exercise 19, what do we obtain?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={18}>
            <VerticalChunk>
              The form of...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...that follows the style of...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f + g)' = f' + g'
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...is...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)' = f'g + fg'
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...this. (Valid for differentiable functions
              {" "}
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
                  g:
                  $
                </Math>
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \rr \ra \rr
                  $
                </Math>
              </NoBreak>
              .)
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
              Whereas
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is an equality between real numbers,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)' = f'g + fg'
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is an equality between functions. So there is 
              a more-than-skin-deep difference between the
              two forms. Also note that each form has its
              own “qualitatively distinct” qualifying conditions.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              (To wit,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              holds “for{" "}
              <NoBreak>
                <Math>
                  $
                  t_0
                  $
                </Math>
              </NoBreak>
              {" "}at which{" "}
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
              {" "}are
              differentiable”, while
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)' = f'g + fg'
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              holds “for differentiable functions{" "}
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
              ”.)
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
            If the identities
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (f + g)' = f' + g'
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
            (fg)' = f'g + fg'
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for differentiable{" "}
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
            {" "}are deemed 
            “differentiation formulas”, then what is a
            third “differentiation formula”{" "}
            <i>
              already 
              encountered
            </i>
            {" "}(in possibly disguised form) prior 
            to this point?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={19}>
            <VerticalChunk>
              That would be the fact that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (cf)' = cf'
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for all differentiable functions{" "}
              <NoBreak>
                <Math>
                  $
                  f : \rr \ra \rr
                  $
                </Math>
              </NoBreak>
              ,
              for all{" "}
              <NoBreak>
                <Math>
                  $
                  c \in \rr
                  $
                </Math>
                ,
              </NoBreak>
              {" "}mentioned in Exercise 10
              for{" "}
              <NoBreak>
                <Math>
                  $
                  c = 2
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
                Note 1.
              </i>
              {" "}
              You can also write{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (cf)' = c \cdot f'
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              if it helps clarify the difference between the
              left- and right-hand sides. (The difference being
              namely “(
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
              </NoBreak>
              {" "}times{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
                )
              </NoBreak>
              {" "}prime” on the left vs. “c
              times (
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}prime)” on the right.)
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
            The solution to the previous exercise
            erroneously assumes that the product of a
            constant and a function has been defined. It
            has not! Keeping in mind that the{" "}
            <i>
              sum
            </i>
            {" "}
            of two functions{" "}
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
                g: \rr \ra \rr
                $
              </Math>
            </NoBreak>
            {" "}{" "}
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
            is defined by the equation
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f + g = (x \ra f(x) + g(x))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            while their composition is defined by
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f \circ g = (x \ra f(g(x)))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            and so on, what is the similar, most logical
            definition for{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            cf
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            where{" "}
            <NoBreak>
              <Math>
                $
                c \in \rr
                $
              </Math>
            </NoBreak>
            {" "}and{" "}
            <NoBreak>
              <Math>
                $
                f : \rr \ra \rr
                $
              </Math>
            </NoBreak>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={20}>
            <VerticalChunk>
              The “logical” definition is:
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              cf = (x \ra cf(x))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where the product “
              <NoBreak>
                <Math>
                  $
                  cf(x)
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is an ordinary
              multiplication between two real numbers,
              because{" "}
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
              </NoBreak>
              {" "}is a real number and{" "}
              <NoBreak>
                <Math>
                  $
                  f(x)
                  $
                </Math>
              </NoBreak>
              {" "}is
              a real number! (In this way, the product of
              a function by a real number “bootstraps”
              off of the ordinary product of real numbers—this
              is already similar to what happens for the
              definition...{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              fg = (x \ra f(x)g(x))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the product of two functions from{" "}
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
              ,
              or with the case of function addition, that
              relies on real number addition.) BUT. There
              is a MORE CLEVER way of doing the definition.
              Which is to define
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              cf = (x \ra c)f
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where the right-hand-side is{" "}
              <i>
                one function
                times another
              </i>
              , i.e.,{" "}
              <i>
                a product of functions
              </i>
              ,
              which is something that has ITSELF ALREADY BEEN
              DEFINED. (!) (To wit, the definition of
              function multiplication is that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              fg = (x \ra f(x)g(x))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              of course.) (Wait we just mentioned that
              already.) Mathematicians LOVE to bootstrap off
              an intermediate step, instead of going back to
              the beginning, so the second way is clearly the
              superior definition!!
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={21}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 22.
            </b>
            {" "}
            The definition
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f + g = (x \ra f(x) + f(x))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for a sum of functions{" "}
            <NoBreak>
              <Math>
                $
                f, g : \rr \ra \rr
                $
              </Math>
            </NoBreak>
            {" "}
            can also be written
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (f + g)(x) = f(x) + g(x)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            in the sense that either of these equations tells
            you how{" "}
            <NoBreak>
              <Math>
                $
                f + g
                $
              </Math>
            </NoBreak>
            {" "}acts on an arbitrary input. (Which
            is what you need to do, to define a function. A
            slight subtlety is that the definition
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f + g = (x \ra f(x) + f(x))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            announces more clearly via its notation that 
            “
            <NoBreak>
              <Math>
                $
                f + g
                $
              </Math>
              ”
            </NoBreak>
            {" "}{" "}
            <i>
              is a function
            </i>
            {" "}and not some other
            object, like a number, but this is a minor point.)
            Rewrite the definitions of
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
          <MathBlock>
            $$
            fg
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f/g
            $$
          </MathBlock>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f - g
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            in the style of the second equation. For extra
            credit: use a different symbol each time to denote
            the input.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={21}>
            <VerticalChunk>
              E.g.:
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f \circ g)(x) = f(g(x))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)(u) = f(u)g(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f/g)(z) = f(z)/g(z)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f - g)(t) = f(t) - g(t)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (Looking at these definitions we must really admit that
              we prefer the first form, with the arrow, found at the
              end of the chapter—it's more explicit!)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={22}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 23.
            </b>
            {" "}
            What does...
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h) \,\times\, &#123;A_i(t_0 + h) - A_i(t_0)\over h&#125; \,\times\, A_&#123;i + 1&#125;(t_0) \,\times\, \cdots  \,\times\, A_n(t_0)
            $$
            <ImageRight
                 src="/images/svg_ch4_big_product_parchment_cloud.svg" />
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            ...approach as{" "}
            <NoBreak>
              <Math>
                $
                h
                $
              </Math>
            </NoBreak>
            {" "}goes to{" "}
            <NoBreak>
              <Math>
                $
                0
                $
              </Math>
              ,
            </NoBreak>
            {" "}if{" "}
            <NoBreak>
              <Math>
                $
                A_1, \dots, A_n
                $
              </Math>
            </NoBreak>
            {" "}
            {" "}
            <NoBreak>
              <Math>
                $
                : \rr \ra \rr
                $
              </Math>
            </NoBreak>
            {" "}are differentiable at the point{" "}
            <NoBreak>
              <Math>
                $
                t_0
                $
              </Math>
            </NoBreak>
            ?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={22}>
            <VerticalChunk>
              We can start with the fraction in the
              middle of the product:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_big_product_fraction_outline.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              This is seen to be a Newton quotient
              (cf. Exercise 16)
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f(x + h) - f(x)\over h
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              with{" "}
              <NoBreak>
                <Math>
                  $
                  f = A_i
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  x = t_0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}per which
              (Exercise 16 Note 3), the fraction approaches
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A_i'(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}given also the assumption 
              that each of the functions{" "}
              <NoBreak>
                <Math>
                  $
                  A_1
                  $
                </Math>
                ,
              </NoBreak>
              {" "}...,{" "}
              <NoBreak>
                <Math>
                  $
                  A_n
                  $
                </Math>
              </NoBreak>
              {" "}
              (including{" "}
              <NoBreak>
                <Math>
                  $
                  A_i
                  $
                </Math>
                )
              </NoBreak>
              {" "}is differentiable at{" "}
              <NoBreak>
                <Math>
                  $
                  t_0
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Next down in order of interesting-ness we presumably
              have the terms{" "}
              <NoBreak>
                <Math>
                  $
                  A_1(t_0 + h)
                  $
                </Math>
              </NoBreak>
              {" "}through{" "}
              <NoBreak>
                <Math>
                  $
                  A_&#123;i-1&#125;(t_0 + h)
                  $
                </Math>
              </NoBreak>
              {" "}
              at the beginning of the product...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_big_product_prefix_outline.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...; here the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of{" "}
              <NoBreak>
                <Math>
                  $
                  A_1
                  $
                </Math>
              </NoBreak>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $
                  t_0
                  $
                </Math>
              </NoBreak>
              {" "}implies the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              continuity
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of{" "}
              <NoBreak>
                <Math>
                  $
                  A_1
                  $
                </Math>
              </NoBreak>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $
                  t_0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}which implies that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A_1(t_0 + h)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              approaches
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A_1(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                .
              </NoBreak>
              {" "}(These various
              technicalities concerning a generic function
              {" "}
              <NoBreak>
                <Math>
                  $
                  f : \rr \ra \rr
                  $
                </Math>
              </NoBreak>
              {" "}are mentioned in the solution
              to Exercise 17.) Similarly for{" "}
              <NoBreak>
                <Math>
                  $
                  A_2(t_0 + h)
                  $
                </Math>
              </NoBreak>
              ,
              etc, up to{" "}
              <NoBreak>
                <Math>
                  $
                  A_&#123;i-1&#125;(t_0 + h)
                  $
                </Math>
                ,
              </NoBreak>
              {" "}so
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              approaches
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              A_1(t_0) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}approaches{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                .
              </NoBreak>
              {" "}(If some quantities are
              each approaching a different value, then the 
              product-of-the-quantities will approach the 
              product-of-the-values—something not mentioned
              in the solution to Exercise 17, but that might
              have been.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Lastly one has the tail end of the product,
              where{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}does not even appear:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_big_product_suffix_outline.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Because{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              {" "}does not appear here, the tail end
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              stays put
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              where it is, irrespective of the value of{" "}
              <NoBreak>
                <Math>
                  $
                  h
                  $
                </Math>
              </NoBreak>
              .
              So that was easy! Altogether, the answer is
              therefore:{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_big_product_final_answer.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...with a lone “
              <NoBreak>
                <Math>
                  $
                  A_i'
                  $
                </Math>
                ”
              </NoBreak>
              {" "}in the middle.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={23}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 24.
            </b>
            {" "}
            The function below is also the red
            curve from Exercise 12, known as the
            {" "}
            <i>
              cosine function
            </i>
            {" "}(already encountered
            in Chapter 3, Exercise 7). Knowing that
            this function is the{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
              -coordinate
            </NoBreak>
            {" "}of a
            point rotating at unit speed around a unit
            circle, find, by inspection of the graph,
            a rational approximation to the circumference
            of a unit circle.
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_cosine_for_eta.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={23}>
            <VerticalChunk>
              Because the particle is going at unit speed the
              circumference of the unit circle is equal to the
              amount of time it takes the particle to complete one
              revolution of the circle. That is, for example, the
              length of this yellow interval:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_for_eta_with_yellow.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              One revolution around the circle is also
              made up of four quarter-revolutions, where
              each quarter-revolution of the circle is “half a bump”,
              on the graph:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_for_eta_with_two_yellows.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Going a bit further,{" "}
              <i>
                seven
              </i>
              {" "}of these
              quarter-revolutions appear to take up exactly
              {" "}
              <NoBreak>
                <Math>
                  $
                  t = 11
                  $
                </Math>
              </NoBreak>
              {" "}units of time (!!!!!!!!!!!) (or maybe
              just a{" "}
              <i>
                little
              </i>
              {" "}less than{" "}
              <NoBreak>
                <Math>
                  $
                  11
                  $
                </Math>
              </NoBreak>
              {" "}units, if
              you zoom in):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_for_eta_revealed.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Therefore
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;11 \over 7&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is an approximation to the quarter-circumference of
              the circle, and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 4 \cdot &#123;11 \over 7&#125; = &#123;44 \over 7&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is an approximation to the circumference of a unit
              circle.
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
              This approximation ends up being about 
              half-a-part-in-a-thousand too large 
              (
              <NoBreak>
                <Math>
                  $
                  0.040249943...\%
                  $
                </Math>
              </NoBreak>
              {" "}too large) (or just: 
              &lt;span class="nobreak"&gt;“
              <NoBreak>
                <Math>
                  $
                  0.00040249943...
                  $
                </Math>
              </NoBreak>
              &lt;/span&gt;
              too large”), which is strikingly good, all things
              considered.
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
              Numerically, note that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;44 \over 7&#125; = 6.285714\dots
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is a bit larger than{" "}
              <NoBreak>
                <Math>
                  $
                  6
                  $
                </Math>
                ,
              </NoBreak>
              {" "}which agrees with
              what we see here for the length of a full
              revolution...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_for_eta_tau_verification.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...whereas
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;11 \over 7&#125; = 1.571428\dots
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is about{" "}
              <NoBreak>
                <Math>
                  $
                  1.6
                  $
                </Math>
                ,
              </NoBreak>
              {" "}which also appears to agree
              with what we can see on the graph about the
              length of a quarter-revolution:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_for_eta_eta_verification.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (So, we have some secondary “visual confirmation”
              of our approximations.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={24}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 25.
            </b>
            {" "}
            The graphs below are the horizontal and
            vertical velocities...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_pacman1_hor0.svg" />
          <ImageLeft
               src="/images/svg_ch4_pacman1_x_prime_t_scloud.svg"
               offset_y="1em" />
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_pacman1_ver0.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...of PACMAN, with unit of
            distance of one “cell”, or “c”—the distance 
            between two food pellets—and units of velocity 
            of “cells per second”, or “c/s”—also,
            {" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
              -coordinates
            </NoBreak>
            {" "}increase towards the right, 
            and{" "}
            <NoBreak>
              <Math>
                $
                y
                $
              </Math>
              -coordinates
            </NoBreak>
            {" "}increase towards the top:
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_pacman1_maze.svg"
               height="590px" />
          <div
               class="spacer" />
          <VerticalChunk>
            Where is Pacman at{" "}
            <NoBreak>
              <Math>
                $
                t = 49
                $
              </Math>
              s?
            </NoBreak>
            {" "}(Note: Pacman 
            is NOT assumed to be anywhere in particular at 
            {" "}
            <NoBreak>
              <Math>
                $
                t = 40
                $
              </Math>
              s—you
            </NoBreak>
            {" "}have to figure that out from the 
            data!)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={24}>
            <VerticalChunk>
              Let's start by examining Pacman's first six displacements,
              appearing here in blue (positive displacements, going to the right 
              or up) and red (negative displacements, going to the left or down):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_hor1.svg" />
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_ver1.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              We can estimate the duration of each
              displacement to the closest 10th of a second
              (mistakes of estimation can be made, we shall recover):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_hor2.svg" />
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_ver2.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              We can also estimate the velocity to be
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \pm 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              when it is nonzero (for displacement
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet5_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              the velocity might seem more like{" "}
              <NoBreak>
                <Math>
                  $
                  -6.8\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}
              at the least, but we've already made more
              significant errors while eyeballing the durations, so
              nevermind). Using
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (\te&#123;velocity&#125;) \times (\te&#123;amount of time&#125;) = (\te&#123;displacement&#125;)
              $$
              <ImageRight
                   src="/images/svg_ch4_pacman1_velocity_times_amt_time_cloud.svg" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              then gives us the following estimates for the
              <del>
                <VerticalChunk>
                  amount of travel
                </VerticalChunk>
              </del>
              &ensp;
              <del>
                <VerticalChunk>
                  during the
                </VerticalChunk>
              </del>
              &ensp;six displacements:
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     style="margin-right:1em"
                     src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                     class="ch4_pacman1_inline_number_pellet" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    -6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.5\te&#123;s&#125;\,\,=\,\,-3.375\,\te&#123;cells&#125;
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <ImageRight
                   src="/images/svg_ch4_pacman1_cells_per_second_times_seconds_cloud.svg" />
            </CentralDisplay>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     style="margin-right:1em"
                     src="/images/svg_ch4_pacman1_pellet2_inline.svg"
                     class="ch4_pacman1_inline_number_pellet" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    -6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,-2.7\,\te&#123;cells&#125;
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     style="margin-right:1em"
                     src="/images/svg_ch4_pacman1_pellet3_inline.svg"
                     class="ch4_pacman1_inline_number_pellet" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.9\te&#123;s&#125;\,\,=\,\,6.075\,\te&#123;cells&#125;
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     style="margin-right:1em"
                     src="/images/svg_ch4_pacman1_pellet4_inline.svg"
                     class="ch4_pacman1_inline_number_pellet" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,2.7\,\te&#123;cells&#125;
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     style="margin-right:1em"
                     src="/images/svg_ch4_pacman1_pellet5_inline.svg"
                     class="ch4_pacman1_inline_number_pellet" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    -6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,-2.7\,\te&#123;cells&#125;
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     style="margin-right:1em"
                     src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                     class="ch4_pacman1_inline_number_pellet" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.9\te&#123;s&#125;\,\,=\,\,6.075\,\te&#123;cells&#125;
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              Given the horizontal/vertical alternation
              of displacements, this would nominally 
              imply the following set of initial motions:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_initial_displacements_before_rounding.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              But these are approximate numbers and the
              true values must be integers, except for
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              . (Because we don't know where Pacman started
              out. For
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              &ensp;the next displacement, if you look back at
              the graphs, is horizontal, so yes.) In fact,
              if you look at the maze,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              3
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              cells is the smallest amount that Pacman
              can travel vertically when changing{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -coordinate,
              between two moments of horizontal motion.
              The next smallest possible amounts are
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              4
              $$
              <ImageLeft
                   src="/images/svg_ch4_pacman1_disp_4_cloud.svg"
                   width="700px" />
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
              6
              $$
              <ImageLeft
                   src="/images/svg_ch4_pacman1_disp_6_cloud.svg"
                   width="1400px" />
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
              7
              $$
              <ImageLeft
                   src="/images/svg_ch4_pacman1_disp_7_cloud.svg"
                   width="700px" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              cells, with{" "}
              <NoBreak>
                <Math>
                  $
                  5
                  $
                </Math>
              </NoBreak>
              {" "}not being a possibility.
              In the horizontal direction,
              the smallest amounts are
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              3, 6, \te&#123; and &#125; 9
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (and{" "}
              <NoBreak>
                <Math>
                  $
                  12
                  $
                </Math>
              </NoBreak>
              {" "}and ...) which is even more restrictive.
              Now if each of our duration 
              measurements carries an error of no more than
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \pm&#123;&#125;0.2\te&#123;s&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              each computed displacement is at most{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,\pm&#123;&#125;0.2\te&#123;s&#125;\,=\,\pm1.35\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              from the truth, give or take the small
              difference between{" "}
              <NoBreak>
                <Math>
                  $
                  6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}
              and the actual velocity. So
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              -2.7\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              must be either
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              -3\te&#123;c&#125;
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
              -4\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              these being the only two posssible integer
              vertical displacements within{" "}
              <NoBreak>
                <Math>
                  $
                  \pm1.35
                  $
                </Math>
                c
              </NoBreak>
              {" "}of{" "}
              <NoBreak>
                <Math>
                  $
                  -2.7
                  $
                </Math>
                c.
              </NoBreak>
              {" "}
              Then, applying similar logic to each
              measurement, the initial motions must be:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_initial_motions.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The maze fits these constraints in only two places
              (note that
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet2_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              &ensp;and{" "}
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet4_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              &ensp;equal{" "}
              <NoBreak>
                <Math>
                  $
                  -3\te&#123;c&#125;
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  3\te&#123;c&#125;
                  $
                </Math>
                ,
              </NoBreak>
              {" "}in each
              case):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_maze_two_possibilities.svg"
                 height="590px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Looking into the future, 
              the next three displacements are 
              right/down/right and last
              ~
              <NoBreak>
                <Math>
                  $
                  3.2
                  $
                </Math>
              </NoBreak>
              s/~
              <NoBreak>
                <Math>
                  $
                  0.4
                  $
                </Math>
              </NoBreak>
              s/~
              <NoBreak>
                <Math>
                  $
                  1.3
                  $
                </Math>
              </NoBreak>
              s
              respectively:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_hor3.svg" />
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_ver3.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (Nb: Imagine translating these intervals to the left or right until
              the start of the interval is at an integer value: this is a good
              way to estimate the length.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Because displacement
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              &ensp;is horizontal to the right the only possible
              remaining solution is the right-hand one,
              or else Pacman would collide with the ghost cage,
              with displacement
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              &ensp;equal to 6c not 7c, or else Pacman would 
              collide with a wall:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_maze_would_collide.svg"
                 height="590px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Since
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,3.2\te&#123;s&#125;\,=\,21.6\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              it seems that displacement
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              &ensp;brings Pacman all the way around the maze to
              the left edge of the ghost cage, like so...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_maze_bring_around.svg"
                 height="590px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...though it is hard to measure that distance;
              but this is confirmed by the fact that the next
              two displacements are “down by{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              {" "}and to the right”;
              specifically, since
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              -6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,0.4\te&#123;s&#125;\,=\,-2.7\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              displacement
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              &ensp;must be{" "}
              <NoBreak>
                <Math>
                  $
                  -3
                  $
                </Math>
                c
              </NoBreak>
              {" "}or{" "}
              <NoBreak>
                <Math>
                  $
                  -4
                  $
                </Math>
              </NoBreak>
              c;
              must actually be{" "}
              <NoBreak>
                <Math>
                  $
                  -3
                  $
                </Math>
                c
              </NoBreak>
              {" "}since displacement
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet9_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              is to the right; so, notwithstanding the exact 
              length of displacement
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet9_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              , there is only one possibility for displacements
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              through
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman1_maze_final_solution.svg"
                 height="590px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              So at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 49
                  $
                </Math>
                s,
              </NoBreak>
              {" "}between displacements
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet7_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              &ensp;and
              <InlineImage
                   src="/images/svg_ch4_pacman1_pellet8_inline.svg"
                   class="ch4_pacman1_inline_number_pellet" />
              , Pacman is immediately to the left of the ghost cage.{" "}
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={25}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 26.
            </b>
            {" "}
            Same question, but for the following maze...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_pacman2_maze.svg"
               height="551px" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...and for the following velocity data, with the 
            horizontal and vertical velocities
            superimposed on one graph (just a cosmetic 
            change—note that green is the vertical velocity)...
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_pacman2_frankenstein.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            ...and asking for Pacman's position at{" "}
            <NoBreak>
              <Math>
                $
                t = 34
                $
              </Math>
            </NoBreak>
            s.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={25}>
            <VerticalChunk>
              It seems well-advised to start by heuristically verifying
              that Pacman's speed remains
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \approx 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              no matter the direction that Pacman is headed, as long as Pacman is
              in motion.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For example, take the instant{" "}
              <NoBreak>
                <Math>
                  $
                  t \approx 23.7
                  $
                </Math>
                s,
              </NoBreak>
              {" "}when the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -
              </NoBreak>
              {" "}and &lt;span class="nobreak"&gt;
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -velocities&lt;/span&gt;
              </NoBreak>
              {" "}are 
              both about (?){" "}
              <NoBreak>
                <Math>
                  $
                  4.8\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_at_23_7.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The velocity vector (cf. Exercise 12) is therefore about
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (4.8, 4.8)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              in units of{" "}
              <NoBreak>
                <Math>
                  $
                  \te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $
                  t \approx 23.7
                  $
                </Math>
              </NoBreak>
              s,
              and the speed, being the length of the velocity
              vector (cf. Exercise 12), is about
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \sqrt&#123;4.8^2 + 4.8^2&#125; = \sqrt&#123;2&#125; \times 4.8 = 6.788...
              $$
              <ImageLeft
                   src="/images/svg_ch4_pacman2_4_point_8_cloud.svg" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (Pythagoras!)
              in units of{" "}
              <NoBreak>
                <Math>
                  $
                  \te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}as well,
              and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              6.788... \approx 6.75
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              which supports, in this case, the hypothesis that
              Pacman's speed is{" "}
              <NoBreak>
                <Math>
                  $
                  \approx 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}
              regardless of the direction of travel.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For more verification, take{" "}
              <NoBreak>
                <Math>
                  $
                  t = 26\te&#123;s&#125;
                  $
                </Math>
                ,
              </NoBreak>
              {" "}
              at which point the velocity vector is roughly
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (6.5, -2)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              cells per second:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_at_26.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              This gives a speed of
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \sqrt&#123;6.5^2 + 2^2&#125; = \sqrt&#123;46.25&#125; = 6.800...
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              cells per second, Again close to{" "}
              <NoBreak>
                <Math>
                  $
                  6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
                .
              </NoBreak>
              {" "}(!)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For two more verifications take{" "}
              <NoBreak>
                <Math>
                  $
                  t = 27\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  t = 30\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_at_27_and_30.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The speed at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 27\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}is approximately
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \sqrt&#123;3^2 + 6.2^2&#125; = \sqrt&#123;47.44&#125; = 6.888
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              cells per second, while the speed at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 30\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}
              is approximately
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \sqrt&#123;5.6^2 + 3.6^2&#125; = \sqrt&#123;44.32&#125; = 6.657
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              cells per second. Both close-ish to
              {" "}
              <NoBreak>
                <Math>
                  $
                  6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
                !
              </NoBreak>
              {" "}For one last
              verification (truly the last, we promise)
              consider{" "}
              <NoBreak>
                <Math>
                  $
                  t = 31\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_at_31.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              This yields a speed of
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \sqrt&#123;2.6^2 + 6.2^2&#125; = \sqrt&#123;45.2&#125; = 6.723...
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              cells per second, again close to{" "}
              <NoBreak>
                <Math>
                  $
                  6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
                !
              </NoBreak>
              {" "}
              (Closest so far, in fact.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              We now admit, after this “heuristic verification”, 
              that Pacman goes approximately the same speed
              regardless of direction, namely something in
              the vicinity of{" "}
              <NoBreak>
                <Math>
                  $
                  6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Now consider the time interval from{" "}
              <NoBreak>
                <Math>
                  $
                  t = 22.7\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  t = 24.7\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_first_big_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Both the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -velocities
              </NoBreak>
              {" "}are nonzero
              during this interval, which indicates the presence
              of a curve. The curve starts with vertical motion
              and ends with horizontal motion:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_first_big_purple_annotations.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Thus Pacman starts the curve going up, and ends the curve
              going right. Moreover, it takes Pacman
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 3\te&#123;s&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              to complete the curve (we know the curve is fully
              completed from the purely horizontal motion at
              either end), from which the curve must be
              approximately
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125; \times 3\te&#123;s&#125; = 20.25\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              in length! In turn, using the approximation
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \approx &#123;11 \over 7&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for the quarter-circumference of a unit circle
              (cf
              <NoBreak>
                <Math>
                  $
                  .
                  $
                </Math>
              </NoBreak>
              {" "}Exercise 24), this would indicate that
              the curve (which is a quarter-circle, as 
              all curves in this maze) has radius
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \approx &#123;20.25\te&#123;c&#125; \over 11/7&#125; = &#123;7 \times 20.25\te&#123;c&#125; \over 11&#125; = &#123;141.75\te&#123;c&#125; \over 11&#125; = 12.886...\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where we give up and use a calculator at the
              last step. But the possible radii are{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  6
                  $
                </Math>
              </NoBreak>
              ,
              {" "}
              <NoBreak>
                <Math>
                  $
                  9
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  12
                  $
                </Math>
                .
              </NoBreak>
              {" "}This all but rules out all of the
              maze curves except the one that has radius{" "}
              <NoBreak>
                <Math>
                  $
                  12
                  $
                </Math>
              </NoBreak>
              ,
              and that allows a traversal that starts upward
              and ends rightward; we mean the upper left
              curve of the maze:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_upper_left_highlight.svg"
                 height="551px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              From there, Pacman goes right for a bit, then
              takes another curve 3 seconds long, that starts
              rightward and ends downward:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_second_big_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...this second curve must, of course, be the
              upper right-hand corner of the maze, that has the
              appropriate length, position, and orientation:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_upper_right_highlight.svg"
                 height="551px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              What is extremely strange, however, is that
              Pacman immediately follows the end of this curve
              with rightward motion:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_first_warning_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In fact, it is also strange that Pacman{" "}
              <i>
                preceded
              </i>
              {" "}
              the first curve with rightward motion (when that curve
              starts at the leftmost edge of the maze):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_second_warning_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Looking back over our work, 
              we find that we made a mistake when we wrote
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 3\te&#123;s&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              the corrected version of that being of course
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 2\te&#123;s&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              (the second curve likewise lasted{" "}
              <NoBreak>
                <Math>
                  $
                  2\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              ,
              not{" "}
              <NoBreak>
                <Math>
                  $
                  3\te&#123;s&#125;
                  $
                </Math>
                )
              </NoBreak>
              {" "}making the length and radius of
              the first curve two-thirds of whatever we previously 
              computed (because{" "}
              <NoBreak>
                <Math>
                  $
                  2\te&#123;s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}is two-thirds of
              {" "}
              <NoBreak>
                <Math>
                  $
                  3\te&#123;s&#125;
                  $
                </Math>
                ),
              </NoBreak>
              {" "}i.e.,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;2 \over 3&#125; \times 12.886...\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for the{" "}
              <i>
                radius
              </i>
              {" "}of the first (and second)
              curve, which means that the first and second curves
              actually had radii{" "}
              <NoBreak>
                <Math>
                  $
                  9
                  $
                </Math>
                ,
              </NoBreak>
              {" "}undoubtedly,
              and that Pacman's initial motion followed the 
              one-inside track (the two rightward motions are 
              easily seen to be ~
              <NoBreak>
                <Math>
                  $
                  3\te&#123;c&#125;
                  $
                </Math>
              </NoBreak>
              {" "}each):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_corrected_highlights.svg"
                 height="551px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Next, after some downward motion we are faced
              with a long, juicy, down-and-then-left curve,
              which must surely be the bottom-right curve of
              radius{" "}
              <NoBreak>
                <Math>
                  $
                  12
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_third_big_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Indeed, the curve lasts ~
              <NoBreak>
                <Math>
                  $
                  2.7
                  $
                </Math>
                s,
              </NoBreak>
              {" "}and{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125; \times 2.7\te&#123;s&#125; = 18.225\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is approximately the same as{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;11 \over 7&#125; \cdot 12\te&#123;c&#125; = 18.85...\te&#123;c&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              confirming the radius of{" "}
              <NoBreak>
                <Math>
                  $
                  12\te&#123;c&#125;
                  $
                </Math>
              </NoBreak>
              {" "}and the location
              of the curve.
              Pacman's trajectory so far is then:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_continued_highlights.svg"
                 height="551px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Next Pacman seems to reverse course, and briefly
              re-enters the curve (going right and up a tiny bit):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_back_in_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              But then changes again, and re-exits the curve
              (going left and down a tiny bit):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_back_out_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Then Pacman goes left-and-then-right-again by
              some small amount:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_pacman2_frankenstein_back_out_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              At this point—and in particular at 
              {" "}
              <NoBreak>
                <Math>
                  $
                  t = 34\te&#123;s&#125;
                  $
                </Math>
                —Pacman
              </NoBreak>
              {" "}is between a moment 
              of purely horizontal motion and purely vertical
              motion; since the left-and-then-right-again 
              motion did obviously not bring Pacman{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              {" "}cells
              over to the left (which is the next place 
              after the curve exit that is connected to both 
              horizontal and vertical paths),
              Pacman must 
              be at the bottom-left exit of the bottom-right
              maze corner, still.
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
              Feel free to follow Pacman all the way
              to the end of the timeseries. He ends up somewhere
              near...
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={26}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 27.
            </b>
            {" "}
            Describe what a function might look like
            if its second derivative has this graph (broadly):
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_one_long_line.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={26}>
            <VerticalChunk>
              As the second derivative is the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              rate of change of the slope
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              places where the second derivative is zero are 
              places where the slope of the function is constant.
              So the function will have a constant slope over
              each of these purple intervals (we're going to
              assume that what looks like{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}is{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and eyeball 
              where that starts and ends, the statement
              does say “broadly” anyway):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_with_purple.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              As
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              constant slope
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              means
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              line segment
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              the function will therefore be a 
              line segment, over each of the purple intervals!
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Between these line segments, however, things
              happen, and there is a change in slope! The
              change in slope is given by the “amount of bump”
              in the second derivative between the intervals.
              As it turns out, the area enclosed by the bump
              gives the total change in slope:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_positive_area.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (We won't argue this right now, but it's 
              sort-of-intuitive.)
              For bumps lying below the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -axis
              </NoBreak>
              {" "}the area
              counts as negative; that negative area is, again,
              the total change in slope from one end of the bump
              to the other:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_negative_area.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In any case the areas are all the same{" "}
              <i>
                in absolute
                value
              </i>
              , meaning that whatever slope is gained as
              we pass over a positive bump, the same amount
              is lost again as we pass over a negative bump!
              Thus, the line segments of the original function
              will alternate between “low” and “high”
              slopes—as we pass over a positive bump we switch
              from a “low slope” line segment to a “high slope”
              line segment, and vice-versa when we pass over a
              negative bump.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Put{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large a
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for the area of a positive bump (per appearances, 
              {" "}
              <NoBreak>
                <Math>
                  $
                  a \approx 1
                  $
                </Math>
                ),
              </NoBreak>
              {" "}and
              <ImageRight
                   src="/images/svg_ch4_one_long_line_a_is_about_1_cloud.svg" />
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large c
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for the slope of a “low slope” line segment. Then a
              “high slope” line segment has slope{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large c + a
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              since we add{" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
              </NoBreak>
              {" "}to the slope each time we go over
              a positive bump. 
              (And the slope goes back down to
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large (c + a) + (-a) = c
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              when we pass over a negative bump, with{" "}
              <NoBreak>
                <Math>
                  $
                  -a
                  $
                </Math>
              </NoBreak>
              {" "}being
              the (negative) area of a negative bump.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              With these variables in place, here is a generic
              illustration of a graph (in black) whose second
              derivative is the one from the statement (faded in
              the background):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_solution_sketch_1.svg" />
            <ImageLeft
                 src="/images/svg_ch4_one_long_line_c_is_approx_0_point_2_cloud.svg" />
            <VerticalChunk>
              In this example{" "}
              <NoBreak>
                <Math>
                  $
                  c \approx 0.2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}but{" "}
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
              </NoBreak>
              {" "}can be any
              value—this is not constrained by the second derivative.
              Moreover any amount of vertical translation can 
              also be introduced to the graph. (Vertical
              translation does not affect the derivative,
              much less the second derivative.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For another example, if{" "}
              <NoBreak>
                <Math>
                  $
                  c = -a/2
                  $
                </Math>
              </NoBreak>
              ,
              meaning{" "}
              <NoBreak>
                <Math>
                  $
                  c \approx -1/2
                  $
                </Math>
              </NoBreak>
              ,
              the graph ends up a perfectly balanced see-saw that 
              stays confined to a bounded range of{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -values:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_solution_sketch_2.svg" />
            <ImageLeft
                 src="/images/svg_ch4_one_long_line_c_is_approx_minus_a_over_2_cloud.svg" />
            <VerticalChunk>
              Moreover, like the previous graph, this solution
              can also be vertically translated by any amount!
              (And same for any solution.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For yet another example, here is a graph in which
              {" "}
              <NoBreak>
                <Math>
                  $
                  c + a = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  c = -a \approx -1
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_solution_sketch_3.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Again, any of these graphs are
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              equally valid
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              solutions, and, for the last time,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              any amount of vertical translation can be introduced
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              (you can move the graphs up and down). So in
              other words we have a “two-parameter family of
              solutions”: one parameter of the solution—free
              to choose—is{" "}
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
                —while
              </NoBreak>
              {" "}another parameter—independently
              free to choose—is the amount of vertical
              translation.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              To claim a truly good “theoretical” understanding
              of the solution, however, we should also determine
              this rise here, if we can, as a function of{" "}
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
                ,
              </NoBreak>
              {" "}i.e., the amount of rise between the end
              of one line segment and the start of the next:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_what_are_the_rises_1.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In fact, is not entirely clear that there aren't
              possibly{" "}
              <i>
                two different
              </i>
              {" "}values of this rise,
              for the two different kinds of “connector curves”
              that exist (the concave ones and the convex ones):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_what_are_the_rises_2.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (It will turn out that 
              the rises are all the same
              but we're just pointing out.)
              Focusing on the case
              of a convex connector curve, note 
              that the rise is lower bounded by
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1.6c
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where{" "}
              <NoBreak>
                <Math>
                  $
                  1.6 = 0.8 + 0.8
                  $
                </Math>
              </NoBreak>
              {" "}is the length (run) of
              the connector curve, because{" "}
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
              </NoBreak>
              {" "}is the{" "}
              <i>
                lowest 
                slope
              </i>
              {" "}found anywhere inside the connector
              curve:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_connector_curve_lower_bound.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Symmetrically,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1.6(c + a)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is an upper bound on the rise, because{" "}
              <NoBreak>
                <Math>
                  $
                  c + a
                  $
                </Math>
              </NoBreak>
              {" "}is the
              {" "}
              <i>
                greatest slope
              </i>
              {" "}anywhere inside the
              connector curve:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_connector_curve_upper_bound.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              To go any further we must add the first
              derivative to this sketch—the first derivative
              has value
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large c
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where the function has slope{" "}
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
                ,
              </NoBreak>
              {" "}has value
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large c + a
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              where the function has slope{" "}
              <NoBreak>
                <Math>
                  $
                  c + a
                  $
                </Math>
                ,
              </NoBreak>
              {" "}and
              climbs up/down along an S-shaped curve outside
              of those intervals, adhering
              to a slope that is given by the value of the
              second derivative:{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_what_are_the_rises_3.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The afore-mentioned lower bound of{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1.6c
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              coincides with the area of a rectangle that{" "}
              <i>
                lies
                below
              </i>
              {" "}the graph of the derivative:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_connector_curve_lower_bound_area.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Whereas the afore-mentioned upper bound of{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1.6(a + c)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              coincides with the area of a rectangle that
              {" "}
              <i>
                lies above
              </i>
              {" "}the graph of the derivative:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_connector_curve_upper_bound_area.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In other words, the rise of the convex connector
              curve is lower and upper bounded by these
              two areas. It will be helpful to write this
              as a pictorial inequality:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_inequality_1.svg"
                 width="800px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              But we can tighten the inequality by dividing the
              areas halfway (we'll let you think about this 
              one—if you don't get it, don't worry, because we'll
              revisit the same topic in detail at some point):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_inequality_2.svg"
                 width="800px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Or even:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_inequality_3.svg"
                 width="800px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              If we take this logic to its bitter conclusion, we
              find the{" "}
              <i>
                e
              </i>
              quality:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_equality.svg"
                 width="800px" />
            <div
                 class="spacer" />
            <VerticalChunk>
              And because the S-curve is centrally symmetric
              (the slopes at equal distance from the center are
              the same because those slopes can be read off the
              second derivative, and the second derivative bump
              is left-right symmetric) we can compute the area
              that the curve encloses exactly, by a geometric
              surgery:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_area_surgery.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Long story short, the area enclosed, which is
              also the rise of the connector curve, is
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1.6\cdot (c + &#123;a\over 2&#125;)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...that can be read as “run times average slope”
              (because
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1.6
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the run while the slope (first derivative)
              spends equal amounts of time, in equal measure,
              above and below the value
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large c + &#123;a \over 2&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              that is, indeed, the average of{" "}
              <NoBreak>
                <Math>
                  $
                  c
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  c + a
                  $
                </Math>
              </NoBreak>
              ).
              For concave connector curves the
              S-curve of the derivative is...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_concave_connector.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...flipped around from before, going from
              high to low, but the area enclosed by the S-curve
              is the same. This area is also the rise of the
              connector curve. Hence, long story short—for the
              second time—all connector curves have rise
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 1.6\cdot (c + &#123;a\over 2&#125;)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              and we can annotate our sketch of the
              “generic” solution with this additional piece of
              information, if we want. (Well...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_long_line_with_rises_shown.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...there, no one can accuse us of not doing the
              homework ourselves.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={27}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 28.
            </b>
            {" "}
            Apply the definition
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            fg = (u \ra f(u)g(u))
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            of function multiplication
            in order to show that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (fg)h = f(gh)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for all functions{" "}
            <NoBreak>
              <Math>
                $
                f, g, h : \rr \ra \rr
                $
              </Math>
            </NoBreak>
            ,
            or, namely, to show that
          </VerticalChunk>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            (
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}times{" "}
            <NoBreak>
              <Math>
                $
                g
                $
              </Math>
              )
            </NoBreak>
            {" "}times{" "}
            <NoBreak>
              <Math>
                $
                h
                $
              </Math>
            </NoBreak>
            {" "}{" "}
          </CentralDisplayItalic>
          <div
               class="spacer" />
          <VerticalChunk>
            equals
          </VerticalChunk>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            {" "}{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}times (
            <NoBreak>
              <Math>
                $
                g
                $
              </Math>
            </NoBreak>
            {" "}times{" "}
            <NoBreak>
              <Math>
                $
                h
                $
              </Math>
            </NoBreak>
            )
          </CentralDisplayItalic>
          <div
               class="spacer" />
          <VerticalChunk>
            for all functions{" "}
            <NoBreak>
              <Math>
                $
                f, g, h : \rr \ra \rr
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={27}>
            <VerticalChunk>
              It is necessary and sufficient to show that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              ((fg)h)(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the same as
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f(gh))(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for an arbitrary input{" "}
              <NoBreak>
                <Math>
                  $
                  u \in \rr
                  $
                </Math>
                ,
              </NoBreak>
              {" "}in order to
              show that{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)h
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
              f(gh)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              are the same function. (Function equality is
              based on input-output behavior: two functions are
              equal if and only if every input is mapped to the
              same output under either function. See Note 6,
              Exercise 9, Chapter 3.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Starting up,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              ((fg)h)(u) = (fg)(u) \cdot h(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by the definition of function multiplication,
              and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (gh)(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              likewise. Moreover,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (fg)(u) = f(u) \cdot g(u)
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
              (gh)(u) = g(u) \cdot h(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by the same definition again. Therefore,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              ((fg)h)(u) = (f(u) \cdot g(u)) \cdot h(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              on the one hand, and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              on the other hand. But
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f(u) \cdot g(u)) \cdot h(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by the associativity of ordinary real number
              multiplication. (Not function multiplication:
              {" "}
              <i>
                real number multiplication
              </i>
              .) So
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              ((fg)h)(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              equals
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f(gh))(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for arbitrary{" "}
              <NoBreak>
                <Math>
                  $
                  u
                  $
                </Math>
                ,
              </NoBreak>
              {" "}which completes the proof.
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
              In words, we have just established the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              associativity of function multiplication
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              while we had previously established the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              associativity of function composition
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              (if you recall that one) in Exercise 9 of Chapter 
              3.
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
              By this result, we can write
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              fgh
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              without any parentheses at all: 
              it doesn't matter whether we think of this 
              product as{" "}
              <NoBreak>
                <Math>
                  $
                  (fg)h
                  $
                </Math>
              </NoBreak>
              {" "}or{" "}
              <NoBreak>
                <Math>
                  $
                  f(gh)
                  $
                </Math>
                ,
              </NoBreak>
              {" "}the result 
              is the same.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={28}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 29.
            </b>
            {" "}
            Prove that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f + g = g + f
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            and that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            fg = gf
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for all{" "}
            <NoBreak>
              <Math>
                $
                f, g : \rr \ra \rr
                $
              </Math>
              ,
            </NoBreak>
            {" "}using the fact that{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            a + b = b + a
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            and that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            ab = ba
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for all{" "}
            <NoBreak>
              <Math>
                $
                a, b \in \rr
                $
              </Math>
              .
            </NoBreak>
            {" "}
            (Prove something for functions by using the
            corresponding fact for numbers, namely.)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={28}>
            <VerticalChunk>
              Given an arbitrary{" "}
              <NoBreak>
                <Math>
                  $
                  u \in \rr
                  $
                </Math>
              </NoBreak>
              {" "}we have
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f + g)(u) = f(u) + g(u)
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
              (g + f)(u) = g(u) + f(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by the definition of function addition. But
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f(u) + g(u) = g(u) + f(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by the commutativity of real number addition
              [
              <NoBreak>
                <Math>
                  $
                  f(u)
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  g(u)
                  $
                </Math>
              </NoBreak>
              {" "}are both real numbers—the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              commutativity
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of real number addition is the fact that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              a + b = b + a
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for all real numbers{" "}
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
              {" "}mentioned in the
              statement—so we can use this here]; thus
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f + g)(u) = (g + f)(u)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $
                  u \in \rr
                  $
                </Math>
                ,
              </NoBreak>
              {" "}which implies
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f + g = g + f
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by definition of function equality.{" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For the second half we have, similarly,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              (fg)(u) &= f(u) \cdot g(u) \\
              &= g(u) \cdot f(u) \up&#123;1.5&#125;\\
              &= (gf)(u) \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for arbitrary{" "}
              <NoBreak>
                <Math>
                  $
                  u\in \rr
                  $
                </Math>
                ,
              </NoBreak>
              {" "}where the first and
              last equality are by the definition of a
              product of functions and where
              the middle equality is by commutativity of real
              number multiplication. [That would be the fact that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              ab = ba
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              for all{" "}
              <NoBreak>
                <Math>
                  $
                  a, b \in \rr
                  $
                </Math>
                ,
              </NoBreak>
              {" "}as mentioned in the statement.] Hence
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
              and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              gf
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              agree on an arbitrary input, hence{" "}
              <NoBreak>
                <Math>
                  $
                  fg = gf
                  $
                </Math>
              </NoBreak>
              {" "}by
              definition of function equality.
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={29}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 30.
            </b>
            {" "}
            A rat is running a fundraising race. The function
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large f : \rr \ra \rr
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            gives the amount raised as a function of position;
            specifically,{" "}
            <NoBreak>
              <Math>
                $
                &#123;f(x)&#125;
                $
              </Math>
            </NoBreak>
            {" "}is the total number of 
            {" "}
            <NoBreak>
              <Math>
                $
                \te&#123;\$&#125;
                $
              </Math>
              's
            </NoBreak>
            {" "}earned by virtue of running 
            {" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
            </NoBreak>
            {" "}meters from the start of the race; 
            a second function
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            \Large g : \rr \ra \rr
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            gives the position of the rat as a function of time;
            specifically,{" "}
            <NoBreak>
              <Math>
                $
                &#123;g(t)&#125;
                $
              </Math>
            </NoBreak>
            {" "}is the position from the start,
            in meters, reached by the rat at{" "}
            <NoBreak>
              <Math>
                $
                t
                $
              </Math>
            </NoBreak>
            {" "}seconds after the
            start of the race.
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            In this case, what does{" "}
            <NoBreak>
              <Math>
                $
                f \circ g
                $
              </Math>
            </NoBreak>
            {" "}compute?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={29}>
            <VerticalChunk>
              It computes
              the amount earned by the rat as a function of time. In 
              more detail,{" "}
              <NoBreak>
                <Math>
                  $
                  (f \circ g)(t)
                  $
                </Math>
              </NoBreak>
              {" "}
              is the number of{" "}
              <NoBreak>
                <Math>
                  $
                  \te&#123;\$&#125;
                  $
                </Math>
                's
              </NoBreak>
              {" "}earned by the rat at{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              {" "}
              seconds after the start of the race.
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
              In even more detail,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              g(t)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the position in meters of the rat{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              {" "}
              seconds after start, by definition 
              of{" "}
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
                ,
              </NoBreak>
              {" "}at which position the rat has
              earned
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f(g(t))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              {" "}{" "}
              <NoBreak>
                <Math>
                  $
                  \te&#123;\$&#125;
                  $
                </Math>
                's
              </NoBreak>
              {" "}in total, by definition of{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              .
              And
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f(g(t))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f \circ g)(t)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by definition of “
              <NoBreak>
                <Math>
                  $
                  \circ
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
                Note 2.
              </i>
              {" "}
              If it helps, 
              here is a pictorialization of the 
              “units transformation pipeline” that 
              occurs inside{" "}
              <NoBreak>
                <Math>
                  $
                  f \circ g
                  $
                </Math>
                :
              </NoBreak>
              {" "}{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_f_g_composition_units.svg" />
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 3.
              </i>
              {" "}
              To emphasize,{" "}
              <NoBreak>
                <Math>
                  $
                  f(x)
                  $
                </Math>
              </NoBreak>
              {" "}is the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              ~ total ~
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              amount earned when position{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              {" "}is reached.
              In real life{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              's
              graph might therefore look something like this, 
              while inventing some numbers:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_f_g_first_example_of_f.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In the above the rat earns{" "}
              <NoBreak>
                <Math>
                  $
                  \te&#123;\$&#125;
                  $
                </Math>
                3
              </NoBreak>
              {" "}for the 
              first 50m, after which the dollar-per-meter 
              rate is reduced.
              Or 
              {" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}
              could look like this,
              with discrete “unlocks”:{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_f_g_second_example_of_f.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              In our mathematicians' imaginations, however,{" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}
              might also look like this, nice and differentiable,
              with periods of negative slope (corresponding to
              parts of the course that momentarily lose you money):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_f_g_third_example_of_f.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              (Etc.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={30}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 31.
            </b>
            {" "}
            What does{" "}
            <NoBreak>
              <Math>
                $
                (f \circ g)'
                $
              </Math>
            </NoBreak>
            {" "}compute,
            keeping the same setup as in Exercise 34?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={30}>
            <VerticalChunk>
              It computes the dollars-per-second earnings rate 
              as a function of time. In full detail,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f \circ g)'(t)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the dollars-per-second rate which the rat is
              fundraising at{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              {" "}seconds after the start of the race.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              You don't need to know anything about “
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              ”
              or “
              <NoBreak>
                <Math>
                  $
                  g
                  $
                </Math>
                ”
              </NoBreak>
              {" "}to answer this question. You only need to
              know what “
              <NoBreak>
                <Math>
                  $
                  f \circ g
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is.{" "}
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={31}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 32.
            </b>
            {" "}
            Continuing with the fundraising rat as in the 
            previous two exercises, assume that the functions
            {" "}
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
            {" "}have these graphs:
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_f_g_actual_exercise_f.svg" />
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_f_g_actual_exercise_g.svg" />
          <div
               class="spacer" />
          <Solution
               solution_number={31}>
            <VerticalChunk>
              At{" "}
              <NoBreak>
                <Math>
                  $
                  t = 2
                  $
                </Math>
                s
              </NoBreak>
              {" "}the rat is running at a velocity of
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;5\over 3\up&#123;1&#125;&#125;[&#123;\te&#123;m/s&#125;&#125;]
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by the slope of this line segment on{" "}
              <NoBreak>
                <Math>
                  $
                  y = g(t)
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_f_g_actual_exercise_g_with_slope.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Moreover at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 2
                  $
                </Math>
                s
              </NoBreak>
              {" "}the rat 
              has reached
              {" "}
              <NoBreak>
                <Math>
                  $
                  2 \cdot (5/3) = 10/3 = 3.\overline&#123;33&#125;
                  $
                </Math>
              </NoBreak>
              m,
              where the dollars-per-meter earnings
              rate is one-tenth of a dollar per meter, by
              the slope of this segment on the graph{" "}
              <NoBreak>
                <Math>
                  $
                  y = f(x)
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_f_g_actual_exercise_f_with_slope.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Multiplying the{" "}
              <NoBreak>
                <Math>
                  $
                  5/3
                  $
                </Math>
              </NoBreak>
              {" "}meters-per-second velocity
              by the{" "}
              <NoBreak>
                <Math>
                  $
                  1/10
                  $
                </Math>
              </NoBreak>
              {" "}dollars-per-meter rate gives
              us the dollars-per-second rate at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 2
                  $
                </Math>
                s
              </NoBreak>
              {" "}(our 
              final answer—recall that{" "}
              <NoBreak>
                <Math>
                  $
                  (f \circ g)'(2)
                  $
                </Math>
              </NoBreak>
              {" "}is 
              the dollars-per-second rate at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 2
                  $
                </Math>
                s,
              </NoBreak>
              {" "}by Exercise 35):
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \left(&#123;5\over 3\up&#123;1&#125;&#125;\left[&#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125;\right]\right) \times \left(&#123;1 \over 10\up&#123;1&#125;&#125;\left[&#123;\te&#123;\$&#125; \over \te&#123;m&#125;&#125;\right]\right) = &#123;5\over 30\up&#123;1&#125;&#125;\left[&#123;\te&#123;\$&#125; \over \te&#123;s&#125;&#125;\right].
              $$
              <ImageRight
                   src="/images/svg_ch4_f_g_actual_exercise_cloud.svg" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              Or since
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;5 \over 3&#125; = 1.6666...
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              that would be
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;0.1666...&#125;[\te&#123;\$/s&#125;]
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              in decimal, i.e.,{" "}
              <span
                   style="font-family:Clicker Script;font-size:1.3em;">
                <VerticalChunk>
                  ~sixteen~{" "}
                </VerticalChunk>
              </span>
              point{" "}
              <NoBreak>
                <Math>
                  $
                  666...
                  $
                </Math>
              </NoBreak>
              {" "}cents per second.
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Postscript.
              </i>
              {" "}
              It turns out that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;5 \over 30&#125; = &#123;1 \over 6&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as we weren't really paying attention to the 
              possibility of simplifying the fraction. In
              particular,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;1 \over 6&#125; = 0.1666...
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              as, indeed,{" "}
              <NoBreak>
                <Math>
                  $
                  0.1666...
                  $
                </Math>
              </NoBreak>
              {" "}is half of{" "}
              <NoBreak>
                <Math>
                  $
                  0.333...
                  $
                </Math>
                !
              </NoBreak>
              {" "}(Learn
              something every day.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={32}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 33.
            </b>
            {" "}
            Conjecture a general formula for{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            (f \circ g)'(t)
            $$
          </MathBlock>
          <div
               class="spacer" />
          <VerticalChunk>
            for arbitrary (differentiable, say) functions
            {" "}
            <NoBreak>
              <Math>
                $
                f, g : \rr \ra \rr
                $
              </Math>
              .
            </NoBreak>
            {" "}(If it helps, interpret{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}
            and{" "}
            <NoBreak>
              <Math>
                $
                g
                $
              </Math>
            </NoBreak>
            {" "}exactly as in the scenario of the fundraising
            race, cf
            <NoBreak>
              <Math>
                $
                .
                $
              </Math>
            </NoBreak>
            {" "}Exercises 34-37.)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={32}>
            <VerticalChunk>
              The sought-for formula is
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              g'(t)\cdot f'(g(t))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because—to come back to the example of the 
              fundraising race—one must multiply the meters-per-second
              velocity at time{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              {" "}(that is,{" "}
              <NoBreak>
                <Math>
                  $
                  g'(t)
                  $
                </Math>
                )
              </NoBreak>
              {" "}by the dollars-per-meter 
              earnings rate at position{" "}
              <NoBreak>
                <Math>
                  $
                  g(t)
                  $
                </Math>
              </NoBreak>
              {" "}(that is,{" "}
              <NoBreak>
                <Math>
                  $
                  f'(g(t))
                  $
                </Math>
                )
              </NoBreak>
              {" "}to obtain
              the final dollars-per-second earning rate at time{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              {" "}
              (that is,{" "}
              <NoBreak>
                <Math>
                  $
                  (f \circ g)'(t)
                  $
                </Math>
              </NoBreak>
              ).
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              (For example, the solution to Exercise 36 can actually
              be written
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              g'(2) \cdot f'(g(2))
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              since, indeed,{" "}
              <NoBreak>
                <Math>
                  $
                  g(2) = 3.333...
                  $
                </Math>
                .
              </NoBreak>
              {" "}[Remember that we ended
              up multiplying{" "}
              <NoBreak>
                <Math>
                  $
                  g'(2) = &#123;5\over 3&#125;\te&#123;m/s&#125;
                  $
                </Math>
              </NoBreak>
              {" "}by 
              {" "}
              <NoBreak>
                <Math>
                  $
                  f'(3.333...) = &#123;1\over 10&#125;\te&#123;\$/s&#125;
                  $
                </Math>
                —the
              </NoBreak>
              {" "}“
              <NoBreak>
                <Math>
                  $
                  3.333...
                  $
                </Math>
                ”
              </NoBreak>
              {" "}is
              {" "}
              <NoBreak>
                <Math>
                  $
                  g(2)
                  $
                </Math>
              </NoBreak>
              .])
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Nb: This result is known as the{" "}
              <i>
                chain rule
              </i>
              .
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}Said{" "}
              <i>
                chain rule
              </i>
              {" "}
              is more commonly written...
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f \circ g)'(x) = f'(g(x))g'(x)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...with “
              <NoBreak>
                <Math>
                  $
                  g'(x)
                  $
                </Math>
                ”
              </NoBreak>
              {" "}last. (And “
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                ”
              </NoBreak>
              {" "}instead of “
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              ”.)
            </VerticalChunk>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 2.
              </i>
              {" "}One can also write the chain rule very succinctly like so...{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              (f \circ g)' = (f' \circ g)g'
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...where the right-hand-side is the product of{" "}
              <NoBreak>
                <Math>
                  $
                  g'
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  f' \circ g
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={33}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 34.
            </b>
            {" "}
            Sketch the velocity vector of a particle
            going at three times unit speed (“speed{" "}
            <NoBreak>
              <Math>
                $
                3
                $
              </Math>
              ”
            </NoBreak>
            {" "}in common
            parlance) clockwise around a circle of radius{" "}
            <NoBreak>
              <Math>
                $
                2
                $
              </Math>
            </NoBreak>
            .
            What path does the velocity vector describe 
            over time? (I.e., if you cut-paste the velocity
            vector back to the origin, so that its “tail” 
            is at{" "}
            <NoBreak>
              <Math>
                $
                (0, 0)
                $
              </Math>
              ,
            </NoBreak>
            {" "}what curve does the far end of the
            vector describe?) Over how much time?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={33}>
            <VerticalChunk>
              The velocity vector is an arrow of length{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              {" "}
              tangent to a circle of radius{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}brushed
              clockwise:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_velocity_vector_radius_2_speed_3_sketch_1.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              If we bring the tail of the vector back to
              {" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
              </NoBreak>
              {" "}we find an arrow of length{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              {" "}
              tracing a circle of radius{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_velocity_vector_radius_2_speed_3_centered.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Lastly, the velocity vector does a full revolution
              of the red circle in the same amount of time that
              the particle does a full revolution of the blue circle,
              which is
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;2\cdot (\te&#123;circumference of a unit circle&#125;) \over \te&#123;3&#125;&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              because the circumference of the blue circle
              is twice the circumference of a unit circle,
              and the particle is going at speed{" "}
              <NoBreak>
                <Math>
                  $
                  3
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
                Note 1.
              </i>
              {" "}
              In such diagrams we recycle the axes
              to plot quantities of several different
              dimensions: positions (in blue, in this
              case) have dimensions of length ([L]) while
              velocities (in red, in this case) have 
              dimensions of length over time ([L/T]).
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={34}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 35.
            </b>
            {" "}
            What is the{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <CentralDisplayItalic>
            acceleration vector
          </CentralDisplayItalic>
          <div
               class="spacer" />
          <VerticalChunk>
            (velocity vector of the velocity vector)
            of the particle from Exercise 39?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={34}>
            <VerticalChunk>
              The velocity vector of Exercise 39 travels
              in a circle of radius{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              {" "}in the same amount
              of time that the position vector 
              travels around a circle of radius{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
              </NoBreak>
              .
              The speed of the velocity vector is therefore
              {" "}
              <NoBreak>
                <Math>
                  $
                  1.5
                  $
                </Math>
              </NoBreak>
              {" "}times the speed of the position vector,
              or{" "}
              <NoBreak>
                <Math>
                  $
                  1.5 \times 3 = 4.5
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              As the derivative of the velocity vector,
              the acceleration vector is therefore
              a vector of length{" "}
              <NoBreak>
                <Math>
                  $
                  4.5
                  $
                </Math>
              </NoBreak>
              {" "}(= the speed of the 
              velocity vector) brushed clockwise along 
              the path of the velocity vector:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_what_is_the_acceleration_vector_uncentered.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Or, if we translate the acceleration vector back 
              to the origin and trace out its path over time 
              (either way is fine):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_what_is_the_acceleration_vector_centered.svg" />
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              You truly have to think of the acceleration
              vector as “the velocity of the velocity 
              vector”—if the velocity vector is changing, the
              acceleration vector is nonzero!
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={35}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 36.
            </b>
            {" "}
            Sketch the velocity vector, acceleration vector,
            and jerk vector of a particle going around a circle
            of radius{" "}
            <NoBreak>
              <Math>
                $
                3
                $
              </Math>
            </NoBreak>
            {" "}at speed{" "}
            <NoBreak>
              <Math>
                $
                2
                $
              </Math>
              .
            </NoBreak>
            {" "}(Clockwise, say.)
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={35}>
            <VerticalChunk>
              The velocity vector has length{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}because the
              particle has speed{" "}
              <NoBreak>
                <Math>
                  $
                  2
                  $
                </Math>
                .
              </NoBreak>
              {" "}So the velocity vector
              looks like so, while attached to the particle path
              (top) or brought back to the origin (bottom):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_velocity_vector_radius_3_speed_2_uncentered.svg" />
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_velocity_vector_radius_3_speed_2_centered.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Moreover (!) the speed of the velocity vector is 
              {" "}
              <NoBreak>
                <Math>
                  $
                  2/3
                  $
                </Math>
              </NoBreak>
              {" "}the speed of the particle, because the 
              velocity vector goes around a circle of{" "}
              <NoBreak>
                <Math>
                  $
                  2/3
                  $
                </Math>
              </NoBreak>
              {" "}the 
              radius in the same amount of time. So the velocity 
              vector has speed
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large 2 \cdot &#123;2\over 3&#125; = &#123;4\over 3&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              from which the acceleration vector—that can be 
              described as “the velocity vector of the velocity
              vector”—has length{" "}
              <NoBreak>
                <Math>
                  $
                  &#123;4\over 3&#125;
                  $
                </Math>
              </NoBreak>
              {" "}(the speed of the
              velocity vector), and looks like so (in either representation):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_velocity_vector_radius_3_speed_2_acceleration_uncentered.svg" />
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_velocity_vector_radius_3_speed_2_acceleration_centered.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Lastly the acceleration vector has speed
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              \Large &#123;4\over 3&#125;\cdot &#123;2\over 3&#125; = &#123;8 \over 9&#125;
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              by virtue of circling a circle of radius{" "}
              <NoBreak>
                <Math>
                  $
                  2/3
                  $
                </Math>
              </NoBreak>
              {" "}
              that of the velocity vector, that has speed{" "}
              <NoBreak>
                <Math>
                  $
                  4/3
                  $
                </Math>
                ,
              </NoBreak>
              {" "}
              in the same amount of time. Since the jerk is the
              derivative of the acceleration, this becomes the
              length of the jerk vector, that is exactly opposite
              to the velocity vector, being twice{" "}
              <NoBreak>
                <Math>
                  $
                  90^\circ
                  $
                </Math>
              </NoBreak>
              {" "}away:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_velocity_vector_radius_3_speed_2_jerk_uncentered.svg" />
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_velocity_vector_radius_3_speed_2_jerk_centered.svg" />
            <StarDivider />
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              If the particle's original path is centered at
              {" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
              </NoBreak>
              {" "}then that path constitutes a fourth
              circle obeying the same pattern
              of{" "}
              <NoBreak>
                <Math>
                  $
                  2/3
                  $
                </Math>
                -ratios
              </NoBreak>
              {" "}between the successive radii:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_velocity_vector_radius_3_speed_2_with_position.svg" />
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={36}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 37.
            </b>
            {" "}
            Imagine a single particle in a one-dimensional
            world, whose velocity equals its position; at{" "}
            <NoBreak>
              <Math>
                $
                t = 0
                $
              </Math>
            </NoBreak>
            ,
            the particle is sitting at{" "}
            <NoBreak>
              <Math>
                $
                x = 1
                $
              </Math>
            </NoBreak>
            :
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_one_particle_at_1.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            If we play time backward, will the particle 
            ever reach{" "}
            <NoBreak>
              <Math>
                $
                x = 0
                $
              </Math>
              ?
            </NoBreak>
            {" "}{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={36}>
            <VerticalChunk>
              Going back in time,
              examine how long it would take
              the particle to cross each of the intervals defined by
              the following geometric progression* (*see Note 1):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_one_particle_interval_subdivision.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The interval from{" "}
              <NoBreak>
                <Math>
                  $
                  0.5
                  $
                </Math>
              </NoBreak>
              {" "}to{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              {" "}
              takes{" "}
              <i>
                at least
              </i>
              {" "}{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;0.5 \over 1&#125; = 0.5
              $$
              <ImageLeft
                   src="/images/svg_ch4_one_particle_speed_equals_time_cloud.svg" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              time to cross, because the maximum speed of the particle
              inside of that interval is{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              .
              Similarly, the interval from{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x = 0.25
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              to
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x = 0.5
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              takes{" "}
              <i>
                at least
              </i>
              {" "}{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;0.25 \over 0.5&#125; = 0.5
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              time to cross, because the maximum speed of the particle
              inside of that interval is{" "}
              <NoBreak>
                <Math>
                  $
                  0.5
                  $
                </Math>
              </NoBreak>
              !
              And, again, the interval from{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x = 0.125
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              to
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              x = 0.25
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              takes at least
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              &#123;0.125 \over 0.25&#125; = 0.5
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              time to cross, because the maximum speed of the particle
              inside of that interval is{" "}
              <NoBreak>
                <Math>
                  $
                  0.25
                  $
                </Math>
                .
              </NoBreak>
              {" "}Etc—each interval 
              takes{" "}
              <i>
                at least
              </i>
              {" "}{" "}
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              0.5
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              units of time to cross, because the length of each
              interval is half of the maximum speed within the interval!
              But there are infinitely many intervals, and, therefore,
              it takes
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              at least
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              infinitely much time to make it to{" "}
              <NoBreak>
                <Math>
                  $
                  x = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}where the
              “infinitely” comes from adding infinitely many{" "}
              <NoBreak>
                <Math>
                  $
                  0.5
                  $
                </Math>
              </NoBreak>
              's
              together! (In other words, the particle never makes it to
              {" "}
              <NoBreak>
                <Math>
                  $
                  x = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}no matter how far back in time you look.)
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              A so-called
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              geometric progression
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              is a sequence of numbers in which each number
              is a fixed multiple of the previous number.
              For example,
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              100,\, 300,\, 900,\, 2700
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is a (finite) geometric progression, because each number
              is the previous number multiplied by{" "}
              <NoBreak>
                <Math>
                  $
                  3
                  $
                </Math>
              </NoBreak>
              ,
              and
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              1,\, 0.5,\, 0.25,\, 0.125,\, 0.0625,\, \ldots
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is an (infinite) geometric progression, because each number
              is the previous multiplied by{" "}
              <NoBreak>
                <Math>
                  $
                  0.5
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={37}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 38.
            </b>
            {" "}
            Take a system of two particles on the real
            line; at time{" "}
            <NoBreak>
              <Math>
                $
                t = 0
                $
              </Math>
              ,
            </NoBreak>
            {" "}the first particle (yellow)
            is at{" "}
            <NoBreak>
              <Math>
                $
                x = -1
                $
              </Math>
              ,
            </NoBreak>
            {" "}while the second one (blue)
            is at{" "}
            <NoBreak>
              <Math>
                $
                x = 1
                $
              </Math>
            </NoBreak>
            :
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_three_one_dimensional_particles.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            If the velocity of the yellow particle is set to track
            the position of the blue particle and vice-versa, 
            give a qualitative sketch of the
            position-as-a-function-of-time (time on the{" "}
            <NoBreak>
              <Math>
                $
                x
                $
              </Math>
            </NoBreak>
            {" "}
            axis, position on the{" "}
            <NoBreak>
              <Math>
                $
                y
                $
              </Math>
            </NoBreak>
            {" "}axis) of the two 
            particles. If we add also the graph of the position
            of the red particle from Exercise 41 to this set of
            graphs, what symmetries
            exist altogether between the three graphs?
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={37}>
            <VerticalChunk>
              For{" "}
              <NoBreak>
                <Math>
                  $
                  t &gt; 0
                  $
                </Math>
              </NoBreak>
              {" "}the yellow and blue particles
              approach{" "}
              <NoBreak>
                <Math>
                  $
                  0
                  $
                </Math>
              </NoBreak>
              {" "}in a kind of “radioactive decay”
              pattern; for{" "}
              <NoBreak>
                <Math>
                  $
                  t &lt; 0
                  $
                </Math>
              </NoBreak>
              ,
              they spin
              off to{" "}
              <NoBreak>
                <Math>
                  $
                  -\infty
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  \infty
                  $
                </Math>
              </NoBreak>
              {" "}respectively at an
              accelerating rate:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_three_one_dimensional_particles_blue_yellow.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              If we add the graph of the red particle to the
              mix, it is simply the mirror image of the
              blue particle's position through the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis
              (
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis that is ironically labeled “
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              ”):
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_three_one_dimensional_particles_blue_yellow_red.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Indeed, for the red graph,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the slope equals the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -value
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              (velocity = position), while
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              the slope equals minus the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -value
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              for the blue graph (velocity = position
              of yellow = minus own position). 
              (We forgot to mention that the blue and
              yellow graphs are mirror images of one another
              through the horizontal axis—this is one of the 
              “symmetries” that the problem statement asks about, though.)
              As taking a mirror image through the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              {" "}axis
              negates slopes without affecting{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
              </NoBreak>
              -coordinates,
              while both the blue and red graphs have the same
              value at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}this explains why the mirror
              image of one graph fits the constraints of the other
              and vice-versa:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_three_one_dimensional_particles_red_and_blue_symmetry.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Also note that all graphs have slopes of
              {" "}
              <NoBreak>
                <Math>
                  $
                  
                  \pm 1
                  
                  $
                </Math>
              </NoBreak>
              {" "}
              at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}as we tried to reflect in the sketches, 
              because each corresponding particle position 
              is either{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              {" "}or{" "}
              <NoBreak>
                <Math>
                  $
                  -1
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={38}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 39.
            </b>
            {" "}
            Four particles are placed 
            at intervals of{" "}
            <NoBreak>
              <Math>
                $
                90^\circ
                $
              </Math>
            </NoBreak>
            {" "}
            around a circle of radius{" "}
            <NoBreak>
              <Math>
                $
                1
                $
              </Math>
            </NoBreak>
            {" "}
            centered at{" "}
            <NoBreak>
              <Math>
                $
                (2, 4)
                $
              </Math>
            </NoBreak>
            {" "}in the plane:
          </VerticalChunk>
          <div
               class="spacer" />
          <Image
               src="/images/svg_ch4_circle_at_2_4.svg" />
          <div
               class="spacer" />
          <VerticalChunk>
            The velocity of each particle is set to 
            the position of the next particle clockwise
            around the circle, with this relationship
            maintained at all points in time.
            If the configuration above shows time 
            {" "}
            <NoBreak>
              <Math>
                $
                t = 0
                $
              </Math>
              ,
            </NoBreak>
            {" "}how will the positions of the
            particles evolve? Discuss both positive and 
            negative values of{" "}
            <NoBreak>
              <Math>
                $
                t
                $
              </Math>
            </NoBreak>
            .
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={38}>
            <VerticalChunk>
              At{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              {" "}
              the particles have position vectors that
              are up and the right,
              so the velocity vectors will be
              up and to the right,
              so the particles will move more up and
              to the right, and the velocity vectors
              will become more “up and to the right”, 
              and so on—broadly speaking, for{" "}
              <NoBreak>
                <Math>
                  $
                  t &gt; 0
                  $
                </Math>
              </NoBreak>
              {" "}
              there will ensue
              a kind of 
              four-particle explosion
              that goes up and to the right,
              off to{" "}
              <NoBreak>
                <Math>
                  $
                  (+\infty, +\infty)
                  $
                </Math>
              </NoBreak>
              .
              <ImageRight
                   src="/images/svg_ch4_circle_at_2_4_with_some_vectors_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk>
              For{" "}
              <NoBreak>
                <Math>
                  $
                  t &lt; 0
                  $
                </Math>
              </NoBreak>
              {" "}motion will be
              down and to the left, at least initially—it
              is hard to forecast off the top of one's
              head (unless you have a sudden flash of insight)
              what will happen for larger negative
              values of{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              .
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              HOWEVER.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              It is possible to say much more.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              To go deeper, we introduce eight new
              particles, comprising the original colors but
              in white and black flavors:
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                ,{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                ,{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                ,{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                ,{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                ,{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                ,{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                ,{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              At{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              {" "}the white particles are just a
              translate of the original particles, such
              that the circle on which they lie is 
              centered at{" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_circle_at_2_4_white_version.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The black particles, for their part, are
              piled on top of one another at{" "}
              <NoBreak>
                <Math>
                  $
                  (x, y) = (2, 4)
                  $
                </Math>
              </NoBreak>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}
              that we draw as four quarter-pies
              of different colors, like a UNO card:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_circle_at_2_4_black_version.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              Within each group we set the velocity of
              the purple particle to the position of the
              yellow particle, 
              the velocity of the yellow particle to the
              position of the green particle, and so on,
              like for the original set of particles.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              In this case the white particles will
              rotate at unit speed around their circle of
              radius{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              {" "}centered at the origin, just like
              the particles discussed in the solution to
              Exercise 12, that obey a similar set of
              constraints
              (albeit with a different set of colors).{" "}
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              The black particles, for their part, 
              behave as a single fused-together particle
              whose velocity is equal to its position,
              and will
              see their motion confined to an infinite 
              half-line through
              {" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
              </NoBreak>
              {" "}and{" "}
              <NoBreak>
                <Math>
                  $
                  (2, 4)
                  $
                </Math>
                ,
              </NoBreak>
              {" "}as their velocity—being
              equal to their position—stays parallel to the
              line between them and the origin, meaning
              they are “stuck” to that line.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Also note that the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of the black particles, being equal to the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              length of the velocity vector
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of said particles, is equal to the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              length of the position vector
              <ImageRight
                   src="/images/svg_ch4_circle_at_2_4_position_equals_velocity_cloud.svg" />
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of said particles, is equal to the
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              distance to the origin
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              of said particles,
              since the length of the position vector is
              the distance to the origin.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              This means that if we introduce gradations
              to the afore-mentioned half-line through{" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
              </NoBreak>
              {" "}
              and{" "}
              <NoBreak>
                <Math>
                  $
                  (2, 4)
                  $
                </Math>
              </NoBreak>
              ...
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_circle_at_2_4_UNO_with_gradated_line.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              ...indicating the distance to the origin,
              the black particles behave like a 
              one-dimensional system comprising a single
              particle on a half-line (or entire line,
              it doesn't hurt) whose velocity is equal to
              its position on this line:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_circle_at_2_4_UNO_flat_half_line.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The behavior of such a particle is
              identical to the behavior of the red
              particle from Exercise 41, 
              except that the current
              “UNO particle” has a slight head-start over the
              red particle from Exercise 41, being
              at position{" "}
              <NoBreak>
                <Math>
                  $
                  x = 2\sqrt&#123;5&#125;
                  $
                </Math>
              </NoBreak>
              {" "}
              instead of at position{" "}
              <NoBreak>
                <Math>
                  $
                  x = 1
                  $
                </Math>
              </NoBreak>
              {" "}at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              .
              (!!)
              <ImageLeft
                   src="/images/svg_ch4_circle_at_2_4_sqrt_20_cloud.svg" />
            </VerticalChunk>
            <VerticalChunk>
              This describes an “understandable”
              behavior of the black and white particles.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Next we write
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              for the function that gives 
              the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple-white particle
              as a function of time (in more detail,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x : \rr \ra \rr
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              to emphasize that WE ARE TALKING ABOUT A FUNCTION, e.g.,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(2)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of 
              the purple-white particle at
              {" "}
              <NoBreak>
                <Math>
                  $
                  t = 2
                  $
                </Math>
                ,
              </NoBreak>
              {" "}etc), and write
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              for the function that gives
              the{" "}
              <NoBreak>
                <Math>
                  $
                  y
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple-white 
              particle as a function of time, and so on 
              for all the other particles.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              For example,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              because the rate of change of the 
              {" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
                -coordinate
              </NoBreak>
              {" "}of the purple-white particle 
              is the value of the{" "}
              <NoBreak>
                <Math>
                  $
                  x
                  $
                </Math>
              </NoBreak>
              -coordinate
              of the yellow-white particle; we also have
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              by adding two such equations together; this can also be
              written
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              by the sum rule; but this gives us an idea!; we can
              try to{" "}
              <i>
                define
              </i>
              {" "}the original particles{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;by setting...
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...and see if these definitions satisfy the constraints
              of the problem! (We momentarily have two different
              purple particles: the one from the problem statement, 
              and the one that we have just defined; but that's ok,
              as long as we are aware of this small semantic
              transgression, it is not such a big deal, 
              and we shall soon prove that these two
              particles are one and the same.)
              For starters...
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\!\rt&#123;0.05&#125;)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x =
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\,\!\!\!' = (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\!\rt&#123;0.05&#125;)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y =
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\!\rt&#123;0.05&#125;)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x =
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\,\!\!\!' = (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\!\rt&#123;0.05&#125;)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y =
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\!\rt&#123;0.05&#125;)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x =
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\,\!\!\!' = (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\!\rt&#123;0.05&#125;)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y =
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\!\rt&#123;0.05&#125;)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x =
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\,\!\!\!' = (
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\!\rt&#123;0.05&#125;)' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y =
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...or...
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y\,\!\!\!' = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...cutting out the middle computation, so the constraints
              relating particle velocities to particle positions are
              satisfied (e.g., the velocity vector of the purple particle
              is the position vector of the yellow particle); 
              for seconders, evaluating these definitions at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              {" "}gives...
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) + 
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...or...
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              <VerticalChunk>
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _x(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
              <VerticalChunk
                   indent={true}>
                <br />
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0) = 2\,\,+
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
                <InlineImage
                     src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg"
                     class="ch4_inline_blackwhite_particles" />
                {" "}{" "}
                <NoBreak>
                  <Math>
                    $
                    _y(0)
                    $
                  </Math>
                </NoBreak>
                {" "}{" "}
              </VerticalChunk>
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              ...cutting out the middle computation, which is to
              say that the positions at time{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              {" "}of our 
              newly-defined particles{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;and
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;are the translate of the white particle
              positions at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              {" "}back up and to the right
              by the vector{" "}
              <NoBreak>
                <Math>
                  $
                  (2, 4)
                  $
                </Math>
                ,
              </NoBreak>
              {" "}which brings those
              positions back to the original positions of{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;and{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;as they appear in the problem statement! I.e.,
              our newly-defined
              particles{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;and{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;are in the desired place at{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              !
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              In other words, the proposed definitions of{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p1_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p2_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              ,{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p3_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;and{" "}
              <InlineImage
                   src="/images/svg_ch4_circle_at_2_4_p4_inline.svg"
                   class="ch4_inline_blackwhite_particles" />
              &ensp;“work” in the sense of satisfying all the conditions
              of the problem statement, and are, indeed, the
              solution we seek.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Qualitatively, this implies that the particles
              can be understood as four particles rotating at 
              unit speed around a circle of radius{" "}
              <NoBreak>
                <Math>
                  $
                  1
                  $
                </Math>
              </NoBreak>
              {" "}(the 
              white particles) where the center of circle (the 
              UNO particle) is moving at exponential rate along
              a half-line. In particular, the particles remain
              at constant distance from one another for all{" "}
              <NoBreak>
                <Math>
                  $
                  t
                  $
                </Math>
              </NoBreak>
              ,
              whether that seems intuitive or not.
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              Concretely, 
              the particle trajectories
              end up like so, locally around{" "}
              <NoBreak>
                <Math>
                  $
                  t = 0
                  $
                </Math>
              </NoBreak>
              :
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_circle_at_2_4_solution_curves.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The above plot goes from{" "}
              <NoBreak>
                <Math>
                  $
                  t = -5
                  $
                </Math>
              </NoBreak>
              {" "}to 
              {" "}
              <NoBreak>
                <Math>
                  $
                  t \approx 1
                  $
                </Math>
                —winding
              </NoBreak>
              {" "}further back in time would produce
              near-perfect counterclockwise circular motion,
              as the black particles rush up to{" "}
              <NoBreak>
                <Math>
                  $
                  (0, 0)
                  $
                </Math>
              </NoBreak>
              {" "}
              and come to a near-halt rather fast,
              leaving only the residual motion of the white
              particles!
            </VerticalChunk>
            <VerticalChunk
                 indent={true}>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              When we said that, for{" "}
              <NoBreak>
                <Math>
                  $
                  t &gt; 0
                  $
                </Math>
                ,
              </NoBreak>
              {" "}there ensues
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplay>
              “a [kind of] four-particle explosion”
            </CentralDisplay>
            <div
                 class="spacer" />
            <VerticalChunk>
              in the first paragraph of the solution, the word 
              “explosion” might be misleading, implying increased
              distances between the particles over time. This is
              not the case! (But we didn't know any better, back
              then.)
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
              As you might already have caught on, but is
              maybe worth emphasizing,
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              is not the same thing as
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              because, specifically, speed is
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              distance per unit time
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              —a nonnegative number—whereas velocity is
            </VerticalChunk>
            <div
                 class="spacer" />
            <CentralDisplayItalic>
              displacement per unit time
            </CentralDisplayItalic>
            <div
                 class="spacer" />
            <VerticalChunk>
              —a vector-valued quantity, or{" "}
              <NoBreak>
                <Math>
                  $
                  \pm
                  $
                </Math>
                -valued
              </NoBreak>
              {" "}quantity,
              in 1 dimension!
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={39}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 40.
            </b>
            {" "}
            Find a nonzero function{" "}
            <NoBreak>
              <Math>
                $
                f
                $
              </Math>
            </NoBreak>
            {" "}and a nonzero
            constant{" "}
            <NoBreak>
              <Math>
                $
                a \in \rr
                $
              </Math>
            </NoBreak>
            {" "}such that
          </VerticalChunk>
          <div
               class="spacer" />
          <MathBlock>
            $$
            f'(x) = f(x + a)
            $$
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
              .
            </NoBreak>
            {" "}{" "}
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={39}>
            <VerticalChunk>
              Recall the curves from Exercise 12:
            </VerticalChunk>
            <div
                 class="spacer" />
            <Image
                 src="/images/svg_ch4_cosine_recall.svg" />
            <div
                 class="spacer" />
            <VerticalChunk>
              The blue curve is the derivative of the red curve
              but is also the horizontal translate of the red curve by
              {" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
              </NoBreak>
              {" "}units to the left, where
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              a
              $$
              <ImageLeft
                   src="/images/svg_ch4_cosine_recall_cloud.svg" />
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the distance between adjacent bumps. Thus if
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
              is the function that generates the red curve, then
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              f'(x) = f(x + a)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              using the fact that
            </VerticalChunk>
            <div
                 class="spacer" />
            <MathBlock>
              $$
              y = f(x + a)
              $$
            </MathBlock>
            <div
                 class="spacer" />
            <VerticalChunk>
              is the horizontal translate of{" "}
              <NoBreak>
                <Math>
                  $
                  y = f(x)
                  $
                </Math>
              </NoBreak>
              {" "}by{" "}
              <NoBreak>
                <Math>
                  $
                  a
                  $
                </Math>
              </NoBreak>
              {" "}
              units to the left, in general for any function
              {" "}
              <NoBreak>
                <Math>
                  $
                  f
                  $
                </Math>
              </NoBreak>
              {" "}and constant{" "}
              <NoBreak>
                <Math>
                  $
                  a \in \rr
                  $
                </Math>
                ,
              </NoBreak>
              {" "}as discussed 
              in Exercise 14 of Chapter 3. (Well, this shows
              one solution, at least.)
            </VerticalChunk>
          </Solution>
        </Exercise>
        <Exercise
             exercise_number={40}>
          <VerticalChunk>
            {" "}{" "}
            <b>
              Exercise 41.
            </b>
            {" "}
            Express the...
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            <ul
                 style="margin:1em 0 0 2.5em">
              <li>
                <VerticalChunk>
                  associativity of function composition
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  associativity of function kmultiplication
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  associativity of function addition&lt;/li&gt;
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  commutativity of function multiplication&lt;/li&gt;
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  commutativity of function addition&lt;/li&gt;
                </VerticalChunk>
              </li>
            </ul>
            ...as well as the..
          </VerticalChunk>
          <VerticalChunk
               indent={true}>
            <ul
                 style="margin:1em 0 0 2.5em">
              <li>
                <VerticalChunk>
                  associativity of real number multiplication
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  associativity of real number addition
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  commutativity of real number multiplication
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  commutativity of real number addition
                </VerticalChunk>
              </li>
            </ul>
            ...in the form of self-contained, formal statements.
          </VerticalChunk>
          <div
               class="spacer" />
          <Solution
               solution_number={40}>
            <VerticalChunk>
              For the functions:
            </VerticalChunk>
            <ul
                 style="margin:1em 0 0 2.5em">
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the associativity of function multiplication is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        (f \circ g) \circ h = f \circ (g \circ h)
                        $
                      </Math>
                    </NoBreak>
                    {" "}
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
                    {" "}such that 
                    {" "}
                    <NoBreak>
                      <Math>
                        $
                        h : D \ra C
                        $
                      </Math>
                      ,
                    </NoBreak>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        g : C \ra B
                        $
                      </Math>
                      ,
                    </NoBreak>
                    {" "}{" "}
                    <NoBreak>
                      <Math>
                        $
                        f : B \ra A
                        $
                      </Math>
                    </NoBreak>
                    {" "}
                    [for arbitrary sets{" "}
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
                    ]
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the associativity of function multiplication is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        f(gh) = (fg)h
                        $
                      </Math>
                    </NoBreak>
                    {" "}for all{" "}
                    <NoBreak>
                      <Math>
                        $
                        f, g, h : \rr \ra \rr
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the associativity of function addition is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        f + (g + h) = (f + g) + h
                        $
                      </Math>
                    </NoBreak>
                    {" "}for all{" "}
                    <NoBreak>
                      <Math>
                        $
                        f, g, h : \rr \ra \rr
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the commutativity of function multiplication is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        fg = gf
                        $
                      </Math>
                    </NoBreak>
                    {" "}for all{" "}
                    <NoBreak>
                      <Math>
                        $
                        f, g : \rr \ra \rr
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the commutativity of function addition is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        f + g = g + f
                        $
                      </Math>
                    </NoBreak>
                    {" "}for all{" "}
                    <NoBreak>
                      <Math>
                        $
                        f, g : \rr \ra \rr
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
            </ul>
            <ImageLeft
                 src="/images/svg_ch4_express_the_f_g_h_A_B_C_D_cloud.svg" />
            <VerticalChunk>
              For the real numbers:
            </VerticalChunk>
            <ul
                 style="margin:1em 0 0 2.5em">
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the associativity of [real number] multiplication is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        a(bc) = (ab)c
                        $
                      </Math>
                    </NoBreak>
                    {" "}for all{" "}
                    <NoBreak>
                      <Math>
                        $
                        a, b, c \in \rr
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the associativity of [real number] addition is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        a + (b + c) = (a + b) + c
                        $
                      </Math>
                    </NoBreak>
                    {" "}for all{" "}
                    <NoBreak>
                      <Math>
                        $
                        a, b, c \in \rr
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the commutativity of [real number] multiplication is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        ab = ba
                        $
                      </Math>
                    </NoBreak>
                    {" "}for all{" "}
                    <NoBreak>
                      <Math>
                        $
                        a, b \in \rr
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
              <li>
                <VerticalChunk>
                  {" "}{" "}
                  <i>
                    the commutativity of [real number] addition is
                    the fact that{" "}
                    <NoBreak>
                      <Math>
                        $
                        a + b = b + a
                        $
                      </Math>
                    </NoBreak>
                    {" "}for all{" "}
                    <NoBreak>
                      <Math>
                        $
                        a, b \in \rr
                        $
                      </Math>
                    </NoBreak>
                    {" "}{" "}
                  </i>
                  {" "}{" "}
                </VerticalChunk>
              </li>
            </ul>
            <div
                 class="spacer" />
            <Pause />
            <VerticalChunk>
              {" "}{" "}
              <i>
                Note 1.
              </i>
              {" "}
              We never took the time to prove the associativity
              of function addition, but it is easy to prove! 
              (For other proofs see Exercise 32, Exercise 33, as
              well as Exercise 9, Chapter 3.)
            </VerticalChunk>
          </Solution>
        </Exercise>
      </Exercises>
    </Chapter>
  );
};

export default Article;