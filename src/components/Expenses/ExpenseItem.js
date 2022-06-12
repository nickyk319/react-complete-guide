import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  // if a function will be triggered by an event, we need to name our function Handler
  const clickHandler = () => {
    setTitle('Updated!')
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* just pass a pointer as a value to onClick, React will memorize this and executes the function whenever the click occurs */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
