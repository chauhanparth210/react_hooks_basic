import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmitHandler(e) {
    e.preventDefault();
    const newTransaction = {
      text: transactionName,
      amount: +amount,
      id: uuidv4(),
    };
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form action="false">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            onChange={(e) => setTransactionName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" onClick={onSubmitHandler}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
