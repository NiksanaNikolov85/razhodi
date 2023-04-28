import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
    const dropDownChange = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropDownChange}>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;