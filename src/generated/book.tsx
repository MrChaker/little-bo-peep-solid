
        const Book = () => {
            return <><div  title="A Few Refreshers" ><div  ><span class="text"><Span bold={true}>Square Roots.</Span> You might remember that “minus times minus is plus” and that “plus times plus is plus”. (Why? The enemy of my enemy is my friend.) So any nonzero number multiplied by itself is positive. For example,                </span><MathBlock>{`$$ (-2) \times (-2) = 4 $$`}</MathBlock><Span class="text-center">and</Span><MathBlock>{`$$ 2 \times 2 = 4 $$`}</MathBlock><span class="text">are both positive. But <Math>{`$\sqrt{4}$`}</Math> is, by definition, the unique <Span italic={true}>nonnegative</Span> solution to <span class="nobreak"><Math>{`$x^2 = 4$`}</Math>. </span>Hence, and whether you like it or not,</span><MathBlock>{`$$\sqrt{(-2)^2} = 2$$`}</MathBlock><div  src="/images/svg_cloud_minus_two_squared.svg" offset_y="-1rem" offset_x="-3rem" padding="40px" use_squiggle_on_mobile={false} ></div><span class="text">and, in particular, it is <Span italic={true}>not</Span> true that</span><MathBlock>{`$$ \sqrt{x^{2}} \rt{0.1} = \rt{0.1} x $$`}</MathBlock><span class="text">for every real number <span class="nobreak"><Math>{`$x$`}</Math>. </span>Instead we have</span><MathBlock>{`$$ \sqrt{x^{2}} \rt{0.1} = \rt{0.1} |x| $$`}</MathBlock><span class="text">for every real number <span class="nobreak"><Math>{`$x$`}</Math>, </span>where <Math>{`$|x|$`}</Math> denotes the absolute value of <span class="nobreak"><Math>{`$x$`}</Math>. </span></span><span class="text">(Nb: If ever you want to indicate both solutions of the equation <Math>{`$x^2 = 4$`}</Math> you can always use the notation <span class="nobreak">“<Math>{`$\pm \sqrt{4}$`}</Math>”.   </span>This is what happens, for example, in the maybe-well-known formula        </span><MathBlock>{`$$ x = {-b \pm \sqrt{b^2 - 4ac} \over 2a} $$`}</MathBlock><span class="text">for the solutions to the quadratic equation <span class="nobreak"><Math>{`$ax^2 + bx + c = 0$`}</Math>.) </span></span><span class="text">Now we can ponder, say,</span><MathBlock>{`$$ \sqrt{0.5} $$`}</MathBlock><span class="text">whose value is—by definition—the unique nonnegative solution to        </span><MathBlock>{`$$ x^2 = 0.5. $$`}</MathBlock><span class="text">As beginners, there's nothing wrong with trying to solve this equation by trial and error. With <span class="nobreak"><Math>{`$x = {1\over 4}$`}</Math>, </span>for example, we find</span><MathBlock>{`$$ x^2 = {1\over 4}\times{1\over 4} = {1\over 16} $$`}</MathBlock><span class="text">so <Math>{`$x = {1\over 4}$`}</Math> is not a solution of the equation, being apparently too small. Increasing <Math>{`$x$`}</Math> to <span class="nobreak"><Math>{`$x = {1\over 2}$`}</Math>, </span>say, we find</span><MathBlock>{`$$ x^2 = {1\over 2}\times{1\over 2} = {1\over 4} $$`}</MathBlock><span class="text">which is better, since <Math>{`$1/4$`}</Math> is closer to <span class="nobreak"><Math>{`$1/2$`}</Math>, </span>but still too small. Increasing <Math>{`$x$`}</Math> by <Math>{`$1/4$`}</Math> again, say, to <span class="nobreak"><Math>{`$x = {3\over 4}$`}</Math>, </span>we find</span><MathBlock>{`$$ x^2 = {3\over 4}\times{3\over 4} = {9\over 16} $$`}</MathBlock><span class="text">which—surprise!—is actually pretty close to <span class="nobreak"><Math>{`$1/2$`}</Math>, </span>as <span class="nobreak"><Math>{`$1/2 = 8/16$`}</Math>. </span>And since <span class="nobreak"><Math>{`$9/16 > 0.5$`}</Math>, </span><Math>{`$\sqrt{0.5}$`}</Math> must be a little <Span italic={true}>less</Span> than <span class="nobreak"><Math>{`${3\over 4} = 0.75$`}</Math>. </span>       </span><span class="text">In last resort, and in reasonably good agreement with our observations, a calculator reveals that</span><MathBlock>{`$$ \sqrt{0.5} = 0.7071067... $$`}</MathBlock><span class="text">where the decimals trail off with no pattern. (This number is irrational.) Even so, the fact that <Math>{`$\sqrt{0.5}$`}</Math> is <Span italic={true}>greater</Span> than <Math>{`$0.5$`}</Math> is often perceived as counterintuitive.</span><span class="text">You can think of it this way: multiplying a value by <span class="nobreak"><Math>{`$0.7071$`}</Math>, </span>or approximately <span class="nobreak"><Math>{`$\sqrt{0.5}$`}</Math>, </span>is like taking <Math>{`$70.71\%$`}</Math> of that value—for example, say,    </span><MathBlock>{`$$ 605 \cdot 0.7071 = 427.7955 $$`}</MathBlock><span class="text">is <Math>{`$70.71\%$`}</Math> of <span class="nobreak"><Math>{`$605$`}</Math>, </span>and so on—so if we multiply <Span italic={true}>twice</Span> by <Math>{`$0.7071$`}</Math> we obtain “<Math>{`$70.71\%$`}</Math> of <span class="nobreak"><Math>{`$70.71\%$`}</Math>”   </span>and it just so happens that “<Math>{`$70.71\%$`}</Math> of <span class="nobreak"><Math>{`$70.71\%$`}</Math>”   </span>is close to <span class="nobreak"><Math>{`$50\%$`}</Math>. </span>                   </span><span class="text">The point is: if “<Math>{`$X\%$`}</Math> of <span class="nobreak"><Math>{`$X\%$`}</Math>”   </span>equals <span class="nobreak"><Math>{`$50\%$`}</Math>, </span>then, of course, <span class="nobreak"><Math>{`$\rt{0.03}X > 50$`}</Math>—that   </span>much seems logical—and, with a little thought, the same phenomenon explains why <span class="nobreak"><Math>{`$\sqrt{0.5} > 0.5$`}</Math>. </span>               </span></div><div  ><span class="text"><Span bold={true}>Fractions and Division.</Span> An elementary fraction, or division, such as</span><MathBlock>{`$$ {50 \over 2} $$`}</MathBlock><span class="text">can be thought of in a few different ways:</span><div  ><span class="text">Fifty halves (i.e., <span class="nobreak"><Math>{`$50 \times {1\over 2}$`}</Math>). </span></span><span class="text">The size obtained when something of size fifty is divided into two equal parts (answer: <span class="nobreak"><Math>{`$25$`}</Math>). </span></span><span class="text">The number of times that <Math>{`$2$`}</Math> goes into <Math>{`$50$`}</Math> (answer: <span class="nobreak"><Math>{`$25$`}</Math>, </span>because it takes twenty-five <span class="nobreak"><Math>{`$2$`}</Math>'s </span>to make up <span class="nobreak"><Math>{`$50$`}</Math>). </span></span></div></div></div></>;
        };
        
        export default Book;
    