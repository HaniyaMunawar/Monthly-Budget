import { useState, useEffect } from "react";
import "./App.css";
import Auth from "./Components/Auth.jsx";
import Navbar from "./Components/Navbar.jsx";
import ExpenseForm from "./Components/ExpenseForm.jsx";
import ExpenseList from "./Components/ExpenseList.jsx";
import Footer from "./Components/Footer.jsx";
import Color from "./Components/Color.jsx";

 function App() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem("transactions");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now(),
      date: new Date().toLocaleString("en-US", { weekday: "short", day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    };
    setTransactions(prev => [...prev, newTransaction]);
  };
  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };
  const editTransaction = (id, newAmount, newCategory) => {
    setTransactions(prev =>
      prev.map(t => t.id === id ? { ...t, amount: Number(newAmount), category: newCategory } : t)
    );
  };
  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expenses = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);
  const savings = income - expenses;
  if (!user) return <Auth onLogin={setUser} />;
  return (
    
    <div style={{background: "#f0f0f0", minHeight: "100vh", fontFamily: "Franklin Gothic Medium, 'Arial Narrow', Arial, sans-serif" }}>
      <Navbar user={user} />
      <div className="dashboard" style={{display: "grid", gap: 20, padding: 20}}>
        <div style={{display: "flex", flexDirection: "column", gap: 20}}>
          <Color income={income} expenses={expenses} savings={savings} />
          <ExpenseForm onAdd={addTransaction} />
        </div>
        <div>
          <ExpenseList
            transactions={transactions}
            onDelete={deleteTransaction}
            onEdit={editTransaction}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;