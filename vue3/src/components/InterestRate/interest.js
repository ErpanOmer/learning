// 手机支付手续费
const PHONE_PAY_INTEREST_RATE = 0.38
// 信用卡支付手续费
const CARD_PAY_INTEREST_RATE = 0.60
// 某宝七日年化利率
const ANNUALIZED_INTEREST_RATE = 2

// 计算函数
export default function compute (amount = 10000, day = 56) {
  // 手机支付日利率
  const phoneDayRate = PHONE_PAY_INTEREST_RATE / day

  // 信用卡支付日利率
  const CardDayRate = CARD_PAY_INTEREST_RATE / day

  // 日年化利率
  const dayRate = ANNUALIZED_INTEREST_RATE / 365

  const fn = (pow = 1) => {
    return amount * Math.pow((1 + (dayRate / 100)), pow) - amount
  }

  const fnn = (pow = 1) => {
    return (Math.pow((1 + dayRate / 100), pow) - 1) * 100
  }

  let test = {
    '金额': {
      '手机支付': amount,
      '信用卡支付': amount
    },
    '最长免息期': {
      '手机支付': day,
      '信用卡支付': day
    },
    '': {},
    [`日利率`]: {
      '手机支付': `${phoneDayRate.toFixed(3)}%`,
      '信用卡支付': `${CardDayRate.toFixed(3)}%`,
    },
    [`日利息`]: {
      '手机支付': Number(`${(amount * phoneDayRate / 100).toFixed(3)}`),
      '信用卡支付': Number(`${(amount * CardDayRate / 100).toFixed(3)}`),
    },
    [`日收益率`]: {
      '手机支付': `${dayRate.toFixed(3)}%`,
      '信用卡支付': `${dayRate.toFixed(3)}%`,
    },
    [`日收益`]: {
      '手机支付': Number(`${fn().toFixed(3)}`),
      '信用卡支付': Number(`${fn().toFixed(3)}`),
    },
    ' ': {},
    [`月利率`]: {
      '手机支付': `${(phoneDayRate * day).toFixed(3)}%`,
      '信用卡支付': `${(CardDayRate * day).toFixed(3)}%`,
    },
    [`月利息`]: {
      '手机支付': Number(`${(amount * phoneDayRate * day / 100).toFixed(3)}`),
      '信用卡支付': Number(`${(amount * CardDayRate * day / 100).toFixed(3)}`),
    },
    [`月收益率`]: {
      '手机支付': `${fnn(day).toFixed(3)}%`,
      '信用卡支付': `${fnn(day).toFixed(3)}%`,
    },
    [`月收益`]: {
      '手机支付': Number(`${fn(day).toFixed(3)}`),
      '信用卡支付': Number(`${fn(day).toFixed(3)}`),
    },
    '  ': {},
    [`年利率`]: {
      '手机支付': `${(phoneDayRate * 365).toFixed(3)}%`,
      '信用卡支付': `${(CardDayRate * 365).toFixed(3)}%`,
    },
    [`年利息`]: {
      '手机支付': Number(`${(amount * phoneDayRate * 365 / 100).toFixed(3)}`),
      '信用卡支付': Number(`${(amount * CardDayRate * 365 / 100).toFixed(3)}`),
    },
    [`年收益率`]: {
      '手机支付': `${fnn(365).toFixed(3)}%`,
      '信用卡支付': `${fnn(365).toFixed(3)}%`,
    },
    [`年收益`]: {
      '手机支付': Number(`${fn(365).toFixed(3)}`),
      '信用卡支付': Number(`${fn(365).toFixed(3)}`),
    },
  }

  test = {
    ...test,
    '   ': {},
    [`日收益利息对冲差`]: {
      '手机支付': Number(`${(test[`日利息`]['手机支付'] - fn()).toFixed(3)}`),
      '信用卡支付': Number(`${(test[`日利息`]['信用卡支付'] - fn()).toFixed(3)}`),
    },
    [`日收益利息对冲利率`]: {
      '手机支付': `${((test[`日利率`]['手机支付']).replace('%', '') - (fn() / amount * 100)).toFixed(3)}%`,
      '信用卡支付':  `${((test[`日利率`]['信用卡支付']).replace('%', '') - (fn() / amount * 100)).toFixed(3)}%`,
    },
    '    ': {},
    [`月收益利息对冲差`]: {
      '手机支付': Number(`${(test[`月利息`]['手机支付'] - fn(day)).toFixed(3)}`),
      '信用卡支付': Number(`${(test[`月利息`]['信用卡支付'] - fn(day)).toFixed(3)}`),
    },
    [`月收益利息对冲利率`]: {
      '手机支付': `${((test[`月利率`]['手机支付']).replace('%', '') - (fn(day) / amount * 100)).toFixed(3)}%`,
      '信用卡支付':  `${((test[`月利率`]['信用卡支付']).replace('%', '') - (fn(day) / amount * 100)).toFixed(3)}%`,
    },
    '     ': {},
    [`年收益利息对冲差`]: {
      '手机支付': Number(`${(test[`年利息`]['手机支付'] - fn(365)).toFixed(3)}`),
      '信用卡支付': Number(`${(test[`年利息`]['信用卡支付'] - fn(365)).toFixed(3)}`),
    },
    [`年收益利息对冲利率`]: {
      '手机支付': `${((test[`年利率`]['手机支付']).replace('%', '') - (fn(365) / amount * 100)).toFixed(3)}%`,
      '信用卡支付':  `${((test[`年利率`]['信用卡支付']).replace('%', '') - (fn(365) / amount * 100)).toFixed(3)}%`,
    }
  }
  
  return test
}