---
layout: post
published: true
mathjax: false
featured: false
comments: false
title: Continued Fractions
---
# Continued Fractions

Here is an introduction to continued fractions via the proto-typical example. The example should be easy enough to follow for a Calc One student -and possibly a very junior yet precocious algebra student. Regardless, the ideas are what count.

Reader, paint in broad strokes. Get the general picture first! Then set down to test your understanding via your own explorations and examples. Here in lies the secret to success.


## A Golden Example

Consider the expression

$$
1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{1+\ddots}}}
$$

<b>Q:</b> In what sense can we meaningfully interpret such an expression? 

<b>A:</b> Similar to the situation of the infinite sum (infinite series) -we need a notion of convergence.

## Convergence

$$
1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{1+\ddots}}}
$$

### Approximations

$$
1
, 
\quad
1+\dfrac{1}{1}
,
\quad
1+\dfrac{1}{1+\dfrac{1}{1}}
,
\quad
1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{1}}}
,
\quad
\dots
,
\quad
1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{1+\ddots}}}
$$

Which equals

$$
1
, 
\quad
2
,
\quad
\dfrac{3}{2}
,
\quad
\dfrac{5}{3}
,
\quad
\dots
,
\quad
?
$$

### Limit Definition

It should now be clear how we might like to define convergence. 

If the rational sequence limits to some real value, then the limit obtained is what we'd like to define our original expression to equal.

## Recursive Formula

Let

$$
x = 1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{1+\ddots}}} \, .
$$

Then naively we can write

$$
x = 1+\dfrac{1}{x} \, .
$$

### Solving the Recursive Formula

Let's solve for $x$:

* First, we multiply both sides by $x$:

$$
x^2 = x + 1.
$$

* Second, we subtract the RHS (right-hand side) from both sides:
    
$$
x^2 - x - 1 = 0.
$$

* Now we have a famous quadratic equation, which may easily be solved via the quadratic formula:

$$
x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \dfrac{1 \pm \sqrt{1 + 4}}{2} = \dfrac{1 \pm \sqrt{5}}{2}
$$

* We have two possible solutions -one positive and one negative. However, we note that solution must equal $1+\dfrac{1}{1+\cdots}$, which is clearly a postive number. Therefore, we have:

$$
x = \dfrac{1 + \sqrt{5}}{2} = \varphi,
$$

i.e. the Golden Ratio.

## The Ratios of Consecutive Fibonaccis

Assuming familiarity with the Fibonacci sequence, one might notice that our approximations from earlier:

$$
\dfrac{1}{1}
, 
\quad
\dfrac{2}{1}
,
\quad
\dfrac{3}{2}
,
\quad
\dfrac{5}{3}
,
\quad
\dots
$$

are, in fact, seemingly equal to

$$
\dfrac{F_1}{F_0}
, 
\quad
\dfrac{F_2}{F_1}
,
\quad
\dfrac{F_3}{F_2}
,
\quad
\dfrac{F_4}{F_3}
,
\quad
\dots
$$

where $F_n$ is the $n^{th}$ Fibonacci number.

This conjecture is indeed true. And it is easy enough to show given familiarity with the recursive definition of the Fibonaccis.

### Claim: $\dfrac{p_n}{q_n} = \dfrac{F_{n+1}}{F_n}$.

Proof: The proof is by induction. 

Assume that $\dfrac{p_n}{q_n} = \dfrac{F_{n+1}}{F_n}$ holds up to some $n$. Indeed, it does for small $n$ as we have already seen above.

First, we note that we have the our numerators $p_n$ and our denominators $q_n$ follow a recurrence relation since:

$$
\dfrac{p_{n+1}}{q_{n+1}} = 1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{\ddots}{1+1/1}}}} = 1 + \dfrac{1}{p_n/q_n} = \dfrac{p_n + q_n}{p_n}
$$

Thus, we have $p_{n+1} = p_n + p_{n-1}$ and $q_{n+1} = q_n + q_{n-1}$ (I'm glazing over some details -namely, the numerators and denominators are always relatively prime).

So, it follows from our induction hypothesis that $p_n = F_{n+1}$ and $q_n = F_n$, for all $n$. The result follows, as desired.

### Claim: $\dfrac{F_{n+1}}{F_n} \to \varphi .$ 

Proof: A rigourous proof requires calculus. However, our heuristic proof based upon solving the recursive formula should serve as our motivation of this fact.

## Conclusion

This concludes our first part. I will eventually be adding more results on continued fractions. Some of it will be more rigourous. Some will be less. Most will be well-known results, but I hope to eventually get to some lesser known results and some modern day applications of the old ideas.
