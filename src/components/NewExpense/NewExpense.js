import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      // this is the key:value pair of expenseData inside the submitHandler in ExpenseFrom
      ...enterdExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return <div className="new-expense">
    {/* pass around a pointer(saveExpenseDataHandler) at a function(onSaveExpenseData) */}
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>
};

export default NewExpense;