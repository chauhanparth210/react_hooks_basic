import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      Cash{" "}
      <span>
        {transaction.amount < 0 ? "-" : "+"}
        {Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
