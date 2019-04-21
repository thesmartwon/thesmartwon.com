import React from 'react'
import Link from '../../components/link'
import RetirementCalc from '../../components/retirement-calc'
import PostTemplate from '../../templates/post-template'
import { markdownRemark } from './early-retirement.meta'


export default function EarlyRetirement() {
  return (
    <PostTemplate data={{markdownRemark}}>
      <p>Brilliant, you'd like to quit your day job and do something
        more meaningful with your life. Now how do you do it?</p>
      <p>Well, your investments need to make more money per year than
        your expenses. Great news: with just a $70k salary (
        <Link href="https://www.mrmoneymustache.com/2013/07/25/50-jobs-over-50000-without-a-degree-part-1">no college degree required</Link>
        ) living off $24k a year it will take you approximately 11 years to retire even if you have nothing saved.
        Don't believe me? Let's do the math.
      </p>
      <RetirementCalc />
      <h2>The Catch</h2>
      <p>The biggest catch is that you're betting on the US economy.
        Specifically, we are assuming on average a
        <Link href="https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"> 10% growth per year </Link>
        of the
        <Link href="https://www.tradingview.com/symbols/AMEX-SPY"> {'S&P 500'} </Link>, which is an index that adjusts to follow the
        500 largest U.S. publicly traded companies by market value.
      </p>
      <h3>$24k/year</h3>
      <p>This isn't an unrealistic budget,
        <Link href="https://www.mrmoneymustache.com/2017/05/19/2016-spending"> even for a family of 4. </Link>
        <Link href="https://rootofgood.com/developing-a-retirement-budget"> Here's another testimony from a family of 5. </Link>
        The best part about low spending is that you get to save more while you are working, and the total nest egg you
        have to save until gets smaller. It is the single most important factor in the entire equation and the easiest one
        for you to minimize. If you were to live off $34k/year instead, it would take 15 years and a nest egg of over $1mil to retire!
      </p>
      <p>You need a budget. Frugality will pay off. If you have one particulary bad area of spending, as chef Ramsay says,
        [wake up!](https://www.youtube.com/watch?v=BsFeplo_6Pg)</p>
      <h2>Smaller Catches</h2>
      These estimates are really quite conservative. Historically, the US economy is the safest bet to make.
      <h3>Safe withdrawal rate</h3>
      <p>This is the rate you can withdraw from your investments per-year for the entire rest of your life while feeling "safe"
        in nearly every market condition. The number 3.5% is based off of a
        <Link href="https://www.madfientist.com/safe-withdrawal-rate"> 45 year time horizon. </Link> To see actual chances of success,
        use a calculator like <Link href="https://firecalc.com">FireCalc</Link> or
        <Link href="http://cfiresim.com"> cFIREsim.</Link> If you're fashionably late to the party, simply adjust your
        time horizon to sooner and use a higher percentage such as 4% or 6%.
      </p>
      <h3>Inflation rate</h3>
      <p>To adjust for rising living expenses from inflation, we assume a high inflation rate of 3%. We calculate our investments growing
        at 7% instead of 10%. Actual inflation rates fluctuate, which you can view per-month
        <Link href="https://tradingeconomics.com/united-states/inflation-cpi"> here.</Link>
      </p>
      <h2>Retirement accounts</h2>
      <p>This is the fun part where we get to dodge taxes and take advantage of every tax-deffered account available. Accounts are
        ranked in terms of advantages.</p>
      <h3>1. Health Savings Account (HSA)</h3>
      <p>HSAs are tax deductable, and earnings are tax-exempt. Withdrawals from a health savings account are tax-free as long you
        use the money to pay for qualified medical expenses. All you need are receipts of medical expenses from <i>any time period</i>,
        so you can pay out-of-pocket for expenses now, save the receipt of your payment, and later withdraw money from your HSA to
        "pay" for that expense long after it's been paid. This makes them the best tax-advantaged account. They are offered through
        your employer, usually along with a high-deductable medical plan. The contribution limit is $3450 for 2018, and was $3400 for 2017.
      </p>
      <h3>2. Individual Retirement Account (IRA)</h3>
      <p>IRAs come in two flavors, traditional and Roth. Traditional IRA contributions are tax-deductible, but withdrawals are taxed
        at ordinary income tax rates. Roth IRAs provide no tax break for contributions, but earnings and withdrawals are tax-free.
        For early retirees, Roth IRAs are the way to go because of the tax-free growth, which will be very high! The limit is $5500
        towards all IRAs for 2018 and 2017. To
        <Link href="https://www.madfientist.com/traditional-ira-vs-roth-ira"> withdraw money from your Roth without penalty</Link>,
        <Link href="https://rootofgood.com/roth-ira-conversion-ladder-early-retirement"> Roth Laddering</Link> is possible if you know
        how much you want to withdraw 5 years in advance.</p>
      <h3>3. 401k</h3>
      <p>401k plans vary per-employer, but the gist is that you can contribute up to $18,000 of tax-deductable income per-year.
        Gains from the account are tax-deffered. 40% of employers do a 6% match on your contribution, but usually only up to 3% of
        your salary. 38% of employers do a 3% match (but also only up to 3% of your salary), which is a nice little added bonus.
        However,don't count on the employer match, especially since technicalities vary. If you're self-employed, a solo 401k also
        permits your business entity to contribute up to 25% of your salary to your 401k up to a total of $54,000. To withdraw money
        early without eating a 10% penalty,
        <Link href="http://www.gcbaonline.com/retirement/understanding-irs-72t-withdraws-rule-calculator"> rule 72t </Link>
        can be exercised.</p>
      <h3>4. Taxable account</h3>
      <p>If you're a savaholic, after your 401k your second largest account will unfortunately be a taxable account. Money put into
        the account is not tax-deffered, and gains are taxed as income. However, withdrawals have no penalty or restrictions (except
        for what your brokerage states)!</p>
      <h1>Conclusion</h1>
      <p>If you want more control over the numbers, you can play around with
        <Link href="https://gist.github.com/thesmartwon/acab1443532c03f27accc04c254355f1"> my (incomplete) simple Python program, </Link>
        which is indeed an estimate. However, based on my actual tax returns so far it has proved to be accurate.
        I hope you realize retirement is closer than you think! Remember, your mileage may vary!</p>
    </PostTemplate>
  )
}
