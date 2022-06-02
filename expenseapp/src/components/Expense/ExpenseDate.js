import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ Dte }) => {
  const month = Dte.toLocaleString("en-Us", { month: "long" });
  const day = Dte.toLocaleString("en-Us", { day: "2-digit" });
  const year = Dte.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;