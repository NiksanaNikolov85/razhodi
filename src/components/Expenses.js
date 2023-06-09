import React , {useState} from "react";
import ExpenseFilter from './NewExpense/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './NewExpense/ExpensesChart';
import ExpensesChart1 from './NewExpense/ExpensesChart1';
import Card from '../UI/Card';
import "./Expenses.css";


const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterExpanses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    
  return (
    <div>
      <Card className={"expenses"}>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <div className={"exp"}>Expenses</div>
              <ExpensesChart1 expenses={filterExpanses}/>
              <ExpensesList items={filterExpanses}/>
    </Card>
     </div>
  );
};

export default Expenses;
