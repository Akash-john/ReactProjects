import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = (
    <p className="expenses-list__fallback">No Records Found...!</p>
  );

  if (props.item.length > 0) {
    expenseContent = props.item.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }
  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpenseList;
