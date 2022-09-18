import React from 'react';
import './App.css';
import Expenses from './Expenses/Expenses';
import NewExpense from './NewExpenses/NewExpense';

const fExpenses = [{
  id:'e1',
  title:'School Fees',
  amount:300,
  date: new Date(2022,3,14)
},
{
  id:'e2',
  title:'Rent Fees',
  amount:500,
  date: new Date(2022,3,16)
},
{
  id:'e3',
  title:'Food',
  amount:600,
  date: new Date(2022,3,1)
},
{
  id:'e4',
  title:' Car Emi',
  amount:250,
  date: new Date(2022,3,10)
}]


const App = () => {

  const [expenses , setExpenses] = React.useState(fExpenses)

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense , ...expenses];
    setExpenses(updatedExpense);
  }
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
