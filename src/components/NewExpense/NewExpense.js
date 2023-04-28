import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
   const [isEditing, setIsEditinig] = useState(true);
    const NewExpense = (param) => {
        const expenseData = {
            ...param,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditinig(true)
    }

    const startEditing = () => {
        setIsEditinig(false)
    }

    const stoptEditing = () => {
        setIsEditinig(true)
    }

   
    let button = <button type="submit" onClick={startEditing} >ENTER EXPENSE</button>
    return (
        <div className="new-expense">
            {!isEditing ? <ExpenseForm onSaveExpenseData={NewExpense} onCancel={stoptEditing} />
            : button} 
            <div>New Expense</div>
        </div>
    )
}


export default NewExpense;
