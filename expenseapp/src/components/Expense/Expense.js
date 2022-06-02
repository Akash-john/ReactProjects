import React, { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (val) => {
    setFilteredYear(val);
  };

  const filteredExpenses = props.item.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  // .filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  // let expenseContent = <p>No Records Found...!</p>;

  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expenses) => (
  //     <ExpenseItem
  //       key={expenses.id}
  //       title={expenses.title}
  //       amount={expenses.amount}
  //       date={expenses.date}
  //     />
  //   ));
  // }

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          filterHandler={filterChangeHandler}
          filterValue={filteredYear}
        />
        <ExpenseChart expense={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expense;
