import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpensItem.css";

const ExpensItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // let title = props.title;

  // const clickHandler = () => {
  //   console.log("Cliked!");
  //   setTitle("Updated!");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpensItem;
