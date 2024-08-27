import React from 'react'

const IncomeExpense = ({data3}) => {

    //mapping through the props 
    const amounts = data3.map((e) => e.amount)

    //calculating the incomw adding all the positive numbers 
    const income = amounts.filter((e) => e > 0).reduce((acc, item) => (acc += parseInt(item)),0).toFixed(2)

    //adding all the negative numbers
    const expense = (amounts.filter((e) => e < 0 ).reduce((acc, item) => (acc += parseInt(item)),0)* -1).toFixed(2)


  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">&#8358;{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">&#8358;{expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense
