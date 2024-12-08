
    import ArticleTitle from "~/components/ArticleTitle"
    import {Section, Example} from "~/components/Wrappers"
    import {NoBreak, CentralDisplay, CentralItalicDisplay} from "~/components/Delimiters"
    import VerticalChunk from "~/components/VerticalChunk"

        const Chapter3 = (props: any) => {
            return <>{props.children}</>
        }

    export const Article = () => {
    return <> <Chapter3 title="Functions"><Section><VerticalChunk>{``}<b>{`Syntax.`}</b>{`
A`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`function`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`is a “rule” for transforming inputs (usually
numbers) into outputs (usually numbers as well).
One can think of a function as a box with an
“input tube” and an “output tube”:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_f_box.svg"></Image><div class="spacer"></div><VerticalChunk>{`An input goes in via the input tube, is
processed according to the function's rule,
and the result comes out the other side.
(Metaphorically speaking.)`}</VerticalChunk><VerticalChunk indent={true}>{`In the above picture, the name of the function
is “`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{`”.`}</VerticalChunk><VerticalChunk indent={true}>{`Notation-wise, one writes`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{f(x)}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(which is read “`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of `}<NoBreak><Math>{`$
x
$`}</Math>{`”,`}</NoBreak>{` and that's 
important) for the result of passing an input
`}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` to a function `}<NoBreak><Math>{`$
f
$`}</Math>{`.`}</NoBreak>{` For example, if the rule
according to which `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` processes inputs is`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`the output is the square of the input`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`then`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{f(2) = 4}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`[“`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of `}<NoBreak><Math>{`$
2
$`}</Math></NoBreak>{` equals `}<NoBreak><Math>{`$
4
$`}</Math>{`”]`}</NoBreak>{` because `}<NoBreak><Math>{`$
2^2 = 4
$`}</Math>{`,`}</NoBreak>{` and`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{f(3) = 9}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`[“`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of `}<NoBreak><Math>{`$
3
$`}</Math></NoBreak>{` equals `}<NoBreak><Math>{`$
9
$`}</Math>{`”]`}</NoBreak>{` because `}<NoBreak><Math>{`$
3^2 = 9
$`}</Math>{`,`}</NoBreak>{` and`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{ f(0.1) = 0.01}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`[...] because `}<NoBreak><Math>{`$
0.1^2 = 0.01
$`}</Math>{`,`}</NoBreak>{` and so on. Also,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{f(x) = x^2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`[“`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` equals `}<NoBreak><Math>{`$
x^2
$`}</Math>{`”]`}</NoBreak>{` more generally, which
is actually the`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`definition`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`of `}<NoBreak><Math>{`$
f
$`}</Math>{`!!`}</NoBreak>{` (Stated algebraically.)`}</VerticalChunk></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`Lambda functions.`}</b>{`
A`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`lambda function`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`is not a type of function, but a type of
notation  that enables one to define a function 
without giving it a name, such as “`}<NoBreak><Math>{`$
f
$`}</Math>{`”.`}</NoBreak>{` In fact 
there are two different mainstream notations, in 
this instance. One notation writes`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\lambda{}x.x^2
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`to mean “the function that maps `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
x^2
$`}</Math>{`”`}</NoBreak>{` 
(and by the way,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\lambda{}z.z^2
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is `}<i>{`the same`}</i>{` function, because 
it specifies the same in-out mapping—a thing 
goes to its square—also by the way, the symbol`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\Huge \lambda
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is the Greek letter “lambda”, giving its name 
to the topic) while the other notation writes `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x \rightarrow x^2
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`to mean the same thing.`}</VerticalChunk><VerticalChunk indent={true}>{`Note that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x \ra x^2)(0.1)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`means “the function that maps each number to its
square, of `}<NoBreak><Math>{`$
0.1
$`}</Math>{`”.`}</NoBreak>{` So...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x \ra x^2)(0.1) = 0.01
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...the same as an equation of the form 
“`}<NoBreak><Math>{`$
f(\dots) = \dots
$`}</Math></NoBreak>{`”.`}</VerticalChunk><VerticalChunk indent={true}>{`For more practice:`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(\lambda x.x^3)(10) = 1000
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
(\lambda u.u^5)(10) = 100000
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
(v \ra v^2)(10) = 100
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
(z \ra z^3)(10) + (t \ra t^2)(5) = 1025.
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(Etc.) (Indeed, to emphasize again, the variable 
denoting the input does not matter: it is just a 
placeholder, and you obtain the same output, and 
the same _function_, no matter what symbol 
you choose.*) (\*As long as you don't collide 
with other existing variable names.)`}</VerticalChunk></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`Definition by cases.`}</b>{`
Sometimes a function is defined by an expression 
of the form`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x \ra \begin{cases}
\ldots & \te{if $\ldots$}\\
\ldots & \te{if $\ldots$}\\
\vdots & \vdots\\
\ldots & \te{$\ldots$}
\end{cases}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`where the right-hand side is a list of mutually 
exclusive cases to consider according to the 
value of `}<NoBreak><Math>{`$
x
$`}</Math>{`.`}</NoBreak>{` Equivalently,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
g(x) = \begin{cases}
\ldots & \te{if $\ldots$}\\
\ldots & \te{if $\ldots$}\\
\vdots & \vdots\\
\ldots & \te{$\ldots$}
\end{cases}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`in the case where the function has a name, such
as “`}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{`”.`}</VerticalChunk><div class="spacer"></div><Example><VerticalChunk>{``}<b>{`Example 1.`}</b>{`
If VX-11/78A (don't mind the weird name, chosen
at random) is the function defined by`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\te{VX-11/78A}(x) = \begin{cases} 
3.5 & \te{if $x = 0$},\\
2.5\up{1.1} & \te{if $x = 1$},\\
\te{undefined}\up{1.1} & \te{if $x \ne 0, 1$}
\end{cases}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`then`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\te{VX-11/78A}(0) = 3.5,
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\te{VX-11/78A}(1) = 2.5,
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`aaand... and these are the only two values of 
`}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` for which VX-11/78A`}<NoBreak><Math>{`$
(x)
$`}</Math></NoBreak>{` is defined, as 
specified.`}</VerticalChunk></Example></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`On arbitrariness.`}</b>{`
While a function such as VX-11/78A might seem 
completely arbitrary, one lesson from the former 
example is that functions `}<i>{`can`}</i>{` be 
completely arbitrary! In fact, there are only 
two “ground rules” to respect in order for 
something to qualify as a function: *(i)* to 
output`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`one`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`output per (accepted) input, and *(ii)* to return 
the`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`same`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`output each time on the same input. (Sometimes,
functions are said to be`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`deterministic`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`because of *(ii)*.)`}</VerticalChunk></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`Graphs.`}</b>{`
The`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`graph`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`of a function is a visualization device. A point
on the graph corresponds to an input for which
the function is defined. The `}<NoBreak><Math>{`$
x
$`}</Math>{`-coordinate`}</NoBreak>{` of 
the point is the value of the input, while the 
`}<NoBreak><Math>{`$
y
$`}</Math>{`-coordinate`}</NoBreak>{` is the value of the corresponding 
output.`}</VerticalChunk><VerticalChunk indent={true}>{`For example, here is a graph of VX-11/78A:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_vx1178A.svg"></Image><div class="spacer"></div><VerticalChunk>{`The graph has only two points, because VX-78/11A 
is defined at only two values. One point is...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_vx1178A_@0_with_cors.svg"></Image><div class="spacer"></div><VerticalChunk>{`...`}<NoBreak><Math>{`$
(0, 3.5)
$`}</Math>{`,`}</NoBreak>{` because VX-78/11A maps `}<NoBreak><Math>{`$
0
$`}</Math></NoBreak>{` to 
`}<NoBreak><Math>{`$
3.5
$`}</Math>{`,`}</NoBreak>{` while the other point is...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_vx1178A_@1_with_cors.svg"></Image><div class="spacer"></div><VerticalChunk>{`...`}<NoBreak><Math>{`$
(1, 2.5)
$`}</Math>{`,`}</NoBreak>{` because VX-78/11A maps `}<NoBreak><Math>{`$
1
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
2.5
$`}</Math></NoBreak>{`.`}</VerticalChunk><div class="spacer"></div><Example><VerticalChunk>{``}<b>{`Example 2.`}</b>{`
Here is a graph of `}<NoBreak><Math>{`$
x \ra x^2
$`}</Math></NoBreak>{` on the interval
`}<NoBreak><Math>{`$
[-1, 1]
$`}</Math></NoBreak>{` (meaning: going from `}<NoBreak><Math>{`$
x = -1
$`}</Math></NoBreak>{` to 
`}<NoBreak><Math>{`$
x = 1
$`}</Math></NoBreak>{`):`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_x_squared_1_worked.svg"></Image><div class="spacer"></div><VerticalChunk>{`Among all the points on this graph that we 
could discuss, let us name, say, the point 
`}<NoBreak><Math>{`$
(0.75, 0.5625)
$`}</Math></NoBreak>{`...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_x_squared_2_worked.svg"></Image><div class="spacer"></div><VerticalChunk>{`...which finds itself on the graph, namely, 
because the square of `}<NoBreak><Math>{`$
0.75
$`}</Math></NoBreak>{` is 
`}<NoBreak><Math>{`$
0.5625 = 9/16
$`}</Math></NoBreak>{`.`}<ImageLeft offset_y="0em" line={-1.0} src="/images/svg_ch3_0.5625_cloud.svg"></ImageLeft></VerticalChunk></Example></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`Domains.`}</b>{`
The `}<i>{`domain`}</i>{` of a function `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{`—written`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\dom\, f
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`—is the set of inputs `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` for which `}<NoBreak><Math>{`$
f(x)
$`}</Math></NoBreak>{` is
defined.`}</VerticalChunk><div class="spacer"></div><Example><VerticalChunk>{``}<b>{`Example 3.`}</b>{`
We have`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\dom\,\rt{0.1} \te{VX-11/78A} = \left\{ 0\rt{0.1}, 1 \right\}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because VX-11/78A`}<NoBreak><Math>{`$
(x)
$`}</Math></NoBreak>{` is only defined at `}<NoBreak><Math>{`$
x = 0
$`}</Math>{`,`}</NoBreak>{` 
`}<NoBreak><Math>{`$
1
$`}</Math></NoBreak>{`.`}</VerticalChunk></Example><div class="spacer"></div><Example><VerticalChunk>{``}<b>{`Example 4.`}</b>{`
If DM-1700 (another weirdly named function) is 
defined by`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\te{DM-1700}(x) = 
\begin{cases} 
0             & \te{if $x \leq 0$ or $x \geq 1$},\\
1 - x\up{1.1} & \te{if $0 < x < 1$}
\end{cases}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`then`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\dom\,\rt{0.1} \te{DM-1700} = \rr
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because `}<NoBreak><Math>{`$
\te{DM-1700}(x)
$`}</Math></NoBreak>{` is defined for all
`}<NoBreak><Math>{`$
x \in \rr
$`}</Math></NoBreak>{`.`}</VerticalChunk></Example><div class="spacer"></div><Example><VerticalChunk>{``}<b>{`Example 5.`}</b>{`
If `}<NoBreak><Math>{`$
g : \rr \ra \rr
$`}</Math></NoBreak>{` (we are going to explain 
this notation imminently) is the function given 
by`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
g(x) = \sqrt{x - 1^{\color{white}*\!\!}}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`then`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\begin{align}
\dom\, g &\,=\, [1, \infty)
\end{align}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because the square root of a number is defined 
if and only if that number is `}<i>{`nonnegative`}</i>{` 
(i.e., we need `}<NoBreak><Math>{`$
x - 1 \geq 0
$`}</Math></NoBreak>{` in order for `}<NoBreak><Math>{`$
g(x)
$`}</Math></NoBreak>{` 
to be defined, i.e., we need `}<NoBreak><Math>{`$
x \geq 1
$`}</Math></NoBreak>{`).`}</VerticalChunk></Example><div class="spacer"></div><Example><VerticalChunk>{``}<b>{`Example 6.`}</b>{`
If `}<NoBreak><Math>{`$
h : \rr \ra \rr
$`}</Math></NoBreak>{` is defined by`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
h(x) = \frac{1}{x+1}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`then`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\begin{align}
\dom\,h \,=\, \rr\back\{-1\} =\, (-\infty,-1) \cup (-1,\infty)
\end{align}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because `}<NoBreak><Math>{`$
1/(x+1)
$`}</Math></NoBreak>{` is well-defined if and only if
division by 0 is avoided, i.e., if and only if 
`}<NoBreak><Math>{`$
x \ne -1
$`}</Math></NoBreak>{`.`}</VerticalChunk></Example></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`“From/To” Notation.`}</b>{`
The notation`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f : \rr \ra \rr
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`means that `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` is a function`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`from `}<NoBreak><Math>{`$
\rr
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
\rr
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`or, which is to say, that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\dom f \subseteq \rr
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`[translation: `}<i>{`the domain of `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` is a subset of 
the set of real numbers`}</i>{`] and that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\{f(x) : x \in \dom f\} \subseteq \rr
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`[translation: `}<i>{`the set of values output by `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` 
is a subset of the set of real numbers`}</i>{`].`}</VerticalChunk><VerticalChunk indent={true}>{`Generalizing,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f : A \ra B
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`means that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\dom f \subseteq A
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(i.e., that `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` only accepts values from `}<NoBreak><Math>{`$
A
$`}</Math>{`)`}</NoBreak>{` and 
that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\{f(x) : x \in \dom f\} \subseteq B
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(i.e., that `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` only outputs values from `}<NoBreak><Math>{`$
B
$`}</Math>{`),`}</NoBreak>{` 
following the pattern above. `}</VerticalChunk></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`The Vertical Line Test.`}</b>{`
As it turns out, the term “graph” just means 
“set of points in the plane”. So a `}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`function graph`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`(as described above) is just one particular 
kind of “graph” among other things that are 
also called “graphs”, but that are not 
function graphs.`}</VerticalChunk><VerticalChunk indent={true}>{`The so-called`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`vertical line test`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`observes that a graph [`}<NoBreak><Math>{`$
=
$`}</Math></NoBreak>{` `}<i>{`set of points 
in the plane`}</i>{`] is a function graph if and 
only if every `}<NoBreak><Math>{`$
x
$`}</Math>{`-value`}</NoBreak>{` (a.k.a., input) 
corresponds to at most one `}<NoBreak><Math>{`$
y
$`}</Math>{`-value`}</NoBreak>{` (a.k.a., 
output). In other words, every vertical line 
should intersect the graph at most once.`}</VerticalChunk><VerticalChunk indent={true}>{`For example, this particular graph...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_wiggle_graph.svg"></Image><div class="spacer"></div><VerticalChunk>{`is a function graph (or locally at least, from
what we can see), because every vertical line 
intersects the graph at most once, but this 
graph...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_circle.svg"></Image><ImageRight use_squiggle_on_mobile={false} src="/images/svg_ch3_crossing_cloud_circle.svg"></ImageRight><VerticalChunk>{`...is not the graph of any function, because 
some vertical lines intersect the graph more 
than once.`}</VerticalChunk><VerticalChunk indent={true}>{`(Oops. To backtrack and quickly clarify a small 
matter, an empty circle at the end of a segment, 
in the vein of the previous figure...`}</VerticalChunk><div class="spacer"></div><Image container_classes="pt-4 mb-3" src="/images/svg_ch3_empty_circle.svg"></Image><div class="spacer"></div><VerticalChunk>{`...means that the point in question is `}<i>{`excluded`}</i>{` 
from the graph. A filled circle, by opposition, 
means that the point is included!)`}</VerticalChunk><div class="spacer"></div><Example><VerticalChunk>{``}<b>{`Example 7.`}</b>{`
This `}<i>{`upper semicircle`}</i>{` of unit radius...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_semicircle.svg"></Image><div class="spacer"></div><VerticalChunk>{`...passes the vertical line test, and, hence, 
defines a function.`}</VerticalChunk></Example><div class="spacer"></div><Example><VerticalChunk>{``}<b>{`Example 8.`}</b>{`
This graph defines a function...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_function.svg"></Image><div class="spacer"></div><VerticalChunk>{`...because it passes the vertical line test, 
while this graph does not define a function...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_nonfunction.svg"></Image><div class="spacer"></div><VerticalChunk>{`...because it does `}<i>{`not`}</i>{` pass the vertical 
line test!`}</VerticalChunk></Example></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`A Famous Discontinuity.`}</b>{`
As already seen, functions can have
`}<i>{`discontinuities`}</i>{`: a place where the function 
experiences a sudden “jump” in value.`}</VerticalChunk><VerticalChunk indent={true}>{`For a famous example of a “naturally” occurring 
discontinuity (that we feel compelled to 
mention, for some reason) we need look no 
further than the function`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\Large x \ra 0^x
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as it so happens that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
0^x = 
\begin{cases} 0 & \te{if } x > 0\\
1 & \te{if } x = 0\\
\te{undefined} & \te{if }x &lt; 0 \end{cases}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`which implies a discontinuity in the graph of
`}<NoBreak><Math>{`$
y = 0^x
$`}</Math></NoBreak>{` at `}<NoBreak><Math>{`$
x = 0
$`}</Math>{`,`}</NoBreak>{` as pictured here:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_zero_to_the_x.svg"></Image><div class="spacer"></div><VerticalChunk>{`(Pretty cool, no?)`}</VerticalChunk></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`Distinguishing “`}<NoBreak><Math>{`$
f
$`}</Math>{`”`}</NoBreak>{` and “`}<NoBreak><Math>{`$
f(x)
$`}</Math></NoBreak>{`”.`}</b>{` 
The difference between`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{\te{VX-11/78A}}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{\te{VX-11/78A}(x)}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is that the former is a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`function`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`while the latter is a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`value.`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`(Well, provided `}<NoBreak><Math>{`$
x \in \{0, 1\}
$`}</Math>{`,`}</NoBreak>{` to make it 
well-defined at all.) Likewise, if `}<NoBreak><Math>{`$
f : \rr \ra \rr
$`}</Math>{`,`}</NoBreak>{` 
the difference between `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f(x)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is that the former is a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`function`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`while the latter is a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`value.`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`Amusingly, though, if we add “`}<NoBreak><Math>{`$
x \ra
$`}</Math>{`”`}</NoBreak>{` in front 
of “`}<NoBreak><Math>{`$
f(x)
$`}</Math>{`”`}</NoBreak>{` then we are back to considering a `}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`function`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`and which is namely the function whose rule is: 
apply `}<NoBreak><Math>{`$
f
$`}</Math>{`.`}</NoBreak>{` In fact,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f = (x \ra f(x))
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`where the above is `}<i>{`an equality between functions`}</i>{`. 
(You cannot use this equality to`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`define`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` because that would lead to a circular 
definition. But that doesn't make the equality 
any less true. And btw, you can go “one layer 
deeper”:`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f = (x \ra f(x)) = (x \ra (t \ra f(t))(x))
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...where we use the fact that `}<NoBreak><Math>{`$
f = (t \ra f(t))
$`}</Math></NoBreak>{` 
in the second equality. You could keep going, 
replacing each time “`}<NoBreak><Math>{`$
f
$`}</Math>{`”`}</NoBreak>{` by a self-referential 
expression, but the process is not intrinsically 
useful.)`}</VerticalChunk></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`Distinguishing “`}<NoBreak><Math>{`$
x^3
$`}</Math>{`”`}</NoBreak>{` and “`}<NoBreak><Math>{`$
x \ra x^3
$`}</Math></NoBreak>{`”.`}</b>{`
Technically,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^3
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is a `}<i>{`value`}</i>{` (not a function) and the way 
logicians think of it, philosophically speaking, 
is like so: at inception, every symbol has 
some default value attached, absent any other 
context.`}</VerticalChunk><VerticalChunk indent={true}>{`By contrast,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x \ra x^3
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is clearly a _function_, not a `}<i>{`value`}</i>{`. 
So “`}<NoBreak><Math>{`$
x^3
$`}</Math>{`”`}</NoBreak>{` and “`}<NoBreak><Math>{`$
x \ra x^3
$`}</Math>{`”`}</NoBreak>{` are very (VERY) 
different, qualitatively speaking.`}</VerticalChunk><VerticalChunk indent={true}>{`But including the arrow everywhere is 
impractical and even pedantic, so, in the end,
you might see us refer to an expression such as, 
e.g.,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^3 + x^2
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as a “function”, arrow or no arrow. `}</VerticalChunk></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`Polynomials.`}</b>{`
A function `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of the form`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f(x) = a_kx^k + a_{k-1}x^{k-1} + \dots + a_2x^2 + a_1x + a_0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is called a `}<i>{`polynomial`}</i>{`. Here`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
a_0,\,a_1,\, \ldots,\, a_k \in \rr
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`are arbitrary constants, also known as the 
`}<i>{`coefficients`}</i>{` of the polynomial. The `}<i>{`degree`}</i>{` 
of the polynomial is `}<NoBreak><Math>{`$
k
$`}</Math>{`,`}</NoBreak>{` if `}<NoBreak><Math>{`$
a_k \ne 0
$`}</Math>{`.`}</NoBreak>{` 
(Otherwise, work your way down until you find
a nonzero coefficient—if there are none, because 
the polynomial is just the constant `}<NoBreak><Math>{`$
0
$`}</Math>{`,`}</NoBreak>{` then 
the degree is `}<i>{`minus infinity`}</i>{`.) (We're not 
kidding.)`}</VerticalChunk><VerticalChunk indent={true}>{`For example,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
2x + \sqrt{2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is a polynomial of degree 1, and`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^2 - 10
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is a polynomial of degree 2, and`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^{100} + x^{99} + x^{98} + \dots + x^4 + x^3 + x^2 + x + 1
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is a polynomial of degree 100.`}</VerticalChunk><VerticalChunk indent={true}>{`Polynomials of low degree have their own 
special names, as inventoried in the following 
table:`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
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
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`There is some confusion about the term`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`affine`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`for which the term`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`linear`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`is sometimes substituted. But if we say 
“linear” we mean a function of the form `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x \ra a_1x
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`for a constant `}<NoBreak><Math>{`$
a_1 \in \rr
$`}</Math>{`.`}</NoBreak>{` This is more 
restricted than an affine function, because
there is no constant `}<NoBreak><Math>{`$
a_0
$`}</Math></NoBreak>{`!`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_affine_linear_cloud.svg"></Image></Section><div class="spacer"></div><Section><VerticalChunk>{``}<b>{`Quadratic, linear, and constant terms.`}</b>{`
To finish up on polynomials: the terms of degree
`}<NoBreak><Math>{`$
2
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
1
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
0
$`}</Math></NoBreak>{` are called the `}<i>{`quadratic_, 
`}</i>{`linear_, and `}<i>{`constant`}</i>{` terms of the 
polynomial, respectively. If you see`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
a_7x^7 + a_6x^6 + a_5x^5 + a_4x^4 + a_3x^3 - a_2x^2 + a_1x + a_0
$$`}<ImageRight src="/images/svg_ch3_quadratic_linear_constant_cloud.svg"></ImageRight></MathBlock><div class="spacer"></div><VerticalChunk>{`then the quadratic term is `}<NoBreak><Math>{`$
-a_2x^2
$`}</Math>{`,`}</NoBreak>{` not 
`}<NoBreak><Math>{`$
a_2x^2
$`}</Math>{`,`}</NoBreak>{` fyi.`}</VerticalChunk><VerticalChunk indent={true}>{`Note that the linear term can also be viewed as
the “`}<NoBreak><Math>{`$
x^1
$`}</Math></NoBreak>{` term” while the constant term can
also be viewed as the “`}<NoBreak><Math>{`$
x^0
$`}</Math></NoBreak>{` term”; because`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^1 = x
$$`}<ImageRight src="/images/svg_ch3_a1_x1_cloud.svg"></ImageRight></MathBlock><div class="spacer"></div><VerticalChunk>{`for all `}<NoBreak><Math>{`$
x
$`}</Math>{`,`}</NoBreak>{` and `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^0 = 1
$$`}<ImageRight src="/images/svg_ch3_a0_x0_cloud.svg"></ImageRight></MathBlock><div class="spacer"></div><VerticalChunk>{`for all `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` (even `}<NoBreak><Math>{`$
x = 0
$`}</Math>{`),`}</NoBreak>{` namely.`}</VerticalChunk></Section><div class="spacer"></div><Exercises labels={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}><Exercise><VerticalChunk>{``}<b>{`Exercise 1.`}</b>{`
How can you define the absolute value 
function using “definition by cases”?`}</VerticalChunk><div class="spacer"></div><Solution solution_number={0}><VerticalChunk>{`The absolute value function is `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x \ra \begin{cases} x & \te{if $x \geq 0$,}\\ -x\!\!\up{1.2} & \te{if $x < 0$}\end{cases}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because `}<NoBreak><Math>{`$
-(-1) = 1
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
-(-5) = 5
$`}</Math>{`,`}</NoBreak>{` etc.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 2.`}</b>{`
How can you define the absolute value 
function using an “ordinary” algebraic formula?`}</VerticalChunk><div class="spacer"></div><Solution solution_number={1}><VerticalChunk>{`We have`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
|x| = \sqrt{x^2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because `}<NoBreak><Math>{`$
\sqrt{(-1)^2} = 1
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
\sqrt{(-5)^2} = 5
$`}</Math></NoBreak>{`,
etc. `}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 1.`}</i>{`
This definition is less ad-hoc than might seem, 
being a 1-dimensional form of the Pythagorean 
theorem.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 3.`}</b>{`
Evaluate:`}</VerticalChunk><div class="spacer"></div><Grid column_first={true} with_padding={false} place_items="start" center_on_overflow={true} sm_cutoff={460} sm_cols={1} cols={2}><Item><VerticalChunk>{`i. `}<NoBreak><Math>{`$
(\lambda u.u^3)(0.5)
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`ii. `}<NoBreak><Math>{`$
(u \ra u^2)(x + 1)
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`iii. `}<NoBreak><Math>{`$
(\lambda t.t - 1)(100) \cdot (\lambda t.t + 1)(100)
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`iv. `}<NoBreak><Math>{`$
(u \ra u^2)(a + b)
$`}</Math></NoBreak>{``}</VerticalChunk></Item></Grid><div class="spacer"></div><Solution solution_number={2}><VerticalChunk>{`The answers are:`}</VerticalChunk><div class="spacer"></div><Grid column_first={true} with_padding={false} place_items="start" center_on_overflow={true} sm_cutoff={460} sm_cols={1} cols={2}><Item><VerticalChunk>{`i. `}<NoBreak><Math>{`$
0.5^3 = 0.125
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`ii. `}<NoBreak><Math>{`$
(x + 1)^2 = x^2 + 2x + 1
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`iii. `}<NoBreak><Math>{`$
(100 - 1) \cdot (100 + 1) = 9999
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`iv. `}<NoBreak><Math>{`$
(a + b)^2 = a^2 + 2ab + b^2
$`}</Math></NoBreak>{``}</VerticalChunk></Item></Grid></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 4.`}</b>{`
The `}<i>{`floor`}</i>{` of a real number `}<NoBreak><Math>{`$
x
$`}</Math>{`,`}</NoBreak>{` written`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\lfloor x \rfloor,
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is the greatest integer less than or equal 
to `}<NoBreak><Math>{`$
x
$`}</Math>{`.`}</NoBreak>{` (Start at `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` and travel left on the 
number line until you meet an integer; but if
`}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` is already an integer, stay there; the 
place you land is `}<NoBreak><Math>{`$
\lfloor x \rfloor
$`}</Math></NoBreak>{`.)`}</VerticalChunk><VerticalChunk indent={true}>{`Sketch the graph `}<NoBreak><Math>{`$
y = \floor{x}
$`}</Math></NoBreak>{`.`}</VerticalChunk><VerticalChunk indent={true}>{`Secondly, find a formula for a function whose
graph looks like this, where you are allowed
to use “`}<NoBreak><Math>{`$
\floor{x}
$`}</Math>{`”`}</NoBreak>{` in your formula:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_roof_graph.svg"></Image><div class="spacer"></div><Solution solution_number={3}><VerticalChunk>{`As `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` grows, so does `}<NoBreak><Math>{`$
\floor{x}
$`}</Math>{`,`}</NoBreak>{` but
`}<NoBreak><Math>{`$
\floor{x}
$`}</Math></NoBreak>{` only “levels up” each time `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{`
reaches a new integer, and “flatlines”
otherwise; this gives rise to the following
staircase-shaped graph:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_floor_graph.svg"></Image><div class="spacer"></div><VerticalChunk>{`(For example, `}<NoBreak><Math>{`$
\floor{1} = 1
$`}</Math></NoBreak>{` because the 
greatest integer less than or equal to `}<NoBreak><Math>{`$
1
$`}</Math></NoBreak>{` 
is `}<NoBreak><Math>{`$
1
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
\floor{-0.5} = -1
$`}</Math></NoBreak>{` because the greatest
integer less than or equal to `}<NoBreak><Math>{`$
-0.5
$`}</Math></NoBreak>{` is `}<NoBreak><Math>{`$
-1
$`}</Math></NoBreak>{`,
and so on.)`}</VerticalChunk><VerticalChunk indent={true}>{`For the second part note that the following 
two displacements, excerpted from the “factory 
roof” graph in the statement, are equal:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_roof_graph_with_displacement_arrows_worked.svg"></Image><div class="spacer"></div><VerticalChunk>{`The red dot to the left of `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` has `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{`-coordinate
`}<NoBreak><Math>{`$
\floor{x}
$`}</Math>{`,`}</NoBreak>{` so the horizontal displacement is `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x - \floor{x}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`so the equation of the graph is `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
y = x - \floor{x}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because the `}<NoBreak><Math>{`$
y
$`}</Math>{`-coordinate`}</NoBreak>{` `}<i>{`is`}</i>{` the 
vertical displacement, given that the vertical 
displacement starts at `}<NoBreak><Math>{`$
y = 0
$`}</Math>{`,`}</NoBreak>{` and because
the vertical and horizontal displacements are
equal.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 5.`}</b>{`
Find the formula for a function whose graph 
looks like this, again using the floor function
‘`}<NoBreak><Math>{`$
\lfloor \cdot \rfloor
$`}</Math>{`’`}</NoBreak>{` as a building block:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_roof_stretched_x2_graph_worked.svg"></Image><div class="spacer"></div><Solution solution_number={4}><VerticalChunk>{`We would like to argue the correctness of 
the following two-step process (divide the 
input by `}<NoBreak><Math>{`$
2
$`}</Math>{`,`}</NoBreak>{` apply the function from Exercise 
4):`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_roof_stretched_and_compressed.svg"></Image><div class="spacer"></div><VerticalChunk>{`Indeed, the two graphs featured above differ
only by a horizontal dilation; dividing the 
input by `}<NoBreak><Math>{`$
2
$`}</Math></NoBreak>{` “undoes” the dilation, at which 
point it suffices to apply the function pictured
in the second graph; having declared our method 
correct, the answer is thus...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{x/2 - \lfloor x/2 \rfloor}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...as obtained by “sticking” `}<NoBreak><Math>{`$
x/2
$`}</Math></NoBreak>{` (the halved 
input) in place of “`}<NoBreak><Math>{`$
x
$`}</Math>{`”`}</NoBreak>{` in “`}<NoBreak><Math>{`$
\,x - \lfloor x \rfloor
$`}</Math></NoBreak>{`”,
the formula for the function from Exercise 4.`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 1.`}</i>{`
One can check the answer by typing “x/2 - floor(x/2)”
in DESMOS. Viz:`}</VerticalChunk><div class="spacer"></div><Image width="1400px" src="/images/png_ch3_desmos_composition_0_c.png"></Image><div class="spacer"></div><VerticalChunk><Pause></Pause>{``}<i>{`Note 2.`}</i>{`
Alternately, enter “f(x) = x - floor(x)” and
then “f(x/2)”, viz:`}</VerticalChunk><div class="spacer"></div><Image width="1400px" src="/images/png_ch3_desmos_composition_1_c.png"></Image><div class="spacer"></div><VerticalChunk>{`Or we can be even fancier:`}</VerticalChunk><div class="spacer"></div><Image width="1400px" src="/images/png_ch3_desmos_composition_2_b.png"></Image><div class="spacer"></div><VerticalChunk>{`What you see above (the graph in orange) is 
the so-called `}</VerticalChunk><CentralItalicDisplay>{`composition`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{` of the functions 
`}<NoBreak><Math>{`$
\f
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
g
$`}</Math>{`;`}</NoBreak>{` in more detail, if we switch the 
“input tube” and “output tube” sides of a function...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_f_box_inverted.svg"></Image><div class="spacer"></div><VerticalChunk>{`...(compared to the drawing at the top of the
chapter), then the composition of `}<NoBreak><Math>{`$
\f
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{`,
written`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{\f \circ g}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and read`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`“`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of `}<NoBreak><Math>{`$
\hlfbk{}g
$`}</Math></NoBreak>{`”`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`(mathematicians have to invent a notation for 
everything—that little circle “`}<NoBreak><Math>{`$
\circ
$`}</Math>{`”`}</NoBreak>{` is called 
the _composition operator_,
by the way) is the function that you get by
gluing `}<NoBreak><Math>{`$
g
$`}</Math>{`'s`}</NoBreak>{` box to the right of `}<NoBreak><Math>{`$
\f
$`}</Math>{`'s`}</NoBreak>{` box, 
like so:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_f_box_g_box.svg"></Image><div class="spacer"></div><VerticalChunk>{`In other words, `}<NoBreak><Math>{`$
g
$`}</Math>{`'s`}</NoBreak>{` output is passed on to `}<NoBreak><Math>{`$
\f
$`}</Math></NoBreak>{` 
for further processing. (A certain movie called
“The Human Centipede” comes to mind.)`}</VerticalChunk><VerticalChunk indent={true}>{`(To be perfectly clear,`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_f_circle_g_and_f_box_g_box.svg"></Image><div class="spacer"></div><VerticalChunk>{``}<NoBreak><Math>{`$
f \circ g
$`}</Math></NoBreak>{` is a _function_, defined as the
above assemblage of “`}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{` first, `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` second”.)`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 3.`}</i>{`
For a formal definition of “`}<NoBreak><Math>{`$
f \circ g
$`}</Math></NoBreak>{`”—something
not based on pictures—one need only specify what
`}<NoBreak><Math>{`$
f \circ g
$`}</Math></NoBreak>{` does to inputs. Specifically:`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\,{(f \circ g)(x) = f(g(x))}.
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(So that equation is a formal definition.) One can
also clarify that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{\dom f \circ g = \{x\, \in\, \dom g:\, g(x)\, \in\, \dom f\}}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`which is to say that the domain of `}<NoBreak><Math>{`$
f \circ g
$`}</Math></NoBreak>{`
consists of all `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` such that: *(i)* `}<NoBreak><Math>{`$
g(x)
$`}</Math></NoBreak>{`
exists (a.k.a, “`}<NoBreak><Math>{`$
x \in \dom g
$`}</Math>{`”)`}</NoBreak>{` and,
*(ii)* `}<NoBreak><Math>{`$
f(g(x))
$`}</Math></NoBreak>{` exists (a.k.a., “`}<NoBreak><Math>{`$
g(x) \in \dom f
$`}</Math></NoBreak>{`”).`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 4.`}</i>{`
Amusingly—or not—both sides of `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{(f \circ g)(x) = f(g(x))}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`are read`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CenterDisplay>{`“`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of `}<NoBreak><Math>{`$
\hlfbk{}g
$`}</Math></NoBreak>{` of `}<NoBreak><Math>{`$
x\hspace{0.1em}
$`}</Math></NoBreak>{`”`}</CenterDisplay><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`since “`}<NoBreak><Math>{`$
f \circ g
$`}</Math>{`”`}</NoBreak>{` is read “`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of `}<NoBreak><Math>{`$
g\rt{0.1}
$`}</Math></NoBreak>{`”,
and “`}<NoBreak><Math>{`$
f(\dots)
$`}</Math>{`”`}</NoBreak>{` is read “`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` of ...”.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 6.`}</b>{`
Find formulas for functions whose graphs look 
like these:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_roof_x2_worked.svg"></Image><div class="spacer"></div><Solution solution_number={5}><VerticalChunk>{`For the first graph, `}<del><VerticalChunk>{`the `}</VerticalChunk></del>{`an answer is `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
2 \cdot(x/2 - \fl{x/2})
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`which simplifies to`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x - 2\fl{x/2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because all we have to do is to multiply 
Exercise 5's formula by `}<NoBreak><Math>{`$
2
$`}</Math></NoBreak>{`.`}</VerticalChunk><VerticalChunk indent={true}>{`For the second graph, an answer is`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x/3 - \fl{x/3}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because the problem is similar to Exercise 5 
except with a factor `}<NoBreak><Math>{`$
3
$`}</Math></NoBreak>{` horizontal dilation.`}</VerticalChunk><VerticalChunk indent={true}>{`For the third graph, we will first stop to 
find a formula  for the function depicted here:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_roof_stretched_x3_translated_1_worked.svg"></Image><div class="spacer"></div><VerticalChunk>{`And that formula is...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_factory_roof_stretched_x3_translated_1_explanation.svg"></Image><div class="spacer"></div><VerticalChunk>{`...iiiiiiiS...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x-1)/3 - \fl{(x-1)/3}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as obtained by substituting “`}<NoBreak><Math>{`$
x - 1
$`}</Math>{`”`}</NoBreak>{`  
(the input, minus `}<NoBreak><Math>{`$
1
$`}</Math>{`)`}</NoBreak>{` in place of “`}<NoBreak><Math>{`$
x
$`}</Math>{`”`}</NoBreak>{` in 
“`}<NoBreak><Math>{`$
\,x/3 - \fl{x/3}
$`}</Math>{`”,`}</NoBreak>{` the formula for the 
second graph. Then we multiply that by `}<NoBreak><Math>{`$
3
$`}</Math></NoBreak>{` 
(to go from ”`}</VerticalChunk><VerticalChunk indent={true}><InlineImage width="0.9em" src="/images/svg_ch3_3_3_grid_1.svg"></InlineImage>{`” to “`}</VerticalChunk><VerticalChunk indent={true}><InlineImage width="0.9em" src="/images/svg_ch3_3_3_grid_2.svg"></InlineImage>{`”, namely), meaning that the final answer is`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
3 \cdot ((x-1)/3 - \fl{(x-1)/3})
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`or`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
   
(x - 1) - 3\fl{(x-1)/3}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`after simplification. (Or just`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x - 1 - 3\fl{(x-1)/3}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`though we personally prefer the previous 
form, it being more “talkative”.)`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 7.`}</b>{`
If`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\cos \dblcol \rr \ra \rr
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(the “hollow dot colon” means that `}<NoBreak><Math>{`$
\dom \cos = \rr
$`}</Math></NoBreak>{`)
is a function whose graph looks like so...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_cosine.svg"></Image><div class="spacer"></div><VerticalChunk>{`...then does the function...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{x \ra \cos(1000x)}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...have a graph that looks like a bunch of very tight 
bumps, or, instead, very flat _&_ spaced-out bumps??`}</VerticalChunk><div class="spacer"></div><Solution solution_number={6}><VerticalChunk>{`Consider how to “read off” a value of `}<NoBreak><Math>{`$
y = \cos(1000x)
$`}</Math></NoBreak>{`
from the graph `}<NoBreak><Math>{`$
y = \cos(x)
$`}</Math></NoBreak>{`:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_cosine_1000x_worked.svg"></Image><div class="spacer"></div><VerticalChunk>{`By the first step, a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`horizontal dilation by a factor 1000`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{` `}</VerticalChunk><VerticalChunk indent={true}>{`maps the first graph onto the second graph—i.e.,
a point`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x, y)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is on the first graph if and only the dilated
point`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(1000x, y)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is on the second graph. The first graph is
therefore some very compressed thing, full of
scrunched bumps!`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 1.`}</i>{`
One can also reason that a small change in `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` 
results in a large change in `}<NoBreak><Math>{`$
1000x
$`}</Math>{`,`}</NoBreak>{` so that 
`}<NoBreak><Math>{`$
\cos(1000x)
$`}</Math></NoBreak>{` must “cycle” much faster through 
values than `}<NoBreak><Math>{`$
\cos(x)
$`}</Math></NoBreak>{` does.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 8.`}</b>{`
Rewrite`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
\tag{A}(f \circ (g \circ h))(x)
$$`}</MathBlock></CustomBlock>{`without using “`}<NoBreak><Math>{`$
\circ
$`}</Math>{`”,`}</NoBreak>{` using only the 
“definitional equation of function 
composition”, which is namely`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
\tag{AA}(r \circ s)(x) = r(s(x))
$$`}</MathBlock></CustomBlock>{`(where `}<NoBreak><Math>{`$
r
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
s
$`}</Math></NoBreak>{` are functions); plz
note that you will have to apply (AA) 
_twice_, as each application of (AA) 
makes `}<i>{`one`}</i>{` copy of the symbol “`}<NoBreak><Math>{`$
\circ
$`}</Math>{`”`}</NoBreak>{` 
disappear, and (A) contains `}<i>{`two`}</i>{` copies of 
“`}<NoBreak><Math>{`$
\circ
$`}</Math></NoBreak>{`”!!`}</VerticalChunk><div class="spacer"></div><Solution solution_number={7}><VerticalChunk>{`Setting “`}<NoBreak><Math>{`$
r
$`}</Math>{`”`}</NoBreak>{` to “`}<NoBreak><Math>{`$
f
$`}</Math>{`”`}</NoBreak>{` and “`}<NoBreak><Math>{`$
s
$`}</Math>{`”`}</NoBreak>{` to “`}<NoBreak><Math>{`$
(g \circ h)
$`}</Math>{`”`}</NoBreak>{` 
in (AA) yields`}<ImageLeft offset_y="-0.5em" offset_x="1em" popup={true} src="/images/svg_ch3_r_s_substitution_1_1.1em_cloud.svg"></ImageLeft></VerticalChunk><VerticalChunk><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
(f \circ (g \circ h))(x) = \f((g \circ h)(x))
$$`}</MathBlock></CustomBlock>{`...which already constitutes progress towards
our goal, since only one copy of “`}<NoBreak><Math>{`$
\circ
$`}</Math>{`”`}</NoBreak>{` 
exists on the right-hand side! But`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
(g \circ h)(x) = g(h(x))
$$`}</MathBlock></CustomBlock>{`by the “definitional equation” again, so`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
f((g \circ h)(x)) = \f(g(h(x)))
$$`}</MathBlock></CustomBlock>{`...and this completes the computation!`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 1.`}</i>{`
We can collect both steps of the computation 
into a single string of equalities:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_first_victim_second_victim_1_1em.svg"></Image></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 9.`}</b>{`
Same question as Exercise 17, but for 
“`}<NoBreak><Math>{`$
f \circ (g \circ h)
$`}</Math>{`”`}</NoBreak>{` instead of 
“`}<NoBreak><Math>{`$
(f \circ g) \circ h
$`}</Math></NoBreak>{`”.`}</VerticalChunk><div class="spacer"></div><Solution solution_number={8}><VerticalChunk>{`We will again evaluate the “outer”
composition operator first and the “inner”
composition operator second, where the “outer”
composition operator is the one that is fewer
pairs of parentheses away from the outside 
world:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_inner_outer_1_1em.svg"></Image><div class="spacer"></div><VerticalChunk>{`So the first step is...`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
((f \circ g) \circ h)(x) = (f \circ g)(h(x))
$$`}</MathBlock></CustomBlock>{`...by setting `}<NoBreak><Math>{`$
r = f \circ g
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
s = h
$`}</Math></NoBreak>{` in
the definitional equation, and the second step
is...`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
(f \circ g)(h(x)) = \f(g(h(x)))
$$`}</MathBlock></CustomBlock>{`...by setting `}<NoBreak><Math>{`$
r = f
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
s = g
$`}</Math>{`,`}</NoBreak>{` and while
replacing “`}<NoBreak><Math>{`$
x
$`}</Math>{`”`}</NoBreak>{` by “`}<NoBreak><Math>{`$
h(x)
$`}</Math></NoBreak>{`”.`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 1.`}</i>{`
The fact that`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
(f \circ (g \circ h))(x)
$$`}</MathBlock></CustomBlock>{`and`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
((f \circ g) \circ h)(x)
$$`}</MathBlock></CustomBlock>{`both evaluate to`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
f(g(h(x)))
$$`}</MathBlock></CustomBlock>{`actually implies that`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
f \circ (g \circ h)
$$`}</MathBlock></CustomBlock>{`and`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
(f \circ g) \circ h
$$`}</MathBlock></CustomBlock>{`are the same function; this function is namely
the function that maps `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
f(g(h(x)))
$`}</Math></NoBreak>{` for 
all `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` (or`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
x \ra f(g(h(x)))
$$`}</MathBlock></CustomBlock>{`in lambda notation).`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 2.`}</i>{`
Because of this, we can write`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
f \circ g \circ half
$$`}</MathBlock></CustomBlock>{`without any parentheses. (The point is: either
way you parenthesize it you obtain the same 
function, so why bother?)`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 3.`}</i>{`
The fact that`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
{(a + b) + c = a + (b + c)}
$$`}</MathBlock></CustomBlock>{`for all numbers `}<NoBreak><Math>{`$
a
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
b
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
c
$`}</Math></NoBreak>{` is known as the`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`associativity`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`of addition; likewise, the fact that`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
(ab)c = a(bc)
$$`}</MathBlock></CustomBlock>{`for all numbers `}<NoBreak><Math>{`$
a
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
b
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
c
$`}</Math></NoBreak>{` is known as the`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`associativity`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`of multiplication; and again likewise,
the fact that`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
{(f \circ g) \circ h  =  f \circ (g \circ h)}
$$`}</MathBlock></CustomBlock>{`for all functions `}<NoBreak><Math>{`$
f
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
g
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
h
$`}</Math></NoBreak>{` is known 
as the`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`associativity`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}<ImageRight src="/images/svg_ch3_associativity_cloud.svg"></ImageRight></VerticalChunk><VerticalChunk>{`of function composition.`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 4.`}</i>{`
One of the best ways to explain _&_ understand
the associativity of function composition 
uses this picture:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_truth_be_said.svg"></Image><div class="spacer"></div><VerticalChunk>{`In the above `}<NoBreak><Math>{`$
A
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
B
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
C
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
D
$`}</Math></NoBreak>{` are sets 
while the arrows encode functions `}<NoBreak><Math>{`$
f
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{` 
and `}<NoBreak><Math>{`$
h
$`}</Math></NoBreak>{` that, respectively in reverse order, 
go from `}<NoBreak><Math>{`$
D
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
C
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
C
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
B
$`}</Math>{`,`}</NoBreak>{` and `}<NoBreak><Math>{`$
B
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
A
$`}</Math>{`.`}</NoBreak>{` 
For example,`}</VerticalChunk><VerticalChunk indent={true}><DisplayCentered><VerticalChunk>{``}<NoBreak><Math>{`$
\Large h(
$`}</Math></NoBreak>{``}</VerticalChunk><VerticalChunk indent={true}><InlineImage y_anchor="-3px" width="1rem" src="/images/svg_ch3_composition_icon_clubs.svg"></InlineImage>{``}<NoBreak><Math>{`$
\Large{}) =
$`}</Math></NoBreak>{``}</VerticalChunk><InlineImage margin_right=".5rem" margin_left=".5rem" y_anchor="-3px" width="1.25rem" src="/images/svg_ch3_composition_icon_die_3.svg"></InlineImage></DisplayCentered>{`because the arrow that originates at `}</VerticalChunk><VerticalChunk indent={true}><InlineImage space_right={true} space_left={true} y_anchor="-4px" width="1rem" src="/images/svg_ch3_composition_icon_clubs.svg"></InlineImage>{`in set `}<NoBreak><Math>{`$
D
$`}</Math></NoBreak>{` lands at `}</VerticalChunk><VerticalChunk indent={true}><InlineImage space_right={true} space_left={true} y_anchor="-4px" width="1.25rem" src="/images/svg_ch3_composition_icon_die_3.svg"></InlineImage>{`in set `}<NoBreak><Math>{`$
C
$`}</Math>{`,`}</NoBreak>{`  and`}</VerticalChunk><VerticalChunk indent={true}><DisplayCentered><VerticalChunk>{``}<NoBreak><Math>{`$
\Large g(h(
$`}</Math></NoBreak>{``}</VerticalChunk><VerticalChunk indent={true}><InlineImage y_anchor="-3px" width="1rem" src="/images/svg_ch3_composition_icon_clubs.svg"></InlineImage>{``}<NoBreak><Math>{`$
\Large{})){}=
$`}</Math></NoBreak>{``}</VerticalChunk><InlineImage space_right={true} space_left={true} y_anchor="-4px" width="2.3rem" src="/images/svg_ch3_composition_icon_fence.svg"></InlineImage></DisplayCentered>{`because, pursuing that path onwards, the arrow 
that originates at`}</VerticalChunk><VerticalChunk indent={true}><InlineImage space_right={true} space_left={true} y_anchor="-4px" width="1.25rem" src="/images/svg_ch3_composition_icon_die_3.svg"></InlineImage>{`in set `}<NoBreak><Math>{`$
C
$`}</Math></NoBreak>{` lands at`}</VerticalChunk><VerticalChunk indent={true}><InlineImage space_right={true} space_left={true} y_anchor="-4px" width="2.3rem" src="/images/svg_ch3_composition_icon_fence.svg"></InlineImage>{`in set `}<NoBreak><Math>{`$
B
$`}</Math>{`,`}</NoBreak>{` etc.`}</VerticalChunk><VerticalChunk indent={true}>{`Under this representation one can “compute”
`}<NoBreak><Math>{`$
f \circ g \circ h
$`}</Math></NoBreak>{` by gluing arrows end-to-end.
First, say, obliviate set `}<NoBreak><Math>{`$
C
$`}</Math></NoBreak>{` in the middle 
right, then do the same with set `}<NoBreak><Math>{`$
B
$`}</Math></NoBreak>{` in the
middle left:`}</VerticalChunk><div class="spacer"></div><Image width="2000px" src="/images/svg_ch3_truth_be_said_right_first.svg"></Image><div class="spacer"></div><VerticalChunk>{`We can also get rid of `}<NoBreak><Math>{`$
B
$`}</Math></NoBreak>{` first, `}<NoBreak><Math>{`$
C
$`}</Math></NoBreak>{` second:`}</VerticalChunk><div class="spacer"></div><Image width="2000px" src="/images/svg_ch3_truth_be_said_left_first.svg"></Image><div class="spacer"></div><VerticalChunk>{`The first order of computation corresponds
to the parenthetization “`}<NoBreak><Math>{`$
f \circ (g \circ h)
$`}</Math></NoBreak>{`”
while the second corresponds to the 
parenthetization “`}<NoBreak><Math>{`$
(f \circ g) \circ h
$`}</Math></NoBreak>{`”.
Intuitively, the reason they come out the 
same (in “step 6”, bottom left) is because 
each final arrow in the last diagram comes 
from a path-of-arrows in the original 
diagram, and the order in which the 
waypoints along a path are “straightened” 
(or “collapsed”) does not affect the origin 
point or destination point of the final 
arrow.`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 5.`}</i>{`
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
the second function second.`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 6.`}</i>{`
We have taken for granted the fact that two 
functions `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{` are “equal” if and only
if they produce the same outupt for every 
input but this is a actually subtle thing 
that has to do with how functions are defined 
“under the hood”. Specifically, mathematicians 
view functions as`}<del><VerticalChunk>{`long`}</VerticalChunk></del><del><VerticalChunk>{`lists of`}</VerticalChunk></del>{`sets of ordered pairs; for example—conceptual
cold water shock ahead—`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{\textrm{VX-11/78A} = \{(0, 3.5), (1, 2.5)\}}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because VX-11/78A maps `}<NoBreak><Math>{`$
0
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
3.5
$`}</Math></NoBreak>{` and maps 
`}<NoBreak><Math>{`$
1
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
2.5
$`}</Math>{`.`}</NoBreak>{` (The presence of an ordered pair`}</VerticalChunk><VerticalChunk indent={true}><CustomBlock style="font-size:1.1em"><MathBlock>{`$$
(a, b)
$$`}</MathBlock></CustomBlock>{`means that input `}<NoBreak><Math>{`$
a
$`}</Math></NoBreak>{` produces output `}<NoBreak><Math>{`$
b
$`}</Math>{`.)`}</NoBreak>{` So 
two functions are equal if and only if they 
are equal`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`as sets of ordered pairs`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`because the set of ordered pairs is the 
underlying “thing” that the function is. In 
particular, there is no notion of a “formula” 
or of a “procedure” being attached to a 
function, that might cause two functions to 
be considered unequal even if they produce the 
same output on every input—producing the same
output on every input implies that the `}<del><VerticalChunk>{`list of`}</VerticalChunk></del>{`set of ordered pairs is equal, and, perforce, 
that the two functions are equal!!`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 10.`}</b>{`
Show that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^2 + 10x + 30
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`can be written in the form `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x + \dots)^2 + \,\dots
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`for some numbers “`}<NoBreak><Math>{`$
\dots
$`}</Math>{`”`}</NoBreak>{` and “`}<NoBreak><Math>{`$
\dots
$`}</Math></NoBreak>{`”.`}</VerticalChunk><div class="spacer"></div><Solution solution_number={9}><VerticalChunk>{`The answer is`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x + 5)^2 + 5
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\begin{align}
\,\,\,\,(x + 5)^2
&= x^2 + (2\cdot 5)x + 5^2 \\
&= \up{1.4} x^2 + 10x + 25
\end{align}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and adding `}<NoBreak><Math>{`$
5
$`}</Math></NoBreak>{` gives `}<NoBreak><Math>{`$
x^2 + 10x + 30
$`}</Math></NoBreak>{`.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 11.`}</b>{`
Solve Exercise 10 using algebra _&_
variables.`}</VerticalChunk><div class="spacer"></div><Solution solution_number={10}><VerticalChunk>{`Put an unknown “`}<NoBreak><Math>{`$
U
$`}</Math>{`”`}</NoBreak>{` for the first set
of dots and an unknown “`}<NoBreak><Math>{`$
V
$`}</Math>{`”`}</NoBreak>{` for the 
second set of dots. Then`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x + U)^2 + V = x^2 + 10x + 30
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`becomes the equation to satisfy.
Expanding the left-hand side, we get:`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^2 + 2Ux + U^2 + V = x^2 + 10x + 30.
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`In order for this equation to hold as an 
equality between polynomials (i.e., for all
`}<NoBreak><Math>{`$
x
$`}</Math>{`)`}</NoBreak>{` the coefficients of `}<NoBreak><Math>{`$
x^2
$`}</Math></NoBreak>{` on both 
sides of the equation must be equal, the 
coefficients of `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` on both sides of the
equation must be equal, and the constant
terms on boths of the equation must be 
equal—this gives us`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
1 = 1
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(equating the coefficients of `}<NoBreak><Math>{`$
x^2
$`}</Math>{`),`}</NoBreak>{` and`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
2U = 10
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(equating the coefficients of `}<NoBreak><Math>{`$
x
$`}</Math>{`),`}</NoBreak>{` and `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
U^2 + V = 30
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(equating the constant terms). Only the
latter two equations contain information.
In particular,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
2U = 10
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`implies `}<NoBreak><Math>{`$
U = 5
$`}</Math>{`,`}</NoBreak>{` so `}<NoBreak><Math>{`$
U^2 + V = 30
$`}</Math></NoBreak>{` becomes
`}<NoBreak><Math>{`$
25 + V = 30
$`}</Math>{`,`}</NoBreak>{` and 
`}<NoBreak><Math>{`$
V = 30 - 25 = 5
$`}</Math></NoBreak>{`.
So `}<NoBreak><Math>{`$
U = V = 5
$`}</Math>{`,`}</NoBreak>{` as previously found.
(But now we know that the solution is _unique_,
because the only number `}<NoBreak><Math>{`$
U
$`}</Math></NoBreak>{` that satisfies`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
2U = 10
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is `}<NoBreak><Math>{`$
U = 5
$`}</Math>{`,`}</NoBreak>{` and the only number `}<NoBreak><Math>{`$
V
$`}</Math></NoBreak>{` that
satisfies `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
25 + V = 30
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is `}<NoBreak><Math>{`$
V = 5
$`}</Math></NoBreak>{`.)`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 12.`}</b>{`
Show that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^2 + 10x + 30 = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(cf`}<NoBreak><Math>{`$
.
$`}</Math></NoBreak>{` Exercise 21) has no solutions `}<NoBreak><Math>{`$
x \in \rr
$`}</Math></NoBreak>{`.`}</VerticalChunk><div class="spacer"></div><Solution solution_number={11}><VerticalChunk>{`The equation is equivalent to`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x + 5)^2 + 5 = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`by Exercise 21, but this implies`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x + 5)^2 = -5
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`which is an equation with no solution over
the reals because the square of a real number
is nonnegative.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 13.`}</b>{`
Show that `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^2 + 10x - 30 = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`has two solutions `}<NoBreak><Math>{`$
x \in \rr
$`}</Math></NoBreak>{`.`}</VerticalChunk><div class="spacer"></div><Solution solution_number={12}><VerticalChunk>{`The equation can be written`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x + 5)^2 - 55 = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because `}<NoBreak><Math>{`$
(x + 5)^2 = x^2 + 10x + 25
$`}</Math></NoBreak>{`
and `}<NoBreak><Math>{`$
25 - 55 = -30
$`}</Math>{`.`}</NoBreak>{` Passing `}<NoBreak><Math>{`$
55
$`}</Math></NoBreak>{` to the
other side, we find`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x + 5)^2 = 55
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`which holds if and only if`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\,x + 5 = \pm\sqrt{55}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`or`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\,x = -5 \pm\sqrt{55}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`constituting two distinct solutions.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 14.`}</b>{`
What sequence of geometric transformations
(rotations, translations, scalings, etc) 
maps the curve`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{y = x^2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`onto`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{y = Ax^2 + Bx}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`for constants `}<NoBreak><Math>{`$
A
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
B
$`}</Math></NoBreak>{` such that `}<NoBreak><Math>{`$
A \ne 0
$`}</Math>{`?`}</NoBreak>{` `}</VerticalChunk><div class="spacer"></div><Solution solution_number={13}><VerticalChunk>{`Write`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{Ax^2 + Bx}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{A\Big(x^2 + {B \over A}x\Big)}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and then write`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{x^2 + {B \over A}x}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`so that, altogether,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{Ax^2 + Bx}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is rewritten`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}\right]}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`that can be seen as descending from `}<NoBreak><Math>{`$
y = x^2
$`}</Math></NoBreak>{` 
in three steps:`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{y = x^2}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{\downarrow}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{y = \,\Big(x + {B \over 2A}\Big)^2}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{\downarrow}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{y = \,\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{\downarrow}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{y = A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}\right]}.
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`Three steps, three geometric transformations!
The third step effects a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`vertical scaling by `}<NoBreak><Math>{`$
A
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`i.e., vertically stretches the graph by
a factor `}<NoBreak><Math>{`$
A
$`}</Math>{`,`}</NoBreak>{` because we multiply the
value of `}<NoBreak><Math>{`$
y
$`}</Math></NoBreak>{` by `}<NoBreak><Math>{`$
A
$`}</Math>{`.`}</NoBreak>{` The second step 
effects a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`vertical translation by `}<NoBreak><Math>{`$
{-{B^2 \over 4A^2}}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`i.e., lowers the height of the entire
graph by `}<NoBreak><Math>{`$
{B^2 \over 4A^2}
$`}</Math>{`,`}</NoBreak>{` because we add 
`}<NoBreak><Math>{`$
-{B^2 \over 4A^2}
$`}</Math></NoBreak>{` to the value of `}<NoBreak><Math>{`$
y
$`}</Math></NoBreak>{`.
The first step, on the other hand, is
entirely different: it is a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`preprocessing`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`step, in that we mess with the input (i.e., 
`}<NoBreak><Math>{`$
x
$`}</Math>{`),`}</NoBreak>{` instead of adding on (or “multiplying 
on”) to the current value of `}<NoBreak><Math>{`$
y
$`}</Math>{`.`}</NoBreak>{`     `}</VerticalChunk><VerticalChunk indent={true}>{`To understand how a preprocessing step 
affects the shape of a graph, note that, more
generally, a graph of the form`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{y = f(x + a)}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(for some constant `}<NoBreak><Math>{`$
a
$`}</Math>{`)`}</NoBreak>{` “fetches” values on
the graph`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{y = f(x)}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`by going `}<NoBreak><Math>{`$
a
$`}</Math></NoBreak>{` units to the right. The larger `}<NoBreak><Math>{`$
a
$`}</Math></NoBreak>{`
is, thus, the further `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{y = f(x + a)}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`drifts off to the left. For example,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{y = f(x + 20)}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`has value `}<NoBreak><Math>{`$
f(0)
$`}</Math></NoBreak>{` at `}<NoBreak><Math>{`$
x = -20
$`}</Math>{`,`}</NoBreak>{` and if you replace
`}<NoBreak><Math>{`$
20
$`}</Math></NoBreak>{` with something larger, that position (i.e., 
`}<NoBreak><Math>{`$
x = -20
$`}</Math>{`)`}</NoBreak>{` drifts even further off to the left!
In any case, the graph `}<NoBreak><Math>{`$
y = f(x + a)
$`}</Math></NoBreak>{` is the`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`leftward`}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`translate by `}<NoBreak><Math>{`$
a
$`}</Math></NoBreak>{` units of `}<NoBreak><Math>{`$
y = f(x)
$`}</Math></NoBreak>{`
and, as a consequence, the first step effects a`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`leftward translation by `}<NoBreak><Math>{`$
{B\over 2A}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`of the curve `}<NoBreak><Math>{`$
y = x^2
$`}</Math>{`,`}</NoBreak>{` or`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`horizontal translation by `}<NoBreak><Math>{`$
-{B\over 2A}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`more elegantly put. (The second formulation
doesn't assume a particular orientation of the 
`}<NoBreak><Math>{`$
x
$`}</Math>{`-axis,`}</NoBreak>{` that's why it's “more elegantly put”,
in our opinion.)`}</VerticalChunk><VerticalChunk indent={true}>{`To recapitulate, the three transformations
are,in order:`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`1. horizontal translation by `}<NoBreak><Math>{`$
-{B \over 2A}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`2. vertical translation by `}<NoBreak><Math>{`$
{-{B^2 \over 4A^2}}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`3. vertical scaling by `}<NoBreak><Math>{`$
A
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 1.`}</i>{`
You could do the vertical translation
before the horizontal translation,
geometrically it comes out the same.
That order of geometric transformations 
would correspond to the following sequence
of algebraic transformations:`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{y = x^2}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{\downarrow}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{y = x^2 - {B^2 \over 4A^2}}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{\downarrow}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{y = \,\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{\downarrow}
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
{y = A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}\right]}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...in which the `}<i>{`second`}</i>{` step is a 
preprocessing step. (I.e., a step that 
replaces “`}<NoBreak><Math>{`$
x
$`}</Math>{`”`}</NoBreak>{` with something else.)`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 15.`}</b>{`
Let `}<NoBreak><Math>{`$
x_0 \in \rr
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
y_0 \in \rr
$`}</Math></NoBreak>{` and 
`}<NoBreak><Math>{`$
a \in \rr
$`}</Math></NoBreak>{` with `}<NoBreak><Math>{`$
y_0 \geq 0
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
a \ne 0.
$`}</Math></NoBreak>{`
If you apply these transformations...`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`1. vertical translation by `}<NoBreak><Math>{`$
-y_0
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`2. horizontal translation by `}<NoBreak><Math>{`$
x_0
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`3. vertical scaling by `}<NoBreak><Math>{`$
a
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`...to the curve `}<NoBreak><Math>{`$
y = x^2
$`}</Math>{`,`}</NoBreak>{` what are the 
roots of the final curve that you obtain?
(Nb: `}<i>{`Roots`}</i>{` are values of `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` such 
that `}<NoBreak><Math>{`$
y = 0
$`}</Math></NoBreak>{`.)`}</VerticalChunk><div class="spacer"></div><Solution solution_number={14}><VerticalChunk>{`Start by noting that the point 
`}<NoBreak><Math>{`$
(\sqrt{y_0}, y_0)
$`}</Math></NoBreak>{` is on the curve `}<NoBreak><Math>{`$
y = x^2
$`}</Math></NoBreak>{`,
as well as the point `}<NoBreak><Math>{`$
(-\sqrt{y_0}, y_0)
$`}</Math>{`,`}</NoBreak>{` 
because
`}<NoBreak><Math>{`$
(\sqrt{y_0})^2 = (-\sqrt{y_0})^2 =
$`}</Math></NoBreak>{` `}<NoBreak><Math>{`$
y_0;
$`}</Math></NoBreak>{`
here is a sketch of the situation before 
anything happens:`}</VerticalChunk><div class="spacer"></div><Image width="760px" src="/images/svg_ch3_x0_y0_step0.svg"></Image><div class="spacer"></div><VerticalChunk>{`After vertically translating by `}<NoBreak><Math>{`$
-y_0
$`}</Math></NoBreak>{` 
the roots will therefore be at `}<NoBreak><Math>{`$
x = \pm\sqrt{y_0}
$`}</Math></NoBreak>{`:`}</VerticalChunk><div class="spacer"></div><Image width="760px" src="/images/svg_ch3_x0_y0_step1_alone.svg"></Image><div class="spacer"></div><VerticalChunk>{`Then after horizontally translating by `}<NoBreak><Math>{`$
x_0
$`}</Math></NoBreak>{`
the roots mosey over to `}<NoBreak><Math>{`$
x = x_0\pm\sqrt{y_0}
$`}</Math></NoBreak>{`:`}</VerticalChunk><div class="spacer"></div><Image width="760px" src="/images/svg_ch3_x0_y0_step2_alone.svg"></Image><div class="spacer"></div><VerticalChunk>{`Lastly, vertical scaling does not affect 
the position of the roots, because it 
stretches the graph `}<i>{`about`}</i>{` the `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` 
axis (here `}<NoBreak><Math>{`$
a \approx 1.7
$`}</Math></NoBreak>{`):`}</VerticalChunk><div class="spacer"></div><Image width="760px" src="/images/svg_ch3_x0_y0_step3_alone.svg"></Image><div class="spacer"></div><VerticalChunk>{`So the roots are at: `}<NoBreak><Math>{`$
x = x_0 \pm \sqrt{y_0}
$`}</Math></NoBreak>{`.
(Like we found them after the second step.)`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 16.`}</b>{`
Use the results of the previous two exercises
to find the value(s) of `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` such that 
`}<NoBreak><Math>{`$
Ax^2 + Bx = 0
$`}</Math></NoBreak>{` for constants `}<NoBreak><Math>{`$
A
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
B
$`}</Math></NoBreak>{` such 
that `}<NoBreak><Math>{`$
A \ne 0
$`}</Math></NoBreak>{`.`}</VerticalChunk><div class="spacer"></div><Solution solution_number={15}><VerticalChunk>{`Well,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
Ax^2 + Bx = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`obviously has solution `}<NoBreak><Math>{`$
x = 0
$`}</Math></NoBreak>{` to start
with, so we `}<i>{`don't need`}</i>{` the previous 
exercises for one of the roots at least—actually,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
Ax^2 + Bx = x(Ax + B)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`so the equation is equivalent to`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x(Ax + B) = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and so one of the roots is `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and the other root is the value of `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{`
such that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
Ax + B = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`which is `}<NoBreak><Math>{`$
x = -B/A
$`}</Math>{`.`}</NoBreak>{` (In order for the product`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x(Ax + B)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`to be `}<NoBreak><Math>{`$
0
$`}</Math></NoBreak>{` you either need the first term to
be `}<NoBreak><Math>{`$
0
$`}</Math>{`,`}</NoBreak>{` leading us to `}<NoBreak><Math>{`$
x = 0
$`}</Math>{`,`}</NoBreak>{` or the second
term to be `}<NoBreak><Math>{`$
0
$`}</Math>{`,`}</NoBreak>{` leading us to `}<NoBreak><Math>{`$
Ax + B = 0
$`}</Math>{`—the`}</NoBreak>{` 
product of two things is `}<NoBreak><Math>{`$
0
$`}</Math></NoBreak>{` if and only if
one of the two things is `}<NoBreak><Math>{`$
0
$`}</Math></NoBreak>{`.)`}</VerticalChunk><VerticalChunk indent={true}>{`So the roots are `}<NoBreak><Math>{`$
x = 0
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
x = -B/A
$`}</Math></NoBreak>{`.`}</VerticalChunk><VerticalChunk indent={true}>{`To complete the problem _as we were asked_, 
however, we will use the fact that `}<NoBreak><Math>{`$
y = Ax^2 + Bx
$`}</Math></NoBreak>{`
is obtained from `}<NoBreak><Math>{`$
y = x^2
$`}</Math></NoBreak>{` by the following
sequence of transformations (cf. Exercise 14):`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`1. vertical translation by `}<NoBreak><Math>{`$
-{B^2 \over 4A^2}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`2. horizontal translation by `}<NoBreak><Math>{`$
-{B \over 2A}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`3. vertical scaling by `}<NoBreak><Math>{`$
A
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`(We put the vertical translation first.)
By Exercise 15, the roots of `}<NoBreak><Math>{`$
y = Ax^2 + Bx
$`}</Math></NoBreak>{` 
are thus at`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\tag{A}
x = -{B\over 2A} \pm \sqrt{B^2 \over 4A^2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`which looks a little different than our 
previous result of `}<NoBreak><Math>{`$
x = 0
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
x = -B/A
$`}</Math></NoBreak>{`
until you realize that`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\pm \sqrt{B^2 \over 4A^2} = \pm {B \over 2A}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(because`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\left({B \over 2A}\right)^{\!2} = {B^2 \over 4A^2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and even though `}<NoBreak><Math>{`$
{B\over 2A}
$`}</Math></NoBreak>{` could be 
negative, the “`}<NoBreak><Math>{`$
\pm
$`}</Math>{`”`}</NoBreak>{` on either side of 
the equation means that the `}<i>{`set`}</i>{` of values
on either side of the equation is the same),
so that (A) becomes`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x = -{B\over 2A} \pm {B \over 2A}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and, on the one hand,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
-{B\over 2A} + {B \over 2A} = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`while, on the other hand,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
-{B\over 2A} - {B \over 2A} = -{2B\over 2A} = -{B\over A}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`so here too we find that the roots are `}<NoBreak><Math>{`$
x = 0
$`}</Math></NoBreak>{`
and `}<NoBreak><Math>{`$
x = -B/A
$`}</Math>{`.`}</NoBreak>{` (It must be the right answer!)`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 17.`}</b>{`
True or false (`}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{` are functions):`}</VerticalChunk><div class="spacer"></div><Grid column_first={true} with_padding={false} place_items="start" center_on_overflow={true} sm_cutoff={520} sm_cols={1} cols={2}><Item><VerticalChunk>{`i. `}<NoBreak><Math>{`$
f \circ g = (x \ra f(g(x)))
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`ii. `}<NoBreak><Math>{`$
g \circ f = (x \ra f(g(x)))
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`iii. `}<NoBreak><Math>{`$
f \circ g = (x \ra g(f(x)))
$`}</Math></NoBreak>{``}</VerticalChunk></Item><Item><VerticalChunk indent={true}>{`iv. `}<NoBreak><Math>{`$
g \circ f = (x \ra g(f(x)))
$`}</Math></NoBreak>{``}</VerticalChunk></Item></Grid><div class="spacer"></div><Solution solution_number={16}><VerticalChunk>{`The true statements are i, iv, because
`}<NoBreak><Math>{`$
f \circ g
$`}</Math></NoBreak>{` is the function that maps an 
input `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` to `}<NoBreak><Math>{`$
f(g(x))
$`}</Math>{`,`}</NoBreak>{` and symmetrically 
for `}<NoBreak><Math>{`$
g \circ f
$`}</Math>{`.`}</NoBreak>{` `}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 18.`}</b>{`
If `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{` are functions then we define 
(and not just us but people in general)`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f + g
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`to be`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
t \ra f(t) + g(t)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(use ‘`}<NoBreak><Math>{`$
x
$`}</Math>{`’`}</NoBreak>{` if you like), 
i.e., to be the function that applies `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` and
`}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{` separately and then takes the sum,
and we define `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
fg
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`to be`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
z \ra f(z)g(z)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(use ‘`}<NoBreak><Math>{`$
t
$`}</Math>{`’`}</NoBreak>{` if you like, hehe),
i.e., to be the function that applies `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` and 
`}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{` separately and then takes the product.
(These definitions are similar to how we define`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f \circ g
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`to be`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
u \ra f(g(u))
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`for the symbol “`}<NoBreak><Math>{`$
\circ
$`}</Math>{`”,`}</NoBreak>{` except that now we 
are defining the `}<i>{`sum`}</i>{` and `}<i>{`product`}</i>{` of functions,
instead of their _composition_, namely.)`}</VerticalChunk><VerticalChunk indent={true}>{`Given these definitions, which of the following
equalities hold, in general for all functions `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{`,
`}<NoBreak><Math>{`$
g
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
h
$`}</Math></NoBreak>{`?`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
f \circ (g + h) = (x \ra f(g(x)) + f(h(x)))
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
f \circ (g + h) = (x \ra f(g(x) + h(x)))
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
(g + h) \circ f = (x \ra h(f(x)) + g(f(x)))
$$`}</MathBlock><div class="spacer"></div><MathBlock>{`$$
(g + h) \circ f = (x \ra (g + h)(f(x)))
$$`}</MathBlock><div class="spacer"></div><Solution solution_number={17}><VerticalChunk>{`The first equality is false because the 
right-hand side is actually`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(f \circ g) + (f \circ h)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`not `}<NoBreak><Math>{`$
f \circ (g + h)
$`}</Math>{`;`}</NoBreak>{` the second equality is
true; the third equality is true even though you
would expect the right-hand side to be written `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x \ra g(f(x)) + h(f(x)))
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`with “`}<NoBreak><Math>{`$
g
$`}</Math>{`”`}</NoBreak>{` and “`}<NoBreak><Math>{`$
h
$`}</Math>{`”`}</NoBreak>{` switched (but addition is
commutative, so it doesn't matter); the fourth
equality is true: it is the definition of “`}<NoBreak><Math>{`$
\circ
$`}</Math></NoBreak>{`”.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 19.`}</b>{`
What sequence of geometric transformations 
of length no more than 3 maps`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
y = x^2
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`onto`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
y = Ax^2 + Bx + C
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`for constants `}<NoBreak><Math>{`$
A
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
B
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
C
$`}</Math></NoBreak>{` such that `}<NoBreak><Math>{`$
A \ne 0
$`}</Math></NoBreak>{`?`}</VerticalChunk><div class="spacer"></div><Solution solution_number={18}><VerticalChunk>{`Write`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
Ax^2 + Bx + C
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
A\Big(x^2 + {B \over A}x + {C\over A}\Big)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and, similarly to Exercise 14, write`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x^2 + {B \over A}x
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`so that, altogether, `}<NoBreak><Math>{`$
Ax^2 + Bx + C
$`}</Math></NoBreak>{`
becomes`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 \over 4A^2} + {C\over A}\right]
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`or `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
A\left[\Big(x + {B \over 2A}\Big)^2 - {B^2 - 4AC\over 4A^2}\right]
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`by putting things on a common denominator.
(We have endeavored to keep the minus sign 
out front of the common denominator fraction 
in order to maintain the most similarity with
the term “`}<NoBreak><Math>{`$
-{B^2\over 4A}
$`}</Math>{`”`}</NoBreak>{` of Exercise 14,
that also has a minus sign out front.)`}</VerticalChunk><VerticalChunk indent={true}>{`By direct analogy with Exercise 14, the three
transformations are thus...`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`1. horizontal translation by `}<NoBreak><Math>{`$
-{B \over 2A}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`2. vertical translation by `}<NoBreak><Math>{`$
{-{B^2 - 4AC \over 4A^2}}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`3. vertical scaling by `}<NoBreak><Math>{`$
A
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`...or...`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`1. vertical translation by `}<NoBreak><Math>{`$
{-{B^2 - 4AC \over 4A^2}}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`2. horizontal translation by `}<NoBreak><Math>{`$
-{B \over 2A}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`3. vertical scaling by `}<NoBreak><Math>{`$
A
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`...if we put the vertical translation first.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 20.`}</b>{`
What are the roots (i.e., solutions) `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` of`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
Ax^2 + Bx + C = 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`for constants `}<NoBreak><Math>{`$
A
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
B
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
C
$`}</Math></NoBreak>{` such that `}<NoBreak><Math>{`$
A \ne 0
$`}</Math></NoBreak>{`?`}</VerticalChunk><div class="spacer"></div><Solution solution_number={19}><VerticalChunk>{`The curve`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
y = Ax^2 + Bx + C
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`is obtained from the curve `}<NoBreak><Math>{`$
y = x^2
$`}</Math></NoBreak>{` by the following sequence of 
transformations (cf. Exercise 19):`}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`1. vertical translation by `}<NoBreak><Math>{`$
{-{B^2 - 4AC \over 4A^2}}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`2. horizontal translation by `}<NoBreak><Math>{`$
-{B \over 2A}
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CentralItalicDisplay>{`3. vertical scaling by `}<NoBreak><Math>{`$
A
$`}</Math></NoBreak>{``}</CentralItalicDisplay><div class="spacer"></div><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{``}</VerticalChunk><CenterDisplay>{`~`}</CenterDisplay><VerticalChunk>{``}</VerticalChunk><VerticalChunk indent={true}>{`On the one hand, if`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{B^2 - 4AC \over 4A^2} < 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`then`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
-{B^2 - 4AC \over 4A^2} > 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`and the vertical translation is _upward_, 
the curve detaches from the `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` axis never
to see it again, and there are no roots!`}</VerticalChunk><VerticalChunk indent={true}>{`On the other hand, if`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{B^2 - 4AC \over 4A^2} \geq 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`then the roots are given by`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x = -{B \over 2A} \pm \sqrt{B^2 - 4AC \over 4A^2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`by Exercise 15. `}<NoBreak><Math>{`$
\rightarrow
$`}</Math></NoBreak>{` ~The End~ `}<NoBreak><Math>{`$
\leftarrow
$`}</Math></NoBreak>{``}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 1.`}</i>{`
In fact,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\pm\sqrt{B^2 - 4AC \over 4A^2} = \pm {\sqrt{B^2 - 4AC} \over 2A}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(square both sides of the equation—in general,`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\pm E = \pm F
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as one set of two values equalling another 
set of two values, if and only if`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
|E| = |F|
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`or `}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
E^2 = F^2
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`—so that's why we say “square both sides”),
so the formula for the roots can also be written`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x = -{B \over 2A} \pm {\sqrt{B^2 - 4AC} \over 2A}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`or`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
x = {{-B \pm \sqrt{B^2 - 4AC}} \over 2A}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`as briefly flashed by, e.g., in Chapter 1.`}</VerticalChunk><VerticalChunk indent={true}><Pause></Pause>{``}<i>{`Note 2.`}</i>{`
If`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{B^2 - 4AC \over 4A^2} < 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`then`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
\sqrt{B^2 - 4AC \over 4A^2}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`does not exist, alerting you to the absence 
of roots, if you try to use the first formula 
we gave. Also`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{B^2 - 4AC \over 4A^2} < 0\iff B^2 - 4AC < 0
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`because `}<NoBreak><Math>{`$
4A^2 > 0
$`}</Math></NoBreak>{` for all `}<NoBreak><Math>{`$
A \ne 0
$`}</Math>{`,`}</NoBreak>{` 
so the second set of formulas would alert you
to the absence of roots in that case, as well.`}</VerticalChunk></Solution></Exercise><Exercise><VerticalChunk>{``}<b>{`Exercise 21.`}</b>{`
Summon your senses of extrapolation _&_ 
imagination to evaluate this expression:`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(f \ra x \ra h \ra {f(x+h) - f(x)\over h})(x \ra x^2)(5)(0.1)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`(Hint: The answer is a specific real number.)`}</VerticalChunk><div class="spacer"></div><Solution solution_number={20}><VerticalChunk>{`...in an expression such as...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x \ra x^3)(6)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...we pair the `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` with `}<NoBreak><Math>{`$
6
$`}</Math></NoBreak>{`...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_connection_x_6.svg"></Image><div class="spacer"></div><VerticalChunk>{`...and `}<NoBreak><Math>{`$
6
$`}</Math></NoBreak>{` becomes the value to use for `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{`
in “`}<NoBreak><Math>{`$
x^3
$`}</Math></NoBreak>{`”:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_connection_x_6_in_computation.svg"></Image><div class="spacer"></div><VerticalChunk>{`...; in an expression such as...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x \ra y \ra x^3y)(6)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...we also pair the `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` with `}<NoBreak><Math>{`$
6
$`}</Math></NoBreak>{`...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_connection_x_6_again.svg"></Image><div class="spacer"></div><VerticalChunk>{`...and `}<NoBreak><Math>{`$
6
$`}</Math></NoBreak>{` becomes the value to use for `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{`
in “`}<NoBreak><Math>{`$
y \ra x^3y
$`}</Math></NoBreak>{`”:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_connection_x_6_again_in_computation.svg"></Image><div class="spacer"></div><VerticalChunk>{`...(in this case the result is not a number,
but a function—a function is a mathematical 
object like another, after all); in an 
expression such as...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(x \ra y \ra x^3y)(6)(8)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...we pair the `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` with `}<NoBreak><Math>{`$
6
$`}</Math></NoBreak>{` and the `}<NoBreak><Math>{`$
y
$`}</Math></NoBreak>{` with `}<NoBreak><Math>{`$
8
$`}</Math></NoBreak>{`...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_connection_x_y_6_8.svg"></Image><div class="spacer"></div><VerticalChunk>{`...and `}<NoBreak><Math>{`$
6
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
8
$`}</Math></NoBreak>{` become respectively the 
values to use for `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
y
$`}</Math></NoBreak>{` in “`}<NoBreak><Math>{`$
x^3y
$`}</Math></NoBreak>{`”:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_connection_x_y_6_8_in_computation.svg"></Image><div class="spacer"></div><VerticalChunk>{`...; now in an expression such as...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
(f \ra x \ra h \ra {f(x+h) - f(x)\over h})(x \ra x^2)(5)(0.1)
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...we pair the `}<NoBreak><Math>{`$
f
$`}</Math></NoBreak>{` with `}<NoBreak><Math>{`$
x \ra x^2
$`}</Math>{`,`}</NoBreak>{` the 
`}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{` with `}<NoBreak><Math>{`$
5
$`}</Math>{`,`}</NoBreak>{` and the `}<NoBreak><Math>{`$
h
$`}</Math></NoBreak>{` with `}<NoBreak><Math>{`$
0.1
$`}</Math></NoBreak>{`...`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_connection_f_x_h.svg"></Image><div class="spacer"></div><VerticalChunk>{`...and `}<NoBreak><Math>{`$
x \ra x^2
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
5
$`}</Math></NoBreak>{` and `}<NoBreak><Math>{`$
0.1
$`}</Math></NoBreak>{` become
respectively the values to use for `}<NoBreak><Math>{`$
f
$`}</Math>{`,`}</NoBreak>{` `}<NoBreak><Math>{`$
x
$`}</Math></NoBreak>{`
and `}<NoBreak><Math>{`$
h
$`}</Math></NoBreak>{` in “`}<NoBreak><Math>{`$
{f(x + h) - f(x)\over h}
$`}</Math></NoBreak>{`”:`}</VerticalChunk><div class="spacer"></div><Image src="/images/svg_ch3_connection_f_x_h_in_computation.svg"></Image><div class="spacer"></div><VerticalChunk>{`...; evaluating...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{(x \ra x^2)(5 + 0.1) - (x \ra x^2)(5) \over 0.1}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...we...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{(x \ra x^2)(5.1) - (x \ra x^2)(5) \over 0.1}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...get...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{5.1^2 - 5^2 \over 0.1}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...this...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{26.01 - 25 \over 0.1}
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...`}<i>{`thiiis`}</i>{`...`}</VerticalChunk><div class="spacer"></div><MathBlock>{`$$
{1.01 \over 0.1} = 1.01 \times 10 = 10.1
$$`}</MathBlock><div class="spacer"></div><VerticalChunk>{`...result! (The answer is: ten point one.)`}</VerticalChunk></Solution></Exercise></Exercises></Chapter3> </>
  }