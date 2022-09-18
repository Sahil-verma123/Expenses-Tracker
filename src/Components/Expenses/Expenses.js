import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {
        props.expenses.map((finalData) => (
          <ExpenseItem
            date={finalData.date}
            title={finalData.title}
            amount={finalData.amount}
          />
        ))
      }
    </Card>
  );
};

export default Expenses;
