import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpanseCard from "./components/ExpanseCard";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <ExpanseCard />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
