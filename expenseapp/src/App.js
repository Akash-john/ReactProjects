import { useState } from "react";
import "./App.css";

import Expense from "./components/Expense/Expense";
import NewExpense from "./components/New Expense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "House Rent",
    amount: 300,
    date: new Date(2021, 3, 22),
  },
  {
    id: "e2",
    title: "Mobile bill",
    amount: 300,
    date: new Date(2019, 4, 23),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 300,
    date: new Date(2020, 5, 24),
  },
  {
    id: "e4",
    title: "Petrol",
    amount: 300,
    date: new Date(2021, 7, 25),
  },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);

  const addNewExpenseData = (expenses) => {
    setExpense((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense addNewExpenseData={addNewExpenseData} />

      <Expense item={expense} />
    </div>
  );
}

export default App;
