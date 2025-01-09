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
const Bootcamp1 = (props: any) => {
  useScrollX();
  useSaveScroll();
  return (
    <>
      <ArticleTitle
        label={`Bootcamp 1: ` + props.title}
        on_mobile_label={`Bootcamp 1: ` + props.mobile_title}
      />
      {props.children}
    </>
  );
};

const Article = () => {
  return (
    <>
      <Bootcamp1 title="Sets">
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Notation.`}</b>
            {String.raw`
Curly braces typically denote the beginning
“`}
            <NoBreak>
              <Math>{String.raw`$
\{
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` and ending “`}
            <NoBreak>
              <Math>{String.raw`$
\}
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` of a collection of 
elements, otherwise known as a `}
            <i>{String.raw`set`}</i>
            {String.raw`.
For example, this is a set containing the 
numbers `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
2
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
3
$`}</Math>
            </NoBreak>
            {String.raw` (and nothing else):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\{1, 2, 3\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`Also,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\{1\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is a set containing just the number `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\{1, 3\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is a set containing just the numbers `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` 
and `}
            <NoBreak>
              <Math>{String.raw`$
3
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` etc. Even,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\{\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is an `}
            <i>{String.raw`empty`}</i>
            {String.raw` set, a set with no elements! `}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`What it does.`}</b>
            {String.raw`
The “API” (a computer science notion,
roughly meaning`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`the interface offered to the outside world`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`as in, for example, the buttons and clock 
display and door handle of a microwave oven) 
of a set consists of just one functionality: 
a set can answer questions of the form`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`do you contain ... ?`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and nothing else.
For example, you could ask a set`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`do you contain 3?`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`to which `}
            <NoBreak>
              <Math>{String.raw`$
\{1, 3\}
$`}</Math>
            </NoBreak>
            {String.raw` would answer “yes”, but
`}
            <NoBreak>
              <Math>{String.raw`$
\{ 1\}
$`}</Math>
            </NoBreak>
            {String.raw` would answer “no”, or`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`do you contain 2?`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`to which `}
            <NoBreak>
              <Math>{String.raw`$
\{1\}
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
\{1, 3\}
$`}</Math>
            </NoBreak>
            {String.raw` would
both answer “no”, but `}
            <NoBreak>
              <Math>{String.raw`$
\{1, 2, 3\}
$`}</Math>
            </NoBreak>
            {String.raw` would
answer “yes”.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`Notation-wise, the expression`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large x \in A
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`means`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw``}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` contains `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or `}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw``}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` answers “yes” to the
question “do you contain `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw`?”`}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`equivalently. [One can also say`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw``}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` in `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or `}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw``}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` is in `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`or `}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw``}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` is an element of `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`depending on one's mood and/or tastes.]
As in all of mathematics, any such statement 
evaluates to either “true” or “false”.
For example,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 1 \in \{1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is true, because `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <i>{String.raw`is`}</i>
            {String.raw` an element of the set 
`}
            <NoBreak>
              <Math>{String.raw`$
\{1, 2\}
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` whereas`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 3 \in \{1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is false, because `}
            <NoBreak>
              <Math>{String.raw`$
3
$`}</Math>
            </NoBreak>
            {String.raw` `}
            <i>{String.raw`is not`}</i>
            {String.raw` 
an element of the set `}
            <NoBreak>
              <Math>{String.raw`$
\{1, 2\}
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` `}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Set Equality.`}</b>
            {String.raw`
Two sets are deemed to be 
equal if and only if they
answer the same to
all “do you contain ...?” questions.
For example, while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\{2, 1\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`might look superficially different from`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\{1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`these sets are actually one and the same, because they both
answer “yes” to`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`do you contain 1?`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`do you contain 2?`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and answer “no” to all else. For that matter,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\{1, 1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`might also look superficially different from`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\{1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`but since both sets answer “yes” to`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`do you contain 1?`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`do you contain 2?`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and answer “no” to all else,
they are by definition the same.`}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`(These examples demonstrate that human notation 
is redundant: there are several different ways of 
writing down the same set. They also demonstrate
that sets do not keep track of the`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`order`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`nor of the`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`multiplicity`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`of their elements. Such notions are simply not part
of the “API” of a set.)`}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`Moreover, any empty set is equal to any other 
empty set. Equality follows because both sets 
answer all questions the same way: they both 
answer “no” to everything. So there is`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`one`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`and only one empty set. Therefore, mathematicians speak of`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`the`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`empty set—the one and only!`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Second notation for the empty set.`}</b>
            {String.raw` 
While the empty set can be written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \{\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`another available notation is`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \phi
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`which is the Greek letter phi, read “fee”. (Or “fie”?
Hum.) (Or you can just say “the empty set”, and
keep it safe.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Sets within sets.`}</b>
            {String.raw`
Sets can be nested much like Russian dolls.
In fact, the result of doing this might even look like a little bit
like a Russian doll (no?):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \{\{\{\{\}\}\}\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`The above is “a set containing a set containing a set
containing a set containing the empty set”. Eschewing complete
adherence to the Russian doll aesthetic, we could also write`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \{\{\{\phi\}\}\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`for the same thing, given that `}
            <NoBreak>
              <Math>{String.raw`$
\phi = \{\}
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`Mind you, concerning this example, that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {String.raw`$$
\Large \{\{\} \} \ne \{\}
$$`}
            <ImageRight
              offset_x="1em"
              src="/images/svg_empty_set_cloud.svg"></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`because a box containing an empty box is not the same
thing as an empty box! Specifically,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \{ \{\} \}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`answers “yes” to the question “do you contain 
`}
            <NoBreak>
              <Math>{String.raw`$
\{\}
$`}</Math>
            </NoBreak>
            {String.raw`?”
(a.k.a., “do you contain `}
            <NoBreak>
              <Math>{String.raw`$
\phi
$`}</Math>
              {String.raw`?”)`}
            </NoBreak>
            {String.raw` 
whereas`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \{\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`answers “no” to the same question. (Indeed, while the empty set
`}
            <i>{String.raw`contains`}</i>
            {String.raw` nothing, it `}
            <i>{String.raw`is`}</i>
            {String.raw` something.) Similarly,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \{\{\{\}\} \} \ne \{\{\}\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`etc, etc: adding a new outer layer changes the whole set each time.`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Set union and set intersection.`}</b>
            {String.raw`
The so-called `}
            <i>{String.raw`union`}</i>
            {String.raw`
of two sets `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` and
`}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
            </NoBreak>
            {String.raw` is written `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large A \cup B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`and consists of the set of all things that are either in `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` or in 
`}
            <NoBreak>
              <Math>{String.raw`$
B.
$`}</Math>
            </NoBreak>
            {String.raw`
For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \{1, 2\} \cup \{2, 5\} = \{1, 2, 5\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`as `}
            <NoBreak>
              <Math>{String.raw`$
1
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` `}
            <NoBreak>
              <Math>{String.raw`$
2
$`}</Math>
            </NoBreak>
            {String.raw` and `}
            <NoBreak>
              <Math>{String.raw`$
5
$`}</Math>
            </NoBreak>
            {String.raw` are the only elements to find
themselves either in
`}
            <NoBreak>
              <Math>{String.raw`$
\{1, 2\}
$`}</Math>
            </NoBreak>
            {String.raw` or in `}
            <NoBreak>
              <Math>{String.raw`$
\{2, 5\}
$`}</Math>
            </NoBreak>
            {String.raw`.
The so-called `}
            <i>{String.raw`intersection`}</i>
            {String.raw` of two sets `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` and
`}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
            </NoBreak>
            {String.raw` is written `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large A \cap B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`and consists of the set of all things that are both in `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` and in 
`}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
            </NoBreak>
            {String.raw`.
For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \{1, 2\} \cap \{2, 5\} = \{2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`as `}
            <NoBreak>
              <Math>{String.raw`$
2
$`}</Math>
            </NoBreak>
            {String.raw` is the only element that is both in
`}
            <NoBreak>
              <Math>{String.raw`$
\{1, 2\}
$`}</Math>
            </NoBreak>
            {String.raw` and in `}
            <NoBreak>
              <Math>{String.raw`$
\{2, 5\}
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw`Note that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large x \in (A \cup B)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`if and only if`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large x \in A
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw``}
            <i>{String.raw`or`}</i>
            {String.raw``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large x \in B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`because that's how we defined “union”. (Replace “or”
by “and” to get a definition of intersection.)
In fact, a logician would define the union of two sets by an
abstruse expression of the type`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large x \in (A \cup B) \iff (x \in A) \vee (x \in B)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`read`}</VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>
            {String.raw`an element `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` is in the thing I call “`}
            <NoBreak>
              <Math>{String.raw`$
A \cup B
$`}</Math>
            </NoBreak>
            {String.raw`”
if and only if `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` is in `}
            <NoBreak>
              <Math>{String.raw`$
A
$`}</Math>
            </NoBreak>
            {String.raw` or `}
            <NoBreak>
              <Math>{String.raw`$
x
$`}</Math>
            </NoBreak>
            {String.raw` is in `}
            <NoBreak>
              <Math>{String.raw`$
B
$`}</Math>
            </NoBreak>
            {String.raw``}
          </CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`as “`}
            <NoBreak>
              <Math>{String.raw`$
\!\!\iff\!\!
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` means “if and only if” and
“`}
            <NoBreak>
              <Math>{String.raw`$
\vee
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` means “or”. (You can figure out the 
similar definition for the intersection of two sets
if we tell you that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large \wedge
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`means “and”.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Sets encountered in calculus.`}</b>
            {String.raw`
In calculus, you will see sets such as `}
            <i>{String.raw`the real numbers`}</i>
            {String.raw``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which is an infinite set containing all “ordinary”
decimal numbers, or such as `}
            <i>{String.raw`the integers`}</i>
            {String.raw``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\zz
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which contains all “whole” numbers, including the
negative ones. You might also encounter
`}
            <i>{String.raw`the natural numbers`}</i>
            {String.raw``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\nn
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which contains only those integers that are greater than `}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` (i.e.,
`}
            <NoBreak>
              <Math>{String.raw`$
\nn = \{1, 2, 3, \ldots \}
$`}</Math>
            </NoBreak>
            {String.raw`).`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`Secondly—and this pretty much wraps it up for those sets 
that are commonly seen in calculus—you will
encounter `}
            <i>{String.raw`intervals`}</i>
            {String.raw`. For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large [a, b]
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is a `}
            <i>{String.raw`closed interval`}</i>
            {String.raw`, consisting of all (real) numbers 
greater than or equal to `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and less than or equal to `}
            <NoBreak>
              <Math>{String.raw`$
b
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Or`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large [a, b)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`is a `}
            <i>{String.raw`half-open`}</i>
            {String.raw` interval, consisting of all real numbers
greater than or equal to `}
            <NoBreak>
              <Math>{String.raw`$
a
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` and less than `}
            <NoBreak>
              <Math>{String.raw`$
b
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` Etc.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{String.raw`Note that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large (-\infty, \infty) = \rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`since`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large (-\infty, \infty)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`(which is an `}
            <i>{String.raw`open`}</i>
            {String.raw` interval, by the way) means`}
          </VerticalChunk>
          <div class="spacer"></div>
          <CentralDisplayItalic>{String.raw`the set of real numbers with no bound below,
and no bound above`}</CentralDisplayItalic>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`which is all of `}
            <NoBreak>
              <Math>{String.raw`$
\rr
$`}</Math>
            </NoBreak>
            {String.raw`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {String.raw``}
            <b>{String.raw`Sets not encountered in calculus.`}</b>
            {String.raw`
If you take a more advanced course, you might encounter 
the so-called `}
            <i>{String.raw`set of extended real numbers`}</i>
            {String.raw`,
written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\overline{\rr}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`and which consists of all the numbers in `}
            <NoBreak>
              <Math>{String.raw`$
\rr
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` plus the formal 
symbols “`}
            <NoBreak>
              <Math>{String.raw`$
-\infty
$`}</Math>
              {String.raw`”,`}
            </NoBreak>
            {String.raw` “`}
            <NoBreak>
              <Math>{String.raw`$
\infty
$`}</Math>
              {String.raw`”`}
            </NoBreak>
            {String.raw` as well:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large\overline{\rr} = \rr \cup \{-\infty, \infty\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{String.raw`(I.e., ...well, you get it!)`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`You can view `}
            <NoBreak>
              <Math>{String.raw`$
\overline{\rr}
$`}</Math>
            </NoBreak>
            {String.raw` as a kind “closed interval”
version of `}
            <NoBreak>
              <Math>{String.raw`$
\rr
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` that is, think of `}
            <NoBreak>
              <Math>{String.raw`$
\overline{\rr}
$`}</Math>
            </NoBreak>
            {String.raw` as being
the closed interval`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large [-\infty, \infty]
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`with the two infinite endpoints `}
            <i>{String.raw`included`}</i>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {String.raw`Does all this have any “real meaning”? Good question! The answer
is: `}
            <i>{String.raw`not until you give it one`}</i>
            {String.raw`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{String.raw`E.g. (to give you a brief flavor, before we move on forever from the topic),
the value of something like`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large 0.5+ \infty
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`must be `}
            <i>{String.raw`defined`}</i>
            {String.raw`. (It is defined to be `}
            <NoBreak>
              <Math>{String.raw`$
\infty
$`}</Math>
              {String.raw`,`}
            </NoBreak>
            {String.raw` in case you're curious.
In fact, one has `}
            <NoBreak>
              <Math>{String.raw`$
a + \infty = \infty
$`}</Math>
            </NoBreak>
            {String.raw` for any `}
            <NoBreak>
              <Math>{String.raw`$
a \ne -\infty
$`}</Math>
              {String.raw`.)`}
            </NoBreak>
            {String.raw` And some things
remain explicitly `}
            <i>{String.raw`undefined`}</i>
            {String.raw`. For example, the expression`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{String.raw`$$
\Large (-\infty) + \infty
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {String.raw`has an `}
            <i>{String.raw`undefined`}</i>
            {String.raw` value—the same way, say, that division by
`}
            <NoBreak>
              <Math>{String.raw`$
0
$`}</Math>
            </NoBreak>
            {String.raw` is undefined in `}
            <NoBreak>
              <Math>{String.raw`$
\rr
$`}</Math>
              {String.raw`.`}
            </NoBreak>
            {String.raw` 
(Well, anyway, end of lesson.)`}
          </VerticalChunk>
        </Section>
      </Bootcamp1>
    </>
  );
};
export default Article;
