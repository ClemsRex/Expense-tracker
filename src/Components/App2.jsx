import { useEffect, useState } from "react"
import React from 'react'
import Header from "./Header"
import Balance from "./Balance"
import IncomeExpense from "./IncomeExpense"
import ExpenseList from "./ExpenseList"
import AddExpense from "./AddExpense"

const All_EXPENSE = []

const App2 = () => {


    //useState for all Expenses
    const [expense, setexpense] = useState(All_EXPENSE)

    //function for add tasks 
    const Add_tasks =(e)=>{
        //created an id
        const id = Math.floor(Math.random()* 10000)
        //adding the id to tasks
        const newTask ={id, ...e}
        //console.log([...expense, newTask])
        setexpense([...expense, newTask])
    }

    //function for delete
    const Delete = (id)=>{
        //deletefunction with use state
        setexpense(expense.filter((e)=> e.id !== id))
    }

    // **** retriving the data from the localStorage **** //
    useEffect(() => {
        const retrive = localStorage.getItem("expense")
        const loading = JSON.parse(retrive)

        if(loading){
            setexpense(loading)
        }
    }, [])

    // **** this is how to set local storage **** //
    useEffect(() => {
        const storage = JSON.stringify(expense)
        localStorage.setItem("expense", storage)
    }, [expense])

  return (
    <>
      <Header />
      <div className="container">
        <Balance data={expense} />
        <IncomeExpense data3={expense} />
        <ExpenseList data2={expense} Delete_list={Delete}/>
        <AddExpense tasks={Add_tasks}/>
      </div>
    </>
  )
}

export default App2
