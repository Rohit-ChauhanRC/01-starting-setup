// import Expenses from "./components/Expenses/Expenses";
// import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 4, 12),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 204.67,
      date: new Date(2022, 5, 19),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 194.67,
      date: new Date(2022, 6, 20),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 124.67,
      date: new Date(2022, 7, 29),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
