import React from 'react'

const Balance = ({data}) => {

    //mapping through the props 
    const amounts = data.map((e) => e.amount)

    //calculating total buy adding all positive number and approximate it to 2 decimal places
    const total = amounts.reduce((acc,item) =>(acc += parseInt(item)), 0).toFixed(2)

    
  return (
    <>
      <h4>Your Balance</h4>
      <h1>&#8358;{total}</h1>
    </>
  )
}

export default Balance
