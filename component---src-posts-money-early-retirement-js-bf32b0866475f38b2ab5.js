(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,a,t){"use strict";var n=t(11),r=t(8),s=t.n(r),l=(t(91),t(89),t(99),t(100),t(39),t(87)),i=t(92),o=(t(106),function(e){var a=e.path.split("/").filter(function(e){return e});return(a=a.map(function(t){return function(e,a,t){var n="",r=a,s=Array.isArray(r),l=0;for(r=s?r:r[Symbol.iterator]();;){var o;if(s){if(l>=r.length)break;o=r[l++]}else{if((l=r.next()).done)break;o=l.value}if(n+="/"+o,e===o)break}return{name:Object(i.a)(e),path:n,isActive:n===t}}(t,a,e.path)})).unshift({name:"Home",path:"/",isActive:!1}),n.a.createElement("nav",{className:"breadcrumb is-marginless is-centered","aria-label":"breadcrumbs"},n.a.createElement("ul",null,a.map(function(e){return n.a.createElement("li",{key:e.name,className:e.isActive?"is-active":""},n.a.createElement(l.a,{href:e.path},e.name))})))});t(107);function c(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"column is-8 is-offset-2"},e.javascript&&n.a.createElement("noscript",{key:"noscript"},"Some things might not work because Javascript is disabled, but you aren't missing out on much."),n.a.createElement(o,{path:e.path}),n.a.createElement("div",{className:"section titles-section"},e.title,e.subtitle),e.children))}t.d(a,"a",function(){return c}),c.propTypes={title:s.a.node,subtitle:s.a.node,javascript:s.a.bool,children:s.a.node,path:s.a.string},c.defaultProps={javascript:!1}},121:function(e,a){e.exports={markdownRemark:{timeToRead:4,frontmatter:{title:"How to Retire Early",date:"2018-12-18 21:45:00 -0400",dateShort:"2018-12-18",dateLong:"Decemeber 18, 2018",javascript:!0},excerpt:"Brilliant, you'd like to quit your day job and do something more meaningful with your life. Now how do you do it?",fields:{slug:"/posts/money/early-retirement"}}}},74:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return o}),t.d(a,"pageQuery",function(){return c});var n=t(11),r=t(8),s=t.n(r),l=t(88),i=t(105);function o(e){var a=e.data,t=e.children,r=a.markdownRemark,s=r.frontmatter,o=r.html,c=r.timeToRead,m=r.fields;return n.a.createElement(i.a,{title:n.a.createElement("h1",{className:"title is-2"},s.title),subtitle:n.a.createElement("span",{className:"has-text-grey"},n.a.createElement("time",{dateTime:s.dateShort},s.dateLong),"· ",c," min read"),javascript:s.javascript,path:m.slug},n.a.createElement(l.Helmet,{title:s.title,defer:!1}),t?n.a.createElement("div",{className:"content is-medium"},t):n.a.createElement("div",{className:"content is-medium",dangerouslySetInnerHTML:{__html:o}}))}o.propTypes={data:s.a.shape({markdownRemark:s.a.shape({html:s.a.string,timeToRead:s.a.number.isRequired,frontmatter:s.a.shape({title:s.a.string,dateShort:s.a.string,dateLong:s.a.string,javascript:s.a.bool}).isRequired,fields:s.a.shape({slug:s.a.string}).isRequired}).isRequired}).isRequired};var c="1304987295"},80:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(87),s=(t(109),t(39),t(32),t(45),t(110),t(112),t(91),t(117)),l=t.n(s),i=(t(118),t(119),function(e,a){return e>a?a:e}),o=function(e,a){return e>a?e:a},c=[.1,.12,.22,.24,.32,.25,.37],m={single:[0,9700,39475,84200,160725,204100,510300],married:[0,19400,78950,168400,321450,408200,612350],head:[0,13850,52850,84200,160700,204100,510300]},u={single:12200,married:24400,head:18350},h=function(e){return Object.values(e).reduce(function(e,a){return e+a})},d=function(e,a,t,n,r,s,l,d){for(var p=[],f=Object.assign({},d),y=h(f),E=function(t){var d=function(e,a,t){for(var n=0,r=e-u[a]-t.k401-t.hsa,s=m[a],l=1;l<s.length;l++){var o=i(r,s[l]-s[l-1]);r-=o,n+=o*c[l]}return n+.352*r}(e,r,l)+function(e,a){return.05499*(e-8750-a.hsa-a.k401)}(e,l),E=e-d-s,b={hsa:o(i(E,l.hsa),0),k401:o(i(E-l.hsa,l.k401),0),ira:o(i(E-l.hsa-l.k401,l.ira),0),afterTax:o(E-l.hsa-l.k401-l.ira,0)},w={};Object.keys(f).forEach(function(e){w[e]=f[e]*n,f[e]+=w[e]}),Object.keys(b).forEach(function(e){return f[e]+=b[e]}),y=h(f),p.push({year:t,income:e,tax:d,accounts:Object.assign({},f),growth:w,contributions:b,total:y}),e*=1+a},b=(new Date).getFullYear();y*t<s;b++)E(b);return p},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={income:7e4,status:"single",expenses:24e3,desiredContributions:{hsa:3500,ira:6e3,k401:19e3},k401match:3,initialBalances:{hsa:0,ira:0,k401:0,afterTax:0},raise:2,safeWithdrawal:3.5,effectiveGrowth:7,showGains:!1,showContributions:!1,tabShown:1},t.setDesired=function(e,a){t.state.desiredContributions[e]=Number(a),t.setState({desiredContributions:t.state.desiredContributions})},t.setBalance=function(e,a){t.state.initialBalances[e]=Number(a),t.setState({initialBalances:t.state.initialBalances})},t.format=function(e){return Math.round(e/100)/10+"k"},t}return l()(a,e),a.prototype.render=function(){var e=this,a=d(this.state.income,this.state.raise/100,this.state.safeWithdrawal/100,this.state.effectiveGrowth/100,this.state.status,this.state.expenses,this.state.desiredContributions,this.state.initialBalances),t=0;a.forEach(function(e){return t+=Object.values(e.contributions).reduce(function(e,a){return e+a})});var s=a[a.length-1].total;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"tabs is-centered is-boxed"},n.a.createElement("ul",null,[{num:1,caption:"Taxes"},{num:2,caption:"Desired contributions"},{num:3,caption:"Initial balances"},{num:4,caption:"Assumptions"}].map(function(a){return n.a.createElement("li",{key:a.num,className:e.state.tabShown===a.num?"is-active":""},n.a.createElement("a",{onClick:function(){return e.setState({tabShown:a.num})}},a.caption))}))),1===this.state.tabShown&&n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Income"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-success",type:"number",step:"1000",value:this.state.income,onChange:function(a){return e.setState({income:Number(a.target.value>2e4?a.target.value:2e4)})}})),n.a.createElement("p",{className:"help"},"Your salary")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Expenses"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-danger",type:"number",step:"100",value:this.state.expenses,onChange:function(a){return e.setState({expenses:Number(a.target.value)})}})),n.a.createElement("p",{className:"help"},"This is the most important variable")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Status"),n.a.createElement("div",{className:"control select is-warning"},n.a.createElement("select",{onChange:function(a){return e.setState({status:a.target.value})}},Object.keys(m).map(function(a){return n.a.createElement("option",{value:a,key:a,selected:a===e.state.status},a)}))),n.a.createElement("p",{className:"help"},"Your federal tax status"))),2===this.state.tabShown&&n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"HSA"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.desiredContributions.hsa,onChange:function(a){return e.setDesired("hsa",a.target.value)}})),n.a.createElement("p",{className:"help"},"Desired HSA contribution")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"401k"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.desiredContributions.k401,onChange:function(a){return e.setDesired("k401",a.target.value)}})),n.a.createElement("p",{className:"help"},"Desired 401k contribution")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"401k Match"),n.a.createElement("div",{className:"control has-icons-right",style:{width:"7rem"}},n.a.createElement("input",{className:"input is-primary",type:"number",step:"1",value:this.state.k401match,onChange:function(a){return e.setState({k401match:Number(a.target.value)})}}),n.a.createElement("span",{className:"icon is-right"},n.a.createElement("i",null,"%"))),n.a.createElement("p",{className:"help"},"Employer's match"))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"IRA"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.desiredContributions.ira,onChange:function(a){return e.setDesired("ira",a.target.value)}})),n.a.createElement("p",{className:"help"},"Desired IRA contribution"))),3===this.state.tabShown&&n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"HSA"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.initialBalances.hsa,onChange:function(a){return e.setBalance("hsa",a.target.value)}})),n.a.createElement("p",{className:"help"},"Initial HSA balance")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"401k"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.initialBalances.k401,onChange:function(a){return e.setBalance("k401",a.target.value)}})),n.a.createElement("p",{className:"help"},"Initial 401k balance")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"IRA"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.initialBalances.ira,onChange:function(a){return e.setBalance("ira",a.target.value)}})),n.a.createElement("p",{className:"help"},"Initial IRA balance")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"After tax"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.initialBalances.afterTax,onChange:function(a){return e.setBalance("afterTax",a.target.value)}})),n.a.createElement("p",{className:"help"},"Initial after tax accounts balance"))),4===this.state.tabShown&&n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Safe Withdrawal Rate"),n.a.createElement("div",{className:"control has-icons-right"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"0.25",value:this.state.safeWithdrawal,onChange:function(a){return e.setState({safeWithdrawal:Number(a.target.value)})}}),n.a.createElement("span",{className:"icon is-right"},n.a.createElement("i",null,"%"))),n.a.createElement("p",{className:"help"},n.a.createElement(r.a,{href:"https://www.madfientist.com/safe-withdrawal-rate/"},"Nest Egg * safeWithdrawal > Expenses"))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Effective Growth Rate"),n.a.createElement("div",{className:"control has-icons-right"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"0.5",value:this.state.effectiveGrowth,onChange:function(a){return e.setState({effectiveGrowth:Number(a.target.value)})}}),n.a.createElement("span",{className:"icon is-right"},n.a.createElement("i",null,"%"))),n.a.createElement("p",{className:"help"},n.a.createElement(r.a,{href:"https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"},"Average ","S&P"," 500 Growth")," -",n.a.createElement(r.a,{href:"https://tradingeconomics.com/united-states/inflation-cpi"}," Inflation"))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Raise Rate"),n.a.createElement("div",{className:"control has-icons-right"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"0.5",value:this.state.raise,onChange:function(a){return e.setState({raise:Number(a.target.value)})}}),n.a.createElement("span",{className:"icon is-right"},n.a.createElement("i",null,"%"))),n.a.createElement("p",{className:"help"},"How fast you progress in your career"))),n.a.createElement("hr",null),n.a.createElement("table",{className:"table is-narrow is-fullwidth"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Year"),n.a.createElement("th",null,"Income"),n.a.createElement("th",null,"Tax"),n.a.createElement("th",null,"HSA"),n.a.createElement("th",null,"401k"),n.a.createElement("th",null,"IRA"),n.a.createElement("th",null,"After Tax"),n.a.createElement("th",null,"Nest Egg"))),n.a.createElement("tbody",null,a.map(function(a){return n.a.createElement("tr",{key:a.year},n.a.createElement("td",null,a.year),n.a.createElement("td",null,e.format(a.income)),n.a.createElement("td",null,e.format(a.tax)),n.a.createElement("td",null,e.format(a.accounts.hsa),e.state.showContributions&&n.a.createElement("span",{className:"tag is-success"},"+",e.format(a.contributions.hsa))),n.a.createElement("td",null,e.format(a.accounts.k401),e.state.showContributions&&n.a.createElement("span",{className:"tag is-success"},"+",e.format(a.contributions.k401)),e.state.showGains&&n.a.createElement("span",{className:"tag is-primary"},"+",e.format(a.growth.k401))),n.a.createElement("td",null,e.format(a.accounts.ira),e.state.showContributions&&n.a.createElement("span",{className:"tag is-success"},"+",e.format(a.contributions.ira)),e.state.showGains&&n.a.createElement("span",{className:"tag is-primary"},"+",e.format(a.growth.ira))),n.a.createElement("td",null,e.format(a.accounts.afterTax),e.state.showContributions&&n.a.createElement("span",{className:"tag is-success"},"+",e.format(a.contributions.afterTax)),e.state.showGains&&n.a.createElement("span",{className:"tag is-primary"},"+",e.format(a.growth.afterTax))),n.a.createElement("td",null,e.format(a.total)))}))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"control"},n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",checked:this.state.showGains,onChange:function(a){return e.setState({showGains:a.target.checked})}}),"Show gains")),n.a.createElement("div",{className:"control",style:{marginLeft:"1rem"}},n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",checked:this.state.showContributions,onChange:function(a){return e.setState({showContributions:a.target.checked})}}),"Show contributions"))),n.a.createElement("p",null,"In this situation, you have to save ",this.format(t)," over ",a.length," years. Yet, through the magic of compounding interest, when you retire you have"," "+this.format(s)," and can safely withdraw"," "+this.format(s*this.state.safeWithdrawal)," per year, which will meet your"," "+this.format(this.state.expenses)," of living expenses."))},a}(n.a.Component),f=t(74),y=t(121);function E(){return n.a.createElement(f.default,{data:{markdownRemark:y.markdownRemark}},n.a.createElement("p",null,"Brilliant, you'd like to quit your day job and do something more meaningful with your life. Now how do you do it?"),n.a.createElement("p",null,"Well, your investments need to make more money per year than your expenses. Great news: with just a $70k salary (",n.a.createElement(r.a,{href:"https://www.mrmoneymustache.com/2013/07/25/50-jobs-over-50000-without-a-degree-part-1"},"no college degree required"),") living off $24k a year it will take you approximately 12 years to retire even if you have nothing saved. Don't believe me? Let's do the math."),n.a.createElement(p,null),n.a.createElement("h2",null,"The Catch"),n.a.createElement("p",null,"The biggest catch is that you're betting on the US economy. Specifically, we are assuming on average a",n.a.createElement(r.a,{href:"https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"}," 10% growth per year "),"of the",n.a.createElement(r.a,{href:"https://www.tradingview.com/symbols/AMEX-SPY"}," ","S&P 500"," "),", which is an index that adjusts to follow the 500 largest U.S. publicly traded companies by market value."),n.a.createElement("h3",null,"$24k/year"),n.a.createElement("p",null,"This isn't an unrealistic budget,",n.a.createElement(r.a,{href:"https://www.mrmoneymustache.com/2017/05/19/2016-spending"}," even for a family of 4. "),n.a.createElement(r.a,{href:"https://rootofgood.com/developing-a-retirement-budget"}," Here's another testimony from a family of 5. "),"The best part about low spending is that you get to save more while you are working, and the total nest egg you have to save until gets smaller. It is the single most important factor in the entire equation and the easiest one for you to minimize. If you were to live off $34k/year instead, it would take 15 years and a nest egg of over $1mil to retire!"),n.a.createElement("p",null,"You need a budget. Frugality will pay off. If you have one particulary bad area of spending, as chef Ramsay says, [wake up!](https://www.youtube.com/watch?v=BsFeplo_6Pg)"),n.a.createElement("h2",null,"Smaller Catches"),"These estimates are really quite conservative. Historically, the US economy is the safest bet to make.",n.a.createElement("h3",null,"Safe withdrawal rate"),n.a.createElement("p",null,'This is the rate you can withdraw from your investments per-year for the entire rest of your life while feeling "safe" in nearly every market condition. The number 3.5% is based off of a',n.a.createElement(r.a,{href:"https://www.madfientist.com/safe-withdrawal-rate"}," 45 year time horizon. ")," To see actual chances of success, use a calculator like ",n.a.createElement(r.a,{href:"https://firecalc.com"},"FireCalc")," or",n.a.createElement(r.a,{href:"http://cfiresim.com"}," cFIREsim.")," If you're fashionably late to the party, simply adjust your time horizon to sooner and use a higher percentage such as 4% or 6%."),n.a.createElement("h3",null,"Inflation rate"),n.a.createElement("p",null,"To adjust for rising living expenses from inflation, we assume a high inflation rate of 3%. We calculate our investments growing at 7% instead of 10%. Actual inflation rates fluctuate, which you can view per-month",n.a.createElement(r.a,{href:"https://tradingeconomics.com/united-states/inflation-cpi"}," here.")),n.a.createElement("h2",null,"Retirement accounts"),n.a.createElement("p",null,"This is the fun part where we get to dodge taxes and take advantage of every tax-deffered account available. Accounts are ranked in terms of advantages."),n.a.createElement("h3",null,"1. Health Savings Account (HSA)"),n.a.createElement("p",null,"HSAs are tax deductable, and earnings are tax-exempt. Withdrawals from a health savings account are tax-free as long you use the money to pay for qualified medical expenses. All you need are receipts of medical expenses from ",n.a.createElement("i",null,"any time period"),', so you can pay out-of-pocket for expenses now, save the receipt of your payment, and later withdraw money from your HSA to "pay" for that expense long after it\'s been paid. This makes them the best tax-advantaged account. They are offered through your employer, usually along with a high-deductable medical plan. The contribution limit is $3450 for 2018, and was $3400 for 2017.'),n.a.createElement("h3",null,"2. Individual Retirement Account (IRA)"),n.a.createElement("p",null,"IRAs come in two flavors, traditional and Roth. Traditional IRA contributions are tax-deductible, but withdrawals are taxed at ordinary income tax rates. Roth IRAs provide no tax break for contributions, but earnings and withdrawals are tax-free. For early retirees, Roth IRAs are the way to go because of the tax-free growth, which will be very high! The limit is $5500 towards all IRAs for 2018 and 2017. To",n.a.createElement(r.a,{href:"https://www.madfientist.com/traditional-ira-vs-roth-ira"}," withdraw money from your Roth without penalty"),",",n.a.createElement(r.a,{href:"https://rootofgood.com/roth-ira-conversion-ladder-early-retirement"}," Roth Laddering")," is possible if you know how much you want to withdraw 5 years in advance."),n.a.createElement("h3",null,"3. 401k"),n.a.createElement("p",null,"401k plans vary per-employer, but the gist is that you can contribute up to $18,000 of tax-deductable income per-year. Gains from the account are tax-deffered. 40% of employers do a 6% match on your contribution, but usually only up to 3% of your salary. 38% of employers do a 3% match (but also only up to 3% of your salary), which is a nice little added bonus. However,don't count on the employer match, especially since technicalities vary. If you're self-employed, a solo 401k also permits your business entity to contribute up to 25% of your salary to your 401k up to a total of $54,000. To withdraw money early without eating a 10% penalty,",n.a.createElement(r.a,{href:"http://www.gcbaonline.com/retirement/understanding-irs-72t-withdraws-rule-calculator"}," rule 72t "),"can be exercised."),n.a.createElement("h3",null,"4. Taxable account"),n.a.createElement("p",null,"If you're a savaholic, after your 401k your second largest account will unfortunately be a taxable account. Money put into the account is not tax-deffered, and gains are taxed as income. However, withdrawals have no penalty or restrictions (except for what your brokerage states)!"),n.a.createElement("h1",null,"Conclusion"),n.a.createElement("p",null,"If you want more control over the numbers, you can play around with",n.a.createElement(r.a,{href:"https://gist.github.com/thesmartwon/acab1443532c03f27accc04c254355f1"}," my (incomplete) simple Python program, "),"which is indeed an estimate. However, based on my actual tax returns so far it has proved to be accurate. I hope you realize retirement is closer than you think! Remember, your mileage may vary!"))}t.d(a,"default",function(){return E})},87:function(e,a,t){"use strict";var n=t(11);a.a=function(e){return n.a.createElement("a",{href:e.href,className:e.className},e.children)}},92:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n=function(e){return e.substr(0,1).toUpperCase()+e.substr(1,e.length-1)}}}]);
//# sourceMappingURL=component---src-posts-money-early-retirement-js-bf32b0866475f38b2ab5.js.map