import { useState, useEffect } from "react";

import Expenses from "components/Expenses/Expenses";
import NewExpense from "components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "155.15",
    date: new Date(2021, 5, 18),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: "15.45",
    date: new Date(2019, 2, 28),
  },
  {
    id: "e3",
    title: "Apples",
    amount: "1.5",
    date: new Date(2022, 1, 14),
  },
  {
    id: "e4",
    title: "Car Washing",
    amount: "155",
    date: new Date(2022, 4, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>


      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
