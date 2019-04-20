const min = (a, b) => a > b ? b : a
const max = (a, b) => a > b ? a : b
// Taxes
const fedTaxRate = [.1,  .12,    .22,    .24,    .32,     .25,      .37]
export const fedTaxBrackets = {
  single:  [ 0,  9700,   39475,  84200,  160725,   204100,   510300],
  married: [ 0,  19400,  78950,  168400, 321450,   408200,   612350],
  head:    [ 0,  13850,  52850,  84200,  160700,   204100,   510300]
}

export const standardDeductions = {
  single:   12200,
  married:  24400,
  head:     18350
}

// https://www.irs.gov/pub/irs-pdf/f1040.pdf
export const calcFedTax = (income, status, contributions) => {
  let incomeTax = 0

  let agi = income - standardDeductions[status] - contributions.k401 - contributions.hsa

  const bracket = fedTaxBrackets[status]
  for (let i = 1; i < bracket.length; i++) {
    const taxed = min(agi, bracket[i] - bracket[i - 1])
    agi -= taxed
    incomeTax += taxed * fedTaxRate[i]
  }

  // Social security tax: .062, medicare tax: .029
  return incomeTax + agi * (.062 + 0.29)
}

// https://files.nc.gov/ncdor/documents/files/2018_d-401_instruction_booklet.pdf
export const calcStateTax = (agi, contributions) => {
  return (agi - 8750 - contributions.hsa - contributions.k401) * 0.05499
}

const addValues = accounts => Object.values(accounts)
  .reduce((a, b) => a + b)

// {year, income, tax, hsa, ira, k401, after, total}
export const projectRetirement = (
  income,
  raise,
  safeWithdrawal,
  effectiveGrowth,
  status,
  expenses,
  desiredContributions,
  initialBalances
) => {
  let res = []
  let accounts = Object.assign({}, initialBalances)
  let total = addValues(accounts)

  for (let year = new Date().getFullYear(); total * safeWithdrawal < expenses; year++) {
    const tax = calcFedTax(income, status, desiredContributions) +
                calcStateTax(income, desiredContributions)
    const toInvest = income - tax - expenses

    const contributions = {
      hsa: max(min(toInvest, desiredContributions.hsa), 0),
      k401: max(min(toInvest - desiredContributions.hsa, desiredContributions.k401), 0),
      ira: max(min(toInvest - desiredContributions.hsa - desiredContributions.k401, desiredContributions.ira), 0),
      afterTax: max(toInvest - desiredContributions.hsa - desiredContributions.k401 - desiredContributions.ira, 0)
    }

    const growth = {}
    Object.keys(accounts).forEach(key => {
      growth[key] = accounts[key] * effectiveGrowth
      accounts[key] += growth[key]
    })
    
    Object.keys(contributions)
      .forEach(key => accounts[key] += contributions[key])


    total = addValues(accounts)

    res.push({
      year,
      income,
      tax,
      accounts: Object.assign({}, accounts),
      growth,
      contributions,
      total
    })
    income *= 1.0 + raise
  }

  return res
}
