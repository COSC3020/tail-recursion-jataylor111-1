# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

---------------------------------------------------------------------------------

My time complexity is $\Theta(n)$

First of all there is a single recursive call and a constant amount of work so, $T(n) = T(n - 1) + 1$

then, $T(n) = T(n - 2) + 2$

$T(n) = T(n - 3) + 3$

$T(n) = T(n - i) + i$

now, $n - i = 1 \rightarrow -i = 1 - n \rightarrow i = n - 1$

next, $T(n) = T(1) + n - 1$ = $1 + n - 1$ = $T(n) = n$, so $\Theta(n)$

now this is quite different than the usual time complexity, which, according to medium, is $2^n$.  This means that a tail recursive fibonacci function is significantly more efficient than a non-tail recursive one.

As you could probably tell the slides were quite helpful in making this 

I knew how the fibonnaci sequence worked already, but reading through this helped me think about how I would implement the tail recursive version (https://en.wikipedia.org/wiki/Fibonacci_sequence)

I used this link to get the runtime of the non-tail recursive fibonacci function (https://towardsdatascience.com/dynamic-programming-i-python-8b20387870f5)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
