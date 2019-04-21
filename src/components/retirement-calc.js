import React from 'react'
import Link from '../components/link'
import './retirement-calc.scss'
import {fedTaxBrackets, projectRetirement} from '../helpers/retire'


export default class RetirementCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: 70000,
      status: 'single',
      expenses: 24000,
      desiredContributions: {
        hsa: 3500,
        ira: 6000,
        k401: 19000,
      },
      k401match: 3,
      initialBalances: {
        hsa: 0,
        ira: 0,
        k401: 0,
        afterTax: 0
      },
      raise: 2,
      safeWithdrawal: 3.5,
      effectiveGrowth: 7,
      showGains: false,
      showContributions: false,
      tabShown: 1
    }

    this.setDesired = (name, value) => {
      this.state.desiredContributions[name] = Number(value)
      this.setState({desiredContributions: this.state.desiredContributions})
    }

    this.setBalance = (name, value) => {
      this.state.initialBalances[name] = Number(value)
      this.setState({initialBalances: this.state.initialBalances})
    }

    this.format = num => {
      return Math.round(num / 100) / 10 + 'k'
    }
  }

  render() {
    const projection = projectRetirement(
      this.state.income,
      this.state.raise / 100,
      this.state.safeWithdrawal / 100,
      this.state.effectiveGrowth / 100,
      this.state.k401match / 100,
      this.state.status,
      this.state.expenses,
      this.state.desiredContributions,
      this.state.initialBalances
    )

    let totalSaved = 0
    projection.forEach(year => totalSaved += Object.values(year.contributions).reduce((a, b) => a + b))

    const finalNestEgg = projection[projection.length - 1].total

    const tabs = [
      {num: 1, caption: 'Taxes'},
      {num: 2, caption: 'Desired contributions'},
      {num: 3, caption: 'Initial balances'},
      {num: 4, caption: 'Assumptions'},
    ]

    return (
      <>
        <div className="tabs is-centered is-boxed">
          <ul>
            {tabs.map(tab => 
              <li
                key={tab.num}
                className={this.state.tabShown === tab.num ? 'is-active': ''}>
                <a onClick={() => this.setState({tabShown: tab.num})}>{tab.caption}</a>
              </li>
            )}
          </ul>
        </div>
        {this.state.tabShown === 1 && 
          <div className="field-body">
            <div className="field">
              <label className="label">Income</label>
              <div className="control">
                <input
                  className="input is-success"
                  type="number"
                  step="1000"
                  value={this.state.income}
                  onChange={event => this.setState({income: Number(event.target.value > 20000 ? event.target.value : 20000)})} />
              </div>
              <p className="help">Your salary</p>
            </div>
            <div className="field">
              <label className="label">Expenses</label>
              <div className="control">
                <input
                  className="input is-danger"
                  type="number"
                  step="100"
                  value={this.state.expenses}
                  onChange={event => this.setState({expenses: Number(event.target.value)})} />
              </div>
              <p className="help">This is the most important variable</p>
            </div>
            <div className="field">
              <label className="label">Status</label>
              <div className="control select is-warning">
                <select onChange={event => this.setState({status: event.target.value})}>
                  {Object.keys(fedTaxBrackets).map(key => (
                    <option value={key} key={key} selected={key === this.state.status}>{key}</option>
                  ))}
                </select>
              </div>
              <p className="help">Your federal tax status</p>
            </div>
        </div>}
        {this.state.tabShown === 2 && 
          <div className="field-body">
            <div className="field">
              <label className="label">HSA</label>
              <div className="control">
                <input
                  className="input is-primary"
                  type="number"
                  step="100"
                  value={this.state.desiredContributions.hsa}
                  onChange={event => this.setDesired('hsa', event.target.value)} />
              </div>
              <p className="help">Desired HSA contribution</p>
            </div>
            <div className="field is-grouped">
              <div className="field">
                <label className="label">401k</label>
                <div className="control">
                  <input
                    className="input is-primary"
                    type="number"
                    step="100"
                    value={this.state.desiredContributions.k401}
                    onChange={event => this.setDesired('k401', event.target.value)} />
                </div>
                <p className="help">Desired 401k contribution</p>
              </div>
              <div className="field">
                <label className="label">401k Match</label>
                <div className="control has-icons-right" style={{width: '7rem'}}>
                  <input
                    className="input is-primary"
                    type="number"
                    step="1"
                    value={this.state.k401match}
                    onChange={event => this.setState({k401match: Number(event.target.value)})} />
                  <span className="icon is-right">
                    <i>%</i>
                  </span>
                </div>
                <p className="help">Employer's match</p>
              </div>
            </div>
            <div className="field">
              <label className="label">IRA</label>
              <div className="control">
                <input
                  className="input is-primary"
                  type="number"
                  step="100"
                  value={this.state.desiredContributions.ira}
                  onChange={event => this.setDesired('ira', event.target.value)} />
              </div>
              <p className="help">Desired IRA contribution</p>
            </div>
          </div>}
        {this.state.tabShown === 3 && 
          <div className="field-body">
            <div className="field">
              <label className="label">HSA</label>
              <div className="control">
                <input
                  className="input is-primary"
                  type="number"
                  step="100"
                  value={this.state.initialBalances.hsa}
                  onChange={event => this.setBalance('hsa', event.target.value)} />
              </div>
              <p className="help">Initial HSA balance</p>
            </div>
            <div className="field">
              <label className="label">401k</label>
              <div className="control">
                <input
                  className="input is-primary"
                  type="number"
                  step="100"
                  value={this.state.initialBalances.k401}
                  onChange={event => this.setBalance('k401', event.target.value)} />
              </div>
              <p className="help">Initial 401k balance</p>
            </div>
            <div className="field">
              <label className="label">IRA</label>
              <div className="control">
                <input
                  className="input is-primary"
                  type="number"
                  step="100"
                  value={this.state.initialBalances.ira}
                  onChange={event => this.setBalance('ira', event.target.value)} />
              </div>
              <p className="help">Initial IRA balance</p>
            </div>
            <div className="field">
              <label className="label">After tax</label>
              <div className="control">
                <input
                  className="input is-primary"
                  type="number"
                  step="100"
                  value={this.state.initialBalances.afterTax}
                  onChange={event => this.setBalance('afterTax', event.target.value)} />
              </div>
              <p className="help">Initial after tax accounts balance</p>
            </div>
          </div>}
        {this.state.tabShown === 4 && 
          <div className="field-body">
              <div className="field">
                <label className="label">Safe Withdrawal Rate</label>
                <div className="control has-icons-right">
                  <input
                    className="input is-primary"
                    type="number"
                    step="0.25"
                    value={this.state.safeWithdrawal}
                    onChange={event => this.setState({safeWithdrawal: Number(event.target.value)})} />
                  <span className="icon is-right">
                    <i>%</i>
                  </span>
                </div>
                <p className="help"><Link href="https://www.madfientist.com/safe-withdrawal-rate/">Nest Egg * safeWithdrawal > Expenses</Link></p>
              </div>
              <div className="field">
                <label className="label">Effective Growth Rate</label>
                <div className="control has-icons-right">
                  <input
                    className="input is-primary"
                    type="number"
                    step="0.5"
                    value={this.state.effectiveGrowth}
                    onChange={event => this.setState({effectiveGrowth: Number(event.target.value)})} />
                  <span className="icon is-right">
                    <i>%</i>
                  </span>
                </div>
                <p className="help">
                  <Link href="https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp">Average {'S&P'} 500 Growth</Link> -
                  <Link href="https://tradingeconomics.com/united-states/inflation-cpi"> Inflation</Link>
                </p>
              </div>
              <div className="field">
                <label className="label">Raise Rate</label>
                <div className="control has-icons-right">
                  <input
                    className="input is-primary"
                    type="number"
                    step="0.5"
                    value={this.state.raise}
                    onChange={event => this.setState({raise: Number(event.target.value)})} />
                  <span className="icon is-right">
                    <i>%</i>
                  </span>
                </div>
                <p className="help">How fast you progress in your career</p>
              </div>
          </div>}
        <hr />
        <table className="table is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>Year</th>
              <th>Income</th>
              <th>Tax</th>
              <th>HSA</th>
              <th>401k</th>
              <th>IRA</th>
              <th>After Tax</th>
              <th>Nest Egg</th>
            </tr>
          </thead>
          <tbody>
            {projection.map(year => (
              <tr key={year.year}>
                <td>{year.year}</td>
                <td>{this.format(year.income)}</td>
                <td>{this.format(year.tax)}</td>
                <td>{this.format(year.accounts.hsa)}
                  {this.state.showContributions &&
                    <span className="tag is-success">+{this.format(year.contributions.hsa)}</span>}
                  {/* <span className="tag is-primary">+{this.format(year.growth.hsa)}</span> */}
                </td>
                <td>{this.format(year.accounts.k401)}
                  {this.state.showContributions &&
                    <span className="tag is-success">+{this.format(year.contributions.k401)}</span>}
                  {this.state.showGains &&
                    <span className="tag is-primary">+{this.format(year.growth.k401)}</span>}
                </td>
                <td>{this.format(year.accounts.ira)}
                  {this.state.showContributions &&
                    <span className="tag is-success">+{this.format(year.contributions.ira)}</span>}
                  {this.state.showGains &&
                    <span className="tag is-primary">+{this.format(year.growth.ira)}</span>}
                </td>
                <td>{this.format(year.accounts.afterTax)}
                  {this.state.showContributions &&
                    <span className="tag is-success">+{this.format(year.contributions.afterTax)}</span>}
                  {this.state.showGains &&
                    <span className="tag is-primary">+{this.format(year.growth.afterTax)}</span>}
                </td>
                <td>{this.format(year.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="field is-horizontal">
          <div className="control">
            <label className="checkbox">
            <input type="checkbox"
                checked={this.state.showGains}
                onChange={event => this.setState({showGains: event.target.checked})} />
              Show gains
            </label>
          </div>
          <div className="control" style={{marginLeft: '1rem'}}>
            <label className="checkbox">
              <input type="checkbox"
                checked={this.state.showContributions}
                onChange={event => this.setState({showContributions: event.target.checked})} />
              Show contributions
            </label>
          </div>
        </div>
        <p>
          In this situation, you have to save {this.format(totalSaved)} over {projection.length} years.
          Yet, through the magic of compounding interest, when you retire you have
          {' ' + this.format(finalNestEgg)} and can safely withdraw
          {' ' + this.format(finalNestEgg * this.state.safeWithdrawal)} per year, which will meet your
          {' ' + this.format(this.state.expenses)} of living expenses.
        </p>
      </>
    );
  }
}
