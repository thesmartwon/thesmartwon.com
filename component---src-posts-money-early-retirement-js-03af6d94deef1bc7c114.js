(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,a){"use strict";var n=a(11),r=a(8),s=a.n(r),l=(a(91),a(89),a(99),a(100),a(39),a(87)),i=a(92),o=(a(106),function(e){var t=e.path.split("/").filter(function(e){return e});return(t=t.map(function(a){return function(e,t,a){var n="",r=t,s=Array.isArray(r),l=0;for(r=s?r:r[Symbol.iterator]();;){var o;if(s){if(l>=r.length)break;o=r[l++]}else{if((l=r.next()).done)break;o=l.value}if(n+="/"+o,e===o)break}return{name:Object(i.a)(e),path:n,isActive:n===a}}(a,t,e.path)})).unshift({name:"Home",path:"/",isActive:!1}),n.a.createElement("nav",{className:"breadcrumb is-marginless is-centered","aria-label":"breadcrumbs"},n.a.createElement("ul",null,t.map(function(e){return n.a.createElement("li",{key:e.name,className:e.isActive?"is-active":""},n.a.createElement(l.a,{href:e.path},e.name))})))});a(107);function c(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"column is-8 is-offset-2"},e.javascript&&n.a.createElement("noscript",{key:"noscript"},"Some things might not work because Javascript is disabled, but you aren't missing out on much."),n.a.createElement(o,{path:e.path}),n.a.createElement("div",{className:"section titles-section"},e.title,e.subtitle),e.children))}a.d(t,"a",function(){return c}),c.propTypes={title:s.a.node,subtitle:s.a.node,javascript:s.a.bool,children:s.a.node,path:s.a.string},c.defaultProps={javascript:!1}},121:function(e,t){e.exports={markdownRemark:{timeToRead:4,frontmatter:{title:"How to Retire Early",date:"2018-12-18 21:45:00 -0400",dateShort:"2018-12-18",dateLong:"Decemeber 18, 2018",javascript:!0},excerpt:"Brilliant, you'd like to quit your day job and do something more meaningful with your life. Now how do you do it?",fields:{slug:"/posts/money/early-retirement"}}}},74:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o}),a.d(t,"pageQuery",function(){return c});var n=a(11),r=a(8),s=a.n(r),l=a(88),i=a(105);function o(e){var t=e.data,a=e.children,r=t.markdownRemark,s=r.frontmatter,o=r.html,c=r.timeToRead,m=r.fields;return n.a.createElement(i.a,{title:n.a.createElement("h1",{className:"title is-2"},s.title),subtitle:n.a.createElement("span",{className:"has-text-grey"},n.a.createElement("time",{dateTime:s.dateShort},s.dateLong),"· ",c," min read"),javascript:s.javascript,path:m.slug},n.a.createElement(l.Helmet,{title:s.title,defer:!1}),a?n.a.createElement("div",{className:"content is-medium"},a):n.a.createElement("div",{className:"content is-medium",dangerouslySetInnerHTML:{__html:o}}))}o.propTypes={data:s.a.shape({markdownRemark:s.a.shape({html:s.a.string,timeToRead:s.a.number.isRequired,frontmatter:s.a.shape({title:s.a.string,dateShort:s.a.string,dateLong:s.a.string,javascript:s.a.bool}).isRequired,fields:s.a.shape({slug:s.a.string}).isRequired}).isRequired}).isRequired};var c="1304987295"},80:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(87),s=(a(109),a(39),a(32),a(45),a(110),a(112),a(91),a(117)),l=a.n(s),i=(a(118),a(119),function(e,t){return e>t?t:e}),o=function(e,t){return e>t?e:t},c=[.1,.12,.22,.24,.32,.25,.37],m={single:[0,9700,39475,84200,160725,204100,510300],married:[0,19400,78950,168400,321450,408200,612350],head:[0,13850,52850,84200,160700,204100,510300]},u={single:12200,married:24400,head:18350},h=function(e){return Object.values(e).reduce(function(e,t){return e+t})},d=function(e,t,a,n,r,s,l,d,p){for(var f=[],y=Object.assign({},p),E=h(y),b=function(a){var p=function(e,t,a){for(var n=0,r=e-u[t]-a.k401-a.hsa,s=m[t],l=1;l<s.length;l++){var o=i(r,s[l]-s[l-1]);r-=o,n+=o*c[l]}return n+.352*r}(e,s,d)+function(e,t){return.05499*(e-8750-t.hsa-t.k401)}(e,d),b=e-p-l,w={hsa:o(i(b,d.hsa),0),k401:o(i(b-d.hsa,d.k401)+e*r,0),ira:o(i(b-d.hsa-d.k401,d.ira),0),afterTax:o(b-d.hsa-d.k401-d.ira,0)},g={};Object.keys(y).forEach(function(e){g[e]=y[e]*n,y[e]+=g[e]}),Object.keys(w).forEach(function(e){return y[e]+=w[e]}),E=h(y),f.push({year:a,income:e,tax:p,accounts:Object.assign({},y),growth:g,contributions:w,total:E}),e*=1+t},w=(new Date).getFullYear();E*a<l;w++)b(w);return f},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={income:7e4,status:"single",expenses:24e3,desiredContributions:{hsa:3500,ira:6e3,k401:19e3},k401match:3,initialBalances:{hsa:0,ira:0,k401:0,afterTax:0},raise:2,safeWithdrawal:3.5,effectiveGrowth:7,showGains:!1,showContributions:!1,tabShown:1},a.setDesired=function(e,t){a.state.desiredContributions[e]=Number(t),a.setState({desiredContributions:a.state.desiredContributions})},a.setBalance=function(e,t){a.state.initialBalances[e]=Number(t),a.setState({initialBalances:a.state.initialBalances})},a.format=function(e){return Math.round(e/100)/10+"k"},a}return l()(t,e),t.prototype.render=function(){var e=this,t=d(this.state.income>1e4?this.state.income:1e4,this.state.raise/100,this.state.safeWithdrawal/100,this.state.effectiveGrowth/100,this.state.k401match/100,this.state.status,this.state.expenses,this.state.desiredContributions,this.state.initialBalances),a=0;t.forEach(function(e){return a+=Object.values(e.contributions).reduce(function(e,t){return e+t})});var s=t[t.length-1].total;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"tabs is-centered is-boxed"},n.a.createElement("ul",null,[{num:1,caption:"Taxes"},{num:2,caption:"Desired contributions"},{num:3,caption:"Initial balances"},{num:4,caption:"Assumptions"}].map(function(t){return n.a.createElement("li",{key:t.num,className:e.state.tabShown===t.num?"is-active":""},n.a.createElement("a",{onClick:function(){return e.setState({tabShown:t.num})}},t.caption))}))),1===this.state.tabShown&&n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Income"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-success",type:"number",step:"1000",value:this.state.income,onChange:function(t){return e.setState({income:Number(t.target.value)})}})),n.a.createElement("p",{className:"help"},"Your salary")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Expenses"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-danger",type:"number",step:"100",value:this.state.expenses,onChange:function(t){return e.setState({expenses:Number(t.target.value)})}})),n.a.createElement("p",{className:"help"},"This is the most important variable")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Status"),n.a.createElement("div",{className:"control select is-warning"},n.a.createElement("select",{onChange:function(t){return e.setState({status:t.target.value})}},Object.keys(m).map(function(t){return n.a.createElement("option",{value:t,key:t,selected:t===e.state.status},t)}))),n.a.createElement("p",{className:"help"},"Your federal tax status"))),2===this.state.tabShown&&n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"HSA"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.desiredContributions.hsa,onChange:function(t){return e.setDesired("hsa",t.target.value)}})),n.a.createElement("p",{className:"help"},"Desired HSA contribution")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"401k"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.desiredContributions.k401,onChange:function(t){return e.setDesired("k401",t.target.value)}})),n.a.createElement("p",{className:"help"},"Desired 401k contribution")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"401k Match"),n.a.createElement("div",{className:"control has-icons-right",style:{width:"7rem"}},n.a.createElement("input",{className:"input is-primary",type:"number",step:"1",value:this.state.k401match,onChange:function(t){return e.setState({k401match:Number(t.target.value)})}}),n.a.createElement("span",{className:"icon is-right"},n.a.createElement("i",null,"%"))),n.a.createElement("p",{className:"help"},"Employer's match"))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"IRA"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.desiredContributions.ira,onChange:function(t){return e.setDesired("ira",t.target.value)}})),n.a.createElement("p",{className:"help"},"Desired IRA contribution"))),3===this.state.tabShown&&n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"HSA"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.initialBalances.hsa,onChange:function(t){return e.setBalance("hsa",t.target.value)}})),n.a.createElement("p",{className:"help"},"Initial HSA balance")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"401k"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.initialBalances.k401,onChange:function(t){return e.setBalance("k401",t.target.value)}})),n.a.createElement("p",{className:"help"},"Initial 401k balance")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"IRA"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.initialBalances.ira,onChange:function(t){return e.setBalance("ira",t.target.value)}})),n.a.createElement("p",{className:"help"},"Initial IRA balance")),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"After tax"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"100",value:this.state.initialBalances.afterTax,onChange:function(t){return e.setBalance("afterTax",t.target.value)}})),n.a.createElement("p",{className:"help"},"Initial after tax accounts balance"))),4===this.state.tabShown&&n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Safe Withdrawal Rate"),n.a.createElement("div",{className:"control has-icons-right"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"0.25",value:this.state.safeWithdrawal,onChange:function(t){return e.setState({safeWithdrawal:Number(t.target.value)})}}),n.a.createElement("span",{className:"icon is-right"},n.a.createElement("i",null,"%"))),n.a.createElement("p",{className:"help"},n.a.createElement(r.a,{href:"https://www.madfientist.com/safe-withdrawal-rate/"},"Nest Egg * safeWithdrawal > Expenses"))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Effective Growth Rate"),n.a.createElement("div",{className:"control has-icons-right"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"0.5",value:this.state.effectiveGrowth,onChange:function(t){return e.setState({effectiveGrowth:Number(t.target.value)})}}),n.a.createElement("span",{className:"icon is-right"},n.a.createElement("i",null,"%"))),n.a.createElement("p",{className:"help"},n.a.createElement(r.a,{href:"https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"},"Average ","S&P"," 500 Growth")," -",n.a.createElement(r.a,{href:"https://tradingeconomics.com/united-states/inflation-cpi"}," Inflation"))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Raise Rate"),n.a.createElement("div",{className:"control has-icons-right"},n.a.createElement("input",{className:"input is-primary",type:"number",step:"0.5",value:this.state.raise,onChange:function(t){return e.setState({raise:Number(t.target.value)})}}),n.a.createElement("span",{className:"icon is-right"},n.a.createElement("i",null,"%"))),n.a.createElement("p",{className:"help"},"How fast you progress in your career"))),n.a.createElement("hr",null),n.a.createElement("table",{className:"table is-narrow is-fullwidth"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Year"),n.a.createElement("th",null,"Income"),n.a.createElement("th",null,"Tax"),n.a.createElement("th",null,"HSA"),n.a.createElement("th",null,"401k"),n.a.createElement("th",null,"IRA"),n.a.createElement("th",null,"After Tax"),n.a.createElement("th",null,"Nest Egg"))),n.a.createElement("tbody",null,t.map(function(t){return n.a.createElement("tr",{key:t.year},n.a.createElement("td",null,t.year),n.a.createElement("td",null,e.format(t.income)),n.a.createElement("td",null,e.format(t.tax)),n.a.createElement("td",null,e.format(t.accounts.hsa),e.state.showContributions&&n.a.createElement("span",{className:"tag is-success"},"+",e.format(t.contributions.hsa))),n.a.createElement("td",null,e.format(t.accounts.k401),e.state.showContributions&&n.a.createElement("span",{className:"tag is-success"},"+",e.format(t.contributions.k401)),e.state.showGains&&n.a.createElement("span",{className:"tag is-primary"},"+",e.format(t.growth.k401))),n.a.createElement("td",null,e.format(t.accounts.ira),e.state.showContributions&&n.a.createElement("span",{className:"tag is-success"},"+",e.format(t.contributions.ira)),e.state.showGains&&n.a.createElement("span",{className:"tag is-primary"},"+",e.format(t.growth.ira))),n.a.createElement("td",null,e.format(t.accounts.afterTax),e.state.showContributions&&n.a.createElement("span",{className:"tag is-success"},"+",e.format(t.contributions.afterTax)),e.state.showGains&&n.a.createElement("span",{className:"tag is-primary"},"+",e.format(t.growth.afterTax))),n.a.createElement("td",null,e.format(t.total)))}))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"control"},n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",checked:this.state.showGains,onChange:function(t){return e.setState({showGains:t.target.checked})}}),"Show gains")),n.a.createElement("div",{className:"control",style:{marginLeft:"1rem"}},n.a.createElement("label",{className:"checkbox"},n.a.createElement("input",{type:"checkbox",checked:this.state.showContributions,onChange:function(t){return e.setState({showContributions:t.target.checked})}}),"Show contributions"))),n.a.createElement("p",null,"In this situation, you have to save ",this.format(a)," over ",t.length," years. Yet, through the magic of compounding interest, when you retire you have"," "+this.format(s)," and can safely withdraw"," "+this.format(s*this.state.safeWithdrawal)," per year, which will meet your"," "+this.format(this.state.expenses)," of living expenses."))},t}(n.a.Component),f=a(74),y=a(121);function E(){return n.a.createElement(f.default,{data:{markdownRemark:y.markdownRemark}},n.a.createElement("p",null,"Brilliant, you'd like to quit your day job and do something more meaningful with your life. Now how do you do it?"),n.a.createElement("p",null,"Well, your investments need to make more money per year than your expenses. Great news: with just a $70k salary (",n.a.createElement(r.a,{href:"https://www.mrmoneymustache.com/2013/07/25/50-jobs-over-50000-without-a-degree-part-1"},"no college degree required"),") living off $24k a year it will take you approximately 11 years to retire even if you have nothing saved. Don't believe me? Let's do the math."),n.a.createElement(p,null),n.a.createElement("h2",null,"The Catch"),n.a.createElement("p",null,"The biggest catch is that you're betting on the US economy. Specifically, we are assuming on average a",n.a.createElement(r.a,{href:"https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"}," 10% growth per year "),"of the",n.a.createElement(r.a,{href:"https://www.tradingview.com/symbols/AMEX-SPY"}," ","S&P 500"," "),", which is an index that adjusts to follow the 500 largest U.S. publicly traded companies by market value."),n.a.createElement("h3",null,"$24k/year"),n.a.createElement("p",null,"This isn't an unrealistic budget,",n.a.createElement(r.a,{href:"https://www.mrmoneymustache.com/2017/05/19/2016-spending"}," even for a family of 4. "),n.a.createElement(r.a,{href:"https://rootofgood.com/developing-a-retirement-budget"}," Here's another testimony from a family of 5. "),"The best part about low spending is that you get to save more while you are working, and the total nest egg you have to save until gets smaller. It is the single most important factor in the entire equation and the easiest one for you to minimize. If you were to live off $34k/year instead, it would take 15 years and a nest egg of over $1mil to retire!"),n.a.createElement("p",null,"You need a budget. Frugality will pay off. If you have one particulary bad area of spending, as chef Ramsay says, [wake up!](https://www.youtube.com/watch?v=BsFeplo_6Pg)"),n.a.createElement("h2",null,"Smaller Catches"),"These estimates are really quite conservative. Historically, the US economy is the safest bet to make.",n.a.createElement("h3",null,"Safe withdrawal rate"),n.a.createElement("p",null,'This is the rate you can withdraw from your investments per-year for the entire rest of your life while feeling "safe" in nearly every market condition. The number 3.5% is based off of a',n.a.createElement(r.a,{href:"https://www.madfientist.com/safe-withdrawal-rate"}," 45 year time horizon. ")," To see actual chances of success, use a calculator like ",n.a.createElement(r.a,{href:"https://firecalc.com"},"FireCalc")," or",n.a.createElement(r.a,{href:"http://cfiresim.com"}," cFIREsim.")," If you're fashionably late to the party, simply adjust your time horizon to sooner and use a higher percentage such as 4% or 6%."),n.a.createElement("h3",null,"Inflation rate"),n.a.createElement("p",null,"To adjust for rising living expenses from inflation, we assume a high inflation rate of 3%. We calculate our investments growing at 7% instead of 10%. Actual inflation rates fluctuate, which you can view per-month",n.a.createElement(r.a,{href:"https://tradingeconomics.com/united-states/inflation-cpi"}," here.")),n.a.createElement("h2",null,"Retirement accounts"),n.a.createElement("p",null,"This is the fun part where we get to dodge taxes and take advantage of every tax-deffered account available. Accounts are ranked in terms of advantages."),n.a.createElement("h3",null,"1. Health Savings Account (HSA)"),n.a.createElement("p",null,"HSAs are tax deductable, and earnings are tax-exempt. Withdrawals from a health savings account are tax-free as long you use the money to pay for qualified medical expenses. All you need are receipts of medical expenses from ",n.a.createElement("i",null,"any time period"),', so you can pay out-of-pocket for expenses now, save the receipt of your payment, and later withdraw money from your HSA to "pay" for that expense long after it\'s been paid. This makes them the best tax-advantaged account. They are offered through your employer, usually along with a high-deductable medical plan. The contribution limit is $3450 for 2018, and was $3400 for 2017.'),n.a.createElement("h3",null,"2. Individual Retirement Account (IRA)"),n.a.createElement("p",null,"IRAs come in two flavors, traditional and Roth. Traditional IRA contributions are tax-deductible, but withdrawals are taxed at ordinary income tax rates. Roth IRAs provide no tax break for contributions, but earnings and withdrawals are tax-free. For early retirees, Roth IRAs are the way to go because of the tax-free growth, which will be very high! The limit is $5500 towards all IRAs for 2018 and 2017. To",n.a.createElement(r.a,{href:"https://www.madfientist.com/traditional-ira-vs-roth-ira"}," withdraw money from your Roth without penalty"),",",n.a.createElement(r.a,{href:"https://rootofgood.com/roth-ira-conversion-ladder-early-retirement"}," Roth Laddering")," is possible if you know how much you want to withdraw 5 years in advance."),n.a.createElement("h3",null,"3. 401k"),n.a.createElement("p",null,"401k plans vary per-employer, but the gist is that you can contribute up to $18,000 of tax-deductable income per-year. Gains from the account are tax-deffered. 40% of employers do a 6% match on your contribution, but usually only up to 3% of your salary. 38% of employers do a 3% match (but also only up to 3% of your salary), which is a nice little added bonus. However,don't count on the employer match, especially since technicalities vary. If you're self-employed, a solo 401k also permits your business entity to contribute up to 25% of your salary to your 401k up to a total of $54,000. To withdraw money early without eating a 10% penalty,",n.a.createElement(r.a,{href:"http://www.gcbaonline.com/retirement/understanding-irs-72t-withdraws-rule-calculator"}," rule 72t "),"can be exercised."),n.a.createElement("h3",null,"4. Taxable account"),n.a.createElement("p",null,"If you're a savaholic, after your 401k your second largest account will unfortunately be a taxable account. Money put into the account is not tax-deffered, and gains are taxed as income. However, withdrawals have no penalty or restrictions (except for what your brokerage states)!"),n.a.createElement("h1",null,"Conclusion"),n.a.createElement("p",null,"If you want more control over the numbers, you can play around with",n.a.createElement(r.a,{href:"https://gist.github.com/thesmartwon/acab1443532c03f27accc04c254355f1"}," my (incomplete) simple Python program, "),"which is indeed an estimate. However, based on my actual tax returns so far it has proved to be accurate. I hope you realize retirement is closer than you think! Remember, your mileage may vary!"))}a.d(t,"default",function(){return E})},87:function(e,t,a){"use strict";var n=a(11);t.a=function(e){return n.a.createElement("a",{href:e.href,className:e.className},e.children)}},92:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return e.substr(0,1).toUpperCase()+e.substr(1,e.length-1)}}}]);
//# sourceMappingURL=component---src-posts-money-early-retirement-js-03af6d94deef1bc7c114.js.map