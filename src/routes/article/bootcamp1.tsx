import ArticleTitle from "~/components/ArticleTitle";
import { Section, Example } from "~/components/Wrappers";
import {
  NoBreak,
  CentralDisplay,
  CentralItalicDisplay,
} from "~/components/Delimiters";
import VerticalChunk from "~/components/VerticalChunk";

const Bootcamp1 = (props: any) => {
  return <>{props.children}</>;
};

export const Article = () => {
  return (
    <>
      {" "}
      <Bootcamp1 title="Sets">
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Notation.`}</b>
            {`
Curly braces typically denote the beginning
“`}
            <NoBreak>
              <Math>{`$
\{
$`}</Math>
              {`”`}
            </NoBreak>
            {` and ending “`}
            <NoBreak>
              <Math>{`$
\}
$`}</Math>
              {`”`}
            </NoBreak>
            {` of a collection of 
elements, otherwise known as a `}
            <i>{`set`}</i>
            {`.
For example, this is a set containing the 
numbers `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
              {`,`}
            </NoBreak>
            {` `}
            <NoBreak>
              <Math>{`$
2
$`}</Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>{`$
3
$`}</Math>
            </NoBreak>
            {` (and nothing else):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\{1, 2, 3\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`Also,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\{1\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is a set containing just the number `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
              {`,`}
            </NoBreak>
            {` while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\{1, 3\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is a set containing just the numbers `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {` 
and `}
            <NoBreak>
              <Math>{`$
3
$`}</Math>
              {`,`}
            </NoBreak>
            {` etc. Even,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\{\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is an `}
            <i>{`empty`}</i>
            {` set, a set with no elements! `}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`What it does.`}</b>
            {`
The “API” (a computer science notion,
roughly meaning`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the interface offered to the outside world`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`as in, for example, the buttons and clock 
display and door handle of a microwave oven) 
of a set consists of just one functionality: 
a set can answer questions of the form`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain ... ?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`and nothing else.
For example, you could ask a set`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 3?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`to which `}
            <NoBreak>
              <Math>{`$
\{1, 3\}
$`}</Math>
            </NoBreak>
            {` would answer “yes”, but
`}
            <NoBreak>
              <Math>{`$
\{ 1\}
$`}</Math>
            </NoBreak>
            {` would answer “no”, or`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 2?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`to which `}
            <NoBreak>
              <Math>{`$
\{1\}
$`}</Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>{`$
\{1, 3\}
$`}</Math>
            </NoBreak>
            {` would
both answer “no”, but `}
            <NoBreak>
              <Math>{`$
\{1, 2, 3\}
$`}</Math>
            </NoBreak>
            {` would
answer “yes”.`}
          </VerticalChunk>
          <VerticalChunk
            indent={true}>{`Notation-wise, the expression`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large x \in A
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`means`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {` contains `}
            <NoBreak>
              <Math>{`$
x
$`}</Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`or `}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {` answers “yes” to the
question “do you contain `}
            <NoBreak>
              <Math>{`$
x
$`}</Math>
            </NoBreak>
            {`?”`}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`equivalently. [One can also say`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>{`$
x
$`}</Math>
            </NoBreak>
            {` in `}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`or `}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>{`$
x
$`}</Math>
            </NoBreak>
            {` is in `}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`or `}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {``}
            <NoBreak>
              <Math>{`$
x
$`}</Math>
            </NoBreak>
            {` is an element of `}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`depending on one's mood and/or tastes.]
As in all of mathematics, any such statement 
evaluates to either “true” or “false”.
For example,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 1 \in \{1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is true, because `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
            </NoBreak>
            {` `}
            <i>{`is`}</i>
            {` an element of the set 
`}
            <NoBreak>
              <Math>{`$
\{1, 2\}
$`}</Math>
              {`,`}
            </NoBreak>
            {` whereas`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 3 \in \{1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is false, because `}
            <NoBreak>
              <Math>{`$
3
$`}</Math>
            </NoBreak>
            {` `}
            <i>{`is not`}</i>
            {` 
an element of the set `}
            <NoBreak>
              <Math>{`$
\{1, 2\}
$`}</Math>
              {`.`}
            </NoBreak>
            {` `}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Set Equality.`}</b>
            {`
Two sets are deemed to be 
equal if and only if they
answer the same to
all “do you contain ...?” questions.
For example, while`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\{2, 1\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`might look superficially different from`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\{1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`these sets are actually one and the same, because they both
answer “yes” to`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 1?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{`
`}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 2?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`and answer “no” to all else. For that matter,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\{1, 1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`might also look superficially different from`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\{1, 2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`but since both sets answer “yes” to`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 1?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{`
`}</VerticalChunk>
          <CentralItalicDisplay>{`do you contain 2?`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`and answer “no” to all else,
they are by definition the same.`}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`(These examples demonstrate that human notation 
is redundant: there are several different ways of 
writing down the same set. They also demonstrate
that sets do not keep track of the`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`order`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>{`nor of the`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`multiplicity`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`of their elements. Such notions are simply not part
of the “API” of a set.)`}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`Moreover, any empty set is equal to any other 
empty set. Equality follows because both sets 
answer all questions the same way: they both 
answer “no” to everything. So there is`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`one`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`and only one empty set. Therefore, mathematicians speak of`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk
            indent={true}>{`empty set—the one and only!`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Second notation for the empty set.`}</b>
            {` 
While the empty set can be written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \{\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`another available notation is`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \phi
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`which is the Greek letter phi, read “fee”. (Or “fie”?
Hum.) (Or you can just say “the empty set”, and
keep it safe.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Sets within sets.`}</b>
            {`
Sets can be nested much like Russian dolls.
In fact, the result of doing this might even look like a little bit
like a Russian doll (no?):`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \{\{\{\{\}\}\}\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`The above is “a set containing a set containing a set
containing a set containing the empty set”. Eschewing complete
adherence to the Russian doll aesthetic, we could also write`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \{\{\{\phi\}\}\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`for the same thing, given that `}
            <NoBreak>
              <Math>{`$
\phi = \{\}
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`Mind you, concerning this example, that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>
            {`$$
\Large \{\{\} \} \ne \{\}
$$`}
            <ImageRight
              offset_x="1em"
              src="/images/svg_empty_set_cloud.svg"></ImageRight>
          </MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`because a box containing an empty box is not the same
thing as an empty box! Specifically,`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \{ \{\} \}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`answers “yes” to the question “do you contain 
`}
            <NoBreak>
              <Math>{`$
\{\}
$`}</Math>
            </NoBreak>
            {`?”
(a.k.a., “do you contain `}
            <NoBreak>
              <Math>{`$
\phi
$`}</Math>
              {`?”)`}
            </NoBreak>
            {` 
whereas`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \{\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`answers “no” to the same question. (Indeed, while the empty set
`}
            <i>{`contains`}</i>
            {` nothing, it `}
            <i>{`is`}</i>
            {` something.) Similarly,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \{\{\{\}\} \} \ne \{\{\}\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`etc, etc: adding a new outer layer changes the whole set each time.`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Set union and set intersection.`}</b>
            {`
The so-called `}
            <i>{`union`}</i>
            {`
of two sets `}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {` and
`}
            <NoBreak>
              <Math>{`$
B
$`}</Math>
            </NoBreak>
            {` is written `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large A \cup B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`and consists of the set of all things that are either in `}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {` or in 
`}
            <NoBreak>
              <Math>{`$
B.
$`}</Math>
            </NoBreak>
            {`
For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \{1, 2\} \cup \{2, 5\} = \{1, 2, 5\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`as `}
            <NoBreak>
              <Math>{`$
1
$`}</Math>
              {`,`}
            </NoBreak>
            {` `}
            <NoBreak>
              <Math>{`$
2
$`}</Math>
            </NoBreak>
            {` and `}
            <NoBreak>
              <Math>{`$
5
$`}</Math>
            </NoBreak>
            {` are the only elements to find
themselves either in
`}
            <NoBreak>
              <Math>{`$
\{1, 2\}
$`}</Math>
            </NoBreak>
            {` or in `}
            <NoBreak>
              <Math>{`$
\{2, 5\}
$`}</Math>
            </NoBreak>
            {`.
The so-called `}
            <i>{`intersection`}</i>
            {` of two sets `}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {` and
`}
            <NoBreak>
              <Math>{`$
B
$`}</Math>
            </NoBreak>
            {` is written `}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large A \cap B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`and consists of the set of all things that are both in `}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {` and in 
`}
            <NoBreak>
              <Math>{`$
B
$`}</Math>
            </NoBreak>
            {`.
For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \{1, 2\} \cap \{2, 5\} = \{2\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`as `}
            <NoBreak>
              <Math>{`$
2
$`}</Math>
            </NoBreak>
            {` is the only element that is both in
`}
            <NoBreak>
              <Math>{`$
\{1, 2\}
$`}</Math>
            </NoBreak>
            {` and in `}
            <NoBreak>
              <Math>{`$
\{2, 5\}
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{`Note that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large x \in (A \cup B)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`if and only if`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large x \in A
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {``}
            <i>{`or`}</i>
            {``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large x \in B
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`because that's how we defined “union”. (Replace “or”
by “and” to get a definition of intersection.)
In fact, a logician would define the union of two sets by an
abstruse expression of the type`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large x \in (A \cup B) \iff (x \in A) \vee (x \in B)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`read`}</VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>
            {`an element `}
            <NoBreak>
              <Math>{`$
x
$`}</Math>
            </NoBreak>
            {` is in the thing I call “`}
            <NoBreak>
              <Math>{`$
A \cup B
$`}</Math>
            </NoBreak>
            {`”
if and only if `}
            <NoBreak>
              <Math>{`$
x
$`}</Math>
            </NoBreak>
            {` is in `}
            <NoBreak>
              <Math>{`$
A
$`}</Math>
            </NoBreak>
            {` or `}
            <NoBreak>
              <Math>{`$
x
$`}</Math>
            </NoBreak>
            {` is in `}
            <NoBreak>
              <Math>{`$
B
$`}</Math>
            </NoBreak>
            {``}
          </CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`as “`}
            <NoBreak>
              <Math>{`$
\!\!\iff\!\!
$`}</Math>
              {`”`}
            </NoBreak>
            {` means “if and only if” and
“`}
            <NoBreak>
              <Math>{`$
\vee
$`}</Math>
              {`”`}
            </NoBreak>
            {` means “or”. (You can figure out the 
similar definition for the intersection of two sets
if we tell you that`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large \wedge
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`means “and”.)`}</VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Sets encountered in calculus.`}</b>
            {`
In calculus, you will see sets such as `}
            <i>{`the real numbers`}</i>
            {``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`which is an infinite set containing all “ordinary”
decimal numbers, or such as `}
            <i>{`the integers`}</i>
            {``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\zz
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`which contains all “whole” numbers, including the
negative ones. You might also encounter
`}
            <i>{`the natural numbers`}</i>
            {``}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\nn
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`which contains only those integers that are greater than `}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
            </NoBreak>
            {` (i.e.,
`}
            <NoBreak>
              <Math>{`$
\nn = \{1, 2, 3, \ldots \}
$`}</Math>
            </NoBreak>
            {`).`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`Secondly—and this pretty much wraps it up for those sets 
that are commonly seen in calculus—you will
encounter `}
            <i>{`intervals`}</i>
            {`. For example,`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large [a, b]
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is a _closed interval_, consisting of all (real) numbers 
greater than or equal to `}
            <NoBreak>
              <Math>{`$
a
$`}</Math>
              {`,`}
            </NoBreak>
            {` and less than or equal to `}
            <NoBreak>
              <Math>{`$
b
$`}</Math>
              {`.`}
            </NoBreak>
            {` Or`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large [a, b)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`is a `}
            <i>{`half-open`}</i>
            {` interval, consisting of all real numbers
greater than or equal to `}
            <NoBreak>
              <Math>{`$
a
$`}</Math>
              {`,`}
            </NoBreak>
            {` and less than `}
            <NoBreak>
              <Math>{`$
b
$`}</Math>
              {`.`}
            </NoBreak>
            {` Etc.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{`Note that`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large (-\infty, \infty) = \rr
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`since`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large (-\infty, \infty)
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`(which is an `}
            <i>{`open`}</i>
            {` interval, by the way) means`}
          </VerticalChunk>
          <VerticalChunk indent={true}>{``}</VerticalChunk>
          <CentralItalicDisplay>{`the set of real numbers with no bound below,
and no bound above`}</CentralItalicDisplay>
          <div class="spacer"></div>
          <VerticalChunk>{``}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`which is all of `}
            <NoBreak>
              <Math>{`$
\rr
$`}</Math>
            </NoBreak>
            {`.`}
          </VerticalChunk>
        </Section>
        <div class="spacer"></div>
        <Section>
          <VerticalChunk>
            {``}
            <b>{`Sets not encountered in calculus.`}</b>
            {`
If you take a more advanced course, you might encounter 
the so-called _set of extended real numbers_,
written`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\overline{\rr}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`and which consists of all the numbers in `}
            <NoBreak>
              <Math>{`$
\rr
$`}</Math>
              {`,`}
            </NoBreak>
            {` plus the formal 
symbols “`}
            <NoBreak>
              <Math>{`$
-\infty
$`}</Math>
              {`”,`}
            </NoBreak>
            {` “`}
            <NoBreak>
              <Math>{`$
\infty
$`}</Math>
              {`”`}
            </NoBreak>
            {` as well:`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large\overline{\rr} = \rr \cup \{-\infty, \infty\}
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>{`(I.e., ...well, you get it!)`}</VerticalChunk>
          <VerticalChunk indent={true}>
            {`You can view `}
            <NoBreak>
              <Math>{`$
\overline{\rr}
$`}</Math>
            </NoBreak>
            {` as a kind “closed interval”
version of `}
            <NoBreak>
              <Math>{`$
\rr
$`}</Math>
              {`,`}
            </NoBreak>
            {` that is, think of `}
            <NoBreak>
              <Math>{`$
\overline{\rr}
$`}</Math>
            </NoBreak>
            {` as being
the closed interval`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large [-\infty, \infty]
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`with the two infinite endpoints `}
            <i>{`included`}</i>
            {`.`}
          </VerticalChunk>
          <VerticalChunk indent={true}>
            {`Does all this have any “real meaning”? Good question! The answer
is: `}
            <i>{`not until you give it one`}</i>
            {`.`}
          </VerticalChunk>
          <VerticalChunk
            indent={
              true
            }>{`E.g. (to give you a brief flavor, before we move on forever from the topic),
the value of something like`}</VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large 0.5+ \infty
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`must be `}
            <i>{`defined`}</i>
            {`. (It is defined to be `}
            <NoBreak>
              <Math>{`$
\infty
$`}</Math>
              {`,`}
            </NoBreak>
            {` in case you're curious.
In fact, one has `}
            <NoBreak>
              <Math>{`$
a + \infty = \infty
$`}</Math>
            </NoBreak>
            {` for any `}
            <NoBreak>
              <Math>{`$
a \ne -\infty
$`}</Math>
              {`.)`}
            </NoBreak>
            {` And some things
remain explicitly `}
            <i>{`undefined`}</i>
            {`. For example, the expression`}
          </VerticalChunk>
          <div class="spacer"></div>
          <MathBlock>{`$$
\Large (-\infty) + \infty
$$`}</MathBlock>
          <div class="spacer"></div>
          <VerticalChunk>
            {`has an `}
            <i>{`undefined`}</i>
            {` value—the same way, say, that division by
`}
            <NoBreak>
              <Math>{`$
0
$`}</Math>
            </NoBreak>
            {` is undefined in `}
            <NoBreak>
              <Math>{`$
\rr
$`}</Math>
              {`.`}
            </NoBreak>
            {` 
(Well, anyway, end of lesson.)`}
          </VerticalChunk>
        </Section>
      </Bootcamp1>{" "}
    </>
  );
};
