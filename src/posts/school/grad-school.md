---
title:  "Is Grad School Worth it?"
date:   2017-10-30 12:34:20 -0400
---
{% assign undergrad = 72000 %}
{% assign grad = 102000 %}
{% assign tuition = 9000 %}

Today, my Aunt told me:
> More lucrative job opportunities await you at my company with a Master's Degree.

Her company's not the first to tell me that about Computer Science, especially when they're talking about "machine learning" and other "data science" careers. Sick of school, sick of hearing that I need to pursue more school, and not really caring what field I end up in, I decided to find out the truth about salaries myself. Near the bottom of my Computer Science [department's website,](https://www.csc.ncsu.edu/future-students/) I found out that the average Computer Science undergrad makes {{ undergrad | usd }}, while the average graduate makes {{ grad | usd }}. Also, [tuition](https://studentservices.ncsu.edu/your-money/financial-aid/estimated-cost-of-attendance/undergraduate-student/) is around {{ tuition | usd }} at the time of this post. Also, we'll presume interest rates are at a conservative 7%. Well, get strapped in for some math!

{% assign t1 = undergrad | times: 2 %}
{% assign t2 = tuition | times: 4 %}
{% assign t3 = t1 | plus: t2 %}
{% assign part_time = 20000 %}
{% assign cost = t3 | minus: part_time %}

To get a Master's, it'll cost me \\({{ tuition | usd }} * 4\ semesters + {{ undergrad | usd }} * 2\ years = {{ t3 | usd }}\\). We can even be technical and subtract the part time jobs I work during the semester now, which would be {{ part_time | usd }}/year at most. Then, it'll cost me \\({{ t3 | usd }} - {{ part_time | usd }} = {{ cost | usd }}\\) to get my Master's, which can be paid back in just 3 years of working my new fancy graduate job, right?

{% assign diff = grad | minus: undergrad %}
{% assign years_lost = cost | divided_by: diff %}

# Wrong.

{% assign rate = 1.07 | pow: years_lost %}

You have to look at the ___difference___ between {{ grad | usd }} and {{ undergrad | usd }}, which is only {{ diff | usd }}. In that case, it will take \\({{ cost | usd }} / {{ diff | usd }} = {{ years_lost }}\ years\\) to pay off the _opportunity_ cost of grad school, not a meager 3! Not to mention that all the money I save by graduating early (at least 50%) is going to be growing in [index funds](https://www.mrmoneymustache.com/2011/05/18/how-to-make-money-in-the-stock-market/) at a rate of 7%, which will amount to an extra \\({{ undergrad | times: rate | minus: undergrad | usd }}\\) over those {{ years_lost }} years. On the flipside, the graduate student will be in debt \\({{ t2 | usd }}\\), and have a _negative_ interest rate on that!

# 5 years in the future

But oh, I'm not so Smart if I don't factor in after those 5 years. Most people work 40 years, so getting that extra {{ diff | usd }}/year really pays off in the long term, doesn't it? Nope. _How many 40 year olds in computer science get paid more because they have a Master's?_ Also, do you really want to work longer? Personally, I want to [go crazy and retire in my 30s](http://www.mrmoneymustache.com/2011/04/06/meet-mr-money-mustache/) so I can go out and make a difference in the world doing what I love, not stuck behind a desk until I'm so old I only have 20% of my weakened life left.

Let's say even with lots of job hunting it will take me 5 years to "catch up" to a master degree's salary, and that it happens in one big pay raise (rather than linearly, like it probably would). Then I'm losing the starting gap over 5 years, which is \\(({{grad | usd}}-{{undergrad | usd}})\*5=$150k\\), still less than \\($152k\\) I lose by going to school. Once you factor in the 3% income tax bracket jump at $92k (or $153k if I'm married), it's probably more around \\($140k\\). More importantly, you have to factor in that I'm going to be saving at least half my salary for those 2 years in [index funds](), which amounts to \\(70*1.07^5=$28k\\) extra over those 5 years, which will compound even more in nice IRAs over my lifetime. So really, getting a Master's would lose me around \\($152k+$28k-$140k=$40k\\), just in 5 years! Jeez, \\($40k\\) is a lot of money!

Soon, I want to make (or find) a pretty tool that can do the math year by year to account for different savings rates and changing salaries! Coming soon™.

[//]: # (Future note to self: http://www.gastonsanchez.com/visually-enforced/opinion/2014/02/16/Mathjax-with-jekyll/)