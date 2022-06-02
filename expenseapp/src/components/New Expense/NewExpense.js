import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addNewExpenseData }) => {
  const [isShowForm, setIsShowForm] = useState(false);

  const saveNewExpenseData = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    addNewExpenseData(expenseData);
  };

  const startHandlingFuncton = () => {
    setIsShowForm(true);
  };

  const stopHandlingFunction = () => {
    setIsShowForm(false);
  };

  return (
    <div className="new-expense">
      {!isShowForm && (
        <button type="button" onClick={startHandlingFuncton}>
          Add new Expense
        </button>
      )}
      {isShowForm && (
        <ExpenseForm
          NewExpenseData={saveNewExpenseData}
          onCancel={stopHandlingFunction}
        />
      )}
    </div>
  );
};

export default NewExpense;
