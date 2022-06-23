import { nanoid } from "nanoid";
import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const saveExpenseDataHandler = (eneterdExpanseData) => {
    const expenseData = { ...eneterdExpanseData, id: nanoid() };

    onAddExpense(expenseData);

    setIsVisibleForm(false);
  };

  const onClickDisplayAddForm = () => {
    setIsVisibleForm(true);
  };

  const changeDisplayAddButton = () => {
    setIsVisibleForm(false);
  };

  return (
    <div className="new-expense">
      {!isVisibleForm && (
        <button onClick={onClickDisplayAddForm}>Add New Expenses</button>
      )}
      {isVisibleForm && (
        <ExpenseForm
          onClickDisplayAddButton={changeDisplayAddButton}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
