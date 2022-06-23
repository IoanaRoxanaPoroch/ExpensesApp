import { useState } from "react";

import ExpensesFilter from "components/ExpensesProcessing/ExpensesFilter";
import Card from "components/UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = ({ items }) => {
  const [yearSelected, setYearSelected] = useState("2020");

  const FilterExpensesByYear = (selectedYear) => {
    setYearSelected(selectedYear);
  };

  const filtredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === yearSelected
  );
  console.log("filtredExpenses", filtredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterByYear={FilterExpensesByYear}
          selected={yearSelected}
        />

        <ExpensesChart expenses={filtredExpenses} />

        <ExpensesList items={filtredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
